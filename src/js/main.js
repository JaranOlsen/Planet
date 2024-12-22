//  IMPORT DEPENDENCIES
import * as THREE from 'three'
import { Float32BufferAttribute, FrontSide, DoubleSide, Vector2 } from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { FlyControls } from 'three/addons/controls/FlyControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js'
import { generateUUID } from 'three/src/math/MathUtils.js'
import WordCloud from 'wordcloud';
window.WordCloud = WordCloud;


//  IMPORT SCRIPTS
import { createImages, createTags, hoveredPins, intersectObjectsArray, createConnections, hoverPins, instantiateNugget } from './mindmap.js'
import { getRandomNum, convertLatLngtoCartesian, convertCartesiantoLatLng, constrainLatLng, easeInOutQuad } from './mathScripts.js'
import { pushContent, handleCarouselButton } from './content.js'
import { initialiseVersion } from './versions.js'
import { creation } from './creation.js'
import { updateGutta } from './gutta.js'
import { createField } from './podcast.js'
import { createFieldLines } from './flux.js'

//IMPORT DATA
import { planetTagData, planetConnections, planetArrowedConnections, planetDashedConnections, planetTunnelConnections } from './data/planetData.js'
import { planetImageData } from './data/planetImageData.js'
import { planetNuggetData } from './data/planetNuggetData.js'
import { spiralTagData, spiralConnections, spiralArrowedConnections, spiralDashedConnections } from './data/spiralData.js'
import { spiralImageData } from './data/spiralImageData.js'
import { enneagramTagData, enneagramConnections, enneagramArrowedConnections, enneagramDashedConnections, enneagramTunnelConnections } from './data/enneagramData.js'
import { contentData } from './data/contentData.js'
import { palette } from './data/palette.js'
import { pinMaterials, pinWireframeMaterials, boxMaterials } from './data/materials.js'

//  IMPORT SHADERS
import atmosphericLightVertexShader from '../shaders/atmosphericLightVertex.glsl'
import atmosphericLightFragmentShader from '../shaders/atmosphericLightFragment.glsl'
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl'
import spiralVertexShader from '../shaders/spiralVertex.glsl'
import spriralFragmentShader from '../shaders/spiralFragment.glsl'

//  IMPORT TEXTURES
import milkyway from "/assets/textures/milkyway4.webp"
import starW from "/assets/textures/starW.webp"
import starR5 from "/assets/textures/starR5.webp"
import starR10 from "/assets/textures/starR10.webp"
import starR15 from "/assets/textures/starR15.webp"
import starR20 from "/assets/textures/starR20.webp"
import starB5 from "/assets/textures/starB5.webp"
import starB10 from "/assets/textures/starB10.webp"
import starB15 from "/assets/textures/starB15.webp"
import starB20 from "/assets/textures/starB20.webp"
import sunTexture from "/assets/textures/sun1k.webp"
import moonTexture from "/assets/textures/moon1k.webp"
import redmoonTexture from "/assets/textures/moonRed1k.webp"
import icemoonTexture from "/assets/textures/moonIce1k.webp"
import dash from '/assets/textures/dash.webp'
import tier from '/assets/textures/tier.webp'

// IMPORT MODELS
import signModel from "../models/sign.glb"
import field1 from '/src/models/field.glb'
import field2 from '/src/models/field2.glb'
import field3 from '/src/models/field3.glb'
import field4 from '/src/models/field4.glb'

window.appStatus = "initialising";

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer(
    {
        canvas,
        antialias: true,
    });
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.logarithmicDepthBuffer = false; //turn on if z-fighting
renderer.frustumCulled = true;

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

const fov = 50;
const aspect = 2;  // the canvas default
const near = 0.01;
const far = 2000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 500

const clock = new THREE.Clock();

// -- TRANSITION VARIABLES --
let transitioningToOrbit = false;
let transitionStartTime = 0;
let transitionDuration = 1.5; // in seconds, tweak as desired

// We'll store the camera position/orientation at the moment of switching out of flight mode
let flightCamPos = new THREE.Vector3();
let flightCamQuat = new THREE.Quaternion();

// And the orbit "destination" position/orientation we'll end up at
let orbitCamPos = new THREE.Vector3(0, 0, 500);
let orbitCamQuat = new THREE.Quaternion();

const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enablePan = false
orbitControls.maxDistance = 1000
orbitControls.minDistance = 5.2
orbitControls.zoomSpeed = 0.3
orbitControls.rotateSpeed = 0.3
orbitControls.target.set(0, 0, 0);
orbitControls.update();
orbitControls.enabled = false;

const baseMovementSpeed = 0.1;
let baseMovementSpeedModifier = 1;
const baseRollSpeed = Math.PI / 48;
let baseRollSpeedModifier = 1;
const flyControls = new FlyControls(camera, renderer.domElement);
flyControls.domElement = renderer.domElement;
flyControls.movementSpeed = baseMovementSpeed * baseMovementSpeedModifier;
flyControls.rollSpeed = baseRollSpeed * baseRollSpeedModifier;
flyControls.autoForward = false;
flyControls.dragToLook = false;
flyControls.enabled = false;
flyControls.minDistance = 5.15;

// Add momentum and roll variables
let velocity = new THREE.Vector3(0, 0, 0); // Movement velocity
let rollVelocity = 0; // Roll velocity
const damping = 0.999; // Damping factor for momentum
const rollDamping = 0.999; // Damping factor for roll

// Override the FlyControls update method
const originalUpdate = flyControls.update.bind(flyControls);
flyControls.update = function (delta) {
    // Use the original update for basic control handling
    originalUpdate(delta);

    // Transform velocity into the camera's local space
    const localVelocity = velocity.clone().applyQuaternion(camera.quaternion);

    // Apply damping for inertia
    velocity.multiplyScalar(damping);
    rollVelocity *= rollDamping;

    // Update position and rotation based on momentum
    camera.position.add(localVelocity);
    camera.rotateZ(rollVelocity);
};

// Listen for keypresses to control movement and roll
document.addEventListener('keydown', (event) => {
    const speed = 0.001; // Adjust speed for movement
    const rollSpeed = 0.000001; // Adjust speed for rolling
    switch (event.code) {
        case 'KeyW': // Move forward
            velocity.z -= speed;
            break;
        case 'KeyS': // Move backward
            velocity.z += speed;
            break;
        case 'KeyA': // Move left
            velocity.x -= speed;
            break;
        case 'KeyD': // Move right
            velocity.x += speed;
            break;
        case 'Space': // Move up
            velocity.y += speed;
            break;
        case 'ShiftLeft': // Move down
            velocity.y -= speed;
            break;
        case 'KeyQ': // Roll counterclockwise
            rollVelocity += rollSpeed;
            break;
        case 'KeyE': // Roll clockwise
            rollVelocity -= rollSpeed;
            break;
    }
});








const scene = new THREE.Scene();

const pointer = new THREE.Vector2;
const raycaster = new THREE.Raycaster();

let developer = false;

export let contexts = []
let selectedContext = 0;
let selectedPin = null;
let selectedBox = null;
let selectedTag = null;
let selectedNode = null;
let selectedNodes = []
let nuggets = []
let showContent = true;
let fastMove = false;

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
  

let signRotationVector = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z)

const middleOfPlanet = new THREE.Vector3(0, 0, 0);
const spiral = new THREE.Object3D()

