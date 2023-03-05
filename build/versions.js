export function initializeVersion(callback, postLoadingManager) {
    const playButton = document.getElementById("playbutton")
    const credits = document.getElementById("credits")
    const skipButton = document.getElementById("skipbutton")
    const enableVRbutton = document.getElementById("enableVRbutton")
    const keys = document.getElementById("keys")

    const fullVersionButton = document.getElementById("version1")
    fullVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            version4.style.display = "none";
            keys.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            credits.style.display = "block";
            return callback(1, postLoadingManager)
        })
    const lightVersionButton = document.getElementById("version2")
    lightVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            version4.style.display = "none";
            keys.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            credits.style.display = "block";
            return callback(2, postLoadingManager)
        })
    const developerVersionButton = document.getElementById("version3")
    developerVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            version4.style.display = "none";
            keys.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            enableVRbutton.style.display = "block";
            credits.style.display = "block";
            return callback(3, postLoadingManager)
        })
    const vrVersionButton = document.getElementById("version4")
    vrVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            version4.style.display = "none";
            keys.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            enableVRbutton.style.display = "block";
            credits.style.display = "block";
            return callback(4, postLoadingManager)
        })

}