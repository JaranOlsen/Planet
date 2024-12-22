import { contentData } from "./data/contentData";
import { updateSlide } from './slides';

export async function pushContent(slideshowStatus) {
  const oldSlide = document.querySelector('.old-slide');
  if (oldSlide) {
    oldSlide.removeEventListener('transitionend', window.currentTransitionEndHandler);
    if (oldSlide.parentNode) {
      oldSlide.parentNode.removeChild(oldSlide);
    }
  }

  const destination = document.getElementById("slideContainer");

  // Prepare current slide for removal
  const currentSlide = document.querySelector("#slide")
  if(currentSlide) {
    currentSlide.removeAttribute("data-active");
    currentSlide.classList.add("fade-out") 
    currentSlide.classList.add("old-slide") 
  }

  // Remove old scripts
  const oldScripts = document.querySelectorAll('script[data-slide-script]');
  oldScripts.forEach(script => script.parentNode.removeChild(script));

  const slideshow = slideshowStatus.activeSlideshow;
  let slide;
  if (slideshowStatus.activeSubSlide >= 0) {
    slide = contentData[slideshow][slideshowStatus.activeSlide][slideshowStatus.activeSubSlide];
  } else {
    slide = contentData[slideshow][slideshowStatus.activeSlide];
  }
  let slideFileName;
  let cssFileName;
  let jsFileName;

  slideFileName = `/Planet/assets/slides/data/${slideshow}/${slide}.html`;

  const slideFileResponse = await fetch(slideFileName);
  const slideHtml = await slideFileResponse.text();

  let content = document.createElement("div");
  content.id = 'slide';
  content.innerHTML = slideHtml;

  // Fetch the JS file
  let jsPromise = Promise.resolve();
  if (String(slide).includes('j')) {
    jsFileName = `/Planet/assets/slides/data/${slideshow}/${slide}.js`;
    const scriptElement = document.createElement('script');
    scriptElement.src = jsFileName;
    scriptElement.defer = true;
    scriptElement.setAttribute('data-slide-script', '');
    jsPromise = new Promise((resolve, reject) => {
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
    });
    document.head.appendChild(scriptElement);
  }

  // Load the CSS file
  let cssPromise = Promise.resolve();
  const oldCssLink = document.getElementById('slideCss');
  if (oldCssLink) {
    document.head.removeChild(oldCssLink);
  }
  if (String(slide).includes('c')) {
    cssFileName = `/Planet/assets/slides/data/${slideshow}/${slide}.css`;
    const customCssLink = document.createElement('link');
    customCssLink.id = 'slideCss';
    customCssLink.rel = 'stylesheet';
    customCssLink.href = cssFileName;
    cssPromise = new Promise((resolve, reject) => {
      customCssLink.onload = () => {
        const bgImageUrl = extractBackgroundUrl(customCssLink.sheet.cssRules[0].cssText);
        if (bgImageUrl) {
          const img = new Image();
          img.src = bgImageUrl;
          img.onload = resolve;
          img.onerror = reject;
        } else {
          resolve();
        }
      };
      customCssLink.onerror = reject;
      document.head.appendChild(customCssLink);
    });
  }

  Promise.all([cssPromise, jsPromise]).then(() => {
    destination.appendChild(content);

    // Dispatch an event to signal that the new slide has been loaded
    let event = new CustomEvent('slideLoaded');
    window.dispatchEvent(event);

    // Set the ID to new content and remove fade-out if it's there
    content.id = 'slide';
    content.classList.remove('fade-out');

    updateSlide();
    removeOldSlides();
    updateMainDots(slideshowStatus);
    updateSubDots(slideshowStatus);
  }).catch(e => {
    console.error('Error loading CSS/JS:', e);
  });
}

function extractBackgroundUrl(cssText) {
  const urlMatch = cssText.match(/url\(["']?([^"')]+)["']?\)/);
  return urlMatch ? urlMatch[1] : null;
}

function removeOldSlides() {
  // Remove old slides
  const oldContents = document.querySelectorAll('.old-slide');
  oldContents.forEach(oldContent => {
    const removeOldSlide = (e) => {
      if (e.propertyName === 'opacity' && oldContent && oldContent.parentNode) {
        oldContent.parentNode.removeChild(oldContent);
        oldContent.removeEventListener('transitionend', removeOldSlide);
        clearTimeout(fallbackTimer);
      }
    }

    // Save the current transition end event handler
    window.currentTransitionEndHandler = removeOldSlide;
    oldContent.addEventListener('transitionend', window.currentTransitionEndHandler);
  
    let fallbackTimer = setTimeout(() => {
      if (oldContent && oldContent.parentNode) {
        oldContent.parentNode.removeChild(oldContent);
        oldContent.removeEventListener('transitionend', removeOldSlide);
      }
    }, 1000); // Timeout duration set to 1000ms, adjust based on your transition duration
  });
};