let guttaState = {
    gutta: [],
    mara: [],
    species: undefined,
    init: false,
}

let guttaStats = {
    kills: 0,
    totalHungerAtKill: 0,
    munch: 0,
    totalHungerAtMunch: 0
}

//VERSION MANAGER

const postLoadingManager = new THREE.LoadingManager();
const textureLoader2 = new THREE.TextureLoader(postLoadingManager)

const playButton = document.getElementById("playbutton")
const credits = document.getElementById("credits")
const skipButton = document.getElementById("skipbutton")
initialiseVersion(creation, postLoadingManager, guttaState, scene)
window.appStatus = "version-menu"

let jaraniusInitialized = false

//LOADING MANAGER
const initialLoadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(initialLoadingManager)

initialiseLoadingManager(initialLoadingManager)

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

//SILENCE SCREEN
function animateLetterSpacing() {
    const element = document.getElementById('silence');
    let start = null;
    const initialSpacing = 4; // Starting letter-spacing in rem
    const maxSpacing = 8; // Maximum letter-spacing in rem
    const duration = 50000; // Duration in milliseconds

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / duration;
        const easing = 1 - Math.pow(1 - progress, 3); // Cubic easing out: 1 - (1 - t)^3
        const currentSpacing = Math.min(initialSpacing + easing * (maxSpacing - initialSpacing), maxSpacing);

        element.style.letterSpacing = `${currentSpacing}rem`;
        // Adjust margin-right to be the negative value of currentSpacing
        element.style.marginRight = `-${currentSpacing}rem`;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.style.letterSpacing = `${maxSpacing}rem`; // Ensure it ends at maxSpacing
            element.style.marginRight = `-${maxSpacing}rem`; // Ensure margin-right matches the final letter-spacing
        }
    }

    window.requestAnimationFrame(step);
}
function fadeOutAudio(audioElement, fadeDuration = 3000) {
    const originalVolume = audioElement.volume;
    const intervalSpeed = 50; // How quickly the volume decreases
    const decrementAmount = (originalVolume / fadeDuration) * intervalSpeed; // Calculate decrement amount
  
    const fadeOut = setInterval(() => {
      if (audioElement.volume > decrementAmount) {
        audioElement.volume -= decrementAmount;
      } else {
        audioElement.volume = 0;
        audioElement.pause(); // Stop the audio
        audioElement.currentTime = 0; // Reset the audio to the start
        clearInterval(fadeOut);
      }
    }, intervalSpeed);
  }

//INTRO
function updateIntro() {
    const selection = document.getElementById('intro-select').value;
    const credits = document.getElementById('credits');
    const subtitleContainer = document.getElementById('subtitle-container');
    const audioElement = document.getElementById('introTune');
    const sourceElement = audioElement.getElementsByTagName('source')[0];
  
    switch(selection) {
      case 'desiderata':
        credits.textContent = 'Desiderata - Max Ehrmann. RedFrost Motivation';
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/desiderata.mp3';
        break;
      case 'astronomer':
        credits.textContent = "When I Heard the Learn'd Astronomer - Walt Whitman. RedFrost Motivation";
        subtitleContainer.dataset.subtitleFile = 'astronomer';
        sourceElement.src = '/Planet//assets/audio/astronomer.mp3';
        break;
      case 'carlrogers':
        credits.textContent = "Carl Rogers speaking about listening and presence. Music: First Step - Hans Zimmer";
        subtitleContainer.dataset.subtitleFile = 'carlrogers';
        sourceElement.src = '/Planet/assets/audio/carlrogers.mp3';
        break;
      case 'carlrogers2':
        credits.textContent = "Carl Rogers speaking about listening and presence. Music: This Is Me - Jaran de los Santos Olsen";
        subtitleContainer.dataset.subtitleFile = 'carlrogers2';
        sourceElement.src = '/Planet/assets/audio/carlrogers2.mp3';
        break;
      case 'alanwatts':
        credits.textContent = "Alan Watts on Swimming With the Stream. Music: Agarb - Bilro & Barbosa and Passion - Sappheiros";
        subtitleContainer.dataset.subtitleFile = 'alanwatts';
        sourceElement.src = '/Planet/assets/audio/alanwatts.mp3';
        break;
      case 'alanwatts2':
        credits.textContent = "Alan Watts on Letting Go. Music: Kevin MacLeod - Meditation Impromptu 1";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/alanwatts2.mp3';
        break;
      case 'ajahnchah':
        credits.textContent = "Ajahn Chah from the BBC documentary 'The Mindful Way' & Jack Kornfield speaking about Ajahn Chah and loving awareness. Music: Jaran Olsen - This is me";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/ajahnchah.mp3';
        break;
      case 'honestIntro':
        credits.textContent = "An Honest Meditation";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/honestIntro.mp3';
        break;
      case 'guesthouse':
        credits.textContent = "The Guesthouse - Rumi. Read by Helena Bonham Carter";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/guesthouse.mp3';
        break;
      case 'ramanamaharsi':
        credits.textContent = "Jack Kornfield reads about Ramana Maharsi";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/ramanamaharsi.mp3';
        break;
      case 'krishnamurti':
        credits.textContent = "Krishnamurti on Meditation and Love";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/krishnamurti.mp3';
        break;
      case 'rupertspira':
        credits.textContent = "I am Always I - Rupert Spira";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/rupertspira.mp3';
        break;
      case 'rupertspira2':
        credits.textContent = "I am That - Rupert Spira";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/rupertspira2.mp3';
        break;
      case 'portianelson':
        credits.textContent = "Autobiography in five chapters - Portia Nelson";
        subtitleContainer.dataset.subtitleFile = 'null';
        sourceElement.src = '/Planet/assets/audio/portianelson.mp3';
        break;
    }
    audioElement.load();
    audioElement.addEventListener("loadedmetadata", function() {
        introTuneLength = audioElement.duration;
    });
    loadSubtitles(subtitleContainer.dataset.subtitleFile)
}
document.getElementById('intro-select').addEventListener('change', updateIntro);

const subtitleContainer = document.getElementById('subtitle-container');
const subtitleFile = subtitleContainer.getAttribute('data-subtitle-file');
let subtitles = null;
let elapsedTime = 0;
let currentSubtitle = null;

async function loadSubtitles(subtitleFileName) {
    if (subtitleFileName && subtitleFileName !== 'false' && subtitleFileName !== 'null') {
        try {
            const module = await import(`./data/subtitles/${subtitleFileName}.js`);
            subtitles = module.default;
        } catch (error) {
            console.error(`Failed to load subtitles: ${error}`);
        }
    }
}

function updateSubtitles() {
    if (!subtitles) return;
    
    const newSubtitle = subtitles.find(({ start, end }) => elapsedTime >= start && elapsedTime <= end);
    if (newSubtitle && newSubtitle !== currentSubtitle) {
        currentSubtitle = newSubtitle;
        subtitleContainer.textContent = currentSubtitle.text;
    } else if (!newSubtitle) {
        subtitleContainer.textContent = ''; // Clear subtitles if there's no match
    }
}

loadSubtitles(subtitleFile).then(() => {
    introTune.addEventListener('timeupdate', updateSubtitles);
});

