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
const rollDampingRate = 0.12; // Damping rate for roll momentum, in seconds
const orbitTransitionMaxDelta = 1 / 30;
const defaultCameraUp = new THREE.Vector3(0, 1, 0);
const orbitTransition = {
  active: false,
  progress: 0,
  duration: 1.35,
  startPosition: new THREE.Vector3(),
  startQuaternion: new THREE.Quaternion(),
  startUp: new THREE.Vector3(),
  targetPosition: new THREE.Vector3(),
  targetQuaternion: new THREE.Quaternion(),
  targetUp: defaultCameraUp.clone(),
};
const flightStabilizer = {
  active: false,
};
const rollBurnState = {
  left: false,
  right: false,
};
const aimRay = new THREE.Ray();
const aimSphere = new THREE.Sphere();
const targetMatrix = new THREE.Matrix4();
const targetQuaternion = new THREE.Quaternion();
const tmpVectorA = new THREE.Vector3();
const tmpVectorB = new THREE.Vector3();
const tmpVectorC = new THREE.Vector3();
const flyMovementKeys = ['up', 'down', 'left', 'right', 'forward', 'back'];
const rollBurnAcceleration = 0.22;

const originalUpdate = flyControls.update.bind(flyControls);
flyControls.update = function updateWithMomentum(delta) {
  resetFlyControlRollInput();
  originalUpdate(delta);

  // Transform velocity into the camera's local space
  const localVelocity = velocity.clone().applyQuaternion(camera.quaternion);

  // Apply damping for inertia
  velocity.multiplyScalar(damping);
  rollVelocity *= Math.exp(-delta * rollDampingRate);

  const rollBurnDirection = Number(rollBurnState.left) - Number(rollBurnState.right);
  if (rollBurnDirection !== 0 && !flightStabilizer.active) {
    rollVelocity += rollBurnDirection * rollBurnAcceleration * delta;
  }

  // Update position and rotation based on momentum
  camera.position.add(localVelocity);
  camera.rotateZ(rollVelocity * delta);
};

function resetFlyControlInput() {
  if (flyControls._moveState) {
    Object.keys(flyControls._moveState).forEach((key) => {
      flyControls._moveState[key] = 0;
    });
  }
  flyControls._updateMovementVector?.();
  flyControls._updateRotationVector?.();
}

function resetFlyControlMovementInput() {
  if (flyControls._moveState) {
    flyMovementKeys.forEach((key) => {
      flyControls._moveState[key] = 0;
    });
  }
  flyControls._updateMovementVector?.();
}

function resetFlyControlRollInput() {
  if (flyControls._moveState) {
    flyControls._moveState.rollLeft = 0;
    flyControls._moveState.rollRight = 0;
  }
  flyControls._updateRotationVector?.();
}

function clearFlightMomentum() {
  velocity.set(0, 0, 0);
  rollVelocity = 0;
  flightStabilizer.active = false;
  rollBurnState.left = false;
  rollBurnState.right = false;
  resetFlyControlInput();
}

function getOrbitQuaternion(position, target, up = defaultCameraUp) {
  const viewDirection = tmpVectorA.copy(target).sub(position);
  if (viewDirection.lengthSq() < 0.000001) {
    viewDirection.set(0, 0, -1);
  } else {
    viewDirection.normalize();
  }

  const orbitUp = tmpVectorB.copy(up);
  if (Math.abs(viewDirection.dot(orbitUp)) > 0.985) {
    orbitUp.set(0, 0, 1);
  }

  targetMatrix.lookAt(position, target, orbitUp);
  targetQuaternion.setFromRotationMatrix(targetMatrix);
  return targetQuaternion;
}

function smootherStep(progress) {
  return progress * progress * progress * (progress * (progress * 6 - 15) + 10);
}

function getOrbitTransitionDistance(distance) {
  const altitudeGain = THREE.MathUtils.clamp(distance * 0.08, 0.45, 2.25);
  const maxDistance = Number.isFinite(orbitControls.maxDistance) ? orbitControls.maxDistance : Infinity;
  return Math.min(distance + altitudeGain, maxDistance);
}

function getOrbitReturnDirection(target, targetRadius) {
  if (Number.isFinite(targetRadius) && targetRadius > 0) {
    camera.getWorldDirection(tmpVectorA);
    aimRay.set(camera.position, tmpVectorA.normalize());
    aimSphere.center.copy(target);
    aimSphere.radius = targetRadius;

    const hit = aimRay.intersectSphere(aimSphere, tmpVectorB);
    if (hit) {
      return tmpVectorC.copy(hit).sub(target).normalize();
    }
  }

  tmpVectorC.copy(camera.position).sub(target);
  if (tmpVectorC.lengthSq() < 0.000001) {
    tmpVectorC.set(0, 0, 1);
  } else {
    tmpVectorC.normalize();
  }
  return tmpVectorC;
}

