import * as THREE from 'three';
import * as YUKA from 'yuka';
import {Float32BufferAttribute, FrontSide, AdditiveBlending, BackSide, DoubleSide, Vector3, DiscreteInterpolant} from 'three';
import { tagList } from './tagData.js'
import { imgList } from './imgData.js'
import { tagConnections } from './tagConnectionData.js'
import {getRandomNum, getRandomBell, getRandomInt, convertLatLngtoCartesian, convertCartesiantoLatLng, convertLatLngtoCartesianAndBack} from './mathScripts.js'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import { FontLoader } from 'three/addons/loaders/FontLoader.js'; 

//    IMPORT SHADERS
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl';

//    IMPORT TEXTURES
import diffuseTexture from "./img/terrain8k.jpg"
import normalTexture from "./img/normal8k.jpg"
import roughnessTex from "./img/roughness2k.jpg"
import clouds2Tex from "./img/clouds2.png"
import cloudsAlphaTex from "./img/cloudsalpha.jpg"
import starTexture from "./img/star.png"
import moonTex from "./img/moon.jpg"
import moon2Tex from "./img/moon2.png"
import moon3Tex from "./img/moon3.png"

//    IMPORT IMAGES
import idealism from "./img/idealism.png"
const tagFont = "https://jaranolsen.github.io/Planet/SourceSans3_Regular.json"



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
let activeCarousel

//create Slide carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const carousel = document.querySelector('.carousel')
        if (button.dataset.carouselButton === "exit") {
            console.log("trying to close", activeCarousel);
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

    pivot1.rotation.y = 0;
    pivot2.rotation.y = 0; //2 * Math.PI / 3;
    pivot3.rotation.y = 0; //4 * Math.PI / 3;

    center.add(pivot1);
    center.add(pivot2);
    center.add(pivot3);

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
const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(5.05, 50, 50),
    new THREE.MeshLambertMaterial({
        alphaMap: textureLoader.load(cloudsAlphaTex),
        map: textureLoader.load(clouds2Tex),
        transparent: true
    })
)
jaranius.add(clouds)

// create atmosphericLight
const atmosphericLight = new THREE.Mesh(
    new THREE.SphereGeometry(5.01, 250, 250),
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
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
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

    let boxLatLng = convertLatLngtoCartesian(lat, lng, 5.1);
    let boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
    box.lookAt( boxRotationVector )
    box.position.copy( boxRotationVector )

    jaranius.add( box );
}

for (let i = 0; i < imgList.length; i++) {
    instantiateImg(idealism, imgList[i][2], imgList[i][3] - 180, imgList[i][4] / 500);
}

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
        let tag = instantiateTag(tagList[i][1], tagList[i][2], tagList[i][3] - 180, tagList[i][4], tagList[i][4], tagList[i][5] / 100000);
    }
} );

//create pins
let pinPositions = []
//const labelContainerElem = document.querySelector('#labels');

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

    jaranius.add(pin);
    pinPositions.push(pin);

    return {pin, originalColor}; //elem
}

let pins = []
for (let i = 0; i < tagList.length; i++) {
    let pin = instantiatePin(tagList[i][1], tagList[i][2], tagList[i][3] - 180, tagList[i][4], tagList[i][4], tagList[i][5] / 1500);
    pins.push(pin);
}

//create connections
let curveThickness = 0.01
let curveRadiusSegments = 3
let curveMaxAltitude = 0.05
let curveMinAltitude = 5.01

for (let i = 0; i < tagList.length; i++) {
    for (let j = 0; j < tagConnections.length; j++) {
        if (tagList[i][0] == tagConnections[j][0]) {
            for (let k = 1; k < tagConnections[j].length; k++) {
                for (let l = 0; l < tagList.length; l++) {
                    if (tagList[l][0] == tagConnections[j][k]) {
                        let t1 = convertLatLngtoCartesian(tagList[i][2], tagList[i][3] - 180, curveMinAltitude);
                        let t2 = convertLatLngtoCartesian(tagList[l][2], tagList[l][3] - 180, curveMinAltitude);
                        getCurve(t1, t2);
                    }
                }
            }
        }
    }
}

function getCurve(p1, p2){
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
    const geometry = new THREE.TubeGeometry(path, 20, curveThickness, curveRadiusSegments, false);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15
    });
    const curve = new THREE.Mesh(geometry, material);
    curve.renderOrder = -10
    jaranius.add(curve);
  }

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
    moonlight.castShadow = true;
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
            //this.geometry.rotateX(Math.PI/2)
            this.geometry.rotateZ(Math.PI/2)
        this.material = new THREE.MeshBasicMaterial({
            color: 0xffffff, 
            side: DoubleSide,
            transparent: true,
            opacity: 0.5
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
const ambient = new THREE.AmbientLight(0xffffff, 0.01); //0.01
scene.add(ambient);

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
            if (camera.position.distanceTo(selectedPin.position) < 2) {
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

    center.rotation.y += -0.00001;
    pivot1.rotation.y += -0.0003;
    pivot2.rotation.y += -0.00003;
    pivot3.rotation.y += -0.000003;
    jaranius.rotation.y += 0.000003;
    clouds.rotation.y += 0.0003;
    controls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);

    controls.update();
    
    requestAnimationFrame(render);
}

requestAnimationFrame(render);


