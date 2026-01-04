//  IMPORT DEPENDENCIES
import * as THREE from 'three'
import { generateUUID } from 'three/src/math/MathUtils.js'
import WordCloud from 'wordcloud';
window.WordCloud = WordCloud;


//  IMPORT SCRIPTS
import { renderer, camera, clock, orbitControls, flyControls, resizeRendererToDisplaySize, updateFlightSpeedByDistance, getFollowMode, setFollowMode } from './core/camera.js'
import { setupLighting } from './core/lighting.js'
import { createImages, createTags, hoveredPins, intersectObjectsArray, createConnections, hoverPins, instantiateNugget, refreshNode } from './mindmap.js'
import {
    configureDatasets,
    contexts,
    nuggets,
    createContexts as datasetsCreateContexts,
    createMindmap as datasetsCreateMindmap,
    clearPlanetMindmapVisuals as datasetsClearPlanetMindmapVisuals,
    clearPlanetImages as datasetsClearPlanetImages,
    switchMindmap as datasetsSwitchMindmap,
    isDeveloperMode,
} from './core/datasets.js'
import { getRandomNum, convertLatLngtoCartesian, convertCartesiantoLatLng, constrainLatLng, easeInOutQuad } from './mathScripts.js'
import { pushContent, handleCarouselButton } from './content.js'
import { initialiseVersion } from './versions.js'
import { creation } from './creation.js'
import { updateGutta, guttCrumbMesh, maraCrumbMesh, cycleStatsChartView } from './gutta.js'
import { setupIntro, introState, fadeOutAudio, animateLetterSpacing } from './core/intro.js'
import { DeveloperHud } from './core/developerHud.js'
import { PlanetEnvironment } from './core/planetEnvironment.js'

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        window.location.reload();
    });
}

//IMPORT DATA
// Default / initial mindmap dataset (index 0). Additional datasets loaded dynamically.
import { contentData } from './data/contentData.js'
import { palette } from './data/palette.js'
import { pinMaterials, pinWireframeMaterials, boxMaterials } from './data/materials.js'

window.appStatus = "initialising";


const scene = new THREE.Scene();

const pointer = new THREE.Vector2;
const raycaster = new THREE.Raycaster();

let developer = false;

let selectedContext = 0;
let selectedPin = null;
let selectedBox = null;
let selectedTag = null;
let selectedNode = null;
let selectedNodes = []
let showContent = true;
let fastMove = false;
const developerHud = new DeveloperHud();

function updateDeveloperHud() {
    developerHud.update({ developer, contexts, selectedContext });
}

function createContexts(version) {
    const devMode = datasetsCreateContexts(version);
    developer = devMode;
    if (!developer) {
        developerHud.hide();
    } else {
        updateDeveloperHud();
    }
    return devMode;
}

function createMindmap() {
    const result = datasetsCreateMindmap();
    updateDeveloperHud();
    return result;
}

function clearPlanetMindmapVisuals() {
    const result = datasetsClearPlanetMindmapVisuals();
    updateDeveloperHud();
    return result;
}

function clearPlanetImages() {
    const result = datasetsClearPlanetImages();
    updateDeveloperHud();
    return result;
}

function switchMindmap(index) {
    const result = datasetsSwitchMindmap(index);
    if (result && typeof result.then === 'function') {
        return result.then((value) => {
            updateDeveloperHud();
            return value;
        });
    }
    updateDeveloperHud();
    return result;
}

export { createContexts, createMindmap, clearPlanetMindmapVisuals, clearPlanetImages, switchMindmap };

export let slideshowStatus = {
    activeSlideshow: undefined,
    activeSlideshowLength: undefined,
    activeSlide: undefined,
    activeSlideLength: undefined,
    activeSubSlide: undefined
}

window.actionsCompleted = true
window.currentTransitionEndHandler = null;
window.curveMeshes = [];

window.onload = function() {
    let allElements = document.querySelectorAll('#slide .appear');
    allElements.forEach(function(element) {
      element.style.opacity = "1";
    });
  };
  


let guttaState = {
    gutta: [],
    mara: [],
    species: undefined,
    init: false,
    exampleGuttIndex: 0,
    exampleMaraIndex: 0,
    exampleGuttId: null,
    exampleMaraId: null,
}

let guttaStats = {
    kills: 0,
    totalHungerAtKill: 0,
    munch: 0,
    totalHungerAtMunch: 0,
    guttMatingAttempts: 0,
    maraMatingAttempts: 0,
    guttMatingSuccesses: 0,
    maraMatingSuccesses: 0,
    guttMatingFailures: 0,
    maraMatingFailures: 0,
    guttBirths: 0,
    maraBirths: 0,
    guttBirthsBlocked: 0,
    maraBirthsBlocked: 0,
    guttDeaths: 0,
    maraDeaths: 0
}

// Loaders used across the environment and dataset initialisation
const postLoadingManager = new THREE.LoadingManager();
const textureLoader2 = new THREE.TextureLoader(postLoadingManager);

const initialLoadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(initialLoadingManager);

const planetEnvironment = new PlanetEnvironment({
    scene,
    camera,
    renderer,
    postLoadingManager,
    textureLoader,
    textureLoader2,
});

const {
    planetContent,
    spiral,
    jaraniusConnections,
    spiralDynamicsConnections,
    enneagram,
    enneagramConnectionsObj,
} = planetEnvironment.getDatasetNodes();

const jaraniusCenter = planetEnvironment.getJaraniusCenter();
const middleOfPlanet = planetEnvironment.getMiddleOfPlanet();
let jaranius = planetEnvironment.getJaranius();

configureDatasets({
    planetContent,
    spiral,
    jaraniusConnections,
    spiralDynamicsConnections,
    enneagram,
    enneagramConnectionsObj,
    instantiateNugget,
    createImages,
    createTags,
    createConnections,
    intersectObjectsArray,
});

initialiseLoadingManager(initialLoadingManager);

initialiseVersion(creation, postLoadingManager, guttaState, scene);
window.appStatus = "version-menu";

export function createJaranius(diffuseTexture, normalTexture, roughnessTexture, cloudsTexture, cloudsNormal, version) {
    const jaraniusMesh = planetEnvironment.createJaranius(diffuseTexture, normalTexture, roughnessTexture, cloudsTexture, cloudsNormal, version);
    jaranius = jaraniusMesh;
    configureDatasets({ jaranius: jaraniusMesh });
    return jaraniusMesh;
}

export function initialiseLoadingManager(loadingManager) {
    loadingManager.onStart = function () {
        if (loadingManager == postLoadingManager) progressBarContainer.style.display = 'flex';
    };

    const progressBar = document.getElementById('progress-bar');
    loadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
        progressBar.value = (itemsLoaded / itemsTotal ) * 100
        //console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };

    const progressBarContainer = document.querySelector('.progress-bar-container')
    loadingManager.onLoad = function ( ) {
        progressBarContainer.style.display = 'none';
        //console.log( 'Loading complete!');
    };
    loadingManager.onError = function ( url ) {
        console.log( 'There was an error loading ' + url );
    };
}

