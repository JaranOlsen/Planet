import * as THREE from 'three'
import { contentData } from "./data/contentData";
import ThreeMeshUI from 'three-mesh-ui'

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
export function pushVRContent(index, UI, UIcontainer, contentContainer, jaranius, position, middleOfPlanet) {
    UIcontainer = new ThreeMeshUI.Block({
        ref: "UIcontainer",
        padding: 0.025,
        fontFamily: './fonts/Roboto-msdf.json',
        fontTexture:'./fonts/Roboto-msdf.png',
        fontColor: new THREE.Color(0xffffff),
        backgroundOpacity: 0,
      });
      
    UI.add(UIcontainer);
    UIcontainer.position.set(position.x, position.y, position.z)
    UIcontainer.lookAt(middleOfPlanet)
    UIcontainer.rotateY(Math.PI)
    jaranius.add(UI)

    
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
    
      contentContainer = new ThreeMeshUI.Block({
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
}

/* export function pushVRContent(index) {
    const farRightBlock = new ThreeMeshUI.Block({
        height: 0.53,
        width: 0.5,
        margin: 0.01,
        padding: 0.02,
        fontSize: 0.025,
        fontFamily: './fonts/Roboto-msdf.json',
        fontTexture:'./fonts/Roboto-msdf.png',
        alignItems: "start",
        textAlign: 'justify',
        backgroundOpacity: 0,
      }).add(
        new ThreeMeshUI.Text({
          content:
            contentData[index]
        })
      );
    
    return { farRightBlock }
} */
