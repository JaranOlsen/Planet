import * as THREE from 'three';
//import * as YUKA from 'yuka';
import {Float32BufferAttribute, FrontSide, AdditiveBlending, BackSide, DoubleSide, Vector3, RGBADepthPacking, SubtractiveBlending} from 'three';
import { tagList } from './tagData.js'
import { imgList } from './imgData.js'
import { tagConnections } from './tagConnectionData.js'
import {getRandomNum, getRandomBell, getRandomInt, convertLatLngtoCartesian, convertCartesiantoLatLng} from './mathScripts.js'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js'; 

//    IMPORT SHADERS
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl';
import sunVertexShader from './shaders/sunVertex.glsl';
import sunFragmentShader from './shaders/sunFragment.glsl';

//    IMPORT TEXTURES
import diffuseTexture from "./img/terrain8k.jpg"
import normalTexture from "./img/normal8k.jpg"
import roughnessTex from "./img/roughness2k.jpg"
import clouds1Tex from "./img/clouds1.png"
import clouds1AlphaTex from "./img/clouds1alpha.jpg"
import clouds2Tex from "./img/clouds2.png"
import starTexture from "./img/star.png"
import moonTex from "./img/moon.jpg"
import moon2Tex from "./img/moon2.png"
import moon3Tex from "./img/moon3.png"
/* import flare0 from "./img/lensflare0.png"
import flare3 from "./img/lensflare3.png" */

const tagFont = "https://jaranolsen.github.io/Planet/SourceSans3_Regular.json"


const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer(
    {
        canvas,
        antialias: true,
    });

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
const tempV = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
let selectedPin = null;

const middleOfPlanet = new THREE.Vector3(0, 0, 0);


//start intro
let start = false
const introTune = document.getElementById("introTune");
    introTune.preload = "auto";
    introTune.currentTime = 1.4;
    introTune.volume = 0.25;
const introSpeech = document.getElementById("introSpeech")
    introSpeech.preload = "auto";
    introSpeech.currentTime= 1.4;

const playButton = document.getElementById("playbutton")
const credits = document.getElementById("credits")
playButton.addEventListener("click", () => {
        introTune.play();
        setTimeout(function(){ 
            introSpeech.play(); 
            }, 40000)
        start = true;
        playButton.style.display = "none";
        skipButton.style.display = "none";
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


//create Slide carousel
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

//create CSS elements
/*     const slideContainer = document.querySelector('.slides');
    slideContainer.style.display = 'none'
    const slide = document.createElement('div');
    slide.style.display = 'none';
    slide.textContent = "Idealism";
    slide.style.color = 0xffffff;
    slideContainer.appendChild(slide);
    const img = document.createElement("img");
    img.src = "./img/idealism.png";
    slideContainer.appendChild(img); */


//create starfield
const starGeometry = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({
    size: 5,
    map: new THREE.TextureLoader().load(starTexture),
    transparent: true
})

const starVertices = []
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 400) {
        starVertices.push(x, y, z)
    }
}

starGeometry.setAttribute('position', new Float32BufferAttribute(starVertices, 3))

const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

//create solar system
const center = new THREE.Object3D();
scene.add(center);

    // pivots
    const pivot1 = new THREE.Object3D();
    const pivot2 = new THREE.Object3D();
    const pivot3 = new THREE.Object3D();
    const pivot4 = new THREE.Object3D();

    pivot1.rotation.y = - Math.PI / 2.5;
    pivot2.rotation.y = 2 * Math.PI / 16;
    pivot3.rotation.y = 2 * Math.PI / 2;
    pivot4.rotation.y = 5 * Math.PI / 3;
    pivot4.rotation.x = -0.9;

    center.add(pivot1);
    center.add(pivot2);
    center.add(pivot3);
    center.add(pivot4);