setupIntro({ orbitControls, camera, scene });

//SLIDE CAROUSEL
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
    const handleClick = () => {
      slideshowStatus = handleCarouselButton(button, slideshowStatus);
    };
  
    button.addEventListener("click", handleClick);
    button.addEventListener("touchend", (event) => {
      event.preventDefault(); // Prevent mouse event from firing after touch event
      handleClick();
    });
});
  
//CREATE LIGHTS
const { ambient, spotlight, updateLightIntensity, queueSpotlightIntensity, queueAmbientIntensity } = setupLighting(scene);

//CREATE CONTEXTS
//CREATE GUTTA STATS
const guttaStatScreen = document.querySelector('#guttaStatScreen');
const statsDisplay = document.createElement('div');

//CREATE FPS COUNTER
const times = [];
let fps;

const fpsContainer = document.querySelector('#fpsCounter');
const fpsDisplay = document.createElement('div');
fpsContainer.appendChild(fpsDisplay);

function updateFpsCounter(now) {
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }
    times.push(now);
    fps = times.length;
    fpsDisplay.textContent = fps;
}


//INTERACTION FUNCTIONS
function scanPins() {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(intersectObjectsArray);

    hoverPins(intersects)
}

//EVENTS KEYBOARD
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    const keyCode = event.which;
    const hasModifier = event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;

    if (event.altKey && (keyCode === 37 || keyCode === 39)) {
        if (guttaStatScreen.style.display === "block") {
            event.preventDefault();
            const direction = keyCode === 37 ? -1 : 1;
            cycleStatsChartView(direction);
        }
        return;
    }

    //Controls
    if (focusElement !== "tagInput") {
        if (!hasModifier && keyCode == 79) { //O
            if (window.appStatus === "orbit") {
                window.appStatus = "flight";
                orbitControls.enabled = false;
                flyControls.enabled = true;
                document.body.style.cursor = 'crosshair';
            } else {
                window.appStatus = "orbit";
                orbitControls.enabled = true;
                flyControls.enabled = false;
                document.body.style.cursor = 'default';
                // **Reset the camera's up vector to default**
                camera.up.set(0, 1, 0);

                // **Ensure OrbitControls are updated with the new up vector**
                orbitControls.update();
            }
        }
        if (event.shiftKey) {
            if (keyCode === 37 || keyCode === 39) { // Shift + Left/Right
                const delta = keyCode === 37 ? -1 : 1;
                adjustExampleIndex('exampleGuttId', 'exampleGuttIndex', guttaState.gutta, delta);
                return;
            }
            if (keyCode === 38 || keyCode === 40) { // Shift + Up/Down
                const delta = keyCode === 38 ? -1 : 1;
                adjustExampleIndex('exampleMaraId', 'exampleMaraIndex', guttaState.mara, delta);
                return;
            }
            if (window.appStatus === "orbit") {
                if (keyCode == 71) { // Shift+G
                    const mode = getFollowMode() === "gutt" ? "manual" : "gutt";
                    setFollowMode(mode);
                    console.log(mode === "gutt" ? "Orbit now follows the exampleGutt" : "Orbit follow disabled");
                    return;
                }
                if (keyCode == 77) { // Shift+M
                    const mode = getFollowMode() === "mara" ? "manual" : "mara";
                    setFollowMode(mode);
                    console.log(mode === "mara" ? "Orbit now follows the exampleMara" : "Orbit follow disabled");
                    return;
                }
            }
        }

        if (hasModifier) {
            return;
        }

        // Only do this when in flight-mode:
        if (window.appStatus === "flight") {
            if (keyCode == 71) { // 'G'
                setFollowMode("gutt");
                console.log("Camera now follows the exampleGutt");
                // Optionally disable user flight controls so user can't move camera manually
                flyControls.enabled = false;
            }
            if (keyCode == 77) { // 'M'
                setFollowMode("mara");
                console.log("Camera now follows the exampleMara");
                flyControls.enabled = false;
            }
            if (keyCode == 70) { // 'F'
                setFollowMode("manual");
                console.log("Camera back to manual flight");
                flyControls.enabled = true; // re-enable
            }
            if (keyCode == 188) { //,
                    flyControls.dragToLook = !flyControls.dragToLook
                    console.log("dragToLook: " + flyControls.dragToLook)
            }
        }

    }
    if (focusElement !== "tagInput" && window.appStatus !== "flight") {
        if (hasModifier) return;
        //Slide control
        if (slideshowStatus.activeSlideshow !== undefined && (keyCode === 37 || keyCode === 116)) { // left arrow or play button on USB remote
            const leftButton = document.querySelector("[data-carousel-button='left']");
            slideshowStatus = handleCarouselButton(leftButton, slideshowStatus);
        }
        if (slideshowStatus.activeSlideshow !== undefined && (keyCode === 39 || keyCode === 190)) { // right arrow or sceen button on USB remote
            const rightButton = document.querySelector("[data-carousel-button='right']");
            slideshowStatus = handleCarouselButton(rightButton, slideshowStatus);
        }
        if (slideshowStatus.activeSlideshow !== undefined && (keyCode === 38 || keyCode == 33)) { // up arrow or left button on USB remote
            const upButton = document.querySelector("[data-carousel-button='up']");
            slideshowStatus = handleCarouselButton(upButton, slideshowStatus);
        }
        if (slideshowStatus.activeSlideshow !== undefined && (keyCode === 40 || keyCode == 34)) { // down arrow or right button on USB remote
            const downButton = document.querySelector("[data-carousel-button='down']");
            slideshowStatus = handleCarouselButton(downButton, slideshowStatus);
        }

                //Light control (numbers 1-5 when NOT holding shift)
                //Light control (numbers 1-5 when NOT holding shift)
                if (!event.shiftKey && keyCode >= 49 && keyCode <= 53) {
            const intensities = [0, 0.5, 0.75, 1, 1.5];
            queueSpotlightIntensity(intensities[keyCode - 49], clock);
          }
                // Ambient control (6-9 when NOT holding shift)
                if (!event.shiftKey && keyCode >= 54 && keyCode <= 57) {
            const intensities = [0, 0.05, 0.15, 0.25];
            queueAmbientIntensity(intensities[keyCode - 54], clock);
          }
                if (!event.shiftKey && keyCode == 48) {
            queueAmbientIntensity(0.5, clock);
          }
                // Mindmap switching: Shift+1..9 (prevent light adjustments earlier)
                if (event.shiftKey && keyCode >= 49 && keyCode <= 57) { // '1'..'9'
                    const index = keyCode - 49; // 0-based
                    switchMindmap(index);
                    return; // stop further number key side-effects
                }

        //Stats display
        if (keyCode == 71) { //G
            if (guttaStatScreen.style.display == "block") {
                guttaStatScreen.style.display = "none"
                guttCrumbMesh.visible = false;
                maraCrumbMesh.visible = false;
            } else {
                guttaStatScreen.style.display = "block" 
                guttCrumbMesh.visible = true;
                maraCrumbMesh.visible = true;
            }
        }
        if (keyCode == 74) { //J
            if (fpsContainer.style.display == "block") {
                fpsContainer.style.display = "none"
            } else fpsContainer.style.display = "block"
        }

        //Content display
        if (keyCode == 67) { //C
            if (showContent == true) {
                jaranius.remove(planetContent)
                jaranius.remove(jaraniusConnections)
                showContent = false
            } else {
                jaranius.add(planetContent)
                jaranius.add(jaraniusConnections)
                showContent = true
            }
        }
        if (keyCode == 73) { //I
            jaranius.material.wireframe = !jaranius.material.wireframe;

            for (let lat = -80; lat < 90; lat += 10) {
                for (let lng = -170; lng <= 180; lng += 10) {
                    const id = generateUUID()
                    const newItem = {
                        id: id,
                        text: "lat: " + lat + "\nlng: " + lng,
                        lat: lat,
                        lng: lng,
                        color: 1,
                        size: 10,
                        slides: undefined
                    };
        
                    contexts[0].tagData.push(newItem)
                    contexts[0].connectionData.push([id])
                    contexts[0].arrowConnectionData.push([id])
                    contexts[0].dashedConnectionData.push([id])
        
                    const indexMod = contexts[0].tagData.length - 1
        
                    createTags([newItem], contexts[0].tagDestination, contexts[0].radius, 0, indexMod);
                }
            }
            console.log(contexts)
        }
        if (keyCode == 83) { //S
            if (window.appStatus == "intro-menu") {
                const silence = document.getElementById('silence')
                const credits = document.getElementById('credits')
                const skipbutton = document.getElementById('skipbutton')
                const playbutton = document.getElementById('playbutton')
                silence.style.display = "block"
                credits.style.display = "none"
                skipbutton.style.display = "none"
                playbutton.style.display = "none"
                window.appStatus = "silence"
                const title = scene.getObjectByName('title')
                title.visible = false
                document.body.style.cursor = 'none';
                silenceAudio.volume = 1;
                silenceAudio.play();
                animateLetterSpacing()
            } else if (window.appStatus == "silence") {
                const silence = document.getElementById('silence')
                const credits = document.getElementById('credits')
                const skipbutton = document.getElementById('skipbutton')
                const playbutton = document.getElementById('playbutton')
                silence.style.display = "none"
                credits.style.display = "block"
                skipbutton.style.display = "block"
                playbutton.style.display = "block"
                window.appStatus = "intro-menu"
                const title = scene.getObjectByName('title')
                title.visible = true
                document.body.style.cursor = 'default';
                fadeOutAudio(silenceAudio, 5000)
            }
            if (window.appStatus == "orbit") {
                planetEnvironment.toggleSpiral();
            }
            
        }
        if (keyCode == 89) { //Y
            planetEnvironment.toggleEnneagram();
        }

        const hotKeys = document.querySelector('#hotKeys')
        if (keyCode == 75) { //K
            if (hotKeys.style.display == "block") {
                hotKeys.style.display = "none"
            } else {
                hotKeys.style.display = "block" 
            }
        }

        //Node management
        if (keyCode == 90 && developer == true) { //Z - clear selection
            selectedNodes.length = 0
        }
        if (keyCode == 65 && developer == true) { //A - add to selection
            if (selectedNode !== null) {
                if (selectedNodes.indexOf(selectedNode) == -1) {
                    selectedNodes.push(selectedNode)
                }
                console.log(selectedNodes)
            }
        }
        if (keyCode == 70 && developer == true) { //F - toggle fast move
            if (fastMove == true) {
                fastMove = false
            } else {
                fastMove = true
            }
        }
        if (keyCode == 81 && developer == true) { //Q - print tagdata and connectiondata
            let output = "export const planetTagData = [\n"
            const tagSource = contexts[selectedContext].tagData
            for (let i = 0; i < tagSource.length; i++) {
                output = output + "    {id: \"" + tagSource[i].id + "\", text: " + JSON.stringify(tagSource[i].text) + ", lat: " + tagSource[i].lat + ", lng: " + tagSource[i].lng + ", color: " + tagSource[i].color + ", size: " + tagSource[i].size + ", slides: " + tagSource[i].slides + "},\n"
            }
            output = output + "\n]\n\n// ā ī ū ṅ ñ ṇ ṭ ṭh ḍ ḍh ṇ ḷ ṃ ṁ ŋ \n\n //azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNéÉàÀèÈùÙëËüÜïÏâêîôûÂÊÎÔÛíÍáÁóÓúÚñÑłŁçÇýÝčČšŠæÆœŒāīūṅṇṭḍḷṃṁ/\*-+7894561230,;:!?¡¿.%$£€={}()[]&~'\`#_°@АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯяüÜöÖäÄñÑςερτυθιοπασδφγηξκλζχψωβνμΕΡΤΥΘΙΟΠΑΣΔΦΓΗΞΚΛΖΧΨΩΒΝΜåÅæÆøØ \n\nexport const planetConnections = [\n"

            const connectionSource = contexts[selectedContext].connectionData
            for (let i = 0; i < connectionSource.length; i++) {
                output = output + "["
                connectionSource[i].forEach((item) => {
                    output = output + "\"" + item + "\", "
                })
                output = output + "],\n"
            }
            output = output + "\n]\n\nexport const planetArrowedConnections = [\n"

            const arrowConnectionSource = contexts[selectedContext].arrowConnectionData
            for (let i = 0; i < arrowConnectionSource.length; i++) {
                output = output + "["
                arrowConnectionSource[i].forEach((item) => {
                    output = output + "\"" + item + "\", "
                })
                output = output + "],\n"
            }
            output = output + "\n]\n\nexport const planetDashedConnections = [\n"

            const dashedConnectionSource = contexts[selectedContext].dashedConnectionData
            for (let i = 0; i < dashedConnectionSource.length; i++) {
                output = output + "["
                dashedConnectionSource[i].forEach((item) => {
                    output = output + "\"" + item + "\", "
                })
                output = output + "],\n"
            }
            output = output + "\n]\n\nexport const planetTunnelConnections = [\n"

            const tunnelConnectionSource = contexts[selectedContext].tunnelConnectionData
            for (let i = 0; i < tunnelConnectionSource.length; i++) {
                output = output + "["
                tunnelConnectionSource[i].forEach((item) => {
                    output = output + "\"" + item + "\", "
                })
                output = output + "],\n"
            }
            output = output + "\n]"
            console.log(output)
        }
        if (keyCode == 84 && developer == true) { //T - create new node
            const tagInput = document.getElementById("tagInput");
            const activeElement = document.activeElement;
            focusElement = "tagInput"

            if (event.key === 't' && pointer !== null && !(activeElement instanceof HTMLInputElement)) {
                tagInput.style.display = "block";
                tagInput.style.left = event.clientX + "px";
                tagInput.style.top = event.clientY + "px";
                tagInput.value = "";
                tagInput.focus();

                event.preventDefault();
            }
        }
        if (keyCode == 88 && developer == true) { //X - remove node
            if (selectedNode !== null) {
                const index = intersectObjectsArray.indexOf(contexts[selectedContext].pins[selectedNode])
                intersectObjectsArray.splice(index, 1)

                const id = contexts[selectedContext].tagData[selectedNode].id

                contexts[selectedContext].tagData.splice(selectedNode, 1)
                contexts[selectedContext].connectionData.splice(selectedNode, 1)
                if (contexts[selectedContext].arrowConnectionData !== undefined) contexts[selectedContext].arrowConnectionData.splice(selectedNode, 1)
                if (contexts[selectedContext].dashedConnectionData !== undefined) contexts[selectedContext].dashedConnectionData.splice(selectedNode, 1)
                if (contexts[selectedContext].tunnelConnectionData !== undefined) contexts[selectedContext].tunnelConnectionData.splice(selectedNode, 1)
                contexts[selectedContext].pins.splice(selectedNode, 1)
                contexts[selectedContext].boxes.splice(selectedNode, 1)
                contexts[selectedContext].tags.splice(selectedNode, 1)
                contexts[selectedContext].tagDestination.remove(selectedPin)
                contexts[selectedContext].tagDestination.remove(selectedBox)
                contexts[selectedContext].tagDestination.remove(selectedTag)

                for (let i = 0; i < contexts[selectedContext].tagData.length; i++) {
                    const index1 = contexts[selectedContext].connectionData[i].indexOf(id)
                    if (index1 !== -1) contexts[selectedContext].connectionData[i].splice(index1, 1)
                    
                    if (contexts[selectedContext].arrowConnectionData !== undefined) {
                        const index2 = contexts[selectedContext].arrowConnectionData[i].indexOf(id)
                        if (index2 !== -1) contexts[selectedContext].arrowConnectionData[i].splice(index2, 1)
                    }

                    if (contexts[selectedContext].dashedConnectionData !== undefined) {
                        const index3 = contexts[selectedContext].dashedConnectionData[i].indexOf(id)
                        if (index3 !== -1) contexts[selectedContext].dashedConnectionData[i].splice(index3, 1)
                    }
                    if (contexts[selectedContext].tunnelConnectionData !== undefined) {
                        const index4 = contexts[selectedContext].tunnelConnectionData[i].indexOf(id)
                        if (index4 !== -1) contexts[selectedContext].tunnelConnectionData[i].splice(index4, 1)
                    }
                }

                for (let i = selectedNode; i < contexts[selectedContext].tagData.length; i++) {
                    contexts[selectedContext].pins[i].index -= 1
                    contexts[selectedContext].boxes[i].index -= 1
                    contexts[selectedContext].tags[i].index -= 1
                }

                hoveredPins.length = 0
                selectedNode = null
                selectedPin = null
                selectedBox = null
                selectedTag = null
                updateDeveloperHud();
            }           
        }
        if (keyCode == 82 && developer == true) { //R - create new connections
            if (selectedNodes.length > 1) {
                for (let i = 1; i < selectedNodes.length; i++){
                    if (contexts[selectedContext].connectionData[selectedNodes[0]].includes(contexts[selectedContext].tagData[selectedNodes[i]].id)) {
                        const index = contexts[selectedContext].connectionData[selectedNodes[0]].indexOf(contexts[selectedContext].tagData[selectedNodes[i]].id)
                        if (index > -1) {
                            contexts[selectedContext].connectionData[selectedNodes[0]].splice(index, 1)
                        }
                    } else contexts[selectedContext].connectionData[selectedNodes[0]].push(contexts[selectedContext].tagData[selectedNodes[i]].id)
                }

                const context = {
                    tagSource: contexts[selectedContext].tagData,
                    connectionSource: contexts[selectedContext].connectionData, 
                    curveMinAltitude: contexts[selectedContext].radius, 
                    context: contexts[selectedContext].connectionDestination
                }
                console.log(context.context)
                context.context.clear()//What on earth is the point of this???
                console.log(context.context)
                const curveThickness = 0.0001
                const curveRadiusSegments = 3
                const curveMaxAltitude = 0.03
                createConnections(context.tagSource, context.connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, context.curveMinAltitude, context.context, false, false)
            
            } 
        }
        if (keyCode == 86 && developer == true) { //V - create new arrow connections
            if (selectedNodes.length > 1) {
                for (let i = 1; i < selectedNodes.length; i++){
                    if (contexts[selectedContext].arrowConnectionData[selectedNodes[0]].includes(contexts[selectedContext].tagData[selectedNodes[i]].id)) {
                        const index = contexts[selectedContext].arrowConnectionData[selectedNodes[0]].indexOf(contexts[selectedContext].tagData[selectedNodes[i]].id)
                        if (index > -1) {
                            contexts[selectedContext].arrowConnectionData[selectedNodes[0]].splice(index, 1)
                        }
                    } else contexts[selectedContext].arrowConnectionData[selectedNodes[0]].push(contexts[selectedContext].tagData[selectedNodes[i]].id)
                }

                const context = {
                    tagSource: contexts[selectedContext].tagData,
                    connectionSource: contexts[selectedContext].arrowConnectionData, 
                    curveMinAltitude: contexts[selectedContext].radius, 
                    context: contexts[selectedContext].connectionDestination
                }
                context.context.clear() //What on earth is the point of this???
                const curveThickness = 0.0001
                const curveRadiusSegments = 3
                const curveMaxAltitude = 0.03
                createConnections(context.tagSource, context.connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, context.curveMinAltitude, context.context, false, true, false)
            } 
        }
        if (keyCode == 66 && developer == true) { //B - create new dashed connections
            if (selectedNodes.length > 1) {
                for (let i = 1; i < selectedNodes.length; i++){
                    if (contexts[selectedContext].dashedConnectionData[selectedNodes[0]].includes(contexts[selectedContext].tagData[selectedNodes[i]].id)) {
                        const index = contexts[selectedContext].dashedConnectionData[selectedNodes[0]].indexOf(contexts[selectedContext].tagData[selectedNodes[i]].id)
                        if (index > -1) {
                            contexts[selectedContext].dashedConnectionData[selectedNodes[0]].splice(index, 1)
                        }
                    } else contexts[selectedContext].dashedConnectionData[selectedNodes[0]].push(contexts[selectedContext].tagData[selectedNodes[i]].id)
                }

                const context = {
                    tagSource: contexts[selectedContext].tagData,
                    connectionSource: contexts[selectedContext].dashedConnectionData, 
                    curveMinAltitude: contexts[selectedContext].radius, 
                    context: contexts[selectedContext].connectionDestination
                }
                context.context.clear()//What on earth is the point of this???
                const curveThickness = 0.0001
                const curveRadiusSegments = 3
                const curveMaxAltitude = 0.03
                createConnections(context.tagSource, context.connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, context.curveMinAltitude, context.context, true, false, false)
            } 
        }
        if (keyCode == 78 && developer == true) { //N - create new tunnel connections
            if (selectedNodes.length > 1) {
                for (let i = 1; i < selectedNodes.length; i++){
                    if (contexts[selectedContext].tunnelConnectionData[selectedNodes[0]].includes(contexts[selectedContext].tagData[selectedNodes[i]].id)) {
                        const index = contexts[selectedContext].tunnelConnectionData[selectedNodes[0]].indexOf(contexts[selectedContext].tagData[selectedNodes[i]].id)
                        if (index > -1) {
                            contexts[selectedContext].tunnelConnectionData[selectedNodes[0]].splice(index, 1)
                        }
                    } else contexts[selectedContext].tunnelConnectionData[selectedNodes[0]].push(contexts[selectedContext].tagData[selectedNodes[i]].id)
                }

                const context = {
                    tagSource: contexts[selectedContext].tagData,
                    connectionSource: contexts[selectedContext].tunnelConnectionData, 
                    curveMinAltitude: contexts[selectedContext].radius, 
                    context: contexts[selectedContext].connectionDestination
                }
                context.context.clear()//What on earth is the point of this???
                const curveThickness = 0.001
                const curveRadiusSegments = 6
                const curveMaxAltitude = 0.1
                createConnections(context.tagSource, context.connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, context.curveMinAltitude, context.context, false, false, true)
            } 
        }
        
        if (keyCode == 87 && developer == true) { //W - redraw connections
            const context = {
                tagSource: contexts[selectedContext].tagData,
                connectionSource: contexts[selectedContext].connectionData, 
                curveMinAltitude: contexts[selectedContext].radius, 
                context: contexts[selectedContext].connectionDestination
            }
            context.context.clear()
            const curveThickness = 0.0001
            const curveRadiusSegments = 3
            const curveMaxAltitude = 0.03
            createConnections(context.tagSource, context.connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, context.curveMinAltitude, context.context, false, false, false)
            
            const arrowContext = {
                tagSource: contexts[selectedContext].tagData,
                connectionSource: contexts[selectedContext].arrowConnectionData, 
                curveMinAltitude: contexts[selectedContext].radius, 
                context: contexts[selectedContext].connectionDestination
            }
            createConnections(arrowContext.tagSource, arrowContext.connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, arrowContext.curveMinAltitude, arrowContext.context, false, true, false)
        
            const dashedContext = {
                tagSource: contexts[selectedContext].tagData,
                connectionSource: contexts[selectedContext].dashedConnectionData, 
                curveMinAltitude: contexts[selectedContext].radius, 
                context: contexts[selectedContext].connectionDestination
            }
            createConnections(dashedContext.tagSource, dashedContext.connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, dashedContext.curveMinAltitude, dashedContext.context, true, false, false)
        
            const tunnelContext = {
                tagSource: contexts[selectedContext].tagData,
                connectionSource: contexts[selectedContext].tunnelConnectionData, 
                curveMinAltitude: contexts[selectedContext].radius, 
                context: contexts[selectedContext].connectionDestination
            }
            createConnections(tunnelContext.tagSource, tunnelContext.connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, tunnelContext.curveMinAltitude, tunnelContext.context, false, false, true)
        
        } 
        if (keyCode == 69 && developer == true) { //E - change color
            if (selectedNodes.length > 1) {
                selectedNodes.forEach((node) => {
                    if (fastMove == true) contexts[selectedContext].tagData[node].color += 9
                    contexts[selectedContext].tagData[node].color += 1
                    if (contexts[selectedContext].tagData[node].color >= palette.length) contexts[selectedContext].tagData[node].color -= palette.length

                    let color = contexts[selectedContext].tagData[node].color
                    if (!boxMaterials[color]) {
                        color = (Math.floor(color / 10) + 1) * 10
                        contexts[selectedContext].tagData[node].color = color
                    }
                    console.log(color)

                    if (contexts[selectedContext].tagData[node].slides !== undefined) {
                        contexts[selectedContext].pins[node].material = pinMaterials[color]
                    } else contexts[selectedContext].pins[node].material = pinWireframeMaterials[color]
                    contexts[selectedContext].boxes[node].material = boxMaterials[color]
            })

            } else if (selectedNode) {
                if (fastMove == true) contexts[selectedContext].tagData[selectedNode].color += 9
                contexts[selectedContext].tagData[selectedNode].color += 1
                if (contexts[selectedContext].tagData[selectedNode].color >= palette.length) contexts[selectedContext].tagData[selectedNode].color -= palette.length
                
                let color = contexts[selectedContext].tagData[selectedNode].color
                if (!boxMaterials[color]) {
                    color = (Math.floor(color / 10) + 1) * 10
                    contexts[selectedContext].tagData[selectedNode].color = color
                } 
                console.log(color)

                if (contexts[selectedContext].tagData[selectedNode].slides !== undefined) {
                    selectedPin.material = pinMaterials[color]
                } else selectedPin.material = pinWireframeMaterials[color]
                selectedBox.material = boxMaterials[color]
                
            }
        }
        if (keyCode == 68 && developer == true) { //D - change color
            if (selectedNodes.length > 1) {
                selectedNodes.forEach((node) => {
                    if (fastMove == true) contexts[selectedContext].tagData[node].color -= 9

                    let color = contexts[selectedContext].tagData[node].color
                    do {
                        color -= 1
                        if (color < 0) color += palette.length
                        console.log(color)
                        contexts[selectedContext].tagData[node].color = color
                    } while (!boxMaterials[color])

                    if (contexts[selectedContext].tagData[node].slides !== undefined) {
                        contexts[selectedContext].pins[node].material = pinMaterials[color]
                    } else contexts[selectedContext].pins[node].material = pinWireframeMaterials[color]
                    contexts[selectedContext].boxes[node].material = boxMaterials[color]
            })

            } else if (selectedNode) {
                if (fastMove == true) contexts[selectedContext].tagData[selectedNode].color -= 9
                
                let color = contexts[selectedContext].tagData[selectedNode].color
                do {
                    color -= 1
                    if (color < 0) color += palette.length
                    console.log(color)
                    contexts[selectedContext].tagData[selectedNode].color = color
                } while (!boxMaterials[color])

                if (contexts[selectedContext].tagData[selectedNode].slides !== undefined) {
                    selectedPin.material = pinMaterials[color]
                } else selectedPin.material = pinWireframeMaterials[color]
                selectedBox.material = boxMaterials[color]
                
            }
        }

        if (keyCode == 187 && developer == true) { //+
            let originalSize = 0
            let size = 0

            if (selectedNodes.length > 1) {
                selectedNodes.forEach((node) => {
                    originalSize = contexts[selectedContext].pins[node].originalSize
                    contexts[selectedContext].tagData[node].size += 5

                    size = contexts[selectedContext].tagData[node].size
                    const ratio = size / originalSize
                    const tagScale = size / 100000
                    const pin = contexts[selectedContext].pins[node]
                    const box = contexts[selectedContext].boxes[node]
                    const tag = contexts[selectedContext].tags[node]
                    if (pin) {
                        pin.scale.set(ratio, ratio, ratio)
                        pin.userData.baseScale = pin.scale.x
                    }
                    if (box) {
                        box.scale.set(ratio, ratio, ratio)
                        box.userData.baseScale = box.scale.x
                    }
                    if (tag) {
                        tag.scale.set(tagScale, tagScale, tagScale)
                        tag.userData.baseScale = tag.scale.x
                    }
                    refreshNode(selectedContext, node)
                })

            }else if (selectedNode) {
                originalSize = contexts[selectedContext].pins[selectedNode].originalSize
                contexts[selectedContext].tagData[selectedNode].size += 5

                size = contexts[selectedContext].tagData[selectedNode].size
                const ratio = size / originalSize
                const tagScale = size / 100000
                selectedPin.scale.set(ratio, ratio, ratio)
                selectedPin.userData.baseScale = selectedPin.scale.x
                if (selectedBox) {
                    selectedBox.scale.set(ratio, ratio, ratio)
                    selectedBox.userData.baseScale = selectedBox.scale.x
                }
                if (selectedTag) {
                    selectedTag.scale.set(tagScale, tagScale, tagScale)
                    selectedTag.userData.baseScale = selectedTag.scale.x
                }
                refreshNode(selectedContext, selectedNode)
            }
        }
        if (keyCode == 189 && developer == true) { //-
            let originalSize = 0
            let size = 0

            if (selectedNodes.length > 1) {
                selectedNodes.forEach((node) => {
                    originalSize = contexts[selectedContext].pins[node].originalSize
                    contexts[selectedContext].tagData[node].size -= 5

                    size = contexts[selectedContext].tagData[node].size
                    const ratio = size / originalSize
                    const tagScale = size / 100000
                    const pin = contexts[selectedContext].pins[node]
                    const box = contexts[selectedContext].boxes[node]
                    const tag = contexts[selectedContext].tags[node]
                    if (pin) {
                        pin.scale.set(ratio, ratio, ratio)
                        pin.userData.baseScale = pin.scale.x
                    }
                    if (box) {
                        box.scale.set(ratio, ratio, ratio)
                        box.userData.baseScale = box.scale.x
                    }
                    if (tag) {
                        tag.scale.set(tagScale, tagScale, tagScale)
                        tag.userData.baseScale = tag.scale.x
                    }
                    refreshNode(selectedContext, node)
                })

            }else if (selectedNode) {
                originalSize = contexts[selectedContext].pins[selectedNode].originalSize
                contexts[selectedContext].tagData[selectedNode].size -= 5

                size = contexts[selectedContext].tagData[selectedNode].size
                const ratio = size / originalSize
                const tagScale = size / 100000
                selectedPin.scale.set(ratio, ratio, ratio)
                selectedPin.userData.baseScale = selectedPin.scale.x
                if (selectedBox) {
                    selectedBox.scale.set(ratio, ratio, ratio)
                    selectedBox.userData.baseScale = selectedBox.scale.x
                }
                if (selectedTag) {
                    selectedTag.scale.set(tagScale, tagScale, tagScale)
                    selectedTag.userData.baseScale = selectedTag.scale.x
                }
                refreshNode(selectedContext, selectedNode)
            }
        }
    }
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    const keyCode = event.which;

    if (selectedNodes.length > 0 && developer == true  && slideshowStatus.activeSlideshow == undefined && focusElement !== "tagInput" && !flyControls.enabled) {
        for (let node = 0; node < selectedNodes.length; node++) {
            if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
                let posLatLng = convertCartesiantoLatLng(contexts[selectedContext].pins[selectedNodes[node]].position.x, contexts[selectedContext].pins[selectedNodes[node]].position.y, contexts[selectedContext].pins[selectedNodes[node]].position.z);
                if (keyCode == 38) {
                    if (fastMove) posLatLng.lat += .4;
                    posLatLng.lat += .1;
                }
                if (keyCode == 40) {
                    if (fastMove)posLatLng.lat -= .4;
                    posLatLng.lat -= .1;
                }
                if (keyCode == 37) {
                    if (fastMove)posLatLng.lng += .4;
                    posLatLng.lng += .1;
                }
                if (keyCode == 39) {
                    if (fastMove)posLatLng.lng -= .4;
                    posLatLng.lng -= .1;
                }

                posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng)

                contexts[selectedContext].tagData[selectedNodes[node]].lat = posLatLng.lat.toFixed(1)
                contexts[selectedContext].tagData[selectedNodes[node]].lng = posLatLng.lng.toFixed(1)
                refreshNode(selectedContext, selectedNodes[node])
            }
        }
    } else if (selectedPin != null && developer == true  && slideshowStatus.activeSlideshow == undefined && focusElement !== "tagInput" && !flyControls.enabled) {

        if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
            let posLatLng = convertCartesiantoLatLng(selectedPin.position.x, selectedPin.position.y, selectedPin.position.z);
            console.log(posLatLng)
            if (keyCode == 38) {
                if (fastMove) posLatLng.lat += .4;
                posLatLng.lat += .1;                
            }
            if (keyCode == 40) {
                if (fastMove) posLatLng.lat -= .4;
                posLatLng.lat -= .1;
            }
            if (keyCode == 37) {
                if (fastMove) posLatLng.lng += .4;
                posLatLng.lng += .1;  
            }
            if (keyCode == 39) {
                if (fastMove) posLatLng.lng -= .4;
                posLatLng.lng -= .1;
            }

            posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng)
            contexts[selectedContext].tagData[selectedNode].lat = posLatLng.lat.toFixed(1)
            contexts[selectedContext].tagData[selectedNode].lng = posLatLng.lng.toFixed(1)
            refreshNode(selectedContext, selectedNode)
        }
    }     
};

