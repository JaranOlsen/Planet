window.addEventListener('DOMContentLoaded', (event) => {
    const animatedImage = document.querySelector('.animated-image');
    const animatedText = document.querySelector('.animated-text');

    animatedImage.style.transition = "all 2s";
    animatedText.style.transition = "all 2s";

    animatedImage.style.transform = "translateX(100px)";
    animatedText.style.color = "red";
});