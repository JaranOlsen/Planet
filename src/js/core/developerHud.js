const CONNECTION_OPTIONS = [
  ['off', 'Connect: off'],
  ['normal', 'Connect: normal'],
  ['arrow', 'Connect: arrow'],
  ['dashed', 'Connect: dashed'],
  ['tunnel', 'Connect: tunnel'],
];

export class DeveloperHud {
  constructor(actions = {}) {
    this.element = null;
    this.summaryElement = null;
    this.detailElement = null;
    this.statusElement = null;
    this.slidesButton = null;
    this.connectionSelect = null;
    this.undoButton = null;
    this.redoButton = null;
    this.editButton = null;
    this.actions = actions;
    this.status = '';
  }

  setActions(actions = {}) {
    this.actions = actions;
  }

  createButton(label, action, title) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.title = title || label;
    button.style.padding = '4px 7px';
    button.style.border = '1px solid rgba(255,255,255,0.26)';
    button.style.borderRadius = '4px';
    button.style.background = 'rgba(255,255,255,0.1)';
    button.style.color = '#fff';
    button.style.cursor = 'pointer';
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      action?.();
    });
    return button;
  }

  ensureElement() {
    if (this.element || typeof document === 'undefined') return;
    const element = document.createElement('section');
    element.id = 'developer-hud';
    element.setAttribute('aria-label', 'Mindmap editor');
    element.style.position = 'fixed';
    element.style.top = '12px';
    element.style.left = '12px';
    element.style.maxWidth = 'min(620px, calc(100vw - 24px))';
    element.style.padding = '8px 10px';
    element.style.borderRadius = '7px';
    element.style.fontFamily = 'sans-serif';
    element.style.fontSize = '12px';
    element.style.lineHeight = '1.4';
    element.style.letterSpacing = '0.01em';
    element.style.background = 'rgba(0, 0, 0, 0.72)';
    element.style.color = '#f4f4f4';
    element.style.zIndex = '10000';
    element.style.pointerEvents = 'auto';
    element.style.backdropFilter = 'blur(5px)';
    element.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';

    this.summaryElement = document.createElement('div');
    this.summaryElement.style.fontWeight = '600';
    this.detailElement = document.createElement('div');
    this.detailElement.style.opacity = '0.88';
    this.detailElement.style.marginTop = '2px';
    this.statusElement = document.createElement('div');
    this.statusElement.style.color = '#ffe3a3';
    this.statusElement.style.minHeight = '1.4em';

    const controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.flexWrap = 'wrap';
    controls.style.gap = '5px';
    controls.style.marginTop = '5px';

    this.undoButton = this.createButton('Undo', () => this.actions.onUndo?.(), 'Undo (Ctrl/Cmd+Z)');
    this.redoButton = this.createButton('Redo', () => this.actions.onRedo?.(), 'Redo (Ctrl/Cmd+Shift+Z)');
    this.editButton = this.createButton('Edit text', () => this.actions.onEditText?.(), 'Edit selected node text (Enter)');
    this.slidesButton = this.createButton('Slides: on', () => this.actions.onToggleSlides?.(), 'Toggle opening slides when nodes are clicked (Shift+O)');

    this.connectionSelect = document.createElement('select');
    this.connectionSelect.title = 'Cursor connection tool (K cycles modes)';
    this.connectionSelect.style.padding = '4px 7px';
    this.connectionSelect.style.borderRadius = '4px';
    this.connectionSelect.style.background = '#222';
    this.connectionSelect.style.color = '#fff';
    CONNECTION_OPTIONS.forEach(([value, label]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      this.connectionSelect.appendChild(option);
    });
    this.connectionSelect.addEventListener('change', () => {
      this.actions.onConnectionModeChange?.(this.connectionSelect.value);
    });

    controls.append(this.undoButton, this.redoButton, this.editButton, this.slidesButton, this.connectionSelect);
    element.append(this.summaryElement, this.detailElement, this.statusElement, controls);
    document.body.appendChild(element);
    this.element = element;
  }

  update({
    developer,
    contexts,
    selectedContext,
    selectedNode,
    selectedNodes = [],
    selectedImage = null,
    fastMove = false,
    slidesOpen = true,
    connectionMode = 'off',
    connectionSource,
    dirty = false,
    canUndo = false,
    canRedo = false,
  }) {
    if (typeof document === 'undefined') return;
    if (!developer) {
      this.hide();
      return;
    }

    this.ensureElement();
    if (!this.element) return;

    const context = contexts?.[selectedContext];
    const name = context?.name || `Context ${Number(selectedContext) + 1}`;
    const total = Array.isArray(contexts) ? contexts.length : 0;
    const count = Array.isArray(context?.tagData) ? context.tagData.length : 0;
    const node = Number.isInteger(selectedNode) ? context?.tagData?.[selectedNode] : null;
    const image = Number.isInteger(selectedImage) ? context?.imageData?.[selectedImage] : null;
    const multiCount = Array.isArray(selectedNodes) ? selectedNodes.length : 0;

    this.summaryElement.textContent = `Developer Mode · ${name} (Context ${Number(selectedContext) + 1}/${total}) · Nodes: ${count}${dirty ? ' · Unsaved' : ''}`;
    this.detailElement.textContent = image
      ? `Selected image: ${image.id || Number(selectedImage) + 1} · Size ${image.size} · Drag to move · +/- to resize`
      : node
      ? `Selected: ${node.text || node.id} · ${multiCount || 1} selected · Move ${fastMove ? 'fast' : 'fine'}`
      : `No node selected · Move ${fastMove ? 'fast' : 'fine'}`;
    this.statusElement.textContent = this.status || (connectionSource ? `Connection source: ${connectionSource}` : '');
    this.slidesButton.textContent = `Slides: ${slidesOpen ? 'on' : 'off'}`;
    this.connectionSelect.value = connectionMode;
    this.undoButton.disabled = !canUndo;
    this.redoButton.disabled = !canRedo;
    this.editButton.disabled = !node;
    [this.undoButton, this.redoButton, this.editButton].forEach((button) => {
      button.style.opacity = button.disabled ? '0.45' : '1';
      button.style.cursor = button.disabled ? 'default' : 'pointer';
    });
    this.element.style.display = 'block';
  }

  setStatus(status) {
    this.status = status || '';
  }

  hide() {
    if (!this.element) return;
    this.element.style.display = 'none';
  }
}