//create Jaranius
const textureLoader = new THREE.TextureLoader()
let diffuse = textureLoader.load(diffuseTexture);
const jaraniusGeometry = new THREE.SphereGeometry(5, 250, 250);
jaraniusGeometry.computeBoundingSphere();
const jaranius = new THREE.Mesh(
    jaraniusGeometry,
    new THREE.MeshStandardMaterial({
        map: diffuse,
        normalMap: textureLoader.load(normalTexture),
        roughnessMap: textureLoader.load(roughnessTex),
        metalness: 0,
        flatShading: false,
        side: FrontSide,
    })
)
scene.add(jaranius)

// create cloud layer
const clouds1 = new THREE.Mesh(
    new THREE.SphereGeometry(5.03, 50, 50),
    new THREE.MeshLambertMaterial({
        alphaMap: textureLoader.load(clouds1AlphaTex),
        map: textureLoader.load(clouds1Tex),
        transparent: true,
        side: DoubleSide
    })
)
jaranius.add(clouds1)
const clouds2 = new THREE.Mesh(
    new THREE.SphereGeometry(5.04, 50, 50),
    new THREE.MeshLambertMaterial({
        //alphaMap: textureLoader.load(clouds2AlphaTex),
        map: textureLoader.load(clouds2Tex),
        transparent: true,
        side: DoubleSide,
        opacity: 0.5,
    })
)
jaranius.add(clouds2)
const clouds3 = new THREE.Mesh(
    new THREE.SphereGeometry(5.05, 50, 50),
    new THREE.MeshLambertMaterial({
        //alphaMap: textureLoader.load(clouds2AlphaTex),
        map: textureLoader.load(clouds2Tex),
        transparent: true,
        side: DoubleSide,
        opacity: 0.5,
    })
)
jaranius.add(clouds3)
clouds3.rotateY(Math.PI/2)

// create atmosphericLight
const atmosphericLight = new THREE.Mesh(
    new THREE.SphereGeometry(5.0, 250, 250),
    new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        blending: THREE.AdditiveBlending,
    })
)
atmosphericLight.position.set(0, 0, 0)
jaranius.add(atmosphericLight);

// create atmosphere
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
function instantiateImg(textureSrc, lat, lng, size) {
    const textureLoader = new THREE.TextureLoader()
    let img = textureLoader.load(textureSrc);
    const boxMat = new THREE.MeshBasicMaterial( {
        map: img,
        transparent: true,
        side: DoubleSide
    } );

    let roundingFactor = 0.01;
    let x = 0; let y = 0; 
    let width = size; 
    let height = size; 
    let shape = new THREE.Shape();
    shape.moveTo( x, y + roundingFactor );
    shape.lineTo( x, y + height - roundingFactor );
    shape.quadraticCurveTo( x, y + height, x + roundingFactor, y + height );
    shape.lineTo( x + width - roundingFactor, y + height );
    shape.quadraticCurveTo( x + width, y + height, x + width, y + height - roundingFactor );
    shape.lineTo( x + width, y + roundingFactor );
    shape.quadraticCurveTo( x + width, y, x + width - roundingFactor, y );
    shape.lineTo( x + roundingFactor, y );
    shape.quadraticCurveTo( x, y, x, y + roundingFactor );
    const boxGeo = new THREE.ShapeGeometry( shape );

    var uvAttribute = boxGeo.attributes.uv;
    let min = Infinity, max = 0
    for (var i = 0; i < uvAttribute.count; i++) {
        let u = uvAttribute.getX(i);
        let v = uvAttribute.getY(i);
        min = Math.min(min, u, v)
        max = Math.max(max, u, v)
    }
    for (var i = 0; i < uvAttribute.count; i++) {
        let u = uvAttribute.getX(i);
        let v = uvAttribute.getY(i);
        u = THREE.MathUtils.mapLinear(u, min, max, 0, 1)
        v = THREE.MathUtils.mapLinear(v, min, max, 0, 1)
        uvAttribute.setXY(i, u, v);
    }

    boxGeo.computeBoundingBox();
    const boxMidx = -0.5 * ( boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x );
    const boxMidy = -0.5 * ( boxGeo.boundingBox.max.y - boxGeo.boundingBox.min.y );
    boxGeo.translate( boxMidx, boxMidy * 0, 0 );
    let box = new THREE.Mesh(boxGeo, boxMat);

    let boxLatLng = convertLatLngtoCartesian(lat, lng, 5.06);
    let boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
    box.lookAt( boxRotationVector )
    box.position.copy( boxRotationVector )

    jaranius.add( box );
}

