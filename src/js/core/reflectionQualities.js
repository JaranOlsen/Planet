import * as THREE from 'three';
import { palette } from '../data/palette.js';

const FULL_DEFINITIONS = Object.freeze([
  {
    key: 'essence-love',
    id: '8BD3708E-8E3D-44B8-9E92-1050FA7987E5',
    color: '#3072BC',
  },
  {
    key: 'essence-wisdom',
    id: 'D4724AD1-EECD-4975-920C-CDAD71AA53C3',
    color: '#F6F055',
  },
  {
    key: 'essence-salvation',
    id: '0027E01B-C40A-49F0-9833-30244700C39E',
    color: '#F6A0CB',
  },
]);

const SIMPLE_DEFINITIONS = Object.freeze([
  {
    key: 'peace',
    id: '4A481D1E-5DB6-4ABB-B9D0-8164F41393F9',
    color: '#F6A0CB',
  },
  {
    key: 'love',
    id: 'F47603CA-44A7-4009-B07B-29DFA540729D',
    color: '#3072BC',
  },
  {
    key: 'truth',
    id: '982A6AFF-D536-4504-B63A-EC42A2712432',
    color: '#ED9C00',
  },
]);

const FULL_SOUTH_DEFINITIONS = Object.freeze([
  {
    key: 'what-matters-heart',
    id: '8D82CC00-C9F5-4B9E-B256-A879D4623B3C',
  },
  {
    key: 'what-matters-head',
    id: '46CBB5AE-79D5-4808-A400-4B804DA91E12',
  },
  {
    key: 'what-matters-gut',
    id: '9BFCB2C3-78B9-4982-8501-2BFF113D4207',
  },
]);

const SIMPLE_SOUTH_DEFINITIONS = Object.freeze([
  {
    key: 'path-befriending',
    id: '71B15D71-9932-4968-A2A1-EC0BCED41767',
  },
  {
    key: 'path-training',
    id: '75D92BE8-712E-4ED0-87E0-797D76833E68',
  },
  {
    key: 'path-realisation',
    id: '98568041-552F-4ACD-9418-ADAA5A5CE684',
  },
]);

const DEFAULT_STATE = Object.freeze({
  northGlow: 0,
  southGlow: 0,
  labelOpacity: 1,
  morph: 0,
  convergence: 0,
  capNorth: 1,
  capSouth: 0,
  ambient: 0,
  whiten: 0,
  mapOpacity: 1,
  mapReveal: 1,
  connectionOpacity: 1,
  southJourney: 1,
  arrival: 0,
});

// These values follow the actual white strip in all four legacy diffuse maps.
// The old overlay covered 23 degrees; the baked cap ends at about 7.2 degrees.
const CAP_EDGE_COS = '0.99211470';
const CAP_SOLID_COS = '0.99396096';
const SOUTH_CAP_INITIAL_EDGE_DEGREES = 7.2;
const SOUTH_CAP_FINAL_EDGE_DEGREES = 13.4;
// Keep only a tiny truly uniform centre. A wider solid core projects as an
// ellipse even when the surrounding cap transition is broad and irregular.
const SOUTH_CAP_CORE_DEGREES = 0.65;
const SOUTH_CAP_BRIGHT_CORE_EDGE_DEGREES = 3.0;
const SOUTH_CAP_BRIGHT_CORE_SOLID_DEGREES = 0.45;
const SOUTH_CAP_INITIAL_STRENGTH = 0.72;
const SOUTH_CAP_FINAL_STRENGTH = 0.16;
const SOUTH_CAP_INITIAL_CORE_STRENGTH = 0.97;
const SOUTH_CAP_FINAL_CORE_STRENGTH = 0.28;
const BRANCH_FOG_POOL_SIZE = 144;
const WHITE = new THREE.Color(0xffffff);
const IDENTITY_QUATERNION = new THREE.Quaternion();

function clamp01(value) {
  return THREE.MathUtils.clamp(Number.isFinite(value) ? value : 0, 0, 1);
}

function smootherStep(value, start = 0, end = 1) {
  if (end <= start) return value >= end ? 1 : 0;
  const t = clamp01((value - start) / (end - start));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function createFogTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, 256, 256);

  // A quiet, perfectly round body gives each fog the calm fullness of the
  // earlier version. Its very long falloff avoids reinstating a readable rim;
  // the asymmetric breaths below supply the living outer shape.
  const circularBody = context.createRadialGradient(128, 128, 0, 128, 128, 120);
  circularBody.addColorStop(0, 'rgba(255, 255, 255, 0.34)');
  circularBody.addColorStop(0.18, 'rgba(255, 255, 255, 0.31)');
  circularBody.addColorStop(0.45, 'rgba(255, 255, 255, 0.18)');
  circularBody.addColorStop(0.72, 'rgba(255, 255, 255, 0.055)');
  circularBody.addColorStop(0.90, 'rgba(255, 255, 255, 0.008)');
  circularBody.addColorStop(1, 'rgba(255, 255, 255, 0)');
  context.fillStyle = circularBody;
  context.fillRect(0, 0, 256, 256);
  context.globalCompositeOperation = 'screen';

  // Build the fog from overlapping, elongated breaths rather than one radial
  // bloom. A dominant circular alpha envelope remained readable as an oval on
  // the planet even after depth clipping was removed.
  const wisps = [
    [-24, -10, 68, 1.30, 0.58, -0.42, 0.30],
    [ 18, -18, 72, 1.12, 0.64,  0.31, 0.28],
    [  4,  19, 76, 1.28, 0.52, -0.08, 0.27],
    [-31,  25, 55, 1.46, 0.44,  0.52, 0.21],
    [ 36,  17, 52, 1.38, 0.47, -0.63, 0.20],
    [-11, -39, 48, 1.55, 0.40,  0.12, 0.18],
    [ 11,  42, 44, 1.62, 0.38, -0.28, 0.17],
    [-48,  -3, 39, 1.70, 0.34,  0.74, 0.14],
    [ 49,  -7, 42, 1.58, 0.35, -0.82, 0.14],
    [-21,  51, 36, 1.72, 0.32,  0.38, 0.12],
    [ 29, -50, 34, 1.76, 0.31, -0.18, 0.11],
  ];
  wisps.forEach(([offsetX, offsetY, radius, stretchX, stretchY, rotation, alpha]) => {
    context.save();
    context.translate(128 + offsetX, 128 + offsetY);
    context.rotate(rotation);
    context.scale(stretchX, stretchY);
    const wisp = context.createRadialGradient(0, 0, 0, 0, 0, radius);
    wisp.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
    wisp.addColorStop(0.34, `rgba(255, 255, 255, ${alpha * 0.72})`);
    wisp.addColorStop(0.68, `rgba(255, 255, 255, ${alpha * 0.24})`);
    wisp.addColorStop(0.88, `rgba(255, 255, 255, ${alpha * 0.055})`);
    wisp.addColorStop(1, 'rgba(255, 255, 255, 0)');
    context.fillStyle = wisp;
    context.fillRect(-radius, -radius, radius * 2, radius * 2);
    context.restore();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.name = 'reflection-quality-fog';
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function eachMaterial(material, callback) {
  if (Array.isArray(material)) {
    material.forEach((entry, index) => entry && callback(entry, index));
    return;
  }
  if (material) callback(material, 0);
}

function cloneMaterialReference(material) {
  if (Array.isArray(material)) return material.map((entry) => entry?.clone?.() || entry);
  return material?.clone?.() || material;
}

function disposeMaterialReference(material) {
  eachMaterial(material, (entry) => entry.dispose?.());
}

function firstMaterial(material) {
  if (Array.isArray(material)) return material.find(Boolean) || null;
  return material || null;
}

function createShadowDissolveMaterial(source, distance = false) {
  const revealUniform = { value: 0 };
  const material = distance
    ? new THREE.MeshDistanceMaterial()
    : new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  material.name = `reflection-${distance ? 'distance' : 'depth'}-dissolve`;
  material.map = source?.map || null;
  material.alphaMap = source?.alphaMap || null;
  material.alphaTest = Number(source?.alphaTest) || 0;
  material.side = source?.shadowSide ?? source?.side ?? THREE.FrontSide;
  material.clipShadows = Boolean(source?.clipShadows);
  material.clippingPlanes = source?.clippingPlanes || null;
  material.clipIntersection = Boolean(source?.clipIntersection);
  material.displacementMap = source?.displacementMap || null;
  material.displacementScale = Number.isFinite(source?.displacementScale)
    ? source.displacementScale
    : 1;
  material.displacementBias = Number.isFinite(source?.displacementBias)
    ? source.displacementBias
    : 0;
  material.alphaHash = true;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uReflectionRevealOpacity = revealUniform;
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        '#include <common>\nuniform float uReflectionRevealOpacity;',
      )
      .replace(
        'vec4 diffuseColor = vec4( 1.0 );',
        'vec4 diffuseColor = vec4( 1.0 );\ndiffuseColor.a *= uReflectionRevealOpacity;',
      );
  };
  material.customProgramCacheKey = () => `reflection-shadow-dissolve-${distance ? 'distance' : 'depth'}-v1`;
  return { material, revealUniform };
}

