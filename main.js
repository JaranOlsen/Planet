import * as THREE from 'three';
import {Float32BufferAttribute, FrontSide, AdditiveBlending, BackSide, DoubleSide, Vector3} from 'three';
import { tagList } from './tagData.js'
import { tagConnections } from './tagConnectionData.js'
import {getRandomNum, getRandomBell, getRandomInt, convertLatLngtoCartesian, convertCartesiantoLatLng, convertLatLngtoCartesianAndBack} from './mathScripts.js'

//    USE ON PRODUCTION BUILD
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

//    USE ON LOCAL SERVER
/* import {OrbitControls} from "/node_modules/three/examples/jsm/controls/OrbitControls.js"; 
import { FontLoader } from '/node_modules/three/examples/jsm/loaders/FontLoader.js'; */

//    USE ON PRODUCTION BUILD
import diffuseTexture from "./img/terrain8k.jpg"
import normalTexture from "./img/normal8k.jpg"
import roughnessTex from "./img/roughness2k.jpg"
import clouds2Tex from "./img/clouds2.png"
import cloudsAlphaTex from "./img/cloudsalpha.jpg"
import starTexture from "./img/star.png"
import moonTex from "./img/moon.jpg"
import moon2Tex from "./img/moon2.png"
import moon3Tex from "./img/moon3.png"
const tagFont = "https://jaranolsen.github.io/Planet/SourceSans3_Regular.json"
//import tagFont from "./public/fonts/SourceSans3_Regular.json"

//    USE ON LOCAL SERVER
/* const diffuseTexture = "./img/terrain8k.jpg"
const normalTexture = "./img/normal8k.jpg"
const roughnessTex = "./img/roughness2k.jpg"
const clouds2Tex = "./img/clouds2.png"
const cloudsAlphaTex = "./img/cloudsalpha.jpg"
const starTexture = "./img/star.png"
const moonTex = "./img/moon.jpg"
const moon2Tex = "./img/moon2.png"
const moon3Tex = "./img/moon3.png"  
const tagFont = './public/fonts/SourceSans3_Regular.json' */


const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer(
    {
        canvas,
        antialias: true
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
camera.position.z = 10

const controls = new OrbitControls(camera, canvas);
controls.enablePan = false
controls.maxDistance = 1000
controls.minDistance = 5.5
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

//create tags
const loader = new FontLoader();
loader.load( tagFont, function ( font ) { //'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {  //

    function instantiateTag(txt, lat, lng, color, originalColor, size) {
        const textMat = new THREE.MeshBasicMaterial( {
            color: 0x000000, //color,
            transparent: false,
            //opacity: 0.8,
            side: THREE.DoubleSide
        } );
        const boxMat = new THREE.MeshBasicMaterial( {
            color: color, //0x888888,
            transparent: true,
            opacity: 0.5,
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
        const boxGeo = new THREE.ShapeBufferGeometry( shape );

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

        scene.add( box );
        scene.add( tag );
    }

    let tags = []
    for (let i = 0; i < tagList.length; i++) {
        let tag = instantiateTag(tagList[i][1], tagList[i][2], tagList[i][3] - 180, tagList[i][4], tagList[i][4], tagList[i][5] / 100000); //(tagList[i][1], tagList[i][2], tagList[i][3] - 180, 0.0004, color); //
        tags.push(tag);
    }
} );

//create pins
let pinPositions = []
const labelContainerElem = document.querySelector('#labels');

function instantiatePin(txt, lat, lng, color, originalColor, radius) {
    const pin = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 20, 20),
        new THREE.MeshBasicMaterial({
            color: color,
        })
    )

    originalColor = originalColor;

/*     const elem = document.createElement('div');
    elem.textContent = txt;
    labelContainerElem.appendChild(elem); */
    
    const pinSphereRadius = 5.01
    let pos = convertLatLngtoCartesian(lat, lng, pinSphereRadius);
    pin.position.set(pos.x, pos.y, pos.z);
    scene.add(pin);
    pinPositions.push(pin);

    return {pin, originalColor}; //elem
}

let pins = []
for (let i = 0; i < tagList.length; i++) {
    let pin = instantiatePin(tagList[i][1], tagList[i][2], tagList[i][3] - 180, tagList[i][4], tagList[i][4], tagList[i][5] / 1500);
    pins.push(pin);
}

//create connections
for (let i = 0; i < tagList.length; i++) {
    for (let j = 0; j < tagConnections.length; j++) {
        if (tagList[i][0] == tagConnections[j][0]) {
            for (let k = 1; k < tagConnections[j].length; k++) {
                for (let l = 0; l < tagList.length; l++) {
                    if (tagList[l][0] == tagConnections[j][k]) {
                        let t1 = convertLatLngtoCartesian(tagList[i][2], tagList[i][3] - 180, 5);
                        let t2 = convertLatLngtoCartesian(tagList[l][2], tagList[l][3] - 180, 5);
                        getCurve(t1, t2);
                    }
                }
            }
        }
    }
}

function getCurve(p1, p2){
    let thickness = 0.01
    let radiusSegments = 3
    let curveAltitude = 0.05
    let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
    let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
    let points = []
    for (let i = 0; i <= 20; i++) {
      let p = new THREE.Vector3().lerpVectors(v1, v2, i/20)
      p.normalize()
      p.multiplyScalar(5 + curveAltitude * Math.sin(Math.PI*i/20));
      points.push(p)
    }
    let path = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(path, 20, thickness, radiusSegments, false);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15
    });
    const curve = new THREE.Mesh(geometry, material);
    scene.add(curve);
  }

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

    pivot1.rotation.y = 0;
    pivot2.rotation.y = 0; //2 * Math.PI / 3;
    pivot3.rotation.y = 0; //4 * Math.PI / 3;

    center.add(pivot1);
    center.add(pivot2);
    center.add(pivot3);

