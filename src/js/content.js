import * as THREE from 'three'
import { contentData } from "./data/contentData";
import ThreeMeshUI from 'three-mesh-ui'
import { previousVRSlide, nextVRSlide, openVRLink } from './main.js';

// Close to making CSS slides work
  // pushContent() both at nodeclick and arrowclicks (add up and down arrow for slideseries)
    //pushing each slide in this manner eliminates css and js conflicts

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
  /* if (subSlide == undefined) { */
    slideFileName = `/src/slides/${slideshow}/${slide}.html`;
    /* if (String(slide).includes('c')) cssFileName = `/src/slides/${slideshow}/${slide}.css`;
    if (String(slide).includes('j')) jsFileName = `/src/slides/${slideshow}/${slide}.js`; */
  /* } else {
    slideFileName = `/src/slides/${slideshow}/${slide}-${subSlide}.html`;
    cssFileName = `/src/slides/${slideshow}/${slide}-${subSlide}.css`;
    jsFileName = `/src/slides/${slideshow}/${slide}-${subSlide}.js`;
  } */

  console.log(slideFileName)

  const slideFileResponse = await fetch(slideFileName);
  const slideHtml = await slideFileResponse.text();

  let content = document.createElement("div");
  content.innerHTML = slideHtml;

  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = '/src/css/slides.css';
  content.appendChild(cssLink);
  if (String(slide).includes('c')) {
    cssFileName = `/src/slides/${slideshow}/${slide}.css`;
    const customCssLink = document.createElement('link');
    customCssLink.rel = 'stylesheet';
    customCssLink.href = cssFileName;
    content.appendChild(customCssLink);
  }

  const script = document.createElement('script');
  script.src = '/src/js/slides.js';
  content.appendChild(script);
  if (String(slide).includes('j')) {
    jsFileName = `/src/slides/${slideshow}/${slide}.js`;
    const customScript = document.createElement('script');
    customScript.src = jsFileName;
    content.appendChild(customScript);
  }

  const destination = document.getElementById("slide");
  destination.innerHTML = "";
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
  if (button.dataset.carouselButton === "down") {
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

  console.log(slideshowStatus)

  return slideshowStatus
}

/* 
export async function pushContent(index) {
  const slides = document.createElement("ul");
  slides.id = "ul_carousel";
  slides.dataset.slides = true;

  for (let i = 0; i < contentData[index].length; i++) {
    const slide = document.createElement("li");
    slide.className = "slide";
    if (i == 0) slide.dataset.active = true;

    // Fetch slide HTML
    const slideFileName = `/src/slides/slide${contentData[index][i]}.html`; // Update this as per your file naming convention and location
    const slideFileResponse = await fetch(slideFileName);
    const slideHtml = await slideFileResponse.text();

    // Create a new element and set its innerHTML to the loaded HTML
    let content = document.createElement("div");
    content.innerHTML = slideHtml;

    // Load associated CSS and JavaScript files
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = `/src/slides/slide${contentData[index][i]}.css`;
    content.appendChild(cssLink);

    const script = document.createElement('script');
    script.src = `/src/slides/slide${contentData[index][i]}.js`;
    content.appendChild(script);

    slide.appendChild(content);
    slides.appendChild(slide);
  }

  const parent = document.getElementById("div_carousel");
  const child = document.getElementById("ul_carousel");
  parent.replaceChild(slides, child);
}
 */

/* 
export function pushContent(index) {
    const slides = document.createElement("ul")
    slides.id="ul_carousel"
    slides.dataset.slides = true

    for(let i = 0; i < contentData[index].length; i++){
        const slide = document.createElement("li")
        slide.className="slide"
        if (i == 0) slide.dataset.active = true
        let content

        //ALMOST WORKING SLIDES SERIES ARRAY - CSS slides as I'm working on above would make this much easier...
        // if (Array.isArray(contentData[index][i])) {
        //     console.log("array")
        //     for(let j = 0; j < contentData[index][i].length; j++){
        //         if (contentData[index][i][j].includes("http")) {
        //           content = document.createElement("iframe");
        //           content.src = contentData[index][i][j]
        //         } else if (contentData[index][i][j].includes("/assets/images/")) {
        //             content = document.createElement("img");
        //             content.src = contentData[index][i][j]
        //         } else if (contentData[index][i][j].includes("img.")) {
        //             content = document.createElement("img");
        //             content.src = "https://" + contentData[index][i][j]
        //         } else {
        //             content = document.createElement("div")
        //             content.className = "quote"
        //             const p = document.createElement("p")
        //             p.innerHTML = contentData[index][i][j]
        //             let count = Math.round((3 - (p.innerHTML.match(/<br>/g) || []).length / 20) * 10) / 10
        //             let size = String(count + "vh")
        //             p.style.fontSize = size
        //             content.appendChild(p)  
        //         }
        //     }
        // } else 
        
        if (contentData[index][i].includes("http")) {
            content = document.createElement("iframe");
            content.src = contentData[index][i]
        } else if (contentData[index][i].includes("/assets/images/")) {
            content = document.createElement("img");
            content.src = contentData[index][i]
        } else if (contentData[index][i].includes("img.")) {
            content = document.createElement("img");
            content.src = "https://" + contentData[index][i]
        } else {
            content = document.createElement("div")
            content.className = "quote"
            const p = document.createElement("p")
            p.innerHTML = contentData[index][i]
            let count = Math.round((3 - (p.innerHTML.match(/<br>/g) || []).length / 20) * 10) / 10
            let size = String(count + "vh")
            p.style.fontSize = size
            content.appendChild(p)  
        }

        slide.appendChild(content)
        slides.appendChild(slide)
    }

    const parent = document.getElementById("div_carousel");
    const child = document.getElementById("ul_carousel");
    parent.replaceChild(slides, child);
} */

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

/* export function handleCarouselButton(button) {
  const carousel = document.querySelector('.carousel');

  if (button.dataset.carouselButton === "exit") {
    carousel.style.display = "none";
    activeCarousel = undefined
  } else {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    } else if (newIndex >= slides.children.length) {
      newIndex = slides.children.length;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  }
} */