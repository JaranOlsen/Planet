//  IMPORT DEPENDENCIES
import * as THREE from 'three';
import { Float32BufferAttribute, FrontSide, DoubleSide } from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js'; 
import { GUI } from 'dat.gui'

//  IMPORT SCRIPTS
import { createImages, createTags, pins, tags, pinPositions, createConnections } from './mindmap.js';
import { getRandomNum, getRandomBell, getRandomInt, convertLatLngtoCartesian, convertCartesiantoLatLng, constrainLatLng } from './mathScripts.js'
import { tagPlanetData } from './data/planetTagData.js'
import { tagPlanetConnections } from './data/planetConnectionData.js'
import { tagPlanetSpecialConnections } from './data/planetSpecialConnectionData.js'
import { imgPlanetData } from './data/planetImageData.js'
import { tagSpiralData } from './data/spiralTagData.js';
import { tagSpiralConnections } from './data/spiralConnectionData.js';
import { imgSpiralData } from './data/spiralImageData.js'
import { palette } from './data/palette.js'
import { pushContent } from './content.js';


//  IMPORT SHADERS
import atmosphericLightVertexShader from '../shaders/atmosphericLightVertex.glsl';
import atmosphericLightFragmentShader from '../shaders/atmosphericLightFragment.glsl';
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl';
import spiralVertexShader from '../shaders/spiralVertex.glsl';
import spriralFragmentShader from '../shaders/spiralFragment.glsl';

//  IMPORT TEXTURES

    // ||Diffuse - 
//import diffuseTexture from "../img/textures/diffuse4k.webp"
import diffuseTexture from "../img/textures/diffuse8kvibrance.webp"

    // ||Normals - White = high altitude - see https://www.youtube.com/watch?v=YJqWHsllczY&t=1s on how to best generate
//import normalTexture from "../img/textures/normals8ktest.webp"
import normalTexture from "../img/textures/normal2k.webp"

    // ||Roughness - Green (white) = high roughness (green channel - see documentation)
import roughnessTexture from "../img/textures/roughness2k.webp"

import cloudsTexture from "../img/textures/clouds4k.webp"
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

// IMPORT MODELS
import signModel from "../models/sign.glb"

const canvas = document.querySelector('#c');
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
let showContent = true;
let fastMove = false;

let signRotationVector = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z)

const middleOfPlanet = new THREE.Vector3(0, 0, 0);
const spiral = new THREE.Object3D()
let VRenabled = false

//Loading Manager
const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	//console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

const progressBar = document.getElementById('progress-bar');
manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    progressBar.value = (itemsLoaded / itemsTotal ) * 100
	//console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

const progressBarContainer = document.querySelector('.progress-bar-container')
manager.onLoad = function ( ) {
    progressBarContainer.style.display = 'none';
	//console.log( 'Loading complete!');
};
manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};

//start intro
let start = false
const introTune = document.getElementById("introTune");
    introTune.preload = "auto";
    introTune.currentTime = 0;
    introTune.volume = 1;
const introTuneLength = introTune.duration

const playButton = document.getElementById("playbutton")
const credits = document.getElementById("credits")
playButton.addEventListener("click", () => {
        introTune.play();
        start = true;
        playButton.style.display = "none";
        skipButton.style.display = "none";
        enableVRbutton.style.display = "none";
        credits.style.display = "none";
        
    })

//skip intro
const skipButton = document.getElementById("skipbutton")
skipButton.addEventListener("click", () => {
        playButton.style.display = "none";
        skipButton.style.display = "none";
        credits.style.display = "none";
        camera.position.z = 15;
    })


//Slide carousel
let activeCarousel

const buttons = document.querySelectorAll("[data-carousel-button]")

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
        }
    })
})

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

