import { publicAsset, rewriteLegacyAssetPaths } from './core/assets.js';
import {
  getSlideTemplateIds,
  isInteractiveTemplate,
  normaliseTemplateId,
  normaliseThemeId,
} from './slides/registry.js';

export { rewriteLegacyAssetPaths };
export { getSlideTemplateIds };

const runtimeState = {
  activeRoot: null,
  cleanup: [],
  interactiveCleanup: null,
  revealElements: [],
  revealIndex: 0,
  resizeObserver: null,
};

export function resolvePublicAsset(value) {
  return publicAsset(value);
}

export function isStructuredSlide(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value) && typeof value.template === 'string';
}

function createEl(tagName, options = {}) {
  const element = document.createElement(tagName);
  const { className, text, attrs, children } = options;

  if (className) {
    const classes = Array.isArray(className) ? className : String(className).split(/\s+/);
    element.classList.add(...classes.filter(Boolean));
  }

  if (text !== undefined && text !== null) {
    element.textContent = String(text);
  }

  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (value === undefined || value === null || value === false) return;
      if (value === true) {
        element.setAttribute(key, '');
      } else {
        element.setAttribute(key, String(value));
      }
    });
  }

  appendChildren(element, children);
  return element;
}

function appendChildren(parent, children) {
  if (!children) return parent;
  const items = Array.isArray(children) ? children : [children];
  items.forEach((child) => {
    if (child === undefined || child === null) return;
    if (typeof child === 'string' || typeof child === 'number') {
      parent.appendChild(document.createTextNode(String(child)));
    } else {
      parent.appendChild(child);
    }
  });
  return parent;
}

function markReveal(element, slide) {
  if (slide.reveal === 'none') return element;
  element.setAttribute('data-reveal', '');
  return element;
}

function createRoot(slide, deck, templateId) {
  const theme = normaliseThemeId(slide.theme || deck?.theme || deck?.path || 'aether');
  const path = slide.path || deck?.path || (['gut', 'heart', 'head'].includes(theme) ? theme : undefined);
  const textAlign = slide.textAlign || slide.align;
  const density = slide.density || slide.compactness;
  const root = createEl('section', {
    className: [
      'slide-v2',
      `slide-v2--${theme}`,
      `slide-v2--${templateId}`,
      textAlign === 'center' ? 'slide-v2--text-center' : '',
      textAlign === 'justify' ? 'slide-v2--text-justify' : '',
      density ? `slide-v2--density-${density}` : '',
    ],
    attrs: {
      'data-slide-fit': '',
      'data-slide-template': templateId,
      'data-slide-theme': theme,
      'data-slide-path': path,
    },
  });

  if (slide.image) {
    root.style.setProperty('--slide-v2-image', `url("${resolvePublicAsset(slide.image)}")`);
  }

  return root;
}

function addChrome(root, slide, options = {}) {
  const showTitle = options.title !== false && slide.showTitle !== false;
  const showOverline = options.overline !== false && slide.showOverline !== false;
  const showSubtitle = options.subtitle !== false && slide.showSubtitle !== false;
  const overline = slide.overline || slide.kicker;
  if (showOverline && overline) {
    root.appendChild(createEl('p', { className: 'slide-v2-overline', text: overline }));
  }
  if (showTitle && slide.title) {
    root.appendChild(createEl('h1', { className: 'slide-v2-title', text: slide.title }));
  }
  if (showSubtitle && slide.subtitle) {
    root.appendChild(createEl('p', { className: 'slide-v2-subtitle', text: slide.subtitle }));
  }
}

function normaliseBlocks(value) {
  if (value === undefined || value === null) return [];
  if (typeof value === 'string') return [{ text: value }];
  if (Array.isArray(value)) {
    return value.map((block) => (typeof block === 'string' ? { text: block } : block)).filter(Boolean);
  }
  if (typeof value === 'object') return [value];
  return [{ text: String(value) }];
}

function appendTextBlocks(parent, value, slide, options = {}) {
  normaliseBlocks(value).forEach((block) => {
    const paragraph = createEl(options.tag || 'p', {
      className: [
        options.className || 'slide-v2-copy',
        block.emphasis ? 'slide-v2-copy--emphasis' : '',
        block.muted ? 'slide-v2-copy--muted' : '',
        block.strong ? 'slide-v2-copy--strong' : '',
      ],
    });
    if (Array.isArray(block.segments) || Array.isArray(block.runs) || Array.isArray(block.inline)) {
      appendInlineSegments(paragraph, block.segments || block.runs || block.inline);
    } else {
      paragraph.textContent = block.text || '';
    }
    markReveal(paragraph, slide);
    parent.appendChild(paragraph);
  });
}

function appendInlineSegments(parent, segments) {
  segments.forEach((segment) => {
    if (typeof segment === 'string') {
      parent.appendChild(document.createTextNode(segment));
      return;
    }
    const span = createEl('span', {
      className: [
        segment.strong ? 'slide-v2-inline-strong' : '',
        segment.muted ? 'slide-v2-inline-muted' : '',
        segment.emphasis ? 'slide-v2-inline-emphasis' : '',
      ],
      text: segment.text || '',
    });
    parent.appendChild(span);
  });
}