function makeFadableMaterialRecord(mesh) {
  const original = mesh.material;
  const clone = cloneMaterialReference(original);
  const baseOpacities = [];
  const baseDepthWrites = [];
  eachMaterial(clone, (entry, index) => {
    baseOpacities[index] = Number.isFinite(entry.opacity) ? entry.opacity : 1;
    baseDepthWrites[index] = entry.depthWrite;
    entry.transparent = true;
    entry.depthWrite = false;
    entry.needsUpdate = true;
  });
  mesh.material = clone;
  return {
    mesh,
    original,
    clone,
    baseOpacities,
    baseDepthWrites,
    organic: false,
    originalCastShadow: mesh.castShadow,
    originalCustomDepthMaterial: mesh.customDepthMaterial,
    originalCustomDistanceMaterial: mesh.customDistanceMaterial,
    shadowDissolve: null,
  };
}

function ensureShadowDissolve(record) {
  if (
    record.shadowDissolve
    || !record.originalCastShadow
    || !record.mesh?.isMesh
  ) return;
  const source = firstMaterial(record.clone);
  if (!source) return;
  const depth = createShadowDissolveMaterial(source, false);
  const distance = createShadowDissolveMaterial(source, true);
  record.mesh.customDepthMaterial = depth.material;
  record.mesh.customDistanceMaterial = distance.material;
  record.shadowDissolve = { depth, distance };
}

function setMaterialOpacity(record, opacity, { organic = false, syncShadow = false } = {}) {
  if (!record) return;
  const amount = clamp01(opacity);
  const nextOrganic = organic && amount < 0.9995;
  eachMaterial(record.clone, (entry, index) => {
    entry.opacity = (record.baseOpacities[index] ?? 1) * amount;
    if (record.organic !== nextOrganic) {
      entry.alphaHash = nextOrganic;
      entry.transparent = !nextOrganic;
      entry.depthWrite = nextOrganic ? record.baseDepthWrites[index] : false;
      entry.needsUpdate = true;
    }
  });
  record.organic = nextOrganic;

  if (!record.originalCastShadow) return;
  if (!syncShadow || amount <= 0.001) {
    record.mesh.castShadow = amount >= 0.9995 && record.originalCastShadow;
    return;
  }
  ensureShadowDissolve(record);
  record.mesh.castShadow = true;
  // Shadow maps encode coverage, not the visible material's base translucency.
  // Driving the temporary dissolve with that base opacity left it permanently
  // lighter than the mesh's normal shadow and caused a dark jump when the
  // original depth material was restored at the end of the reveal.
  const shadowOpacity = amount;
  if (record.shadowDissolve) {
    record.shadowDissolve.depth.revealUniform.value = shadowOpacity;
    record.shadowDissolve.distance.revealUniform.value = shadowOpacity;
  }
}

