import { contentData } from './data/contentData.js';
import {
  mountSlide,
  prepareSlideUnmount,
  renderStructuredSlide,
  resolvePublicAsset,
  rewriteLegacyAssetPaths,
} from './slides.js';

const deckCache = new Map();

export async function createSlideshowStatus(activeSlideshow) {
  const resolved = await resolveSlideshow(activeSlideshow);
  return createStatusFromResolved(activeSlideshow, resolved);
}

export function createPreviewSlideshowStatus(deck) {
  const resolved = {
    kind: 'deck',
    deck,
    slides: Array.isArray(deck?.slides) ? deck.slides : [],
  };
  return createStatusFromResolved(`__preview:${deck?.id || 'slide-lab'}`, resolved);
}

function createStatusFromResolved(activeSlideshow, resolved) {
  const slides = resolved.slides || [];
  const status = {
    activeSlideshow,
    activeSlideshowLength: slides.length,
    activeSlide: slides.length > 0 ? 0 : undefined,
    activeSlideLength: undefined,
    activeSubSlide: undefined,
    kind: resolved.kind,
    deck: resolved.deck,
    slides,
  };

  syncSlideDimensions(status, { resetSubSlide: true });
  return status;
}

async function resolveSlideshow(activeSlideshow) {
  if (typeof activeSlideshow === 'string' && activeSlideshow.startsWith('__preview:')) {
    throw new Error('Preview slideshow status must be created with createPreviewSlideshowStatus().');
  }

  const definition = contentData[activeSlideshow];
  if (definition && typeof definition === 'object' && !Array.isArray(definition) && definition.deck) {
    const deck = await loadDeck(definition.deck);
    return {
      kind: 'deck',
      deck,
      slides: Array.isArray(deck.slides) ? deck.slides : [],
    };
  }

  if (Array.isArray(definition) && containsStructuredContentRef(definition)) {
    return {
      kind: 'mixed',
      deck: null,
      slides: await resolveMixedSlides(definition, activeSlideshow),
    };
  }

  return {
    kind: 'legacy',
    deck: null,
    slides: Array.isArray(definition) ? definition : [],
  };
}

function containsStructuredContentRef(items) {
  return items.some((item) => {
    if (Array.isArray(item)) return containsStructuredContentRef(item);
    return item && typeof item === 'object';
  });
}

async function resolveMixedSlides(items, activeSlideshow) {
  const resolved = [];

  for (const item of items) {
    if (Array.isArray(item)) {
      resolved.push(await resolveMixedSlides(item, activeSlideshow));
    } else if (typeof item === 'string') {
      resolved.push({
        kind: 'legacy',
        slideshow: activeSlideshow,
        slide: item,
      });
    } else if (item && typeof item === 'object' && item.deck) {
      const deck = await loadDeck(item.deck);
      resolved.push(...normaliseDeckSlides(deck));
    } else if (item && typeof item === 'object' && Number.isInteger(item.legacy)) {
      const legacyDefinition = contentData[item.legacy];
      if (Array.isArray(legacyDefinition)) {
        resolved.push(...normaliseLegacySlides(legacyDefinition, item.legacy));
      }
    }
  }

  return resolved;
}

function normaliseDeckSlides(deck) {
  return (deck.slides || []).map((slide) => {
    if (Array.isArray(slide)) {
      return slide.map((subslide) => ({
        kind: 'deck',
        deck,
        slide: subslide,
      }));
    }
    return {
      kind: 'deck',
      deck,
      slide,
    };
  });
}

function normaliseLegacySlides(slides, slideshow) {
  return slides.map((slide) => {
    if (Array.isArray(slide)) {
      return normaliseLegacySlides(slide, slideshow);
    }
    return {
      kind: 'legacy',
      slideshow,
      slide,
    };
  });
}

async function loadDeck(deckId) {
  if (deckCache.has(deckId)) return deckCache.get(deckId);

  const response = await fetch(resolvePublicAsset(`assets/slides/decks/${deckId}.json`));
  if (!response.ok) {
    throw new Error(`Unable to load slide deck "${deckId}" (${response.status})`);
  }

  const deck = await response.json();
  deckCache.set(deckId, deck);
  return deck;
}