function appendBullets(parent, items, slide, className = 'slide-v2-bullets', options = {}) {
  if (!Array.isArray(items) || items.length === 0) return;
  const listClasses = [
    className,
    options.ordered ? 'slide-v2-subbullets--ordered' : '',
  ].filter(Boolean).join(' ');
  const list = createEl(options.ordered ? 'ol' : 'ul', {
    className: listClasses,
    attrs: options.ordered && options.start ? { start: options.start } : undefined,
  });
  if (options.ordered && options.start) {
    list.style.setProperty('--slide-v2-list-start-offset', String(Math.max(0, Number(options.start) - 1)));
  }
  items.forEach((item) => {
    const data = typeof item === 'string' ? { text: item } : item || {};
    const li = createEl('li', { className: 'slide-v2-bullet' });
    li.appendChild(createEl('span', { text: data.text || data.title || '' }));
    if (Array.isArray(data.children) || Array.isArray(data.items)) {
      appendBullets(li, data.children || data.items, slide, 'slide-v2-subbullets', {
        ordered: data.ordered || data.listType === 'ordered',
        start: data.start,
      });
    }
    markReveal(li, slide);
    list.appendChild(li);
  });
  parent.appendChild(list);
}

function appendAction(parent, action, slide) {
  const data = typeof action === 'string' ? { label: action } : action || {};
  if (!data.label && !data.href) return;
  const actionEl = createEl(data.href ? 'a' : 'span', {
    className: 'slide-v2-action',
    text: data.label || data.href,
    attrs: data.href ? {
      href: data.href,
      target: data.target || '_blank',
      rel: data.rel || 'noopener noreferrer',
    } : {},
  });
  parent.appendChild(actionEl);
}

function appendPills(parent, items, slide) {
  if (!Array.isArray(items) || items.length === 0) return;
  const group = createEl('div', { className: 'slide-v2-pills' });
  items.slice(0, 4).forEach((item) => {
    const pill = createEl('span', {
      className: 'slide-v2-pill',
      text: typeof item === 'string' ? item : item?.label || item?.text || '',
    });
    markReveal(pill, slide);
    group.appendChild(pill);
  });
  parent.appendChild(group);
}

function appendStats(parent, stats, slide, limit = 6) {
  if (!Array.isArray(stats) || stats.length === 0) return;
  const grid = createEl('div', { className: 'slide-v2-stat-grid' });
  stats.slice(0, limit).forEach((stat) => {
    const card = createEl('article', { className: 'slide-v2-stat' });
    card.appendChild(createEl('strong', { className: 'slide-v2-stat-value', text: stat.value ?? stat.number ?? '' }));
    card.appendChild(createEl('span', { className: 'slide-v2-stat-label', text: stat.label ?? '' }));
    if (stat.note) card.appendChild(createEl('span', { className: 'slide-v2-stat-note', text: stat.note }));
    markReveal(card, slide);
    grid.appendChild(card);
  });
  parent.appendChild(grid);
}

function normaliseItems(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => (typeof item === 'string' ? { text: item } : item || {}));
}

