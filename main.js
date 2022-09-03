import * as THREE from 'three';
import {Float32BufferAttribute, FrontSide, AdditiveBlending} from 'three';

//    USE ON PRODUCTION BUILD
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { tagList } from './tagData.js'

//    USE ON LOCAL SERVER
/* import {OrbitControls} from "/node_modules/three/examples/jsm/controls/OrbitControls.js"; 
import { FontLoader } from '/node_modules/three/examples/jsm/loaders/FontLoader.js';
import { tagList } from './tagData.js' */

//    USE ON PRODUCTION BUILD
import diffuseTexture from "./img/diffuse8k.jpg"
import normalTexture from "./img/normal.png"
import starTexture from "./img/star.png"
import roughnessTex from "./img/roughness.png"
import moonTex from "./img/moon.jpg"
import moon2Tex from "./img/moon2.png"
import moon3Tex from "./img/moon3.png"
import clouds2Tex from "./img/clouds2.png"
import cloudsAlphaTex from "./img/cloudsalpha.jpg"

//    USE ON LOCAL SERVER
/* const diffuseTexture = "./img/diffuse8k.jpg"
const normalTexture = "./img/normal.png"
const starTexture = "./img/star.png"
const roughnessTex = "./img/roughness.png"
const moonTex = "./img/moon.jpg"
const moon2Tex = "./img/moon2.png"
const moon3Tex = "./img/moon3.png"
const clouds2Tex = "./img/clouds2.png"
const cloudsAlphaTex = "./img/cloudsalpha.jpg" */

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
camera.position.z = 50

const middleOfPlanet = new THREE.Vector3(0, 0, 0);

const controls = new OrbitControls(camera, canvas);
controls.enablePan = false
controls.maxDistance = 1000
controls.minDistance = 6.0
controls.zoomSpeed = 0.9
controls.rotateSpeed = 0.3
controls.target.set(0, 0, 0);
controls.update();

const scene = new THREE.Scene();

const pointer = new THREE.Vector2;
const tempV = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
let selectedPin = null;

//create tags
const loader = new FontLoader();
loader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

    function instantiateTag(txt, lat, lng, size, color) {
        const textMat = new THREE.MeshBasicMaterial( {
            color: color,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide
        } );
        const boxMat = new THREE.MeshBasicMaterial( {
            color: 0x668877,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        } );

        const shapes = font.generateShapes( txt, 100 );
        const txtGeo = new THREE.ShapeGeometry( shapes );
        txtGeo.computeBoundingBox();
        const xMid = - 0.5 * ( txtGeo.boundingBox.max.x - txtGeo.boundingBox.min.x );
        const yMid = 0.5 * ( txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y );
        txtGeo.translate( xMid, yMid*2, 0 );
        
        const tag = new THREE.Mesh( txtGeo, textMat );
        const tagRadius = 5.05;
        let latLng = convertLatLngtoCartesian(lat, lng, tagRadius);
        let boxlatLng = convertLatLngtoCartesian(lat, lng, tagRadius - 0.01);
        let rotationVector = new THREE.Vector3(latLng.x, latLng.y, latLng.z);
        tag.lookAt(rotationVector);
        tag.position.x = latLng.x;
        tag.position.y = latLng.y;
        tag.position.z = latLng.z;
        tag.scale.x = size;
        tag.scale.y = size;
        tag.scale.z = size;

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

        box.lookAt( rotationVector )
        box.position.copy( rotationVector )

        scene.add( box );
        scene.add( tag );
    }

    let tags = []
    for (let i = 0; i < tagList.length; i++) {
        let color = 0xff0000;
        if (tagList[i][3] < 60) { 
            color = 0xcc8888 //0x845EC2;
        } else if (tagList[i][3] < 120) { 
            color = 0xaaaa88 //0xD65DB1;
        } else if (tagList[i][3] < 180) { 
            color = 0x88cc88 //0xFF6F91;
        } else if (tagList[i][3] < 240) { 
            color = 0x88aaaa //0xFF9671;
        } else if (tagList[i][3] < 300) { 
            color = 0x8888cc //0xFFC75F;
        } else { 
            color = 0xaa88aa //0xF9F871;
        }
        let tag = instantiateTag(tagList[i][1], tagList[i][2], tagList[i][3], 0.0005, color);
        tags.push(tag);
    }
} );

