export class DeveloperHud {
  constructor() {
    this.element = null;
  }

  ensureElement() {
    if (this.element || typeof document === 'undefined') return;
    const element = document.createElement('div');
    element.id = 'developer-hud';
    element.style.position = 'fixed';
    element.style.top = '12px';
    element.style.left = '12px';
    element.style.padding = '6px 12px';
    element.style.borderRadius = '6px';
    element.style.fontFamily = 'sans-serif';
    element.style.fontSize = '12px';
    element.style.lineHeight = '1.4';
    element.style.letterSpacing = '0.02em';
    element.style.background = 'rgba(0, 0, 0, 0.55)';
    element.style.color = '#f4f4f4';
    element.style.zIndex = '10000';
    element.style.pointerEvents = 'none';
    element.style.backdropFilter = 'blur(4px)';
    element.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
    document.body.appendChild(element);
    this.element = element;
  }

  update({ developer, contexts, selectedContext }) {
    if (typeof document === 'undefined') return;
    if (!developer) {
      this.hide();
      return;
    }

    this.ensureElement();
    if (!this.element) return;

    const ctx = contexts?.[selectedContext];
    const name = ctx?.name || `Context ${Number(selectedContext) + 1}`;
    const total = Array.isArray(contexts) ? contexts.length : 0;
    const count = Array.isArray(ctx?.tagData) ? ctx.tagData.length : 0;

    this.element.textContent = `Developer Mode · ${name} (Context ${Number(selectedContext) + 1}/${total}) · Nodes: ${count}`;
    this.element.style.display = 'block';
  }

  hide() {
    if (!this.element) return;
    this.element.style.display = 'none';
  }
}
