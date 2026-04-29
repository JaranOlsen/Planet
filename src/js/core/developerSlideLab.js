import {
  createSampleDeck,
  getSlideTemplateDefinition,
  getSlideTemplateIds,
  getSlideThemeIds,
  isKnownPathId,
  isKnownTemplateId,
  isKnownThemeId,
  normaliseTemplateId,
  normaliseThemeId,
} from '../slides/registry.js';

export class DeveloperSlideLab {
  constructor({ onPreviewDeck, onRevealStep } = {}) {
    this.enabled = false;
    this.root = null;
    this.panel = null;
    this.textarea = null;
    this.templateSelect = null;
    this.themeSelect = null;
    this.diagnostics = null;
    this.onPreviewDeck = onPreviewDeck;
    this.onRevealStep = onRevealStep;
    this.handleDiagnostics = this.handleDiagnostics.bind(this);
    this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this);
  }

  setDeveloperMode(enabled) {
    this.enabled = !!enabled;
    this.ensureElement();
    if (!this.root) return;
    this.root.style.display = this.enabled ? 'block' : 'none';
    if (!this.enabled) this.hide();
  }

  toggle() {
    this.ensureElement();
    if (!this.panel || !this.enabled) return;
    this.panel.hidden = !this.panel.hidden;
  }

  hide() {
    if (this.panel) this.panel.hidden = true;
  }

  ensureElement() {
    if (this.root || typeof document === 'undefined') return;

    const root = document.createElement('div');
    root.id = 'developer-slide-lab';
    root.style.display = 'none';
    root.addEventListener('keydown', this.handleKeyboardEvent);
    root.addEventListener('keyup', this.handleKeyboardEvent);
    root.addEventListener('keypress', this.handleKeyboardEvent);

    const toggle = button('Slide Lab', 'developer-slide-lab__toggle');
    toggle.addEventListener('click', () => this.toggle());

    const panel = document.createElement('section');
    panel.className = 'developer-slide-lab__panel';
    panel.hidden = true;

    const header = document.createElement('div');
    header.className = 'developer-slide-lab__header';
    header.appendChild(textEl('h2', 'Slide Lab'));
    const close = button('x', 'developer-slide-lab__close');
    close.setAttribute('aria-label', 'Close Slide Lab');
    close.addEventListener('click', () => this.hide());
    header.appendChild(close);

    const themeLabel = textEl('label', 'Theme');
    themeLabel.className = 'developer-slide-lab__label';
    const themeSelect = document.createElement('select');
    themeSelect.className = 'developer-slide-lab__select';
    getSlideThemeIds().forEach((themeId) => {
      const option = document.createElement('option');
      option.value = themeId;
      option.textContent = themeId;
      themeSelect.appendChild(option);
    });
    themeSelect.value = 'gut';

    const templateLabel = textEl('label', 'Template');
    templateLabel.className = 'developer-slide-lab__label';
    const templateSelect = document.createElement('select');
    templateSelect.className = 'developer-slide-lab__select';
    getSlideTemplateIds().forEach((templateId) => {
      const option = document.createElement('option');
      option.value = templateId;
      option.textContent = templateId;
      templateSelect.appendChild(option);
    });
    const refreshSample = () => {
      this.textarea.value = JSON.stringify(createSampleDeck(templateSelect.value, themeSelect.value), null, 2);
      this.validateJson();
    };
    themeSelect.addEventListener('change', refreshSample);
    templateSelect.addEventListener('change', refreshSample);

    const textarea = document.createElement('textarea');
    textarea.className = 'developer-slide-lab__textarea';
    textarea.spellcheck = false;
    textarea.value = JSON.stringify(createSampleDeck(templateSelect.value, themeSelect.value), null, 2);

    const actions = document.createElement('div');
    actions.className = 'developer-slide-lab__actions';
    const preview = button('Preview', 'developer-slide-lab__button');
    preview.addEventListener('click', () => this.preview());
    const reveal = button('Reveal step', 'developer-slide-lab__button');
    reveal.addEventListener('click', () => this.onRevealStep?.());
    const validate = button('Validate', 'developer-slide-lab__button');
    validate.addEventListener('click', () => this.validateJson());
    const copy = button('Copy/Export JSON', 'developer-slide-lab__button');
    copy.addEventListener('click', () => this.copyJson());
    actions.append(preview, reveal, validate, copy);

    const diagnostics = document.createElement('pre');
    diagnostics.className = 'developer-slide-lab__diagnostics';
    diagnostics.textContent = 'Overflow report: waiting for preview';

    panel.append(header, themeLabel, themeSelect, templateLabel, templateSelect, textarea, actions, diagnostics);
    root.append(toggle, panel);
    document.body.appendChild(root);

    window.addEventListener('slideDiagnostics', this.handleDiagnostics);

    this.root = root;
    this.panel = panel;
    this.textarea = textarea;
    this.templateSelect = templateSelect;
    this.themeSelect = themeSelect;
    this.diagnostics = diagnostics;
    this.validateJson();
  }

  async preview() {
    if (!this.textarea || !this.onPreviewDeck) return;

    try {
      const parsed = JSON.parse(this.textarea.value);
      const deck = normaliseDeckInput(parsed);
      const validation = validateDeckShape(deck);
      if (validation.errors.length > 0) {
        this.setDiagnostics(formatValidation(validation));
        return;
      }
      await this.onPreviewDeck(deck);
    } catch (error) {
      this.setDiagnostics(`JSON error: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  validateJson() {
    if (!this.textarea) return null;
    try {
      const parsed = JSON.parse(this.textarea.value);
      const deck = normaliseDeckInput(parsed);
      const validation = validateDeckShape(deck);
      this.setDiagnostics(formatValidation(validation));
      return validation;
    } catch (error) {
      this.setDiagnostics(`JSON error: ${error instanceof Error ? error.message : String(error)}`);
      return null;
    }
  }

  async copyJson() {
    if (!this.textarea) return;
    try {
      await navigator.clipboard?.writeText(this.textarea.value);
      this.setDiagnostics('JSON copied to clipboard.');
    } catch {
      this.textarea.focus();
      this.textarea.select();
      this.setDiagnostics('Clipboard unavailable. JSON is selected.');
    }
  }

  handleDiagnostics(event) {
    const detail = event.detail || {};
    const status = detail.overflow ? 'overflow detected' : 'fits frame';
    this.setDiagnostics([
      `Overflow report: ${status}`,
      `template: ${detail.template || 'unknown'}`,
      `theme: ${detail.theme || 'unknown'}`,
      `frame: ${detail.width || 0}x${detail.height || 0}`,
      `scroll: ${detail.scrollWidth || 0}x${detail.scrollHeight || 0}`,
    ].join('\n'));
  }

  setDiagnostics(message) {
    if (this.diagnostics) this.diagnostics.textContent = message;
  }

  handleKeyboardEvent(event) {
    if (event.key === 'Escape') {
      this.hide();
      event.preventDefault();
    }
    event.stopPropagation();
  }
}

function normaliseDeckInput(value) {
  if (value?.slides) {
    return {
      ...value,
      theme: value.theme || value.path || 'aether',
    };
  }
  if (value?.template) {
    const theme = value.theme || 'gut';
    return {
      id: 'slide-lab-preview',
      title: value.title || 'Slide Lab Preview',
      theme,
      path: ['gut', 'heart', 'head'].includes(normaliseThemeId(theme)) ? normaliseThemeId(theme) : undefined,
      slides: [value],
    };
  }
  throw new Error('Expected a deck with slides[] or a single slide with template.');
}

function validateDeckShape(deck) {
  const errors = [];
  const warnings = [];
  const slides = flatten(deck.slides || []);

  if (!deck.id) errors.push('Deck is missing id.');
  if (!deck.title) warnings.push('Deck title is useful for workbench filtering.');
  if (!isKnownThemeId(deck.theme)) errors.push(`Unknown theme "${deck.theme}".`);
  if (deck.path && !isKnownPathId(deck.path)) errors.push(`Unknown path "${deck.path}".`);
  if (!Array.isArray(deck.slides) || slides.length === 0) errors.push('Deck needs at least one slide.');

  slides.forEach((slide, index) => {
    if (!slide || typeof slide !== 'object') {
      errors.push(`slides[${index}] must be an object.`);
      return;
    }
    if (!isKnownTemplateId(slide.template)) {
      errors.push(`slides[${index}] uses unknown template "${slide.template}".`);
      return;
    }
    if (slide.theme && !isKnownThemeId(slide.theme)) errors.push(`slides[${index}] uses unknown theme "${slide.theme}".`);
    if (slide.path && !isKnownPathId(slide.path)) errors.push(`slides[${index}] uses unknown path "${slide.path}".`);
    const definition = getSlideTemplateDefinition(slide.template);
    const required = definition?.requiredAny || [];
    if (required.length > 0 && !required.some((field) => hasField(slide, field))) {
      errors.push(`slides[${index}] ${normaliseTemplateId(slide.template)} needs one of: ${required.join(', ')}.`);
    }
  });

  return {
    deck,
    errors,
    warnings,
    slideCount: slides.length,
    templates: [...new Set(slides.map((slide) => normaliseTemplateId(slide?.template)))],
  };
}

function formatValidation(validation) {
  if (!validation) return 'Validation unavailable.';
  const lines = [
    validation.errors.length === 0 ? 'Validation: passed' : 'Validation: blocked',
    `deck: ${validation.deck.id || 'untitled'}`,
    `theme: ${validation.deck.theme || 'aether'}`,
    `slides: ${validation.slideCount}`,
    `templates: ${validation.templates.join(', ')}`,
  ];
  validation.errors.forEach((error) => lines.push(`error: ${error}`));
  validation.warnings.forEach((warning) => lines.push(`warning: ${warning}`));
  return lines.join('\n');
}

function flatten(items) {
  return items.flatMap((item) => (Array.isArray(item) ? flatten(item) : [item]));
}

function hasField(value, key) {
  const field = value?.[key];
  if (Array.isArray(field)) return field.length > 0;
  if (field && typeof field === 'object') return Object.keys(field).length > 0;
  return field !== undefined && field !== null && field !== '';
}

function button(label, className) {
  const element = document.createElement('button');
  element.type = 'button';
  element.className = className;
  element.textContent = label;
  return element;
}

function textEl(tagName, text) {
  const element = document.createElement(tagName);
  element.textContent = text;
  return element;
}
