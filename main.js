import * as THREE from 'three';
import DragControls from '/node_modules/drag-controls/src/drag-controls.js';
import {OrbitControls} from '/node_modules/three/examples/jsm/controls/OrbitControls.js';
import {Float32BufferAttribute, FrontSide, AdditiveBlending, TextureLoader, Mesh} from 'three';

/* import imgUrl from '/public/assets/img/diffuse.png'
document.getElementById('hero-img').src = imgUrl */


//DragControls.install({THREE: THREE});

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

//create starfield
const starGeometry = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({
  size: 5,
  map: new THREE.TextureLoader().load("public/assets/img/star.png"),
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
  var pivot1 = new THREE.Object3D();
  var pivot2 = new THREE.Object3D();
  var pivot3 = new THREE.Object3D();

  pivot1.rotation.y = 0;
  pivot2.rotation.y = 0; //2 * Math.PI / 3;
  pivot3.rotation.y = 0; //4 * Math.PI / 3;

  center.add( pivot1 );
  center.add( pivot2 );
  center.add( pivot3 );

//create Jaranius
const jaranius = new THREE.Mesh(
  new THREE.SphereGeometry(5, 250, 250),
  new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('Planet/public/assets/img/diffuse.jpg'),
    normalMap: new THREE.TextureLoader().load('public/assets/img/normal.png'),
    roughnessMap: new THREE.TextureLoader().load('public/assets/img/roughness.png'),
    metalness: 0,
    flatShading: false,
    side: FrontSide,
  })
  )
scene.add(jaranius)

//create cloud layer
const clouds = new THREE.Mesh(
  new THREE.SphereGeometry(5.05, 50, 50),
  new THREE.MeshLambertMaterial({
    alphaMap: new THREE.TextureLoader().load('public/assets/img/clouds2.png'),
    map: new THREE.TextureLoader().load('public/assets/img/clouds2.png'),
    transparent: true
  })
  )
jaranius.add(clouds)

//create atmosphere
const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(5.3, 50, 50),
  new THREE.MeshLambertMaterial({
    color: 0xaabbff,
    transparent: true,
    opacity: 0.3,
    blending: AdditiveBlending
  })
)
jaranius.add(atmosphere);

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

let moon1 = new Moon(1.5, 'public/assets/img/moon.jpg', 110, -0.0005, pivot1, 0.4);
let moon2 = new Moon(2.5, 'public/assets/img/moon2.png', 190, -0.0003, pivot2, 0.1);
let moon3 = new Moon(1, 'public/assets/img/moon3.png', 250, -0.0001, pivot3, 0.005);
let moons = [moon1, moon2, moon3];

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
const ambient = new THREE.AmbientLight(0xffffff, 0.5);  //0.01
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
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -7.0 * Math.log( u ) ) * Math.cos( 7.0 * Math.PI * v );
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

function convertLatLngtoCartesian(lat, lng){
  let latRad = lat * Math.PI / 180;
  let lngRad = lng * Math.PI / 180;

  let x = 5.01 * Math.sin(latRad) * Math.sin(lngRad)
  let y = 5.01 * Math.cos(latRad)
  let z = 5.01 * Math.sin(latRad) * Math.cos(lngRad)

  return {
    x, y, z
  }
}

function convertCartesiantoLatLng(x, y, z){
  let latRad = Math.acos(y / (Math.sqrt(Math.pow(z, 2) + Math.pow(x, 2) + Math.pow(y, 2))));
  let lngRad = x / z;

  let lat = latRad / Math.PI * 180;
  let lng = lngRad / Math.PI * 180;

  return {
    lat, lng
  }
}

//create coordpoints
const coordPoint = new THREE.BufferGeometry()
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
scene.add(coords)

//create red coordpoints
const coordPointred = new THREE.BufferGeometry()
const coordPointMaterialred = new THREE.PointsMaterial({
  size: 0.03,
  color: 0xff0000,
})

const coordVerticesred = []
for (let lt = 5; lt < 180; lt+=5) {
  for (let lg = 0; lg < 360; lg++) {
    let xyz = convertLatLngtoCartesian(lt, lg);
    coordVerticesred.push(xyz.x, xyz.y, xyz.z)
  }
}
for (let lt = 5; lt < 180; lt++) {
  for (let lg = 0; lg < 360; lg+=5) {
    let xyz = convertLatLngtoCartesian(lt, lg);
    coordVerticesred.push(xyz.x, xyz.y, xyz.z)
  }
}