let focusElement //create new Node
document.getElementById("tagInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(jaraniusCenter.children, false); //add support for spiralCenter?

        if (intersects.length > 0) {
            const point = intersects[0].point;
            const latLng = convertCartesiantoLatLng(point.x, point.y, point.z);

            console.log(latLng)

            const id = generateUUID()

            const newItem = {
                id: id,
                text: this.value,
                lat: latLng.lat.toFixed(1),
                lng: latLng.lng.toFixed(1),
                color: 22,
                size: 40,
                slides: undefined
            };
            const newTagDestination = contexts[selectedContext].tagData
            const newConnectionsDestination = contexts[selectedContext].connectionData
            const newArrowConnectionsDestination = contexts[selectedContext].arrowConnectionData
            const newDashedConnectionsDestination = contexts[selectedContext].dashedConnectionData
            const newTunnelConnectionsDestination = contexts[selectedContext].tunnelConnectionData

            newTagDestination.push(newItem)
            newConnectionsDestination.push([id])
            if (newArrowConnectionsDestination !== undefined) newArrowConnectionsDestination.push([id])
            if (newDashedConnectionsDestination !== undefined) newDashedConnectionsDestination.push([id])
            if (newTunnelConnectionsDestination !== undefined) newTunnelConnectionsDestination.push([id])

            const globalIndex = newTagDestination.length - 1
            updateDeveloperHud();
            const creationPromise = createTags([newItem], contexts[selectedContext].tagDestination, contexts[selectedContext].radius, selectedContext, globalIndex)
            selectedNode = globalIndex
            selectedPin = contexts[selectedContext].pins[globalIndex]
            if (selectedPin) selectedPin.userData.baseScale = selectedPin.scale.x
            creationPromise.then(() => {
                selectedBox = contexts[selectedContext].boxes[globalIndex]
                if (selectedBox) selectedBox.userData.baseScale = selectedBox.scale.x
                selectedTag = contexts[selectedContext].tags[globalIndex]
                if (selectedTag) selectedTag.userData.baseScale = selectedTag.scale.x
                refreshNode(selectedContext, globalIndex)
                updateDeveloperHud();
            })

            this.style.display = "none";
            focusElement = undefined
        }
    }
})

