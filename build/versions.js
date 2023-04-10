export function initializeVersion(callback, postLoadingManager, guttaState, scene, guttaHelperCenter) {
    const elements = {
        playButton: document.getElementById("playbutton"),
        credits: document.getElementById("credits"),
        skipButton: document.getElementById("skipbutton"),
        enableVRbutton: document.getElementById("enableVRbutton"),
        keys: document.getElementById("keys"),
        versionButtons: [
            document.getElementById("version1"),
            document.getElementById("version2"),
            document.getElementById("version3"),
            document.getElementById("version4"),
        ],
    };

    const hideButtons = (showVR) => {
        elements.versionButtons.forEach((btn) => (btn.style.display = "none"));
        elements.keys.style.display = "none";
        elements.playButton.style.display = "block";
        elements.skipButton.style.display = "block";
        elements.credits.style.display = "block";
        elements.enableVRbutton.style.display = showVR ? "block" : "none";
    };

    /* elements.versionButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            hideButtons(index === 2 || index === 3);
            return callback(index + 1, postLoadingManager, guttaState, scene, guttaHelperCenter);
        });
    }); */

    const handleButtonClick = (index) => {
        hideButtons(index === 2 || index === 3);
        return callback(index + 1, postLoadingManager, guttaState, scene, guttaHelperCenter);
    };

    elements.versionButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            handleButtonClick(index);
        });
        btn.addEventListener("touchend", (event) => {
            event.preventDefault(); // Prevent mouse event from firing after touch event
            handleButtonClick(index);
        });
    });
}
