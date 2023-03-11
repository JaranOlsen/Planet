import * as THREE from 'three'
import { contentData } from "./data/contentData";
import ThreeMeshUI from 'three-mesh-ui'
import { previousVRSlide, nextVRSlide, openVRLink } from './main';

export function pushContent(index) {
    const slides = document.createElement("ul")
    slides.id="ul_carousel"
    slides.dataset.slides = true

    for(let i = 0; i < contentData[index].length; i++){
        const slide = document.createElement("li")
        slide.className="slide"
        if (i == 0) slide.dataset.active = true
        let content
        if (contentData[index][i].includes("http")) {
            content = document.createElement("iframe");
            content.src = contentData[index][i]
        } else if (contentData[index][i].includes("/img/")) {
            content = document.createElement("img");
            content.src = contentData[index][i]
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


/* export function pushVRContent(index) {
    const UIcontainer = new ThreeMeshUI.Block({
        ref: "UIcontainer",
        padding: 0.025,
        fontFamily: './fonts/SourceSans3-Regular-msdf.json',
        fontTexture:'./fonts/SourceSans3-Regular-msdf.png',
        fontColor: new THREE.Color(0xffffff),
        backgroundOpacity: 0,
      });
    
      //
    
      const title = new ThreeMeshUI.Block({
        height: 0.2,
        width: 2.25,
        margin: 0.025,
        justifyContent: "center",
        fontSize: 0.09,
      });
    
      title.add(
        new ThreeMeshUI.Text({
          content: "TWO LEVELS OF TRUTH",
        })
      );
    
      UIcontainer.add(title);
    
      //
    
      const leftSubBlock = new ThreeMeshUI.Block({
        height: 0.95,
        width: 1.75,
        margin: 0.025,
        padding: 0.025,
        textAlign: "left",
        justifyContent: "end",
      });
    
      const caption = new ThreeMeshUI.Block({
        height: 0.07,
        width: 1.37,
        textAlign: "center",
        justifyContent: "center",
      });
    
      caption.add(
        new ThreeMeshUI.Text({
          content: "Must be transcended to realize Absolute Truth",
          fontSize: 0.02,
        })
      );
    
      leftSubBlock.add(caption);
    
      //
    
      const rightSubBlock = new ThreeMeshUI.Block({
        margin: 0.025,
      });
    
      const subSubBlock1 = new ThreeMeshUI.Block({
        height: 0.35,
        width: 0.5,
        margin: 0.025,
        padding: 0.02,
        fontSize: 0.04,
        justifyContent: "center",
        backgroundOpacity: 0,
      }).add(
        new ThreeMeshUI.Text({
          content: "Based on distinctions, concepts, language, symbols.",
        }),
    
        new ThreeMeshUI.Text({
          content: " Sankhara",
          fontColor: new THREE.Color(0x92e66c),
        }),
    
        new ThreeMeshUI.Text({
          content: " = conditioned, constructed, fabricated, compounded.",
        })
      );
    
      const subSubBlock2 = new ThreeMeshUI.Block({
        height: 0.53,
        width: 0.5,
        margin: 0.01,
        padding: 0.02,
        fontSize: 0.025,
        alignItems: "start",
        textAlign: 'justify',
        backgroundOpacity: 0,
      }).add(
        new ThreeMeshUI.Text({
          content:
            String(contentData[index][0])
        })
      );
    
      rightSubBlock.add(subSubBlock1, subSubBlock2);
    
      //
    
      const contentContainer = new ThreeMeshUI.Block({
        contentDirection: "row",
        padding: 0.02,
        margin: 0.025,
        backgroundOpacity: 0,
      });
    
      contentContainer.add(leftSubBlock, rightSubBlock);
      UIcontainer.add(contentContainer);
    
      //
    
      new THREE.TextureLoader().load(String(contentData[index][0]), (texture) => {
        leftSubBlock.set({
          backgroundTexture: texture,
        });
      });

    return UIcontainer
}
 */