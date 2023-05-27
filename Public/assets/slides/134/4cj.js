// slide.js
let currentPoint = 0;
const bulletPoints = document.querySelectorAll(".bullet");
const bulletPointsContainer = document.querySelector('.bullet-points-container');

const adjustFontSize = () => {
    const numPoints = bulletPoints.length;
    if (numPoints <= 3) {
        bulletPointsContainer.style.fontSize = "4em";
    } else if (numPoints <= 5) {
        bulletPointsContainer.style.fontSize = "3em";
    } else {
        bulletPointsContainer.style.fontSize = "2em";
    }
};

window.addEventListener('click', () => {
    if (currentPoint < bulletPoints.length) {
        bulletPoints[currentPoint].style.opacity = "1";
        currentPoint++;
    }
});

// Call the function to set the initial font size
adjustFontSize();