function revealSeed(index, salt = 0) {
  const value = Math.sin((Number(index) + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function organicConnectionOpacity(reveal, seed = 0.5) {
  const start = (clamp01(seed) - 0.5) * 0.10;
  const duration = 0.86 + revealSeed(seed * 1000, 7) * 0.08;
  const local = clamp01((clamp01(reveal) - start) / duration);
  return clamp01(
    smootherStep(local, 0, 0.82) * 0.88
      + smootherStep(local, 0.58, 1) * 0.12,
  );
}

function directionForTag(data) {
  const latitude = THREE.MathUtils.degToRad(Number(data?.lat) || 0);
  const longitude = THREE.MathUtils.degToRad(Number(data?.lng) || 0);
  const latitudeRadius = Math.cos(latitude);
  return new THREE.Vector3(
    latitudeRadius * Math.cos(longitude),
    Math.sin(latitude),
    latitudeRadius * Math.sin(longitude),
  ).normalize();
}

function graphNodeOpacity(meta, reveal) {
  if (!meta?.reachable) return 0;
  if (meta.isRoot) return 1;
  const local = clamp01((clamp01(reveal) - meta.arrival) / meta.duration);
  return clamp01(
    smootherStep(local, 0, 0.76) * 0.84
      + smootherStep(local, 0.46, 1) * 0.16,
  );
}

function buildArrivalGraph(context, connectionRecords, rootIds) {
  const nodeById = new Map();
  context.tagData?.forEach((data, index) => {
    if (!data?.id) return;
    nodeById.set(data.id, {
      id: data.id,
      index,
      data,
      direction: directionForTag(data),
    });
  });

  const adjacency = new Map();
  nodeById.forEach((_node, id) => adjacency.set(id, []));
  connectionRecords.forEach((edge) => {
    if (!nodeById.has(edge.sourceId) || !nodeById.has(edge.targetId)) return;
    adjacency.get(edge.sourceId).push({ edge, neighborId: edge.targetId });
    adjacency.get(edge.targetId).push({ edge, neighborId: edge.sourceId });
  });

  const distances = new Map();
  const rootIndexes = new Map();
  const parents = new Map();
  rootIds.forEach((id, index) => {
    if (!nodeById.has(id)) return;
    distances.set(id, 0);
    rootIndexes.set(id, index);
  });

  const visited = new Set();
  while (visited.size < nodeById.size) {
    let currentId = null;
    let currentDistance = Infinity;
    distances.forEach((distance, id) => {
      if (!visited.has(id) && distance < currentDistance) {
        currentDistance = distance;
        currentId = id;
      }
    });
    if (!currentId) break;
    visited.add(currentId);
    const current = nodeById.get(currentId);
    adjacency.get(currentId)?.forEach(({ edge, neighborId }) => {
      if (visited.has(neighborId)) return;
      const neighbor = nodeById.get(neighborId);
      const angle = Math.acos(THREE.MathUtils.clamp(
        current.direction.dot(neighbor.direction),
        -1,
        1,
      ));
      const nextDistance = currentDistance + 0.28 + angle * 2.2;
      if (nextDistance >= (distances.get(neighborId) ?? Infinity)) return;
      distances.set(neighborId, nextDistance);
      rootIndexes.set(neighborId, rootIndexes.get(currentId) ?? 0);
      parents.set(neighborId, { parentId: currentId, edge });
    });
  }

  const finiteDistances = [...distances.values()].filter(Number.isFinite);
  const maxDistance = Math.max(...finiteDistances, 1);
  const nodeMeta = new Map();
  nodeById.forEach((node, id) => {
    const distance = distances.get(id);
    const reachable = Number.isFinite(distance);
    const isRoot = rootIds.includes(id);
    const normalized = reachable ? distance / maxDistance : 1;
    nodeMeta.set(id, {
      ...node,
      reachable,
      isRoot,
      arrival: isRoot ? 0 : 0.035 + normalized * 0.76,
      duration: 0.105 + revealSeed(node.index, 9) * 0.045,
      rootIndex: rootIndexes.get(id) ?? 0,
      parent: parents.get(id) || null,
    });
  });

  const treeEdges = [];
  const treeEdgeSet = new Set();
  parents.forEach(({ parentId, edge }, childId) => {
    const parentMeta = nodeMeta.get(parentId);
    const childMeta = nodeMeta.get(childId);
    if (!parentMeta?.reachable || !childMeta?.reachable) return;
    edge.treeParentId = parentId;
    edge.treeChildId = childId;
    edge.graphRootIndex = childMeta.rootIndex;
    const splitDelay = parentMeta.isRoot ? 0.018 : parentMeta.duration * 0.48;
    edge.graphStart = Math.min(
      childMeta.arrival - 0.055,
      parentMeta.arrival + splitDelay,
    );
    edge.graphEnd = Math.max(childMeta.arrival, edge.graphStart + 0.055);
    edge.graphConnected = true;
    edge.graphTree = true;
    treeEdges.push(edge);
    treeEdgeSet.add(edge);
  });

  connectionRecords.forEach((edge) => {
    if (treeEdgeSet.has(edge)) return;
    const source = nodeMeta.get(edge.sourceId);
    const target = nodeMeta.get(edge.targetId);
    edge.graphConnected = Boolean(source?.reachable && target?.reachable);
    edge.graphTree = false;
    if (!edge.graphConnected) return;
    edge.graphRootIndex = source.arrival >= target.arrival
      ? source.rootIndex
      : target.rootIndex;
    edge.graphStart = Math.max(source.arrival, target.arrival) + 0.012;
    edge.graphEnd = Math.min(0.94, edge.graphStart + 0.105);
  });

  return { nodeMeta, treeEdges };
}

function restoreMaterialRecord(record) {
  if (!record) return;
  if (record.mesh?.material === record.clone) record.mesh.material = record.original;
  if (record.mesh) {
    record.mesh.castShadow = record.originalCastShadow;
    record.mesh.customDepthMaterial = record.originalCustomDepthMaterial;
    record.mesh.customDistanceMaterial = record.originalCustomDistanceMaterial;
  }
  record.shadowDissolve?.depth.material.dispose?.();
  record.shadowDissolve?.distance.material.dispose?.();
  disposeMaterialReference(record.clone);
}

function createFogSprite(texture, color, name) {
  const rotationSeed = [...name].reduce(
    (value, character) => (value * 31 + character.charCodeAt(0)) >>> 0,
    2166136261,
  );
  const material = new THREE.SpriteMaterial({
    map: texture,
    color,
    transparent: true,
    opacity: 0,
    // These billboards sit just above a curved surface. Depth testing clips a
    // flat sprite against the planet and exposes the intersection as a sharp
    // ellipse. They are visibility-faded against the surface normal instead.
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
    rotation: (rotationSeed % 4096) / 4096 * Math.PI * 2,
  });
  const sprite = new THREE.Sprite(material);
  sprite.name = name;
  sprite.renderOrder = 210;
  sprite.visible = false;
  sprite.frustumCulled = false;
  return sprite;
}

function disposeSprite(sprite) {
  if (!sprite) return;
  sprite.removeFromParent();
  sprite.material?.dispose?.();
}

function resolveDefinitions(context) {
  if (!Array.isArray(context?.tagData)) return null;
  const ids = new Set(context.tagData.map((item) => item?.id));
  if (FULL_DEFINITIONS.every(({ id }) => ids.has(id))) {
    return {
      mode: 'full',
      definitions: FULL_DEFINITIONS,
      southDefinitions: FULL_SOUTH_DEFINITIONS,
    };
  }
  if (SIMPLE_DEFINITIONS.every(({ id }) => ids.has(id))) {
    return {
      mode: 'simple',
      definitions: SIMPLE_DEFINITIONS,
      southDefinitions: SIMPLE_SOUTH_DEFINITIONS,
    };
  }
  return null;
}

function colorForNode(definition, data) {
  const paletteColor = palette[Number(data?.color)];
  return new THREE.Color(paletteColor || definition.color);
}

function patchProgramCacheKey(material, suffix) {
  const previous = material.customProgramCacheKey?.bind(material);
  material.customProgramCacheKey = () => `${previous?.() || material.type}-${suffix}`;
}

function patchTerrainMaterial(material, capUniforms) {
  if (!material || material.userData?.reflectionPolarTerrain) return;
  const previous = material.onBeforeCompile?.bind(material);
  const forceNorthWhite = { value: material.userData?.proceduralWeatherShadow ? 1 : 0 };

  material.onBeforeCompile = (shader, renderer) => {
    previous?.(shader, renderer);
    shader.uniforms.uReflectionNorthProtect = capUniforms.northProtect;
    shader.uniforms.uReflectionNorthBrightness = capUniforms.northBrightness;
    shader.uniforms.uReflectionSouthReveal = capUniforms.southReveal;
    shader.uniforms.uReflectionSouthCoreReveal = capUniforms.southCoreReveal;
    shader.uniforms.uReflectionSouthEdgeCos = capUniforms.southEdgeCos;
    shader.uniforms.uReflectionSouthSolidCos = capUniforms.southSolidCos;
    shader.uniforms.uReflectionForceNorthWhite = forceNorthWhite;
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        '#include <common>\nvarying float vReflectionPolarY;',
      )
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvReflectionPolarY = normalize(position).y;',
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
uniform float uReflectionNorthProtect;
uniform float uReflectionNorthBrightness;
uniform float uReflectionSouthReveal;
uniform float uReflectionSouthCoreReveal;
uniform float uReflectionSouthEdgeCos;
uniform float uReflectionSouthSolidCos;
uniform float uReflectionForceNorthWhite;
varying float vReflectionPolarY;`,
      )
      .replace(
        '#include <color_fragment>',
        '#include <color_fragment>\nvec3 reflectionCapAlbedo = diffuseColor.rgb;',
      )
      .replace(
        '#include <opaque_fragment>',
        `float reflectionNorthCap = smoothstep(
  ${CAP_EDGE_COS},
  ${CAP_SOLID_COS},
  vReflectionPolarY
);
float reflectionNorthQuietCap = smoothstep(
  0.98927233,
  0.99211470,
  vReflectionPolarY
);
float reflectionSouthCap = smoothstep(
  uReflectionSouthEdgeCos - 0.0045,
  uReflectionSouthSolidCos,
  -vReflectionPolarY
);
float reflectionSouthBrightCore = smoothstep(
  ${Math.cos(THREE.MathUtils.degToRad(SOUTH_CAP_BRIGHT_CORE_EDGE_DEGREES)).toFixed(8)},
  ${Math.cos(THREE.MathUtils.degToRad(SOUTH_CAP_BRIGHT_CORE_SOLID_DEGREES)).toFixed(8)},
  -vReflectionPolarY
);
vec3 reflectionNorthUntouched = mix(
  reflectionCapAlbedo,
  vec3(1.0),
  uReflectionForceNorthWhite
);
outgoingLight = mix(
  outgoingLight,
  vec3(0.45, 0.49, 0.56),
  reflectionNorthQuietCap
    * uReflectionNorthProtect
    * (1.0 - uReflectionNorthBrightness)
);
outgoingLight = mix(
  outgoingLight,
  reflectionNorthUntouched,
  reflectionNorthCap * uReflectionNorthProtect * uReflectionNorthBrightness
);
outgoingLight = mix(
  outgoingLight,
  vec3(0.945, 0.956, 0.972),
  max(
    reflectionSouthCap * uReflectionSouthReveal,
    reflectionSouthBrightCore * uReflectionSouthCoreReveal
  )
);
#include <opaque_fragment>`,
      );
    material.userData.reflectionPolarShader = shader;
  };
  patchProgramCacheKey(material, 'reflection-polar-terrain-v6');
  material.userData.reflectionPolarTerrain = true;
  material.needsUpdate = true;
}

function patchClearingMaterial(material, capUniforms) {
  if (!material || material.userData?.reflectionPolarClearing || material.isShaderMaterial) return;
  const previous = material.onBeforeCompile?.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    previous?.(shader, renderer);
    shader.uniforms.uReflectionNorthProtect = capUniforms.northProtect;
    shader.uniforms.uReflectionSouthReveal = capUniforms.southReveal;
    shader.uniforms.uReflectionSouthCoreReveal = capUniforms.southCoreReveal;
    shader.uniforms.uReflectionSouthEdgeCos = capUniforms.southEdgeCos;
    shader.uniforms.uReflectionSouthSolidCos = capUniforms.southSolidCos;
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        '#include <common>\nvarying float vReflectionPolarY;\nvarying vec3 vReflectionPolarPosition;',
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
vec3 reflectionPolarPosition = normalize(position);
vReflectionPolarY = reflectionPolarPosition.y;
vReflectionPolarPosition = reflectionPolarPosition;`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
uniform float uReflectionNorthProtect;
uniform float uReflectionSouthReveal;
uniform float uReflectionSouthCoreReveal;
uniform float uReflectionSouthEdgeCos;
uniform float uReflectionSouthSolidCos;
varying float vReflectionPolarY;
varying vec3 vReflectionPolarPosition;
float reflectionPolarEdgeNoise(vec3 polarPosition) {
  float longitude = atan(polarPosition.z, polarPosition.x);
  return sin(longitude * 3.0 + polarPosition.y * 5.0) * 0.0018
    + sin(longitude * 7.0 - polarPosition.y * 9.0 + 1.7) * 0.00105
    + sin(longitude * 13.0 + 0.4) * 0.00055;
}`,
      )
      .replace(
        '#include <alphamap_fragment>',
        `#include <alphamap_fragment>
float reflectionEdgeNoise = reflectionPolarEdgeNoise(vReflectionPolarPosition);
float reflectionNorthClear = smoothstep(
    ${Math.cos(THREE.MathUtils.degToRad(10.5)).toFixed(8)},
    ${Math.cos(THREE.MathUtils.degToRad(8.0)).toFixed(8)},
    vReflectionPolarY + reflectionEdgeNoise
  )
  * uReflectionNorthProtect;
float reflectionSouthClear = smoothstep(
    uReflectionSouthEdgeCos - 0.0065,
    uReflectionSouthSolidCos,
    -vReflectionPolarY + reflectionEdgeNoise
  )
  * uReflectionSouthReveal;
float reflectionSouthCoreClear = smoothstep(
    ${Math.cos(THREE.MathUtils.degToRad(SOUTH_CAP_BRIGHT_CORE_EDGE_DEGREES)).toFixed(8)},
    ${Math.cos(THREE.MathUtils.degToRad(SOUTH_CAP_BRIGHT_CORE_SOLID_DEGREES)).toFixed(8)},
    -vReflectionPolarY
  )
  * uReflectionSouthCoreReveal;
diffuseColor.a *= 1.0 - max(
  reflectionNorthClear,
  max(reflectionSouthClear, reflectionSouthCoreClear)
);`,
      );
    material.userData.reflectionPolarShader = shader;
  };
  patchProgramCacheKey(material, 'reflection-polar-clearing-v4');
  material.userData.reflectionPolarClearing = true;
  material.needsUpdate = true;
}

