import * as THREE from 'three';
import { createReflectionQualities } from './reflectionQualities.js';

const PLANET_RADIUS = 5;
const SOUTH_ORBIT_DISTANCE = 13.5;
const NORTH_GATE_DISTANCE = PLANET_RADIUS + 0.34;
const SOUTH_NEAR_DISTANCE = PLANET_RADIUS + 0.22;
const CAPTURE_BASE_DURATION = 3.2;
const TUNNEL_DURATION = 10.8;
const MERGE_DURATION = 1.15;
const WHITE_HOLD_DURATION = 0.55;
const EJECT_DURATION = 1.45;
const SETTLE_DURATION = 0.48;
const REFLECTION_APPROACH_MIN_DURATION = 6.8;
const REFLECTION_APPROACH_MAX_DURATION = 8.6;
const REFLECTION_WHITE_HOLD_BASE_DURATION = 0.45;
const REFLECTION_REVEAL_BASE_DURATION = 7.0;
const REFLECTION_REBUILD_BASE_DURATION = 16.0;
const REFLECTION_CONSTANT_REVEAL_BASE_TIME = 3.0;
const REFLECTION_ORBIT_EPSILON = 1e-5;
const REFLECTION_MIN_PACE = 0.62;
const REFLECTION_MAX_PACE = 2.0;
const REFLECTION_RUSH_START_SPEED = 0.12;
const REFLECTION_RUSH_FULL_SPEED = 1.8;
const REFLECTION_LEDGER_RETURN_START = 0.84;
const PASSAGE_STYLES = ['reflection', 'infinite'];
const NORTH = new THREE.Vector3(0, 1, 0);
const SOUTH = new THREE.Vector3(0, -1, 0);
const DEFAULT_CAMERA_UP = new THREE.Vector3(0, 1, 0);
const TUNNEL_CAMERA_UP = new THREE.Vector3(0, 0, 1);
const ORBIT_READY_DIRECTION = new THREE.Vector3(
  0,
  -Math.cos(THREE.MathUtils.degToRad(2)),
  Math.sin(THREE.MathUtils.degToRad(2)),
);

const PALETTES = {
  foundational: [
    {
      label: 'Bodywork',
      description: 'The regions of befriending and healing',
      color: '#b39b45',
    },
    {
      label: 'Heartwork',
      description: 'The regions of training and cultivation',
      color: '#d34475',
    },
    {
      label: 'Mindwork',
      description: 'The regions of discovery and realisation',
      color: '#4c82d8',
    },
  ],
  awakened: [
    {
      label: 'Subtle-energy work',
      description: 'The regions of befriending and healing',
      color: '#a5b86c',
    },
    {
      label: 'Intuition work',
      description: 'The regions of training and cultivation',
      color: '#b96ea6',
    },
    {
      label: 'Soulwork',
      description: 'The regions of discovery and realisation',
      color: '#6ea9c7',
    },
  ],
};

const vertexShader = /* glsl */`
  varying vec3 vWorldPosition;
  varying vec3 vNormalDirection;
  varying vec3 vObjectPosition;

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vNormalDirection = normalize(normalMatrix * normal);
    vObjectPosition = position;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const fragmentShader = /* glsl */`
  uniform vec3 uBodyColor;
  uniform vec3 uHeartColor;
  uniform vec3 uMindColor;
  uniform float uTime;
  uniform float uOpacity;
  uniform float uAwakened;
  varying vec3 vWorldPosition;
  varying vec3 vNormalDirection;
  varying vec3 vObjectPosition;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x),
          mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x),
          mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
      f.z
    );
  }

  float gaussian(float value, float center, float sigma) {
    float d = (value - center) / sigma;
    return exp(-0.5 * d * d);
  }

  void main() {
    vec3 p = normalize(vObjectPosition);
    vec3 drift = vec3(uTime * 0.025, -uTime * 0.018, uTime * 0.014);
    float broad = noise(p * 2.35 + drift);
    float detail = noise(p * 6.4 - drift * 1.35);
    float longitude = atan(p.z, p.x);
    float edgeDrift = (broad - 0.5) * 0.058
      + (detail - 0.5) * 0.018
      + sin(longitude * 3.0 + p.y * 1.8 + uTime * 0.055) * 0.011;
    float fieldY = clamp(p.y + edgeDrift, -1.0, 1.0);

    // Each field has a dense centre and a long north/south fade. Normalising
    // the three contributions makes their overlap a colour blend rather than
    // a second, more opaque stripe.
    vec3 rawWeights = vec3(
      gaussian(fieldY, -0.58, 0.25),
      gaussian(fieldY,  0.00, 0.25),
      gaussian(fieldY,  0.58, 0.25)
    );
    vec3 weights = rawWeights / max(dot(rawWeights, vec3(1.0)), 0.0001);
    vec3 fogColor = uBodyColor * weights.x
      + uHeartColor * weights.y
      + uMindColor * weights.z;

    // The poles remain open, but dissolve gradually instead of ending at a
    // geometric edge.
    float polarMask = 1.0 - smoothstep(0.74, 0.995, abs(p.y));
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float grazing = pow(1.0 - abs(dot(viewDirection, vNormalDirection)), 1.45);
    float density = clamp(
      0.82 + (broad - 0.5) * 0.22 + (detail - 0.5) * 0.08 + grazing * 0.06,
      0.68,
      1.0
    );
    // A very mild centre-to-edge breathing keeps the individual fields foggy
    // without recreating the dark/light plateaus of stacked transparent bands.
    float fieldDefinition = smoothstep(0.48, 0.88, dot(weights, weights));
    density *= mix(0.95, 1.035, fieldDefinition);
    float subtle = mix(1.0, 0.78, uAwakened);
    float alpha = clamp(uOpacity * subtle * polarMask * density, 0.0, 0.52);
    gl_FragColor = vec4(fogColor, alpha);
  }
`;

const whiteHoleFragmentShader = /* glsl */`
  uniform float uTime;
  uniform float uStrength;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv - 0.5;
    float radius = length(p) * 2.0;
    float pulse = 0.985 + sin(uTime * 1.35) * 0.015;
    float core = 1.0 - smoothstep(0.0, 0.34 * pulse, radius);
    float warmBloom = 1.0 - smoothstep(0.08, 0.68, radius);
    float coolHalo = 1.0 - smoothstep(0.24, 1.0, radius);
    float alpha = clamp(core + warmBloom * 0.76 + coolHalo * 0.34, 0.0, 1.0) * uStrength;
    vec3 color = mix(vec3(0.72, 0.86, 1.0), vec3(1.0, 0.965, 0.84), warmBloom);
    color = mix(color, vec3(1.0), core);
    gl_FragColor = vec4(color, alpha);
  }
`;

function smootherStep(value) {
  const t = THREE.MathUtils.clamp(value, 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function quinticHermiteCoefficients(value) {
  const t = THREE.MathUtils.clamp(value, 0, 1);
  const t2 = t * t;
  const t3 = t2 * t;
  const t4 = t3 * t;
  const t5 = t4 * t;
  return {
    startPosition: 1 - 10 * t3 + 15 * t4 - 6 * t5,
    startVelocity: t - 6 * t3 + 8 * t4 - 3 * t5,
    endPosition: 10 * t3 - 15 * t4 + 6 * t5,
    endVelocity: -4 * t3 + 7 * t4 - 3 * t5,
  };
}

function taperedRevealDistance(time, speed, duration, constantTime) {
  if (time <= constantTime) return speed * time;
  const taperDuration = duration - constantTime;
  const x = THREE.MathUtils.clamp(
    (time - constantTime) / taperDuration,
    0,
    1,
  );
  const integral = x - x ** 6 + 3 * x ** 5 - 2.5 * x ** 4;
  return speed * (constantTime + taperDuration * integral);
}

function createFogShell(radius, palette) {
  const geometry = new THREE.SphereGeometry(
    radius,
    128,
    72,
    0,
    Math.PI * 2,
    THREE.MathUtils.degToRad(4),
    THREE.MathUtils.degToRad(172),
  );
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uBodyColor: { value: new THREE.Color(palette[0].color) },
      uHeartColor: { value: new THREE.Color(palette[1].color) },
      uMindColor: { value: new THREE.Color(palette[2].color) },
      uTime: { value: 0 },
      uOpacity: { value: 0.50 },
      uAwakened: { value: 0 },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = 24;
  return mesh;
}

function createLegend() {
  const legend = document.createElement('aside');
  legend.className = 'transformation-ledger';
  legend.setAttribute('aria-live', 'polite');
  legend.setAttribute('aria-hidden', 'true');
  legend.innerHTML = `
    <div class="transformation-ledger__eyebrow">Fields of practice</div>
    <div class="transformation-ledger__items"></div>
  `;
  document.body.appendChild(legend);
  return legend;
}

function createWarpOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'awakening-warp';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="awakening-warp__aperture"></div>
    <canvas class="awakening-warp__flow"></canvas>
    <div class="awakening-warp__core"></div>
    <div class="awakening-warp__whiteout"></div>
  `;
  document.body.appendChild(overlay);

  const canvas = overlay.querySelector('.awakening-warp__flow');
  const context = canvas.getContext('2d');
  let seed = 0x51f15e;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const makeParticle = (kind) => ({
    angle: random() * Math.PI * 2,
    depth: random(),
    radius: kind === 'filament' ? 0.22 + random() * 0.92 : 0.16 + random() * 1.12,
    length: 0.5 + random() * 1.2,
    width: 0.45 + random() * 1.2,
    warmth: random(),
    phase: random() * Math.PI * 2,
  });
  const makeReflectionFog = (index) => ({
    angle: random() * Math.PI * 2,
    reach: 0.18 + random() * 0.92,
    size: 0.04 + random() * 0.07,
    start: random() * 0.58,
    tint: index % 3,
    phase: random() * Math.PI * 2,
    drift: 0.65 + random() * 0.9,
  });

  return {
    element: overlay,
    canvas,
    context,
    filaments: Array.from({ length: 40 }, () => makeParticle('filament')),
    motes: Array.from({ length: 60 }, () => makeParticle('mote')),
    reflectionFogs: Array.from({ length: 68 }, (_, index) => makeReflectionFog(index)),
    width: 0,
    height: 0,
    pixelRatio: 1,
  };
}

