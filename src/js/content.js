import * as THREE from 'three'
import { contentData } from "./data/contentData";
import ThreeMeshUI from 'three-mesh-ui'
import { previousVRSlide, nextVRSlide, openVRLink } from './main.js';
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
  const oldScripts = Array.from(document.querySelectorAll('script'));
  for (let i = oldScripts.length - 1; i >= 0; i--) {
    const oldScript = oldScripts[i];
    oldScript.parentNode.removeChild(oldScript);
  }

  const slideshow = slideshowStatus.activeSlideshow
  let slide
  if (slideshowStatus.activeSubSlide >= 0) {
    slide = contentData[slideshow][slideshowStatus.activeSlide][slideshowStatus.activeSubSlide]
  } else {
    slide = contentData[slideshow][slideshowStatus.activeSlide]
  }
  let slideFileName
  let cssFileName
  let jsFileName

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
    jsPromise = fetch(jsFileName).then(response => response.text());
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
      /* customCssLink.onload = resolve; */
      
      
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

  Promise.all([cssPromise, jsPromise]).then(values => {
    if (String(slide).includes('j')) {
      eval(values[1]); // values[1] contains JS file text
    }

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

/* export async function pushContent(slideshowStatus) {
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
  const oldScripts = Array.from(document.querySelectorAll('script'));
  for (let i = oldScripts.length - 1; i >= 0; i--) {
    const oldScript = oldScripts[i];
    oldScript.parentNode.removeChild(oldScript);
  }

  const slideshow = slideshowStatus.activeSlideshow
  let slide
  if (slideshowStatus.activeSubSlide >= 0) {
    slide = contentData[slideshow][slideshowStatus.activeSlide][slideshowStatus.activeSubSlide]
  } else {
    slide = contentData[slideshow][slideshowStatus.activeSlide]
  }
  let slideFileName
  let cssFileName
  let jsFileName

  slideFileName = `/Planet/assets/slides/data/${slideshow}/${slide}.html`;

  const slideFileResponse = await fetch(slideFileName);
  const slideHtml = await slideFileResponse.text();

  let content = document.createElement("div");
  content.id = 'slide';
  content.innerHTML = slideHtml;

  if (String(slide).includes('c')) {
    cssFileName = `/Planet/assets/slides/data/${slideshow}/${slide}.css`;
    const customCssLink = document.createElement('link');
    customCssLink.rel = 'stylesheet';
    customCssLink.href = cssFileName;
    content.appendChild(customCssLink);
  }

  if (String(slide).includes('j')) {
    jsFileName = `/Planet/assets/slides/data/${slideshow}/${slide}.js`;
    const scriptResponse = await fetch(jsFileName);
    const scriptText = await scriptResponse.text();
    eval(scriptText);
  }

  // Append the new slide
destination.appendChild(content);

// Dispatch an event to signal that the new slide has been loaded
let event = new CustomEvent('slideLoaded');
window.dispatchEvent(event);

  // Set the ID to new content and remove fade-out if it's there
  content.id = 'slide';
  content.classList.remove('fade-out');

  updateSlide()

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

  updateMainDots(slideshowStatus);
  updateSubDots(slideshowStatus);
} */

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

export function pushVRContent(slideshow, slide) {
    const UIcontainer = new ThreeMeshUI.Block({
        ref: "UIcontainer",
        padding: 0.025,
        fontFamily: './fonts/SourceSans3-Regular-msdf.json',
        fontTexture:'./fonts/SourceSans3-Regular-msdf.png',
        fontColor: new THREE.Color(0xffffff),
        backgroundOpacity: 0,
      });

      const slideshowContainer = new ThreeMeshUI.Block({
        height: 0.9,
        width: 1.8,
        margin: 0.025,
        padding: 0.025,
        fontSize: 0.025,
        textAlign: "center",
        justifyContent: "center",
        contentDirection: "row",
        backgroundOpacity: 0,
      })

      const leftArrow = new ThreeMeshUI.Block({
        ref: "left",
        height: 0.1,
        width: 0.1,
        fontSize: 0.025,
        bestFit: "auto",
        textAlign: "center",
        justifyContent: "center",
        backgroundOpacity: 1,
      }).add(
        new ThreeMeshUI.Text({
          content: "previous",
        })
      );
      const rightArrow = new ThreeMeshUI.Block({
        ref: "right",
        height: 0.1,
        width: 0.1,
        fontSize: 0.025,
        bestFit: "auto",
        textAlign: "center",
        justifyContent: "center",
        backgroundOpacity: 1,
      })
        const rightButton = new ThreeMeshUI.Text({
          content: "next",
        })
        rightArrow.add(rightButton)

      const hoveredStateAttributes = {
        state: 'hovered',
        attributes: {
          offset: 0.035,
          backgroundColor: new THREE.Color( 0x999999 ),
          backgroundOpacity: 1,
          fontColor: new THREE.Color( 0xffffff )
        },
      };
    
      const idleStateAttributes = {
        state: 'idle',
        attributes: {
          offset: 0.035,
          backgroundColor: new THREE.Color( 0x666666 ),
          backgroundOpacity: 0.3,
          fontColor: new THREE.Color( 0xffffff )
        },
      };

      // Create states for the buttons.
      // In the loop, we will call component.setState( 'state-name' ) when mouse hover or click

      const selectedAttributes = {
        offset: 0.02,
        backgroundColor: new THREE.Color( 0x777777 ),
        fontColor: new THREE.Color( 0x222222 )
      };

      rightArrow.setupState( {
        state: 'selected',
        attributes: selectedAttributes,
        onSet: () => {

          nextVRSlide()

        }
      } );
      rightArrow.setupState( hoveredStateAttributes );
      rightArrow.setupState( idleStateAttributes );

      //

      leftArrow.setupState( {
        state: 'selected',
        attributes: selectedAttributes,
        onSet: () => {

          previousVRSlide()

        }
      } );
      leftArrow.setupState( hoveredStateAttributes );
      leftArrow.setupState( idleStateAttributes );

      //

        slideshowActions.push(leftArrow, rightArrow)

      const contentContainer = new ThreeMeshUI.Block({
        height: 0.9,
        width: 1.6,
        margin: 0.025,
        padding: 0.025,
        fontSize: 0.025,
        bestFit: "auto",
        textAlign: "center",
        justifyContent: "center",
      })

      console.log(slideshow, slide, contentData[slideshow][slide])
      if (contentData[slideshow][slide].includes("http")) {
        
        const hyperLink = new ThreeMeshUI.Text({
            content: contentData[slideshow][slide],
          })
        
        contentContainer.add(hyperLink)

        hyperLink.setupState( {
          state: 'selected',
          attributes: selectedAttributes,
          onSet: () => {
            openVRLink()
          }
        } );
        hyperLink.setupState( hoveredStateAttributes );
        hyperLink.setupState( idleStateAttributes );
        slideshowActions.push(hyperLink)
  
        new THREE.TextureLoader().load("./img/background/solarsystem.webp", (texture) => {
          contentContainer.set({
            backgroundTexture: texture,
          });
        });

    } else if (contentData[slideshow][slide].includes("/img/")) {
      const url = String(contentData[slideshow][slide])
      const textureLoader = new THREE.TextureLoader()
      textureLoader.crossOrigin = "Anonymous"
      const texture1 = textureLoader.load(url, (texture) => {
        contentContainer.set({
          backgroundTexture: texture,
        });
      });

    } else {
      const stripText = contentData[slideshow][slide].replace(/<br>/gi, "\n");
      const text = stripText.replace(/(<([^>]+)>)/gi, "");
      contentContainer.add(
        new ThreeMeshUI.Text({
          content: text,
        })
      );

      new THREE.TextureLoader().load("./img/background/bagan.jpg", (texture) => {
        contentContainer.set({
          backgroundTexture: texture,
        });
      });
    }
    
      slideshowContainer.add(leftArrow);
      slideshowContainer.add(contentContainer);
      slideshowContainer.add(rightArrow);
    
      UIcontainer.add(slideshowContainer);

      //

     

    return UIcontainer
}