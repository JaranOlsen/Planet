const CONNECTION_KINDS = [
  ['normal', 'Normal'],
  ['arrow', 'Arrow'],
  ['dashed', 'Dashed'],
  ['tunnel', 'Tunnel'],
];

function styleButton(button, { danger = false } = {}) {
  button.type = 'button';
  button.style.padding = '6px 8px';
  button.style.border = '1px solid rgba(255,255,255,0.2)';
  button.style.borderRadius = '4px';
  button.style.background = danger ? 'rgba(180,45,45,0.42)' : 'rgba(255,255,255,0.09)';
  button.style.color = '#fff';
  button.style.cursor = 'pointer';
  button.style.textAlign = 'left';
}

function createLabel(text) {
  const label = document.createElement('div');
  label.textContent = text;
  label.style.margin = '8px 0 4px';
  label.style.fontSize = '11px';
  label.style.fontWeight = '700';
  label.style.letterSpacing = '0.04em';
  label.style.opacity = '0.72';
  label.style.textTransform = 'uppercase';
  return label;
}

export class DeveloperContextMenu {
  constructor(actions = {}) {
    this.actions = actions;
    this.element = null;
    this.state = null;
  }

  setActions(actions = {}) {
    this.actions = actions;
  }

  createAction(label, action, options) {
    const button = document.createElement('button');
    button.textContent = label;
    styleButton(button, options);
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      action?.(this.state);
      this.close();
    });
    return button;
  }

  ensureElement() {
    if (this.element || typeof document === 'undefined') return;
    const menu = document.createElement('section');
    menu.id = 'developer-context-menu';
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-label', 'Mindmap node actions');
    menu.hidden = true;
    menu.style.display = 'none';
    menu.style.position = 'fixed';
    menu.style.zIndex = '10020';
    menu.style.width = '270px';
    menu.style.maxHeight = 'calc(100vh - 24px)';
    menu.style.overflowY = 'auto';
    menu.style.padding = '9px';
    menu.style.border = '1px solid rgba(255,255,255,0.25)';
    menu.style.borderRadius = '8px';
    menu.style.background = 'rgba(16,18,23,0.96)';
    menu.style.color = '#fff';
    menu.style.boxShadow = '0 12px 36px rgba(0,0,0,0.5)';
    menu.style.backdropFilter = 'blur(8px)';
    menu.style.font = '12px/1.35 sans-serif';
    menu.addEventListener('contextmenu', (event) => event.preventDefault());
    document.body.appendChild(menu);
    this.element = menu;

    window.addEventListener('pointerdown', (event) => {
      if (!this.isOpen() || this.element.contains(event.target)) return;
      this.close();
    }, true);
    window.addEventListener('blur', () => this.close());
    window.addEventListener('resize', () => this.close());
  }

  appendActionGrid(actions) {
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '5px';
    actions.forEach((action) => grid.appendChild(action));
    this.element.appendChild(grid);
  }

  renderSizeControls(state) {
    this.element.appendChild(createLabel(state.selectionCount > 1 ? `Size · ${state.selectionCount} nodes` : 'Size'));
    const row = document.createElement('div');
    row.style.display = 'grid';
    row.style.gridTemplateColumns = '1fr 62px';
    row.style.gap = '7px';

    const range = document.createElement('input');
    range.type = 'range';
    range.min = '5';
    range.max = '500';
    range.step = '1';
    range.value = String(state.size);
    range.setAttribute('aria-label', 'Node size');

    const number = document.createElement('input');
    number.type = 'number';
    number.min = '5';
    number.max = '500';
    number.step = '1';
    number.value = String(state.size);
    number.setAttribute('aria-label', 'Node size value');
    number.style.width = '100%';
    number.style.boxSizing = 'border-box';
    number.style.background = '#222';
    number.style.color = '#fff';
    number.style.border = '1px solid rgba(255,255,255,0.22)';
    number.style.borderRadius = '4px';

    const sync = (source, target) => { target.value = source.value; };
    const applySize = (value) => this.actions.onSetSize?.(Number(value), this.state);
    range.addEventListener('input', () => sync(range, number));
    number.addEventListener('input', () => sync(number, range));
    range.addEventListener('change', () => applySize(range.value));
    number.addEventListener('change', () => applySize(number.value));
    number.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      event.stopPropagation();
      applySize(number.value);
    });
    row.append(range, number);
    this.element.appendChild(row);
  }

  renderColorControls(state) {
    this.element.appendChild(createLabel(state.selectionCount > 1 ? `Color · ${state.selectionCount} nodes` : 'Color'));
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(10, 1fr)';
    grid.style.gap = '4px';
    state.palette.forEach((color, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.title = `Color ${index + 1}`;
      button.setAttribute('aria-label', `Set node color ${index + 1}`);
      button.style.height = '20px';
      button.style.padding = '0';
      button.style.borderRadius = '3px';
      button.style.cursor = 'pointer';
      button.style.background = `#${Number(color).toString(16).padStart(6, '0')}`;
      button.style.border = index === state.colorIndex ? '2px solid #fff' : '1px solid rgba(255,255,255,0.25)';
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        this.actions.onSetColor?.(index, this.state);
        this.close();
      });
      grid.appendChild(button);
    });
    this.element.appendChild(grid);
  }

  open(state) {
    this.ensureElement();
    if (!this.element) return;
    this.state = state;
    this.element.replaceChildren();

    const title = document.createElement('div');
    title.textContent = state.selectionCount > 1
      ? `${state.selectionCount} nodes selected`
      : state.node ? state.node.text || 'Selected node' : 'Map actions';
    title.style.fontWeight = '700';
    title.style.margin = '0 0 7px';
    title.style.whiteSpace = 'nowrap';
    title.style.overflow = 'hidden';
    title.style.textOverflow = 'ellipsis';
    this.element.appendChild(title);

    const generalActions = [
      this.createAction('Create node here', () => this.actions.onCreate?.(this.state)),
    ];
    if (state.node) {
      generalActions.push(this.createAction('Edit text', () => this.actions.onEdit?.(this.state)));
    }
    this.appendActionGrid(generalActions);

    if (state.node) {
      this.renderSizeControls(state);
      this.renderColorControls(state);

      this.element.appendChild(createLabel(state.selectionCount > 1
        ? `Create connections from ${state.selectionCount} nodes`
        : 'Create connection from node'));
      this.appendActionGrid(CONNECTION_KINDS.map(([kind, label]) => (
        this.createAction(label, () => this.actions.onStartConnection?.(kind, this.state))
      )));

      this.element.appendChild(createLabel('Selection'));
      this.appendActionGrid([
        this.createAction(state.inMultiSelection ? 'Remove from selection' : 'Add to selection', () => this.actions.onToggleSelection?.(this.state)),
        this.createAction('Clear selection', () => this.actions.onClearSelection?.()),
      ]);

      const deleteButton = this.createAction(
        state.selectionCount > 1 ? `Delete ${state.selectionCount} nodes` : 'Delete node',
        () => this.actions.onDelete?.(this.state),
        { danger: true },
      );
      deleteButton.style.width = '100%';
      deleteButton.style.marginTop = '9px';
      this.element.appendChild(deleteButton);
    }

    this.element.hidden = false;
    this.element.style.display = 'block';
    this.element.style.visibility = 'hidden';
    const rect = this.element.getBoundingClientRect();
    this.element.style.left = `${Math.max(8, Math.min(state.x, window.innerWidth - rect.width - 8))}px`;
    this.element.style.top = `${Math.max(8, Math.min(state.y, window.innerHeight - rect.height - 8))}px`;
    this.element.style.visibility = 'visible';
  }

  close() {
    if (!this.element) return;
    this.element.hidden = true;
    this.element.style.display = 'none';
    this.state = null;
  }

  isOpen() {
    return Boolean(this.element && !this.element.hidden);
  }
}