//EVENTS MOUSE
let initialTouchPosition = { x: null, y: null };
const tapMoveThreshold = 30; // px movement allowed to still count as a tap/click
let orbitDragging = false; // suppress slide clicks while orbiting

// Guard: track OrbitControls drag state to avoid accidental clicks triggering slides
if (typeof orbitControls !== 'undefined' && orbitControls && orbitControls.addEventListener) {
    orbitControls.addEventListener('start', () => { orbitDragging = true; });
    orbitControls.addEventListener('end',   () => { orbitDragging = false; });
}

function onPointerMove(event) {
    // Support touch and mouse
    const isTouch = !!event.changedTouches;
    const cx = isTouch ? event.changedTouches[0].clientX : event.clientX;
    const cy = isTouch ? event.changedTouches[0].clientY : event.clientY;

    pointer.x = (cx / window.innerWidth) * 2 - 1;
    pointer.y = -(cy / window.innerHeight) * 2 + 1;

    // If we've moved too far since pointerdown, cancel click intent
    if (initialTouchPosition.x !== null && initialTouchPosition.y !== null) {
        const dx = cx - initialTouchPosition.x;
        const dy = cy - initialTouchPosition.y;
        if ((dx*dx + dy*dy) > (tapMoveThreshold * tapMoveThreshold)) {
            selectState = false;
        }
    }
}