coordPointred.setAttribute('position', new Float32BufferAttribute(coordVerticesred, 3))

const coordsred = new THREE.Points(coordPointred, coordPointMaterialred)
scene.add(coordsred)


//create pins
let pinPositions = []
const labelContainerElem = document.querySelector('#labels');

function instantiatePin(txt, lat, lng, radius, color, originalColor) {
  const pin = new THREE.Mesh(
    new THREE.SphereBufferGeometry (radius, 20, 20),
    new THREE.MeshBasicMaterial({
      color: color,
    })
  )

  originalColor = originalColor;

  const elem = document.createElement('div');
  elem.textContent = txt + " lat: " + lat + " lng: " + lng;
  labelContainerElem.appendChild(elem);

  let pos = convertLatLngtoCartesian(lat, lng);
  pin.position.set(pos.x, pos.y, pos.z);
  scene.add(pin);
  pinPositions.push(pin);

  return {pin, elem, originalColor};
}

let things = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
let pins = []
for (let lt = 10; lt < 171; lt+=10) {
  for (let lg = 0; lg < 360; lg+=10) {
    const color1 = 0x88cc88
    let pin = instantiatePin(" ", lt, lg, 0.05, color1, color1);
    pins.push(pin);
  }
}
  /* for (let i = 0; i < 200; i++) {
    const color1 = 0x88cc88
    const color2 = 0xcc8888
    const color3 = 0x8888cc
    const name1 = things[Math.floor(Math.random()*things.length)];
    const name2 = things[Math.floor(Math.random()*things.length)];
    const name3 = things[Math.floor(Math.random()*things.length)];
    let pin1 = instantiatePin(name1, getRandomBell(0, 180), getRandomInt(0, 120), Math.random()/10, color1, color1);
    let pin2 = instantiatePin(name2, getRandomBell(0, 180), getRandomInt(120, 240), Math.random()/10, color2, color2);
    let pin3 = instantiatePin(name3, getRandomBell(0, 180), getRandomInt(240, 360), Math.random()/10, color3, color3);
    pins.push(pin1, pin2, pin3);
  } */


/* const mouseControls = new THREE.DragControls( moons, camera, renderer.domElement);
mouseControls.addEventListener( 'drag', render ); */


function unhoverPin() {
  for ( let i = 0; i < pins.length; i ++ ) {
		pins[i].pin.material.color.set(pins[i].originalColor);
	}
}

function hoverPin() {
  raycaster.setFromCamera(pointer, camera); 
  const intersects = raycaster.intersectObjects( pinPositions);
  for ( let i = 0; i < intersects.length; i ++ ) {
		intersects[ i ].object.material.color.set(0xff0000);
	}
}

document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    var keyCode = event.which;
    
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
  const intersectedObjects = raycaster.intersectObjects( pinPositions, false);
  const show = intersectedObjects.length && pin === intersectedObjects[0].object;
  //camera.position.distanceTo(tempV) > pin.geometry.boundingSphere.radius * 250 : added to hide small pins when far away
  if (!show || Math.abs(tempV.z) > 1 || camera.position.distanceTo(pin.position) > pin.geometry.parameters.radius * 150 || camera.position.distanceTo(pin.position) > camera.position.distanceTo(middleOfPlanet)) {
    // hide the label
    elem.style.display = 'none';
  } else {
    // un-hide the label
    elem.style.display = '';
  

  // convert the normalized position to CSS coordinates
  const x = (tempV.x *  .5 + .5) * canvas.clientWidth;
  const y = (tempV.y * -.5 + .5) * canvas.clientHeight;

  // move the elem to that position
  elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;

  // set the zIndex for sorting
  elem.style.zIndex = (-tempV.z * .5 + .5) * 100000 | 0;
  }
  }); 

  function onPointerMove( event ) {
    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  }

 
  function onClick( event ) {
    raycaster.setFromCamera(pointer, camera); 
    const intersects = raycaster.intersectObjects( pinPositions);
    if (intersects.length > 0) {
      selectedPin = intersects[0].object;
    } 
  }
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('click', onClick);
  unhoverPin();
  hoverPin();

  renderer.render(scene, camera);

  requestAnimationFrame(render);
  renderer.render(scene, camera)
  center.rotation.y += -0.00001;
  pivot1.rotation.y += -0.0003;
  pivot2.rotation.y += -0.00003;
  pivot3.rotation.y += -0.000003;
  //jaranius.rotation.y += 0.0003
  clouds.rotation.y += 0.0003

  controls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);
  controls.update();
}

requestAnimationFrame(render);


