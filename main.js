import * as THREE from 'three';
import {Float32BufferAttribute, FrontSide, AdditiveBlending} from 'three';
//import {OrbitControls} from "/node_modules/three/examples/jsm/controls/OrbitControls.js"; 
import {OrbitControls} from "three/addons/controls/OrbitControls.js"; //use in production build
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

import diffuseTexture from "./img/diffuse8k.jpg"
import normalTexture from "./img/normal.png"
import starTexture from "./img/star.png"
import roughnessTex from "./img/roughness.png"
import moonTex from "./img/moon.jpg"
import moon2Tex from "./img/moon2.png"
import moon3Tex from "./img/moon3.png"
import clouds2Tex from "./img/clouds2.png"
import cloudsAlphaTex from "./img/cloudsalpha.jpg"

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


//create text
const loader = new FontLoader();
loader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

    const color = 0x006699;
    const matLite = new THREE.MeshBasicMaterial( {
        color: color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
    } );
    const message = '   Path of\nthe Heart.';
    const shapes = font.generateShapes( message, 100 );
    const geometry = new THREE.ShapeGeometry( shapes );
    geometry.computeBoundingBox();
    const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
    geometry.translate( xMid, 0, 0 );

    for (let i = 0; i < 1; i++) {
    const text = new THREE.Mesh( geometry, matLite );
    let lat = convertLatLngtoCartesian(i,i);
    let tangentP = new THREE.Vector3(lat.x, lat.y, lat.z);
    findTangent(tangentP);
    text.position.x = lat.x;
    text.position.y = lat.y;
    text.position.z = lat.z;
    text.rotation.x = 0;
    text.rotation.y = 0;
    text.rotation.z = 0;
    text.scale.x = 0.001;
    text.scale.y = 0.001;
    text.scale.z = 0.001;
    scene.add( text );
    }
} );

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
const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5.3, 50, 50),
    new THREE.MeshLambertMaterial({
        color: 0xaabbff,
        transparent: true,
        opacity: 0.3,
        blending: AdditiveBlending
    })
)
//jaranius.add(atmosphere);

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
const ambient = new THREE.AmbientLight(0xffffff, 0.01);
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

function convertLatLngtoCartesian(lat, lng) {
    let latRad = lat * Math.PI / 180;
    let lngRad = lng * Math.PI / 180;

    let x = 5.01 * Math.sin(latRad) * Math.sin(lngRad)
    let y = 5.01 * Math.cos(latRad)
    let z = 5.01 * Math.sin(latRad) * Math.cos(lngRad)

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

function findTangent(tangentPoint) {
    let normal = new THREE.Vector3().copy( tangentPoint )
    //normal.sub( sphere.position ) // remove sphere translation

    let plane = new THREE.Mesh(
    new THREE.PlaneGeometry( 5.5, 5.5 ),
    new THREE.MeshBasicMaterial( { color: 'red' } )
    )
    plane.lookAt( normal )
    plane.position.copy( tangentPoint )
    scene.add(plane);
}

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

//create red coordpoints
/* const coordPointred = new THREE.BufferGeometry()
const coordPointMaterialred = new THREE.PointsMaterial({
    size: 0.03,
    color: 0xff0000,
})
const coordVerticesred = []
for (let lt = 5; lt < 180; lt += 5) {
    for (let lg = 0; lg < 360; lg++) {
        let xyz = convertLatLngtoCartesian(lt, lg);
        coordVerticesred.push(xyz.x, xyz.y, xyz.z)
    }
}
for (let lt = 5; lt < 180; lt++) {
    for (let lg = 0; lg < 360; lg += 5) {
        let xyz = convertLatLngtoCartesian(lt, lg);
        coordVerticesred.push(xyz.x, xyz.y, xyz.z)
    }
}
coordPointred.setAttribute('position', new Float32BufferAttribute(coordVerticesred, 3))
const coordsred = new THREE.Points(coordPointred, coordPointMaterialred)
scene.add(coordsred) */

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

    const elem = document.createElement('div');
    elem.textContent = txt;
    labelContainerElem.appendChild(elem);

    let pos = convertLatLngtoCartesian(lat, lng);
    pin.position.set(pos.x, pos.y, pos.z);
    scene.add(pin);
    pinPositions.push(pin);

    return {pin, elem, originalColor};
}

