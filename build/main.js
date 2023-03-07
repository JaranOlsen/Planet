//  IMPORT DEPENDENCIES
import * as THREE from 'three'
import { Float32BufferAttribute, FrontSide, DoubleSide, Vector2 } from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js'
import { VRButton } from 'three/addons/webxr/VRButton.js'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js'
import { Constants as MotionControllerConstants, fetchProfile, MotionController } from 'three/examples/jsm/libs/motion-controllers.module.js'
import ThreeMeshUI from 'three-mesh-ui'
import { GUI } from 'dat.gui'
import { lerp, smoothstep } from 'three/src/math/MathUtils.js';


//  IMPORT SCRIPTS
import { createImages, createTags, pins, tags, pinPositions, createConnections, hoverPins, instantiateNugget } from './mindmap.js'
import { getRandomNum, getRandomBell, getRandomInt, convertLatLngtoCartesian, convertCartesiantoLatLng, constrainLatLng } from './mathScripts.js'
import { planetTagData } from './data/planetTagData.js'
import { planetConnections } from './data/planetConnectionData.js'
import { planetDashedConnections } from './data/planetDashedConnectionData.js'
import { planetArrowedConnections } from './data/planetArrowedConnectionData.js'
import { planetImageData } from './data/planetImageData.js'
import { planetNuggetData } from './data/planetNuggetData.js'
import { spiralTagData } from './data/spiralTagData.js'
import { spiralConnections } from './data/spiralConnectionData.js'
import { spiralImageData } from './data/spiralImageData.js'
import { palette } from './data/palette.js'
import { pushContent } from './content.js'
import { initializeVersion } from './versions.js'
import { creation } from './creation.js'

//  IMPORT SHADERS
import atmosphericLightVertexShader from '../shaders/atmosphericLightVertex.glsl'
import atmosphericLightFragmentShader from '../shaders/atmosphericLightFragment.glsl'
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl'
import sunVertexShader from '../shaders/sunVertex.glsl'
import sunFragmentShader from '../shaders/sunFragment.glsl'
import spiralVertexShader from '../shaders/spiralVertex.glsl'
import spriralFragmentShader from '../shaders/spiralFragment.glsl'

//  IMPORT TEXTURES
import starW from "../img/textures/starW.webp"
import starR5 from "../img/textures/starR5.webp"
import starR10 from "../img/textures/starR10.webp"
import starR15 from "../img/textures/starR15.webp"
import starR20 from "../img/textures/starR20.webp"
import starB5 from "../img/textures/starB5.webp"
import starB10 from "../img/textures/starB10.webp"
import starB15 from "../img/textures/starB15.webp"
import starB20 from "../img/textures/starB20.webp"
import sunTexture from "../img/textures/sun1k.webp"
import moonTexture from "../img/textures/moon1k.webp"
import redmoonTexture from "../img/textures/moonRed1k.webp"
import icemoonTexture from "../img/textures/moonIce1k.webp"
import dash from '../img/textures/dash.webp'
import tier from '../img/textures/tier.webp'
import testPicture from '../img/truth/Slide6.jpeg'

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
//renderer.outputEncoding = THREE.sRGBEncoding;

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

const controls = new OrbitControls(camera, canvas);
controls.enablePan = false
controls.maxDistance = 1000
controls.minDistance = 5.2
controls.zoomSpeed = 0.3
controls.rotateSpeed = 0.3
controls.target.set(0, 0, 0);
controls.update();

const scene = new THREE.Scene();

const pointer = new THREE.Vector2;
const raycaster = new THREE.Raycaster();
const clock = new THREE.Clock();
const timer = new THREE.Clock();

let contexts = []
let selectedContext = null;
let selectedPin = null;
let selectedBox = null;
let selectedTag = null;
let selectedNode = null;
let selectedNodes = []
let nuggets = []
let showContent = true;
let fastMove = false;

let kills = 0
let totalHungerAtKill = 0
let munch = 0
let totalHungerAtMunch = 0

let signRotationVector = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z)

const middleOfPlanet = new THREE.Vector3(0, 0, 0);
const spiral = new THREE.Object3D()


//VERSION MANAGER

const postLoadingManager = new THREE.LoadingManager();
const textureLoader2 = new THREE.TextureLoader(postLoadingManager)

const playButton = document.getElementById("playbutton")
const credits = document.getElementById("credits")
const enableVRbutton = document.getElementById("enableVRbutton")
const skipButton = document.getElementById("skipbutton")
initializeVersion(creation, postLoadingManager)

let webXRInitialized = false
let jaraniusInitialized = false
let guttaInitialized = false


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
        console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };

    const progressBarContainer = document.querySelector('.progress-bar-container')
    loadingManager.onLoad = function ( ) {
        progressBarContainer.style.display = 'none';
        console.log( 'Loading complete!');
    };
    loadingManager.onError = function ( url ) {
        console.log( 'There was an error loading ' + url );
    };
}


//WEB XR
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
        createUI();
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
}

/* function createUI() {
    const ui = new CanvasUI(  );
    ui.updateElement("body", "Hello World" );
    ui.update();
    ui.mesh.position.set( 0, 1.5, -6 );
    scene.add( ui.mesh );
} */

