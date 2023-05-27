let currentPoint = 0;
const bulletPoints = document.querySelectorAll(".bullet");

window.addEventListener('click', () => {
    if (currentPoint < bulletPoints.length) {
        bulletPoints[currentPoint].style.opacity = "1";
        currentPoint++;
    }
});