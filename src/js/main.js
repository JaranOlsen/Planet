//  IMPORT DEPENDENCIES
import * as THREE from 'three'
import { Float32BufferAttribute, FrontSide, DoubleSide, Vector2 } from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { FlyControls } from 'three/addons/controls/FlyControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js'
import { VRButton } from 'three/addons/webxr/VRButton.js'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js'
import { Constants as MotionControllerConstants, fetchProfile, MotionController } from 'three/examples/jsm/libs/motion-controllers.module.js'
import { generateUUID } from 'three/src/math/MathUtils.js'
import ThreeMeshUI from 'three-mesh-ui'


//  IMPORT SCRIPTS
import { createImages, createTags, hoveredPins, intersectObjectsArray, createConnections, hoverPins, instantiateNugget } from './mindmap.js'
import { getRandomNum, convertLatLngtoCartesian, convertCartesiantoLatLng, constrainLatLng } from './mathScripts.js'
import { pushContent, pushVRContent } from './content.js'
import { initializeVersion } from './versions.js'
import { creation } from './creation.js'
import { updateGutta, togglePerceptionCircles } from './gutta.js'

//IMPORT DATA
import { planetTagData, planetConnections, planetArrowedConnections, planetDashedConnections, planetTunnelConnections } from './data/planetData.js'
import { planetImageData } from './data/planetImageData.js'
import { planetNuggetData } from './data/planetNuggetData.js'
import { spiralTagData, spiralConnections, spiralArrowedConnections, spiralDashedConnections } from './data/spiralData.js'
import { spiralImageData } from './data/spiralImageData.js'
import { contentData } from './data/contentData.js'
import { palette } from './data/palette.js'
import { pinMaterials, pinWireframeMaterials, boxMaterials } from './data/materials.js'
import { subtitles_carlrogers as subtitles} from './data/subtitles.js'

//  IMPORT SHADERS
import atmosphericLightVertexShader from '../shaders/atmosphericLightVertex.glsl'
import atmosphericLightFragmentShader from '../shaders/atmosphericLightFragment.glsl'
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl'
/* import sunVertexShader from '../shaders/sunVertex.glsl'
import sunFragmentShader from '../shaders/sunFragment.glsl' */
import spiralVertexShader from '../shaders/spiralVertex.glsl'
import spriralFragmentShader from '../shaders/spiralFragment.glsl'

//  IMPORT TEXTURES
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
import testPicture from '/assets/images/truth/Slide6.jpeg'

// IMPORT MODELS
import signModel from "../models/sign.glb"

const DEFAULT_PROFILES_PATH = 'https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles';
const DEFAULT_PROFILE = 'generic-trigger';

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer(
    {
        canvas,
        antialias: true,
    });
renderer.setPixelRatio(window.devicePixelRatio)

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
const near = 0.1;
const far = 2000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 500

const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enablePan = false
orbitControls.maxDistance = 1000
orbitControls.minDistance = 5.2
orbitControls.zoomSpeed = 0.3
orbitControls.rotateSpeed = 0.3
orbitControls.target.set(0, 0, 0);
orbitControls.update();
orbitControls.enabled = false;

const flyControls = new FlyControls(camera, renderer.domElement);
flyControls.movementSpeed = 1;
flyControls.domElement = renderer.domElement;
flyControls.rollSpeed = Math.PI / 24;
flyControls.autoForward = false;
flyControls.dragToLook = false;
flyControls.enabled = false;

let controlMode = 'orbit';

const scene = new THREE.Scene();

const pointer = new THREE.Vector2;
const raycaster = new THREE.Raycaster();

const subtitleContainer = document.getElementById('subtitle-container');
let elapsedTime = 0;
let currentSubtitle = null;

const clock = new THREE.Clock();
const timer = new THREE.Clock();
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

let signRotationVector = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z)

const middleOfPlanet = new THREE.Vector3(0, 0, 0);
const spiral = new THREE.Object3D()
const guttaHelperCenter = new THREE.Object3D();

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
const enableVRbutton = document.getElementById("enableVRbutton")
const skipButton = document.getElementById("skipbutton")
initializeVersion(creation, postLoadingManager, guttaState, scene, guttaHelperCenter)

let webXRInitialized = false
let jaraniusInitialized = false

//LOADING MANAGER
const initialLoadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(initialLoadingManager)

initializeLoadingManager(initialLoadingManager)