function hashString(value) {
  return Array.from(String(value)).reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

function imageEl(src, alt, className) {
  return createEl('img', {
    className,
    attrs: {
      src: resolvePublicAsset(src),
      alt: alt || '',
      loading: 'lazy',
      decoding: 'async',
    },
  });
}

function renderOpening(slide, deck) {
  const root = createRoot(slide, deck, 'opening');
  const panel = createEl('div', { className: 'slide-v2-opening-panel' });
  addChrome(panel, slide);
  appendTextBlocks(panel, slide.body || slide.text, slide);
  appendPills(panel, slide.pills || slide.tags, slide);
  if (Array.isArray(slide.stats)) appendStats(panel, slide.stats, slide, 4);
  root.appendChild(panel);
  return { element: root };
}

function renderFullImage(slide, deck) {
  const root = createRoot(slide, deck, 'full-image');
  root.appendChild(imageEl(slide.image || slide.src, slide.alt || slide.title, 'slide-v2-full-image'));
  if (slide.title || slide.body || slide.source || slide.action) {
    const overlay = createEl('div', { className: 'slide-v2-image-caption' });
    addChrome(overlay, slide);
    appendTextBlocks(overlay, slide.body, slide);
    appendAction(overlay, slide.action, slide);
    if (slide.source) overlay.appendChild(markReveal(createEl('p', { className: 'slide-v2-source', text: slide.source }), slide));
    root.appendChild(overlay);
  }
  return { element: root };
}

function renderQuote(slide, deck) {
  const root = createRoot(slide, deck, 'quote');
  const panel = createEl('div', { className: 'slide-v2-quote-panel' });
  addChrome(panel, slide);
  const quote = createEl('blockquote', { className: 'slide-v2-quote' });
  appendTextBlocks(quote, slide.body || slide.quote, slide, { tag: 'span', className: 'slide-v2-quote-line' });
  panel.appendChild(quote);
  if (slide.source) panel.appendChild(markReveal(createEl('p', { className: 'slide-v2-source', text: slide.source }), slide));
  root.appendChild(panel);
  return { element: root };
}

function renderLongText(slide, deck) {
  const root = createRoot(slide, deck, 'long-text');
  const stack = createEl('div', { className: 'slide-v2-readable' });
  addChrome(stack, slide);
  appendTextBlocks(stack, slide.body || slide.text, slide);
  root.appendChild(stack);
  return { element: root };
}

function renderFullscreenText(slide, deck) {
  const root = createRoot(slide, deck, 'fullscreen-text');
  const stack = createEl('div', { className: 'slide-v2-fullscreen-text' });
  addChrome(stack, slide, {
    overline: slide.showChrome === true,
    title: slide.showChrome === true,
    subtitle: slide.showChrome === true,
  });
  appendTextBlocks(stack, slide.body || slide.text || slide.quote, slide);
  if (slide.source) stack.appendChild(markReveal(createEl('p', { className: 'slide-v2-source', text: slide.source }), slide));
  root.appendChild(stack);
  return { element: root };
}

function renderTitleBullets(slide, deck) {
  const root = createRoot(slide, deck, 'title-bullets');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  const panel = createEl('div', { className: 'slide-v2-readable slide-v2-readable--wide' });
  appendTextBlocks(panel, slide.body || slide.text, slide);
  appendBullets(panel, slide.bullets || slide.items, slide);
  root.appendChild(panel);
  return { element: root };
}

function renderBullets(slide, deck) {
  const root = createRoot(slide, deck, 'bullets');
  const panel = createEl('div', { className: 'slide-v2-readable slide-v2-readable--wide' });
  addChrome(panel, slide);
  appendTextBlocks(panel, slide.body || slide.text, slide);
  appendBullets(panel, slide.bullets || slide.items, slide);
  root.appendChild(panel);
  return { element: root };
}

function renderSplitImage(slide, deck) {
  const root = createRoot(slide, deck, 'split-image');
  const imageSide = createEl('figure', { className: 'slide-v2-split-image' });
  imageSide.appendChild(imageEl(slide.image, slide.alt || slide.title, ''));
  const textSide = createEl('div', { className: 'slide-v2-split-body' });
  addChrome(textSide, slide);
  appendTextBlocks(textSide, slide.body, slide);
  appendBullets(textSide, slide.bullets || slide.items, slide);
  root.append(imageSide, textSide);
  return { element: root };
}

function renderLegacyPanel(slide, deck) {
  const root = createRoot(slide, deck, 'legacy-panel');
  const imageSide = createEl('figure', { className: 'slide-v2-legacy-panel-image' });
  const titleSide = createEl('div', { className: 'slide-v2-legacy-panel-title' });
  const textSide = createEl('div', { className: 'slide-v2-legacy-panel-content' });
  const position = slide.imagePosition || slide.objectPosition || 'center';
  const transform = slide.imageFlip ? 'scaleX(-1)' : (slide.imageTransform || 'none');

  if (slide.backgroundColor || slide.panelColor) {
    root.style.setProperty('--slide-v2-panel-bg', slide.backgroundColor || slide.panelColor);
  }

  imageSide.style.setProperty('--slide-v2-legacy-image-position', position);
  imageSide.style.setProperty('--slide-v2-legacy-image-transform', transform);
  if (slide.imageFit) {
    imageSide.style.setProperty('--slide-v2-legacy-image-fit', slide.imageFit);
  }

  imageSide.appendChild(imageEl(slide.image, slide.alt || slide.title, ''));
  addChrome(titleSide, slide, { subtitle: false });
  appendTextBlocks(textSide, slide.body || slide.text, slide);
  appendBullets(textSide, slide.bullets || slide.items, slide, 'slide-v2-legacy-panel-bullets');
  root.append(imageSide, titleSide, textSide);
  return { element: root };
}

function renderTwoColumn(slide, deck) {
  const root = createRoot(slide, deck, 'two-column');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  const columns = createEl('div', { className: 'slide-v2-columns' });
  (slide.columns || []).slice(0, 3).forEach((column) => {
    const card = createEl('article', { className: 'slide-v2-column' });
    if (column.title) card.appendChild(markReveal(createEl('h2', { className: 'slide-v2-card-title', text: column.title }), slide));
    appendTextBlocks(card, column.body || column.text, slide);
    appendBullets(card, column.bullets || column.items, slide);
    columns.appendChild(card);
  });
  root.appendChild(columns);
  return { element: root };
}

function renderMedia(slide, deck) {
  const root = createRoot(slide, deck, 'media');
  const hasList = (Array.isArray(slide.bullets) && slide.bullets.length > 0) || (Array.isArray(slide.items) && slide.items.length > 0);
  const hasBody = normaliseBlocks(slide.body).length > 0 || normaliseBlocks(slide.text).length > 0;
  if (hasList) {
    root.classList.add('slide-v2--media-with-list');
  } else if (!hasBody) {
    root.classList.add('slide-v2--media-only');
  }
  const body = createEl('div', { className: 'slide-v2-media-body' });
  addChrome(body, slide, { title: slide.showTitle === true });
  appendTextBlocks(body, slide.body || slide.text, slide);
  appendBullets(body, slide.bullets || slide.items, slide);
  appendAction(body, slide.action, slide);
  const media = slide.media || { src: slide.src || slide.video, title: slide.title };
  const frame = createEl('div', { className: 'slide-v2-media-frame' });
  if (media.aspectRatio) frame.style.aspectRatio = media.aspectRatio;
  if (media.height) {
    if (!media.aspectRatio) frame.style.aspectRatio = 'auto';
    frame.style.height = media.height;
    frame.style.minHeight = '0';
  }
  if (media.type === 'image') {
    frame.appendChild(imageEl(media.src, media.alt || slide.title, ''));
  } else {
    frame.appendChild(createEl('iframe', {
      attrs: {
        src: resolvePublicAsset(media.src),
        title: media.title || slide.title || 'Embedded media',
        allow: media.allow || 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: true,
        loading: media.loading || 'lazy',
      },
    }));
  }
  root.append(body, frame);
  return { element: root };
}

function renderDenseBullets(slide, deck) {
  const root = createRoot(slide, deck, 'dense-bullets');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  appendTextBlocks(header, slide.body || slide.text, slide);
  root.appendChild(header);
  const groups = slide.groups || slide.columns || [{ title: slide.title, items: slide.items || slide.bullets }];
  const grid = createEl('div', { className: 'slide-v2-dense-grid' });
  groups.slice(0, 4).forEach((group) => {
    const card = createEl('article', { className: 'slide-v2-dense-group' });
    if (group.title) card.appendChild(markReveal(createEl('h2', { className: 'slide-v2-card-title', text: group.title }), slide));
    appendTextBlocks(card, group.body || group.text, slide);
    appendBullets(card, group.items || group.bullets, slide, 'slide-v2-dense-bullets');
    markReveal(card, slide);
    grid.appendChild(card);
  });
  root.appendChild(grid);
  return { element: root };
}

function renderGallery(slide, deck) {
  const root = createRoot(slide, deck, 'gallery');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  const gallery = createEl('div', { className: 'slide-v2-gallery-grid' });
  (slide.images || []).slice(0, 8).forEach((image) => {
    const item = createEl('figure', { className: 'slide-v2-gallery-item' });
    item.appendChild(imageEl(image.src || image, image.alt || image.caption || '', ''));
    if (image.caption) item.appendChild(createEl('figcaption', { text: image.caption }));
    markReveal(item, slide);
    gallery.appendChild(item);
  });
  root.appendChild(gallery);
  return { element: root };
}

function renderSteps(slide, deck) {
  const root = createRoot(slide, deck, 'steps');
  const stack = createEl('div', { className: 'slide-v2-readable' });
  addChrome(stack, slide);
  appendTextBlocks(stack, slide.body, slide);
  const list = createEl(slide.ordered === false ? 'ul' : 'ol', { className: 'slide-v2-steps' });
  (slide.steps || slide.items || []).forEach((step) => {
    const data = typeof step === 'string' ? { text: step } : step || {};
    const item = createEl('li', { className: 'slide-v2-step' });
    if (data.title) item.appendChild(createEl('strong', { text: data.title }));
    item.appendChild(createEl('span', { text: data.text || data.body || '' }));
    markReveal(item, slide);
    list.appendChild(item);
  });
  stack.appendChild(list);
  root.appendChild(stack);
  return { element: root };
}

function renderChecklist(slide, deck) {
  const root = createRoot(slide, deck, 'checklist');
  const stack = createEl('div', { className: 'slide-v2-readable' });
  addChrome(stack, slide);
  appendTextBlocks(stack, slide.body || slide.text, slide);
  const list = createEl('ul', { className: 'slide-v2-checklist' });
  normaliseItems(slide.checklist || slide.items || slide.steps).forEach((item) => {
    const li = createEl('li', { className: 'slide-v2-checklist-item' });
    li.appendChild(createEl('span', { className: 'slide-v2-checklist-icon' }));
    const copy = createEl('span', { className: 'slide-v2-checklist-copy' });
    if (item.title) copy.appendChild(createEl('strong', { text: item.title }));
    copy.appendChild(createEl('span', { text: item.text || item.body || item.label || '' }));
    li.appendChild(copy);
    markReveal(li, slide);
    list.appendChild(li);
  });
  stack.appendChild(list);
  root.appendChild(stack);
  return { element: root };
}

function renderStatistics(slide, deck) {
  const root = createRoot(slide, deck, 'statistics');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  appendStats(root, slide.stats, slide);
  return { element: root };
}

function renderProfile(slide, deck) {
  const root = createRoot(slide, deck, 'profile');
  const profile = createEl('article', { className: 'slide-v2-profile' });
  if (slide.image) profile.appendChild(imageEl(slide.image, slide.alt || slide.title, 'slide-v2-profile-image'));
  const body = createEl('div', { className: 'slide-v2-profile-body' });
  addChrome(body, slide);
  appendTextBlocks(body, slide.body || slide.text, slide);
  appendBullets(body, slide.bullets || slide.items, slide);
  profile.appendChild(body);
  root.appendChild(profile);
  return { element: root };
}

function renderTimeline(slide, deck) {
  const root = createRoot(slide, deck, 'timeline');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  const timeline = createEl('div', { className: 'slide-v2-timeline' });
  normaliseItems(slide.timeline || slide.events || slide.items).slice(0, 6).forEach((event, index) => {
    const item = createEl('article', { className: 'slide-v2-timeline-item' });
    item.appendChild(createEl('span', { className: 'slide-v2-timeline-index', text: event.index || String(index + 1) }));
    const copy = createEl('div', { className: 'slide-v2-timeline-copy' });
    if (event.title) copy.appendChild(createEl('h2', { className: 'slide-v2-card-title', text: event.title }));
    appendTextBlocks(copy, event.body || event.text || event.note, slide);
    item.appendChild(copy);
    markReveal(item, slide);
    timeline.appendChild(item);
  });
  root.appendChild(timeline);
  return { element: root };
}

function renderTable(slide, deck) {
  const root = createRoot(slide, deck, 'table');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  const tableData = slide.table || {};
  const headers = slide.headers || tableData.headers || [];
  const rows = slide.rows || tableData.rows || [];
  const wrap = createEl('div', { className: 'slide-v2-table-wrap' });
  const table = createEl('table', { className: 'slide-v2-table' });
  if (headers.length > 0) {
    const thead = createEl('thead');
    const tr = createEl('tr');
    headers.forEach((heading) => tr.appendChild(createEl('th', { text: heading })));
    thead.appendChild(tr);
    table.appendChild(thead);
  }
  const tbody = createEl('tbody');
  rows.slice(0, 6).forEach((row) => {
    const tr = createEl('tr');
    const cells = Array.isArray(row) ? row : row.cells || Object.values(row);
    cells.forEach((cell) => tr.appendChild(createEl('td', { text: cell })));
    markReveal(tr, slide);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  wrap.appendChild(table);
  root.appendChild(wrap);
  return { element: root };
}

function renderCardGrid(slide, deck) {
  const root = createRoot(slide, deck, 'card-grid');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  appendTextBlocks(header, slide.body || slide.text, slide);
  root.appendChild(header);
  const grid = createEl('div', { className: 'slide-v2-card-grid' });
  normaliseItems(slide.cards || slide.items).slice(0, 6).forEach((card) => {
    const item = createEl('article', { className: 'slide-v2-card' });
    if (card.image) item.appendChild(imageEl(card.image, card.alt || card.title, 'slide-v2-card-image'));
    if (card.title) item.appendChild(createEl('h2', { className: 'slide-v2-card-title', text: card.title }));
    appendTextBlocks(item, card.body || card.text || card.note, slide);
    appendBullets(item, card.bullets || card.items, slide);
    markReveal(item, slide);
    grid.appendChild(item);
  });
  root.appendChild(grid);
  return { element: root };
}

function renderCallToAction(slide, deck) {
  const root = createRoot(slide, deck, 'call-to-action');
  const panel = createEl('div', { className: 'slide-v2-cta-panel' });
  addChrome(panel, slide);
  appendTextBlocks(panel, slide.body || slide.text, slide);
  const action = typeof slide.action === 'string' ? { label: slide.action } : slide.action || {};
  if (action.label) {
    const tagName = action.href ? 'a' : 'span';
    const actionEl = createEl(tagName, {
      className: 'slide-v2-action',
      text: action.label,
      attrs: action.href ? { href: action.href } : {},
    });
    markReveal(actionEl, slide);
    panel.appendChild(actionEl);
  }
  if (slide.note) panel.appendChild(markReveal(createEl('p', { className: 'slide-v2-source', text: slide.note }), slide));
  root.appendChild(panel);
  return { element: root };
}

function renderWordCloud(slide, deck) {
  const root = createRoot(slide, deck, 'word-cloud');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  const wrapper = markReveal(createEl('div', { className: 'slide-v2-word-cloud' }), slide);
  const canvas = createEl('canvas', {
    attrs: {
      width: slide.width || 1200,
      height: slide.height || 720,
    },
  });
  wrapper.appendChild(canvas);
  root.appendChild(wrapper);

  return {
    element: root,
    mount() {
      if (typeof window.WordCloud !== 'function') return null;
      const list = (slide.words || slide.list || []).map((item) => (
        Array.isArray(item) ? item : [item.text || item.word, item.weight || item.value || 1]
      ));
      const palette = Array.isArray(slide.colors) ? slide.colors.filter(Boolean) : [];
      const color = palette.length > 0
        ? (word) => palette[Math.abs(hashString(word)) % palette.length]
        : slide.color || 'random-light';
      window.WordCloud(canvas, {
        list,
        gridSize: slide.gridSize || 12,
        weightFactor: slide.weightFactor || 14,
        fontFamily: slide.fontFamily || 'Inter, Helvetica, Arial, sans-serif',
        color,
        backgroundColor: slide.backgroundColor || 'rgba(0, 0, 0, 0)',
        rotateRatio: slide.rotateRatio ?? 0.08,
        minRotation: slide.minRotation,
        maxRotation: slide.maxRotation,
        drawOutOfBound: false,
      });
      return () => {
        const context = canvas.getContext('2d');
        if (context) context.clearRect(0, 0, canvas.width, canvas.height);
      };
    },
  };
}

function renderChartQuadrant(slide, deck) {
  const root = createRoot(slide, deck, 'quadrant-chart');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  const svg = createSvg('svg', { class: 'slide-v2-quadrant', viewBox: '0 0 1000 560', role: 'img' });
  const labels = slide.quadrants || [
    { x: 250, y: 155, label: 'Deep / Narrow' },
    { x: 750, y: 155, label: 'Deep / Wide' },
    { x: 250, y: 435, label: 'Shallow / Narrow' },
    { x: 750, y: 435, label: 'Shallow / Wide' },
  ];
  [
    ['0', '0', '#3e5f75'],
    ['500', '0', '#746039'],
    ['0', '280', '#4c5447'],
    ['500', '280', '#5d4451'],
  ].forEach(([x, y, fill]) => {
    svg.appendChild(createSvg('rect', { x, y, width: '500', height: '280', fill, opacity: '0.34' }));
  });
  svg.appendChild(createSvg('line', { x1: '500', y1: '0', x2: '500', y2: '560', class: 'slide-v2-axis' }));
  svg.appendChild(createSvg('line', { x1: '0', y1: '280', x2: '1000', y2: '280', class: 'slide-v2-axis' }));
  appendQuadrantAxisLabels(svg, slide.axisLabels);
  labels.forEach((item) => {
    const text = createSvg('text', { x: item.x, y: item.y, class: 'slide-v2-quadrant-label' });
    appendSvgTextLines(text, item.label, item.x, 34);
    svg.appendChild(text);
  });
  markReveal(svg, slide);
  root.appendChild(svg);
  return { element: root };
}

function renderMindmapSlot(slide, deck) {
  const root = createRoot(slide, deck, 'mindmap-slot');
  const header = createEl('header', { className: 'slide-v2-header' });
  addChrome(header, slide);
  root.appendChild(header);
  const map = createEl('div', { className: 'slide-v2-mindmap' });
  const svg = createSvg('svg', { viewBox: '0 0 1000 520', role: 'img' });
  const nodes = slide.nodes || [];
  const links = slide.links || [];
  const nodeById = new Map(nodes.map((node, index) => [node.id || String(index), { ...node, index }]));
  links.forEach((link) => {
    const from = nodeById.get(link.from);
    const to = nodeById.get(link.to);
    if (!from || !to) return;
    svg.appendChild(createSvg('line', {
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      class: 'slide-v2-mindmap-link',
    }));
  });
  nodes.forEach((node, index) => {
    const group = createSvg('g', { class: 'slide-v2-mindmap-node' });
    group.appendChild(createSvg('circle', {
      cx: node.x,
      cy: node.y,
      r: node.r || (index === 0 ? 52 : 38),
    }));
    const text = createSvg('text', { x: node.x, y: node.y + 6 });
    text.textContent = node.label || node.title || node.id;
    group.appendChild(text);
    svg.appendChild(group);
  });
  map.appendChild(svg);
  markReveal(map, slide);
  root.appendChild(map);
  return { element: root };
}

function createSvg(tagName, attrs = {}) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tagName);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null) element.setAttribute(key, String(value));
  });
  return element;
}