//create starfield
const starGeometry = new THREE.BufferGeometry()
const starGeoR5 = new THREE.BufferGeometry()
const starGeoR10 = new THREE.BufferGeometry()
const starGeoR15 = new THREE.BufferGeometry()
const starGeoR20 = new THREE.BufferGeometry()
const starGeoB5 = new THREE.BufferGeometry()
const starGeoB10 = new THREE.BufferGeometry()
const starGeoB15 = new THREE.BufferGeometry()
const starGeoB20 = new THREE.BufferGeometry()

const starMaterial = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starW),
    transparent: true,
    fog: false
})
const starMatR5 = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starR5),
    transparent: true,
    fog: false
})
const starMatR10 = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starR10),
    transparent: true,
    fog: false
})
const starMatR15 = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starR15),
    transparent: true,
    fog: false
})
const starMatR20 = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starR20),
    transparent: true,
    fog: false
})
const starMatB5 = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starB5),
    transparent: true,
    fog: false
})
const starMatB10 = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starB10),
    transparent: true,
    fog: false
})
const starMatB15 = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starB15),
    transparent: true,
    fog: false
})
const starMatB20 = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader(manager).load(starB20),
    transparent: true,
    fog: false
})

const starVertices = []
for (let i = 0; i < 5000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertices.push(x, y, z)
    }
}
const starVertR5 = []
for (let i = 0; i < 1000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertR5.push(x, y, z)
    }
}
const starVertR10 = []
for (let i = 0; i < 500; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertR10.push(x, y, z)
    }
}
const starVertR15 = []
for (let i = 0; i < 100; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertR15.push(x, y, z)
    }
}
const starVertR20 = []
for (let i = 0; i < 25; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertR20.push(x, y, z)
    }
}
const starVertB5 = []
for (let i = 0; i < 1000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertB5.push(x, y, z)
    }
}
const starVertB10 = []
for (let i = 0; i < 500; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertB10.push(x, y, z)
    }
}
const starVertB15 = []
for (let i = 0; i < 100; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertB15.push(x, y, z)
    }
}
const starVertB20 = []
for (let i = 0; i < 25; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertB20.push(x, y, z)
    }
}

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

//create solar system
const center = new THREE.Object3D();
scene.add(center);

    // pivots
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
    pivot4.rotation.y = 5 * Math.PI / 3;
    pivot4.rotation.x = -0.41;

    center.add(pivot1);
    center.add(pivot2);
    center.add(pivot3);
    center.add(pivot4);

//create Jaranius
const textureLoader = new THREE.TextureLoader(manager)
const jaraniusGeometry = new THREE.SphereGeometry(5, 250, 250);
jaraniusGeometry.computeBoundingSphere();
const jaranius = new THREE.Mesh(
    jaraniusGeometry,
    new THREE.MeshStandardMaterial({ //Note that for best results you should always specify an environment map when using this material.
        map: textureLoader.load(diffuseTexture),
        normalMap: textureLoader.load(normalTexture),  //make extreme variant to test properly
        roughnessMap: textureLoader.load(roughnessTexture),  //works well
        normalScale: new THREE.Vector2(3, 3),  //needs testing
        metalness: 0,  //works well
        roughness: 0.85,  //works well
        flatShading: false,
        side: FrontSide,
    })
)
scene.add(jaranius)