function onPointerClick(event) {
    event.preventDefault();

    // Only respond to primary mouse button (or touch)
    if (event.button !== undefined && event.button !== 0) return;

    let x, y;
  
    // Check if the event is a touch event
    if (event.changedTouches) {
      x = event.changedTouches[0].clientX;
      y = event.changedTouches[0].clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }
  
    pointer.x = (x / window.innerWidth) * 2 - 1;
    pointer.y = -(y / window.innerHeight) * 2 + 1;
  
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(intersectObjectsArray);
  
    if (intersects.length > 0) {
        selectedPin = intersects[0].object;

        selectedContext = intersects[0].object.context;
        selectedNode = intersects[0].object.index;
        selectedBox = contexts[selectedContext]?.boxes[selectedNode] || null;
        selectedTag = contexts[selectedContext]?.tags[selectedNode] || null;
        updateDeveloperHud();

    if (camera.position.distanceTo(selectedPin.position) < 10 && contexts[selectedContext].tagData[selectedNode].slides !== undefined && slideshowStatus.activeSlideshow == undefined) {
            slideshowStatus.activeSlideshow = contexts[selectedContext].tagData[selectedNode].slides
            slideshowStatus.activeSlideshowLength = contentData[slideshowStatus.activeSlideshow].length
            if (Array.isArray(contentData[slideshowStatus.activeSlideshow][0])) {
                slideshowStatus.activeSlide = 0
                slideshowStatus.activeSlideLength = contentData[slideshowStatus.activeSlideshow][0].length
                slideshowStatus.activeSubSlide = 0
            } else {
                slideshowStatus.activeSlide = 0
                slideshowStatus.activeSlideLength = undefined
                slideshowStatus.activeSubSlide = undefined

            }

            pushContent(slideshowStatus)
            if (window.appStatus == "flight") {
                flyControls.enabled = false
                document.body.style.cursor = 'default';
            }
            window.appStatus = "slideshow"
            const slideShowScreen = document.querySelector(`#slides`)
            slideShowScreen.style.display = "flex"
        }
    }
}

