export function initializeVersion(callback) {
    const playButton = document.getElementById("playbutton")
    const credits = document.getElementById("credits")
    const skipButton = document.getElementById("skipbutton")
    const enableVRbutton = document.getElementById("enableVRbutton")

    const fullVersionButton = document.getElementById("version1")
    fullVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            enableVRbutton.style.display = "none";
            credits.style.display = "block";
            callback(1)
        })
    const lightVersionButton = document.getElementById("version2")
    lightVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            enableVRbutton.style.display = "none";
            credits.style.display = "block";
            callback(2)
        })
    const developerVersionButton = document.getElementById("version3")
    developerVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            enableVRbutton.style.display = "block";
            credits.style.display = "block";
            callback(3)
        })

}