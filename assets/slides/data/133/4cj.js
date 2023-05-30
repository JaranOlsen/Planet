/* (function() {
    let currentPoint = 0;
    const bulletPoints = document.querySelectorAll(".bullet");
    const bulletPointsContainer = document.querySelector('.bullet-points-container');

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
    window.addEventListener('click', () => {
        if (currentPoint < bulletPoints.length) {
            bulletPoints[currentPoint].style.opacity = "1";
            currentPoint++;
            if (currentPoint == bulletPoints.length) window.actionsCompleted = true
        }
    });
    window.addEventListener('keyup', (event) => {
        if (event.key === "PageDown" || event.key === "ArrowDown") {
            if (currentPoint < bulletPoints.length) {
                bulletPoints[currentPoint].style.opacity = "1";
                currentPoint++;
                if (currentPoint == bulletPoints.length) window.actionsCompleted = true;
            }
        }
    });

    // Call the function to set the initial font size
    adjustFontSize();
})();

 */