let introStarted = false
let introTuneLength
let introTune
initialiseIntro()
function initialiseIntro() {
    introTune = document.getElementById("introTune");
    introTune.preload = "auto";
    introTune.currentTime = 0;
    introTune.volume = 1;
    
    if (introTune.readyState > 0) {
        introTuneLength = introTune.duration;
    } else {
        introTune.addEventListener("loadedmetadata", function() {
            introTuneLength = introTune.duration;
        });
    }

    const handlePlayButtonClick = () => {
        introTune.play();
        introStarted = true;
        window.appStatus = "orbit"
        playButton.style.display = "none";
        skipButton.style.display = "none";
        credits.style.display = "none";
        subtitleContainer.style.display = "block";
        orbitControls.enabled = true
        document.body.style.cursor = 'none';
    };
    
    const handleSkipButtonClick = () => {
        window.appStatus = "orbit"
        playButton.style.display = "none";
        skipButton.style.display = "none";
        credits.style.display = "none";
        camera.position.z = 15;
        orbitControls.enabled = true
        const titleMesh = scene.getObjectByName('title')
        scene.remove(titleMesh)
    };
    
    playButton.addEventListener("click", handlePlayButtonClick);
    playButton.addEventListener("touchend", (event) => {
        event.preventDefault(); // Prevent mouse event from firing after touch event
        handlePlayButtonClick();
    });
    
    skipButton.addEventListener("click", handleSkipButtonClick);
    skipButton.addEventListener("touchend", (event) => {
        event.preventDefault(); // Prevent mouse event from firing after touch event
        handleSkipButtonClick();
    });
}


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
  
//CREATE OUTER SPACE
function createGalaxy() {
    const radius = 1000;
    const segments = 50;
    const geometry = new THREE.SphereGeometry(radius, segments, segments);
    const galaxyDiffuseTexture = textureLoader.load(milkyway)
    galaxyDiffuseTexture.colorSpace = THREE.SRGBColorSpace
    const material = new THREE.MeshBasicMaterial({
        map: galaxyDiffuseTexture,
        transparent: false,
        opacity: 1,
        side: THREE.BackSide
    });

    const milkyWay = new THREE.Mesh(geometry, material);
    milkyWay.rotation.set(-Math.PI / 3, 0.1, Math.PI / 2)

    return milkyWay
}
const galaxy = createGalaxy()
scene.add(galaxy);

//CREATE STARS
const starGeometry = new THREE.BufferGeometry()
const starGeoR5 = new THREE.BufferGeometry()
const starGeoR10 = new THREE.BufferGeometry()
const starGeoR15 = new THREE.BufferGeometry()
const starGeoR20 = new THREE.BufferGeometry()
const starGeoB5 = new THREE.BufferGeometry()
const starGeoB10 = new THREE.BufferGeometry()
const starGeoB15 = new THREE.BufferGeometry()
const starGeoB20 = new THREE.BufferGeometry()

function createStarMaterial(texture) {
    const material = new THREE.PointsMaterial({
        size: 5,
        map: textureLoader.load(texture),
        transparent: true,
        fog: false
    })
    return material
}
const starMaterial = createStarMaterial(starW)
const starMatR5 = createStarMaterial(starR5)
const starMatR10 = createStarMaterial(starR10)
const starMatR15 = createStarMaterial(starR15)
const starMatR20 = createStarMaterial(starR20)
const starMatB5 = createStarMaterial(starB5)
const starMatB10 = createStarMaterial(starB10)
const starMatB15 = createStarMaterial(starB15)
const starMatB20 = createStarMaterial(starB20)
starMaterial.colorSpace = THREE.SRGBColorSpace
starMatR5.colorSpace = THREE.SRGBColorSpace
starMatR10.colorSpace = THREE.SRGBColorSpace
starMatR15.colorSpace = THREE.SRGBColorSpace
starMatR20.colorSpace = THREE.SRGBColorSpace
starMatB5.colorSpace = THREE.SRGBColorSpace
starMatB10.colorSpace = THREE.SRGBColorSpace
starMatB15.colorSpace = THREE.SRGBColorSpace
starMatB20.colorSpace = THREE.SRGBColorSpace

function createStarVertices(source, number) {
    for (let i = 0; i < number; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = (Math.random() - 0.5) * 2000
        const star = new THREE.Vector3(x, y, z)
        if (middleOfPlanet.distanceTo(star) > 500) {
            source.push(x, y, z)
        }
    }
}
const starVertices = []
createStarVertices(starVertices, 5000)
const starVertR5 = []
createStarVertices(starVertR5, 1000)
const starVertR10 = []
createStarVertices(starVertR10, 500)
const starVertR15 = []
createStarVertices(starVertR15, 100)
const starVertR20 = []
createStarVertices(starVertR20, 25)
const starVertB5 = []
createStarVertices(starVertB5, 1000)
const starVertB10 = []
createStarVertices(starVertB10, 500)
const starVertB15 = []
createStarVertices(starVertB15, 100)
const starVertB20 = []
createStarVertices(starVertB20, 25)

starGeometry.setAttribute('position', new Float32BufferAttribute(starVertices, 3))
starGeoR5.setAttribute('position', new Float32BufferAttribute(starVertR5, 3))
starGeoR10.setAttribute('position', new Float32BufferAttribute(starVertR10, 3))
starGeoR15.setAttribute('position', new Float32BufferAttribute(starVertR15, 3))
starGeoR20.setAttribute('position', new Float32BufferAttribute(starVertR20, 3))
starGeoB5.setAttribute('position', new Float32BufferAttribute(starVertB5, 3))
starGeoB10.setAttribute('position', new Float32BufferAttribute(starVertB10, 3))
starGeoB15.setAttribute('position', new Float32BufferAttribute(starVertB15, 3))
starGeoB20.setAttribute('position', new Float32BufferAttribute(starVertB20, 3))

const stars = new THREE.Points(starGeometry, starMaterial)
const starsR5 = new THREE.Points(starGeoR5, starMatR5)
const starsR10 = new THREE.Points(starGeoR10, starMatR10)
const starsR15 = new THREE.Points(starGeoR15, starMatR15)
const starsR20 = new THREE.Points(starGeoR20, starMatR20)
const starsB5 = new THREE.Points(starGeoB5, starMatB5)
const starsB10 = new THREE.Points(starGeoB10, starMatB10)
const starsB15 = new THREE.Points(starGeoB15, starMatB15)
const starsB20 = new THREE.Points(starGeoB20, starMatB20)
scene.add(stars, starsR5, starsR10, starsR15, starsR20, starsB5, starsB10, starsB15, starsB20)

//CREATE SOLAR SYSTEM
const center = new THREE.Object3D();
scene.add(center);
const jaraniusCenter = new THREE.Object3D();
center.add(jaraniusCenter);
const spiralCenter = new THREE.Object3D();
const enneaCenter = new THREE.Object3D();
center.add(spiralCenter);
center.add(enneaCenter);

const pivot1 = new THREE.Object3D();
const pivot2 = new THREE.Object3D();
const pivot3 = new THREE.Object3D();
const pivot4 = new THREE.Object3D();

pivot1.rotation.y = Math.PI / 2.5;//- Math.PI / 2.5;
pivot1.rotation.x = 0.15
pivot2.rotation.y = 2 * Math.PI / 16;
pivot2.rotation.x = 0.22
pivot3.rotation.y = 2 * Math.PI / 2;
pivot3.rotation.x = 0.31
pivot4.rotation.y = 9 * Math.PI / 6;
pivot4.rotation.x = -0.41;

center.add(pivot1);
center.add(pivot2);
center.add(pivot3);
center.add(pivot4);