export function initializeLoadingManager(loadingManager) {
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

//THREE-MESH-UI
let UI = new THREE.Object3D
let UIcontainer
let UIactive = false
let selectState = false
let slideAction = false
function createUI() {
    UIcontainer = new ThreeMeshUI.Block({
        ref: "UIcontainer",
        padding: 0.025,
        fontFamily: './fonts/Roboto-msdf.json',
        fontTexture:'./fonts/Roboto-msdf.png',
        fontColor: new THREE.Color(0xffffff),
        backgroundOpacity: 0,
      });
    
      UIcontainer.position.set(0, 1, 5.3);
      UIcontainer.rotation.x = -0.15;
      
      UI.add(UIcontainer);
      jaranius.add(UI)

      UIactive = true
    
      //
    
      const title = new ThreeMeshUI.Block({
        height: 0.2,
        width: 2.25,
        margin: 0.025,
        justifyContent: "center",
        fontSize: 0.09,
      });
    
      title.add(
        new ThreeMeshUI.Text({
          content: "TWO LEVELS OF TRUTH",
        })
      );
    
      UIcontainer.add(title);
    
      //
    
      const leftSubBlock = new ThreeMeshUI.Block({
        height: 0.95,
        width: 1.75,
        margin: 0.025,
        padding: 0.025,
        textAlign: "left",
        justifyContent: "end",
      });
    
      const caption = new ThreeMeshUI.Block({
        height: 0.07,
        width: 1.37,
        textAlign: "center",
        justifyContent: "center",
      });
    
      caption.add(
        new ThreeMeshUI.Text({
          content: "Must be transcended to realize Absolute Truth",
          fontSize: 0.02,
        })
      );
    
      leftSubBlock.add(caption);
    
      //
    
      const rightSubBlock = new ThreeMeshUI.Block({
        margin: 0.025,
      });
    
      const subSubBlock1 = new ThreeMeshUI.Block({
        height: 0.35,
        width: 0.5,
        margin: 0.025,
        padding: 0.02,
        fontSize: 0.04,
        justifyContent: "center",
        backgroundOpacity: 0,
      }).add(
        new ThreeMeshUI.Text({
          content: "Based on distinctions, concepts, language, symbols.",
        }),
    
        new ThreeMeshUI.Text({
          content: " Sankhara",
          fontColor: new THREE.Color(0x92e66c),
        }),
    
        new ThreeMeshUI.Text({
          content: " = conditioned, constructed, fabricated, compounded.",
        })
      );
    
      const subSubBlock2 = new ThreeMeshUI.Block({
        height: 0.53,
        width: 0.5,
        margin: 0.01,
        padding: 0.02,
        fontSize: 0.025,
        alignItems: "start",
        textAlign: 'justify',
        backgroundOpacity: 0,
      }).add(
        new ThreeMeshUI.Text({
          content:
            "The males of this species grow to maximum total length of 73 cm (29 in): body 58 cm (23 in), tail 15 cm (5.9 in). Females grow to a maximum total length of 58 cm (23 in). The males are surprisingly long and slender compared to the females.\nThe head has a short snout, more so in males than in females.\nThe eyes are large and surrounded by 9–16 circumorbital scales. The orbits (eyes) are separated by 7–9 scales.",
        })
      );
    
      rightSubBlock.add(subSubBlock1, subSubBlock2);
    
      //
    
      contentContainer = new ThreeMeshUI.Block({
        contentDirection: "row",
        padding: 0.02,
        margin: 0.025,
        backgroundOpacity: 0,
      });
    
      contentContainer.add(leftSubBlock, rightSubBlock);
      UIcontainer.add(contentContainer);
    
      //
    
      new THREE.TextureLoader().load(testPicture, (texture) => {
        leftSubBlock.set({
          backgroundTexture: texture,
        });
      });
    
}

//WEB XR
let session
enableVRbutton.addEventListener("click", () => {
    checkForXRSupport()
    enableVRbutton.style.display = "none"; 
})

export async function checkForXRSupport() {
    navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
    if (supported) {
        webXRInitialized = true
        const button = VRButton.createButton( renderer )
        document.body.appendChild( button );
        setupXR();
    }
    });
}

function declareGlobalVariables() {
    window.dolly = new THREE.Object3D();
    window.dummyCam = new THREE.Object3D();
    window.workingMatrix = new THREE.Matrix4();
    window.buttonStates = {};
    window.gamepadIndices = "";
    window.info = {};
    window.controllers = {};
    window.elapsedTime = 0;
    window.dollyLat = 90;
    window.dollyLng = 180;
    window.dollyRadius = 8;
    window.XRinSession = false;
    window.activeVRSlideshow = undefined;
    window.activeVRSlide = undefined;
    window.activeVRSlideshowPosition = undefined;
    window.activeVRSlideshowLength = undefined;
    window.slideshowActions = []
}

function setupXR() {
    renderer.xr.enabled = true;

    declareGlobalVariables();
    
    camera.position.set( 0, 1.6, 0 );
    const dollyPos = convertLatLngtoCartesian(dollyLat, dollyLng, dollyRadius)
    dolly.position.set(dollyPos.x, dollyPos.y - 1.6, dollyPos.z)
    dolly.add( camera );
    scene.add( dolly );
    camera.add( dummyCam );

    const controller = renderer.xr.getController( 0 );
    controller.addEventListener( 'connected', onConnected );
    const modelFactory = new XRControllerModelFactory();
    const geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0,0,0 ), new THREE.Vector3( 0,0,-1 ) ] );
    const line = new THREE.Line( geometry );
    line.scale.z = 0;
    
    controllers = {};
    controllers.right = buildController( 0, line, modelFactory );
    controllers.left = buildController( 1, line, modelFactory );
}

function onConnected( event ){
    playButton.style.display = "none";
    skipButton.style.display = "none";
    credits.style.display = "none";

    info = {};
    
    fetchProfile( event.data, DEFAULT_PROFILES_PATH, DEFAULT_PROFILE ).then( ( { profile, assetPath } ) => {
        console.log( JSON.stringify(profile));
        
        info.name = profile.profileId;
        info.targetRayMode = event.data.targetRayMode;

        Object.entries( profile.layouts ).forEach( ( [key, layout] ) => {
            const components = {};
            Object.values( layout.components ).forEach( ( component ) => {
                components[component.rootNodeName] = component.gamepadIndices;
            });
            info[key] = components;
        });

        createButtonStates( info.right );
        
        console.log( JSON.stringify(info) );

        updateControllers( info );

    } );
}

function createButtonStates(components){
    buttonStates = {};
    gamepadIndices = components
    Object.keys( components ).forEach( (key) => {
        if ( key.indexOf('touchpad')!=-1 || key.indexOf('thumbstick')!=-1){
            buttonStates[key] = { button: 0, xAxis: 0, yAxis: 0 };
        }else{
            buttonStates[key] = 0; 
        }
    })
}

