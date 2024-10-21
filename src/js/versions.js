export function initialiseVersion(callback, postLoadingManager, guttaState, scene, guttaHelperCenter) {
    const elements = {
        playButton: document.getElementById("playbutton"),
        credits: document.getElementById("credits"),
        skipButton: document.getElementById("skipbutton"),
        footer: document.getElementById("footer"),
        versionButtons: [
            document.getElementById("version1"),
            document.getElementById("version2"),
            document.getElementById("version3"),
        ],
    };

    const hideButtons = () => {
        elements.versionButtons.forEach((btn) => (btn.style.display = "none"));
        elements.footer.style.display = "none";
        elements.playButton.style.display = "block";
        elements.skipButton.style.display = "block";
        elements.credits.style.display = "block";
    };

    const handleButtonClick = (index) => {
        hideButtons(index === 2 || index === 3);
        return callback(index + 1, postLoadingManager, guttaState, scene, guttaHelperCenter);
    };

    elements.versionButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            handleButtonClick(index);
            window.appStatus = "intro-menu"
        });
        btn.addEventListener("touchend", (event) => {
            event.preventDefault(); // Prevent mouse event from firing after touch event
            handleButtonClick(index);
        });
    });
}
