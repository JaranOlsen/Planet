//  IMPORT DEPENDENCIES
import * as THREE from 'three'
import { Float32BufferAttribute, FrontSide, DoubleSide, Vector2 } from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { FlyControls } from 'three/addons/controls/FlyControls.js'

//  IMPORT SCRIPTS
import { createImages, createTags, hoveredPins, intersectObjectsArray, createConnections, hoverPins, instantiateNugget } from './mindmap.js'
import { getRandomNum, convertLatLngtoCartesian, convertCartesiantoLatLng, constrainLatLng, easeInOutQuad } from './mathScripts.js'
import { pushContent, pushVRContent, handleCarouselButton } from './content.js'
import { initializeVersion } from './versions.js'
import { creation } from './creation.js'
import { updateGutta, togglePerceptionCircles } from './gutta.js'
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
import { subtitles_carlrogers as subtitles} from './data/subtitles.js'



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

const baseMovementSpeed = 1;
let baseMovementSpeedModifier = 1;
const baseRollSpeed = Math.PI / 24;
let baseRollSpeedModifier = 1;
const flyControls = new FlyControls(camera, renderer.domElement);
flyControls.domElement = renderer.domElement;
flyControls.movementSpeed = baseMovementSpeed * baseMovementSpeedModifier;
flyControls.rollSpeed = baseRollSpeed * baseRollSpeedModifier;
flyControls.autoForward = false;
flyControls.dragToLook = false;
flyControls.enabled = false;
flyControls.minDistance = 5.15;

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

export let slideshowStatus = {
    activeSlideshow: undefined,
    activeSlideshowLength: undefined,
    activeSlide: undefined,
    activeSlideLength: undefined,
    activeSubSlide: undefined
}

window.actionsCompleted = true
window.currentTransitionEndHandler = null;

window.onload = function() {
    let allElements = document.querySelectorAll('#slide .appear');
    allElements.forEach(function(element) {
      element.style.opacity = "1";
    });
  };
  

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
let atmosMaterial
const planetContent = new THREE.Object3D()
export function createJaranius(diffuseTexture, normalTexture, roughnessTexture, cloudsTexture, cloudsNormal) {
    jaraniusInitialized = true
    const jaraniusSegments = 200
    
    const jaraniusGeometry = new THREE.SphereGeometry(5, jaraniusSegments, jaraniusSegments);
    jaraniusGeometry.computeBoundingSphere();
    jaranius = new THREE.Mesh(
        jaraniusGeometry,
        new THREE.MeshStandardMaterial({ 
            map: textureLoader2.load(diffuseTexture),
            normalMap: textureLoader2.load(normalTexture),
            roughnessMap: textureLoader2.load(roughnessTexture),  //works well
            normalScale: new THREE.Vector2(5, 5),  //works well
            metalness: 0,  //works well
            //roughness: 1,  //0.85 works well
            flatShading: false,
            side: FrontSide,
        })
    )
    jaranius.name = "jaranius"
    jaraniusCenter.add(jaranius)

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

    createTags(contexts[3].tagData, contexts[3].tagDestination, contexts[3].radius, 3, indexMod)

}




//INTERACTION FUNCTIONS
function scanPins() {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(intersectObjectsArray);

    hoverPins(intersects)
}

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

        if (camera.position.distanceTo(selectedPin.position) < 4 && contexts[selectedContext].tagData[selectedNode].slides !== undefined && slideshowStatus.activeSlideshow == undefined) {
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
            const slideShowScreen = document.querySelector(`#slides`)
            slideShowScreen.style.display = "flex"
        }
    }
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

        if (camera.position.z > -15 && camera.position.z < 15 && introStarted == true) {
            introStarted = false
            const titleMesh = scene.getObjectByName('title')
            scene.remove(titleMesh)
        }
    
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

        sunObjectWorldPosition = sunRadiance.getWorldPosition(sunObjectWorldPosition);

        atmosphere.material.uniforms.lightPosition.value.copy(sunObjectWorldPosition);
        atmosphericLight.material.uniforms.lightPosition.value.copy(sunObjectWorldPosition);

        if (guttaStatScreen.style.display == 'block') refreshStats();

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
        // Update the fly controls
        flyControls.update(delta);

        // Check the distance from the camera to the planet center
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
        console.log("Angle: ", angle, "\nDistance: ", distance, "\nSpeed: ", flyControls.movementSpeed, "\nRoll speed: ", flyControls.rollSpeed);

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