function updateControllers(info) {
    const setupControllerEvents = (controller, controllerInfo) => {
      let trigger = false,
        squeeze = false;
  
      Object.keys(controllerInfo).forEach((key) => {
        if (key.indexOf("trigger") != -1) trigger = true;
        if (key.indexOf("squeeze") != -1) squeeze = true;
      });
  
      if (trigger) {
        controller.addEventListener("selectstart", onSelectStart);
        controller.addEventListener("selectend", onSelectEnd);
      }
  
      if (squeeze) {
        controller.addEventListener("squeezestart", onSqueezeStart);
        controller.addEventListener("squeezeend", onSqueezeEnd);
      }
  
      controller.addEventListener("disconnected", () => onDisconnected(controller));
    };
  
    if (info.right !== undefined) {
      const right = renderer.xr.getController(0);
      setupControllerEvents(right, info.right);
    }
  
    if (info.left !== undefined) {
      const left = renderer.xr.getController(1);
      setupControllerEvents(left, info.left);
    }
  }
  

function buildController( index, line, modelFactory ){
    const controller = renderer.xr.getController( index );
    
    controller.userData.selectPressed = false;
    controller.userData.index = index;
    
    if (line) controller.add( line.clone() );
    
    dolly.add( controller );
    
    let grip;
    
    if ( modelFactory ){
        grip = renderer.xr.getControllerGrip( index );
        grip.add( modelFactory.createControllerModel( grip ));
        dolly.add( grip );
    }
    
    return { controller, grip };
}

function onSelectStart( ){
    this.userData.selectPressed = true;
    selectState = true;
}

function onSelectEnd( ){
    this.children[0].scale.z = 0;
    this.userData.selectPressed = false;
    this.userData.selected = undefined;
    selectState = false;
    slideAction = false;
}

function onSqueezeStart( ){
    this.userData.squeezePressed = true;
    if (this.userData.selected !== undefined ){
        this.attach( this.userData.selected );
        this.userData.attachedObject = userData.selected;
    }
}

function onSqueezeEnd( ){
    this.userData.squeezePressed = false;
    if (this.userData.attachedObject !== undefined){
            room.attach( this.userData.attachedObject );
        this.userData.attachedObject = undefined;
    }

    if (UIactive == true) {
        UI.remove(UIcontainer)
        UIactive = false
    }
}

function onDisconnected(controller){
    const index = controller.userData.index;
    console.log(`Disconnected controller ${index}`);
    
    if ( controllers ){
        const obj = (index==0) ? controllers.right : controllers.left;
        
        if (obj){
            if (obj.controller){
                const controller = obj.controller;
                while( controller.children.length > 0 ) controller.remove( controller.children[0] );
                dolly.remove( controller );
            }
            if (obj.grip) dolly.remove( obj.grip );
        }
    }
}

function handleController( controller ){
    if (controller.userData.selectPressed ){

        controller.children[0].scale.z = 10;

        workingMatrix.identity().extractRotation( controller.matrixWorld );

        raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
        raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( workingMatrix );

        const intersects = raycaster.intersectObjects( intersectObjectsArray );

        if (intersects.length>0){
            const activatedPin = intersects[0].object;

            if (activatedPin.source[activatedPin.index].slides !== undefined) {
                
                if (UIactive == false) {
                    activeVRSlideshow = activatedPin.source[activatedPin.index].slides
                    activeVRSlideshowPosition = convertLatLngtoCartesian(activatedPin.source[activatedPin.index].lat, activatedPin.source[activatedPin.index].lng + 180, 5.3)
                    activeVRSlideshowLength = contentData[activeVRSlideshow].length
                    activeVRSlide = 0

                    UIcontainer = pushVRContent(activeVRSlideshow, activeVRSlide)
                    UI.add(UIcontainer)
                    UIcontainer.position.set(activeVRSlideshowPosition.x, activeVRSlideshowPosition.y, activeVRSlideshowPosition.z)
                    UIcontainer.lookAt(middleOfPlanet)
                    UIcontainer.rotateY(Math.PI)
                    jaranius.add(UI)
                    
                    UIactive = true
                }
            }
        }
    }
}

function updateGamepadState(){
    session = renderer.xr.getSession();
    
    const inputSource = session.inputSources[0];
    
    if (inputSource && inputSource.gamepad && gamepadIndices && buttonStates){
        const gamepad = inputSource.gamepad;
        XRinSession = true
        try{
            Object.entries( buttonStates ).forEach( ( [ key, value ] ) => {
                const buttonIndex = gamepadIndices[key].button;
                if ( key.indexOf('touchpad')!=-1 || key.indexOf('thumbstick')!=-1){
                    const xAxisIndex = gamepadIndices[key].xAxis;
                    const yAxisIndex = gamepadIndices[key].yAxis;
                    buttonStates[key].button = gamepad.buttons[buttonIndex].value; 
                    buttonStates[key].xAxis = gamepad.axes[xAxisIndex].toFixed(2); 
                    buttonStates[key].yAxis = gamepad.axes[yAxisIndex].toFixed(2); 
                }else{
                    buttonStates[key] = gamepad.buttons[buttonIndex].value;
                }
            });
        }catch(e){
            console.warn("An error occurred setting the ui");
        }
    }
}