let selectState = false
function processPointerUpEvent(event) {
    // Suppress click if we were orbit-dragging (OrbitControls active)
    if (selectState && !orbitDragging) {
      onPointerClick(event);
    }
    selectState = false;
        // reset initial position for next interaction
        initialTouchPosition.x = null;
        initialTouchPosition.y = null;
  }
  
  window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', (event) => {
        selectState = true;
        // record initial position for click-vs-drag detection
        if (event.changedTouches) {
            initialTouchPosition.x = event.changedTouches[0].clientX;
            initialTouchPosition.y = event.changedTouches[0].clientY;
        } else {
            initialTouchPosition.x = event.clientX;
            initialTouchPosition.y = event.clientY;
        }
    });
  window.addEventListener('pointerup', processPointerUpEvent);

// DATA CONSISTENCY CHECK (updated for dynamic switching)
(() => {
    const planetCtx = contexts && contexts[0];
    if (!planetCtx || !planetCtx.tagData) return;
    const tagData = planetCtx.tagData || [];
    const conn = planetCtx.connectionData || [];
    const arrow = planetCtx.arrowConnectionData || [];
    const dashed = planetCtx.dashedConnectionData || [];
    const tunnel = planetCtx.tunnelConnectionData || [];

    const label = name => `[DATA TEST:${planetCtx.name || 'planet'}:${name}]`;

    if (tagData.length !== conn.length) {
        console.log(label('connections length mismatch'), tagData.length, conn.length);
        for (let i = 0; i < Math.min(tagData.length, conn.length); i++) {
            if (tagData[i].id !== conn[i][0]) {
                console.log(label('id mismatch'), i, tagData[i].id, '!=', conn[i][0]);
            }
        }
    }
    if (tagData.length !== arrow.length) {
        console.log(label('arrow length mismatch'), tagData.length, arrow.length);
    }
    if (tagData.length !== dashed.length) {
        console.log(label('dashed length mismatch'), tagData.length, dashed.length);
    }
    if (tagData.length !== tunnel.length) {
        console.log(label('tunnel length mismatch'), tagData.length, tunnel.length);
    }
})();