//create cloud layer
const cloudsMaterial = new THREE.MeshLambertMaterial({
    map: textureLoader.load(cloudsTexture),
    transparent: true,
    side: DoubleSide,
    opacity: 0.8,
})
const clouds = new THREE.Mesh(
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

//create pictureBoxes
const planetContent = new THREE.Object3D
jaranius.add(planetContent)

for (let i = 0; i < imgPlanetData.length; i++) {
    createImages(imgPlanetData[i].src, imgPlanetData[i].lat, imgPlanetData[i].lng - 180, imgPlanetData[i].size / 500, imgPlanetData[i].radius, planetContent);
}
for (let i = 0; i < imgSpiralData.length; i++) {
    createImages(imgSpiralData[i].src, imgSpiralData[i].lat, imgSpiralData[i].lng - 180, imgSpiralData[i].size / 500, imgSpiralData[i].radius, spiral);
}

//create tags
createTags(tagPlanetData, planetContent, 5)

createTags(tagSpiralData, spiral, 7)

//create connections
const curveThickness = 0.0001
const curveRadiusSegments = 3
const curveMaxAltitude = 0.03
const curveMinAltitude = 5.01
const jaraniusConnections = new THREE.Object3D()
jaranius.add(jaraniusConnections)
let context = jaraniusConnections
createConnections(tagPlanetData, tagPlanetConnections, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, false)
createConnections(tagPlanetData, tagPlanetSpecialConnections, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, true)


const spiralConnections = new THREE.Object3D()
spiral.add(spiralConnections)
let context2 = spiralConnections
createConnections(tagSpiralData, tagSpiralConnections, 0.0002, curveRadiusSegments, 0.1, 7.01, context2, false)

//create sign

let sign = new THREE.Object3D()
planetContent.add(sign)
sign.position.set(0, -5.05, 0)
const loader = new GLTFLoader(manager);
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

//create sun
const sunRadius = 5
const sunRadianceGeo = new THREE.SphereGeometry(sunRadius, 50, 50)
const sunMat = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader(manager).load(sunTexture)
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

//create moons
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
            map: new THREE.TextureLoader(manager).load(moons[i].texture),
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

//create Spiral
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


//create Gutta
const numberOfGutta = 100;
const guttaScale = 0.0003;

const guttaMaterial = new THREE.MeshLambertMaterial({
    color: 0xbbddcc, 
    side: DoubleSide,
}) 

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

class Gutt {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;

        this.gutt = new THREE.Mesh(guttaGeometry, guttaMaterial)
 
        this.pos = new THREE.Vector2(lat, lng)
        this.velocity = new THREE.Vector2(getRandomNum(0, 0), getRandomNum(0, 1)).setLength(0.001)
        this.acceleration = new THREE.Vector2
        this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5.1)
        this.presentHeading
        this.originalHeading
  
        this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)

        this.wander = new THREE.Vector2(0, 0)
        this.alignment = new THREE.Vector2(0, 0)
        this.cohesion = new THREE.Vector2(0, 0)
        this.separation = new THREE.Vector2(0, 0)
        this.avoidance = new THREE.Vector2(0, 0)

        jaranius.add(this.gutt)
    }

    move() {
        this.originalHeading = Math.atan2(this.velocity.x, this.velocity.y)

        this.acceleration.set(0, 0)
        this.alignment.multiplyScalar(parameters.alignment)
        this.cohesion.multiplyScalar(parameters.cohesion)
        this.separation.multiplyScalar(parameters.separation)
        
        this.acceleration.add( this.wander )
        this.acceleration.add( this.alignment )
        this.acceleration.add( this.cohesion )
        this.acceleration.add( this.separation )
        this.acceleration.add( this.avoidance )

        this.velocity.add(this.acceleration)
        this.velocity.clampLength(-parameters.max_speed, parameters.max_speed)
        this.velocity.setLength(parameters.max_speed)  // remove this at some point
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
        
        this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5.1)
        this.cartesianVelocity = convertLatLngtoCartesian(this.velocity.x, this.velocity.y, 5.1)
        
        this.presentHeading = Math.atan2(this.velocity.x, this.velocity.y)
        
        this.cp = new THREE.Vector3
        this.cp.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)
        this.gutt.lookAt(this.cp)
        this.gutt.rotateZ(this.presentHeading - this.originalHeading)
        
        this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)
    }

    calculateWander() {
        this.wander.set(getRandomNum(-0.0001, 0.0001), getRandomNum(-0.0001, 0.0001))
        this.wander.clampLength(-parameters.max_force, parameters.max_force)
    }

    calculateAlignment() {
        let counter = 0
        this.alignment.set(0, 0)
        for (let i = 0; i < gutta.length; i++) {
            if (gutta[i] != this && this.gutt.position.distanceTo(gutta[i].gutt.position) < parameters.alignment_perception_distance) {
                this.alignment.add(gutta[i].velocity)
                counter += 1
            }
        }
        if (counter > 0 ) {
            this.alignment.set(this.alignment.x / counter, this.alignment.y / counter)
            this.alignment.sub(this.velocity)
            this.alignment.clampLength(-parameters.max_force, parameters.max_force)
        }
    }

    calculateCohesion() {
        let counter = 0
        this.cohesion.set(0, 0)
        for (let i = 0; i < gutta.length; i++) {
            if (gutta[i] != this && this.gutt.position.distanceTo(gutta[i].gutt.position) < parameters.cohesion_perception_distance) {
                this.cohesion.add(gutta[i].pos)
                counter += 1
            }
        }
        if (counter > 0 ) {
            this.cohesion.set(this.cohesion.x / counter, this.cohesion.y / counter)
            this.cohesion.sub(this.pos)
            this.cohesion.clampLength(-parameters.max_force, parameters.max_force)
        }
    }

    calculateSeparation() {
        let counter = 0
        this.separation.set(0, 0)
        for (let i = 0; i < gutta.length; i++) {
            if (gutta[i] != this && this.gutt.position.distanceTo(gutta[i].gutt.position) < parameters.separation_perception_distance) {
                let difference = new THREE.Vector2(this.pos.x - gutta[i].pos.x, this.pos.y - gutta[i].pos.y)
                difference.divideScalar(this.gutt.position.distanceTo(gutta[i].gutt.position))
                this.separation.add(difference)
                counter += 1
            }
        }
        if (counter > 0 ) {
            this.separation.set(this.separation.x / counter, this.separation.y / counter)
            this.separation.clampLength(-parameters.max_force, parameters.max_force)
        }
    }

    calculateTemperature() {
        this.avoidance.set(0, 0)
        if (this.pos.x < 40) {
            this.avoidance.set((Math.pow(40 - this.pos.x, 2)) / 100000, 0)
            this.avoidance.clampLength(-parameters.max_force, parameters.max_force)
        }
        if (this.pos.x > 140) {
            this.avoidance.set(-(Math.pow(140 - this.pos.x, 2)) / 100000, 0)
            this.avoidance.clampLength(-parameters.max_force, parameters.max_force)
        }
    }
}

