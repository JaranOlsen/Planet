(function() {

    // APPEAR ANIMATION
    let allElements = document.querySelectorAll('#slide .appear');
    let oldSlideElements = document.querySelectorAll('#old-slide .appear');
    let elements = Array.from(allElements).filter(element => !Array.from(oldSlideElements).includes(element));
    if (elements.length > 0) {
        let currentPoint = 0;

        window.actionsCompleted = false

        window.slideEvents = {
            handleClick: function () {
                let elements = document.querySelectorAll('#slide .appear:not(#old-slide .appear)');
                if (currentPoint < elements.length) {
                    elements[currentPoint].style.opacity = "1";
                    currentPoint++;
                    console.log(currentPoint, elements.length)
                    if (currentPoint == elements.length) {
                        window.actionsCompleted = true;
                    }
                }
            },
            handleKeyUp: function (event) {
                let elements = document.querySelectorAll('#slide .appear:not(#old-slide .appear)');
                if (event.key === "PageDown" || event.key === "ArrowDown") {
                    if (currentPoint < elements.length) {
                        elements[currentPoint].style.opacity = "1";
                        currentPoint++;
                        if (currentPoint == elements.length) {
                            window.actionsCompleted = true;
                        }
                    }
                }
            }
        };
        
        window.addEventListener('click', window.slideEvents.handleClick);
        window.addEventListener('keyup', window.slideEvents.handleKeyUp);   
    }
    

    // TEXTSLIDES
    let allTexts = document.querySelectorAll('#slide .textContent');
    let oldSlideTexts = document.querySelectorAll('#old-slide .textContent');
    let texts = Array.from(allTexts).filter(texts => !Array.from(oldSlideTexts).includes(texts));
    if (texts.length > 0) {
        const adjustFontSize = (item) => {
            let totalTextLength = 0;
            texts.forEach(text => {
                totalTextLength += text.innerText.length;
            });
        
            let fontSize;
        
            if (totalTextLength > 600) {
                fontSize = "1.5vw";
            } else if (totalTextLength > 300) {
                fontSize = "2vw";
            } else fontSize = "2.5vw";
        
            texts.forEach(text => {
                text.style.fontSize = fontSize;
            });
        };         

        texts.forEach(adjustFontSize);
    }
    
    // BULLETSLIDES
    let allBullets = document.querySelectorAll('#slide .bullets');
    let oldSlideBullets = document.querySelectorAll('#old-slide .bullets');
    let bullets = Array.from(allBullets).filter(bullet => !Array.from(oldSlideBullets).includes(bullet));
    if (bullets.length > 0) {
        const adjustFontSize = (item) => {
            let bulletPoints = item.querySelectorAll('.bullet');
            let totalTextLength = 0;
            bulletPoints.forEach(bulletPoint => {
                totalTextLength += bulletPoint.innerText.length;
            });
        
            const numPoints = bulletPoints.length;
            let fontSize;
            if (numPoints <= 3) {
                fontSize = "4vw";
            } else if (numPoints <= 5) {
                fontSize = "3vw";
            } else {
                fontSize = "2vw";
            }
        
            if (totalTextLength > 600) {
                fontSize = "1.5vw";
            } else if (totalTextLength > 300) {
                fontSize = "2vw";
            }
        
            bulletPoints.forEach(bulletPoint => {
                bulletPoint.style.fontSize = fontSize;
            });
        };          

        bullets.forEach(adjustFontSize);
    }
})();