function appendSvgTextLines(textElement, label, x, lineHeight) {
  const lines = String(label || '').split(/\n/);
  const firstOffset = lines.length > 1 ? -((lines.length - 1) * lineHeight) / 2 : 0;
  lines.forEach((line, index) => {
    const tspan = createSvg('tspan', {
      x,
      dy: index === 0 ? firstOffset : lineHeight,
    });
    tspan.textContent = line;
    textElement.appendChild(tspan);
  });
}

function appendQuadrantAxisLabels(svg, axisLabels = {}) {
  const labels = [
    { key: 'xLeft', x: 54, y: 266, anchor: 'start' },
    { key: 'xRight', x: 946, y: 266, anchor: 'end' },
    { key: 'yTop', x: 500, y: 38, anchor: 'middle' },
    { key: 'yBottom', x: 500, y: 535, anchor: 'middle' },
  ];
  labels.forEach(({ key, x, y, anchor }) => {
    if (!axisLabels[key]) return;
    const label = createSvg('text', {
      x,
      y,
      class: 'slide-v2-axis-label',
      'text-anchor': anchor,
    });
    label.textContent = axisLabels[key];
    svg.appendChild(label);
  });
}

const renderers = {
  opening: renderOpening,
  'full-image': renderFullImage,
  quote: renderQuote,
  'long-text': renderLongText,
  'fullscreen-text': renderFullscreenText,
  'title-bullets': renderTitleBullets,
  bullets: renderBullets,
  'dense-bullets': renderDenseBullets,
  'split-image': renderSplitImage,
  'legacy-panel': renderLegacyPanel,
  'two-column': renderTwoColumn,
  media: renderMedia,
  gallery: renderGallery,
  steps: renderSteps,
  checklist: renderChecklist,
  statistics: renderStatistics,
  profile: renderProfile,
  timeline: renderTimeline,
  table: renderTable,
  'card-grid': renderCardGrid,
  'call-to-action': renderCallToAction,
  'word-cloud': renderWordCloud,
  'quadrant-chart': renderChartQuadrant,
  'mindmap-slot': renderMindmapSlot,
};