for (let i = 0; i < imgList.length; i++) {
    instantiateImg(imgList[i][1], imgList[i][2], imgList[i][3] - 180, imgList[i][4] / 500);
}

//create tags
const loader = new FontLoader();
loader.load( tagFont, function ( font ) { //'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {  //

    function instantiateTag(txt, lat, lng, color, originalColor, size) {
        const textMat = new THREE.MeshBasicMaterial( {
            color: 0x000000,
            transparent: false,
            //opacity: 0.8,
            side: THREE.DoubleSide
        } );
        const boxMat = new THREE.MeshBasicMaterial( {
            color: color,
            transparent: true,
            opacity: 0.65, //0.5
            side: THREE.DoubleSide
        } );

        const shapes = font.generateShapes( txt, 100 );
        const txtGeo = new THREE.ShapeGeometry( shapes );
        txtGeo.computeBoundingBox();
        const xMid = - 0.5 * ( txtGeo.boundingBox.max.x - txtGeo.boundingBox.min.x );
        const yMid = 0.5 * ( txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y );
        txtGeo.translate( xMid, yMid * 2, 0 );
        
        const tag = new THREE.Mesh( txtGeo, textMat );
        const tagDistanceFromMiddleofPlanet = 5.06;
        let latLng = convertLatLngtoCartesian(lat, lng, tagDistanceFromMiddleofPlanet);
        let rotationVector = new THREE.Vector3(latLng.x, latLng.y, latLng.z);
        tag.lookAt(rotationVector);
        tag.position.x = latLng.x;
        tag.position.y = latLng.y;
        tag.position.z = latLng.z;
        tag.scale.x = size;
        tag.scale.y = size;
        tag.scale.z = size;

        //create boxes
        const xPadding = 200;
        const yPadding = 0;
        let roundingFactor = size * 125;
        let x = 0; let y = 0; 
        let width = (Math.abs(txtGeo.boundingBox.min.x) + Math.abs(txtGeo.boundingBox.max.x) + xPadding) * size; 
        let height = (Math.abs(txtGeo.boundingBox.min.y) + Math.abs(txtGeo.boundingBox.max.y) + yPadding) * size; 
        let shape = new THREE.Shape();
        shape.moveTo( x, y + roundingFactor );
        shape.lineTo( x, y + height - roundingFactor );
        shape.quadraticCurveTo( x, y + height, x + roundingFactor, y + height );
        shape.lineTo( x + width - roundingFactor, y + height );
        shape.quadraticCurveTo( x + width, y + height, x + width, y + height - roundingFactor );
        shape.lineTo( x + width, y + roundingFactor );
        shape.quadraticCurveTo( x + width, y, x + width - roundingFactor, y );
        shape.lineTo( x + roundingFactor, y );
        shape.quadraticCurveTo( x, y, x, y + roundingFactor );
        const boxGeo = new THREE.ShapeGeometry( shape );

        var uvAttribute = boxGeo.attributes.uv;
		let min = Infinity, max = 0
		//find min max
		for (var i = 0; i < uvAttribute.count; i++) {
			let u = uvAttribute.getX(i);
			let v = uvAttribute.getY(i);
			min = Math.min(min, u, v)
			max = Math.max(max, u, v)
		}

		//map min map to 1 to 1 range
		for (var i = 0; i < uvAttribute.count; i++) {
			let u = uvAttribute.getX(i);
			let v = uvAttribute.getY(i);

			// do something with uv
			u = THREE.MathUtils.mapLinear(u, min, max, 0, 1)
			v = THREE.MathUtils.mapLinear(v, min, max, 0, 1)

			// write values back to attribute
			uvAttribute.setXY(i, u, v);

		}

        boxGeo.computeBoundingBox();
        const boxMidx = -0.5 * ( boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x );
        const boxMidy = -0.5 * ( boxGeo.boundingBox.max.y - boxGeo.boundingBox.min.y );
        boxGeo.translate( boxMidx, boxMidy * 0, 0 );
        let box = new THREE.Mesh(boxGeo, boxMat);

        let boxLatLng = convertLatLngtoCartesian(lat, lng, tagDistanceFromMiddleofPlanet - 0.01);
        let boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
        box.lookAt( boxRotationVector )
        box.position.copy( boxRotationVector )

        //create border
        /* let path = new THREE.Path();
        path.moveTo( x, y + roundingFactor );
        path.lineTo( x, y + height - roundingFactor );
        path.quadraticCurveTo( x, y + height, x + roundingFactor, y + height );
        path.lineTo( x + width - roundingFactor, y + height );
        path.quadraticCurveTo( x + width, y + height, x + width, y + height - roundingFactor );
        path.lineTo( x + width, y + roundingFactor );
        path.quadraticCurveTo( x + width, y, x + width - roundingFactor, y );
        path.lineTo( x + roundingFactor, y );
        path.quadraticCurveTo( x, y, x, y + roundingFactor );
        let pathPoints = path.getPoints();

        let borderGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
        let borderMaterial = new THREE.LineBasicMaterial({color:0x000000, linewidth:5});
        borderGeometry.translate( boxMidx, boxMidy * 0, 0 );

        let border = new THREE.Line(borderGeometry, borderMaterial);
        border.lookAt( boxRotationVector )
        border.position.copy( boxRotationVector )

        jaranius.add( border ); */
        jaranius.add( box );
        jaranius.add( tag );
        
    }

    for (let i = 0; i < tagList.length; i++) {
        let tag = instantiateTag(tagList[i][1], tagList[i][2], tagList[i][3] - 180, tagList[i][4], tagList[i][4], tagList[i][5] / 100000);
    }
} );