function createWhiteHole(radius) {
  const group = new THREE.Group();
  group.name = 'awakening-white-hole';
  group.position.y = radius + 0.12;

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uStrength: { value: 0 },
    },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: whiteHoleFragmentShader,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const core = new THREE.Mesh(new THREE.CircleGeometry(1.22, 96), material);
  core.rotation.x = -Math.PI / 2;
  core.renderOrder = 90;
  group.add(core);

  group.visible = false;
  return { group, core };
}

export function createTransformationOverlay({
  scene,
  camera,
  orbitControls,
  flyControls,
  middleOfPlanet,
  setFollowMode,
  cancelSmoothOrbitTransition,
  clearFlightMomentum,
  getPlanetContext,
  getJaranius,
  getPlanetLayers,
}) {
  const group = new THREE.Group();
  group.name = 'transformation-practice-fields';
  group.position.copy(middleOfPlanet);

  // A single shared shell keeps overlap density constant: the three fields fade
  // into one another inside the shader instead of stacking into extra bands.
  const fogShell = createFogShell(PLANET_RADIUS + 0.25, PALETTES.foundational);
  group.add(fogShell);

  const whiteHole = createWhiteHole(PLANET_RADIUS);
  group.add(whiteHole.group);
  const reflectionQualities = createReflectionQualities({
    group,
    camera,
    getPlanetContext,
    getJaranius,
    getPlanetLayers,
    planetRadius: PLANET_RADIUS,
  });
  scene.add(group);

  const legend = createLegend();
  const legendItems = legend.querySelector('.transformation-ledger__items');
  const warpVisual = createWarpOverlay();
  const warpOverlay = warpVisual.element;

  let visible = false;
  let awakened = false;
  let configuredPassageStyle = 'reflection';
  let activePassageStyle = null;
  let completedPassageStyle = null;

  let stage = 'idle';
  let captureElapsed = 0;
  let captureDuration = CAPTURE_BASE_DURATION;
  let tunnelElapsed = 0;
  let mergeElapsed = 0;
  let whiteHoldElapsed = 0;
  let ejectElapsed = 0;
  let settleElapsed = 0;
  let tunnelTravelEnd = 0;
  let legendReturnStarted = false;
  let capturePortalInitiallyVisible = true;
  let cursorBeforePassage = '';
  let passageCursorHidden = false;
  const entryPosition = new THREE.Vector3();
  const entryQuaternion = new THREE.Quaternion();
  const entryUp = new THREE.Vector3();
  const entryRadial = new THREE.Vector3();
  const entryVelocity = new THREE.Vector3();
  const entryDirectionVelocity = new THREE.Vector3();
  const sampledCameraVelocity = new THREE.Vector3();
  const lastCameraPosition = camera.position.clone();
  let hasCameraVelocitySample = false;
  let entryDistance = NORTH_GATE_DISTANCE;
  let entryRadialVelocity = 0;
  let reflectionEndDistance = NORTH_GATE_DISTANCE;
  let reflectionExitSpeed = 0.06;
  let reflectionSouthStartDistance = NORTH_GATE_DISTANCE;
  let reflectionFinalDistance = SOUTH_ORBIT_DISTANCE;
  let entryFov = camera.fov;
  const northGatePosition = new THREE.Vector3();
  const northPortalPosition = new THREE.Vector3();
  const orbitReadyPosition = new THREE.Vector3();
  const orbitReadyQuaternion = new THREE.Quaternion();
  const settleStartPosition = new THREE.Vector3();
  const settleStartQuaternion = new THREE.Quaternion();
  const settleStartUp = new THREE.Vector3();
  let reflectionWhiteHoldElapsed = 0;
  let reflectionRevealElapsed = 0;
  let reflectionPace = 1;
  let reflectionWhiteHoldDuration = REFLECTION_WHITE_HOLD_BASE_DURATION;
  let reflectionRevealDuration = REFLECTION_REVEAL_BASE_DURATION;
  let reflectionRebuildDuration = REFLECTION_REBUILD_BASE_DURATION;
  let reflectionConstantRevealTime = REFLECTION_CONSTANT_REVEAL_BASE_TIME;
  let reflectionControlsReleased = false;
  let reflectionEntrySpeed = 0;
  let reflectionCalmness = 1;
  let reflectionVisibility = 1;
  let reflectionVisibilitySamples = [1, 1, 1];
  let reflectionIntegrationQuality = 1;
  const mirroredPosition = new THREE.Vector3();
  const mirroredQuaternion = new THREE.Quaternion();
  const mirroredUp = new THREE.Vector3();
  const mirroredTarget = new THREE.Vector3();
  const orbitSafePosition = new THREE.Vector3();
  const orbitSafeQuaternion = new THREE.Quaternion();
  const lookMatrix = new THREE.Matrix4();
  const tmpDirection = new THREE.Vector3();
  const tmpDirectionB = new THREE.Vector3();
  const tmpQuaternion = new THREE.Quaternion();
  const tmpQuaternionB = new THREE.Quaternion();
  const reflectionDirection = new THREE.Vector3();
  const reflectionRawDirection = new THREE.Vector3();
  const capEdgeWorld = new THREE.Vector3();
  const capCenterNdc = new THREE.Vector3();
  const capEdgeNdc = new THREE.Vector3();
  const portalWorld = new THREE.Vector3();
  const cameraForward = new THREE.Vector3();
  const cameraToPortal = new THREE.Vector3();

  function hidePassageCursor() {
    if (!passageCursorHidden) {
      cursorBeforePassage = document.body.style.cursor;
      passageCursorHidden = true;
    }
    document.body.classList.add('awakening-cursor-hidden');
    document.body.style.cursor = 'none';
  }

  function restorePassageCursor() {
    document.body.classList.remove('awakening-cursor-hidden');
    if (!passageCursorHidden) return;
    document.body.style.cursor = cursorBeforePassage || 'default';
    passageCursorHidden = false;
    cursorBeforePassage = '';
  }

  function setQuaternionLooking(position, target, up = DEFAULT_CAMERA_UP, destination = camera.quaternion) {
    lookMatrix.lookAt(position, target, up);
    destination.setFromRotationMatrix(lookMatrix);
    return destination;
  }

  function setPalette() {
    const palette = awakened ? PALETTES.awakened : PALETTES.foundational;
    fogShell.material.uniforms.uBodyColor.value.set(palette[0].color);
    fogShell.material.uniforms.uHeartColor.value.set(palette[1].color);
    fogShell.material.uniforms.uMindColor.value.set(palette[2].color);
    fogShell.material.uniforms.uAwakened.value = awakened ? 1 : 0;
    legendItems.innerHTML = palette.slice().reverse().map((item) => `
      <div class="transformation-ledger__item">
        <span class="transformation-ledger__swatch" style="--field-color: ${item.color}"></span>
        <span class="transformation-ledger__copy">
          <span class="transformation-ledger__label">${item.label}</span>
          <span class="transformation-ledger__description">${item.description}</span>
        </span>
      </div>
    `).join('');
    legend.classList.toggle('is-awakened', awakened);
  }

  function syncReflectionVisualState() {
    const enabled = visible && configuredPassageStyle === 'reflection';
    reflectionQualities.setEnabled(enabled);
    if (!enabled) return;
    reflectionQualities.setState({
      northGlow: 0,
      southGlow: completedPassageStyle === 'reflection' ? 0.18 : 0,
      labelOpacity: 1,
      morph: 0,
      convergence: 0,
      capNorth: 1,
      capSouth: completedPassageStyle === 'reflection' ? 1 : 0,
      ambient: 0,
      whiten: 0,
    });
  }

  function setVisible(nextVisible) {
    if (stage !== 'idle' && stage !== 'complete') return visible;
    if (nextVisible && !visible && awakened) {
      resetAwakening();
    }
    visible = Boolean(nextVisible);
    group.visible = visible;
    legend.classList.toggle('is-visible', visible);
    legend.setAttribute('aria-hidden', String(!visible));
    legend.dataset.passageStyle = configuredPassageStyle;
    if (!visible) {
      whiteHole.group.visible = false;
      setWarpStrength(0);
      reflectionQualities.setEnabled(false);
    } else {
      syncReflectionVisualState();
    }
    return visible;
  }

  function toggle() {
    return setVisible(!visible);
  }

  function getPassageStyle() {
    return configuredPassageStyle;
  }

  function setPassageStyle(nextStyle) {
    if (!PASSAGE_STYLES.includes(nextStyle) || hasCameraControl()) return configuredPassageStyle;
    if (stage === 'complete') resetAwakening();
    configuredPassageStyle = nextStyle;
    activePassageStyle = null;
    completedPassageStyle = null;
    legend.dataset.passageStyle = configuredPassageStyle;
    whiteHole.group.visible = false;
    setWarpStrength(0);
    syncReflectionVisualState();
    return configuredPassageStyle;
  }

  function cyclePassageStyle() {
    const index = PASSAGE_STYLES.indexOf(configuredPassageStyle);
    return setPassageStyle(PASSAGE_STYLES[(index + 1) % PASSAGE_STYLES.length]);
  }

  function ensureWarpCanvasSize() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    if (warpVisual.width === width && warpVisual.height === height && warpVisual.pixelRatio === pixelRatio) return;
    warpVisual.width = width;
    warpVisual.height = height;
    warpVisual.pixelRatio = pixelRatio;
    warpVisual.canvas.width = Math.round(width * pixelRatio);
    warpVisual.canvas.height = Math.round(height * pixelRatio);
    warpVisual.canvas.style.width = `${width}px`;
    warpVisual.canvas.style.height = `${height}px`;
  }

  function fractional(value) {
    return value - Math.floor(value);
  }

  function drawWarpFlow({ centerX, centerY, strength, speed, travel, flowOpacity, whiteout }) {
    ensureWarpCanvasSize();
    const { context, width, height, pixelRatio } = warpVisual;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);

    const opacity = THREE.MathUtils.clamp(flowOpacity * (1 - whiteout), 0, 1);
    if (opacity < 0.002 || strength < 0.01) return;

    const minDimension = Math.min(width, height);
    const maxDimension = Math.max(width, height);
    context.lineCap = 'round';
    context.globalCompositeOperation = 'lighter';

    const drawParticle = (particle, mote = false) => {
      const z = fractional(particle.depth - travel);
      const nearFade = smootherStep(z / 0.105);
      const farFade = 1 - smootherStep((z - 0.76) / 0.24);
      const depthFade = nearFade * farFade;
      if (depthFade < 0.003) return;

      const angle = particle.angle + Math.sin(particle.phase + travel * 0.08) * (1 - z) * 0.009;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const radius = particle.radius * minDimension * 0.13 / (z + 0.035);
      const rawLength = minDimension * (0.0012 + speed * (mote ? 0.0032 : 0.0068) * particle.length)
        / Math.pow(z + 0.055, 1.9);
      const streakLength = Math.min(maxDimension * (mote ? 0.13 : 0.46), rawLength);
      const tailRadius = Math.max(0, radius - streakLength);
      const x1 = centerX + cos * tailRadius;
      const y1 = centerY + sin * tailRadius;
      const x2 = centerX + cos * radius;
      const y2 = centerY + sin * radius;
      const alpha = opacity * depthFade * (mote ? 0.72 : 0.46) * (0.33 + speed * 0.67);
      const color = particle.warmth > 0.63
        ? `rgba(255, 244, 214, ${alpha.toFixed(4)})`
        : `rgba(215, 234, 255, ${alpha.toFixed(4)})`;

      context.strokeStyle = color;
      context.lineWidth = particle.width * (mote ? 0.75 : 1.25) * (0.55 + (1 - z) * 1.8);
      context.shadowColor = color;
      context.shadowBlur = (mote ? 5 : 11) * (0.35 + speed);
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    };

    warpVisual.filaments.forEach((particle) => drawParticle(particle));
    warpVisual.motes.forEach((particle) => drawParticle(particle, true));
    context.shadowBlur = 0;
    context.globalCompositeOperation = 'source-over';
  }

  function drawReflectionFog({ centerX, centerY, progress, radius, reveal = false }) {
    ensureWarpCanvasSize();
    const { context, width, height, pixelRatio, reflectionFogs } = warpVisual;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);

    const fogProgress = smootherStep(progress);
    if (fogProgress < 0.001) return;
    const minDimension = Math.min(width, height);
    const maxDimension = Math.max(width, height);
    const fieldRadius = Math.max(10, radius * maxDimension);
    const revealFade = reveal ? 1 - smootherStep((fogProgress - 0.74) / 0.26) : 1;
    const whiten = smootherStep((fogProgress - 0.38) / 0.56);
    const tints = [
      [244, 190, 224],
      [188, 222, 255],
      [255, 232, 156],
    ];

    context.globalCompositeOperation = 'screen';
    reflectionFogs.forEach((particle) => {
      const local = reveal
        ? smootherStep((fogProgress - particle.start * 0.24) / Math.max(0.001, 1 - particle.start * 0.24))
        : smootherStep((fogProgress - particle.start) / Math.max(0.001, 1 - particle.start));
      if (local < 0.002) return;

      const wobble = Math.sin(particle.phase + fogProgress * particle.drift * 2.2) * 0.055;
      const angle = particle.angle + wobble;
      const radialPosition = reveal
        ? fieldRadius * (0.58 + particle.reach * 0.38)
        : fieldRadius * particle.reach * Math.pow(local, 0.82);
      const x = centerX + Math.cos(angle) * radialPosition;
      const y = centerY + Math.sin(angle) * radialPosition;
      const blobRadius = Math.max(
        minDimension * 0.018,
        fieldRadius * particle.size * (reveal ? 0.78 + local * 0.48 : 0.48 + local * 1.04),
      );
      const baseTint = tints[particle.tint];
      const red = Math.round(THREE.MathUtils.lerp(baseTint[0], 255, whiten));
      const green = Math.round(THREE.MathUtils.lerp(baseTint[1], 255, whiten));
      const blue = Math.round(THREE.MathUtils.lerp(baseTint[2], 255, whiten));
      const alpha = reveal
        ? (0.075 + local * 0.16) * revealFade
        : 0.07 + local * 0.17;
      if (alpha < 0.002) return;

      const gradient = context.createRadialGradient(x, y, 0, x, y, blobRadius);
      gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(4)})`);
      gradient.addColorStop(0.28, `rgba(${red}, ${green}, ${blue}, ${(alpha * 0.78).toFixed(4)})`);
      gradient.addColorStop(0.64, `rgba(${red}, ${green}, ${blue}, ${(alpha * 0.28).toFixed(4)})`);
      gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
      context.fillStyle = gradient;
      context.fillRect(x - blobRadius, y - blobRadius, blobRadius * 2, blobRadius * 2);
    });
    context.globalCompositeOperation = 'source-over';
  }

  function resolveWarpAnchor(anchor, centerBlend = 0) {
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;
    if (anchor === 'center') return { x: screenCenterX, y: screenCenterY };

    const pole = anchor === 'south' ? SOUTH : NORTH;
    portalWorld.copy(middleOfPlanet).addScaledVector(pole, PLANET_RADIUS + 0.16);
    camera.getWorldDirection(cameraForward);
    cameraToPortal.copy(portalWorld).sub(camera.position);
    const isInFront = cameraToPortal.dot(cameraForward) > 0;
    portalWorld.project(camera);
    const isProjectable = isInFront && portalWorld.z >= -1 && portalWorld.z <= 1;
    const projectedX = isProjectable ? (portalWorld.x * 0.5 + 0.5) * window.innerWidth : screenCenterX;
    const projectedY = isProjectable ? (-portalWorld.y * 0.5 + 0.5) * window.innerHeight : screenCenterY;
    const blend = smootherStep(centerBlend);
    return {
      x: THREE.MathUtils.lerp(projectedX, screenCenterX, blend),
      y: THREE.MathUtils.lerp(projectedY, screenCenterY, blend),
    };
  }

  function setWarpStrength(value, {
    speed = 0,
    whiteout = 0,
    ejection = 0,
    travel = 0,
    flow = 0,
    lightScale,
    anchor = 'north',
    centerBlend = 0,
    phase = 'idle',
    distortion = 0,
  } = {}) {
    const strength = THREE.MathUtils.clamp(value, 0, 1);
    const tunnelSpeed = THREE.MathUtils.clamp(speed, 0, 1.6);
    const whiteoutStrength = THREE.MathUtils.clamp(whiteout, 0, 1);
    const ejectionStrength = THREE.MathUtils.clamp(ejection, 0, 1);
    const distortionStrength = THREE.MathUtils.clamp(distortion, 0, 0.12);
    const resolvedLightScale = lightScale ?? (0.028 + tunnelSpeed * 0.035 + whiteoutStrength * 1.25);
    const warpAnchor = resolveWarpAnchor(anchor, centerBlend);
    document.documentElement.style.setProperty('--awakening-strength', strength.toFixed(3));
    document.documentElement.style.setProperty('--awakening-speed', tunnelSpeed.toFixed(3));
    document.documentElement.style.setProperty('--awakening-whiteout', whiteoutStrength.toFixed(3));
    document.documentElement.style.setProperty('--awakening-ejection', ejectionStrength.toFixed(3));
    document.documentElement.style.setProperty('--awakening-light-scale', resolvedLightScale.toFixed(3));
    document.documentElement.style.setProperty('--awakening-aperture', (strength * (1 - whiteoutStrength)).toFixed(3));
    document.documentElement.style.setProperty(
      '--awakening-canvas-scale',
      (1 + strength * 0.045 + Math.min(tunnelSpeed, 1) ** 2 * 0.105 + ejectionStrength * 0.055 + distortionStrength).toFixed(3),
    );
    document.documentElement.style.setProperty(
      '--awakening-canvas-brightness',
      (1 + strength * 0.08 + whiteoutStrength * 0.18).toFixed(3),
    );
    document.documentElement.style.setProperty(
      '--awakening-canvas-saturation',
      Math.max(0.66, 1 - strength * 0.22 - tunnelSpeed * 0.06).toFixed(3),
    );
    document.documentElement.style.setProperty(
      '--awakening-canvas-blur',
      `${(strength * 0.32 + tunnelSpeed * 0.28).toFixed(3)}px`,
    );
    warpOverlay.classList.toggle('is-visible', strength > 0.015);
    warpOverlay.dataset.phase = phase;
    warpOverlay.dataset.passage = 'infinite';
    document.body.classList.toggle('awakening-warp-active', strength > 0.015);
    document.documentElement.style.setProperty('--awakening-x', `${warpAnchor.x.toFixed(1)}px`);
    document.documentElement.style.setProperty('--awakening-y', `${warpAnchor.y.toFixed(1)}px`);
    drawWarpFlow({
      centerX: warpAnchor.x,
      centerY: warpAnchor.y,
      strength,
      speed: tunnelSpeed,
      travel,
      flowOpacity: flow,
      whiteout: whiteoutStrength,
    });
  }

  function resolveProjectedCapScale(anchor) {
    const pole = anchor === 'south' ? SOUTH : NORTH;
    portalWorld.copy(middleOfPlanet).addScaledVector(pole, PLANET_RADIUS + 0.03);
    reflectionDirection.set(0, 0, 1)
      .multiplyScalar(Math.sin(THREE.MathUtils.degToRad(7.2)))
      .addScaledVector(pole, Math.cos(THREE.MathUtils.degToRad(7.2)));
    capEdgeWorld.copy(middleOfPlanet).addScaledVector(reflectionDirection, PLANET_RADIUS + 0.03);
    capCenterNdc.copy(portalWorld).project(camera);
    capEdgeNdc.copy(capEdgeWorld).project(camera);
    const radiusPixels = Math.hypot(
      (capEdgeNdc.x - capCenterNdc.x) * window.innerWidth * 0.5,
      (capEdgeNdc.y - capCenterNdc.y) * window.innerHeight * 0.5,
    );
    const vmax = Math.max(window.innerWidth, window.innerHeight, 1);
    if (!Number.isFinite(radiusPixels) || radiusPixels <= 0) return 0.018;
    return THREE.MathUtils.clamp(radiusPixels / vmax, 0.008, 0.16);
  }

  function resolveProjectedPlanetScale() {
    const distance = Math.max(camera.position.distanceTo(middleOfPlanet), PLANET_RADIUS + 0.001);
    const angularRadius = Math.asin(THREE.MathUtils.clamp(PLANET_RADIUS / distance, 0, 0.9999));
    const verticalFov = THREE.MathUtils.degToRad(camera.fov || 50);
    const radiusPixels = Math.tan(angularRadius) / Math.tan(verticalFov * 0.5)
      * window.innerHeight * 0.5;
    const vmax = Math.max(window.innerWidth, window.innerHeight, 1);
    return THREE.MathUtils.clamp(radiusPixels / vmax, 0.08, 1.12);
  }

  function logarithmicLerp(start, end, value) {
    return Math.exp(THREE.MathUtils.lerp(
      Math.log(Math.max(start, 0.0001)),
      Math.log(Math.max(end, 0.0001)),
      smootherStep(value),
    ));
  }

  function reflectionExpansionScale(progress, anchor) {
    const capScale = resolveProjectedCapScale(anchor);
    const planetScale = Math.max(capScale * 2.2, resolveProjectedPlanetScale() * 1.06);
    if (progress < 0.44) return logarithmicLerp(capScale, planetScale, progress / 0.44);
    const universeScale = Math.max(planetScale * 1.48, 0.92);
    if (progress < 0.78) {
      return logarithmicLerp(planetScale, universeScale, (progress - 0.44) / 0.34);
    }
    return logarithmicLerp(universeScale, 1.82, (progress - 0.78) / 0.22);
  }

  function reflectionAbsorbRadius(progress, anchor) {
    const capRadius = resolveProjectedCapScale(anchor) * 1.16;
    const planetRadius = Math.max(capRadius * 2.45, resolveProjectedPlanetScale() * 1.08);
    if (progress < 0.48) {
      return THREE.MathUtils.lerp(capRadius, planetRadius, smootherStep(progress / 0.48));
    }
    const universeRadius = Math.max(planetRadius * 1.52, 0.96);
    if (progress < 0.81) {
      return THREE.MathUtils.lerp(
        planetRadius,
        universeRadius,
        smootherStep((progress - 0.48) / 0.33),
      );
    }
    return THREE.MathUtils.lerp(universeRadius, 1.86, smootherStep((progress - 0.81) / 0.19));
  }

  function reflectionRevealRadius(progress) {
    const planetRadius = resolveProjectedPlanetScale() * 1.04;
    if (progress < 0.42) return THREE.MathUtils.lerp(0, planetRadius, smootherStep(progress / 0.42));
    const universeRadius = Math.max(planetRadius * 1.5, 0.94);
    if (progress < 0.78) {
      return THREE.MathUtils.lerp(planetRadius, universeRadius, smootherStep((progress - 0.42) / 0.36));
    }
    return THREE.MathUtils.lerp(universeRadius, 1.82, smootherStep((progress - 0.78) / 0.22));
  }

  function setReflectionWhiteout(value, phase = 'reflection', {
    expansion = value,
    anchor = 'north',
    reveal = null,
  } = {}) {
    const whiteout = THREE.MathUtils.clamp(value, 0, 1);
    const growth = THREE.MathUtils.clamp(expansion, 0, 1);
    const whiteScale = reflectionExpansionScale(growth, anchor);
    const absorbRadius = reflectionAbsorbRadius(growth, anchor);
    const revealProgress = reveal === null ? 0 : THREE.MathUtils.clamp(reveal, 0, 1);
    const revealRadius = reflectionRevealRadius(revealProgress);
    // Reveal continuously from the exact centre rather than cutting a clear
    // circular hole with a narrow feather. The latter was the dark elliptical
    // edge visible against the white field as the south pole returned.
    const revealInnerRadius = 0;
    const revealSoftOne = revealRadius * 0.22;
    const revealSoftTwo = revealRadius * 0.52;
    const revealSoftThree = revealRadius * 0.82;
    const warpAnchor = resolveWarpAnchor(anchor);
    document.documentElement.style.setProperty('--awakening-strength', '0');
    document.documentElement.style.setProperty('--awakening-aperture', '0');
    document.documentElement.style.setProperty('--awakening-whiteout', whiteout.toFixed(3));
    document.documentElement.style.setProperty('--reflection-white-scale', whiteScale.toFixed(5));
    document.documentElement.style.setProperty('--reflection-absorb-radius', `${(absorbRadius * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-lobe-a', `${(absorbRadius * 0.76 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-lobe-b', `${(absorbRadius * 0.62 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-lobe-c', `${(absorbRadius * 0.53 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-offset-a-x', `${(absorbRadius * 0.17 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-offset-a-y', `${(absorbRadius * 0.09 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-offset-b-x', `${(absorbRadius * 0.14 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-offset-b-y', `${(absorbRadius * 0.18 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-offset-c-x', `${(absorbRadius * 0.21 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-absorb-offset-c-y', `${(absorbRadius * 0.13 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-radius', `${(revealRadius * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-inner', `${(revealInnerRadius * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-soft-one', `${(revealSoftOne * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-soft-two', `${(revealSoftTwo * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-soft-three', `${(revealSoftThree * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-lobe-a', `${(revealRadius * 0.58 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-lobe-b', `${(revealRadius * 0.48 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-lobe-c', `${(revealRadius * 0.42 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-offset-a-x', `${(revealRadius * 0.18 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-offset-a-y', `${(-revealRadius * 0.07 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-offset-b-x', `${(-revealRadius * 0.14 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-offset-b-y', `${(revealRadius * 0.16 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-offset-c-x', `${(revealRadius * 0.04 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--reflection-reveal-offset-c-y', `${(-revealRadius * 0.20 * 100).toFixed(3)}vmax`);
    document.documentElement.style.setProperty('--awakening-light-scale', '0');
    document.documentElement.style.setProperty('--awakening-canvas-scale', '1');
    document.documentElement.style.setProperty('--awakening-canvas-brightness', '1');
    document.documentElement.style.setProperty('--awakening-canvas-saturation', '1');
    document.documentElement.style.setProperty('--awakening-canvas-blur', '0px');
    warpOverlay.classList.toggle('is-visible', Math.max(whiteout, growth) > 0.002);
    warpOverlay.dataset.phase = phase;
    warpOverlay.dataset.passage = 'reflection';
    document.body.classList.remove('awakening-warp-active');
    document.documentElement.style.setProperty('--awakening-x', `${warpAnchor.x.toFixed(1)}px`);
    document.documentElement.style.setProperty('--awakening-y', `${warpAnchor.y.toFixed(1)}px`);
    drawReflectionFog({
      centerX: warpAnchor.x,
      centerY: warpAnchor.y,
      progress: phase === 'reflectionReveal' ? revealProgress : growth,
      radius: phase === 'reflectionReveal' ? revealRadius : absorbRadius,
      reveal: phase === 'reflectionReveal',
    });
  }

  function refreshCanonicalPositions() {
    northGatePosition.copy(middleOfPlanet).addScaledVector(NORTH, NORTH_GATE_DISTANCE);
    northPortalPosition.copy(middleOfPlanet).addScaledVector(NORTH, PLANET_RADIUS + 0.12);
    orbitReadyPosition.copy(middleOfPlanet).addScaledVector(ORBIT_READY_DIRECTION, SOUTH_ORBIT_DISTANCE);
    setQuaternionLooking(orbitReadyPosition, middleOfPlanet, DEFAULT_CAMERA_UP, orbitReadyQuaternion);
  }

  function setNorthGatePose() {
    refreshCanonicalPositions();
    camera.position.copy(northGatePosition);
    camera.up.copy(TUNNEL_CAMERA_UP);
    setQuaternionLooking(northGatePosition, northPortalPosition, TUNNEL_CAMERA_UP);
  }

  function setSouthAxisPose(distance) {
    camera.position.copy(middleOfPlanet).addScaledVector(SOUTH, distance);
    camera.up.copy(TUNNEL_CAMERA_UP);
    setQuaternionLooking(camera.position, middleOfPlanet, TUNNEL_CAMERA_UP);
  }

  function sampleCameraMotion(delta) {
    if (hasCameraControl() || !Number.isFinite(delta) || delta <= 0 || delta > 0.25) {
      lastCameraPosition.copy(camera.position);
      hasCameraVelocitySample = false;
      return;
    }
    if (!hasCameraVelocitySample) {
      lastCameraPosition.copy(camera.position);
      sampledCameraVelocity.set(0, 0, 0);
      hasCameraVelocitySample = true;
      return;
    }
    tmpDirection.copy(camera.position).sub(lastCameraPosition).divideScalar(delta);
    const blend = 1 - Math.exp(-delta / 0.18);
    sampledCameraVelocity.lerp(tmpDirection, blend);
    lastCameraPosition.copy(camera.position);
  }

  function setReflectionSouthPose(distance, orbitBlend = 0) {
    const epsilon = REFLECTION_ORBIT_EPSILON * smootherStep(orbitBlend);
    reflectionDirection.copy(SOUTH).multiplyScalar(Math.cos(epsilon));
    reflectionDirection.z = Math.sin(epsilon);
    reflectionDirection.normalize();
    camera.position.copy(middleOfPlanet).addScaledVector(reflectionDirection, distance);

    setQuaternionLooking(camera.position, middleOfPlanet, TUNNEL_CAMERA_UP, tmpQuaternion);
    setQuaternionLooking(camera.position, middleOfPlanet, DEFAULT_CAMERA_UP, tmpQuaternionB);
    camera.quaternion.slerpQuaternions(tmpQuaternion, tmpQuaternionB, smootherStep(orbitBlend));
    camera.up.copy(TUNNEL_CAMERA_UP).lerp(DEFAULT_CAMERA_UP, smootherStep(orbitBlend)).normalize();
  }

  function configureReflectionPace() {
    reflectionEntrySpeed = THREE.MathUtils.clamp(entryVelocity.length(), 0, 3.5);
    const rush = smootherStep(
      (reflectionEntrySpeed - REFLECTION_RUSH_START_SPEED)
      / (REFLECTION_RUSH_FULL_SPEED - REFLECTION_RUSH_START_SPEED),
    );
    reflectionCalmness = 1 - rush;

    const visibilityMeasurement = reflectionQualities.measureNorthStarVisibility(camera);
    reflectionVisibility = visibilityMeasurement.score;
    reflectionVisibilitySamples = visibilityMeasurement.individual.slice(0, 3);
    reflectionIntegrationQuality = Math.sqrt(reflectionCalmness * reflectionVisibility);
    reflectionPace = THREE.MathUtils.lerp(
      REFLECTION_MIN_PACE,
      REFLECTION_MAX_PACE,
      reflectionIntegrationQuality,
    );
    const returnPace = Math.max(0.84, reflectionPace);
    reflectionWhiteHoldDuration = REFLECTION_WHITE_HOLD_BASE_DURATION * reflectionPace;
    reflectionRevealDuration = REFLECTION_REVEAL_BASE_DURATION * returnPace;
    reflectionRebuildDuration = REFLECTION_REBUILD_BASE_DURATION * returnPace;
    reflectionConstantRevealTime = REFLECTION_CONSTANT_REVEAL_BASE_TIME * returnPace;
  }

  function beginCapture() {
    stage = 'capture';
    hidePassageCursor();
    activePassageStyle = configuredPassageStyle;
    completedPassageStyle = null;
    captureElapsed = 0;
    entryPosition.copy(camera.position);
    entryQuaternion.copy(camera.quaternion);
    entryUp.copy(camera.up);
    entryFov = camera.fov;
    entryVelocity.copy(sampledCameraVelocity);
    if (!hasCameraVelocitySample || !Number.isFinite(entryVelocity.lengthSq())) entryVelocity.set(0, 0, 0);
    if (entryVelocity.length() > 3.5) entryVelocity.setLength(3.5);
    entryRadial.copy(entryPosition).sub(middleOfPlanet);
    entryDistance = Math.max(entryRadial.length(), 0.0001);
    entryRadial.normalize();
    refreshCanonicalPositions();
    camera.getWorldDirection(cameraForward);
    cameraToPortal.copy(northPortalPosition).sub(camera.position).normalize();
    capturePortalInitiallyVisible = cameraToPortal.dot(cameraForward) > 0.05;

    const angularDifference = Math.acos(THREE.MathUtils.clamp(entryRadial.dot(NORTH), -1, 1));
    const angleFactor = THREE.MathUtils.clamp(angularDifference / THREE.MathUtils.degToRad(13), 0, 1);
    if (activePassageStyle === 'reflection') {
      configureReflectionPace();
      const safeCinemaRadius = PLANET_RADIUS + 0.15;
      reflectionEndDistance = Math.min(
        entryDistance,
        safeCinemaRadius + Math.max(0, entryDistance - safeCinemaRadius) * 0.68,
      );
      const baseCaptureDuration = THREE.MathUtils.clamp(
        6.8 + 0.16 * Math.max(0, entryDistance - reflectionEndDistance) + angleFactor * 0.8,
        REFLECTION_APPROACH_MIN_DURATION,
        REFLECTION_APPROACH_MAX_DURATION,
      );
      captureDuration = baseCaptureDuration * reflectionPace;

      const radialTravel = Math.max(0.01, entryDistance - reflectionEndDistance);
      entryRadialVelocity = THREE.MathUtils.clamp(
        entryVelocity.dot(entryRadial),
        -2 * radialTravel / captureDuration,
        0.2 * radialTravel / captureDuration,
      );
      entryDirectionVelocity.copy(entryVelocity)
        .addScaledVector(entryRadial, -entryVelocity.dot(entryRadial))
        .divideScalar(entryDistance);
      const maximumDirectionSpeed = Math.max(0.006, 2 * angularDifference / captureDuration);
      if (entryDirectionVelocity.length() > maximumDirectionSpeed) {
        entryDirectionVelocity.setLength(maximumDirectionSpeed);
      }
      reflectionExitSpeed = THREE.MathUtils.clamp(
        0.25 * radialTravel / captureDuration,
        0.035,
        0.18,
      );
    } else {
      const distanceFactor = THREE.MathUtils.clamp((entryDistance - NORTH_GATE_DISTANCE) / 12, 0, 1);
      const flightFactor = window.appStatus === 'flight' ? 1 : 0;
      captureDuration = CAPTURE_BASE_DURATION
        + angleFactor * 0.5
        + distanceFactor * 0.3
        + flightFactor * 0.22;
    }

    cancelSmoothOrbitTransition?.();
    clearFlightMomentum?.();
    setFollowMode?.('manual');
    orbitControls.enabled = false;
    flyControls.enabled = false;
    window.appStatus = 'awakening';
    legendReturnStarted = false;
    reflectionControlsReleased = false;
    legend.style.removeProperty('transition-duration');
    legend.classList.add('is-pulling', 'is-wormhole-active');
    if (activePassageStyle === 'reflection') {
      whiteHole.group.visible = false;
      setReflectionWhiteout(0, 'reflectionApproach', { expansion: 0, anchor: 'north' });
      reflectionQualities.setEnabled(true);
      reflectionQualities.prepare();
    }
  }

  function beginTunnel() {
    stage = 'tunnel';
    tunnelElapsed = 0;
    setNorthGatePose();
    whiteHole.group.visible = false;
  }

  function beginMerge() {
    stage = 'merge';
    mergeElapsed = 0;
    setNorthGatePose();
  }

  function beginWhiteHold() {
    stage = 'whiteHold';
    whiteHoldElapsed = 0;
    awakened = true;
    completedPassageStyle = 'infinite';
    setPalette();
    setSouthAxisPose(SOUTH_NEAR_DISTANCE);
  }

  function beginEject() {
    stage = 'eject';
    ejectElapsed = 0;
    setSouthAxisPose(SOUTH_NEAR_DISTANCE);
  }

  function beginSettle() {
    stage = 'settle';
    settleElapsed = 0;
    settleStartPosition.copy(camera.position);
    settleStartQuaternion.copy(camera.quaternion);
    settleStartUp.copy(camera.up);
    refreshCanonicalPositions();
    setWarpStrength(0.12, {
      anchor: 'south',
      lightScale: 0.05,
      phase: 'settle',
    });
  }

  function beginReflectionWhiteHold() {
    stage = 'reflectionWhiteHold';
    reflectionWhiteHoldElapsed = 0;
    awakened = true;
    completedPassageStyle = 'reflection';
    setPalette();
    mirroredTarget.copy(middleOfPlanet);
    mirroredPosition.copy(middleOfPlanet).addScaledVector(SOUTH, reflectionEndDistance);
    setReflectionSouthPose(reflectionEndDistance, 0);
    mirroredQuaternion.copy(camera.quaternion);
    mirroredUp.copy(camera.up);
    reflectionQualities.setState({
      northGlow: 0,
      southGlow: 0.34,
      labelOpacity: 1,
      morph: 0,
      convergence: 0,
      capNorth: 1,
      capSouth: 1,
      ambient: 0.46,
      whiten: 1,
      mapOpacity: 0,
      mapReveal: 0,
      connectionOpacity: 0,
      southJourney: 0,
      arrival: 1,
    });
    setReflectionWhiteout(1, 'reflectionWhiteHold', { expansion: 1, anchor: 'south' });
  }

  function beginReflectionReveal() {
    stage = 'reflectionReveal';
    reflectionRevealElapsed = 0;
    const naturalDistance = reflectionEndDistance
      - reflectionExitSpeed * reflectionWhiteHoldDuration;
    const orbitMinimum = (orbitControls.minDistance || PLANET_RADIUS + 0.2) + 0.08;
    const fullRevealTravel = taperedRevealDistance(
      reflectionRevealDuration,
      reflectionExitSpeed,
      reflectionRevealDuration,
      reflectionConstantRevealTime,
    );
    reflectionSouthStartDistance = Math.max(
      naturalDistance,
      orbitMinimum + fullRevealTravel,
    );
    reflectionFinalDistance = reflectionSouthStartDistance - fullRevealTravel;
    setReflectionSouthPose(reflectionSouthStartDistance, 0);
  }

  function releaseReflectionCamera() {
    if (reflectionControlsReleased) return;
    reflectionControlsReleased = true;
    orbitSafePosition.copy(camera.position);
    orbitSafeQuaternion.copy(camera.quaternion);
    camera.up.copy(DEFAULT_CAMERA_UP);
    camera.fov = entryFov;
    camera.updateProjectionMatrix();
    clearFlightMomentum?.();
    cancelSmoothOrbitTransition?.();
    orbitControls.enabled = false;
    flyControls.enabled = false;
    orbitControls.target.copy(middleOfPlanet);
    orbitControls.update();
    orbitControls.saveState();
    window.appStatus = 'orbit';
    restorePassageCursor();
    orbitControls.enabled = true;
    legend.classList.remove('is-pulling');
  }

  function finishPassage() {
    refreshCanonicalPositions();
    stage = 'complete';
    activePassageStyle = null;
    legend.classList.remove('is-pulling', 'is-wormhole-active');
    legend.classList.add('has-completed-passage');
    camera.position.copy(orbitReadyPosition);
    camera.up.copy(DEFAULT_CAMERA_UP);
    camera.quaternion.copy(orbitReadyQuaternion);
    camera.fov = entryFov;
    camera.updateProjectionMatrix();
    clearFlightMomentum?.();
    cancelSmoothOrbitTransition?.();
    orbitControls.enabled = false;
    flyControls.enabled = false;
    orbitControls.target.copy(middleOfPlanet);
    orbitControls.update();
    camera.position.copy(orbitReadyPosition);
    camera.up.copy(DEFAULT_CAMERA_UP);
    camera.quaternion.copy(orbitReadyQuaternion);
    orbitControls.update();
    orbitControls.saveState();
    window.appStatus = 'orbit';
    restorePassageCursor();
    orbitControls.enabled = true;
    whiteHole.group.visible = false;
    setWarpStrength(0, { anchor: 'center', phase: 'complete' });
  }

  function finishReflectionPassage() {
    releaseReflectionCamera();
    stage = 'complete';
    activePassageStyle = null;
    legend.classList.remove('is-pulling', 'is-wormhole-active');
    legend.style.removeProperty('transition-duration');
    legend.classList.add('has-completed-passage');
    whiteHole.group.visible = false;
    setReflectionWhiteout(0, 'complete', { expansion: 0, anchor: 'south' });
    reflectionQualities.setState({
      northGlow: 0,
      southGlow: 0.18,
      labelOpacity: 1,
      morph: 0,
      convergence: 0,
      capNorth: 1,
      capSouth: 1,
      ambient: 0,
      whiten: 0,
      mapOpacity: 1,
      mapReveal: 1,
      connectionOpacity: 1,
      southJourney: 1,
      arrival: 0,
    });
  }

  function updateIdle(delta) {
    if (window.appStatus !== 'orbit' && window.appStatus !== 'flight') {
      whiteHole.group.visible = false;
      return;
    }
    if (awakened) {
      whiteHole.group.visible = false;
      return;
    }

    tmpDirection.copy(camera.position).sub(middleOfPlanet);
    const distance = tmpDirection.length();
    if (distance < 0.0001) return;
    tmpDirection.normalize();
    const alignment = tmpDirection.dot(NORTH);
    const angularInfluence = THREE.MathUtils.smoothstep(
      alignment,
      Math.cos(THREE.MathUtils.degToRad(25)),
      Math.cos(THREE.MathUtils.degToRad(8)),
    );
    const distanceInfluence = 1 - THREE.MathUtils.smoothstep(distance, 14, 23);
    const influence = angularInfluence * distanceInfluence;

    const reflectionPassage = configuredPassageStyle === 'reflection';
    whiteHole.group.visible = !reflectionPassage && influence > 0.01;
    whiteHole.core.material.uniforms.uStrength.value = reflectionPassage ? 0 : influence * 0.78;
    if (reflectionPassage) {
      reflectionQualities.setEnabled(true);
      reflectionQualities.setState({
        northGlow: influence * 0.12,
        southGlow: 0,
        labelOpacity: 1,
        morph: 0,
        convergence: 0,
        capNorth: 1,
        capSouth: 0,
        ambient: influence * 0.025,
        whiten: 0,
      });
    }

    if (influence <= 0.01) {
      if (reflectionPassage) setReflectionWhiteout(0, 'idle', { expansion: 0, anchor: 'north' });
      else setWarpStrength(0);
      return;
    }

    const gentlePull = delta * influence * influence * 0.15;
    tmpDirectionB.copy(tmpDirection).lerp(NORTH, gentlePull).normalize();
    const nextDistance = THREE.MathUtils.lerp(
      distance,
      Math.max(PLANET_RADIUS + 0.72, distance - 0.22),
      gentlePull,
    );
    camera.position.copy(middleOfPlanet).addScaledVector(tmpDirectionB, nextDistance);
    if (window.appStatus === 'orbit') camera.lookAt(middleOfPlanet);
    if (reflectionPassage) {
      setReflectionWhiteout(0, 'attract', { expansion: 0, anchor: 'north' });
    } else {
      setWarpStrength(influence * 0.12, {
        anchor: 'north',
        lightScale: 0.022 + influence * 0.012,
        phase: 'attract',
      });
    }

    if (alignment > Math.cos(THREE.MathUtils.degToRad(13)) && distance < 17.5) beginCapture();
  }

  function updateReflectionPull(delta) {
    captureElapsed += Math.min(delta, 0.1);
    const progress = THREE.MathUtils.clamp(captureElapsed / captureDuration, 0, 1);
    const coefficients = quinticHermiteCoefficients(progress);
    const distance = coefficients.startPosition * entryDistance
      + coefficients.startVelocity * captureDuration * entryRadialVelocity
      + coefficients.endPosition * reflectionEndDistance
      - coefficients.endVelocity * captureDuration * reflectionExitSpeed;
    reflectionRawDirection.copy(entryRadial).multiplyScalar(coefficients.startPosition)
      .addScaledVector(entryDirectionVelocity, coefficients.startVelocity * captureDuration)
      .addScaledVector(NORTH, coefficients.endPosition);
    if (reflectionRawDirection.lengthSq() < 1e-8) reflectionRawDirection.copy(NORTH);
    reflectionDirection.copy(reflectionRawDirection).normalize();
    camera.position.copy(middleOfPlanet).addScaledVector(reflectionDirection, distance);

    const orientationProgress = smootherStep((progress - 0.02) / 0.78);
    setQuaternionLooking(camera.position, middleOfPlanet, TUNNEL_CAMERA_UP, tmpQuaternion);
    camera.quaternion.slerpQuaternions(entryQuaternion, tmpQuaternion, orientationProgress);
    camera.up.copy(entryUp).lerp(TUNNEL_CAMERA_UP, orientationProgress).normalize();

    whiteHole.group.visible = false;
    const bloom = smootherStep((progress - 0.46) / 0.54);
    const whiteField = smootherStep((progress - 0.78) / 0.22);
    reflectionQualities.setState({
      northGlow: 0.12 + smootherStep((progress - 0.04) / 0.61) * 0.88,
      southGlow: 0,
      labelOpacity: 1 - smootherStep((progress - 0.06) / 0.49),
      morph: smootherStep((progress - 0.08) / 0.57),
      convergence: smootherStep((progress - 0.14) / 0.74),
      capNorth: 1,
      capSouth: 0,
      ambient: 0.025 + smootherStep((progress - 0.82) / 0.18) * 0.11,
      whiten: smootherStep((progress - 0.70) / 0.30),
      mapOpacity: 1 - smootherStep(progress / 0.34),
      mapReveal: 1,
      connectionOpacity: 1 - smootherStep(progress / 0.30),
    });
    setReflectionWhiteout(whiteField, 'reflectionApproach', {
      expansion: bloom,
      anchor: 'north',
    });

    if (progress >= 1) beginReflectionWhiteHold();
  }

  function updateInfiniteCapture(delta) {
    captureElapsed += Math.min(delta, 0.1);
    const progress = THREE.MathUtils.clamp(captureElapsed / captureDuration, 0, 1);
    const directionProgress = smootherStep(progress);
    const distanceProgress = Math.pow(progress, 2.2);
    const orientationProgress = smootherStep((progress - 0.08) / 0.84);

    tmpDirection.copy(entryRadial).lerp(NORTH, directionProgress).normalize();
    const distance = THREE.MathUtils.lerp(entryDistance, NORTH_GATE_DISTANCE, distanceProgress);
    camera.position.copy(middleOfPlanet).addScaledVector(tmpDirection, distance);
    refreshCanonicalPositions();
    setQuaternionLooking(camera.position, northPortalPosition, TUNNEL_CAMERA_UP, tmpQuaternion);
    camera.quaternion.slerpQuaternions(entryQuaternion, tmpQuaternion, orientationProgress);
    camera.up.copy(entryUp).lerp(TUNNEL_CAMERA_UP, orientationProgress).normalize();

    whiteHole.group.visible = true;
    whiteHole.core.material.uniforms.uStrength.value = 0.76 + progress * 0.24;
    const acceleration = Math.pow(progress, 3.2);
    camera.getWorldDirection(cameraForward);
    cameraToPortal.copy(northPortalPosition).sub(camera.position).normalize();
    const portalReveal = capturePortalInitiallyVisible
      ? 1
      : smootherStep((cameraToPortal.dot(cameraForward) - 0.05) / 0.42);
    setWarpStrength((0.14 + smootherStep(progress) * 0.82) * portalReveal, {
      speed: 0.025 + acceleration * 0.12,
      travel: Math.pow(progress, 2.4) * 0.12,
      flow: smootherStep((progress - 0.18) / 0.82) * 0.42 * portalReveal,
      lightScale: 0.026 + smootherStep(progress) * 0.026,
      anchor: 'north',
      centerBlend: (progress - 0.65) / 0.35,
      phase: 'capture',
      distortion: smootherStep(progress) * 0.07,
    });

    if (progress >= 1) {
      setNorthGatePose();
      beginTunnel();
    }
  }

  function updateTunnel(delta) {
    tunnelElapsed += Math.min(delta, 0.1);
    const progress = THREE.MathUtils.clamp(tunnelElapsed / TUNNEL_DURATION, 0, 1);
    const speed = 0.145 + 0.905 * Math.pow(progress, 3.2);
    const travel = 0.12 + TUNNEL_DURATION * (
      0.145 * progress + 0.905 * Math.pow(progress, 4.2) / 4.2
    );
    setNorthGatePose();
    setWarpStrength(0.96, {
      speed,
      travel,
      flow: 0.44 + smootherStep(progress / 0.28) * 0.56,
      lightScale: 0.052 + smootherStep(progress) * 0.038,
      anchor: 'center',
      phase: 'tunnel',
      distortion: 0.07,
    });
    if (progress >= 1) {
      tunnelTravelEnd = travel;
      beginMerge();
    }
  }

  function updateMerge(delta) {
    mergeElapsed += Math.min(delta, 0.1);
    const progress = THREE.MathUtils.clamp(mergeElapsed / MERGE_DURATION, 0, 1);
    const eased = smootherStep(progress);
    const speed = 1.05 + eased * 0.65;
    const travel = tunnelTravelEnd + MERGE_DURATION * (
      1.05 * progress + 0.65 * Math.pow(progress, 3) / 3
    );
    const whiteout = smootherStep((progress - 0.62) / 0.38);
    const lightScale = 0.07 + Math.pow(eased, 2) * 1.58;
    setNorthGatePose();
    setWarpStrength(1, {
      speed,
      travel,
      flow: 1,
      whiteout,
      lightScale,
      anchor: 'center',
      phase: 'merge',
      distortion: 0.07,
    });
    if (progress >= 1) beginWhiteHold();
  }

  function updateReflectionWhiteHold(delta) {
    reflectionWhiteHoldElapsed += Math.min(delta, 0.1);
    const distance = Math.max(
      PLANET_RADIUS + 0.03,
      reflectionEndDistance - reflectionExitSpeed * reflectionWhiteHoldElapsed,
    );
    setReflectionSouthPose(distance, 0);
    setReflectionWhiteout(1, 'reflectionWhiteHold', { expansion: 1, anchor: 'south', reveal: 0 });
    if (reflectionWhiteHoldElapsed >= reflectionWhiteHoldDuration) beginReflectionReveal();
  }

  function updateReflectionReveal(delta) {
    reflectionRevealElapsed += Math.min(delta, 0.1);
    const cameraProgress = THREE.MathUtils.clamp(
      reflectionRevealElapsed / reflectionRevealDuration,
      0,
      1,
    );
    const rebuildProgress = THREE.MathUtils.clamp(
      reflectionRevealElapsed / reflectionRebuildDuration,
      0,
      1,
    );
    const cameraEased = smootherStep(cameraProgress);

    if (!reflectionControlsReleased) {
      const travelled = taperedRevealDistance(
        Math.min(reflectionRevealElapsed, reflectionRevealDuration),
        reflectionExitSpeed,
        reflectionRevealDuration,
        reflectionConstantRevealTime,
      );
      const distance = reflectionSouthStartDistance - travelled;
      const controlsNormalization = smootherStep((cameraProgress - 0.16) / 0.74);
      setReflectionSouthPose(distance, controlsNormalization);
      orbitSafePosition.copy(camera.position);
      orbitSafeQuaternion.copy(camera.quaternion);
    }

    const whiteout = 1 - smootherStep((cameraProgress - 0.80) / 0.20);
    setReflectionWhiteout(whiteout, 'reflectionReveal', {
      expansion: 1,
      anchor: 'south',
      reveal: cameraProgress,
    });
    reflectionQualities.setState({
      northGlow: 0,
      southGlow: THREE.MathUtils.lerp(0.34, 0.18, cameraEased),
      labelOpacity: 1,
      morph: 0,
      convergence: 0,
      capNorth: 1,
      capSouth: 1,
      ambient: 0.46 * (1 - cameraEased),
      whiten: 1 - smootherStep(cameraProgress / 0.72),
      mapOpacity: 0,
      mapReveal: smootherStep((rebuildProgress - 0.24) / 0.68),
      connectionOpacity: smootherStep((rebuildProgress - 0.84) / 0.15),
      southJourney: smootherStep((cameraProgress - 0.10) / 0.50),
      arrival: 1,
    });

    if (cameraProgress >= 0.58) restorePassageCursor();
    if (!legendReturnStarted && rebuildProgress >= REFLECTION_LEDGER_RETURN_START) {
      legendReturnStarted = true;
      const remainingRebuildMs = Math.max(
        650,
        (1 - REFLECTION_LEDGER_RETURN_START) * reflectionRebuildDuration * 1000,
      );
      legend.style.transitionDuration = `${remainingRebuildMs.toFixed(0)}ms`;
      legend.classList.remove('is-wormhole-active');
    }
    if (cameraProgress >= 1) releaseReflectionCamera();
    if (rebuildProgress >= 1) finishReflectionPassage();
  }

  function updateWhiteHold(delta) {
    whiteHoldElapsed += Math.min(delta, 0.1);
    setSouthAxisPose(SOUTH_NEAR_DISTANCE);
    setWarpStrength(1, {
      speed: 1.5,
      whiteout: 1,
      lightScale: 1.68,
      anchor: 'center',
      phase: 'whiteHold',
    });
    if (whiteHoldElapsed >= WHITE_HOLD_DURATION) beginEject();
  }

  function updateEject(delta) {
    ejectElapsed += Math.min(delta, 0.1);
    const progress = THREE.MathUtils.clamp(ejectElapsed / EJECT_DURATION, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 5);
    const distance = THREE.MathUtils.lerp(SOUTH_NEAR_DISTANCE, SOUTH_ORBIT_DISTANCE, eased);
    setSouthAxisPose(distance);
    const whiteout = 1 - smootherStep(progress / 0.48);
    const warpFade = 0.12 + 0.88 * (1 - smootherStep((progress - 0.18) / 0.82));
    const lightScale = 0.052 + Math.pow(1 - eased, 1.2) * 1.62;
    setWarpStrength(warpFade, {
      speed: 1.5 * (1 - progress),
      whiteout,
      ejection: Math.sin(progress * Math.PI),
      lightScale,
      anchor: 'south',
      phase: 'eject',
    });
    if (!legendReturnStarted && progress >= 0.55) {
      legendReturnStarted = true;
      legend.classList.remove('is-wormhole-active');
    }
    if (progress >= 1) beginSettle();
  }

  function updateSettle(delta) {
    settleElapsed += Math.min(delta, 0.1);
    const progress = THREE.MathUtils.clamp(settleElapsed / SETTLE_DURATION, 0, 1);
    const eased = smootherStep(progress);
    camera.position.copy(settleStartPosition).lerp(orbitReadyPosition, eased);
    camera.quaternion.copy(settleStartQuaternion).slerp(orbitReadyQuaternion, eased);
    camera.up.copy(settleStartUp).lerp(DEFAULT_CAMERA_UP, eased).normalize();
    setWarpStrength(0.12 * (1 - eased), {
      anchor: 'south',
      lightScale: 0.05,
      phase: 'settle',
    });
    if (progress >= 1) finishPassage();
  }

  function update(delta, elapsedTime) {
    group.position.copy(middleOfPlanet);
    fogShell.material.uniforms.uTime.value = elapsedTime;
    whiteHole.core.material.uniforms.uTime.value = elapsedTime;
    reflectionQualities.update(delta);
    sampleCameraMotion(delta);

    if (!visible) return;
    if (stage === 'idle' || stage === 'complete') updateIdle(delta);
    else if (stage === 'capture') {
      if (activePassageStyle === 'reflection') updateReflectionPull(delta);
      else updateInfiniteCapture(delta);
    }
    else if (stage === 'tunnel') updateTunnel(delta);
    else if (stage === 'merge') updateMerge(delta);
    else if (stage === 'reflectionWhiteHold') updateReflectionWhiteHold(delta);
    else if (stage === 'reflectionReveal') updateReflectionReveal(delta);
    else if (stage === 'whiteHold') updateWhiteHold(delta);
    else if (stage === 'eject') updateEject(delta);
    else if (stage === 'settle') updateSettle(delta);
  }

  function resetAwakening() {
    if (hasCameraControl()) return getState();
    awakened = false;
    stage = 'idle';
    activePassageStyle = null;
    completedPassageStyle = null;
    captureElapsed = 0;
    tunnelElapsed = 0;
    mergeElapsed = 0;
    whiteHoldElapsed = 0;
    ejectElapsed = 0;
    settleElapsed = 0;
    reflectionWhiteHoldElapsed = 0;
    reflectionRevealElapsed = 0;
    reflectionPace = 1;
    reflectionWhiteHoldDuration = REFLECTION_WHITE_HOLD_BASE_DURATION;
    reflectionRevealDuration = REFLECTION_REVEAL_BASE_DURATION;
    reflectionRebuildDuration = REFLECTION_REBUILD_BASE_DURATION;
    reflectionConstantRevealTime = REFLECTION_CONSTANT_REVEAL_BASE_TIME;
    reflectionControlsReleased = false;
    reflectionEntrySpeed = 0;
    reflectionCalmness = 1;
    reflectionVisibility = 1;
    reflectionVisibilitySamples = [1, 1, 1];
    reflectionIntegrationQuality = 1;
    tunnelTravelEnd = 0;
    legendReturnStarted = false;
    legend.style.removeProperty('transition-duration');
    capturePortalInitiallyVisible = true;
    hasCameraVelocitySample = false;
    sampledCameraVelocity.set(0, 0, 0);
    lastCameraPosition.copy(camera.position);
    restorePassageCursor();
    legend.classList.remove('is-pulling', 'is-wormhole-active', 'has-completed-passage');
    whiteHole.group.visible = false;
    setWarpStrength(0);
    reflectionQualities.reset();
    syncReflectionVisualState();
    setPalette();
    return getState();
  }

  function hasCameraControl() {
    if (stage === 'reflectionReveal' && reflectionControlsReleased) return false;
    return stage !== 'idle' && stage !== 'complete';
  }

  function getStageProgress() {
    if (stage === 'capture') return THREE.MathUtils.clamp(captureElapsed / captureDuration, 0, 1);
    if (stage === 'tunnel') return THREE.MathUtils.clamp(tunnelElapsed / TUNNEL_DURATION, 0, 1);
    if (stage === 'merge') return THREE.MathUtils.clamp(mergeElapsed / MERGE_DURATION, 0, 1);
    if (stage === 'reflectionWhiteHold') {
      return THREE.MathUtils.clamp(reflectionWhiteHoldElapsed / reflectionWhiteHoldDuration, 0, 1);
    }
    if (stage === 'reflectionReveal') {
      return THREE.MathUtils.clamp(reflectionRevealElapsed / reflectionRebuildDuration, 0, 1);
    }
    if (stage === 'whiteHold') return THREE.MathUtils.clamp(whiteHoldElapsed / WHITE_HOLD_DURATION, 0, 1);
    if (stage === 'eject') return THREE.MathUtils.clamp(ejectElapsed / EJECT_DURATION, 0, 1);
    if (stage === 'settle') return THREE.MathUtils.clamp(settleElapsed / SETTLE_DURATION, 0, 1);
    return 0;
  }

  function getState() {
    return {
      visible,
      awakened,
      stage,
      progress: getStageProgress(),
      hasCameraControl: hasCameraControl(),
      configuredPassageStyle,
      activePassageStyle,
      completedPassageStyle,
      reflectionPacing: {
        pace: reflectionPace,
        entrySpeed: reflectionEntrySpeed,
        calmness: reflectionCalmness,
        northStarVisibility: reflectionVisibility,
        northStarVisibilitySamples: [...reflectionVisibilitySamples],
        integrationQuality: reflectionIntegrationQuality,
        approachDuration: activePassageStyle === 'reflection' ? captureDuration : null,
        revealDuration: reflectionRevealDuration,
        rebuildDuration: reflectionRebuildDuration,
        controlsReleased: reflectionControlsReleased,
      },
      reflection: reflectionQualities.getState(),
      mirroredPosition: mirroredPosition.toArray(),
      orbitSafePosition: orbitSafePosition.toArray(),
    };
  }

  group.visible = false;
  reflectionQualities.setEnabled(false);
  legend.dataset.passageStyle = configuredPassageStyle;
  setPalette();

  return {
    toggle,
    setVisible,
    update,
    getState,
    hasCameraControl,
    resetAwakening,
    getPassageStyle,
    setPassageStyle,
    cyclePassageStyle,
  };
}