export function handleCarouselButton(button, slideshowStatus) {
  const slideShow = document.querySelector('#slides');
  let change = false

  if (button.dataset.carouselButton === "exit") {
    slideShow.style.display = "none";
    slideshowStatus.activeSlideshow = undefined;
    slideshowStatus.activeSlideshowLength = undefined;
    slideshowStatus.activeSlide = undefined;
    slideshowStatus.activeSlideLength = undefined;
    slideshowStatus.activeSubSlide = undefined;
    const oldContent = document.getElementById('slide');
    oldContent.parentNode.removeChild(oldContent);
    updateMainDots(slideshowStatus);
    updateSubDots(slideshowStatus);
    window.actionsCompleted = true;
    window.appStatus = "orbit";
    return slideshowStatus;
  } 
  if (button.dataset.carouselButton === "left") {
    if (slideshowStatus.activeSlide > 0) {
      slideshowStatus.activeSlide -= 1
      change = true
      if (Array.isArray(contentData[slideshowStatus.activeSlideshow][slideshowStatus.activeSlide])) {
        slideshowStatus.activeSlideLength = contentData[slideshowStatus.activeSlideshow][slideshowStatus.activeSlide].length
        slideshowStatus.activeSubSlide = 0
      } else {
        slideshowStatus.activeSlideLength = undefined
        slideshowStatus.activeSubSlide = undefined
      }
    } 
  }
  if (button.dataset.carouselButton === "right") {
    if (slideshowStatus.activeSlide < slideshowStatus.activeSlideshowLength - 1) {
      slideshowStatus.activeSlide += 1
      change = true
      if (Array.isArray(contentData[slideshowStatus.activeSlideshow][slideshowStatus.activeSlide])) {
        slideshowStatus.activeSlideLength = contentData[slideshowStatus.activeSlideshow][slideshowStatus.activeSlide].length
        slideshowStatus.activeSubSlide = 0
      }  else {
        slideshowStatus.activeSlideLength = undefined
        slideshowStatus.activeSubSlide = undefined
      }
    } 
  }
  if (button.dataset.carouselButton === "up") {
    if (slideshowStatus.activeSubSlide > 0 ) {
      slideshowStatus.activeSubSlide -= 1
      change = true
    } else if (slideshowStatus.activeSlide > 0) {
      slideshowStatus.activeSlide -= 1
      change = true
      if (Array.isArray(contentData[slideshowStatus.activeSlideshow][slideshowStatus.activeSlide])) {
        slideshowStatus.activeSlideLength = contentData[slideshowStatus.activeSlideshow][slideshowStatus.activeSlide].length
        slideshowStatus.activeSubSlide = 0
      }  else {
        slideshowStatus.activeSlideLength = undefined
        slideshowStatus.activeSubSlide = undefined
      }
    }
  } 
  if (button.dataset.carouselButton === "down" && window.actionsCompleted == true) {
    if (slideshowStatus.activeSubSlide < slideshowStatus.activeSlideLength - 1 && slideshowStatus.activeSubSlide >= 0) {
      slideshowStatus.activeSubSlide += 1
      change = true
    } else if (slideshowStatus.activeSlide < slideshowStatus.activeSlideshowLength - 1) {
      slideshowStatus.activeSlide += 1
      change = true
      if (Array.isArray(contentData[slideshowStatus.activeSlideshow][slideshowStatus.activeSlide])) {
        slideshowStatus.activeSlideLength = contentData[slideshowStatus.activeSlideshow][slideshowStatus.activeSlide].length
        slideshowStatus.activeSubSlide = 0
      }  else {
        slideshowStatus.activeSlideLength = undefined
        slideshowStatus.activeSubSlide = undefined
      }
    }
  } 

  if (change) {
    pushContent(slideshowStatus)
  }

  return slideshowStatus
}

function updateMainDots(slideshowStatus) {
  const mainDotContainer = document.getElementById("mainDotContainer");
  mainDotContainer.innerHTML = ""; // Clear the previous dots
  
  if (slideshowStatus.activeSlide != undefined) {
    for(let i = 0; i < slideshowStatus.activeSlideshowLength; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot"); 
        if(i === slideshowStatus.activeSlide) {
            dot.classList.add("active"); 
        }
        mainDotContainer.appendChild(dot);
    }
  }
}

function updateSubDots(slideshowStatus) {
  const subDotContainer = document.getElementById("subDotContainer");
  subDotContainer.innerHTML = ""; // Clear the previous dots

  if (slideshowStatus.activeSubSlide != undefined) {
    for(let i = 0; i < slideshowStatus.activeSlideLength; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot"); 
        if(i === slideshowStatus.activeSubSlide) {
            dot.classList.add("active"); 
        }
        subDotContainer.appendChild(dot);
    }
  }
}