//create pins
let pinPositions = []
/* let pinLPositions = []
let pinRPositions = [] */

//const labelContainerElem = document.querySelector('#labels');

function instantiatePin(txt, lat, lng, color, originalColor, radius, wireframe) {
    let segments = Math.floor(radius * 750)
    if (wireframe == true) {
        segments = Math.floor(radius * 750 / 3)
    }
    const pin = new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            color: color,
            wireframe: wireframe,
        })
    )
    const pinL = new THREE.Mesh(
        new THREE.SphereGeometry(radius / 2, segments, segments),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
        })
    )
    const pinR = new THREE.Mesh(
        new THREE.SphereGeometry(radius / 2, segments, segments),
        new THREE.MeshBasicMaterial({
            color: 0x000000,
        })
    )

    originalColor = originalColor;

/*     const elem = document.createElement('div');
    elem.textContent = txt;
    labelContainerElem.appendChild(elem); */
    
    const pinSphereRadius = 5.01
    let pos = convertLatLngtoCartesian(lat, lng, pinSphereRadius);
    pin.position.set(pos.x, pos.y, pos.z);
    
    /* let posL = convertLatLngtoCartesian(lat, lng - ((radius * 20) * (1 + Math.pow(Math.abs(lat - 90) / 58, 4))) , pinSphereRadius);
    pinL.position.set(posL.x, posL.y, posL.z);
    jaranius.add(pinL)
    pinLPositions.push(pinL);
    let posR = convertLatLngtoCartesian(lat, lng + ((radius * 20) * (1 + Math.pow(Math.abs(lat - 90) / 58, 4))) , pinSphereRadius);
    pinR.position.set(posR.x, posR.y, posR.z);
    jaranius.add(pinR)
    pinRPositions.push(pinR); */

    jaranius.add(pin);
    pinPositions.push(pin);

    return {pin, originalColor}; //elem
}