export async function pushContent(slideshowStatus) {
  prepareSlideUnmount();
  clearPreviousSlideAssets();

  const destination = document.getElementById('slideContainer');
  const currentSlide = document.querySelector('#slide');
  const descriptor = getActiveSlideDescriptor(slideshowStatus);

  if (currentSlide) {
    currentSlide.removeAttribute('id');
    currentSlide.removeAttribute('data-active');
    currentSlide.classList.remove('fade-out');
    currentSlide.classList.add('old-slide');
  }

  const content = document.createElement('div');
  content.id = 'slide';
  content.dataset.active = 'true';

  let mount = null;
  let slideForDiagnostics = descriptor.slide;

  try {
    if (descriptor.kind === 'deck') {
      if (isStructuredLegacySlide(descriptor.slide)) {
        const legacy = await loadStructuredLegacySlide(descriptor.slide);
        content.innerHTML = legacy.html;
        mount = legacy.mount;
        content.dataset.slideKind = 'legacy-slide';
      } else if (isCustomSlide(descriptor.slide)) {
        const custom = await loadCustomSlide(descriptor.slide);
        content.innerHTML = custom.html;
        mount = custom.mount;
        content.dataset.slideKind = 'custom';
      } else {
        const rendered = renderStructuredSlide(descriptor.slide, descriptor.deck || slideshowStatus.deck);
        content.appendChild(rendered.element);
        mount = rendered.mount;
        content.dataset.slideKind = descriptor.kind;
      }
      content.dataset.deckId = descriptor.deck?.id || slideshowStatus.deck?.id || '';
    } else {
      const legacy = await loadLegacySlide(descriptor);
      content.innerHTML = legacy.html;
      mount = legacy.mount;
      content.dataset.slideKind = 'legacy';
    }
  } catch (error) {
    const fallbackSlide = {
      template: 'long-text',
      title: 'Slide failed to load',
      body: [
        {
          text: error instanceof Error ? error.message : String(error),
          emphasis: true,
        },
      ],
      reveal: 'none',
    };
    const rendered = renderStructuredSlide(fallbackSlide, { theme: 'aether' });
    content.appendChild(rendered.element);
    slideForDiagnostics = fallbackSlide;
    console.error(error);
  }

  destination.appendChild(content);
  mountSlide(content, {
    kind: descriptor.kind,
    slide: slideForDiagnostics,
    deck: descriptor.deck || slideshowStatus.deck,
    mount,
  });

  if (currentSlide) {
    requestAnimationFrame(() => {
      currentSlide.classList.add('fade-out');
    });
  }

  removeOldSlides();
  updateMainDots(slideshowStatus);
  updateSubDots(slideshowStatus);
}

function isStructuredLegacySlide(slide) {
  return slide?.template === 'legacy-slide';
}

function isCustomSlide(slide) {
  return slide?.template === 'custom';
}

async function loadStructuredLegacySlide(slide) {
  const legacy = slide?.legacy || {};
  const slideshow = legacy.slideshow ?? legacy.contentData;
  const slideRef = legacy.slide ?? legacy.ref;
  return loadLegacySlide({
    slideshow,
    slide: slideRef,
  });
}

async function loadLegacySlide(descriptor) {
  const basePath = `assets/slides/data/${descriptor.slideshow}/${descriptor.slide}`;
  const slideFileResponse = await fetch(resolvePublicAsset(`${basePath}.html`));
  if (!slideFileResponse.ok) {
    throw new Error(`Missing legacy slide ${descriptor.slideshow}/${descriptor.slide}.html`);
  }

  const cssPromise = loadLegacyCss(basePath, descriptor.slide);
  const scriptPromise = loadLegacyScript(basePath, descriptor.slide);
  const html = await slideFileResponse.text();
  await cssPromise;
  const scriptCleanup = await scriptPromise;

  return {
    html: rewriteLegacyAssetPaths(html),
    mount: () => scriptCleanup,
  };
}

async function loadLegacyCss(basePath, slide) {
  if (!String(slide).includes('c')) return;

  await loadSlideCss(`${basePath}.css`, `Missing legacy slide CSS ${basePath}.css`);
}

async function loadLegacyScript(basePath, slide) {
  if (!String(slide).includes('j')) return null;

  return loadSlideScripts([
    {
      src: `${basePath}.js`,
      errorMessage: `Missing legacy slide script ${basePath}.js`,
    },
  ]);
}

async function loadCustomSlide(slide) {
  const custom = slide?.custom || {};
  const paths = normaliseCustomSlidePaths(custom);
  const slideFileResponse = await fetch(resolvePublicAsset(paths.htmlRef));
  if (!slideFileResponse.ok) {
    throw new Error(`Missing custom slide HTML ${paths.htmlRef}`);
  }

  const stylePromises = paths.styleRefs.map((style) => loadSlideCss(
    style.src,
    `Missing custom slide CSS ${style.src}`,
    { optional: style.optional },
  ));
  const scriptPromise = loadSlideScripts(paths.scriptRefs);
  const html = await slideFileResponse.text();
  await Promise.all(stylePromises);
  const scriptCleanup = await scriptPromise;

  return {
    html: rewriteLegacyAssetPaths(html),
    mount: () => scriptCleanup,
  };
}