//create pins
let pinPositions = []
const labelContainerElem = document.querySelector('#labels');

function instantiatePin(txt, lat, lng, radius, color, originalColor) {
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
    let color = 0xff0000;
    if (tagList[i][3] < 60) { 
        color = 0xcc8888 //0x845EC2;
    } else if (tagList[i][3] < 120) { 
        color = 0xaaaa88 //0xD65DB1;
    } else if (tagList[i][3] < 180) { 
        color = 0x88cc88 //0xFF6F91;
    } else if (tagList[i][3] < 240) { 
        color = 0x88aaaa //0xFF9671;
    } else if (tagList[i][3] < 300) { 
        color = 0x8888cc //0xFFC75F;
    } else { 
        color = 0xaa88aa //0xF9F871;
    }
    let pin = instantiatePin(tagList[i][1], tagList[i][2], tagList[i][3], 0.05, color, color);
    pins.push(pin);
}
const p1 = convertLatLngtoCartesian(tagList[125][2], tagList[125][3], 5)
const p2 = convertLatLngtoCartesian(tagList[131][2], tagList[131][3], 5)
getCurve(p1,p2);

//create connections
function getCurve(p1, p2){
    let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
    let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
    let points = []
    for (let i = 0; i <= 20; i++) {
      let p = new THREE.Vector3().lerpVectors(v1, v2, i/20)
      p.normalize()
      p.multiplyScalar(5 + 0.1 * Math.sin(Math.PI*i/20));
      points.push(p)
    }
    let path = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(path, 20, 0.01, 2, false);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
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

const textureLoader = new THREE.TextureLoader()
//create Jaranius
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

//lights
const ambient = new THREE.AmbientLight(0xffffff, 0.1); //0.01
scene.add(ambient);

const jaraniusLight = new THREE.PointLight(0xffffff, 0.01);
jaraniusLight.position.set(0, 0, 0);
scene.add(jaraniusLight);

//Math functions
function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomBell(min, max) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-7.0 * Math.log(u)) * Math.cos(7.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return getRandomBell(min, max) // resample between 0 and 1
    num = Math.floor(num * (max - min + 1) + min);
    return num
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convertLatLngtoCartesian(lat, lng, radius) {
    let latRad = lat * Math.PI / 180;
    let lngRad = lng * Math.PI / 180;

    let x = radius * Math.sin(latRad) * Math.sin(lngRad)
    let y = radius * Math.cos(latRad)
    let z = radius * Math.sin(latRad) * Math.cos(lngRad)

    return {
        x, y, z
    }
}

function convertCartesiantoLatLng(x, y, z) {
    let latRad = Math.acos(y / (Math.sqrt(Math.pow(z, 2) + Math.pow(x, 2) + Math.pow(y, 2))));
    let lngRad = x / z;

    let lat = latRad / Math.PI * 180;
    let lng = lngRad / Math.PI * 180;

    return {
        lat, lng
    }
}

/* function findTangent(tangentPoint) {
    let normal = new THREE.Vector3().copy( tangentPoint )
    //normal.sub( sphere.position ) // remove sphere translation

    let plane = new THREE.Mesh(
        new THREE.PlaneGeometry( 5.5, 5.5 ),
        new THREE.MeshBasicMaterial( { color: 'red' } )
    )
    plane.lookAt( normal )
    plane.position.copy( tangentPoint )
    return { plane }
} */

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

    if (selectedPin != null) {
        let posLatLng = convertCartesiantoLatLng(selectedPin.position.x, selectedPin.position.y, selectedPin.position.z);
        // up
        if (keyCode == 38) {
            posLatLng.lat -= 1;
            // down
        } else if (keyCode == 40) {
            posLatLng.lat += 1;
            // left
        } else if (keyCode == 37) {
            posLatLng.lng -= 1;
            // right
        } else if (keyCode == 39) {
            posLatLng.lng += 1;
        }
        const pinSphereRadius = 5.01
        let posXYZ = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng, pinSphereRadius);
        selectedPin.position.set(posXYZ.x, posXYZ.y, posXYZ.z);
    }
    render();
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


