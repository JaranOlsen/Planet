(function() {

    // APPEAR ANIMATION
let allElements = document.querySelectorAll('#slide .appear');
let oldSlideElements = document.querySelectorAll('#old-slide .appear');
let elements = Array.from(allElements).filter(element => !Array.from(oldSlideElements).includes(element));
if (elements.length > 0) {
    let currentPoint = 0;

    // Make all elements initially invisible
    elements.forEach(element => {
        element.style.opacity = "0";
    });

    window.actionsCompleted = false

    window.slideEvents = {
        handleClick: function () {
            let elements = document.querySelectorAll('#slide .appear:not(#old-slide .appear)');
            if (currentPoint < elements.length) {
                elements[currentPoint].style.opacity = "1";
                currentPoint++;
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
        let bulletPoints = Array.from(item.querySelectorAll('.bullet'));
        let fontSize = 5; // Start from a large value, you can adjust this

        bulletPoints.forEach(bulletPoint => {
            bulletPoint.style.fontSize = `${fontSize}vw`;
        });

        let fitsContainer = false;
        let safetyCounter = 0;

        const checkFit = () => {
            // Get the last bullet point's bottom position
            const lastBulletBottom = bulletPoints[bulletPoints.length - 1].getBoundingClientRect().bottom;
            // Get the container's bottom position
            const containerBottom = item.getBoundingClientRect().bottom;

            // Check if the last bullet point's bottom position is above the container's bottom position
            if(lastBulletBottom <= containerBottom) {
                fitsContainer = true;
            }

            safetyCounter += 1;
            // Prevent an infinite loop if something goes wrong
            if(safetyCounter > 500) {
                fitsContainer = true;
                console.log("Error: safetyCounter limit exceeded")
            }

            if(!fitsContainer) {
                fontSize -= 0.1;
                bulletPoints.forEach(bulletPoint => {
                    let parentBullet = bulletPoint.closest('li.bullet ul');
                    if (parentBullet) {
                        // This is a sub-bullet point, decrease its font size by 20%
                        bulletPoint.style.fontSize = `${fontSize * 0.8}vw`;
                    } else {
                        // This is a main bullet point
                        bulletPoint.style.fontSize = `${fontSize}vw`;
                    }
                });
                // Give the browser a chance to render before checking again
                requestAnimationFrame(checkFit);
            }
        };

        // Start the checking process
        checkFit();
    };

    bullets.forEach(adjustFontSize);
}

    
})();