let octreeHelperRoot = new THREE.Object3D();
scene.add(octreeHelperRoot);

function clampExampleIndex(list, index) {
    if (!list || list.length === 0) return -1;
    const safeIndex = Number.isFinite(index) ? index : 0;
    return ((safeIndex % list.length) + list.length) % list.length;
}

function getExampleAgent(list, idKey, indexKey) {
    if (!list || list.length === 0) return null;
    let idx = -1;
    const currentId = guttaState[idKey];
    if (currentId !== null && currentId !== undefined) {
        idx = list.findIndex(agent => agent.ID === currentId);
    }
    if (idx === -1) {
        idx = clampExampleIndex(list, guttaState[indexKey]);
    }
    if (idx === -1) return null;
    guttaState[indexKey] = idx;
    guttaState[idKey] = list[idx].ID;
    return list[idx];
}

function adjustExampleIndex(idKey, indexKey, list, delta) {
    if (!list || list.length === 0) return null;
    let idx = -1;
    const currentId = guttaState[idKey];
    if (currentId !== null && currentId !== undefined) {
        idx = list.findIndex(agent => agent.ID === currentId);
    }
    if (idx === -1) {
        idx = clampExampleIndex(list, guttaState[indexKey]);
    }
    if (idx === -1) return null;
    idx = clampExampleIndex(list, idx + delta);
    guttaState[indexKey] = idx;
    guttaState[idKey] = list[idx].ID;
    return list[idx];
}