function moveDolly(dt){
    
    const speed = 0.2;
    let pos = dolly.position.clone();
    pos.y += 1;
    
    let dir = new THREE.Vector3();
    const q = new THREE.Quaternion();
    //Store original dolly rotation
    const quaternion = dolly.quaternion.clone();
    //Get rotation for movement from the headset pose
    dolly.quaternion.copy( dummyCam.getWorldQuaternion(q) );
    dolly.getWorldDirection(dir);
    dir.negate();
    
        dolly.translateZ(-dt*speed);
        pos = dolly.getWorldPosition( origin );

    //cast left
    dir.set(-1,0,0);
    dir.applyMatrix4(dolly.matrix);
    dir.normalize();

    //cast right
    dir.set(1,0,0);
    dir.applyMatrix4(dolly.matrix);
    dir.normalize();

    //cast down
    dir.set(0,-1,0);
    pos.y += 1.5;

    //Restore the original rotation
    dolly.quaternion.copy( quaternion );
}


//INTRO
let introStarted = false
let introTuneLength
let introTune
initializeIntro()
function initializeIntro() {
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
        playButton.style.display = "none";
        skipButton.style.display = "none";
        enableVRbutton.style.display = "none";
        credits.style.display = "none";
        subtitleContainer.style.display = "block";
        orbitControls.enabled = true
    };
    
    const handleSkipButtonClick = () => {
        playButton.style.display = "none";
        skipButton.style.display = "none";
        enableVRbutton.style.display = "none";
        credits.style.display = "none";
        camera.position.z = 15;
        orbitControls.enabled = true
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
let activeCarousel
const buttons = document.querySelectorAll("[data-carousel-button]");

function handleCarouselButton(button) {
  const carousel = document.querySelector('.carousel');

  if (button.dataset.carouselButton === "exit") {
    carousel.style.display = "none";
    activeCarousel = undefined
  } else {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    } else if (newIndex >= slides.children.length) {
      newIndex = slides.children.length;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  }
}

const menuButtons = document.querySelectorAll("[data-menu-button]");
const navButtons = document.querySelectorAll("[data-nav-button]");

buttons.forEach(button => {
    const handleClick = () => {
      handleCarouselButton(button);
    };
  
    button.addEventListener("click", handleClick);
    button.addEventListener("touchend", (event) => {
      event.preventDefault(); // Prevent mouse event from firing after touch event
      handleClick();
    });
});
  
    const handleMenuButtonClick = (button) => {
        const carousel = document.querySelector('.carousel')
        if (button.dataset.menuButton === "menu") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[menu]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
        if (button.dataset.menuButton === "definition") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[definition]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
        if (button.dataset.menuButton === "exercise") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[exercise]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
        if (button.dataset.menuButton === "theory") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[theory]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
        if (button.dataset.menuButton === "media") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[media]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
    }
    
    menuButtons.forEach(button => {
        button.addEventListener("click", () => {
        handleMenuButtonClick(button);
        });
        button.addEventListener("touchend", (event) => {
        event.preventDefault(); // Prevent mouse event from firing after touch event
        handleMenuButtonClick(button);
        });
    });
      
    const handleNavButtonClick = (button) => {
        const carousel = document.querySelector('.carousel')
        if (button.dataset.navButton === "one") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[one]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
        if (button.dataset.navButton === "two") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[two]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
        if (button.dataset.navButton === "three") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[three]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
        if (button.dataset.navButton === "four") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[four]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
        if (button.dataset.navButton === "five") {
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            const targetSlide = slides.querySelector("[five]")
            let newIndex = [...slides.children].indexOf(targetSlide)
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
    }

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            handleNavButtonClick(button);
        });
        button.addEventListener("touchend", (event) => {
            event.preventDefault(); // Prevent mouse event from firing after touch event
            handleNavButtonClick(button);
        });
    });

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

function createStarVertices(source, number) {
    for (let i = 0; i < number; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = (Math.random() - 0.5) * 2000
        if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
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
center.add(spiralCenter);

const pivot1 = new THREE.Object3D();
const pivot2 = new THREE.Object3D();
const pivot3 = new THREE.Object3D();
const pivot4 = new THREE.Object3D();

pivot1.rotation.y = - Math.PI / 2.5;
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
let clouds
let atmosphere
let sign
let atmosMaterial
const planetContent = new THREE.Object3D()
export function createJaranius(diffuseTexture, normalTexture, roughnessTexture, cloudsTexture) {
    jaraniusInitialized = true
    
    const jaraniusGeometry = new THREE.SphereGeometry(5, 250, 250);
    jaraniusGeometry.computeBoundingSphere();
    jaranius = new THREE.Mesh(
        jaraniusGeometry,
        new THREE.MeshStandardMaterial({ 
            map: textureLoader2.load(diffuseTexture),
            normalMap: textureLoader2.load(normalTexture),
            roughnessMap: textureLoader2.load(roughnessTexture),  //works well
            normalScale: new THREE.Vector2(3, 3),  //works well
            metalness: 0,  //works well
            roughness: 0.85,  //works well
            flatShading: false,
            side: FrontSide,
        })
    )
    jaranius.name = "jaranius"
    jaraniusCenter.add(jaranius)

    //create cloud layer
    const cloudsMaterial = new THREE.MeshLambertMaterial({
        map: textureLoader2.load(cloudsTexture),
        transparent: true,
        side: DoubleSide,
        opacity: 0.8,
    })
    clouds = new THREE.Mesh(
        new THREE.SphereGeometry(5.04, 50, 50),
        cloudsMaterial
    )
    jaranius.add(clouds)
    
    //create atmosphericLight
    const atmosphericLight = new THREE.Mesh(
        new THREE.SphereGeometry(5.0, 500, 500),
        new THREE.ShaderMaterial({
            vertexShader: atmosphericLightVertexShader,
            fragmentShader: atmosphericLightFragmentShader,
            blending: THREE.AdditiveBlending,
        })
    )
    atmosphericLight.position.set(0, 0, 0)
    jaranius.add(atmosphericLight);

    //create atmosphere
    atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(5.3, 50, 50),
        new THREE.ShaderMaterial({
            vertexShader: atmosphereVertexShader,
            fragmentShader: atmosphereFragmentShader,
            uniforms: {
                lightPosition: { value: sunLight.position },
                uniformCameraPosition: { value: camera.position },
                planetPosition: { value: new THREE.Vector3(0, 0, 0) },
            },
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true,
            depthWrite: false,
        })
    )
    atmosphere.position.set(0, 0, 0)
    atmosphere.scale.set(1.2, 1.2, 1.2)
    jaranius.add(atmosphere);
    
    //create jaranius light
    const jaraniusLight = new THREE.PointLight(0xffffff, 0.01);
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
        createImages(planetImageData[i].src, planetImageData[i].lat, planetImageData[i].lng - 180, planetImageData[i].size / 500, planetImageData[i].radius, planetContent);
    }
    for (let i = 0; i < spiralImageData.length; i++) {
        createImages(spiralImageData[i].src, spiralImageData[i].lat, spiralImageData[i].lng - 180, spiralImageData[i].size / 500, spiralImageData[i].radius, spiral);
    }

    //create tags
    const indexMod = 0

    createTags(contexts[0].tagData, contexts[0].tagDestination, contexts[0].radius, 0, indexMod)

    createTags(contexts[1].tagData, contexts[1].tagDestination, contexts[1].radius, 1, indexMod)

    //create nuggets
    for (let i = 0; i < planetNuggetData.length; i++) { 
        let nugget = instantiateNugget(i, planetNuggetData[i].lat, planetNuggetData[i].lng - 180, planetNuggetData[i].color, planetNuggetData[i].size / 100000, planetNuggetData[i].slides, jaranius, 2);
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
}

//CREATE SUN
const sunRadius = 5
const sunRadianceGeo = new THREE.SphereGeometry(sunRadius, 50, 50)

const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture)
})
const sunRadiance = new THREE.Mesh(sunRadianceGeo, sunMat)
sunRadiance.position.set(0, 0, 490)
pivot4.add(sunRadiance)

