import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { contentData } from '../src/js/data/contentData.js';
import {
  getSlideTemplateDefinition,
  isKnownPathId,
  isKnownTemplateId,
  isKnownThemeId,
  normaliseTemplateId,
} from '../src/js/slides/registry.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const publicRoot = path.join(repoRoot, 'Public');
const slideDataRoot = path.join(publicRoot, 'assets/slides/data');
const deckRoot = path.join(publicRoot, 'assets/slides/decks');

const forbiddenKeys = new Set([
  'html',
  'rawHtml',
  'raw_html',
  'innerHTML',
  'script',
  'scripts',
  'javascript',
  'js',
  'css',
  'style',
  'styles',
]);

const errors = [];
const warnings = [];
const legacyRefs = new Set();
const deckRefs = new Set();

validateContentData();
validateDeckFiles();
validateSlideDataFiles();

if (warnings.length > 0) {
  console.warn(warnings.map((warning) => `Warning: ${warning}`).join('\n'));
}

if (errors.length > 0) {
  console.error(errors.map((error) => `Error: ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Slide validation passed.');
}

function validateContentData() {
  contentData.forEach((entry, slideshowIndex) => {
    if (slideshowIndex === 0) return;

    if (Array.isArray(entry)) {
      validateContentArray(entry, slideshowIndex, `contentData[${slideshowIndex}]`);
      return;
    }

    if (entry && typeof entry === 'object' && entry.deck) {
      validateDeckRef(entry.deck, `contentData[${slideshowIndex}]`);
      return;
    }

    errors.push(`contentData[${slideshowIndex}] must be an array or { deck } reference.`);
  });
}

function validateContentArray(items, slideshowIndex, context) {
  items.forEach((item, index) => {
    const itemContext = `${context}[${index}]`;
    if (Array.isArray(item)) {
      validateContentArray(item, slideshowIndex, itemContext);
      return;
    }

    if (typeof item === 'string') {
      validateLegacyRef(slideshowIndex, item);
      return;
    }

    if (item && typeof item === 'object' && item.deck) {
      validateDeckRef(item.deck, itemContext);
      return;
    }

    if (item && typeof item === 'object' && Number.isInteger(item.legacy)) {
      validateLegacyImport(item.legacy, itemContext);
      return;
    }

    errors.push(`${itemContext} must be a legacy slide ref, nested slide array, { deck }, or { legacy } reference.`);
  });
}

function validateLegacyImport(slideshowIndex, context) {
  const definition = contentData[slideshowIndex];
  if (!Array.isArray(definition)) {
    errors.push(`${context} references contentData[${slideshowIndex}], which is not a legacy slide array.`);
    return;
  }

  flatten(definition).forEach((slideRef) => validateLegacyRef(slideshowIndex, slideRef));
}

function validateLegacyRef(slideshowIndex, slideRef) {
  if (typeof slideRef !== 'string') {
    errors.push(`contentData[${slideshowIndex}] contains a non-string legacy slide ref.`);
    return;
  }

  legacyRefs.add(`${slideshowIndex}/${slideRef}`);
  const basePath = path.join(slideDataRoot, String(slideshowIndex), slideRef);
  checkExists(`${basePath}.html`, `missing legacy slide ${slideshowIndex}/${slideRef}.html`);

  if (slideRef.includes('c')) {
    checkExists(`${basePath}.css`, `missing legacy slide CSS ${slideshowIndex}/${slideRef}.css`);
  }

  if (slideRef.includes('j')) {
    checkExists(`${basePath}.js`, `missing legacy slide JS ${slideshowIndex}/${slideRef}.js`);
  }
}

function validateDeckRef(deckId, context) {
  deckRefs.add(deckId);
  const deckPath = path.join(deckRoot, `${deckId}.json`);
  if (!checkExists(deckPath, `${context} references missing deck ${deckId}.json`)) return;

  let deck;
  try {
    deck = JSON.parse(fs.readFileSync(deckPath, 'utf8'));
  } catch (error) {
    errors.push(`${deckId}.json is invalid JSON: ${error.message}`);
    return;
  }

  if (!deck || typeof deck !== 'object') {
    errors.push(`${deckId}.json must contain an object.`);
    return;
  }
  if (!deck.id) errors.push(`${deckId}.json is missing id.`);
  if (deck.theme && !isKnownThemeId(deck.theme)) {
    errors.push(`${deckId}.json uses unknown theme "${deck.theme}".`);
  }
  if (deck.path && !isKnownPathId(deck.path)) {
    errors.push(`${deckId}.json uses unknown path "${deck.path}".`);
  }
  if (deck.theme && deck.path && ['gut', 'heart', 'head'].includes(deck.theme) && deck.theme !== deck.path) {
    warnings.push(`${deckId}.json theme "${deck.theme}" does not match path "${deck.path}".`);
  }
  if (!Array.isArray(deck.slides) || deck.slides.length === 0) {
    errors.push(`${deckId}.json must contain a non-empty slides array.`);
    return;
  }

  deck.slides.forEach((slide, index) => validateDeckSlide(slide, `${deckId}.slides[${index}]`, deck));
}

function validateDeckFiles() {
  if (!fs.existsSync(deckRoot)) return;

  fs.readdirSync(deckRoot)
    .filter((entry) => entry.endsWith('.json'))
    .sort()
    .forEach((entry) => {
      const deckId = entry.replace(/\.json$/, '');
      if (!deckRefs.has(deckId)) {
        validateDeckRef(deckId, `deck file ${entry}`);
      }
    });
}

function validateDeckSlide(slide, context, deck = {}) {
  if (Array.isArray(slide)) {
    if (slide.length === 0) errors.push(`${context} is an empty subslide array.`);
    slide.forEach((subslide, index) => validateDeckSlide(subslide, `${context}[${index}]`, deck));
    return;
  }

  if (!slide || typeof slide !== 'object') {
    errors.push(`${context} must be a slide object.`);
    return;
  }

  validateForbiddenKeys(slide, context);

  if (!isKnownTemplateId(slide.template)) {
    errors.push(`${context} uses unknown template "${slide.template}".`);
  } else {
    validateTemplateContract(slide, context);
  }

  if (slide.theme && !isKnownThemeId(slide.theme)) {
    errors.push(`${context} uses unknown theme "${slide.theme}".`);
  }
  if (slide.path && !isKnownPathId(slide.path)) {
    errors.push(`${context} uses unknown path "${slide.path}".`);
  }
  if (slide.theme && deck.path && ['gut', 'heart', 'head'].includes(slide.theme) && slide.theme !== deck.path) {
    warnings.push(`${context} theme "${slide.theme}" overrides deck path "${deck.path}".`);
  }

  collectAssetRefs(slide).forEach((assetRef) => validateAssetRef(assetRef, context));
}

function validateTemplateContract(slide, context) {
  const templateId = normaliseTemplateId(slide.template);
  const definition = getSlideTemplateDefinition(templateId);
  const requiredAny = definition?.requiredAny || [];

  if (requiredAny.length > 0 && !requiredAny.some((field) => hasField(slide, field))) {
    errors.push(`${context} (${templateId}) must define one of: ${requiredAny.join(', ')}.`);
  }

  Object.entries(definition?.maxItems || {}).forEach(([field, max]) => {
    const count = fieldCount(slide, field);
    if (count > max) {
      errors.push(`${context} (${templateId}) has ${count} "${field}" entries; max is ${max}.`);
    }
  });

  if (templateId === 'table') {
    const headers = slide.headers || slide.table?.headers || [];
    const rows = slide.rows || slide.table?.rows || [];
    if (!Array.isArray(rows) || rows.length === 0) {
      errors.push(`${context} (table) must define rows[] or table.rows[].`);
    }
    if (headers.length > 5) errors.push(`${context} (table) has ${headers.length} headers; max is 5.`);
    rows.forEach((row, index) => {
      const cells = Array.isArray(row) ? row : row?.cells || [];
      if (!Array.isArray(cells)) errors.push(`${context} (table) row ${index} must be an array or { cells }.`);
      if (Array.isArray(cells) && cells.length > 5) errors.push(`${context} (table) row ${index} has ${cells.length} cells; max is 5.`);
    });
  }

  if (templateId === 'legacy-slide') {
    validateLegacySlideTemplate(slide, context);
  }

  if (templateId === 'custom') {
    validateCustomSlideTemplate(slide, context);
  }
}

function validateLegacySlideTemplate(slide, context) {
  const legacy = slide.legacy || {};
  const slideshow = legacy.slideshow ?? legacy.contentData;
  const slideRef = legacy.slide ?? legacy.ref;

  if (!Number.isInteger(slideshow)) {
    errors.push(`${context} (legacy-slide) must define legacy.slideshow as a number.`);
    return;
  }

  if (typeof slideRef !== 'string' || slideRef.length === 0) {
    errors.push(`${context} (legacy-slide) must define legacy.slide as a string.`);
    return;
  }

  validateLegacyRef(slideshow, slideRef);
}

function validateCustomSlideTemplate(slide, context) {
  const custom = slide.custom || {};
  const id = custom.id || custom.name;
  const htmlRef = custom.htmlRef || custom.source || (id ? `assets/slides/custom/${id}/index.html` : '');

  if (!htmlRef) {
    errors.push(`${context} (custom) must define custom.htmlRef or custom.id.`);
    return;
  }

  validateCustomRef(htmlRef, `${context}.custom.htmlRef`, '.html');

  normaliseCustomRefs(custom.styleRefs).forEach((ref, index) => {
    validateCustomRef(ref.src, `${context}.custom.styleRefs[${index}]`, '.css');
  });

  normaliseCustomRefs(custom.scriptRefs || custom.moduleRefs).forEach((ref, index) => {
    validateCustomRef(ref.src, `${context}.custom.scriptRefs[${index}]`, '.js');
  });
}

function normaliseCustomRefs(value) {
  const refs = Array.isArray(value) ? value : (value ? [value] : []);
  return refs.map((entry) => {
    if (typeof entry === 'string') return { src: entry };
    return entry || {};
  }).filter((entry) => entry.src);
}

function validateCustomRef(assetRef, context, extension) {
  if (typeof assetRef !== 'string' || assetRef.length === 0) {
    errors.push(`${context} must be a non-empty local asset path.`);
    return;
  }
  if (/^(https?:|data:|blob:|mailto:|#)/i.test(assetRef)) {
    errors.push(`${context} must be a local assets/... path, not "${assetRef}".`);
    return;
  }
  if (!assetRef.endsWith(extension)) {
    errors.push(`${context} must point to a ${extension} file.`);
    return;
  }
  validateAssetRef(assetRef, context);
}

function validateForbiddenKeys(value, context) {
  if (!value || typeof value !== 'object') return;

  Object.entries(value).forEach(([key, child]) => {
    if (forbiddenKeys.has(key) || /^on[A-Z]/.test(key)) {
      errors.push(`${context} contains forbidden raw-code field "${key}".`);
    }
    if (child && typeof child === 'object') {
      validateForbiddenKeys(child, `${context}.${key}`);
    }
  });
}

function collectAssetRefs(value) {
  const refs = [];
  walk(value, (key, child) => {
    if (typeof child !== 'string') return;
    if (['image', 'src', 'avatar', 'poster'].includes(key) || key.endsWith('Image')) {
      refs.push(child);
    }
  });
  return refs;
}

function hasField(value, key) {
  const field = value?.[key];
  if (Array.isArray(field)) return field.length > 0;
  if (field && typeof field === 'object') return Object.keys(field).length > 0;
  return field !== undefined && field !== null && field !== '';
}

function fieldCount(value, key) {
  const direct = value?.[key];
  if (Array.isArray(direct)) return direct.length;
  if (key === 'rows' && Array.isArray(value?.table?.rows)) return value.table.rows.length;
  if (key === 'headers' && Array.isArray(value?.table?.headers)) return value.table.headers.length;
  return 0;
}

function validateAssetRef(assetRef, context) {
  if (/^(https?:|data:|blob:|mailto:|#)/i.test(assetRef)) return;

  const normalised = assetRef
    .replace(/^\/Planet\//, '')
    .replace(/^\//, '')
    .replace(/^Public\//, '');

  if (!normalised.startsWith('assets/')) {
    errors.push(`${context} has unsupported asset path "${assetRef}". Use assets/... for local files.`);
    return;
  }

  checkExists(path.join(publicRoot, normalised), `${context} references missing asset "${assetRef}"`);
}

function validateSlideDataFiles() {
  walkFiles(slideDataRoot).forEach((filePath) => {
    if (!/\.(html|css|js)$/.test(filePath)) {
      errors.push(`unexpected file in slide data: ${path.relative(repoRoot, filePath)}`);
    }
  });
}

function flatten(items) {
  return items.flatMap((item) => (Array.isArray(item) ? flatten(item) : [item]));
}

function walk(value, visit) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walkWithKey(String(index), item, visit));
    return;
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, child]) => walkWithKey(key, child, visit));
  }
}

function walkWithKey(key, value, visit) {
  visit(key, value);
  walk(value, visit);
}

function walkFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  const files = [];
  fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(filePath));
    } else {
      files.push(filePath);
    }
  });
  return files;
}

function checkExists(filePath, message) {
  if (fs.existsSync(filePath)) return true;
  errors.push(message);
  return false;
}
