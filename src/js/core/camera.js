import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';

const canvas = document.querySelector('#canvas');

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.logarithmicDepthBuffer = false; // turn on if z-fighting
renderer.frustumCulled = true;

const fov = 50;
const aspect = 2; // the canvas default
const near = 0.1; // raise near plane for better depth precision and fewer distant flickers
const far = 2000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 500;

const clock = new THREE.Clock();

const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enablePan = false;
orbitControls.maxDistance = 1000;
orbitControls.minDistance = 5.2;
orbitControls.zoomSpeed = 0.3;
orbitControls.rotateSpeed = 0.3;
orbitControls.target.set(0, 0, 0);
orbitControls.update();
orbitControls.enabled = false;

const baseMovementSpeed = 0.1;
let baseMovementSpeedModifier = 1;
const baseRollSpeed = Math.PI / 48;
let baseRollSpeedModifier = 1;
const flyControls = new FlyControls(camera, renderer.domElement);
flyControls.domElement = renderer.domElement;
flyControls.movementSpeed = baseMovementSpeed * baseMovementSpeedModifier;
flyControls.rollSpeed = baseRollSpeed * baseRollSpeedModifier;
flyControls.autoForward = false;
flyControls.dragToLook = false;
flyControls.enabled = false;
flyControls.minDistance = 5.15;

let followMode = 'manual'; // can be "manual", "gutt", or "mara"

const velocity = new THREE.Vector3(0, 0, 0); // Movement velocity
let rollVelocity = 0; // Roll velocity
const damping = 0.999; // Damping factor for momentum
const rollDamping = 0.999; // Damping factor for roll

const originalUpdate = flyControls.update.bind(flyControls);
flyControls.update = function updateWithMomentum(delta) {
  originalUpdate(delta);

  // Transform velocity into the camera's local space
  const localVelocity = velocity.clone().applyQuaternion(camera.quaternion);

  // Apply damping for inertia
  velocity.multiplyScalar(damping);
  rollVelocity *= rollDamping;

  // Update position and rotation based on momentum
  camera.position.add(localVelocity);
  camera.rotateZ(rollVelocity);
};

// Listen for keypresses to control momentum-based flight adjustments
document.addEventListener('keydown', (event) => {
  const speed = 0.001; // Adjust speed for movement
  const rollSpeed = 0.000001; // Adjust speed for rolling

  switch (event.code) {
    case 'KeyW':
      velocity.z -= speed;
      break;
    case 'KeyS':
      velocity.z += speed;
      break;
    case 'KeyA':
      velocity.x -= speed;
      break;
    case 'KeyD':
      velocity.x += speed;
      break;
    case 'Space':
      velocity.y += speed;
      break;
    case 'ShiftLeft':
      velocity.y -= speed;
      break;
    case 'KeyQ':
      rollVelocity += rollSpeed;
      break;
    case 'KeyE':
      rollVelocity -= rollSpeed;
      break;
    default:
      break;
  }
});

function resizeRendererToDisplaySize() {
  const { domElement } = renderer;
  const width = domElement.clientWidth;
  const height = domElement.clientHeight;
  const needResize = domElement.width !== width || domElement.height !== height;

  if (needResize) {
    renderer.setSize(width, height, false);
  }

  return needResize;
}

function updateFlightSpeedByDistance(distance) {
  const brakePoint = 7;
  const fullStopPoint = 5;
  const fullRollStopPoint = 3;

  if (distance < brakePoint) {
    const movementRatio = (distance - fullStopPoint) / (brakePoint - fullStopPoint);
    const rollRatio = (distance - fullRollStopPoint) / (brakePoint - fullRollStopPoint);

    baseMovementSpeedModifier = movementRatio;
    baseRollSpeedModifier = 1 / rollRatio;

    flyControls.movementSpeed = baseMovementSpeed * Math.max(baseMovementSpeedModifier, 0);
    flyControls.rollSpeed = baseRollSpeed * Math.min(Math.max(baseRollSpeedModifier, 0), 1000);
  } else {
    baseMovementSpeedModifier = 1;
    baseRollSpeedModifier = 1;
    flyControls.movementSpeed = baseMovementSpeed;
    flyControls.rollSpeed = baseRollSpeed;
  }
}

function getFollowMode() {
  return followMode;
}

function setFollowMode(mode) {
  followMode = mode;
}

export {
  canvas,
  renderer,
  camera,
  clock,
  orbitControls,
  flyControls,
  resizeRendererToDisplaySize,
  updateFlightSpeedByDistance,
  getFollowMode,
  setFollowMode,
};