export function renderStructuredSlide(slide, deck = {}) {
  const templateId = normaliseTemplateId(slide?.template);
  const renderer = renderers[templateId] || renderLongText;
  const rendered = renderer(slide || {}, deck);
  rendered.element.dataset.slideInteractive = isInteractiveTemplate(templateId) ? 'true' : 'false';
  return rendered;
}

export function prepareSlideUnmount() {
  if (runtimeState.activeRoot) {
    window.dispatchEvent(new CustomEvent('slideWillUnmount', {
      detail: {
        root: runtimeState.activeRoot,
      },
    }));
  }

  cleanupRuntime();
}

function cleanupRuntime() {
  runtimeState.cleanup.forEach((cleanup) => cleanup());
  runtimeState.cleanup = [];

  if (typeof runtimeState.interactiveCleanup === 'function') {
    runtimeState.interactiveCleanup();
  }
  runtimeState.interactiveCleanup = null;

  if (runtimeState.resizeObserver) {
    runtimeState.resizeObserver.disconnect();
  }
  runtimeState.resizeObserver = null;
  runtimeState.activeRoot = null;
  runtimeState.revealElements = [];
  runtimeState.revealIndex = 0;
}

export function mountSlide(content, options = {}) {
  cleanupRuntime();
  runtimeState.activeRoot = content;

  if (typeof options.mount === 'function') {
    runtimeState.interactiveCleanup = options.mount(content);
  }

  window.dispatchEvent(new CustomEvent('slideLoaded', {
    detail: {
      root: content,
      slide: options.slide,
      deck: options.deck,
      kind: options.kind || 'legacy',
    },
  }));

  setupRevealQueue(content);
  setupFrameFitDiagnostics(content, options);
}