// CREATE JARANIUS
let jaranius
let jaraniusConnections = new THREE.Object3D()
let spiralDynamicsConnections = new THREE.Object3D()
let enneaConnections = new THREE.Object3D()
let clouds
let atmosphere
let atmosphericLight
let sign
const planetContent = new THREE.Object3D()
export function createJaranius(diffuseTexture, normalTexture, roughnessTexture, cloudsTexture, cloudsNormal, version) {
    jaraniusInitialized = true
    if (version == "2") renderer.shadowMap.enabled = false
    const jaraniusSegments = 200
    
    const jaraniusGeometry = new THREE.SphereGeometry(5, jaraniusSegments, jaraniusSegments);
    jaraniusGeometry.computeBoundingSphere();

    const diffuse = textureLoader2.load(diffuseTexture)
    diffuse.colorSpace = THREE.SRGBColorSpace;

    const jaraniusMaterial = new THREE.MeshStandardMaterial({ 
        map: diffuse,
        normalMap: textureLoader2.load(normalTexture),
        roughnessMap: textureLoader2.load(roughnessTexture),  //works well
        normalScale: new THREE.Vector2(5, 5),  //works well
        metalness: 0,  //works well
        flatShading: false,
        side: FrontSide,
    })
    jaranius = new THREE.Mesh(
        jaraniusGeometry,
        jaraniusMaterial 
    )
    jaranius.name = "jaranius"
    jaraniusCenter.add(jaranius)
    jaranius.receiveShadow = true;
    jaranius.castShadow = true;

    //create cloud layer
    const cloudsDiffuseTexture = textureLoader2.load(cloudsTexture)
    cloudsDiffuseTexture.colorSpace = THREE.SRGBColorSpace;
    const cloudsMaterial = new THREE.MeshLambertMaterial({
        map: cloudsDiffuseTexture,
        normalMap: textureLoader2.load(cloudsNormal),
        normalScale: new THREE.Vector2(0.5, 0.5), 
        transparent: true,
        side: DoubleSide,
        opacity: 0.8,
        depthWrite: false,
    })
    clouds = new THREE.Mesh(
        new THREE.SphereGeometry(5.04, jaraniusSegments, jaraniusSegments),
        cloudsMaterial
    )

    clouds.receiveShadow = true;
    clouds.castShadow = false;
    jaranius.add(clouds)
    
    //create atmosphericLight  
    atmosphericLight = new THREE.Mesh(
        new THREE.SphereGeometry(5.01, jaraniusSegments, jaraniusSegments),
        new THREE.ShaderMaterial({
            vertexShader: atmosphericLightVertexShader,
            fragmentShader: atmosphericLightFragmentShader,
            blending: THREE.AdditiveBlending,
            uniforms: {
                baseIntensity: { value: 0.9 },
                atmosphereStrength: { value: 2.5 },
                uniformCameraPosition: { value: camera.position },
                planetPosition: { value: new THREE.Vector3(0, 0, 0) },
                lightPosition: { value: sunObjectWorldPosition },
                closeDistanceThreshold: { value: 7 },
                standardColor: { value: new THREE.Vector3(0.3, 0.6, 1.0) },
                sunsetColor: { value: new THREE.Vector3(1.0, 0.4, 0.1) }, //(0.8, 0.4, 0.2) },
                nightColor: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
                sunsetMinAngleThreshold: { value: 75 },
                sunsetMaxAngleThreshold: { value: 102 },
                nightMaxAngleThreshold: { value: 130 },
            },
        })
    );
    
    atmosphericLight.position.set(0, 0, 0)
    jaranius.add(atmosphericLight);

    //create atmosphere
    atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(5.3, 100, 100),
        new THREE.ShaderMaterial({
            vertexShader: atmosphereVertexShader,
            fragmentShader: atmosphereFragmentShader,
            uniforms: {
                baseIntensity: { value: 0.1 },
                intensityPower: { value: 1.1 },
                lightPosition: { value: sunObjectWorldPosition },
                uniformCameraPosition: { value: camera.position },
                planetPosition: { value: new THREE.Vector3(0, 0, 0) },
                minDistance: { value: 5.0 },
                maxDistance: { value: 5000.0 },
                closeDistanceThreshold: { value: 7 },
                standardColor: { value: new THREE.Vector3(0.3, 0.6, 1.0) }, // Standard atmosphere color
                sunsetColor: { value: new THREE.Vector3(1.0, 0.4, 0.1) }, // Sunset color
                nightColor: { value: new THREE.Vector3(0.0, 0.0, 0.0) }, // Night color
                sunsetMinAngleThreshold: { value: 75 },
                sunsetMaxAngleThreshold: { value: 102 },
                nightMaxAngleThreshold: { value: 130 },
            },
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true,
            depthWrite: false,
        })
    );
    
    atmosphere.position.set(0, 0, 0)
    atmosphere.scale.set(1.2, 1.2, 1.2)
    jaranius.add(atmosphere);
    
    //create jaranius light
    const jaraniusLight = new THREE.PointLight(0xffffff, 0); //0.01
    jaraniusLight.position.set(0, 0, 0);
    jaranius.add(jaraniusLight);

    
    //create sign
    sign = new THREE.Object3D()
    planetContent.add(sign)
    sign.position.set(0, -5.05, 0)
    const loader = new GLTFLoader(postLoadingManager);
    loader.load(signModel,
        function ( glb ) {
            const model = glb.scene
            sign.add( model );
            model.scale.set(5, 5, 5)
            model.rotation.y += Math.PI / 2;
            model.rotation.x += Math.PI / 3;
            // Enable shadow casting for each mesh in the model
            model.traverse(function (object) {
                if (object.isMesh) {
                    object.castShadow = true;
                }
            });
        },
        function ( xhr ) {
            //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        function ( error ) {
            console.log( 'An error happened' );
        }
    );
}

export function createMindmap() {
    //create pictures
    jaranius.add(planetContent)

    for (let i = 0; i < planetImageData.length; i++) {
        createImages(planetImageData[i].src, planetImageData[i].lat, planetImageData[i].lng, planetImageData[i].size / 500, planetImageData[i].radius, planetContent);
    }
    for (let i = 0; i < spiralImageData.length; i++) {
        createImages(spiralImageData[i].src, spiralImageData[i].lat, spiralImageData[i].lng, spiralImageData[i].size / 500, spiralImageData[i].radius, spiral);
    }

    //create tags
    const indexMod = 0

    createTags(contexts[0].tagData, contexts[0].tagDestination, contexts[0].radius, 0, indexMod)

    createTags(contexts[1].tagData, contexts[1].tagDestination, contexts[1].radius, 1, indexMod)

    createTags(contexts[3].tagData, contexts[3].tagDestination, contexts[3].radius, 3, indexMod)

    //create nuggets
    for (let i = 0; i < planetNuggetData.length; i++) { 
        let nugget = instantiateNugget(i, planetNuggetData[i].lat, planetNuggetData[i].lng, planetNuggetData[i].color, planetNuggetData[i].size / 100000, planetNuggetData[i].slides, jaranius, 2);
        nuggets.push(nugget)
    }

    //create connections
    const curveThickness = 0.0001
    const curveRadiusSegments = 3
    const curveMaxAltitude = 0.03
    const curveMinAltitude = 5.02
    jaranius.add(jaraniusConnections)
    let context = jaraniusConnections
    createConnections(planetTagData, planetConnections, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, false, false)
    createConnections(planetTagData, planetDashedConnections, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, true, false)
    createConnections(planetTagData, planetArrowedConnections, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, false, true)

    spiral.add(spiralDynamicsConnections)
    let context2 = spiralDynamicsConnections
    createConnections(spiralTagData, spiralConnections, 0.0002, curveRadiusSegments, 0.1, 7.01, context2, false, false)

    enneagram.add(enneaConnections)
    let context4 = enneaConnections
    //createConnections(enneagramTagData, enneagramConnections, 0.0002, curveRadiusSegments, 0.1, 8.01, context4, false, false, false)
    createConnections(enneagramTagData, enneagramTunnelConnections, 0.0002, curveRadiusSegments, 0.1, 8.01, context4, false, false, true)
}