let gutta = [];
for (let i = 0; i < numberOfGutta; i++) {
    let lat = getRandomBell(40, 140, 5)
    let lng = getRandomInt(0, 359)
    gutta.push(new Gutt(lat, lng))
}

//Dat.GUI
const gui = new GUI()
let parameters = {
    alignment: 0.016,
    alignment_perception_distance: 0.435,
    cohesion: 0.754,
    cohesion_perception_distance: 0.887,
    separation: 0.765,
    separation_perception_distance: 0.225,
    max_force: 0.0029,
    max_speed: 0.01,
}

const parameterFolder = gui.addFolder('parameters')
parameterFolder.add(parameters, 'alignment', 0, 0.1, 0.0001)
parameterFolder.add(parameters, 'alignment_perception_distance', 0, 1, 0.001)
parameterFolder.add(parameters, 'cohesion', 0, 1, 0.001)
parameterFolder.add(parameters, 'cohesion_perception_distance', 0, 1, 0.001)
parameterFolder.add(parameters, 'separation', 0, 1, 0.001)
parameterFolder.add(parameters, 'separation_perception_distance', 0, 1, 0.001)
parameterFolder.add(parameters, 'max_force', 0, 0.01, 0.0001)
parameterFolder.add(parameters, 'max_speed', 0, 0.1, 0.001)
parameterFolder.close()
gui.hide()


//lights
const ambient = new THREE.AmbientLight(0xffffff, 0.02); //0.01
scene.add(ambient);

const spotlight = new THREE.SpotLight(0xefebd8, 0);
spotlight.penumbra = 0.8
spotlight.angle = Math.PI / 4
scene.add(spotlight);
let spotlightIntensity = 0.5

