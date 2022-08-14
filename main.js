import * as THREE from 'three'
import { OrbitControls } from './orbitcontrols'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import { BackSide, Float32BufferAttribute, TextureLoader, Vector2 } from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  50,
  innerWidth/innerHeight,
  0.1,
  1000
)

//Loading screen
const loadingManager = new THREE.LoadingManager();

// loadingManager.onStart = function(url, loaded, total) {
//     console.log('Started loading: $(url)');
// }

const progressBar = document.getElementById('progress-bar');

loadingManager.onProgress = function(url, loaded, total) {
  progressBar.value = (loaded / total) * 100;
}

const progressBarContainer = document.querySelector('pogress-bar-container');

loadingManager.onLoad = function() {
  progressBarContainer.style.display = 'none';
}

loadingManager.onError = function(url) {
  console.error('Problem loading: $(url)');
}

const textureLoader = new TextureLoader(loadingManager); 
//remember to change code in sphere creation:
// textureLoader.load('assets/img/diffuse.png', function(diffuse){});
// scene.add(diffuse);

//Renderer
const renderer = new THREE.WebGLRenderer(
  {
    antialias: true
  }
)
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)
const controls = new OrbitControls( camera, renderer.domElement );

//Raycaster
const addNewBoxMesh = (x, y, z) => {
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const boxMaterial = new THREE.MeshPhongMaterial ({color: 0xaa4488});
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  boxMesh.position.set(x, y, z);
  test.scene.add(boxMesh);
};

addNewBoxMesh(0, 2, 0);
addNewBoxMesh(2, 2, 0);
addNewBoxMesh(-2, 2, 0);
addNewBoxMesh(0, 2, -2);
addNewBoxMesh(2, 2, -2);
addNewBoxMesh(-2, 2, -2);
addNewBoxMesh(0, 2, 2);
addNewBoxMesh(2, 2, 2);
addNewBoxMesh(-2, 2, 2);

const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

const onMouseMove = (event) => {
  //calculate pointer position in normalized device coordinates
  //(-1 to +1) for both components
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, test.camera);
  const intersects = raycaster.intersectObjects(test.scene.children);

  // for (let i = 0; i < intersects.length; i++) {
  //   console.log(intersects);
  // }

  //change color of objects intersecting the raycaster
  // for (let i = 0; i < intersects.length; i++) {
  //   intersects[i].object.material.color.set(0xff0000);
  // }
  if (intersects.length > 0) {
    intersects[0].object.material.color.set(0xff0000);
  }
};

window.addEventListener('mousemove', onMouseMove);

//create shader sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50), 
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load('assets/img/diffuse.png')
        }
      }
})
)
//sphere.position.set(-7, 0, 0)
scene.add(sphere)

//create phong material sphere
const sphere2 = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('assets/img/diffuse.png'),
    normalMap: new THREE.TextureLoader().load('assets/img/normal.png'),
    normalScale: Vector2(1,1),
    specularMap: new THREE.TextureLoader().load('assets/img/roughness.png'),
    flatShading: true,
    side: BackSide
  })
  )

sphere2.position.set(7, 0, 0)
scene.add(sphere2)

//create lights
const sun = new THREE.DirectionalLight({color: 0xffffff, intensity: 1});
sun.position.set(50, 40, 20)
sun.target.set(0, 0, 0)
scene.add(sun)


//create atmosphere
const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50), 
  new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: THREE.AdditiveBlending, side: THREE.BackSide
})
)

atmosphere.scale.set(1.1, 1.1, 1.1)

scene.add(atmosphere)

//create mindmap
const mindmap = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.1, 0.001, 5, 5, 1),
  new THREE.MeshBasicMaterial({
    color: 0xff00000,
  })
)

mindmap.position.set(0, 0, 6)

scene.add(mindmap)

//create starfield
const starGeometry = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 15
})

const starVertices = []
for (let i = 0; i < 10000; i++) {
  const x = (Math.random() - 0.5) * 30000
  const y = (Math.random() - 0.5) * 30000
  const z = (Math.random() - 0.5) * 30000
  starVertices.push(x, y, z)
}

starGeometry.setAttribute('position', new Float32BufferAttribute(starVertices, 3))

const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

//gutta
for (let i = 0; i < 50; i++) {
  const guttaMesh = new THREE.Mesh(guttaGeometry, guttaMaterial);
  guttaMesh.matrixAutoUpdate = false;
  scene.add(guttaMesh);

  const gutta = new YUKA.Gutta();
  gutta.setRenderComponent(guttaMesh, sync);

  gutta.rotation.fromEuler(0, Math.PI)
}

//lights
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-3, 12, 20);
scene.add(light);

//camera and controls
camera.position.z = 15
controls.enablePan = false
controls.maxDistance = 100
controls.minDistance = 6
controls.zoomSpeed = 0.2
controls.rotateSpeed = 0.2

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  sphere.rotation.y += 0.0003
  //sphere.rotation.x += 0.001
  controls.update
}
animate() 