//PODCAST FIELDS TEST
/* createField(field1, new THREE.Vector3(1.0, 0, 0), scene)
createField(field2, new THREE.Vector3(0, 1.0, 0), scene)
createField(field3, new THREE.Vector3(0, 0, 1.0), scene)
createField(field4, new THREE.Vector3(0, 1.0, 1.0), scene) */
// How to make fields in Blender
// 1. Add Bezier curve. Edit mode. Use draw tool, make sure surface is selected. Draw on planet. Delete original bezier vertices
// 2. Object mode. Object - convert to - Mesh
// 3. Edit mode. Select all vertices. Press F to create face. Select face, right click face, Triangulate faces.
// 4. Select a face. Go to transform orientations and select Normal. press Shift + NumPad 7. This will align the view to the normal of the selected face. Make a new transform orientation.
// 5. Object mode. Choose the newly made transform orientation and move the objects the desired distance out from the planet
// 6. Export object.

//CREATE ENNEAGRAM FLUX LINES
const enneagram = new THREE.Object3D
const enneagramConnectionsObj = new THREE.Object3D
let enneagramActivated = false
function createEnneagram(enneagram) {
    enneaCenter.add(enneagram)
    enneagram.add(enneagramConnectionsObj)
    enneagramActivated = true
    
    //main flux lines
    createFieldLines(enneagram, 9, 2, 200, true, 0.5, 5.761, 0.5)
    //wing flux lines
    createFieldLines(enneagram, 9, 2, 200, true, 0.35, 5.561, 0.35)
    createFieldLines(enneagram, 9, 2, 200, true, 0.35, 5.961, 0.35)
    //thin flux lines
    createFieldLines(enneagram, 10, 1.2, 200, false, undefined, 0.02)
    createFieldLines(enneagram, 15, 1.225, 200, false, undefined, 0.01)
    createFieldLines(enneagram, 20, 1.25, 200, false, undefined, 0)
    createFieldLines(enneagram, 25, 1.375, 200, false, undefined, 0.01)
    createFieldLines(enneagram, 30, 1.5, 200, false, undefined, 0.02)
    createFieldLines(enneagram, 40, 1.675, 200, false, undefined, 0.03)
    createFieldLines(enneagram, 50, 1.75, 200, false, undefined, 0.04)
    createFieldLines(enneagram, 70, 1.875, 200, false, undefined, 0.05)
    createFieldLines(enneagram, 90, 2, 200, false, undefined, 0.06)
    createFieldLines(enneagram, 70, 2.125, 200, false, undefined, 0.07)
    createFieldLines(enneagram, 50, 2.25, 200, false, undefined, 0.08)
    createFieldLines(enneagram, 40, 2.375, 200, false, undefined, 0.09)
    createFieldLines(enneagram, 30, 2.5, 200, false, undefined, 0.1)
    createFieldLines(enneagram, 25, 2.675, 200, false, undefined, 0.11)
    createFieldLines(enneagram, 20, 2.75, 200, false, undefined, 0.12)
    createFieldLines(enneagram, 15, 2.875, 200, false, undefined, 0.13)
    createFieldLines(enneagram, 10, 3, 200, false, undefined, 0.14)
}

//CREATE SUN
const sunRadius = 5
const sunRadianceGeo = new THREE.SphereGeometry(sunRadius, 25, 25)

const sunDiffuseTexture = textureLoader.load(sunTexture)
sunDiffuseTexture.colorSpace = THREE.SRGBColorSpace
const sunMat = new THREE.MeshBasicMaterial({
    map: sunDiffuseTexture
})
const sunRadiance = new THREE.Mesh(sunRadianceGeo, sunMat)
sunRadiance.position.set(0, 0, 490)
pivot4.add(sunRadiance)
sunRadiance.castShadow = false

const sunLight = new THREE.DirectionalLight(0xffffff, 1.2) //1.2
sunLight.position.set(sunRadiance.position.x, sunRadiance.position.y, sunRadiance.position.z - sunRadius * 1.5)
sunLight.castShadow = true;
sunLight.shadow.camera.near = 475;
sunLight.shadow.camera.far = 700;
sunLight.shadow.mapSize.width = 8192;
sunLight.shadow.mapSize.height = 8192;
sunLight.shadow.bias = 0.0001;
sunLight.shadow.radius = 1;
pivot4.add(sunLight)

let sunObjectWorldPosition = new THREE.Vector3();

const textureFlare0 = textureLoader.load("/Planet/assets/textures/sunflare.webp");
const textureFlare3 = textureLoader.load("/Planet/assets/textures/lensflare.webp");
const lensflare = new Lensflare();
lensflare.position.set( 0, 0, 0 );
lensflare.addElement( new LensflareElement( textureFlare0, 2560, 0 ) );
lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );

sunLight.add( lensflare );

//CREATE MOONS
class Moon {
    constructor(radius, texture, z, rotation, pivot, intensity) {
        this.radius = radius;
        this.texture = texture;
        this.z = z;
        this.rotation = rotation;
        this.pivot = pivot;
        this.intensity = intensity;
    }
}

let moon1 = new Moon(1.5, moonTexture, 110, -0.0005, pivot1, 0.1);
let moon2 = new Moon(2.5, redmoonTexture, 190, -0.0003, pivot2, 0.05);
let moon3 = new Moon(1, icemoonTexture, 250, -0.0001, pivot3, 0.005);
let moons = [moon1,moon2,moon3];

for (let i = 0; i < moons.length; i++) {
    const moonDiffuseTexture = textureLoader.load(moons[i].texture)
    moonDiffuseTexture.colorSpace = THREE.SRGBColorSpace
    const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(moons[i].radius, 25, 25),
        new THREE.MeshStandardMaterial({
            map: moonDiffuseTexture,
            metalness: 0,
            flatShading: false,
            side: FrontSide,
        })
    )

    mesh.position.set(moons[i].z, 0, 0)
    moons[i].pivot.add(mesh);
    mesh.castShadow = true
    mesh.receiveShadow = true

    const moonlight = new THREE.PointLight(0xffffff, moons[i].intensity);
    moonlight.position.set(moons[i].z, 0, 0);
    mesh.add(moonlight);
}