const sunLight = new THREE.PointLight(0xffffff, 1.2, 2000)
sunLight.position.set(sunRadiance.position.x, sunRadiance.position.y, sunRadiance.position.z - sunRadius * 1.5)
pivot4.add(sunLight)

const textureFlare0 = textureLoader.load("https://jaranolsen.github.io/Planet/sunflare.webp");
//const textureFlare0 = textureLoader.load("../textures/sunflare.webp");
const textureFlare3 = textureLoader.load("https://jaranolsen.github.io/Planet/lensflare.webp");
//const textureFlare3 = textureLoader.load("../textures/lensflare.webp");
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
    const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(moons[i].radius, 50, 50),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load(moons[i].texture),
            metalness: 0,
            flatShading: false,
            side: FrontSide,
        })
    )

    mesh.position.set(moons[i].z, 0, 0)
    moons[i].pivot.add(mesh);

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
const ambient = new THREE.AmbientLight(0xffffff, 0.02); //0.01
scene.add(ambient);

const spotlight = new THREE.SpotLight(0xefebd8, 0);
spotlight.penumbra = 0.8
spotlight.angle = Math.PI / 4
scene.add(spotlight);

const targetIntensities = {
    spotlight: spotlight.intensity,
    ambient: ambient.intensity
  };

let lightTransitionStart = null;
let lightTransitionDuration = 0.5;

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

    if (version == 3) developer = true

}

//CREATE GUTTA STATS
const guttaStatScreen = document.querySelector('#guttaStatScreen');
const statsDisplay = document.createElement('div');

function refreshStats() {
    statsDisplay.innerHTML = "Number of munches: " + guttaStats.munch + "<br>Average hunger: " + Math.round(guttaStats.totalHungerAtMunch/guttaStats.munch * 100) / 100 + "<br><br>Number of kills: " + guttaStats.kills + "<br>Average hunger: " + Math.round(guttaStats.totalHungerAtKill/guttaStats.kills * 100) / 100
    guttaStatScreen.appendChild(statsDisplay)
}

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

export function previousVRSlide() {
    if (slideAction == false) {
        UI.remove(UIcontainer)
        activeVRSlide -= 1
        if (activeVRSlide < 0) activeVRSlide = activeVRSlideshowLength - 1
        UIcontainer = pushVRContent(activeVRSlideshow, activeVRSlide)
        UI.add(UIcontainer)
        UIcontainer.position.set(activeVRSlideshowPosition.x, activeVRSlideshowPosition.y, activeVRSlideshowPosition.z)
        UIcontainer.lookAt(middleOfPlanet)
        UIcontainer.rotateY(Math.PI)
        jaranius.add(UI)
        console.log(activeVRSlide, activeVRSlideshowLength)
        slideAction = true
    }
}
export function nextVRSlide() {
    if (slideAction == false) {
        UI.remove(UIcontainer)
        activeVRSlide += 1
        if (activeVRSlide > activeVRSlideshowLength - 1) activeVRSlide = 0
        UIcontainer = pushVRContent(activeVRSlideshow, activeVRSlide)
        UI.add(UIcontainer)
        UIcontainer.position.set(activeVRSlideshowPosition.x, activeVRSlideshowPosition.y, activeVRSlideshowPosition.z)
        UIcontainer.lookAt(middleOfPlanet)
        UIcontainer.rotateY(Math.PI)
        jaranius.add(UI)
        console.log(activeVRSlide)
        slideAction = true
    }
}

export function openVRLink() {
    if (slideAction == false) {
        let url = contentData[activeVRSlideshow][activeVRSlide]
        if (url.includes("youtube")) {
            const regex = /embed\/(\w+)/;
            const match = url.match(regex);
            url = "https://www.youtube.com/watch?v=" + match[1]; 
        }
        session.end()
        window.open(url, '_blank')
        slideAction = true
    }
}