//create Jaranius
const textureLoader = new THREE.TextureLoader()
let diffuse = textureLoader.load(diffuseTexture);

const jaranius = new THREE.Mesh(
    new THREE.SphereGeometry(5, 250, 250),
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
const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(5.05, 50, 50),
    new THREE.MeshLambertMaterial({
        alphaMap: textureLoader.load(cloudsAlphaTex),
        map: textureLoader.load(clouds2Tex),
        transparent: true
    })
)
jaranius.add(clouds)

// create atmosphere
/* const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5.3, 50, 50),
    new THREE.MeshLambertMaterial({
        color: 0xaabbff,
        transparent: true,
        opacity: 0.3,
        blending: AdditiveBlending
    })
)
jaranius.add(atmosphere); */

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

let moon1 = new Moon(1.5, moonTex, 110, -0.0005, pivot1, 0.4);
let moon2 = new Moon(2.5, moon2Tex, 190, -0.0003, pivot2, 0.1);
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
class Gutt {
    constructor(lat, lng, rot) {
        this.lat = lat;
        this.lng = lng;
        this.rot = rot;
        
        let x = 0;
        let y = 0;
        let scale = 0.01;
        this.shape = new THREE.Shape();

        this.shape.moveTo( x + scale * 5, y + scale * 5 );
        this.shape.bezierCurveTo( x + scale * 5, y + scale * 5, x + scale * 4, y, x, y );
        this.shape.bezierCurveTo( x - scale * 6, y, x - scale * 6, y + scale * 7,x - scale * 6, y + scale * 7 );
        this.shape.bezierCurveTo( x - scale * 6, y + scale * 11, x - scale * 3, y + scale * 15.4, x + scale * 5, y + scale * 19 );
        this.shape.bezierCurveTo( x + scale * 12, y + scale * 15.4, x + scale * 16, y + scale * 11, x + scale * 16, y + scale * 7 );
        this.shape.bezierCurveTo( x + scale * 16, y + scale * 7, x + scale * 16, y, x + scale * 10, y );
        this.shape.bezierCurveTo( x + scale * 7, y, x + scale * 5, y + scale * 5, x + scale * 5, y + scale * 5 );

        this.geometry = new THREE.ShapeGeometry(this.shape)
        this.material = new THREE.MeshBasicMaterial({color: 0xffffff, side: DoubleSide})
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        
        this.pos = convertLatLngtoCartesian(this.lat, this.lng, 5.2)

        this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z)
        this.mesh.lookAt(middleOfPlanet)
        
        scene.add(this.mesh)
    }

    move() {
        this.newlat = this.lat + getRandomNum(-0.01, 0.01);
        this.newlng = this.lng + 1;
        this.pos = convertLatLngtoCartesian(newlat, newlng, 5.2);
        this.mesh.position.set(pos.x, pos.y, pos.z);
    }

    rot() {
        this.mesh.lookAt(middleOfPlanet)
    }

}

let gutta = [];
for (let i = 0; i < 2000; i++) {
    let lat = getRandomBell(10, 170, 5)
    let lng = getRandomInt(0, 359)
    //gutta.push(new Gutt(lat, lng))
}

//lights
const ambient = new THREE.AmbientLight(0xffffff, 0.2); //0.01
scene.add(ambient);

const jaraniusLight = new THREE.PointLight(0xffffff, 0.01);
jaraniusLight.position.set(0, 0, 0);
scene.add(jaraniusLight);

//create coordpoints
/* const coordPoint = new THREE.BufferGeometry()
const coordPointMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xffffff,
})
const coordVertices = []
for (let lt = 1; lt < 180; lt++) {
    for (let lg = 0; lg < 360; lg++) {
        let xyz = convertLatLngtoCartesian(lt, lg);
        coordVertices.push(xyz.x, xyz.y, xyz.z)
    }
}
coordPoint.setAttribute('position', new Float32BufferAttribute(coordVertices, 3))
const coords = new THREE.Points(coordPoint, coordPointMaterial)
scene.add(coords) */

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

function refreshLoop() {
    window.requestAnimationFrame(() => {
        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();
        }
        times.push(now);
        fps = times.length;
        refreshLoop();
    });
}

refreshLoop();

function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    for (let i = 0; i < gutta.length; i++) {
        gutta[i].move();
        //gutta[i].rot();
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
        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }


    function onClick(event) {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(pinPositions);
        if (intersects.length > 0) {
            selectedPin = intersects[0].object;
        }
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('click', onClick);
    unhoverPin();
    hoverPin();

    renderer.render(scene, camera);

    center.rotation.y += -0.00001;
    pivot1.rotation.y += -0.0003;
    pivot2.rotation.y += -0.00003;
    pivot3.rotation.y += -0.000003;
    //jaranius.rotation.y += 0.0003
    clouds.rotation.y += 0.0003
    controls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);

    controls.update();
    
    requestAnimationFrame(render);
}

requestAnimationFrame(render);