//CREATE SPIRAL
let spiralActivated = false
function createSpiral() {
    spiralActivated = true
    spiralCenter.add(spiral)
    let helixMaxRadius = 7;
    let helixRevolutions = 9;
    let helixPoints = []
    let jointPoints = []

    for (let i = 0; i < helixRevolutions; i++) {
        helixPoints[i] = []
        jointPoints[i] = []
        for (let t = (2 * Math.PI) * i; t <= (2 * Math.PI) * (i + 1.0000001); t += Math.PI / 128) {
            let radiusModifier = Math.sin(t / (helixRevolutions * 2))
            let helixX = radiusModifier * helixMaxRadius * Math.cos(t);
            let helixZ = radiusModifier * helixMaxRadius * Math.sin(t)
            let helixY = (helixMaxRadius / (helixRevolutions * Math.PI)) * t

            helixPoints[i].push(new THREE.Vector3(helixX, helixY - helixMaxRadius, helixZ));

            if (i == 0) {
                if (t > (2 * Math.PI) * i + (((2 * Math.PI) * (i + 1.0000001) - (2 * Math.PI) * i) * 0.98)) {
                    jointPoints[i].push(new THREE.Vector3(helixX, helixY - helixMaxRadius, helixZ));
                }
            }
            else if (i < helixRevolutions) {
                if (t < (2 * Math.PI) * i + (((2 * Math.PI) * (i + 1.0000001) - (2 * Math.PI) * i) * 0.02)) {
                    jointPoints[i - 1].push(new THREE.Vector3(helixX, helixY - helixMaxRadius, helixZ));
                }
                if (t > (2 * Math.PI) * i + (((2 * Math.PI) * (i + 1.0000001) - (2 * Math.PI) * i) * 0.98)) {
                    jointPoints[i].push(new THREE.Vector3(helixX, helixY - helixMaxRadius, helixZ));
                }
            }
            else {
                if (t < (2 * Math.PI) * i + (((2 * Math.PI) * (i + 1.0000001) - (2 * Math.PI) * i) * 0.02)) {
                    jointPoints[i - 1].push(new THREE.Vector3(helixX, helixY - helixMaxRadius, helixZ));
                }
            }
        }

        //core
        let helixCurve = new THREE.CatmullRomCurve3(helixPoints[i]);

        const geometry = new THREE.TubeGeometry(helixCurve, 64, 0.01, 10, false);
        geometry.computeBoundingBox();
        const material = new THREE.ShaderMaterial({
            uniforms: {
                color1: {
                value: new THREE.Color(palette[40 + i])
                },
                color2: {
                value: new THREE.Color(palette[40 + i + 1])
                },
                bboxMin: {
                value: geometry.boundingBox.min
                },
                bboxMax: {
                value: geometry.boundingBox.max
                }
            },
            vertexShader: spiralVertexShader,
            fragmentShader: spriralFragmentShader,
        })
        const spiralSection = new THREE.Mesh(geometry, material);
        spiral.add(spiralSection)

        //skin
        const geometry2 = new THREE.TubeGeometry(helixCurve, 64, 0.12 - i / 70, 10, false);
        const material2 = new THREE.MeshBasicMaterial({
            color: palette[40 + i],
            transparent: true,
            opacity: 0.6
        })
        const spiralSection2 = new THREE.Mesh(geometry2, material2);
        spiral.add(spiralSection2)
        spiral.rotation.set(0, 0, 0)
        
        //joints
        if (i !== 0){    
            let jointCurve = new THREE.CatmullRomCurve3(jointPoints[i - 1]);

            const jointGeometry = new THREE.TubeGeometry(jointCurve, 64, 0.15 - i / 70, 10, false);
            jointGeometry.computeBoundingBox();
            const jointMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    color1: {
                    value: new THREE.Color(palette[40 + i - 1])
                    },
                    color2: {
                    value: new THREE.Color(palette[40 + i])
                    },
                    bboxMin: {
                    value: jointGeometry.boundingBox.min
                    },
                    bboxMax: {
                    value: jointGeometry.boundingBox.max
                    }
                },
                vertexShader: spiralVertexShader,
                fragmentShader: spriralFragmentShader,
            })
            const jointSection = new THREE.Mesh(jointGeometry, jointMaterial);
            spiral.add(jointSection)
        }
    }

    //tier2ring
    const dashAlphaTexture = textureLoader.load(dash)
        dashAlphaTexture.repeat.set(0, 100)
        dashAlphaTexture.wrapT = THREE.RepeatWrapping;
        dashAlphaTexture.rotation = Math.PI / 2
    const dashTexture = textureLoader.load(tier)
        dashTexture.repeat.set(1, 100)
        dashTexture.wrapS = THREE.RepeatWrapping;
        dashTexture.wrapT = THREE.RepeatWrapping;
        dashTexture.rotation = Math.PI / 2
        dashTexture.offset.set(0.5, 0)
    const tierGeo = new THREE.TorusGeometry(6.05, 0.05, 50, 100)
    const tierMat = new THREE.MeshStandardMaterial({
        alphaMap: dashAlphaTexture,
        transparent: true,
        alphaTest: 0.5,
        map: dashTexture,
        emissive: 0xffffff,
        emissiveMap: dashTexture,
        emissiveIntensity: 0.05,
        color: 0xffffff,
        metalness: 1,
        roughness: 0.7,
    })
    const tierRing = new THREE.Mesh(tierGeo, tierMat)
    tierRing.rotation.x = Math.PI / 2
    tierRing.position.y = 2.34
    spiral.add(tierRing)
}

//CREATE LIGHTS
const ambient = new THREE.AmbientLight(0xffffff, 0.01);
scene.add(ambient);

const spotlight = new THREE.SpotLight(0xefebd8, 0);
spotlight.penumbra = 0.8
spotlight.angle = Math.PI / 4
spotlight.decay = 0.5
scene.add(spotlight);

const targetIntensities = {
    spotlight: spotlight.intensity,
    ambient: ambient.intensity
  };

let lightTransitionStart = null;
let lightTransitionDuration = 5;

const updateLightIntensity = () => {
    if (lightTransitionStart === null) {
      return;
    }
  
    const elapsed = clock.getElapsedTime() - lightTransitionStart;
  
    if (elapsed >= lightTransitionDuration) {
      spotlight.intensity = targetIntensities.spotlight;
      ambient.intensity = targetIntensities.ambient;
      lightTransitionStart = null;
    } else {
      const t = elapsed / lightTransitionDuration;
      spotlight.intensity = THREE.MathUtils.lerp(spotlight.intensity, targetIntensities.spotlight, t);
      ambient.intensity = THREE.MathUtils.lerp(ambient.intensity, targetIntensities.ambient, t);
    }
  };

//CREATE CONTEXTS
export function createContexts(version) {
    contexts.push({
        tagData: planetTagData, 
        tagDestination: planetContent, 
        connectionData: planetConnections, 
        arrowConnectionData: planetArrowedConnections,
        dashedConnectionData: planetDashedConnections,
        tunnelConnectionData: planetTunnelConnections,
        connectionDestination: jaraniusConnections, 
        radius: 5, 
        pins: [], 
        boxes: [], 
        tags: []
    })

    contexts.push({
        tagData: spiralTagData, 
        tagDestination: spiral, 
        connectionData: spiralConnections, 
        arrowConnectionData: spiralArrowedConnections,
        dashedConnectionData: spiralDashedConnections,
        connectionDestination: spiralDynamicsConnections, 
        radius: 7, 
        pins: [], 
        boxes: [], 
        tags: []
    })

    contexts.push({
        tagData: planetNuggetData, 
        tagDestination: planetContent, 
        connectionData: undefined, 
        arrowConnectionData: undefined,
        dashedConnectionData: undefined,
        connectionDestination: undefined, 
        radius: 5, 
        pins: [], 
        boxes: [], 
        tags: []
    })

    contexts.push({
        tagData: enneagramTagData, 
        tagDestination: enneagram, 
        connectionData: enneagramConnections, 
        arrowConnectionData: enneagramArrowedConnections,
        dashedConnectionData: enneagramDashedConnections,
        tunnelConnectionData: enneagramTunnelConnections,
        connectionDestination: enneagramConnectionsObj, 
        radius: 8.5, 
        pins: [], 
        boxes: [], 
        tags: []
    })

    if (version == 3) developer = true

}