export function updateSlide() {
  const content = document.querySelector('#slide');
  if (content) mountSlide(content, { kind: 'legacy' });
}

function setupRevealQueue(content) {
  const revealElements = Array.from(content.querySelectorAll('[data-reveal], .appear'))
    .filter((element) => !element.closest('.old-slide') && !element.classList.contains('visible'));

  runtimeState.revealElements = revealElements;
  runtimeState.revealIndex = 0;

  revealElements.forEach((element) => {
    element.classList.remove('is-visible');
    element.style.opacity = '0';
    if (element.hasAttribute('data-reveal')) {
      element.style.transform = 'translateY(10px)';
    }
  });

  window.actionsCompleted = revealElements.length === 0;

  const handleClick = (event) => {
    if (event.target?.closest?.('#developer-slide-lab')) return;
    revealNextSlideStep();
  };

  const handleKeyUp = (event) => {
    if (event.key === 'PageDown' || event.key === 'ArrowDown') {
      revealNextSlideStep();
    }
  };

  window.addEventListener('click', handleClick);
  window.addEventListener('keyup', handleKeyUp);
  runtimeState.cleanup.push(() => {
    window.removeEventListener('click', handleClick);
    window.removeEventListener('keyup', handleKeyUp);
  });
}

export function revealNextSlideStep() {
  const element = runtimeState.revealElements[runtimeState.revealIndex];
  if (!element) {
    window.actionsCompleted = true;
    return false;
  }

  element.classList.add('is-visible');
  element.style.opacity = '1';
  element.style.transform = '';
  runtimeState.revealIndex += 1;

  if (runtimeState.revealIndex >= runtimeState.revealElements.length) {
    window.actionsCompleted = true;
  }

  return true;
}