//EVENTS KEYBOARD
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    const keyCode = event.which;
    //Controls
    if (keyCode == 79) { 
        if (controlMode === 'orbit') {
            controlMode = 'fly';
            orbitControls.enabled = false;
            flyControls.enabled = true;
          } else {
            controlMode = 'orbit';
            orbitControls.enabled = true;
            flyControls.enabled = false;
          }
    }
    if (focusElement !== "tagInput" && !flyControls.enabled) {
        //Slide control
        if (activeCarousel !== undefined && (keyCode === 33 || keyCode === 37)) { // left arrow or button on USB remote
            const prevButton = document.querySelector("[data-carousel-button='prev']");
            handleCarouselButton(prevButton);
        }
        if (activeCarousel !== undefined && (keyCode === 34 || keyCode === 39)) { // right arrow or button on USB remote
            const nextButton = document.querySelector("[data-carousel-button='next']");
            handleCarouselButton(nextButton);
        }
        if (activeCarousel !== undefined && keyCode == 116) { //button on USB remote
            console.log("play")
        }
        if (activeCarousel !== undefined && keyCode == 190) { //button on USB remote
            const exitButton = document.querySelector("[data-carousel-button='exit']");
            handleCarouselButton(exitButton);
        }

        //Light control
        if (keyCode >= 49 && keyCode <= 53) {
            const intensities = [0, 0.1, 0.25, 0.5, 1];
            targetIntensities.spotlight = intensities[keyCode - 49];
            lightTransitionStart = clock.getElapsedTime();
          }
        
          if (keyCode >= 54 && keyCode <= 57) {
            const intensities = [0, 0.02, 0.05, 0.1];
            targetIntensities.ambient = intensities[keyCode - 54];
            lightTransitionStart = clock.getElapsedTime();
          }
        
          if (keyCode == 48) {
            targetIntensities.ambient = 0.3;
            lightTransitionStart = clock.getElapsedTime();
          }
        /* if (keyCode == 49) { 
            spotlight.intensity = 0
        }
        if (keyCode == 50) { 
            spotlight.intensity = 0.1
        }
        if (keyCode == 51) { 
            spotlight.intensity = 0.25
        }
        if (keyCode == 52) { 
            spotlight.intensity = 0.5
        }
        if (keyCode == 53) { 
            spotlight.intensity = 1
        }

        if (keyCode == 54) { 
            ambient.intensity = 0
        }
        if (keyCode == 55) { 
            ambient.intensity = 0.02
        }
        if (keyCode == 56) { 
            ambient.intensity = 0.05
        }
        if (keyCode == 57) { 
            ambient.intensity = 0.1
        }
        if (keyCode == 48) { 
            ambient.intensity = 0.3
        } */

        //Stats display
        if (keyCode == 71) { //G
            if (guttaStatScreen.style.display == "block") {
                //fpsContainer.style.display = "none"
                guttaStatScreen.style.display = "none"
                scene.remove(guttaHelperCenter)
                if (developer == true) togglePerceptionCircles(guttaState)
            } else {
                fpsContainer.style.display = "block"
                guttaStatScreen.style.display = "block" 
                scene.add(guttaHelperCenter)
                if (developer == true) togglePerceptionCircles(guttaState)
            }
        }
        
        if (keyCode == 73) { //I
            for (let i = -180; i < 360; i += 10) {
                let no = convertLatLngtoCartesian(90, i, 5)
                console.log("90 ", i)
                let no2 = convertCartesiantoLatLng(no.x, no.y, no.z)
                console.log(no2.lat, no2.lng)
            }
        }
        if (keyCode == 219) { //Å use for testing
            console.log(buttonStates)
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
        if (keyCode == 72) { //H
            jaranius.material.wireframe = !jaranius.material.wireframe;

            /* for (let lat = 10; lat < 180; lat += 10) {
                for (let lng = 0; lng < 360; lng += 10) {
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
            console.log(contexts) */
        }
        if (keyCode == 83) { //S
            if (spiralActivated == false) {
                createSpiral()
            } else {
                spiralActivated = false
                spiralCenter.remove(spiral)
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
                context.context.clear()
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
                context.context.clear()
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
                context.context.clear()
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
                context.context.clear()
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

    if (selectedNodes.length > 0 && developer == true  && activeCarousel == undefined && focusElement !== "tagInput" && !flyControls.enabled) {
        for (let node = 0; node < selectedNodes.length; node++) {
            if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
                let posLatLng = convertCartesiantoLatLng(contexts[selectedContext].pins[selectedNodes[node]].position.x, contexts[selectedContext].pins[selectedNodes[node]].position.y, contexts[selectedContext].pins[selectedNodes[node]].position.z);
                // up
                if (keyCode == 38) {
                    if (fastMove) posLatLng.lat -= .4;
                    posLatLng.lat -= .1;
                    
                }
                // down
                if (keyCode == 40) {
                    if (fastMove)posLatLng.lat += .4;
                    posLatLng.lat += .1;
                    
                }
                // left
                if (keyCode == 37) {
                    if (fastMove)posLatLng.lng -= .4;
                    posLatLng.lng -= .1;
                    
                }
                // right
                if (keyCode == 39) {
                    if (fastMove)posLatLng.lng += .4;
                    posLatLng.lng += .1;
                }

                const pinSphereRadius = contexts[selectedContext].radius
                const boxSphereRadius = pinSphereRadius + 0.04
                const tagSphereRadius = pinSphereRadius + 0.05
                
                const pinPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, pinSphereRadius);
                const boxPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, boxSphereRadius);
                const tagPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, tagSphereRadius);

                contexts[selectedContext].pins[selectedNodes[node]].position.set(-pinPos.x, pinPos.y, -pinPos.z);
                contexts[selectedContext].boxes[selectedNodes[node]].position.set(-boxPos.x, boxPos.y, -boxPos.z);
                contexts[selectedContext].tags[selectedNodes[node]].position.set(-tagPos.x, tagPos.y, -tagPos.z);

                posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng)

                contexts[selectedContext].tagData[selectedNodes[node]].lat = posLatLng.lat.toFixed(1)
                contexts[selectedContext].tagData[selectedNodes[node]].lng = posLatLng.lng.toFixed(1)
            }
        }
    } else if (selectedPin != null && developer == true  && activeCarousel == undefined && focusElement !== "tagInput" && !flyControls.enabled) {

        if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
            let posLatLng = convertCartesiantoLatLng(selectedPin.position.x, selectedPin.position.y, selectedPin.position.z);
            // up
            if (keyCode == 38) {
                if (fastMove) posLatLng.lat -= .4;
                posLatLng.lat -= .1;                
            }
            // down
            if (keyCode == 40) {
                if (fastMove) posLatLng.lat += .4;
                posLatLng.lat += .1;
            }
            // left
            if (keyCode == 37) {
                if (fastMove) posLatLng.lng -= .4;
                posLatLng.lng -= .1;  
            }
            // right
            if (keyCode == 39) {
                if (fastMove) posLatLng.lng += .4;
                posLatLng.lng += .1;
            }

            const pinSphereRadius = contexts[selectedContext].radius
            const boxSphereRadius = pinSphereRadius + 0.04
            const tagSphereRadius = pinSphereRadius + 0.05
            
            const pinPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, pinSphereRadius);
            const boxPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, boxSphereRadius);
            const tagPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, tagSphereRadius);

            selectedPin.position.set(-pinPos.x, pinPos.y, -pinPos.z);
            selectedBox.position.set(-boxPos.x, boxPos.y, -boxPos.z);
            selectedTag.position.set(-tagPos.x, tagPos.y, -tagPos.z);

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

            newTagDestination.push(newItem)
            newConnectionsDestination.push([id])
            if (newArrowConnectionsDestination !== undefined) newArrowConnectionsDestination.push([id])
            if (newDashedConnectionsDestination !== undefined) newDashedConnectionsDestination.push([id])

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

        if (camera.position.distanceTo(selectedPin.position) < 4 && contexts[selectedContext].tagData[selectedNode].slides !== undefined) {
            const selectedCarousel = contexts[selectedContext].tagData[selectedNode].slides
            pushContent(selectedCarousel)
            activeCarousel = document.querySelector(`.carousel.s1`)
            activeCarousel.style.display = "block"
        }
    }
}