let UIcontainer
let UIactive
const UI = new THREE.Object3D
function createUI() {
    /* UIcontainer = new ThreeMeshUI.Block({
        width: 3,
        height: 3,
        padding: 0.2,
        fontFamily: '../Public/Roboto-msdf.json',
        fontTexture: '../Public/Roboto-msdf.png',
        fontSize: 0.1,
    });
    
    
    const text = new ThreeMeshUI.Text({
        content: "Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! Some text to be displayed! "
    });
    UIcontainer.add( text );
    
    scene.add( UIcontainer );
    UIcontainer.position.set(0, 0, 6) */

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
    
      const contentContainer = new ThreeMeshUI.Block({
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

function updateControllers(info){
    if (info.right !== undefined){
        const right = renderer.xr.getController(0);
        
        let trigger = false, squeeze = false;
        
        Object.keys( info.right ).forEach( (key) => {
            if (key.indexOf('trigger')!=-1) trigger = true;                   
            if (key.indexOf('squeeze')!=-1) squeeze = true;
            
        });
        
        if (trigger){
            right.addEventListener( 'selectstart', onSelectStart );
            right.addEventListener( 'selectend', onSelectEnd );
        }

        if (squeeze){
            right.addEventListener( 'squeezestart', onSqueezeStart );
            right.addEventListener( 'squeezeend', onSqueezeEnd );
        }
        
        right.addEventListener( 'disconnected', onDisconnected );
    }
    
    if (info.left !== undefined){
        const left = renderer.xr.getController(1);
        
        let trigger = false, squeeze = false;
        
        Object.keys( info.left ).forEach( (key) => {
            if (key.indexOf('trigger')!=-1) trigger = true;                   if (key.indexOf('squeeze')!=-1) squeeze = true;      
        });
        
        if (trigger){
            left.addEventListener( 'selectstart', onSelectStart );
            left.addEventListener( 'selectend', onSelectEnd );
        }

        if (squeeze){
            left.addEventListener( 'squeezestart', onSqueezeStart );
            left.addEventListener( 'squeezeend', onSqueezeEnd );
        }
        
        left.addEventListener( 'disconnected', onDisconnected );
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
    console.log("select")
    this.userData.selectPressed = true;
    //console.log(buttonStates.a_button, buttonStates.b_button, buttonStates.xr_standard_thumbstick.button, buttonStates.xr_standard_thumbstick.xAxis, buttonStates.xr_standard_thumbstick.yAxis)
    /* console.log(buttonStates,
    gamepadIndices,
    info,
    controllers) */
}

function onSelectEnd( ){
    this.children[0].scale.z = 0;
    this.userData.selectPressed = false;
    this.userData.selected = undefined;
    console.log("selectend")
}

function onSqueezeStart( ){
    this.userData.squeezePressed = true;
    if (this.userData.selected !== undefined ){
        this.attach( this.userData.selected );
        this.userData.attachedObject = userData.selected;
    }
    console.log("squeeze")
}

function onSqueezeEnd( ){
    this.userData.squeezePressed = false;
    if (this.userData.attachedObject !== undefined){
            room.attach( this.userData.attachedObject );
        this.userData.attachedObject = undefined;
    }
    console.log("squeezeend")
}

function onDisconnected(){
    const index = userData.index;
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

        const intersects = raycaster.intersectObjects( pinPositions );

        if (intersects.length>0){
            const activatedPin = intersects[0].object;
            console.log(activatedPin)
            const position = convertLatLngtoCartesian(activatedPin.source[activatedPin.index].lat, activatedPin.source[activatedPin.index].lng + 180, 5.3)
            UIcontainer.position.set(position.x, position.y, position.z)
            UIcontainer.up = new THREE.Vector3(0, -1, 0)
            console.log(UIcontainer)
            UIcontainer.lookAt(middleOfPlanet)

            /* if (UIactive == true) {
                jaranius.remove(UI)
                UIactive = false
            } else {
                jaranius.add(UI)
                UIactive = true
            } */
        }
    }
}

function updateGamepadState(){
    const session = renderer.xr.getSession();
    
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

/* function updateGamepadState(){
    const session = renderer.xr.getSession();
    
    session.inputSources.forEach((inputSource) => {
        if (inputSource && inputSource.gamepad && gamepadIndices && buttonStates){
            const gamepad = inputSource.gamepad;

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
    });

    XRinSession = session !== null;
} */

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
let start = false
let introTuneLength
initializeIntro()
function initializeIntro() {
    const introTune = document.getElementById("introTune");
        introTune.preload = "auto";
        introTune.currentTime = 0;
        introTune.volume = 1;
    introTuneLength = introTune.duration

    playButton.addEventListener("click", () => {
            introTune.play();
            start = true;
            playButton.style.display = "none";
            skipButton.style.display = "none";
            enableVRbutton.style.display = "none";
            credits.style.display = "none";
            
        })

    //skip intro
    skipButton.addEventListener("click", () => {
            playButton.style.display = "none";
            skipButton.style.display = "none";
            enableVRbutton.style.display = "none";
            credits.style.display = "none";
            camera.position.z = 15;
        })
}

//SLIDE CAROUSEL
let activeCarousel

/* const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const carousel = document.querySelector('.carousel')
        if (button.dataset.carouselButton === "exit") {
            activeCarousel.style.display = "none"
        } else {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
        
            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active

            console.log(button)
        }
    })
}) */

const buttons = document.querySelectorAll("[data-carousel-button]");

function handleCarouselButton(button) {
  const carousel = document.querySelector('.carousel');

  if (button.dataset.carouselButton === "exit") {
    carousel.style.display = "none";
  } else {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    } else if (newIndex >= slides.children.length) {
      //newIndex = 0;
      newIndex = slides.children.length;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleCarouselButton(button);
  });
});

const menuButtons = document.querySelectorAll("[data-menu-button]")
menuButtons.forEach(button => {
    button.addEventListener("click", () => {
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
    })
})

const navButtons = document.querySelectorAll("[data-nav-button]")
navButtons.forEach(button => {
    button.addEventListener("click", () => {
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
    })
})

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
let jaraniusConnections
let spiralDynamicsConnections
let clouds
let sign
const planetContent = new THREE.Object3D
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
    //scene.add(jaranius)
    center.add(jaranius)

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
    const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(5.3, 50, 50),
        new THREE.ShaderMaterial({
            vertexShader: atmosphereVertexShader,
            fragmentShader: atmosphereFragmentShader,
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

    //create pictures
    jaranius.add(planetContent)

    for (let i = 0; i < planetImageData.length; i++) {
        createImages(planetImageData[i].src, planetImageData[i].lat, planetImageData[i].lng - 180, planetImageData[i].size / 500, planetImageData[i].radius, planetContent);
    }
    for (let i = 0; i < spiralImageData.length; i++) {
        createImages(spiralImageData[i].src, spiralImageData[i].lat, spiralImageData[i].lng - 180, spiralImageData[i].size / 500, spiralImageData[i].radius, spiral);
    }

    //create tags
    createTags(planetTagData, planetContent, 5)

    createTags(spiralTagData, spiral, 7)

    //create nuggets
    for (let i = 0; i < planetNuggetData.length; i++) { 
        let nugget = instantiateNugget(i, planetNuggetData[i].lat, planetNuggetData[i].lng - 180, planetNuggetData[i].color, planetNuggetData[i].size / 100000, planetNuggetData[i].slides, jaranius);
        nuggets.push(nugget)
    }

    //create connections
    const curveThickness = 0.0001
    const curveRadiusSegments = 3
    const curveMaxAltitude = 0.03
    const curveMinAltitude = 5.02
    jaraniusConnections = new THREE.Object3D()
    jaranius.add(jaraniusConnections)
    let context = jaraniusConnections
    createConnections(planetTagData, planetConnections, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, false, false)
    createConnections(planetTagData, planetDashedConnections, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, true, false)
    createConnections(planetTagData, planetArrowedConnections, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, false, true)

    spiralDynamicsConnections = new THREE.Object3D()
    spiral.add(spiralDynamicsConnections)
    let context2 = spiralDynamicsConnections
    createConnections(spiralTagData, spiralConnections, 0.0002, curveRadiusSegments, 0.1, 7.01, context2, false, false)

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
const textureFlare3 = textureLoader.load("https://jaranolsen.github.io/Planet/lensflare.webp");
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
    scene.add(spiral)
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

//CREATE GUTTA
let gutta
let mara
let species

export function createGutta(numberOfGutta, numberOfMara, version) {
    guttaInitialized = true
    const guttaFlyAltitude = 0.01

    class Gutt {
        constructor(lat, lng, geometry, material, array, line) {
            this.lat = lat;
            this.lng = lng;
            this.material = material;
            this.geometry = geometry;
            this.array = array;

            this.gutt = new THREE.Mesh(this.geometry, this.material)
    
            this.pos = new THREE.Vector2(lat, lng)
            this.velocity = new THREE.Vector2(getRandomNum(0, 0), getRandomNum(0, 1)).setLength(0.001)
            this.acceleration = new THREE.Vector2
            this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5 + guttaFlyAltitude)
            this.presentHeading
            this.originalHeading
    
            this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)

            this.wander = new THREE.Vector2(0, 0)
            this.alignment = new THREE.Vector2(0, 0)
            this.cohesion = new THREE.Vector2(0, 0)
            this.separation = new THREE.Vector2(0, 0)
            this.hunt = new THREE.Vector2(0, 0)
            this.flee = new THREE.Vector2(0, 0)
            this.feed = new THREE.Vector2(0, 0)
            this.avoidance = new THREE.Vector2(0, 0)

            this.hunger = 0

            //jaranius.add(this.gutt)
            scene.add(this.gutt)
        }

        move(species, ID) {
            if (this.hunger < 1) this.hunger += 0.0001

            this.originalHeading = Math.atan2(this.velocity.x, this.velocity.y)

            this.acceleration.set(0, 0)
            if (species == "gutt") {
                this.alignment.multiplyScalar(parameters.gutt_alignment)
                this.cohesion.multiplyScalar(parameters.gutt_cohesion)
                this.separation.multiplyScalar(parameters.gutt_separation)
                this.flee.multiplyScalar(parameters.gutt_flee)
                this.feed.multiplyScalar(parameters.gutt_feed)
            }
            if (species == "mara") {
                this.alignment.multiplyScalar(parameters.mara_alignment)
                this.cohesion.multiplyScalar(parameters.mara_cohesion)
                this.separation.multiplyScalar(parameters.mara_separation)
                this.hunt.multiplyScalar(parameters.mara_hunt)
            }
            //this.avoidance.multiplyScalar(parameters.avoidance)

            /* if (species == "gutt" && ID == 0) {
                console.log("lat: ", this.pos.x, "lng: ", this.pos.y)
                console.log("alignment length: ", this.alignment.length())
                console.log("cohesion length: ", this.cohesion.length())
                console.log("separation length: ", this.separation.length())
                console.log("flee length: ", this.flee.length())
                console.log("feed length: ", this.feed.length())
                console.log("wander length: ", this.wander.length())
                console.log("lat: ", this.pos.x, "lng: ", this.pos.y)
                console.log("alignment: ", this.alignment)
                console.log("cohesion: ", this.cohesion)
                console.log("separation: ", this.separation)
                console.log("flee: ", this.flee)
                console.log("feed: ", this.feed)
                console.log("wander: ", this.wander)
            } */

            this.acceleration.add( this.wander )
            this.acceleration.add( this.alignment )
            this.acceleration.add( this.cohesion )
            this.acceleration.add( this.separation )
            if (species == "gutt") {
                this.acceleration.add( this.flee )
                this.acceleration.add( this.feed )
            }
            if (species == "mara") {
                this.acceleration.add( this.hunt )
            }
            this.acceleration.add( this.avoidance )

            this.velocity.add(this.acceleration)
            if (species == "gutt") {
                this.velocity.clampLength(-parameters.gutt_max_speed, parameters.gutt_max_speed)
            }
            if (species == "mara") {
                this.velocity.clampLength(-parameters.mara_max_speed, parameters.mara_max_speed)
            }
            this.pos.add(this.velocity)
        
            if (this.pos.x < 0) {
                this.pos.x = Math.abs(this.pos.x)
                if (this.pos.y < 180) {
                this.pos.y += 180
                } else this.pos.y -= 180
                this.velocity.x *= -1
                this.velocity.y *= -1
            }
            if (this.pos.x > 180) {
                this.pos.x = 180 - (this.pos.x - 180)
                if (this.pos.y < 180) {
                    this.pos.y += 180
                } else this.pos.y -= 180
                this.velocity.x *= -1
                this.velocity.y *= -1
            }
            if (this.pos.y < 0) {this.pos.y = 360 + this.pos.y}
            if (this.pos.y > 360) {this.pos.y = this.pos.y - 360}
            
            this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5 + guttaFlyAltitude)
            this.cartesianVelocity = convertLatLngtoCartesian(this.velocity.x, this.velocity.y, 5 + guttaFlyAltitude)
            
            this.presentHeading = Math.atan2(this.velocity.x, this.velocity.y)
            
            this.cp = new THREE.Vector3
            this.cp.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)
            this.gutt.lookAt(this.cp)
            this.gutt.rotateZ(this.presentHeading - this.originalHeading)
            this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)
        }

        calculateWander(species) {
             this.wander.set(getRandomNum(-0.005, 0.005), getRandomNum(-0.005, 0.005))
            if (species == "gutt") {
                this.wander.clampLength(-parameters.gutt_max_force * (1 - this.hunger), parameters.gutt_max_force * (1 - this.hunger))
            }
            if (species == "mara") {
                this.wander.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
            }
        }

        calculateAlignment(species) {
            let perception 
            if (species == "gutt") {
                perception = parameters.gutt_alignment_perception_distance
            }
            if (species == "mara") {
                perception = parameters.mara_alignment_perception_distance
            }
            let counter = 0
            this.alignment.set(0, 0)
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] != this && this.gutt.position.distanceTo(this.array[i].gutt.position) < perception) {
                    this.alignment.add(this.array[i].velocity)
                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.alignment.set(this.alignment.x / counter, this.alignment.y / counter)
                this.alignment.sub(this.velocity)
                if (species == "gutt") {
                    this.alignment.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.alignment.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
        }

        calculateCohesion(species) {
            let perception 
            if (species == "gutt") {
                perception = parameters.gutt_cohesion_perception_distance
            }
            if (species == "mara") {
                perception = parameters.mara_cohesion_perception_distance
            }
            let counter = 0
            this.cohesion.set(0, 0)
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] != this && this.gutt.position.distanceTo(this.array[i].gutt.position) < perception) {
                    this.cohesion.add(this.array[i].pos)
                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.cohesion.set(this.cohesion.x / counter, this.cohesion.y / counter)
                this.cohesion.sub(this.pos)
                if (species == "gutt") {
                    this.cohesion.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.cohesion.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
        }

        calculateSeparation(species) {
            let perception 
            if (species == "gutt") {
                perception = parameters.gutt_separation_perception_distance
            }
            if (species == "mara") {
                perception = parameters.mara_separation_perception_distance
            }
            let counter = 0
            this.separation.set(0, 0)
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] != this && this.gutt.position.distanceTo(this.array[i].gutt.position) < perception) {
                    let difference = new THREE.Vector2(this.pos.x - this.array[i].pos.x, this.pos.y - this.array[i].pos.y)
                    difference.divideScalar(this.gutt.position.distanceTo(this.array[i].gutt.position))
                    this.separation.add(difference)
                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.separation.set(this.separation.x / counter, this.separation.y / counter)
                if (species == "gutt") {
                    this.separation.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.separation.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
        }

        calculateHunting() {
            let counter = 0
            this.hunt.set(0, 0)
            for (let i = 0; i < gutta.length; i++) {
                if (gutta[i] != this && this.gutt.position.distanceTo(gutta[i].gutt.position) < parameters.mara_hunt_perception_distance) {
                    if (gutta[i] != this && this.gutt.position.distanceTo(gutta[i].gutt.position) < 0.01) {
                        if (this.hunger > 0.2) {
                            kills += 1
                            totalHungerAtKill += this.hunger
                            this.hunger = 0
                        }
                    }
                    this.hunt.add(gutta[i].pos)
                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.hunt.set(this.hunt.x / counter, this.hunt.y / counter)
                this.hunt.sub(this.pos)
                this.hunt.clampLength(-parameters.mara_max_force * this.hunger, parameters.mara_max_force * this.hunger)
            }
        }

        calculateFleeing() {
            let counter = 0
            this.flee.set(0, 0)
            for (let i = 0; i < mara.length; i++) {
                if (mara[i] != this && this.gutt.position.distanceTo(mara[i].gutt.position) < parameters.gutt_flee_perception_distance) {
                    let difference = new THREE.Vector2(this.pos.x - mara[i].pos.x, this.pos.y - mara[i].pos.y)
                    difference.divideScalar(this.gutt.position.distanceTo(mara[i].gutt.position))
                    this.flee.add(difference)
                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.flee.set(this.flee.x / counter, this.flee.y / counter)
                this.flee.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
            }
        }

        calculateFeeding() {
            let counter = 0
            this.feed.set(0, 0)
            for (let i = 0; i < nuggets.length; i++) {
                let nuggetPosition = nuggets[i].nugget.position.clone()
                nuggetPosition.applyMatrix4(jaranius.matrixWorld);

                if (this.gutt.position.distanceTo(nuggetPosition) < parameters.gutt_feed_perception_distance) { 
                    if (this.gutt.position.distanceTo(nuggetPosition) < 0.005) {
                        if (this.hunger > 0.05) {
                            munch += 1
                            totalHungerAtMunch += this.hunger
                            this.hunger -= 0.05
                        }
                    }

                    let nuggetLatLng = convertCartesiantoLatLng(nuggetPosition.x, nuggetPosition.y, nuggetPosition.z)

                    let adjusted_lng = nuggetLatLng.lng + 360
                    if (adjusted_lng >= 360) adjusted_lng -= 360
                    let adjusted_nuggetLatLng = new THREE.Vector2 (nuggetLatLng.lat, adjusted_lng)
            
                    this.feed.add(adjusted_nuggetLatLng)

                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.feed.set(this.feed.x / counter, this.feed.y / counter)
                this.feed.sub(this.pos)
                this.feed.clampLength(-parameters.gutt_max_force * this.hunger, parameters.gutt_max_force * this.hunger)
            }
        }

        calculateTemperature(species) {
            this.avoidance.set(0, 0)
            if (this.pos.x < 40) {
                this.avoidance.set((Math.pow(40 - this.pos.x, 2)) / 100000, 0)
                if (species == "gutt") {
                    this.avoidance.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.avoidance.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
            if (this.pos.x > 140) {
                this.avoidance.set(-(Math.pow(140 - this.pos.x, 2)) / 100000, 0)
                if (species == "gutt") {
                    this.avoidance.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.avoidance.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
        }
    }

    gutta = [];
    const guttaScale = 0.0003;
    //const guttaScale = 0.003;

    const guttaShape = new THREE.Shape();
    guttaShape.moveTo(guttaScale * 5,guttaScale * 5 );
    guttaShape.bezierCurveTo(guttaScale * 5,guttaScale * 5,guttaScale * 4, 0, 0, 0 );
    guttaShape.bezierCurveTo(- guttaScale * 6, 0,- guttaScale * 6,guttaScale * 7, - guttaScale * 6,guttaScale * 7 );
    guttaShape.bezierCurveTo(- guttaScale * 6,guttaScale * 11,- guttaScale * 3,guttaScale * 15.4,guttaScale * 5,guttaScale * 19 );
    guttaShape.bezierCurveTo(guttaScale * 12,guttaScale * 15.4,guttaScale * 16,guttaScale * 11,guttaScale * 16,guttaScale * 7 );
    guttaShape.bezierCurveTo(guttaScale * 16,guttaScale * 7,guttaScale * 16, 0,guttaScale * 10, 0 );
    guttaShape.bezierCurveTo(guttaScale * 7, 0,guttaScale * 5,guttaScale * 5,guttaScale * 5,guttaScale * 5 );

    const guttaGeometry = new THREE.ShapeGeometry(guttaShape)
    guttaGeometry.center = (5 * guttaScale, 9.5 * guttaScale, 0)
    guttaGeometry.rotateZ(Math.PI/2)
    guttaGeometry.rotateY(Math.PI/2)

    for (let i = 0; i < numberOfGutta; i++) {
        let lat = getRandomBell(40, 140, 5)
        let lng = getRandomInt(0, 359)

        let guttaMaterial
        let testBird = new THREE.MeshBasicMaterial({
            color: 0xff0000, 
            side: DoubleSide,
        })
        let redBird = new THREE.MeshLambertMaterial({
            color: 0xcc6655, 
            side: DoubleSide,
        })
        let greyBird = new THREE.MeshLambertMaterial({
            color: 0xcc7788, 
            side: DoubleSide,
        })
        let darkBird = new THREE.MeshLambertMaterial({
            color: 0xbb4455, 
            side: DoubleSide,
        })

        if (i == 0) {
            guttaMaterial = testBird
        } else if (i <= numberOfGutta / 3) {
            guttaMaterial = redBird
        } else if (i < numberOfGutta / 3 * 2) {
            guttaMaterial = greyBird
        } else guttaMaterial = darkBird

        gutta.push(new Gutt(lat, lng, guttaGeometry, guttaMaterial, gutta))
    }

    mara = [];
    const maraScale = 0.0003;

    const beakLength = 40
    const tipLength = 8

    const maraShape = new THREE.Shape();
    maraShape.moveTo(maraScale * 5,maraScale * 5 );
    maraShape.bezierCurveTo(maraScale * 5,maraScale * 5,maraScale * 4, 0, 0, maraScale * -tipLength );
    maraShape.bezierCurveTo(- maraScale * 6, 0,- maraScale * 6,maraScale * 7, - maraScale * 6,maraScale * 7 );
    maraShape.bezierCurveTo(- maraScale * 6,maraScale * 11,- maraScale * 3,maraScale * 15.4,maraScale * 5,maraScale * beakLength );
    maraShape.bezierCurveTo(maraScale * 12,maraScale * 15.4,maraScale * 16,maraScale * 11,maraScale * 16,maraScale * 7 );
    maraShape.bezierCurveTo(maraScale * 16,maraScale * 7,maraScale * 16, 0,maraScale * 10, maraScale * -tipLength );
    maraShape.bezierCurveTo(maraScale * 7, 0,maraScale * 5,maraScale * 5,maraScale * 5,maraScale * 5 );

    const maraGeometry = new THREE.ShapeGeometry(maraShape)
    maraGeometry.center = (5 * maraScale, 9.5 * maraScale, 0)
    maraGeometry.rotateZ(Math.PI/2)
    maraGeometry.rotateY(Math.PI/2)

    for (let i = 0; i < numberOfMara; i++) {
        let lat = getRandomBell(40, 140, 5)
        let lng = getRandomInt(0, 359)

        let maraMaterial
        let darkMara = new THREE.MeshLambertMaterial({
            color: 0x222222, 
            side: DoubleSide,
        })
        let plainMara = new THREE.MeshLambertMaterial({
            color: 0x333333, 
            side: DoubleSide,
        })
        let lightMara = new THREE.MeshLambertMaterial({
            color: 0x444444, 
            side: DoubleSide,
        })

        if (i <= numberOfMara / 3) {
            maraMaterial = darkMara
        } else if (i < numberOfMara / 3 * 2) {
            maraMaterial = plainMara
        } else maraMaterial = lightMara

        mara.push(new Gutt(lat, lng, maraGeometry, maraMaterial, mara))
    }

    //Dat.GUI
    const gui = new GUI()
    let parameters = {
        gutt_alignment: 0.7,
        gutt_alignment_perception_distance: 0.2,
        gutt_cohesion: 0.6,
        gutt_cohesion_perception_distance: 0.4,
        gutt_separation: 0.6,
        gutt_separation_perception_distance: 0.03,
        gutt_flee: 10,
        gutt_flee_perception_distance: 0.1,
        gutt_feed: 0.3,
        gutt_feed_perception_distance: 1,
        gutt_max_force: 0.0005,
        gutt_max_speed: 0.01,

        mara_alignment: 0.1,
        mara_alignment_perception_distance: 0.6,
        mara_cohesion: 0.1,
        mara_cohesion_perception_distance: 0.6,
        mara_separation: 0.4,
        mara_separation_perception_distance: 0.5,
        mara_hunt: 0.75,
        mara_hunt_perception_distance: 0.8,
        mara_max_force: 0.001,
        mara_max_speed: 0.04,
    }

    const parameterFolder = gui.addFolder('Gutta parameters')
        parameterFolder.add(parameters, 'gutt_alignment', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_alignment_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_cohesion', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_cohesion_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_separation', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_separation_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_flee', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_flee_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_feed', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_feed_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_max_force', 0, 0.001, 0.00001)
        parameterFolder.add(parameters, 'gutt_max_speed', 0, 0.1, 0.001)
    parameterFolder.close()

    const parameterFolder2 = gui.addFolder('Mara parameters')
        parameterFolder2.add(parameters, 'mara_alignment', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_alignment_perception_distance', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_cohesion', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_cohesion_perception_distance', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_separation', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_separation_perception_distance', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_hunt', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_hunt_perception_distance', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_max_force', 0, 0.01, 0.0001)
        parameterFolder2.add(parameters, 'mara_max_speed', 0, 0.1, 0.001)
    parameterFolder2.close()
    if (version !== 0) gui.hide() //set to 3 to enable for developer mode
}

//CREATE LIGHTS
const ambient = new THREE.AmbientLight(0xffffff, 0.02); //0.01
scene.add(ambient);

const spotlight = new THREE.SpotLight(0xefebd8, 0);
spotlight.penumbra = 0.8
spotlight.angle = Math.PI / 4
scene.add(spotlight);

//CREATE CONTEXTS
contexts.push([planetTagData, planetTagData.length, planetConnections, jaraniusConnections, 5.01])

contexts.push([spiralTagData, contexts[contexts.length - 1][1] + spiralTagData.length, spiralConnections, spiralDynamicsConnections, 7.01])

contexts.push([planetNuggetData, contexts[contexts.length - 1][1] + planetNuggetData.length, , , 5.01])

//CREATE GUTTA STATS
const guttaStats = document.querySelector('#guttaStats');
const statsDisplay = document.createElement('div');

function refreshStats() {
    statsDisplay.innerHTML = "Number of munches: " + munch + "<br>Average hunger: " + Math.round(totalHungerAtMunch/munch * 100) / 100 + "<br><br>Number of kills: " + kills + "<br>Average hunger: " + Math.round(totalHungerAtKill/kills * 100) / 100
    guttaStats.appendChild(statsDisplay)
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
    const intersects = raycaster.intersectObjects(pinPositions);

    hoverPins(intersects)
}

//EVENTS KEYBOARD
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    const keyCode = event.which;

    //Slide control
    if (keyCode === 33 || keyCode === 37) { // left arrow
        const prevButton = document.querySelector("[data-carousel-button='prev']");
        handleCarouselButton(prevButton);
    }
    if (keyCode === 34 || keyCode === 39) { // right arrow
        const nextButton = document.querySelector("[data-carousel-button='next']");
        handleCarouselButton(nextButton);
    }
    if (keyCode == 116) { 
        console.log("play")
    }
    if (keyCode == 190) { 
        activeCarousel.style.display = "none"
    }


    //Light control
    if (keyCode == 49) { 
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
    }

    //Stats display
    if (keyCode == 71) { //G
        if (fpsContainer.style.display == "block") {
            fpsContainer.style.display = "none"
            guttaStats.style.display = "none"
        } else {
            fpsContainer.style.display = "block"
            guttaStats.style.display = "block" 
        }
    }

    //Node management
    if (keyCode == 65) { //A
        selectedNodes.length = 0
    }

    if (keyCode == 90) { //Z
        if (selectedNode !== null) {
            if (selectedNodes.indexOf(selectedNode) == -1) {
                selectedNodes.push(selectedNode)
            }
            console.log(selectedNodes)
        }
    }
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
    if (keyCode == 70) { //F
        if (fastMove == true) {
            fastMove = false
        } else {
            fastMove = true
        }
    }
    
   /*  if (keyCode == 78) { //N
        const tempStore = []
        const context = contexts[selectedContext][0]
            context.push(context[selectedNode])
            tempStore.push(context[selectedNode])
            context[selectedNode].id = "set new"
            context[selectedNode].text = "new text"
            tempStore[0].text = "new text"
            context[selectedNode].lat -=1
            tempStore[0].lat -=1
            context[selectedNode].slides = undefined

            createTags(tempStore, planetContent, 5) 
    } */

    if (keyCode == 81) { //Q
        let output = ""
        const context = contexts[selectedContext][0]
        for (let i = 0; i < context.length; i++) {
            output = output + "    {id: \"" + context[i].id + "\", text: " + JSON.stringify(context[i].text) + ", lat: " + context[i].lat + ", lng: " + context[i].lng + ", color: " + context[i].color + ", size: " + context[i].size + ", slides: " + context[i].slides + "},\n"
        }
        console.log(output)
    }
    if (keyCode == 83) { //S
        if (spiralActivated == false) {
            createSpiral()
        } else {
            spiralActivated = false
            scene.remove(spiral)
        }
    }
    if (keyCode == 87) { //W
        const context = [contexts[selectedContext][0], contexts[selectedContext][2], contexts[selectedContext][3], contexts[selectedContext][4]]
        context[2].clear()
        const curveThickness = 0.0002
        const curveRadiusSegments = 3
        const curveMaxAltitude = 0.03
        const curveMinAltitude = 5.01
        createConnections(context[0], context[1], curveThickness, curveRadiusSegments, curveMaxAltitude, context[3], context[2])
        
    } 
    if (keyCode == 187) { //+
        let originalSize = 0
        let size = 0
        let context = {context: contexts[selectedContext][0]}
        let indexModifier
                if (selectedContext > 0) {
                    indexModifier = contexts[selectedContext - 1][1]
                } else indexModifier = 0
        if (selectedNode)
            originalSize = pins[selectedNode].originalSize
            context.context[selectedNode - indexModifier].size += 5
            size = context.context[selectedNode - indexModifier].size
            selectedPin.scale.set(size / originalSize, size / originalSize, size / originalSize)
            selectedBox.scale.set(size / originalSize, size / originalSize, size / originalSize)
    }
    if (keyCode == 189) { //-
        let originalSize = 0
        let size = 0
        let context = {context: contexts[selectedContext][0]}
        let indexModifier
                if (selectedContext > 0) {
                    indexModifier = contexts[selectedContext - 1][1]
                } else indexModifier = 0
        if (selectedNode)
            originalSize = pins[selectedNode].originalSize
            context.context[selectedNode - indexModifier].size -= 5
            size = context.context[selectedNode - indexModifier].size
            selectedPin.scale.set(size / originalSize, size / originalSize, size / originalSize)
            selectedBox.scale.set(size / originalSize, size / originalSize, size / originalSize)
    } 
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    const keyCode = event.which;

    if (selectedNodes.length > 0) {
        const context = {context: contexts[selectedContext][0], length: contexts[selectedContext][1], radius: contexts[selectedContext][4]}

        for (let node = 0; node < selectedNodes.length; node++) {
            if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
                let posLatLng = convertCartesiantoLatLng(pins[selectedNodes[node]].pin.position.x, pins[selectedNodes[node]].pin.position.y, pins[selectedNodes[node]].pin.position.z);
                // up
                if (keyCode == 38) {
                    if (fastMove) posLatLng.lat -= .4;
                    posLatLng.lat -= .1;
                    // down
                } else if (keyCode == 40) {
                    if (fastMove)posLatLng.lat += .4;
                    posLatLng.lat += .1;
                    // left
                } else if (keyCode == 37) {
                    if (fastMove)posLatLng.lng -= .4;
                    posLatLng.lng -= .1;
                    // right
                } else if (keyCode == 39) {
                    if (fastMove)posLatLng.lng += .4;
                    posLatLng.lng += .1;
                }

                const pinSphereRadius = context.radius
                const boxSphereRadius = context.radius + 0.04
                const tagSphereRadius = context.radius + 0.05
                
                const pinPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, pinSphereRadius);
                const boxPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, boxSphereRadius);
                const tagPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, tagSphereRadius);
                pins[selectedNodes[node]].pin.position.set(pinPos.x, pinPos.y, pinPos.z);
                tags[selectedNodes[node]].box.position.set(boxPos.x, boxPos.y, boxPos.z);
                tags[selectedNodes[node]].tag.position.set(tagPos.x, tagPos.y, tagPos.z);
                posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng - 180)

                let indexModifier
                if (selectedContext > 0) {
                    indexModifier = contexts[selectedContext - 1][1]
                } else indexModifier = 0
                context.context[selectedNodes[node] - indexModifier].lat = posLatLng.lat.toFixed(1)
                context.context[selectedNodes[node] - indexModifier].lng = posLatLng.lng.toFixed(1)
            }
        }
    } else if (selectedPin != null) {
        const context = {context: contexts[selectedContext][0], length: contexts[selectedContext][1], radius: contexts[selectedContext][4]}

        if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
            let posLatLng = convertCartesiantoLatLng(selectedPin.position.x, selectedPin.position.y, selectedPin.position.z);
            // up
            if (keyCode == 38) {
                if (fastMove) posLatLng.lat -= .4;
                posLatLng.lat -= .1;
                // down
            } else if (keyCode == 40) {
                if (fastMove) posLatLng.lat += .4;
                posLatLng.lat += .1;
                // left
            } else if (keyCode == 37) {
                if (fastMove) posLatLng.lng -= .4;
                posLatLng.lng -= .1;
                // right
            } else if (keyCode == 39) {
                if (fastMove) posLatLng.lng += .4;
                posLatLng.lng += .1;
            }

            const pinSphereRadius = context.radius
            const boxSphereRadius = context.radius + 0.04
            const tagSphereRadius = context.radius + 0.05
            
            const pinPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, pinSphereRadius);
            const boxPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, boxSphereRadius);
            const tagPos = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, tagSphereRadius);
            selectedPin.position.set(pinPos.x, pinPos.y, pinPos.z);
            selectedBox.position.set(boxPos.x, boxPos.y, boxPos.z);
            selectedTag.position.set(tagPos.x, tagPos.y, tagPos.z);
            posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng - 180)

            let indexModifier
                if (selectedContext > 0) {
                    indexModifier = contexts[selectedContext - 1][1]
                } else indexModifier = 0
                context.context[selectedNode - indexModifier].lat = posLatLng.lat.toFixed(1)
                context.context[selectedNode - indexModifier].lng = posLatLng.lng.toFixed(1)
        }
    }     
};