const jaraniusLight = new THREE.PointLight(0xffffff, 0.5);
jaraniusLight.position.set(0, 0, 0);
jaranius.add(jaraniusLight);

//create Contexts
contexts.push([tagPlanetData, tagPlanetData.length, tagPlanetConnections, jaraniusConnections, 5.01])

contexts.push([tagSpiralData, contexts[contexts.length - 1][1] + tagSpiralData.length, tagSpiralConnections, spiralConnections, 7.01])

//create fps counter
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


// Interaction functions
function hoverPin() {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(pinPositions);

    //unhovered
    if (intersects.length == 0) {
        for (let i = 0; i < pins.length; i++) {
            pins[i].pin.material.color.set(pins[i].originalColor);
        }
    }

    //hovered
    for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
    }
}

// EVENTS KEYBOARD
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    const keyCode = event.which;

    if (keyCode == 65) { //A
        selectedNodes.length = 0
    }
    if (keyCode == 73) { //I
        pushContent(0)
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
    if (keyCode == 76) { //L
        if (spotlight.intensity == 0) {
            spotlight.intensity = spotlightIntensity
        } else if (spotlight.intensity == spotlightIntensity) {
            spotlight.intensity = spotlightIntensity * 2
        } else if (spotlight.intensity == spotlightIntensity * 2) {
            spotlight.intensity = spotlightIntensity * 3
        } else if (spotlight.intensity == spotlightIntensity * 3) {
            spotlight.intensity = 0
        }
        
    }

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
        selectedBox = tags[selectedNode].box;
        selectedTag = tags[selectedNode].tag;
        
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
            const selectedCarousel = tagPlanetData[selectedNode].slides
            pushContent(selectedCarousel)
            activeCarousel = document.querySelector(`.carousel.s1`)
            activeCarousel.style.display = "block"
        }
    }
}

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('click', onClick);
window.addEventListener("touchstart", onClick);

//debug
if (tagPlanetData.length !== tagPlanetConnections.length) {
    console.log("ERROR: tagPlanetData.length !== tagPlanetConnections.length")
}

//ANIMATIONLOOP

function animate() {

    renderer.setAnimationLoop( render );

}

function render(time) {
    time *= 0.001;
            
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    for (let i = 0; i < gutta.length; i++) {
        gutta[i].calculateWander();
        gutta[i].calculateAlignment();
        gutta[i].calculateCohesion();
        gutta[i].calculateSeparation();
        gutta[i].calculateTemperature();
        gutta[i].move();
    }

    hoverPin();

    renderer.render(scene, camera);

    const camPos = camera.position
    const camRot = camera.rotation
    spotlight.position.set(camPos.x, camPos.y, camPos.z);
    spotlight.rotation.set(camRot.x, camRot.y, camRot.z);
    
    center.rotation.y += -0.00001;
    pivot1.rotation.y += -0.0003;
    pivot2.rotation.y += -0.00003;
    pivot3.rotation.y += -0.000009;
    pivot4.rotation.y += 0.0001;
    clouds.rotation.y += 0.00001;

    if (camera.position.z > 15 && start == true) {
        camera.position.z -= 0.0213 * Math.pow(camera.position.z - 10, 1.35) / introTuneLength
        jaranius.rotation.y += 0.0005;
    }
    if (camera.position.z < -15 && start == true) {
        camera.position.z += 0.213 * Math.pow(Math.abs(camera.position.z) - 10, 1.35) / introTuneLength
        jaranius.rotation.y += 0.0005;
    }
  
    controls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);
    controls.zoomSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet) / 3;

    if (sign) {
        signRotationVector.set(camera.position.x, camera.position.y, camera.position.z)
        signRotationVector.normalize()
        sign.lookAt(signRotationVector.x, signRotationVector.y, signRotationVector.z ) 
    }

    controls.update();
}

animate()

