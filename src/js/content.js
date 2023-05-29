import * as THREE from 'three'
import { contentData } from "./data/contentData";
import ThreeMeshUI from 'three-mesh-ui'
import { previousVRSlide, nextVRSlide, openVRLink } from './main.js';

export async function pushContent(slideshowStatus) {
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
  console.log(slideFileName)

  const slideFileResponse = await fetch(slideFileName);
  const slideHtml = await slideFileResponse.text();

  let content = document.createElement("div");
  content.id = 'slide';
  content.innerHTML = slideHtml;

  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = '/Planet/assets/slides/slides.css';
  content.appendChild(cssLink);
  if (String(slide).includes('c')) {
    cssFileName = `/Planet/assets/slides/data/${slideshow}/${slide}.css`;
    const customCssLink = document.createElement('link');
    customCssLink.rel = 'stylesheet';
    customCssLink.href = cssFileName;
    content.appendChild(customCssLink);
  }

  const script = document.createElement('script');
  script.src = '/Planet/assets/slides/slides.js';
  content.appendChild(script);
  if (String(slide).includes('j')) {
    jsFileName = `/Planet/assets/slides/data/${slideshow}/${slide}.js`;
    const customScript = document.createElement('script');
    customScript.src = jsFileName;
    content.appendChild(customScript);
  }

  const destination = document.getElementById("slideContainer");
  const oldContent = document.getElementById('slide');
  if(oldContent) {
    oldContent.style.opacity = '0';
    oldContent.addEventListener('transitionend', function() {
      oldContent.parentNode.removeChild(oldContent);
    });
  }

  destination.appendChild(content);
}

export function handleCarouselButton(button, slideshowStatus) {
  const slideShow = document.querySelector('.slides');
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

  if (change) pushContent(slideshowStatus)

  return slideshowStatus
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