function followAgent(agent) {
    // Disable manual flight controls
    flyControls.enabled = false;

    // Ensure jaraniusCenter's world matrix is up-to-date
    jaraniusCenter.updateMatrixWorld(true);

    // Clone the agent's local position
    const agentLocalPos = agent.position3D.clone();

    // Calculate the agent's world position by applying jaraniusCenter's world matrix
    const agentWorldPos = jaraniusCenter.localToWorld(agentLocalPos);

    // Compute the planet normal assuming the planet center is at (0,0,0)
    const planetNormal = agentWorldPos.clone().normalize();

    // Get the agent's forward direction (velocity)
    const forward = agent.velocity3D.clone();
    if (forward.lengthSq() < 0.00001) {
        // If velocity is negligible, set a default forward direction
        forward.set(0, 0, 1);
    } else {
        forward.normalize();
    }

    // Define an offset relative to the agent's forward and up vectors
    const offsetLocal = new THREE.Vector3(0, 0.05, -0.3);  

    // Compute the right and up vectors
    const right = new THREE.Vector3().crossVectors(planetNormal, forward).normalize();
    const up = new THREE.Vector3().crossVectors(forward, right).normalize();

    // Calculate the desired camera position in world space
    const cameraDesiredPos = agentWorldPos.clone()
        .add(right.multiplyScalar(offsetLocal.x))
        .add(up.multiplyScalar(offsetLocal.y))
        .add(forward.multiplyScalar(offsetLocal.z));

    // Smoothly interpolate the camera's position towards the desired position
    camera.position.lerp(cameraDesiredPos, 0.08);  // Adjust the lerp factor as needed

    // Optionally, adjust the camera's up vector for aesthetic purposes
    // Be cautious with frequent or large adjustments to prevent instability
    camera.up.lerp(planetNormal, 0.05);

    // Make the camera look at the agent's position
    camera.lookAt(agentWorldPos);
}

function followOrbitAgent(agent) {
    if (!agent) return;
    jaraniusCenter.updateMatrixWorld(true);
    const agentWorldPos = jaraniusCenter.localToWorld(agent.position3D.clone());
    const center = middleOfPlanet;
    const distance = camera.position.distanceTo(center);
    const normal = agentWorldPos.clone().sub(center).normalize();
    const desiredPos = center.clone().add(normal.multiplyScalar(distance));
    orbitControls.target.copy(center);
    camera.position.copy(desiredPos);
}

//ANIMATIONLOOP

function animate() {
    renderer.setAnimationLoop( render );
}

const FPS_LIMIT = 30;
const FRAME_INTERVAL_MS = FPS_LIMIT > 0 ? 1000 / FPS_LIMIT : 0;
let lastFrameTimeMs = 0;

function render() {  
    const now = performance.now();
    if (FRAME_INTERVAL_MS > 0) {
        if (now - lastFrameTimeMs < FRAME_INTERVAL_MS) {
            return;
        }
        lastFrameTimeMs = now - ((now - lastFrameTimeMs) % FRAME_INTERVAL_MS);
    }

    updateFpsCounter(now);

    updateGutta(guttaState, guttaStats, jaranius, nuggets, developer, octreeHelperRoot)
    
    const camPos = camera.position
    const camRot = camera.rotation
    spotlight.position.set(camPos.x, camPos.y, camPos.z);
    spotlight.rotation.set(camRot.x, camRot.y, camRot.z);
    
    if (planetEnvironment.isJaraniusInitialized()) {
        planetEnvironment.update({
            appStatus: window.appStatus,
            orbitControls,
            introState,
        });

        window.curveMeshes.forEach(curveData => {
            curveData.texture.offset.y += 0.004;
            curveData.texture.offset.x += 0.001;
        });

        scanPins();
        updateLightIntensity(clock);
    }

    if (introState.tuneLength) {
        if (camera.position.z > 15 && introState.started === true) {
            camera.position.z -= 0.0213 * Math.pow(camera.position.z - 10, 1.35) / introState.tuneLength
        }
        if (camera.position.z < -15 && introState.started === true) {
            camera.position.z += 0.213 * Math.pow(Math.abs(camera.position.z) - 10, 1.35) / introState.tuneLength
        }
        if (introState.started === true) {
            camera.position.x += 0.4 / introState.tuneLength
            camera.position.y += 0.2 / introState.tuneLength
        }
        if (introState.audio) {
            // keep subtitle timing in sync
            // (timeupdate listener handles text updates; this mirrors timing for any external consumers)
            introState.elapsedTime = introState.audio.currentTime;
        }
    }

    const delta = clock.getDelta();

    if (flyControls.enabled) {  
        flyControls.update(delta);

        const distance = camera.position.distanceTo(middleOfPlanet);
        if (distance < flyControls.minDistance) {
            const direction = camera.position.clone().sub(middleOfPlanet).normalize();
            camera.position.copy(direction.multiplyScalar(flyControls.minDistance));
        }

        updateFlightSpeedByDistance(distance);
    }

    if (window.appStatus === "flight") {
        const currentFollowMode = getFollowMode();
        if (currentFollowMode === "gutt") {
          const exampleGutt = getExampleAgent(guttaState.gutta, 'exampleGuttId', 'exampleGuttIndex');
          if (exampleGutt) {
            followAgent(exampleGutt);
          }
        }
        else if (currentFollowMode === "mara") {
          const exampleMara = getExampleAgent(guttaState.mara, 'exampleMaraId', 'exampleMaraIndex');
          if (exampleMara) {
            followAgent(exampleMara);
          }
        }
        else {
          // Manual flight mode => normal fly controls
          flyControls.enabled = true;
        }
      }

    if (window.appStatus === "orbit") {
        const currentFollowMode = getFollowMode();
        if (currentFollowMode === "gutt") {
            followOrbitAgent(getExampleAgent(guttaState.gutta, 'exampleGuttId', 'exampleGuttIndex'));
        } else if (currentFollowMode === "mara") {
            followOrbitAgent(getExampleAgent(guttaState.mara, 'exampleMaraId', 'exampleMaraIndex'));
        }
    }

    if (orbitControls.enabled) {
        orbitControls.update();
    }

    if (resizeRendererToDisplaySize()) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
}

animate()