//CREATE GUTTA STATS
const guttaStatScreen = document.querySelector('#guttaStatScreen');
const statsDisplay = document.createElement('div');

/* function refreshStats() {
    statsDisplay.innerHTML = "Number of munches: " + guttaStats.munch + "<br>Average hunger: " + Math.round(guttaStats.totalHungerAtMunch/guttaStats.munch * 100) / 100 + "<br><br>Number of kills: " + guttaStats.kills + "<br>Average hunger: " + Math.round(guttaStats.totalHungerAtKill/guttaStats.kills * 100) / 100
    guttaStatScreen.appendChild(statsDisplay)
} */

//CREATE FPS COUNTER
const times = [];
let fps;

const fpsContainer = document.querySelector('#fpsCounter');
const fpsDisplay = document.createElement('div');

function refreshLoop() {
    window.requestAnimationFrame(() => {
        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();
        }
        times.push(now);
        fps = times.length;
        fpsDisplay.textContent = fps;
        refreshLoop();
    });
}
fpsContainer.appendChild(fpsDisplay);

refreshLoop();


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

    //Controls
    if (focusElement !== "tagInput") {
        if (keyCode == 79) { //O
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
            }
        }
        if (keyCode == 188) { //,
            if (window.appStatus === "flight") {
                flyControls.dragToLook = !flyControls.dragToLook
                console.log(flyControls.dragToLook)
            }
        }
    }
    if (focusElement !== "tagInput" && !flyControls.enabled) {
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

        //Light control
        if (keyCode >= 49 && keyCode <= 53) {
            const intensities = [0, 0.5, 0.75, 1, 1.5];
            targetIntensities.spotlight = intensities[keyCode - 49];
            lightTransitionStart = clock.getElapsedTime();
          }
        
          if (keyCode >= 54 && keyCode <= 57) {
            const intensities = [0, 0.05, 0.15, 0.25];
            targetIntensities.ambient = intensities[keyCode - 54];
            lightTransitionStart = clock.getElapsedTime();
          }
        
          if (keyCode == 48) {
            targetIntensities.ambient = 0.5;
            lightTransitionStart = clock.getElapsedTime();
          }

        //Stats display
        if (keyCode == 71) { //G
            if (guttaStatScreen.style.display == "block") {
                guttaStatScreen.style.display = "none"
                if (developer == true) togglePerceptionCircles(guttaState)
            } else {
                guttaStatScreen.style.display = "block" 
                if (developer == true) togglePerceptionCircles(guttaState)
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
                if (spiralActivated == false) {
                    createSpiral()
                } else {
                    spiralActivated = false
                    spiralCenter.remove(spiral)
                }
            }
            
        }
        if (keyCode == 89) { //Y
            if (enneagramActivated == false) {
                createEnneagram(enneagram)
            } else {
                enneagramActivated = false
                enneaCenter.remove(enneagram)
            }
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
                    contexts[selectedContext].pins[node].scale.set(size / originalSize, size / originalSize, size / originalSize)
                    contexts[selectedContext].boxes[node].scale.set(size / originalSize, size / originalSize, size / originalSize)
                })

            }else if (selectedNode) {
                originalSize = contexts[selectedContext].pins[selectedNode].originalSize
                contexts[selectedContext].tagData[selectedNode].size += 5

                size = contexts[selectedContext].tagData[selectedNode].size
                selectedPin.scale.set(size / originalSize, size / originalSize, size / originalSize)
                selectedBox.scale.set(size / originalSize, size / originalSize, size / originalSize)
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
                    contexts[selectedContext].pins[node].scale.set(size / originalSize, size / originalSize, size / originalSize)
                    contexts[selectedContext].boxes[node].scale.set(size / originalSize, size / originalSize, size / originalSize)
                })

            }else if (selectedNode) {
                originalSize = contexts[selectedContext].pins[selectedNode].originalSize
                contexts[selectedContext].tagData[selectedNode].size -= 5

                size = contexts[selectedContext].tagData[selectedNode].size
                selectedPin.scale.set(size / originalSize, size / originalSize, size / originalSize)
                selectedBox.scale.set(size / originalSize, size / originalSize, size / originalSize)
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
                // up
                if (keyCode == 38) {
                    if (fastMove) posLatLng.lat += .4;
                    posLatLng.lat += .1;
                    
                }
                // down
                if (keyCode == 40) {
                    if (fastMove)posLatLng.lat -= .4;
                    posLatLng.lat -= .1;
                    
                }
                // left
                if (keyCode == 37) {
                    if (fastMove)posLatLng.lng += .4;
                    posLatLng.lng += .1;
                    
                }
                // right
                if (keyCode == 39) {
                    if (fastMove)posLatLng.lng -= .4;
                    posLatLng.lng -= .1;
                }

                const pinSphereRadius = contexts[selectedContext].radius
                const boxSphereRadius = pinSphereRadius + 0.04
                const tagSphereRadius = pinSphereRadius + 0.05
                
                const pinPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, pinSphereRadius);
                const boxPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, boxSphereRadius);
                const tagPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, tagSphereRadius);

                contexts[selectedContext].pins[selectedNodes[node]].position.set(pinPos.x, pinPos.y, pinPos.z);
                contexts[selectedContext].boxes[selectedNodes[node]].position.set(boxPos.x, boxPos.y, boxPos.z);
                contexts[selectedContext].tags[selectedNodes[node]].position.set(tagPos.x, tagPos.y, tagPos.z);

                posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng)

                contexts[selectedContext].tagData[selectedNodes[node]].lat = posLatLng.lat.toFixed(1)
                contexts[selectedContext].tagData[selectedNodes[node]].lng = posLatLng.lng.toFixed(1)
            }
        }
    } else if (selectedPin != null && developer == true  && slideshowStatus.activeSlideshow == undefined && focusElement !== "tagInput" && !flyControls.enabled) {

        if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
            let posLatLng = convertCartesiantoLatLng(selectedPin.position.x, selectedPin.position.y, selectedPin.position.z);
            console.log(posLatLng)
            // up
            if (keyCode == 38) {
                if (fastMove) posLatLng.lat += .4;
                posLatLng.lat += .1;                
            }
            // down
            if (keyCode == 40) {
                if (fastMove) posLatLng.lat -= .4;
                posLatLng.lat -= .1;
            }
            // left
            if (keyCode == 37) {
                if (fastMove) posLatLng.lng += .4;
                posLatLng.lng += .1;  
            }
            // right
            if (keyCode == 39) {
                if (fastMove) posLatLng.lng -= .4;
                posLatLng.lng -= .1;
            }

            const pinSphereRadius = contexts[selectedContext].radius
            const boxSphereRadius = pinSphereRadius + 0.04
            const tagSphereRadius = pinSphereRadius + 0.05
            
            const pinPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, pinSphereRadius);
            const boxPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, boxSphereRadius);
            const tagPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, tagSphereRadius);

            selectedPin.position.set(pinPos.x, pinPos.y, pinPos.z);
            selectedBox.position.set(boxPos.x, boxPos.y, boxPos.z);
            selectedTag.position.set(tagPos.x, tagPos.y, tagPos.z);

            posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng)

            contexts[selectedContext].tagData[selectedNode].lat = posLatLng.lat.toFixed(1)
            contexts[selectedContext].tagData[selectedNode].lng = posLatLng.lng.toFixed(1)
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
                size: 6,
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

            const indexMod = contexts[selectedContext].tagData.length - 1

            createTags([newItem], contexts[selectedContext].tagDestination, contexts[selectedContext].radius, selectedContext, indexMod);

            this.style.display = "none";
            focusElement = undefined
        }
    }
})