function patchObjectMaterials(root, callback) {
  if (!root?.traverse) return;
  root.traverse((object) => {
    if (!object?.material) return;
    eachMaterial(object.material, callback);
  });
}

/**
 * Supports the short north-to-south reflection passage. Node lookup remains
 * lazy because labels arrive after the font and map switching replaces them.
 */
export function createReflectionQualities({
  group,
  camera,
  getPlanetContext,
  getJaranius,
  getPlanetLayers,
  planetRadius = 5,
}) {
  if (!group?.add) throw new TypeError('createReflectionQualities requires a THREE.Group-like group.');
  if (typeof getPlanetContext !== 'function') {
    throw new TypeError('createReflectionQualities requires getPlanetContext().');
  }

  const ambientLight = new THREE.AmbientLight(0xfffbf2, 0);
  ambientLight.name = 'reflection-awakening-ambient';
  group.add(ambientLight);

  const capUniforms = {
    northProtect: { value: 1 },
    northBrightness: { value: 1 },
    southReveal: { value: 0 },
    southCoreReveal: { value: 0 },
    southEdgeCos: { value: Math.cos(THREE.MathUtils.degToRad(SOUTH_CAP_INITIAL_EDGE_DEGREES)) },
    southSolidCos: { value: Math.cos(THREE.MathUtils.degToRad(SOUTH_CAP_CORE_DEGREES)) },
  };
  const fogTexture = createFogTexture();
  const scratchWorld = new THREE.Vector3();
  const scratchLocal = new THREE.Vector3();
  const scratchCenter = new THREE.Vector3();
  const scratchProjected = new THREE.Vector3();
  const scratchSurfaceNormal = new THREE.Vector3();
  const scratchViewDirection = new THREE.Vector3();
  const scratchQuaternion = new THREE.Quaternion();
  let enabled = false;
  let resolved = null;
  let mapVisuals = null;
  let southCapAge = 0;
  let state = { ...DEFAULT_STATE };

  function fogSurfaceVisibility(sprite) {
    if (!camera?.isCamera || !sprite?.parent) return 1;
    sprite.getWorldPosition(scratchWorld);
    group.getWorldPosition(scratchCenter);
    scratchSurfaceNormal.copy(scratchWorld).sub(scratchCenter);
    if (scratchSurfaceNormal.lengthSq() < 0.0001) return 0;
    scratchSurfaceNormal.normalize();
    scratchViewDirection.copy(camera.position).sub(scratchWorld);
    if (scratchViewDirection.lengthSq() < 0.0001) return 1;
    scratchViewDirection.normalize();
    return smootherStep(scratchSurfaceNormal.dot(scratchViewDirection), -0.12, 0.18);
  }

  function releaseMapVisuals() {
    if (!mapVisuals) return;
    const restoreItem = (item) => {
      restoreMaterialRecord(item.record);
      if (item.baseScale && item.object?.scale) item.object.scale.copy(item.baseScale);
    };
    mapVisuals.nodeRecords.forEach(restoreItem);
    mapVisuals.imageRecords.forEach(restoreItem);
    mapVisuals.markerRecords.forEach(restoreItem);
    mapVisuals.connectionRecords.forEach(({ record }) => restoreMaterialRecord(record));
    mapVisuals.branchFogSprites.forEach(disposeSprite);
    mapVisuals = null;
  }

  function collectMapVisuals(context) {
    if (!context) return null;
    const selectedObjects = new Set();
    resolved?.nodes.forEach((node) => {
      selectedObjects.add(node.pin);
      selectedObjects.add(node.box);
      selectedObjects.add(node.tag);
      selectedObjects.add(node.southPin);
      selectedObjects.add(node.southBox);
      selectedObjects.add(node.southTag);
    });

    const nodeRecords = [];
    const seenNodes = new Set();
    const addNode = (object, data, wakeSeed, role) => {
      if (!object?.material || seenNodes.has(object) || selectedObjects.has(object)) return;
      seenNodes.add(object);
      nodeRecords.push({
        object,
        id: data?.id,
        latitude: Number(data?.lat) || 0,
        wakeSeed,
        role,
        baseScale: object.scale.clone(),
        record: null,
      });
    };
    context.tagData?.forEach((data, index) => {
      const wakeSeed = revealSeed(index, 1);
      addNode(context.pins?.[index], data, wakeSeed, 'pin');
      addNode(context.boxes?.[index], data, wakeSeed, 'box');
      addNode(context.tags?.[index], data, wakeSeed, 'label');
    });

    const imageRecords = [];
    context.imageData?.forEach((data, index) => {
      const object = context.images?.[index];
      if (object?.material) {
        imageRecords.push({
          object,
          latitude: Number(data?.lat) || 0,
          wakeSeed: revealSeed(index, 2),
          role: 'image',
          baseScale: object.scale.clone(),
          record: null,
        });
      }
    });

    const markerRecords = [];
    let layers = null;
    try {
      layers = getPlanetLayers?.() || null;
    } catch (_error) {
      layers = null;
    }
    layers?.sign?.traverse?.((object) => {
      if (object?.material) {
        markerRecords.push({
          object,
          latitude: -90,
          wakeSeed: revealSeed(0, 3),
          role: 'marker',
          baseScale: object.scale.clone(),
          record: null,
        });
      }
    });

    const connectionRecords = [];
    context.connectionDestination?.traverse?.((object) => {
      if (!object?.material || object.userData?.connectionHandle || object.userData?.connectionHandleGuide) return;
      const connection = object.userData?.reflectionConnection || {};
      connectionRecords.push({
        object,
        sourceId: connection.sourceId,
        targetId: connection.targetId,
        kind: connection.kind,
        path: connection.path,
        wakeSeed: revealSeed(connectionRecords.length, 5),
        record: null,
      });
    });

    const rootIds = resolved?.nodes.map((node) => node.southDefinition?.id).filter(Boolean) || [];
    const arrivalGraph = buildArrivalGraph(context, connectionRecords, rootIds);
    const branchFogSprites = Array.from({ length: BRANCH_FOG_POOL_SIZE }, (_, index) => {
      const sprite = createFogSprite(fogTexture, WHITE, `reflection-branch-fog-${index}`);
      resolved?.destination?.add(sprite);
      return sprite;
    });

    return {
      context,
      nodeRecords,
      imageRecords,
      markerRecords,
      connectionRecords,
      nodeMeta: arrivalGraph.nodeMeta,
      treeEdges: arrivalGraph.treeEdges,
      branchFogSprites,
    };
  }

  function ensureMapVisuals() {
    const context = resolved?.context;
    if (!context) return false;
    const expectedNodeCount = (context.tagData?.length || 0) * 3 - (resolved?.nodes.length || 0) * 6;
    const expectedImageCount = context.images?.filter(Boolean).length || 0;
    let expectedMarkerCount = 0;
    try {
      getPlanetLayers?.()?.sign?.traverse?.((object) => {
        if (object?.material) expectedMarkerCount += 1;
      });
    } catch (_error) {
      expectedMarkerCount = 0;
    }
    if (
      mapVisuals?.context !== context
      || mapVisuals.nodeRecords.length !== expectedNodeCount
      || mapVisuals.imageRecords.length !== expectedImageCount
      || mapVisuals.markerRecords.length !== expectedMarkerCount
    ) {
      releaseMapVisuals();
      mapVisuals = collectMapVisuals(context);
    }
    return Boolean(mapVisuals);
  }

  function applyRecordOpacity(item, opacity, options) {
    const amount = clamp01(opacity);
    if (item.baseScale && item.object?.scale) {
      if (options?.spawn && amount < 0.9995) {
        const minimumScale = {
          pin: 0.34,
          box: 0.52,
          label: 0.90,
          image: 0.88,
          marker: 0.90,
        }[item.role] ?? 0.82;
        const formation = smootherStep(amount, 0.02, 0.94);
        item.object.scale.copy(item.baseScale).multiplyScalar(
          THREE.MathUtils.lerp(minimumScale, 1, formation),
        );
      } else {
        item.object.scale.copy(item.baseScale);
      }
    }
    if (opacity >= 0.9995) {
      if (item.record) restoreMaterialRecord(item.record);
      item.record = null;
      return;
    }
    if (!item.record) item.record = makeFadableMaterialRecord(item.object);
    setMaterialOpacity(item.record, opacity, options);
  }

  function pointAlongTreeEdge(edge, progress, target) {
    const forward = edge.treeParentId === edge.sourceId;
    const pathProgress = forward ? progress : 1 - progress;
    if (edge.path?.getPoint) {
      edge.path.getPoint(clamp01(pathProgress), target);
      if (target.lengthSq() > 0.001) target.setLength(target.length() + 0.018);
      return target;
    }
    const parent = mapVisuals.nodeMeta.get(edge.treeParentId);
    const child = mapVisuals.nodeMeta.get(edge.treeChildId);
    if (!parent?.direction || !child?.direction) return target.set(0, 0, 0);
    target.lerpVectors(parent.direction, child.direction, clamp01(progress)).normalize();
    return target.multiplyScalar(
      planetRadius + 0.10 + Math.sin(Math.PI * clamp01(progress)) * 0.10,
    );
  }

  function applyBranchFog() {
    if (!mapVisuals) return;
    const sprites = mapVisuals.branchFogSprites;
    sprites.forEach((sprite) => {
      sprite.visible = false;
      sprite.material.opacity = 0;
    });
    if (state.arrival <= 0.5) return;

    const reveal = clamp01(state.mapReveal);
    const assignments = [];
    mapVisuals.treeEdges.forEach((edge) => {
      const travelSpan = Math.max(0.04, edge.graphEnd - edge.graphStart);
      const rawTravel = (reveal - edge.graphStart) / travelSpan;
      if (rawTravel < -0.06 || rawTravel > 1.34) return;
      const travel = smootherStep(rawTravel);
      const rootColor = resolved?.nodes[edge.graphRootIndex]?.nodeColor || WHITE;

      [0, 0.085, 0.17].forEach((tail, index) => {
        const position = travel - tail;
        if (position <= 0 || position > 1) return;
        const headStrength = 1 - tail * 2.4;
        const birth = smootherStep(position, 0, 0.18);
        assignments.push({
          edge,
          progress: position,
          opacity: (0.38 + index * 0.075) * headStrength * birth,
          scale: 0.52 + index * 0.12 + Math.sin(Math.PI * position) * 0.22,
          color: rootColor,
        });
      });

      if (rawTravel >= 0.78) {
        const linger = 1 - smootherStep(rawTravel, 0.96, 1.34);
        assignments.push({
          edge,
          progress: 1,
          opacity: 0.62 * linger,
          scale: THREE.MathUtils.lerp(0.72, 1.08, smootherStep(rawTravel, 0.78, 1.2)),
          color: rootColor,
        });
      }
    });

    assignments.sort((a, b) => b.opacity - a.opacity);
    assignments.slice(0, sprites.length).forEach((assignment, index) => {
      const sprite = sprites[index];
      pointAlongTreeEdge(assignment.edge, assignment.progress, sprite.position);
      const surfaceVisibility = fogSurfaceVisibility(sprite);
      sprite.material.color.copy(assignment.color).lerp(WHITE, 0.14);
      sprite.material.opacity = assignment.opacity * surfaceVisibility;
      sprite.scale.setScalar(assignment.scale);
      sprite.visible = sprite.material.opacity > 0.003;
    });
  }

  function applyMapVisualState() {
    if (!ensureMapVisuals()) return;
    const arriving = state.arrival > 0.5;
    mapVisuals.nodeRecords.forEach((item) => {
      const meta = mapVisuals.nodeMeta.get(item.id);
      const opacity = arriving
        ? (meta?.reachable
          ? graphNodeOpacity(meta, state.mapReveal)
          : organicConnectionOpacity(state.connectionOpacity, item.wakeSeed))
        : state.mapOpacity;
      applyRecordOpacity(item, opacity, {
        organic: false,
        syncShadow: arriving,
        spawn: arriving,
      });
    });
    mapVisuals.imageRecords.forEach((item) => {
      const opacity = arriving
        ? organicConnectionOpacity(state.connectionOpacity, item.wakeSeed)
        : state.mapOpacity;
      applyRecordOpacity(item, opacity, {
        organic: false,
        syncShadow: arriving,
        spawn: arriving,
      });
    });
    mapVisuals.markerRecords.forEach((item) => {
      const opacity = arriving
        ? organicConnectionOpacity(state.connectionOpacity, item.wakeSeed)
        : state.mapOpacity;
      applyRecordOpacity(item, opacity, {
        organic: false,
        syncShadow: arriving,
        spawn: arriving,
      });
    });
    mapVisuals.connectionRecords.forEach((item) => {
      const opacity = arriving
        ? (item.graphConnected
          ? smootherStep(state.mapReveal, item.graphStart, item.graphEnd)
          : organicConnectionOpacity(state.connectionOpacity, item.wakeSeed))
        : state.connectionOpacity;
      applyRecordOpacity(item, opacity, { organic: false, syncShadow: arriving });
    });
    applyBranchFog();
  }

  function updateSouthCap(delta = 0) {
    const capActive = enabled && state.capSouth > 0.001;
    if (capActive) southCapAge += Math.max(0, Math.min(Number(delta) || 0, 0.1));
    else southCapAge = 0;
    const expansion = 1 - Math.exp(-southCapAge / 70);
    const fading = Math.exp(-southCapAge / 52);
    const coreFading = Math.exp(-southCapAge / 64);
    const edgeDegrees = THREE.MathUtils.lerp(
      SOUTH_CAP_INITIAL_EDGE_DEGREES,
      SOUTH_CAP_FINAL_EDGE_DEGREES,
      expansion,
    );
    const strength = THREE.MathUtils.lerp(
      SOUTH_CAP_FINAL_STRENGTH,
      SOUTH_CAP_INITIAL_STRENGTH,
      fading,
    );
    const coreStrength = THREE.MathUtils.lerp(
      SOUTH_CAP_FINAL_CORE_STRENGTH,
      SOUTH_CAP_INITIAL_CORE_STRENGTH,
      coreFading,
    );
    capUniforms.southEdgeCos.value = Math.cos(THREE.MathUtils.degToRad(edgeDegrees));
    capUniforms.southSolidCos.value = Math.cos(THREE.MathUtils.degToRad(SOUTH_CAP_CORE_DEGREES));
    capUniforms.southReveal.value = capActive ? state.capSouth * strength : 0;
    capUniforms.southCoreReveal.value = capActive ? state.capSouth * coreStrength : 0;
  }

  function ensurePlanetHooks() {
    let layers = null;
    try {
      layers = getPlanetLayers?.() || null;
    } catch (_error) {
      layers = null;
    }
    let terrain = layers?.terrain || null;
    if (!terrain) {
      try {
        terrain = getJaranius?.() || null;
      } catch (_error) {
        terrain = null;
      }
    }
    if (terrain?.material) eachMaterial(terrain.material, (material) => patchTerrainMaterial(material, capUniforms));
    patchObjectMaterials(layers?.clouds, (material) => patchClearingMaterial(material, capUniforms));
    patchObjectMaterials(layers?.water, (material) => patchClearingMaterial(material, capUniforms));
  }

  function setStaticVisuals() {
    capUniforms.northProtect.value = 1;
    // Both caps are shaded directly on the terrain so they remain attached at
    // grazing camera angles. The north cap yields as the star fogs converge.
    capUniforms.northBrightness.value = enabled
      ? smootherStep(state.convergence, 0.18, 0.94)
      : 1;
    updateSouthCap(0);
    ambientLight.intensity = enabled ? state.ambient * 0.95 : 0;
    ambientLight.visible = enabled && ambientLight.intensity > 0.001;
    ensurePlanetHooks();
  }

  function restoreNodeMaterials(node) {
    restoreMaterialRecord(node.tagMaterial);
    restoreMaterialRecord(node.boxMaterial);
    restoreMaterialRecord(node.pinMaterial);
    node.tagMaterial = null;
    node.boxMaterial = null;
    node.pinMaterial = null;
  }

  function restoreSouthNodeMaterials(node) {
    restoreMaterialRecord(node.southTagMaterial);
    restoreMaterialRecord(node.southBoxMaterial);
    restoreMaterialRecord(node.southPinMaterial);
    node.southTagMaterial = null;
    node.southBoxMaterial = null;
    node.southPinMaterial = null;
  }

  function returnNodeToDestination(node) {
    node.wrapper.quaternion.identity();
    node.wrapper.updateMatrixWorld(true);
    node.objects.forEach(({ object, parent }) => {
      if (object?.parent === node.wrapper && parent?.attach) parent.attach(object);
    });
    node.pin.scale.copy(node.pinScale);
    node.box.scale.copy(node.boxScale);
    node.tag.scale.copy(node.tagScale);
    node.pin.visible = node.pinVisible;
    node.box.visible = node.boxVisible;
    node.tag.visible = node.tagVisible;
    node.pin.castShadow = node.pinCastShadow;
    node.box.castShadow = node.boxCastShadow;
    node.tag.castShadow = node.tagCastShadow;
    restoreNodeMaterials(node);
    node.southPin.scale.copy(node.southPinScale);
    node.southBox.scale.copy(node.southBoxScale);
    node.southTag.scale.copy(node.southTagScale);
    node.southPin.visible = node.southPinVisible;
    node.southBox.visible = node.southBoxVisible;
    node.southTag.visible = node.southTagVisible;
    node.southPin.castShadow = node.southPinCastShadow;
    node.southBox.castShadow = node.southBoxCastShadow;
    node.southTag.castShadow = node.southTagCastShadow;
    restoreSouthNodeMaterials(node);
    disposeSprite(node.northFog);
    disposeSprite(node.southFog);
    node.wrapper.removeFromParent();
  }

  function releaseResolved() {
    if (!resolved) return;
    releaseMapVisuals();
    resolved.nodes.forEach(returnNodeToDestination);
    resolved = null;
  }

  function candidateForCurrentContext() {
    let context;
    try {
      context = getPlanetContext();
    } catch (_error) {
      return null;
    }
    if (!context?.tagDestination?.add || !Array.isArray(context.tagData)) return null;
    const selection = resolveDefinitions(context);
    if (!selection) return null;

    const candidates = selection.definitions.map((definition, pairIndex) => {
      const index = context.tagData.findIndex((item) => item?.id === definition.id);
      const data = index >= 0 ? context.tagData[index] : null;
      const pin = index >= 0 ? context.pins?.[index] : null;
      const tag = index >= 0 ? context.tags?.[index] : null;
      const box = index >= 0 ? context.boxes?.[index] : null;
      const southDefinition = selection.southDefinitions[pairIndex];
      const southIndex = context.tagData.findIndex((item) => item?.id === southDefinition?.id);
      const southData = southIndex >= 0 ? context.tagData[southIndex] : null;
      const southPin = southIndex >= 0 ? context.pins?.[southIndex] : null;
      const southTag = southIndex >= 0 ? context.tags?.[southIndex] : null;
      const southBox = southIndex >= 0 ? context.boxes?.[southIndex] : null;
      return {
        definition,
        index,
        data,
        pin,
        tag,
        box,
        southDefinition,
        southIndex,
        southData,
        southPin,
        southTag,
        southBox,
      };
    });
    const valid = candidates.every(({
      data, pin, tag, box, southData, southPin, southTag, southBox,
    }) => (
      data
      && pin?.isObject3D
      && tag?.isObject3D
      && box?.isObject3D
      && pin.material
      && tag.material
      && box.material
      && southData
      && southPin?.isObject3D
      && southTag?.isObject3D
      && southBox?.isObject3D
      && southPin.material
      && southTag.material
      && southBox.material
    ));
    if (!valid) return null;
    return {
      context,
      destination: context.tagDestination,
      mode: selection.mode,
      candidates,
    };
  }

  function matchesResolved(candidate) {
    return resolved
      && resolved.context === candidate.context
      && resolved.destination === candidate.destination
      && resolved.mode === candidate.mode
      && resolved.nodes.every((node, index) => {
        const next = candidate.candidates[index];
        return node.pin === next.pin
          && node.tag === next.tag
          && node.box === next.box
          && node.southPin === next.southPin
          && node.southTag === next.southTag
          && node.southBox === next.southBox;
      });
  }

  function makeResolvedNode(candidate, destination) {
    const {
      definition,
      index,
      data,
      pin,
      tag,
      box,
      southDefinition,
      southData,
      southPin,
      southTag,
      southBox,
    } = candidate;
    const boxGroup = box.userData?.group?.isObject3D ? box.userData.group : box;
    const tagGroup = tag.userData?.group?.isObject3D ? tag.userData.group : tag;
    destination.updateMatrixWorld(true);
    pin.getWorldPosition(scratchWorld);
    scratchLocal.copy(scratchWorld);
    destination.worldToLocal(scratchLocal);
    // Keep an independent north-star origin. scratchLocal is reused below to
    // resolve the paired south node, so retaining it by reference would move
    // the north fog to the south target before the sprite is created.
    const sourceDirection = scratchLocal.normalize().clone();
    const longitude = Math.atan2(sourceDirection.z, sourceDirection.x);
    const polarRadius = Math.cos(THREE.MathUtils.degToRad(88.25));
    const targetDirection = new THREE.Vector3(
      polarRadius * Math.cos(longitude),
      Math.sin(THREE.MathUtils.degToRad(88.25)),
      polarRadius * Math.sin(longitude),
    ).normalize();
    const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(sourceDirection, targetDirection);
    const nodeColor = colorForNode(definition, data);

    southPin.getWorldPosition(scratchWorld);
    scratchLocal.copy(scratchWorld);
    destination.worldToLocal(scratchLocal);
    const southTargetDirection = scratchLocal.normalize().clone();
    const southLongitude = Math.atan2(southTargetDirection.z, southTargetDirection.x);
    const southPolarRadius = Math.cos(THREE.MathUtils.degToRad(88.25));
    const southStartDirection = new THREE.Vector3(
      southPolarRadius * Math.cos(southLongitude),
      -Math.sin(THREE.MathUtils.degToRad(88.25)),
      southPolarRadius * Math.sin(southLongitude),
    ).normalize();
    const southTravelQuaternion = new THREE.Quaternion().setFromUnitVectors(
      southStartDirection,
      southTargetDirection,
    );

    const wrapper = new THREE.Group();
    wrapper.name = `reflection-${definition.key}-convergence`;
    destination.add(wrapper);
    const objects = [pin, boxGroup, tagGroup].map((object) => ({ object, parent: object.parent }));
    objects.forEach(({ object }) => wrapper.attach(object));

    const northFog = createFogSprite(fogTexture, nodeColor, `reflection-north-${definition.key}-fog`);
    northFog.position.copy(sourceDirection).multiplyScalar(planetRadius + 0.12);
    wrapper.add(northFog);

    const southFog = createFogSprite(fogTexture, nodeColor, `reflection-south-${definition.key}-fog`);
    southFog.position.copy(southStartDirection).multiplyScalar(planetRadius + 0.12);
    destination.add(southFog);

    return {
      definition,
      index,
      data,
      pin,
      tag,
      box,
      wrapper,
      objects,
      targetQuaternion,
      nodeColor,
      northFog,
      southFog,
      southDefinition,
      southData,
      southPin,
      southTag,
      southBox,
      southStartDirection,
      southTargetDirection,
      southTravelQuaternion,
      tagMaterial: null,
      boxMaterial: null,
      pinMaterial: null,
      southTagMaterial: null,
      southBoxMaterial: null,
      southPinMaterial: null,
      pinScale: pin.scale.clone(),
      boxScale: box.scale.clone(),
      tagScale: tag.scale.clone(),
      pinVisible: pin.visible,
      boxVisible: box.visible,
      tagVisible: tag.visible,
      pinCastShadow: pin.castShadow,
      boxCastShadow: box.castShadow,
      tagCastShadow: tag.castShadow,
      southPinScale: southPin.scale.clone(),
      southBoxScale: southBox.scale.clone(),
      southTagScale: southTag.scale.clone(),
      southPinVisible: southPin.visible,
      southBoxVisible: southBox.visible,
      southTagVisible: southTag.visible,
      southPinCastShadow: southPin.castShadow,
      southBoxCastShadow: southBox.castShadow,
      southTagCastShadow: southTag.castShadow,
    };
  }

  function resolveNodes() {
    const candidate = candidateForCurrentContext();
    if (!candidate) {
      releaseResolved();
      return false;
    }
    if (matchesResolved(candidate)) return true;
    releaseResolved();
    resolved = {
      context: candidate.context,
      destination: candidate.destination,
      mode: candidate.mode,
      nodes: candidate.candidates.map((node) => makeResolvedNode(node, candidate.destination)),
    };
    return true;
  }

  function ensureNodeMaterials(node) {
    if (!node.tagMaterial) node.tagMaterial = makeFadableMaterialRecord(node.tag);
    if (!node.boxMaterial) node.boxMaterial = makeFadableMaterialRecord(node.box);
    if (!node.pinMaterial) node.pinMaterial = makeFadableMaterialRecord(node.pin);
  }

  function ensureSouthNodeMaterials(node) {
    if (!node.southTagMaterial) node.southTagMaterial = makeFadableMaterialRecord(node.southTag);
    if (!node.southBoxMaterial) node.southBoxMaterial = makeFadableMaterialRecord(node.southBox);
    if (!node.southPinMaterial) node.southPinMaterial = makeFadableMaterialRecord(node.southPin);
  }

  function applyResolvedState() {
    if (!resolved) return;
    if (state.arrival > 0.5) ensureMapVisuals();
    const cinematic = state.labelOpacity < 0.999 || state.morph > 0.001 || state.convergence > 0.001;
    const convergence = smootherStep(state.convergence);
    const morph = smootherStep(state.morph);
    const northCurve = smootherStep(state.northGlow);
    const whiteMix = smootherStep(state.whiten, 0.5, 1);
    const southArrival = smootherStep(state.southJourney, 0.74, 0.96);
    const southCinematic = state.arrival > 0.5;

    resolved.nodes.forEach((node) => {
      node.wrapper.quaternion.slerpQuaternions(
        IDENTITY_QUATERNION,
        node.targetQuaternion,
        convergence,
      );

      const selectedMeta = mapVisuals?.nodeMeta.get(node.definition.id);
      const selectedVisibility = state.arrival > 0.5
        ? (selectedMeta?.reachable
          ? graphNodeOpacity(selectedMeta, state.mapReveal)
          : organicConnectionOpacity(state.connectionOpacity, revealSeed(node.index, 6)))
        : 1;
      if (cinematic || selectedVisibility < 0.9995) {
        ensureNodeMaterials(node);
        const organicArrival = state.arrival > 0.5 && !cinematic;
        const materialOptions = {
          organic: false,
          syncShadow: organicArrival,
        };
        setMaterialOpacity(
          node.tagMaterial,
          state.labelOpacity * selectedVisibility,
          materialOptions,
        );
        setMaterialOpacity(
          node.boxMaterial,
          (1 - morph) * selectedVisibility,
          materialOptions,
        );
        setMaterialOpacity(
          node.pinMaterial,
          (1 - morph) * selectedVisibility,
          materialOptions,
        );
        if (organicArrival) {
          const formation = smootherStep(selectedVisibility, 0.02, 0.94);
          node.tag.scale.copy(node.tagScale).multiplyScalar(
            THREE.MathUtils.lerp(0.90, 1, formation),
          );
          node.box.scale.copy(node.boxScale).multiplyScalar(
            THREE.MathUtils.lerp(0.52, 1, formation),
          );
          node.pin.scale.copy(node.pinScale).multiplyScalar(
            THREE.MathUtils.lerp(0.34, 1, formation),
          );
        } else {
          node.tag.scale.copy(node.tagScale).multiplyScalar(THREE.MathUtils.lerp(1, 0.92, morph));
          node.box.scale.copy(node.boxScale).multiplyScalar(THREE.MathUtils.lerp(1, 0.32, morph));
          node.pin.scale.copy(node.pinScale).multiplyScalar(THREE.MathUtils.lerp(1, 0.24, morph));
        }
      } else {
        node.pin.scale.copy(node.pinScale);
        node.box.scale.copy(node.boxScale);
        node.tag.scale.copy(node.tagScale);
        node.pin.castShadow = node.pinCastShadow;
        node.box.castShadow = node.boxCastShadow;
        node.tag.castShadow = node.tagCastShadow;
        restoreNodeMaterials(node);
      }

      const southNodeOpacity = southCinematic ? southArrival : state.mapOpacity;
      if (southCinematic || southNodeOpacity < 0.9995) {
        ensureSouthNodeMaterials(node);
        const southMaterialOptions = {
          organic: false,
          syncShadow: southCinematic,
        };
        setMaterialOpacity(node.southTagMaterial, southNodeOpacity, southMaterialOptions);
        setMaterialOpacity(node.southBoxMaterial, southNodeOpacity, southMaterialOptions);
        setMaterialOpacity(node.southPinMaterial, southNodeOpacity, southMaterialOptions);
        if (southCinematic) {
          node.southTag.scale.copy(node.southTagScale).multiplyScalar(
            THREE.MathUtils.lerp(0.92, 1, southArrival),
          );
          node.southBox.scale.copy(node.southBoxScale).multiplyScalar(
            THREE.MathUtils.lerp(0.32, 1, southArrival),
          );
          node.southPin.scale.copy(node.southPinScale).multiplyScalar(
            THREE.MathUtils.lerp(0.24, 1, southArrival),
          );
        } else {
          node.southTag.scale.copy(node.southTagScale);
          node.southBox.scale.copy(node.southBoxScale);
          node.southPin.scale.copy(node.southPinScale);
        }
      } else {
        node.southPin.scale.copy(node.southPinScale);
        node.southBox.scale.copy(node.southBoxScale);
        node.southTag.scale.copy(node.southTagScale);
        node.southPin.castShadow = node.southPinCastShadow;
        node.southBox.castShadow = node.southBoxCastShadow;
        node.southTag.castShadow = node.southTagCastShadow;
        restoreSouthNodeMaterials(node);
      }

      const glowColor = node.nodeColor.clone().lerp(WHITE, whiteMix);
      node.northFog.material.color.copy(glowColor);
      node.southFog.material.color.copy(node.nodeColor);

      const northOpacity = enabled
        ? morph * (0.18 + northCurve * 0.58) * fogSurfaceVisibility(node.northFog)
        : 0;
      node.northFog.visible = northOpacity > 0.002;
      node.northFog.material.opacity = northOpacity;
      node.northFog.scale.setScalar(0.35 + morph * (0.9 + northCurve * 0.8));

      scratchQuaternion.slerpQuaternions(
        IDENTITY_QUATERNION,
        node.southTravelQuaternion,
        smootherStep(state.southJourney, 0.03, 0.96),
      );
      node.southFog.position.copy(node.southStartDirection)
        .applyQuaternion(scratchQuaternion)
        .multiplyScalar(planetRadius + 0.12);
      const southEmergence = smootherStep(state.southJourney, 0.02, 0.20);
      const southDissolve = 1 - smootherStep(state.southJourney, 0.72, 1);
      const southOpacity = enabled
        ? (0.22 + state.southGlow * 1.45)
          * southEmergence
          * southDissolve
          * fogSurfaceVisibility(node.southFog)
        : 0;
      node.southFog.visible = southOpacity > 0.002;
      node.southFog.material.opacity = southOpacity;
      node.southFog.scale.setScalar(
        THREE.MathUtils.lerp(0.56, 1.72, southEmergence)
          * THREE.MathUtils.lerp(1, 0.52, southArrival),
      );
    });
    applyMapVisualState();
  }

  function prepare() {
    if (!enabled) return false;
    const ready = resolveNodes();
    if (ready) applyResolvedState();
    return ready;
  }

  function measureNorthStarVisibility(camera) {
    if (!camera?.isCamera || !prepare() || !resolved?.nodes?.length) {
      return { score: 1, individual: [1, 1, 1], available: false };
    }

    camera.updateMatrixWorld(true);
    resolved.destination.updateMatrixWorld(true);
    resolved.destination.getWorldPosition(scratchCenter);
    const individual = resolved.nodes.map((node) => {
      node.pin.getWorldPosition(scratchWorld);
      scratchSurfaceNormal.copy(scratchWorld).sub(scratchCenter).normalize();
      scratchViewDirection.copy(camera.position).sub(scratchWorld).normalize();
      const facing = smootherStep(scratchSurfaceNormal.dot(scratchViewDirection), -0.08, 0.20);

      scratchProjected.copy(scratchWorld).project(camera);
      const horizontal = 1 - smootherStep(Math.abs(scratchProjected.x), 0.72, 1.04);
      const vertical = 1 - smootherStep(Math.abs(scratchProjected.y), 0.70, 1.04);
      const depth = scratchProjected.z >= -1 && scratchProjected.z <= 1 ? 1 : 0;
      const objectVisible = node.pinVisible || node.boxVisible || node.tagVisible ? 1 : 0;
      return clamp01(facing * horizontal * vertical * depth * objectVisible);
    });
    const weakest = Math.min(...individual);
    const geometricMean = Math.cbrt(individual.reduce((product, value) => product * value, 1));
    return {
      score: clamp01(weakest * 0.72 + geometricMean * 0.28),
      individual,
      available: true,
    };
  }

  function setEnabled(nextEnabled) {
    enabled = Boolean(nextEnabled);
    if (!enabled) {
      releaseMapVisuals();
      releaseResolved();
    }
    setStaticVisuals();
    if (enabled) return prepare();
    return false;
  }

  function setState(nextState = DEFAULT_STATE) {
    state = {
      northGlow: clamp01(nextState.northGlow ?? 0),
      southGlow: clamp01(nextState.southGlow ?? 0),
      labelOpacity: clamp01(nextState.labelOpacity ?? 1),
      morph: clamp01(nextState.morph ?? 0),
      convergence: clamp01(nextState.convergence ?? 0),
      capNorth: 1,
      capSouth: clamp01(nextState.capSouth ?? 0),
      ambient: clamp01(nextState.ambient ?? 0),
      whiten: clamp01(nextState.whiten ?? 0),
      mapOpacity: clamp01(nextState.mapOpacity ?? 1),
      mapReveal: clamp01(nextState.mapReveal ?? 1),
      connectionOpacity: clamp01(nextState.connectionOpacity ?? 1),
      southJourney: clamp01(nextState.southJourney ?? 1),
      arrival: clamp01(nextState.arrival ?? 0),
    };
    setStaticVisuals();
    if (enabled) prepare();
  }

  function update(delta = 0) {
    ensurePlanetHooks();
    capUniforms.northProtect.value = 1;
    updateSouthCap(delta);
    if (enabled) prepare();
  }

  function reset() {
    state = { ...DEFAULT_STATE };
    southCapAge = 0;
    releaseMapVisuals();
    releaseResolved();
    setStaticVisuals();
  }

  function getState() {
    return {
      ...state,
      enabled,
      prepared: Boolean(resolved),
      qualitySet: resolved?.mode || null,
      northProtected: true,
    };
  }

  setStaticVisuals();

  return {
    setEnabled,
    prepare,
    setState,
    update,
    reset,
    getState,
    measureNorthStarVisibility,
  };
}