const coordsList = ["the essence of love / meaning", 13.5, 90, "the essence of wisdom / will", 13.5, 210, "the essence of salvation / peace", 13.5, 330, "Rewiring the gut", 18, 330, "Rewiring the heart", 18, 90, "Rewiring the head", 18, 211, "Unconditional Peace", 21, 330, "Transcendence", 35, 328, "Existential exploration / Insight meditation", 52, 321, "Deep states of calm", 67, 307, "real meaning", 21, 245, "potentially the source of not-so-obvious (but highly attractive) “qualities”", 23, 234, "freedom", 28, 237, "unshakable peace", 30, 230, "salvation", 27, 227, "true wisdom", 32, 235, "why important?", 22.5, 223, "Unconditional Truth", 22.5, 211, "must be reduced to", 29, 205, "Conventional truth", 35, 211, "must be transcended", 40, 217, "limitations of", 35, 223, "contextual", 44, 232, "ways of cutting the apple", 36, 238, "lost in reduction", 41, 237, "Diversity", 35, 199, "Dualist ontologies", 31, 183, "Dualism", 36, 177, "to be communicated", 40, 205, "to realise", 29, 217, "Unity", 22.5, 199, "Monist ontologies", 27.5, 183, "Idealism", 24, 181, "Panpsychism", 24, 173, "Physicalism", 24, 165, "Emergence", 27, 167, "weak", 27, 160, "strong", 32, 170, "the essence of “you” / life", 31, 245, "all-encompassing love", 27, 248, "the core of will / agency", 24, 250, "Unconditional Love", 21, 90, "Atammayatā", 21.5, 101, "Suññatā", 24, 105, "Tathātā", 27, 108, "Liberation", 31, 108, "from", 31, 94, "delusion", 34, 94, "hatred", 33, 89, "greed", 29, 90, "Fundamental perspective change", 30, 131, "From paradoxes to wisdom", 25, 131, "Direct experience-based understanding", 35, 150, "Intellectual understanding", 51, 159, "Basic conceptual understanding", 72, 162, "Levels of understanding", 81, 169, "Analysis / questioning", 79, 187, "Open-mindedness", 89, 184, "Observation", 94, 170, "Indirect", 96, 164, "Instruments", 97, 158, "Advantages", 96, 150, "Sensing", 92, 159, "Introspection", 90, 158, "Limitations", 93, 150, "Biases", 91, 150, "Direct", 92, 164, "Strategies for Understanding", 98, 197, "Dogmatism", 109, 193, "Thought labyrinths / rumination", 103, 181, "Settles in: Convergence between assumptions and reality", 111, 212, "Depth of transformation", 98, 237, "Brain", 82, 257, "Opinions", 86, 258, "Intellectual view", 80, 262, "Identification", 75, 243, "Witnessing", 64, 246, "What am I not?", 64, 236, "Two methods of approach", 60, 235, "What am I?", 55, 235, "running the risk of", 55, 228, "Eternalist view", 55, 219.5, "Drowning the baby in the bathwater", 53, 219.5, "The fundamental nature of awareness", 60, 220, "The Screen", 53, 212, "What can we know?", 57, 207, "The content", 53, 205, "The way it is", 45, 205, "Reductive categories", 45, 217, "Direct", 66, 210, "Biases", 70, 214, "Experimentation", 69, 202, "Mathematics", 72, 201, "Statistics", 74, 201, "Indirect", 66, 203, "Limitations", 72, 214, "Advantages", 74, 213, "running the risk of", 64, 228, "Annihilationist view", 64, 219.5, "Throwing the baby out with the bathwater", 66, 219.5, "Re-uniting", 49, 246, "Gut", 39, 259, "Perceptual view", 34, 262, "Experiential", 41, 265, "What do I take to be me?", 82, 227, "What ceases?", 84, 225, "What persists?", 86, 225, "Feelings", 76, 227, "Body", 77, 221, "Will", 87, 232, "Perceptions", 76, 233, "Consciousness", 89, 226, "Thoughts", 84, 236, "Memory", 80, 237, "Heart", 61, 263, "Action", 65, 266, "Felt view", 58, 267, "Existential problem: What - and how - do I know?", 150, 210, "The Human - Reason", 162, 211, "What matters to your head", 167, 211, "What matters to your heart", 167, 90, "The Lion - Thymos", 162, 90, "Existential problem: What gives life meaning?", 151, 91, "Settles in: Happiness, love, meaning", 135, 91, "Strategies for happiness / love", 128.5, 91.5, "getting, avoiding, manipulating, changing, controlling, collecting", 120, 98, "doing", 120, 111, "past / future", 122, 112, "personal identification", 124.5, 114.5, "depended on comparison", 127, 114, "non-sustainable happiness", 129, 114, "accepting, letting be, allowing, embracing, opening, experiencing", 120, 81, "being", 121, 68, "present", 123, 68, "selfless", 125, 68, "sustainable happiness", 130, 67, "independent of comparison", 127, 66, "The threefold training", 102.5, 71, "Sīla", 95.5, 63, "Methods", 108, 59, "Restraint", 102.5, 57, "Generosity", 111, 64, "The brahmavihāras", 113, 55, "Loving-kindness", 117, 58, "Compassion", 118, 51, "Equanimity", 110, 52, "Sympathetic joy", 114, 46, "Self-compassion", 105, 52, "Emotional blockages", 66, 30, "Pīti", 56, 53, "Components", 57, 60, "Sukha", 53, 57.5, "Ekaggatā", 53.5, 64, "Vitakka", 61, 61, "Vicāra", 60, 55, "Challenging emotions", 42, 40, "shame", 44, 48, "grief", 41, 48, "anger / hate", 38, 48, "pride / conceit", 35, 47, "doubt / confusion", 48.5, 49, "fear", 46, 50, "Low", 125, 40, "Level of experiencing", 140, 25, "Emotions", 146, 10, "Components of emotion", 141, 11, "Emotional style", 143, 1, "Types of emotion", 150, 20, "Degree of emotional processing", 146, 28, "High", 80, 11, "Samādhi", 64.5, 71.5, "Methods", 70, 58, "Directed attention", 75, 57, "Bodily sensations", 80, 59, "Breath", 79, 51, "Mantra", 76, 47, "Choiceless awareness", 69, 48, "Open awareness", 72, 48, "Progression", 53.5, 82.5, "outward to inward", 56.5, 84, "complexity to simplicity", 49, 80, "movement to stillness", 52, 76, "doing to being", 56.5, 76, "coarse to refined", 47, 86, "judging to embracing", 54, 75, "diversity to unity", 43, 93, "Hindrances / Obstacles", 42, 68, "habits", 44, 62, "distracting", 48.5, 57, "indulgent", 44, 55, "avoidant", 46, 55, "evolutionary conditioned ignorance", 35, 65, "wrong views about", 38, 61, "happiness / suffering", 41, 56, "reality", 38, 54, "self", 35, 54, "Seven factors of awakening", 98, 81, "mindfulness", 91, 73, "investigation", 85, 71, "energy", 79, 71, "rapture", 73, 72, "tranquility", 68.5, 77.5, "samadhi", 62, 87, "equanimity", 49, 95, "Natural unfolding", 98, 93, "virtuous conduct", 92, 91, "freedom from remorse", 90, 82, "gladness", 85, 77, "rapture", 81, 77, "bodily tranquility", 76, 77, "bliss", 72, 81, "samadhi", 68, 87, "seeing things as they are", 60, 95, "disillusionment", 53, 99, "dispassion", 44, 100, "freedom and release", 36, 102, "Motivated by: Honour / Shame", 157, 79, "Mode: Empathy / Intuition / Faith", 155, 104, "Concerned with: Mid-term goals", 162, 106, "Communal well-being", 162, 119, "Growth potential: Can be trained", 163, 72, "Cleaning up", 162, 59, "What matters to your gut / genitals", 167, 330, "The Beast - Appetite", 162, 328, "Existential problem: What do I need to function?", 153, 332, "Path of the Gut", 143, 333, "Settles in: Peace", 134, 339, "(Even need for excitement settles in peace)", 137, 347, "Strategies for peace", 119, 339, "In terms of practical therapy work", 128, 326, "Mechanism of change", 135, 322, "Method", 130, 311, "Islands of work in a sea of empathy", 122, 303, "In terms of early development", 126, 353, "Authenticity vs. attachment", 134, 4, "In terms of needs", 103, 334, "Making adaptations in the world", 112, 323, "Adapting one’s mind", 92, 323, "In terms of emotion", 103, 346, "Embracing vulnerability", 80, 343, "Resisting vulnerability", 125, 10, "Motivated by: Pain / Pleasure", 155, 319, "Growth potential: Can be tamed", 162, 311, "Growing up", 163, 298, "Concerned with: Immidiate goals", 163, 347, "Individual survival", 162, 2, "Mode: Action / Needs / Emotion", 154, 345, "Needs", 148, 7, "Mode: Thinking / Exploration", 156, 220, "Motivated by: Truth / Falsity", 156, 200, "Concerned with: Long-term goals", 162, 225, "Abstract principles", 162, 235, "Growth potential: Can discover principles", 161, 195, "Waking up", 161, 180, "What is life?", 82, 207, "What is death?", 84, 207, "What am I?", 86, 207, "Ontology - What is reality?", 56.5, 182, "God?", 62, 177, "Consciousness?", 59.5, 172, "Space?", 52, 173, "Time?", 54, 170, "Matter?", 57, 170, "Ontologies", 29, 184, "Epistemology - how can we get true knowledge?", 62, 204, "What can’t we know?", 57, 195, "Pañña", 67.5, 102, "Methods", 77, 101, "Four noble truths", 72, 108, "Dependent origination", 76, 111, "Body contemplation", 87, 100, "Contemplation of the characteristics of conditioned phenomena", 81, 111, "Dukkha", 78, 122, "The inherent unsatisfactoriness of constructed/conditioned phenomena", 77, 130, "Must be understood", 82, 138, "Cause and effect", 84, 124, "That craving for sensuality, being or non-being is a necessary cause for dissatisfaction", 68, 145, "Must be abandoned", 72, 148, "Pain ⋅ resistance = suffering", 60, 146, "That letting be leads to peace", 53, 142, "Must be realized", 50, 147, "That certain conditions lead to these insights", 46, 122, "Must be practiced", 42, 128, "Anatta", 81, 122, "Anicca", 76, 122, "Six sense-spheres", 86.5, 108, "Insights", 64, 115, "Nature of fundamental reality", 21, 174, "Matter", 22, 165, "Consciousness", 22, 184, "Acceptance and agency", 80, 3, "Motivation split", 82, 289, "Transcendence needs", 82, 307, "Fulfilment needs", 95, 295, "Psychological needs", 109, 295, "Basic needs", 118, 310, "Assertive anger / self-compassion", 91, 10, "Grief / hurt", 91, 356, "Rejecting anger", 110, 25, "Global distress", 121, 18, "Fear / shame", 110, 10, "Needs", 103, 15, "Negative self-evaluation", 103, 3, "Meaning protest", 91, 282, "Path of the Head", 93, 191, "Unfinished business", 100, 277, "Case formulation", 106, 277, "Wisdom", 112, 285, "Empathy", 119, 292, "Presence", 120, 286, "Focusing", 123, 280, "Attunement", 126, 290, "Empathic exploration", 132, 283, "Unconditional positive regard", 129, 298, "Alliance work", 137, 301, "Conflict splits", 112, 274, "Path of the Heart", 112.5, 81, "Anxiety splits", 119, 275, "Evocative unfolding", 128, 279, "Trauma retelling", 136, 282, "Self-soothing", 143, 293]
let pins = []
for (let i = 0; i < coordsList.length; i+=3) {
    let color = 0xff0000;
    if (coordsList[i+2] < 60) { 
        color = 0xcc8888 //0x845EC2;
    } else if (coordsList[i+2] < 120) { 
        color = 0xaaaa88 //0xD65DB1;
    } else if (coordsList[i+2] < 180) { 
        color = 0x88cc88 //0xFF6F91;
    } else if (coordsList[i+2] < 240) { 
        color = 0x88aaaa //0xFF9671;
    } else if (coordsList[i+2] < 300) { 
        color = 0x8888cc //0xFFC75F;
    } else { 
        color = 0xaa88aa //0xF9F871;
    }
    let pin = instantiatePin(coordsList[i], coordsList[i+1], coordsList[i+2], 0.05, color, color);
    pins.push(pin);
}

/* for (let lt = 10; lt < 171; lt += 10) {
    for (let lg = 0; lg < 360; lg += 10) {
        const color1 = 0x88cc88
        let pin = instantiatePin(" ", lt, lg, 0.05, color1, color1);
        pins.push(pin);
    }
} */


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
        let posXYZ = convertLatLngtoCartesian(posLatLng.lat, posLatLng.lng);
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

//CSS dynamic change
/* function changeElement(id, distance) {
    px = distance;
    id.style.setProperty('--px', distance)
    let el = document.getElementById(id);
    el.style.fontSize = distance; 
}*/

function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    //pinLabels
    pins.forEach((pinInfo) => {
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
            /* let fSize = "\"" + (51- Math.floor(camera.position.distanceTo(pin.position))) + "px \"";
            document.getElementById('labels').style.fontSize = fSize; */

            // convert the normalized position to CSS coordinates
            const x = (tempV.x * .5 + .5) * canvas.clientWidth;
            const y = (tempV.y * -.5 + .5) * canvas.clientHeight;

            // move the elem to that position
            elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;

            // set the zIndex for sorting
            elem.style.zIndex = (-tempV.z * .5 + .5) * 100000 | 0;
        }
    });

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