let pins = []
for (let i = 0; i < tagList.length; i++) {
    let hasSlides;
    if (tagList[i][6] == undefined) {
        hasSlides = false
    } else hasSlides = true
    let pin = instantiatePin(tagList[i][1], tagList[i][2], tagList[i][3] - 180, tagList[i][4], tagList[i][4], tagList[i][5] / 1500, hasSlides);
    pins.push(pin);
}

//create connections
let curveThickness = 0.0001
let curveRadiusSegments = 3
let curveMaxAltitude = 0.03
let curveMinAltitude = 5.01

for (let i = 0; i < tagList.length; i++) {
    for (let j = 0; j < tagConnections.length; j++) {
        if (tagList[i][0] == tagConnections[j][0]) {
            for (let k = 1; k < tagConnections[j].length; k++) {
                for (let l = 0; l < tagList.length; l++) {
                    if (tagList[l][0] == tagConnections[j][k]) {
                        let t1 = convertLatLngtoCartesian(tagList[i][2], tagList[i][3] - 180, curveMinAltitude);
                        let t2 = convertLatLngtoCartesian(tagList[l][2], tagList[l][3] - 180, curveMinAltitude);
                        const weight = (tagList[i][5] + tagList[l][5]) / 2;
                        getCurve(t1, t2, weight);
                    }
                }
            }
        }
    }
}

function getCurve(p1, p2, weight){
    let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
    let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
    let points = []
    for (let i = 0; i <= 20; i++) {
      let p = new THREE.Vector3().lerpVectors(v1, v2, i/20)
      p.normalize()
      p.multiplyScalar(curveMinAltitude + curveMaxAltitude * Math.sin(Math.PI*i/20));
      points.push(p)
    }
    let path = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(path, 20, curveThickness * weight, curveRadiusSegments, false);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.25
    });
    const curve = new THREE.Mesh(geometry, material);
    curve.renderOrder = -10
    jaranius.add(curve);
  }

//create sun
const sunRadianceGeo = new THREE.SphereGeometry(25, 50, 50)
const sunRadianceMat = new THREE.ShaderMaterial({
    vertexShader: sunVertexShader,
    fragmentShader: sunFragmentShader,
    blending: AdditiveBlending,
    transparent: true,
    side: BackSide,
    lights: false,
})
const sunRadiance = new THREE.Mesh(sunRadianceGeo, sunRadianceMat)
sunRadiance.position.set(0, 0, 490)//(-400, 200, 200)
pivot4.add(sunRadiance)

const sunLight = new THREE.PointLight(0xffffff, 1.2, 2000)
sunLight.position.copy(sunRadiance.position)
pivot4.add(sunLight)

const textureFlare0 = textureLoader.load(require( './img/lensflare0.png' ));
const textureFlare3 = textureLoader.load(require( './img/lensflare3.png' ));
const lensflare = new Lensflare();

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

let moon1 = new Moon(1.5, moonTex, 110, -0.0005, pivot1, 0.1);
let moon2 = new Moon(2.5, moon2Tex, 190, -0.0003, pivot2, 0.05);
let moon3 = new Moon(1, moon3Tex, 250, -0.0001, pivot3, 0.005);
let moons = [moon1,moon2,moon3];