function normaliseCustomSlidePaths(custom = {}) {
  const id = custom.id || custom.name;
  const htmlRef = custom.htmlRef || custom.source || (id ? `assets/slides/custom/${id}/index.html` : '');
  const styleRefs = normaliseCustomRefs(
    custom.styleRefs,
    id ? [{ src: `assets/slides/custom/${id}/style.css`, optional: true }] : [],
  );
  const scriptRefs = normaliseCustomRefs(
    custom.scriptRefs || custom.moduleRefs,
    id ? [{ src: `assets/slides/custom/${id}/module.js`, type: 'module', optional: true }] : [],
  );

  return {
    htmlRef,
    styleRefs,
    scriptRefs,
  };
}

function normaliseCustomRefs(value, fallback = []) {
  const refs = Array.isArray(value) ? value : (value ? [value] : fallback);
  return refs.map((entry) => {
    if (typeof entry === 'string') {
      return { src: entry };
    }
    return entry || {};
  }).filter((entry) => entry.src);
}

async function loadSlideCss(src, errorMessage, options = {}) {
  const response = await fetch(resolvePublicAsset(src));
  if (!response.ok) {
    if (options.optional) return;
    throw new Error(errorMessage || `Missing slide CSS ${src}`);
  }

  const styleElement = document.createElement('style');
  styleElement.id = 'slideCss';
  styleElement.setAttribute('data-slide-style', '');
  styleElement.textContent = rewriteLegacyAssetPaths(await response.text());
  document.head.appendChild(styleElement);
}

async function loadSlideScripts(scripts) {
  const scriptRefs = normaliseCustomRefs(scripts);
  if (scriptRefs.length === 0) return null;

  const trackedListeners = [];
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener.bind(window);

  window.addEventListener = function trackedSlideAddEventListener(type, listener, options) {
    trackedListeners.push({ type, listener, options });
    return originalAddEventListener.call(window, type, listener, options);
  };

  try {
    for (const scriptRef of scriptRefs) {
      await loadSlideScript(scriptRef);
    }
  } catch (error) {
    trackedListeners.forEach(({ type, listener, options }) => {
      originalRemoveEventListener(type, listener, options);
    });
    throw error;
  } finally {
    window.addEventListener = originalAddEventListener;
  }

  return () => {
    trackedListeners.forEach(({ type, listener, options }) => {
      originalRemoveEventListener(type, listener, options);
    });
  };

  function loadSlideScript(scriptRef) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = resolvePublicAsset(scriptRef.src);
      scriptElement.defer = true;
      if (scriptRef.type) scriptElement.type = scriptRef.type;
      scriptElement.setAttribute('data-slide-script', '');
      scriptElement.onload = resolve;
      scriptElement.onerror = () => {
        if (scriptRef.optional) {
          resolve();
          return;
        }
        window.addEventListener = originalAddEventListener;
        reject(new Error(scriptRef.errorMessage || `Missing slide script ${scriptRef.src}`));
      };
      document.head.appendChild(scriptElement);
    });
  }
}

function clearPreviousSlideAssets() {
  document.querySelectorAll('[data-slide-script], [data-slide-style], #slideCss').forEach((element) => {
    element.parentNode?.removeChild(element);
  });
}

function getActiveSlideDescriptor(slideshowStatus) {
  const slideEntry = getSlideEntry(slideshowStatus);

  if (slideshowStatus.kind === 'deck') {
    return {
      kind: 'deck',
      deck: slideshowStatus.deck,
      slide: slideEntry,
    };
  }

  if (slideshowStatus.kind === 'mixed') {
    return slideEntry;
  }

  return {
    kind: 'legacy',
    slideshow: slideshowStatus.activeSlideshow,
    slide: slideEntry,
  };
}

function getSlideEntry(slideshowStatus) {
  const slides = slideshowStatus.slides || [];
  const activeSlide = slides[slideshowStatus.activeSlide];
  if (Array.isArray(activeSlide) && slideshowStatus.activeSubSlide >= 0) {
    return activeSlide[slideshowStatus.activeSubSlide];
  }
  return activeSlide;
}

function getActiveSlideGroup(slideshowStatus) {
  return slideshowStatus.slides?.[slideshowStatus.activeSlide];
}

function syncSlideDimensions(slideshowStatus, options = {}) {
  const activeGroup = getActiveSlideGroup(slideshowStatus);
  if (Array.isArray(activeGroup)) {
    slideshowStatus.activeSlideLength = activeGroup.length;
    if (options.resetSubSlide || slideshowStatus.activeSubSlide === undefined) {
      slideshowStatus.activeSubSlide = 0;
    } else {
      slideshowStatus.activeSubSlide = Math.max(0, Math.min(slideshowStatus.activeSubSlide, activeGroup.length - 1));
    }
  } else {
    slideshowStatus.activeSlideLength = undefined;
    slideshowStatus.activeSubSlide = undefined;
  }
}