//EVENTS MOUSE
let initialTouchPosition = { x: null, y: null };
const tapMoveThreshold = 50; // Adjust this value to set the allowed movement threshold for taps

function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onPointerClick(event) {
    event.preventDefault();

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

        selectedContext = intersects[0].object.context
        selectedNode = intersects[0].object.index
        if (contexts !== 2) selectedBox = contexts[selectedContext].boxes[selectedNode]
        if (contexts !== 2) selectedTag = contexts[selectedContext].tags[selectedNode]

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
    if (selectState) {
      onPointerClick(event);
    }
    selectState = false;
  }
  
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerdown', (event) => {
    selectState = true;
  });
  window.addEventListener('pointerup', processPointerUpEvent);

//TESTS
if (planetTagData.length !== planetConnections.length) {
    console.log("ERROR: planetTagData.length !== planetConnections.length", planetTagData.length, planetConnections.length)
    for (let i = 0; i < planetConnections.length; i++) {
        if (planetTagData[i].id !== planetConnections[i][0]) {
            console.log(i, planetTagData[i].id)
        }
    }
    
}
if (planetTagData.length !== planetArrowedConnections.length) {
    console.log("ERROR: planetTagData.length !== planetArrowedConnections.length", planetTagData.length, planetArrowedConnections.length)
    for (let i = 0; i < planetArrowedConnections.length; i++) {
        if (planetConnections[i][0] !== planetArrowedConnections[i][0]) {
            console.log(i, planetConnections[i][0])
        }
    }
}
if (planetTagData.length !== planetDashedConnections.length) {
    console.log("ERROR: planetTagData.length !== planetDashedConnections.length", planetTagData.length, planetDashedConnections.length)
    for (let i = 0; i < planetDashedConnections.length; i++) {
        if (planetConnections[i][0] !== planetDashedConnections[i][0]) {
            console.log(i, planetConnections[i][0])
        }
    }
}

if (planetTagData.length !== planetTunnelConnections.length) {
    console.log("ERROR: planetTagData.length !== planetTunnelConnections.length", planetTagData.length, planetTunnelConnections.length)
    for (let i = 0; i < planetTunnelConnections.length; i++) {
        if (planetConnections[i][0] !== planetTunnelConnections[i][0]) {
            console.log(i, planetConnections[i][0])
        }
    }
}

let octreeHelperRoot = new THREE.Object3D();
scene.add(octreeHelperRoot);

//ANIMATIONLOOP

function animate() {
    renderer.setAnimationLoop( render );
}

function render() {  

    updateGutta(guttaState, guttaStats, jaranius, nuggets, developer, octreeHelperRoot)
    
    const camPos = camera.position
    const camRot = camera.rotation
    spotlight.position.set(camPos.x, camPos.y, camPos.z);
    spotlight.rotation.set(camRot.x, camRot.y, camRot.z);
    
    
    if (jaraniusInitialized == true) {

        if (window.appStatus !== "initialising" && window.appStatus !== "version-menu" && window.appStatus !== "intro-menu"&& window.appStatus !== "silence") {
            center.rotation.y += -0.00001;
            pivot1.rotation.y += -0.0003;
            pivot2.rotation.y += -0.00003;
            pivot3.rotation.y += -0.000009;
            pivot4.rotation.y += -0.0001;
            clouds.rotation.y += 0.00001;
        }

        window.curveMeshes.forEach(curveData => {
            curveData.texture.offset.y += 0.004;
            curveData.texture.offset.x += 0.001;
        });

        if (camera.position.z > -15 && camera.position.z < 15 && introStarted == true) {
            introStarted = false
            const titleMesh = scene.getObjectByName('title')
            scene.remove(titleMesh)
            document.body.style.cursor = 'default';
        }
    
        orbitControls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);
        orbitControls.zoomSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet) / 3;

        if (sign) {
            signRotationVector.set(camera.position.x, camera.position.y, camera.position.z)
            signRotationVector.normalize()
            sign.lookAt(signRotationVector.x, signRotationVector.y, signRotationVector.z ) 
        }

        //ATMOSPHERE
        let distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0)) - 8;
        let scaleFactor = Math.max(1.2, 1 + 0.75 * Math.exp(-0.1 * distance));
        atmosphere.scale.set(scaleFactor, scaleFactor, scaleFactor);

        sunObjectWorldPosition = sunRadiance.getWorldPosition(sunObjectWorldPosition);

        atmosphere.material.uniforms.lightPosition.value.copy(sunObjectWorldPosition);
        atmosphericLight.material.uniforms.lightPosition.value.copy(sunObjectWorldPosition);

        scanPins();

        updateLightIntensity();

    }

    if (introTuneLength) {
        if (camera.position.z > 15 && introStarted == true) {
            camera.position.z -= 0.0213 * Math.pow(camera.position.z - 10, 1.35) / introTuneLength
        }
        if (camera.position.z < -15 && introStarted == true) {
            camera.position.z += 0.213 * Math.pow(Math.abs(camera.position.z) - 10, 1.35) / introTuneLength
        }
        if (introStarted == true) {
            camera.position.x += 0.4 / introTuneLength
            camera.position.y += 0.2 / introTuneLength
        }

        elapsedTime = introTune.currentTime;
    }

    const delta = clock.getDelta();

    if (flyControls.enabled) {  
        flyControls.update(delta);

        const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
        if (distance < flyControls.minDistance) {
            // Calculate the vector pointing from the planet center to the camera
            const direction = camera.position.clone().sub(new THREE.Vector3(0, 0, 0)).normalize();

            // Move the camera to the minimum distance in the same direction
            camera.position.copy(direction.multiplyScalar(flyControls.minDistance));
        }

        const brakePoint = 7
        const fullStopPoint = 5
        const fullRollStopPoint = 3
        if (distance < brakePoint) {
            baseMovementSpeedModifier = 1 * ((distance - fullStopPoint)/(brakePoint-fullStopPoint))
            baseRollSpeedModifier = 1 / ((distance - fullRollStopPoint)/(brakePoint-fullRollStopPoint))
            flyControls.movementSpeed = baseMovementSpeed * baseMovementSpeedModifier;
            flyControls.rollSpeed = baseRollSpeed * baseRollSpeedModifier;
        }


        let toSun = new THREE.Vector3().subVectors(sunObjectWorldPosition, middleOfPlanet);
        let toCamera = new THREE.Vector3().subVectors(camera.position, middleOfPlanet);

        toSun.normalize();
        toCamera.normalize();

        let angle = Math.acos(toSun.dot(toCamera)) * 180.0 / Math.PI;

    }

    if (orbitControls.enabled) {
        orbitControls.update();
    }

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
}

animate()