function setupFrameFitDiagnostics(content, options) {
  const fitRoot = content.matches?.('[data-slide-fit]')
    ? content
    : content.querySelector('[data-slide-fit]') || content.firstElementChild || content;
  const hasStructuredFitRoot = fitRoot.hasAttribute?.('data-slide-fit');

  const checkFit = () => {
    fitAdaptiveText(fitRoot);
    const rawOverflowX = fitRoot.scrollWidth - fitRoot.clientWidth > 2;
    const rawOverflowY = fitRoot.scrollHeight - fitRoot.clientHeight > 2;
    const visibleBounds = measureVisibleFrameOverflow(fitRoot, {
      trustClippedRoot: !hasStructuredFitRoot,
    });
    const overflowX = hasStructuredFitRoot ? rawOverflowX : visibleBounds.overflowX;
    const overflowY = hasStructuredFitRoot ? rawOverflowY : visibleBounds.overflowY;
    const detail = {
      overflow: overflowX || overflowY,
      overflowX,
      overflowY,
      rawOverflowX,
      rawOverflowY,
      visibleOverflowX: visibleBounds.overflowX,
      visibleOverflowY: visibleBounds.overflowY,
      template: fitRoot.getAttribute('data-slide-template') || options.slide?.template || 'legacy',
      theme: fitRoot.getAttribute('data-slide-theme') || options.slide?.theme || options.deck?.theme || 'legacy',
      path: fitRoot.getAttribute('data-slide-path') || options.slide?.path || options.deck?.path || '',
      width: fitRoot.clientWidth,
      height: fitRoot.clientHeight,
      scrollWidth: fitRoot.scrollWidth,
      scrollHeight: fitRoot.scrollHeight,
    };

    content.classList.toggle('slide-has-overflow', detail.overflow);
    window.slideDiagnostics = detail;
    window.dispatchEvent(new CustomEvent('slideDiagnostics', { detail }));
  };

  requestAnimationFrame(checkFit);

  if (typeof ResizeObserver === 'function') {
    runtimeState.resizeObserver = new ResizeObserver(checkFit);
    runtimeState.resizeObserver.observe(fitRoot);
  }
}