for (let i = 0; i < moons.length; i++) {
    const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(moons[i].radius, 50, 50),
        new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load(moons[i].texture),
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

//YUKA
/* const entityManager = new YUKA.EntityManager()
const clock = new YUKA.Time()

function sync(entity, RenderComponent) {
    RenderComponent.matrix.copy(entity.worldMatrix)
}

const target = []

const targetGeo = new THREE.SphereGeometry(0.001, 5, 5);
const targetMat = new THREE.MeshBasicMaterial ({color: 0xff0000, transparent: true, opacity: 0});
for (let lt = 20; lt <= 160; lt += 10) {
    for (let lg = 0; lg < 360; lg += 15) {
        let pos = convertLatLngtoCartesian(lt, lg, 10);
        let vec = new YUKA.Vector3(pos.x, pos.y, pos.z)
        const targetMesh = new THREE.Mesh(targetGeo, targetMat);
        targetMesh.position.set(pos.x, pos.y, pos.z);
        scene.add(targetMesh);
        target.push(vec)
    }
}

const jaraniusObstacle = new YUKA.GameEntity()
jaraniusObstacle.position.copy (jaranius.position)
entityManager.add(jaraniusObstacle)
jaraniusObstacle.boundingRadius = jaraniusGeometry.boundingSphere.radius;

const obstacles = []
obstacles.push(jaraniusObstacle)
const obstacleAvoidanceBehavior = new YUKA.ObstacleAvoidanceBehavior (obstacles)
obstacleAvoidanceBehavior.weight = 1

const alignmentBehavior = new YUKA.AlignmentBehavior()
alignmentBehavior.weight = 0.1

const cohesionBehavior = new YUKA.CohesionBehavior()
cohesionBehavior.weight = 0.3

const separationBehavior = new YUKA.SeparationBehavior()
separationBehavior.weight = 0.1

const wanderBehavior = new YUKA.WanderBehavior(1, 0.5, 2)
wanderBehavior.weight = 0.2

let feedingGround = new YUKA.Vector3 
feedingGround = convertLatLngtoCartesian (90, 1, 5.1)
const arriveBehavior = new YUKA.ArriveBehavior(feedingGround)
arriveBehavior.weight = 0
 */
//end YUKA

//create Gutta
class Gutt {
    constructor(lat, lng, heading) {
        this.lat = lat;
        this.lng = lng;
        this.heading = heading;

        /* this is the stuff that should be used
        this.position = vector;    use x,y as lng, lat?
        this.velocity = vector;
        this.acceleration = vector
        move() (no need for separate steer)
        this.position = this.position + this.velocity
        this.velocity = this.velocity + this.acceleration
        end of stuff */

        
        let scale = 0.0005;
        this.shape = new THREE.Shape();

        this.shape.moveTo(scale * 5,scale * 5 );
        this.shape.bezierCurveTo(scale * 5,scale * 5,scale * 4, 0, 0, 0 );
        this.shape.bezierCurveTo(- scale * 6, 0,- scale * 6,scale * 7, - scale * 6,scale * 7 );
        this.shape.bezierCurveTo(- scale * 6,scale * 11,- scale * 3,scale * 15.4,scale * 5,scale * 19 );
        this.shape.bezierCurveTo(scale * 12,scale * 15.4,scale * 16,scale * 11,scale * 16,scale * 7 );
        this.shape.bezierCurveTo(scale * 16,scale * 7,scale * 16, 0,scale * 10, 0 );
        this.shape.bezierCurveTo(scale * 7, 0,scale * 5,scale * 5,scale * 5,scale * 5 );

        this.geometry = new THREE.ShapeGeometry(this.shape)
            this.geometry.computeBoundingSphere();
            this.center = this.geometry.boundingSphere.center
            this.shapePosition = this.geometry.position
            this.geometry.rotateZ(Math.PI/2)
        this.material = new THREE.MeshLambertMaterial({
            color: 0xdddddd, 
            side: DoubleSide,
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.geometry.center();
        this.mesh.position.copy(this.center);
        
        this.pos = convertLatLngtoCartesian(this.lat, this.lng, 5.01)
        this.heading = getRandomNum(0, 2 * Math.PI)

        this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z)
        this.mesh.lookAt(middleOfPlanet)
        
        //YUKA
        // this.mesh.matrixAutoUpdate = false
        //end YUKA

        scene.add(this.mesh)

        //YUKA
        /* this.vehicle = new YUKA.Vehicle()
        this.vehicle.boundingRadius = this.geometry.boundingSphere.radius
        this.vehicle.setRenderComponent(this.mesh, sync)
        this.pos = convertLatLngtoCartesian(this.lat, this.lng, 5.5)
        this.vehicle.position.set(this.pos.x, this.pos.y, this.pos.z)
        this.vehicle.rotation.fromEuler(getRandomNum(0, Math.PI * 2), getRandomNum(0, Math.PI * 2), getRandomNum(0, Math.PI * 2))

        this.vehicle.maxSpeed = 0.1
       
        this.vehicle.updateNeighborhood = true
        this.vehicle.neighborhoodRadius = 0.1
        this.vehicle.steering.add(wanderBehavior)
        this.vehicle.steering.add(alignmentBehavior)
        this.vehicle.steering.add(cohesionBehavior)
        this.vehicle.steering.add(separationBehavior)
        this.vehicle.steering.add(arriveBehavior)
        this.vehicle.steering.add(obstacleAvoidanceBehavior)
        
        for (let i = 0; i < target.length; i++) {
            this.fleeBehavior = new YUKA.FleeBehavior(target[i], 4)
            this.fleeBehavior.weight = 0.1
            this.vehicle.steering.add(this.fleeBehavior)
        }
        
        entityManager.add(this.vehicle) */
        //END YUKA
    }

    move() {
        this.lat -= Math.cos(this.heading) / 20
        this.lng += Math.sin(this.heading) / 20
        if (this.lat < 0) {this.lat = Math.abs(this.lat)}
        if (this.lat > 180) {this.lat = 180 - (this.lat - 180)}
        if (this.lng < 0) {this.lng = 360 + this.lng}
        if (this.lng > 360) {this.lng = this.lng - 360}
        this.pos = convertLatLngtoCartesian(this.lat, this.lng, 5.2);
        this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    }

    steer() {
        if (getRandomNum(0, 1) > 0.9) {
            this.heading += (Math.PI / 20)
        }
        if (getRandomNum(0, 1) > 0.9) {
            this.heading -= (Math.PI / 20)
        }
        if (this.lat < 10) {
            this.heading = getRandomNum(4 * Math.PI / 3, 5 * Math.PI / 3)
        }
        if (this.lat > 170) {
            this.heading = getRandomNum(Math.PI / 3, 2 * Math.PI / 3)
        }
        this.mesh.lookAt(0, 0, 0)
        this.mesh.rotateZ(this.heading - Math.PI / 2)
    }
}

let gutta = [];
for (let i = 0; i < 1000; i++) {
    let lat = getRandomBell(10, 170, 5)
    let lng = getRandomInt(0, 359)
    gutta.push(new Gutt(lat, lng))
}

//lights
const ambient = new THREE.AmbientLight(0xffffff, 0.02); //0.01
scene.add(ambient);

const spotlight = new THREE.DirectionalLight(0xffffff, 0);
scene.add(spotlight);
let spotlightIntensity = 0.5

const jaraniusLight = new THREE.PointLight(0xffffff, 0.5);
jaraniusLight.position.set(0, 0, 0);
jaranius.add(jaraniusLight);

// Interaction functions
function unhoverPin() {
    for (let i = 0; i < pins.length; i++) {
        pins[i].pin.material.color.set(pins[i].originalColor);
    }
}

function hoverPin() {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(pinPositions);
    for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
    }
}


document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    const keyCode = event.which;

    if (keyCode == 76) {
        if (spotlight.intensity == 0) {
            spotlight.intensity = spotlightIntensity
        } else spotlight.intensity = 0
    }
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    const keyCode = event.which;

    if (selectedPin != null) {
        let posLatLng = convertCartesiantoLatLng(selectedPin.position.x, selectedPin.position.y, selectedPin.position.z);
        // up
        if (keyCode == 38) {
            posLatLng.lat -= .3;
            // down
        } else if (keyCode == 40) {
            posLatLng.lat += .3;
            // left
        } else if (keyCode == 37) {
            posLatLng.lng -= .3;
            // right
        } else if (keyCode == 39) {
            posLatLng.lng += .3;
        }
        const pinSphereRadius = 5.01
        let posXYZ = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, pinSphereRadius);
        selectedPin.position.set(posXYZ.x, posXYZ.y, posXYZ.z);
    }
};

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

