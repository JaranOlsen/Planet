
(function() {
    const bulletSlide = document.querySelector("#slide[data-active='bullets']");
    if (bulletSlide) {
        let currentPoint = 0;
        let bulletPoints = bulletSlide.querySelectorAll(".bullet");
        const bulletPointsContainer = bulletSlide.querySelector('.bullet-points-container');

        const adjustFontSize = () => {
            const numPoints = bulletPoints.length;
            if (numPoints <= 3) {
                bulletPointsContainer.style.fontSize = "4vw";
            } else if (numPoints <= 5) {
                bulletPointsContainer.style.fontSize = "3vw";
            } else {
                bulletPointsContainer.style.fontSize = "2vw";
            }
        };

        window.actionsCompleted = false

        window.slideEvents = {
            handleClick: function () {
                if (currentPoint < bulletPoints.length) {
                    bulletPoints[currentPoint].style.opacity = "1";
                    currentPoint++;
                    console.log(currentPoint, bulletPoints.length)
                    if (currentPoint == bulletPoints.length) {
                        window.actionsCompleted = true;
                    }
                }
            },
            handleKeyUp: function (event) {
                if (event.key === "PageDown" || event.key === "ArrowDown") {
                    if (currentPoint < bulletPoints.length) {
                        bulletPoints[currentPoint].style.opacity = "1";
                        currentPoint++;
                        console.log(currentPoint, bulletPoints.length)
                        if (currentPoint == bulletPoints.length) {
                            window.actionsCompleted = true;
                        }
                    }
                }
            }
        };
        
        window.addEventListener('click', window.slideEvents.handleClick);
        window.addEventListener('keyup', window.slideEvents.handleKeyUp);   

        adjustFontSize();
    }
})();