function measureVisibleFrameOverflow(fitRoot, options = {}) {
  const rootRect = fitRoot.getBoundingClientRect();
  const tolerance = 2;
  const rootStyle = getComputedStyle(fitRoot);
  const clipsRoot = ['hidden', 'clip'].includes(rootStyle.overflowX)
    || ['hidden', 'clip'].includes(rootStyle.overflowY)
    || ['hidden', 'clip'].includes(rootStyle.overflow);
  if (options.trustClippedRoot && clipsRoot) {
    return {
      overflowX: false,
      overflowY: false,
    };
  }
  const bounds = {
    left: rootRect.left,
    top: rootRect.top,
    right: rootRect.right,
    bottom: rootRect.bottom,
  };
  const elements = [fitRoot, ...Array.from(fitRoot.querySelectorAll('*'))];

  elements.forEach((element) => {
    const style = getComputedStyle(element);
    if (style.display === 'none' || style.visibility === 'hidden') return;

    const isInvisibleFloatingElement = (style.position === 'absolute' || style.position === 'fixed')
      && Number.parseFloat(style.opacity || '1') === 0
      && style.pointerEvents === 'none';
    if (isInvisibleFloatingElement) return;

    Array.from(element.getClientRects()).forEach((rect) => {
      if (rect.width <= 0 || rect.height <= 0) return;
      bounds.left = Math.min(bounds.left, rect.left);
      bounds.top = Math.min(bounds.top, rect.top);
      bounds.right = Math.max(bounds.right, rect.right);
      bounds.bottom = Math.max(bounds.bottom, rect.bottom);
    });
  });

  return {
    overflowX: bounds.left < rootRect.left - tolerance || bounds.right > rootRect.right + tolerance,
    overflowY: bounds.top < rootRect.top - tolerance || bounds.bottom > rootRect.bottom + tolerance,
  };
}

function fitAdaptiveText(fitRoot) {
  if (!fitRoot?.classList?.contains('slide-v2') || fitRoot.classList.contains('slide-v2--full-image')) return;
  if (!fitRoot.clientWidth || !fitRoot.clientHeight) return;
  const sizeKey = `${fitRoot.clientWidth}x${fitRoot.clientHeight}`;
  if (fitRoot.dataset.slideAdaptiveSize === sizeKey) return;
  fitRoot.dataset.slideAdaptiveSize = sizeKey;

  const styles = getComputedStyle(fitRoot);
  const min = Number.parseFloat(styles.getPropertyValue('--slide-v2-adaptive-min')) || 0.72;
  const max = Number.parseFloat(styles.getPropertyValue('--slide-v2-adaptive-max')) || 1.18;
  const step = 0.04;
  let scale = 1;

  const setScale = (value) => {
    fitRoot.style.setProperty('--slide-v2-fit-scale', value.toFixed(3));
  };
  const overflows = () => (
    fitRoot.scrollWidth - fitRoot.clientWidth > 2 ||
    fitRoot.scrollHeight - fitRoot.clientHeight > 2
  );
  const textFill = () => {
    const selectors = [
      '.slide-v2-title',
      '.slide-v2-subtitle',
      '.slide-v2-copy',
      '.slide-v2-bullet',
      '.slide-v2-step',
      '.slide-v2-checklist-item',
      '.slide-v2-card-title',
      '.slide-v2-table',
      '.slide-v2-stat-value',
      '.slide-v2-stat-label',
      '.slide-v2-source',
      '.slide-v2-pill',
      '.slide-v2-action',
      '.slide-v2-quadrant-label',
      '.slide-v2-mindmap-node text',
    ].join(',');
    const elements = Array.from(fitRoot.querySelectorAll(selectors))
      .filter((element) => element.getClientRects().length > 0);
    if (elements.length === 0) return 1;
    const rootRect = fitRoot.getBoundingClientRect();
    const bounds = elements.reduce((acc, element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: Math.min(acc.top, rect.top),
        bottom: Math.max(acc.bottom, rect.bottom),
      };
    }, { top: Infinity, bottom: -Infinity });
    return Math.max(0, bounds.bottom - bounds.top) / rootRect.height;
  };

  setScale(scale);
  while (overflows() && scale - step >= min) {
    scale -= step;
    setScale(scale);
  }

  while (!overflows() && scale + step <= max && textFill() < 0.9) {
    scale += step;
    setScale(scale);
    if (overflows()) {
      scale -= step;
      setScale(scale);
      break;
    }
  }
}