function hasPointerMovedSignificantly(startEvent, endEvent) {
    const dx = endEvent.clientX - startEvent.clientX;
    const dy = endEvent.clientY - startEvent.clientY;
    const squaredDistance = dx * dx + dy * dy;
    const squaredMoveThreshold = tapMoveThreshold * tapMoveThreshold;

    return squaredDistance > squaredMoveThreshold;
}


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

/* function processPointerUpEvent(event) {
    if (selectState) {
        onPointerClick(event);
    }
    selectState = false;
}

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerdown', (event) => {
    selectState = true;
});
window.addEventListener('pointerup', (event) => {
    if (event.pointerType !== 'touch') {
        processPointerUpEvent(event);
    }
});
window.addEventListener('touchstart', (event) => {
    selectState = true;
    initialTouchPosition.x = event.touches[0].clientX;
    initialTouchPosition.y = event.touches[0].clientY;
});
window.addEventListener('touchmove', (event) => {
    if (hasPointerMovedSignificantly(initialTouchPosition, event.touches[0])) {
        selectState = false;
    }
});
window.addEventListener('touchend', (event) => {
    if (selectState) {
        event.preventDefault(); // Prevent mouse event from firing after touch event
        const touch = event.changedTouches[0];
        const touchEvent = {
            ...touch,
            pointerType: 'touch',
            isPrimary: true,
        };
        processPointerUpEvent(touchEvent);
    }
    selectState = false;
}); */



/* let initialTouchPosition = { x: null, y: null };
const tapMoveThreshold = 5; // Adjust this value to set the allowed movement threshold for taps

function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onPointerClick(event) {
    // Check if the event is from a touchscreen, ignore if it's not a primary touch
    if (event.pointerType === 'touch' && event.isPrimary === false) {
        return;
    }

    // The rest of your onClick function
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(intersectObjectsArray);
    if (intersects.length > 0) {
        selectedPin = intersects[0].object;

        selectedContext = intersects[0].object.context
        selectedNode = intersects[0].object.index
        if (contexts !== 2) selectedBox = contexts[selectedContext].boxes[selectedNode]
        if (contexts !== 2) selectedTag = contexts[selectedContext].tags[selectedNode]

        if (camera.position.distanceTo(selectedPin.position) < 4 && contexts[selectedContext].tagData[selectedNode].slides !== undefined) {
            const selectedCarousel = contexts[selectedContext].tagData[selectedNode].slides
            pushContent(selectedCarousel)
            activeCarousel = document.querySelector(`.carousel.s1`)
            activeCarousel.style.display = "block"
        }
    }
}

function hasPointerMovedSignificantly(startEvent, endEvent) {
    const dx = endEvent.clientX - startEvent.clientX;
    const dy = endEvent.clientY - startEvent.clientY;
    const squaredDistance = dx * dx + dy * dy;
    const squaredMoveThreshold = tapMoveThreshold * tapMoveThreshold;

    return squaredDistance > squaredMoveThreshold;
}

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerdown', (event) => {
    selectState = true;
});
window.addEventListener('pointerup', (event) => {
    if (selectState && event.pointerType !== 'touch') {
        onPointerClick(event);
    }
    selectState = false;
});
window.addEventListener('touchstart', (event) => {
    selectState = true;
    initialTouchPosition.x = event.touches[0].clientX;
    initialTouchPosition.y = event.touches[0].clientY;
});
window.addEventListener('touchend', (event) => {
    if (selectState && !hasPointerMovedSignificantly(initialTouchPosition, event.changedTouches[0])) {
        onPointerClick(event);
    }
    selectState = false;
}); */