function beginSmoothOrbitTransition(target = new THREE.Vector3(0, 0, 0), options = {}) {
  clearFlightMomentum();
  flyControls.enabled = false;
  orbitControls.enabled = false;
  orbitControls.target.copy(target);

  const distance = Math.max(camera.position.distanceTo(target), orbitControls.minDistance || 0);
  const targetDistance = getOrbitTransitionDistance(distance);
  const direction = getOrbitReturnDirection(target, options.targetRadius);

  orbitTransition.active = true;
  orbitTransition.progress = 0;
  orbitTransition.startPosition.copy(camera.position);
  orbitTransition.startQuaternion.copy(camera.quaternion);
  orbitTransition.startUp.copy(camera.up);
  orbitTransition.targetPosition.copy(target).add(direction.multiplyScalar(targetDistance));
  orbitTransition.targetQuaternion.copy(getOrbitQuaternion(orbitTransition.targetPosition, target, defaultCameraUp));
  orbitTransition.targetUp.copy(defaultCameraUp);
}

function finishSmoothOrbitTransition() {
  camera.position.copy(orbitTransition.targetPosition);
  camera.quaternion.copy(orbitTransition.targetQuaternion);
  camera.up.copy(orbitTransition.targetUp);
  orbitControls.enabled = true;
  orbitControls.update();
  orbitTransition.active = false;
}

function updateSmoothOrbitTransition(delta) {
  if (!orbitTransition.active) return false;

  const transitionDelta = Math.min(delta, orbitTransitionMaxDelta);
  orbitTransition.progress = Math.min(orbitTransition.progress + transitionDelta / orbitTransition.duration, 1);
  const eased = smootherStep(orbitTransition.progress);
  camera.position.copy(orbitTransition.startPosition).lerp(orbitTransition.targetPosition, eased);
  camera.quaternion.copy(orbitTransition.startQuaternion).slerp(orbitTransition.targetQuaternion, eased);
  camera.up.copy(orbitTransition.startUp).lerp(orbitTransition.targetUp, eased).normalize();

  if (orbitTransition.progress >= 1) {
    finishSmoothOrbitTransition();
  }

  return true;
}

function updateFlightStabilizer(delta) {
  if (!flightStabilizer.active || !flyControls.enabled || window.appStatus !== 'flight') return;

  resetFlyControlMovementInput();
  velocity.multiplyScalar(Math.exp(-delta * 3.5));
  rollVelocity = 0;
}

function isSmoothOrbitTransitionActive() {
  return orbitTransition.active;
}

function cancelSmoothOrbitTransition() {
  orbitTransition.active = false;
  orbitControls.enabled = false;
}

function setFlightStabilizerActive(active) {
  flightStabilizer.active = active;
  if (active) {
    resetFlyControlMovementInput();
    rollBurnState.left = false;
    rollBurnState.right = false;
    resetFlyControlRollInput();
    rollVelocity = 0;
  }
}

function setRollBurnState(event, active) {
  if (!flyControls.enabled || window.appStatus !== 'flight') return false;

  if (event.code === 'KeyQ') {
    rollBurnState.left = active;
  } else if (event.code === 'KeyE') {
    rollBurnState.right = active;
  } else {
    return false;
  }

  resetFlyControlRollInput();
  event.preventDefault();
  event.stopPropagation();
  return true;
}

// Listen for keypresses to control momentum-based flight adjustments
document.addEventListener('keydown', (event) => {
  if (!flyControls.enabled || window.appStatus === 'silence') {
    return;
  }

  const speed = 0.001; // Adjust speed for movement

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
    case 'ShiftRight':
      velocity.y -= speed;
      break;
    default:
      break;
  }
});

document.addEventListener('keydown', (event) => {
  setRollBurnState(event, true);
}, true);

document.addEventListener('keyup', (event) => {
  setRollBurnState(event, false);
}, true);

document.addEventListener('keydown', (event) => {
  if (!flyControls.enabled || window.appStatus !== 'flight') return;
  if (event.code === 'KeyB') {
    setFlightStabilizerActive(true);
    event.preventDefault();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyB') {
    setFlightStabilizerActive(false);
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
  beginSmoothOrbitTransition,
  cancelSmoothOrbitTransition,
  clearFlightMomentum,
  getFollowMode,
  isSmoothOrbitTransitionActive,
  setFollowMode,
  updateFlightStabilizer,
  updateSmoothOrbitTransition,
};