export function handleCarouselButton(button, slideshowStatus) {
  const slideShow = document.querySelector('#slides');
  let change = false;
  const slides = slideshowStatus.slides || [];

  if (button.dataset.carouselButton === 'exit') {
    prepareSlideUnmount();
    clearPreviousSlideAssets();
    slideShow.style.display = 'none';
    slideshowStatus.activeSlideshow = undefined;
    slideshowStatus.activeSlideshowLength = undefined;
    slideshowStatus.activeSlide = undefined;
    slideshowStatus.activeSlideLength = undefined;
    slideshowStatus.activeSubSlide = undefined;
    slideshowStatus.kind = undefined;
    slideshowStatus.deck = undefined;
    slideshowStatus.slides = undefined;
    const oldContent = document.getElementById('slide');
    oldContent?.parentNode?.removeChild(oldContent);
    removeOldSlides(true);
    updateMainDots(slideshowStatus);
    updateSubDots(slideshowStatus);
    window.actionsCompleted = true;
    window.appStatus = 'orbit';
    return slideshowStatus;
  }

  if (!slides.length) return slideshowStatus;

  if (button.dataset.carouselButton === 'left') {
    if (slideshowStatus.activeSlide > 0) {
      slideshowStatus.activeSlide -= 1;
      syncSlideDimensions(slideshowStatus, { resetSubSlide: true });
      change = true;
    }
  }

  if (button.dataset.carouselButton === 'right') {
    if (slideshowStatus.activeSlide < slideshowStatus.activeSlideshowLength - 1) {
      slideshowStatus.activeSlide += 1;
      syncSlideDimensions(slideshowStatus, { resetSubSlide: true });
      change = true;
    }
  }

  if (button.dataset.carouselButton === 'up') {
    if (slideshowStatus.activeSubSlide > 0) {
      slideshowStatus.activeSubSlide -= 1;
      change = true;
    } else if (slideshowStatus.activeSlide > 0) {
      slideshowStatus.activeSlide -= 1;
      syncSlideDimensions(slideshowStatus, { resetSubSlide: true });
      change = true;
    }
  }

  if (button.dataset.carouselButton === 'down' && window.actionsCompleted === true) {
    if (slideshowStatus.activeSubSlide < slideshowStatus.activeSlideLength - 1 && slideshowStatus.activeSubSlide >= 0) {
      slideshowStatus.activeSubSlide += 1;
      change = true;
    } else if (slideshowStatus.activeSlide < slideshowStatus.activeSlideshowLength - 1) {
      slideshowStatus.activeSlide += 1;
      syncSlideDimensions(slideshowStatus, { resetSubSlide: true });
      change = true;
    }
  }

  if (change) {
    pushContent(slideshowStatus);
  }

  return slideshowStatus;
}

function removeOldSlides(immediate = false) {
  const oldContents = document.querySelectorAll('.old-slide');
  oldContents.forEach((oldContent) => {
    let fallbackTimer;
    const removeOldSlide = (event) => {
      if ((event?.propertyName === 'opacity' || immediate) && oldContent.parentNode) {
        oldContent.parentNode.removeChild(oldContent);
        oldContent.removeEventListener('transitionend', removeOldSlide);
        if (fallbackTimer) clearTimeout(fallbackTimer);
      }
    };

    oldContent.addEventListener('transitionend', removeOldSlide);

    fallbackTimer = setTimeout(() => {
      if (oldContent.parentNode) {
        oldContent.parentNode.removeChild(oldContent);
        oldContent.removeEventListener('transitionend', removeOldSlide);
      }
    }, immediate ? 0 : 700);

    if (immediate) removeOldSlide();
  });
}

function updateMainDots(slideshowStatus) {
  const mainDotContainer = document.getElementById('mainDotContainer');
  mainDotContainer.innerHTML = '';

  if (slideshowStatus.activeSlide !== undefined) {
    for (let i = 0; i < slideshowStatus.activeSlideshowLength; i += 1) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === slideshowStatus.activeSlide) {
        dot.classList.add('active');
      }
      mainDotContainer.appendChild(dot);
    }
  }
}

function updateSubDots(slideshowStatus) {
  const subDotContainer = document.getElementById('subDotContainer');
  subDotContainer.innerHTML = '';

  if (slideshowStatus.activeSubSlide !== undefined) {
    for (let i = 0; i < slideshowStatus.activeSlideLength; i += 1) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === slideshowStatus.activeSubSlide) {
        dot.classList.add('active');
      }
      subDotContainer.appendChild(dot);
    }
  }
}
