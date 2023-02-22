import { contentData } from "./data/contentData";

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