//EVENTS MOUSE
function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onClick(event) {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(pinPositions);
    if (intersects.length > 0) {
        selectedPin = intersects[0].object;
        selectedNode = pinPositions.findIndex((object) => object==intersects[0].object)
        if (tags.length > selectedNode){
            selectedBox = tags[selectedNode].box;
            selectedTag = tags[selectedNode].tag;
        }

        const currentContext = selectedContext
        for (let i = 0; i < 100; i++){
            if (selectedNode < contexts[i][1]) {
                selectedContext = i
                if (selectedContext !== currentContext) {
                    selectedNodes.length = 0
                }
                break
            }
        }

        let indexModifier
            if (selectedContext > 0) {
                indexModifier = contexts[selectedContext - 1][1]
            } else indexModifier = 0

        let context = contexts[selectedContext][0]

        if (camera.position.distanceTo(selectedPin.position) < 4 && context[selectedNode - indexModifier].slides !== undefined) {
            const selectedCarousel = context[selectedNode - indexModifier].slides
            pushContent(selectedCarousel)
            activeCarousel = document.querySelector(`.carousel.s1`)
            activeCarousel.style.display = "block"
        }
    }
}

/* function touch2Mouse(e)
{
  var theTouch = e.changedTouches[0];
  var mouseEv;

  switch(e.type)
  {
    case "touchstart": mouseEv="mousedown"; break;  
    case "touchend":   mouseEv="mouseup"; break;
    case "touchmove":  mouseEv="mousemove"; break;selectedNodes
    default: return;
  }

  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  theTouch.target.dispatchEvent(mouseEvent);

  e.preventDefault();
} */

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('click', onClick);
window.addEventListener("touchstart", onClick);
/* document.addEventListener("touchstart", touch2Mouse, true);
document.addEventListener("touchmove", touch2Mouse, true);
document.addEventListener("touchend", touch2Mouse, true); */