function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    //YUKA
/*     const delta = clock.update().getDelta()
    entityManager.update(delta) */
    //END YUKA

    for (let i = 0; i < gutta.length; i++) {
        gutta[i].move();
        gutta[i].steer();
    }

    //pinLabels
    /* pins.forEach((pinInfo) => {
        const {pin, elem} = pinInfo;

        // get the position of the center of the pin
        pin.updateWorldMatrix(true, false);
        pin.getWorldPosition(tempV);

        // get the normalized screen coordinate of that position
        // x and y will be in the -1 to +1 range with x = -1 being
        // on the left and y = -1 being on the bottom
        tempV.project(camera);

        raycaster.setFromCamera(tempV, camera);
        const intersectedObjects = raycaster.intersectObjects(pinPositions, false);
        const show = intersectedObjects.length && pin === intersectedObjects[0].object;
        //camera.position.distanceTo(tempV) > pin.geometry.boundingSphere.radius * 250 : added to hide small pins when far away
        if (!show || Math.abs(tempV.z) > 1 || camera.position.distanceTo(pin.position) > pin.geometry.parameters.radius * 150 || camera.position.distanceTo(pin.position) > camera.position.distanceTo(middleOfPlanet)) {
            // hide the label
            elem.style.display = 'none';
        } else {
            // un-hide the label
            elem.style.display = '';
            //changeElement(labels, camera.position.distanceTo(pin.position));

            // convert the normalized position to CSS coordinates
            const x = (tempV.x * .5 + .5) * canvas.clientWidth;
            const y = (tempV.y * -.5 + .5) * canvas.clientHeight;

            // move the elem to that position
            elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;

            // set the zIndex for sorting
            elem.style.zIndex = (-tempV.z * .5 + .5) * 100000 | 0;
        }
    }); */

    function onPointerMove(event) {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onClick(event) {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(pinPositions);
        if (intersects.length > 0) {
            selectedPin = intersects[0].object;
            if (camera.position.distanceTo(selectedPin.position) < 3) {
                const selectedPinIndex = pinPositions.findIndex((object) => object==intersects[0].object)
                const selectedCarousel = tagList[selectedPinIndex][6]
                activeCarousel = document.querySelector(`.carousel.s${selectedCarousel}`)
                activeCarousel.style.display = "block"
            }
        }
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('click', onClick);
    unhoverPin();
    hoverPin();

    renderer.render(scene, camera);

    const camPos = camera.position
    const camRot = camera.rotation
    spotlight.position.set(camPos.x, camPos.y, camPos.z);
    spotlight.rotation.set(camRot.x, camRot.y, camRot.z);
    center.rotation.y += -0.00001;
    pivot1.rotation.y += -0.0003;
    pivot2.rotation.y += -0.00003;
    pivot3.rotation.y += -0.000003;
    pivot4.rotation.y += 0.0001;
    clouds1.rotation.y += 0.00001;
    clouds2.rotation.y += 0.00005;
    clouds3.rotation.y += 0.0001;
    if (camera.position.z > 15 && start == true) {
        camera.position.z -= 0.0001 * Math.pow(camera.position.z - 10, 1.35)
        jaranius.rotation.y += 0.0005;
    }
    for (let i = 0; i < pins.length; i++) {
        if (pins[i].pin.material.wireframe == true) {
            pins[i].pin.rotation.y += 0.002
            pins[i].pin.rotation.x += 0.001
        }
    }
  
    controls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);
    controls.zoomSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet) / 3;

    controls.update();
    
    requestAnimationFrame(render);
}

requestAnimationFrame(render);

