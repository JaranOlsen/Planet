import * as THREE from 'three'
import { OrbitControls } from './orbitcontrols'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import { Float32BufferAttribute } from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  50,
  innerWidth/innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer(
  {
    antialias: true
  }
)
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)
const controls = new OrbitControls( camera, renderer.domElement );

//create a sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50), 
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load('./img/diffuse.png')
        }
      }
})
)

scene.add(sphere)

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

const starGeometry = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff
})

const starVertices = []
for (let i = 0; i < 10000; i++) {
  const x = (Math.random() - 0.5) * 2000
  const y = (Math.random() - 0.5) * 2000
  const z = (Math.random() - 0.5) * 2000
  starVertices.push(x, y, z)
}

starGeometry.setAttribute('position', new Float32BufferAttribute(starVertices, 3))

const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

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