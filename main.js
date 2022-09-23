import * as THREE from 'three';
import { Float32BufferAttribute, FrontSide, AdditiveBlending, BackSide, DoubleSide, Vector3, RGBADepthPacking, SubtractiveBlending } from 'three';
import { tagList } from './tagData.js'
import { imgList } from './imgData.js'
import { tagConnections } from './tagConnectionData.js'
import { palette } from './palette.js'
import { getRandomNum, getRandomBell, getRandomInt, convertLatLngtoCartesian, convertCartesiantoLatLng } from './mathScripts.js'
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js'; 
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { GUI } from 'dat.gui'

//    IMPORT SHADERS
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl';
import sunVertexShader from './shaders/sunVertex.glsl';
import sunFragmentShader from './shaders/sunFragment.glsl';

//    IMPORT TEXTURES
import diffuseTexture from "./img/terrain4k.jpg"
import normalTexture from "./img/normal2k.jpg"
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
renderer.setPixelRatio(window.devicePixelRatio)
renderer.outputEncoding = THREE.sRGBEncoding;

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
let selectedPin = null;

const middleOfPlanet = new THREE.Vector3(0, 0, 0);

//VR
renderer.shadowMap.enabled = true; //ANY SHADOWS? WORTH PROCESSING COST?
renderer.xr.enabled = true;
let controller1, controller2;
let controllerGrip1, controllerGrip2;
const intersected = [];
const tempMatrix = new THREE.Matrix4();
let group;
group = new THREE.Group();
scene.add( group );
document.body.appendChild( VRButton.createButton( renderer ) );

let dolly = new THREE.Object3D();
dolly.position.z = 8;
dolly.add( camera );
scene.add( dolly );

let dummyCam = new THREE.Object3D();
camera.add( dummyCam );

// controllers

controller1 = renderer.xr.getController( 0 );
controller1.addEventListener( 'selectstart', onSelectStart );
controller1.addEventListener( 'selectend', onSelectEnd );
dolly.add( controller1 );

controller2 = renderer.xr.getController( 1 );
controller2.addEventListener( 'selectstart', onSelectStart );
controller2.addEventListener( 'selectend', onSelectEnd );
dolly.add( controller2 );

const controllerModelFactory = new XRControllerModelFactory();

controllerGrip1 = renderer.xr.getControllerGrip( 0 );
controllerGrip1.add( controllerModelFactory.createControllerModel( controllerGrip1 ) );
dolly.add( controllerGrip1 );

controllerGrip2 = renderer.xr.getControllerGrip( 1 );
controllerGrip2.add( controllerModelFactory.createControllerModel( controllerGrip2 ) );
dolly.add( controllerGrip2 );

//

const geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 8 ), new THREE.Vector3( 0, 0, 8 - 1 ) ] );

const line = new THREE.Line( geometry );
line.name = 'line';
line.scale.z = 5;

controller1.add( line.clone() );
controller2.add( line.clone() );

let VRraycaster = new THREE.Raycaster();

//

function onSelectStart( event ) {

    const controller = event.target;

    const intersections = getIntersections( controller );

    if ( intersections.length > 0 ) {

        const intersection = intersections[ 0 ];

        const object = intersection.object;
        object.material.emissive.b = 1;
        controller.attach( object );

        controller.userData.selected = object;

    }

}

function onSelectEnd( event ) {

    const controller = event.target;

    if ( controller.userData.selected !== undefined ) {

        const object = controller.userData.selected;
        object.material.emissive.b = 0;
        group.attach( object );

        controller.userData.selected = undefined;

    }


}

function getIntersections( controller ) {

    tempMatrix.identity().extractRotation( controller.matrixWorld );

    VRraycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
    VRraycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );

    return VRraycaster.intersectObjects( group.children, false );

}

function intersectObjects( controller ) {

    // Do not highlight when already selected

    if ( controller.userData.selected !== undefined ) return;

    const line = controller.getObjectByName( 'line' );
    const intersections = getIntersections( controller );

    if ( intersections.length > 0 ) {

        const intersection = intersections[ 0 ];

        const object = intersection.object;
        object.material.emissive.r = 1;
        intersected.push( object );

        line.scale.z = intersection.distance;

    } else {

        line.scale.z = 5;

    }

}

function cleanIntersected() {

    while ( intersected.length ) {

        const object = intersected.pop();
        object.material.emissive.r = 0;

    }

}


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
    pivot4.rotation.x = -0.41;

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
group.add(jaranius)

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

        jaranius.add( box );
        jaranius.add( tag );
    }

    for (let i = 0; i < tagList.length; i++) {
        let tag = instantiateTag(tagList[i][1], tagList[i][2], tagList[i][3] - 180, palette[tagList[i][4]], palette[tagList[i][4]], tagList[i][5] / 100000);
    }
} );

//create pins
let pinPositions = []

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

    originalColor = originalColor;
    
    const pinSphereRadius = 5.01
    let pos = convertLatLngtoCartesian(lat, lng, pinSphereRadius);
    pin.position.set(pos.x, pos.y, pos.z);

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
    let pin = instantiatePin(tagList[i][1], tagList[i][2], tagList[i][3] - 180, palette[tagList[i][4]], palette[tagList[i][4]], tagList[i][5] / 1500, hasSlides);
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

const textureFlare0 = textureLoader.load("https://jaranolsen.github.io/Planet/lensflare0.png");
const textureFlare3 = textureLoader.load("https://jaranolsen.github.io/Planet/lensflare3.png");
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

//create Gutta
const guttaScale = 0.0003;

/* const guttaGeometry = new THREE.ConeGeometry(10 * guttaScale, 30 * guttaScale, 6, 4)
    guttaGeometry.rotateZ(Math.PI/2)
    guttaGeometry.rotateY(Math.PI/2) */
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
        // this.mesh.geometry.center();
        // this.mesh.position.copy(this.center);
 
        this.pos = new THREE.Vector2(lat, lng)
        this.velocity = new THREE.Vector2(getRandomNum(0, 0), getRandomNum(0, 1)).setLength(0.001)
        this.acceleration = new THREE.Vector2
        this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5.1)
        this.presentHeading
        this.originalHeading
  
        this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)

        this.wander = new THREE.Vector2(0, 0)
        this.alignment = new THREE.Vector2(0, 0)
        // this.alignmentPerception = 0.1
        this.cohesion = new THREE.Vector2(0, 0)
        // this.cohesionPerception = 0.1
        this.separation = new THREE.Vector2(0, 0)
        // this.separationPerception = 0.2
        this.avoidance = new THREE.Vector2(0, 0)
        //this.maxForce = 0.1
        //this.maxSpeed = 0.1 

        scene.add(this.gutt)
    }

    move() {
        this.originalHeading = Math.atan2(this.velocity.x, this.velocity.y)

        this.acceleration.set(0, 0)
        this.alignment.multiplyScalar(parameters.alignment)
        this.cohesion.multiplyScalar(parameters.cohesion)
        this.separation.multiplyScalar(parameters.separation)
        //this.avoidance.multiplyScalar(parameters.avoidance)
        
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
for (let i = 0; i < 300; i++) {
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


function animate() {

    renderer.setAnimationLoop( render );

}


function render(time) {
    time *= 0.001;

    //VR
    cleanIntersected();

				intersectObjects( controller1 );
				intersectObjects( controller2 );

    //

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
}

animate()