//TESTS
if (planetTagData.length !== planetConnections.length) {
    console.log("ERROR: planetTagData.length !== planetConnections.length")
}

//ANIMATIONLOOP
function updateButtons() {
	// Find closest intersecting object
	let intersect = raycast();
	// Update targeted button state (if any)
	if ( intersect && intersect.object.isUI ) {
		if ( selectState ) {
			// Component.setState internally call component.set with the options you defined in component.setupState
			intersect.object.setState( 'selected' );
		} else {
			// Component.setState internally call component.set with the options you defined in component.setupState
			intersect.object.setState( 'hovered' );
		}
	}
	// Update non-targeted buttons state
	slideshowActions.forEach( ( obj ) => {
		if ( ( !intersect || obj !== intersect.object ) && obj.isUI ) {
			// Component.setState internally call component.set with the options you defined in component.setupState
			obj.setState( 'idle' );
		}
	} );
}

function raycast() {
	return slideshowActions.reduce( ( closestIntersection, obj ) => {
		const intersection = raycaster.intersectObject( obj, true );
		if ( !intersection[ 0 ] ) return closestIntersection;
		if ( !closestIntersection || intersection[ 0 ].distance < closestIntersection.distance ) {
			intersection[ 0 ].object = obj;
			return intersection[ 0 ];
		}
		return closestIntersection;
	}, null );
}

function animate() {
    renderer.setAnimationLoop( render );
}

function render() {  
    //WebXR
    if (webXRInitialized == true && renderer.xr.isPresenting){
        const dt = clock.getDelta();

        if (controllers ){
            Object.values( controllers ).forEach( ( value ) => {
                handleController( value.controller );
            });
        } 
        if (elapsedTime===undefined) elapsedTime = 0;
        elapsedTime += dt;
        if (elapsedTime > 0.1){  //reduce to make navigation even smoother?
            updateGamepadState();
            elapsedTime = 0;
        }
        if (XRinSession == true) {
            const xInput = Number(buttonStates.xr_standard_thumbstick.xAxis)
            const yInput = Number(buttonStates.xr_standard_thumbstick.yAxis)
            if (xInput != 0 || yInput != 0 || buttonStates.a_button != 0 || buttonStates.b_button != 0) {

                //JARANIUS ROTATE
                jaranius.rotation.y -= xInput / 15
                dollyLat += yInput
                dollyRadius += ((0.1 * buttonStates.a_button) - (0.1 * buttonStates.b_button)) * (dollyRadius - 5)
                const dollyPosit = convertLatLngtoCartesian(dollyLat, dollyLng, dollyRadius)
                dolly.position.set(dollyPosit.x, dollyPosit.y - 1.6, dollyPosit.z)
            }
        }
        ThreeMeshUI.update();
        updateButtons();
    }

    updateGutta(guttaState, guttaStats, jaranius, nuggets, developer)

    const camPos = camera.position
    const camRot = camera.rotation
    spotlight.position.set(camPos.x, camPos.y, camPos.z);
    spotlight.rotation.set(camRot.x, camRot.y, camRot.z);
    
    
    if (jaraniusInitialized == true) {
        center.rotation.y += -0.00001;
        pivot1.rotation.y += -0.0003;
        pivot2.rotation.y += -0.00003;
        pivot3.rotation.y += -0.000009;
        pivot4.rotation.y += -0.0001;
        clouds.rotation.y += 0.00001;

        if (camera.position.z > -15 && camera.position.z < 15) introStarted = false
    
        orbitControls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);  //  /1
        orbitControls.zoomSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet) / 3;//  /3;

        if (sign) {
            signRotationVector.set(camera.position.x, camera.position.y, camera.position.z)
            signRotationVector.normalize()
            sign.lookAt(signRotationVector.x, signRotationVector.y, signRotationVector.z ) 
        }

        //ATMOSPHERE
        let distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0)) - 8;
        let scaleFactor = Math.max(1.2, 1 + 0.75 * Math.exp(-0.1 * distance));
        atmosphere.scale.set(scaleFactor, scaleFactor, scaleFactor);

        refreshStats();

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

        const newSubtitle = subtitles.find(({ start, end }) => elapsedTime >= start && elapsedTime <= end);
        
        if (newSubtitle && newSubtitle !== currentSubtitle) {
            currentSubtitle = newSubtitle;
            subtitleContainer.textContent = currentSubtitle.text;
        }
    }

    const delta = clock.getDelta();

    if (flyControls.enabled) {
        flyControls.update(delta);
        // Check the distance from the camera to the planet center
        const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));

        // Set a minimum distance to avoid the camera going into the planet
        const minDistance = 5.4;

        if (distance < minDistance) {
            // Calculate the vector pointing from the planet center to the camera
            const direction = camera.position.clone().sub(new THREE.Vector3(0, 0, 0)).normalize();

            // Move the camera to the minimum distance in the same direction
            camera.position.copy(direction.multiplyScalar(minDistance));
        }
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