//TESTS
if (planetTagData.length !== planetConnections.length) {
    console.log("ERROR: planetTagData.length !== planetConnections.length")
}

//ANIMATIONLOOP
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

                //DOLLY ROTATE
                /* dollyLng += xInput * 2
                dollyLat += yInput
                dollyRadius += ((0.1 * buttonStates.a_button) - (0.1 * buttonStates.b_button)) * (dollyRadius - 5)
                const dollyPosit = convertLatLngtoCartesian(dollyLat, dollyLng, dollyRadius)
                dolly.position.set(dollyPosit.x, dollyPosit.y - 1.6, dollyPosit.z) */

                //JARANIUS ROTATE
                jaranius.rotation.y -= xInput / 15
                dollyLat += yInput
                dollyRadius += ((0.1 * buttonStates.a_button) - (0.1 * buttonStates.b_button)) * (dollyRadius - 5)
                const dollyPosit = convertLatLngtoCartesian(dollyLat, dollyLng, dollyRadius)
                dolly.position.set(dollyPosit.x, dollyPosit.y - 1.6, dollyPosit.z)
            }
        }
    }

    if (guttaInitialized == true) {
        species = "gutt"
        let wander
        if ((getRandomNum(0, 1) > 0.95)) {
            wander = true
        } else wander = false
        for (let i = 0; i < gutta.length; i++) {
            if (wander == true) gutta[i].calculateWander(species);
            gutta[i].calculateAlignment(species);
            gutta[i].calculateCohesion(species);
            gutta[i].calculateSeparation(species);
            gutta[i].calculateFleeing();
            gutta[i].calculateFeeding();
            gutta[i].calculateTemperature(species);
            gutta[i].move(species, i); 
        }
        species = "mara"
        for (let i = 0; i < mara.length; i++) {
            if (wander == true) mara[i].calculateWander(species);
            mara[i].calculateAlignment(species);
            mara[i].calculateCohesion(species);
            mara[i].calculateSeparation(species);
            mara[i].calculateHunting();
            mara[i].calculateTemperature(species);
            mara[i].move(species);
        }
    }

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

        //console.log("x: ", camera.position.x, "y: ", camera.position.y, "z: ", camera.position.z)
        if (camera.position.z > -15 && camera.position.z < 15) start = false
    
        controls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);  //  /1
        controls.zoomSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet) / 3;//  /3;

        if (sign) {
            signRotationVector.set(camera.position.x, camera.position.y, camera.position.z)
            signRotationVector.normalize()
            sign.lookAt(signRotationVector.x, signRotationVector.y, signRotationVector.z ) 
        }

        refreshStats();

        scanPins();
    }

    if (introTuneLength) {
        if (camera.position.z > 15 && start == true) {
            camera.position.z -= 0.0213 * Math.pow(camera.position.z - 10, 1.35) / introTuneLength
        }
        if (camera.position.z < -15 && start == true) {
            camera.position.z += 0.213 * Math.pow(Math.abs(camera.position.z) - 10, 1.35) / introTuneLength
        }
        if (start == true) {
            camera.position.x += 0.4 / introTuneLength
            camera.position.y += 0.2 / introTuneLength
        }
    }

    // This is typically done in the render loop :  UI test
    ThreeMeshUI.update();

    controls.update();

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
}

animate()


