import * as THREE from 'three';

import { palette } from '../data/palette.js';

export const PROCEDURAL_PLANET_RADIUS = 5;

const DEFAULT_CONFIG = {
  seed: 'planet-current-mindmap-v1',
  useCurrentMindmapPositions: true,
  seaLevel: 0.18,
  terrainScale: 1,
  weatherSeed: 'planet-weather-v1',
  textureWidth: 512,
  textureHeight: 256,
  anchorCount: 104,
  routeCount: 120,
  landmarkCount: 180,
  coastlineLongitudeSteps: 144,
  coastlineLatitudeSteps: 72,
  elevationContourLongitudeSteps: 120,
  elevationContourLatitudeSteps: 60,
  elevationContourLevels: [0.035, 0.08, 0.14, 0.215, 0.3],
  routeOverlayCount: 80,
  surfacePatchSize: 1.35,
  surfacePatchSegments: 56,
  surfacePropCount: 180,
  surfaceSettlementLimit: 32,
  surfaceSettlementInstanceLimit: 96,
  surfaceRouteTraceRouteCount: 18,
  surfaceRouteTraceSampleStepDegrees: 2.8,
  surfaceRouteTraceSegmentLimit: 520,
  surfaceRouteMarkerLimit: 96,
  surfaceTerrainStrokeLimit: 300,
};

const BIOME = {
  ocean: 0,
  neutral: 1,
  gut: 2,
  heart: 3,
  head: 4,
  practice: 5,
  highland: 6,
  snow: 7,
};

const BIOME_COLORS = {
  [BIOME.ocean]: [0.05, 0.18, 0.27],
  [BIOME.neutral]: [0.43, 0.47, 0.33],
  [BIOME.gut]: [0.53, 0.31, 0.38],
  [BIOME.heart]: [0.27, 0.48, 0.43],
  [BIOME.head]: [0.70, 0.58, 0.30],
  [BIOME.practice]: [0.46, 0.53, 0.38],
  [BIOME.highland]: [0.44, 0.40, 0.35],
  [BIOME.snow]: [0.78, 0.83, 0.80],
};

const landmarkVertexShader = `
attribute vec3 landmarkColor;
attribute float landmarkSize;
attribute float landmarkImportance;
varying vec3 vColor;
varying float vImportance;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vColor = landmarkColor;
  vImportance = landmarkImportance;
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = landmarkSize / max(1.0, -mvPosition.z);
}
`;

const landmarkFragmentShader = `
varying vec3 vColor;
varying float vImportance;

void main() {
  vec2 p = gl_PointCoord - vec2(0.5);
  float d = length(p);
  float core = smoothstep(0.34, 0.02, d);
  float halo = smoothstep(0.5, 0.06, d) * 0.48;
  float alpha = (core + halo) * (0.42 + vImportance * 0.58);
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(vColor, alpha);
}
`;

const surfaceSkyVertexShader = `
varying vec3 vSurfaceSkyWorldDirection;

void main() {
  vSurfaceSkyWorldDirection = (modelMatrix * vec4(position, 0.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const surfaceSkyFragmentShader = `
uniform float surfaceSkyOpacity;
uniform vec3 surfaceSkyUp;
varying vec3 vSurfaceSkyWorldDirection;

void main() {
  vec3 direction = normalize(vSurfaceSkyWorldDirection);
  float up = dot(direction, normalize(surfaceSkyUp));
  float horizon = smoothstep(-0.12, 0.28, up);
  float zenith = smoothstep(0.24, 1.0, up);
  float rim = smoothstep(-0.1, 0.06, up) * (1.0 - smoothstep(0.1, 0.42, up));

  vec3 lowSky = vec3(0.55, 0.61, 0.56);
  vec3 midSky = vec3(0.20, 0.34, 0.50);
  vec3 highSky = vec3(0.025, 0.035, 0.062);
  vec3 skyColor = mix(lowSky, midSky, horizon);
  skyColor = mix(skyColor, highSky, zenith * 0.82);
  skyColor += vec3(0.46, 0.34, 0.18) * rim * 0.44;

  float horizonAlpha = smoothstep(-0.1, 0.02, up) * (1.0 - smoothstep(0.32, 0.76, up));
  float upperAlpha = smoothstep(0.0, 0.52, up) * (1.0 - smoothstep(0.82, 1.0, up) * 0.34);
  float alpha = max(horizonAlpha * 0.9, upperAlpha * 0.3);
  alpha *= surfaceSkyOpacity;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(skyColor, alpha);
}
`;

const surfaceVeilVertexShader = `
varying vec2 vSurfaceVeilUv;

void main() {
  vSurfaceVeilUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const surfaceVeilFragmentShader = `
uniform float surfaceVeilOpacity;
varying vec2 vSurfaceVeilUv;

void main() {
  float sideFade = smoothstep(0.0, 0.12, vSurfaceVeilUv.x) * (1.0 - smoothstep(0.88, 1.0, vSurfaceVeilUv.x));
  float broadHaze = smoothstep(0.18, 0.44, vSurfaceVeilUv.y) * (1.0 - smoothstep(0.82, 1.0, vSurfaceVeilUv.y));
  float horizonCore = 1.0 - smoothstep(0.0, 0.24, abs(vSurfaceVeilUv.y - 0.48));
  vec3 hazeColor = mix(vec3(0.42, 0.46, 0.39), vec3(0.64, 0.67, 0.58), horizonCore * 0.68);
  float alpha = (broadHaze * 0.12 + horizonCore * 0.2) * sideFade * surfaceVeilOpacity;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(hazeColor, alpha);
}
`;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clamp01(value) {
  return clamp(value, 0, 1);
}

function wrapLng(lng) {
  return ((((lng + 180) % 360) + 360) % 360) - 180;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function smootherStep(t) {
  const x = clamp01(t);
  return x * x * x * (x * (x * 6 - 15) + 10);
}

function smoothstep(edge0, edge1, value) {
  if (edge0 === edge1) return value < edge0 ? 0 : 1;
  return smootherStep((value - edge0) / (edge1 - edge0));
}

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededRandom(value) {
  return mulberry32(hashString(value));
}

function hash3(ix, iy, iz, seed) {
  let h = seed >>> 0;
  h ^= Math.imul(ix, 374761393);
  h ^= Math.imul(iy, 668265263);
  h ^= Math.imul(iz, 2246822519);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

function valueNoise3(x, y, z, seed) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fy = y - iy;
  const fz = z - iz;
  const ux = smootherStep(fx);
  const uy = smootherStep(fy);
  const uz = smootherStep(fz);

  const n000 = hash3(ix, iy, iz, seed);
  const n100 = hash3(ix + 1, iy, iz, seed);
  const n010 = hash3(ix, iy + 1, iz, seed);
  const n110 = hash3(ix + 1, iy + 1, iz, seed);
  const n001 = hash3(ix, iy, iz + 1, seed);
  const n101 = hash3(ix + 1, iy, iz + 1, seed);
  const n011 = hash3(ix, iy + 1, iz + 1, seed);
  const n111 = hash3(ix + 1, iy + 1, iz + 1, seed);

  const x00 = lerp(n000, n100, ux);
  const x10 = lerp(n010, n110, ux);
  const x01 = lerp(n001, n101, ux);
  const x11 = lerp(n011, n111, ux);
  const y0 = lerp(x00, x10, uy);
  const y1 = lerp(x01, x11, uy);
  return lerp(y0, y1, uz);
}

function fbm3(unit, scale, seed, octaves = 4) {
  let amplitude = 0.5;
  let frequency = scale;
  let total = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    total += amplitude * valueNoise3(
      unit.x * frequency + 137.5,
      unit.y * frequency - 41.25,
      unit.z * frequency + 19.75,
      seed + i * 1013,
    );
    norm += amplitude;
    amplitude *= 0.5;
    frequency *= 2.03;
  }
  return norm > 0 ? total / norm : 0;
}

function unitFromLatLng(lat, lng) {
  const latRad = THREE.MathUtils.degToRad(Number(lat));
  const lngRad = THREE.MathUtils.degToRad(Number(lng));
  return new THREE.Vector3(
    Math.cos(latRad) * Math.cos(lngRad),
    Math.sin(latRad),
    Math.cos(latRad) * Math.sin(lngRad),
  ).normalize();
}

function latLngFromUnit(unit) {
  const n = unit.clone().normalize();
  const lat = THREE.MathUtils.radToDeg(Math.asin(clamp(n.y, -1, 1)));
  const lng = THREE.MathUtils.radToDeg(Math.atan2(n.z, n.x));
  return { lat, lng };
}

function tangentBasisFromUnit(normal) {
  const reference = Math.abs(normal.y) > 0.92
    ? new THREE.Vector3(1, 0, 0)
    : new THREE.Vector3(0, 1, 0);
  const east = new THREE.Vector3().crossVectors(reference, normal).normalize();
  const north = new THREE.Vector3().crossVectors(normal, east).normalize();
  return { east, north };
}

function getSurfaceFrame(normal, forwardHint) {
  const tangent = forwardHint.clone().sub(normal.clone().multiplyScalar(forwardHint.dot(normal)));
  const forward = tangent.lengthSq() > 1e-8
    ? tangent.normalize()
    : tangentBasisFromUnit(normal).north;
  const right = new THREE.Vector3().crossVectors(normal, forward).normalize();
  return new THREE.Matrix4().makeBasis(right, normal, forward);
}

function slerpUnitVectors(startInput, endInput, alpha) {
  const start = startInput.clone().normalize();
  const end = endInput.clone().normalize();
  const dot = clamp(start.dot(end), -1, 1);

  if (dot > 0.9995) {
    return start.lerp(end, alpha).normalize();
  }

  if (dot < -0.9995) {
    const { east } = tangentBasisFromUnit(start);
    return start
      .multiplyScalar(Math.cos(Math.PI * alpha))
      .add(east.multiplyScalar(Math.sin(Math.PI * alpha)))
      .normalize();
  }

  const theta = Math.acos(dot);
  const sinTheta = Math.sin(theta);
  const startWeight = Math.sin((1 - alpha) * theta) / sinTheta;
  const endWeight = Math.sin(alpha * theta) / sinTheta;
  return start.multiplyScalar(startWeight).add(end.multiplyScalar(endWeight)).normalize();
}

function colorToVec(hex) {
  const color = new THREE.Color(hex);
  return [color.r, color.g, color.b];
}

function getConnectionTargetId(connectionEntry) {
  if (typeof connectionEntry === 'string') return connectionEntry;
  if (!connectionEntry || typeof connectionEntry !== 'object') return undefined;
  return connectionEntry.id || connectionEntry.target || connectionEntry.to;
}

function classifyPath(colorIndex) {
  if (colorIndex >= 10 && colorIndex <= 19) return 'gut';
  if (colorIndex >= 20 && colorIndex <= 29) return 'heart';
  if (colorIndex >= 30 && colorIndex <= 39) return 'head';
  return 'neutral';
}

function pathToBiome(path) {
  if (path === 'gut') return BIOME.gut;
  if (path === 'heart') return BIOME.heart;
  if (path === 'head') return BIOME.head;
  return BIOME.neutral;
}

function readGraph(tagData, connectionSets) {
  const nodeById = new Map(tagData.map((node) => [node.id, node]));
  const adjacency = new Map(tagData.map((node) => [node.id, new Set()]));
  const edgeRows = [];

  connectionSets.forEach(({ rows, kind }) => {
    if (!Array.isArray(rows)) return;
    rows.forEach((row) => {
      if (!Array.isArray(row) || row.length < 2) return;
      const sourceId = row[0];
      if (!nodeById.has(sourceId)) return;
      row.slice(1).forEach((entry) => {
        const targetId = getConnectionTargetId(entry);
        if (!targetId || !nodeById.has(targetId)) return;
        adjacency.get(sourceId)?.add(targetId);
        adjacency.get(targetId)?.add(sourceId);
        edgeRows.push({ sourceId, targetId, kind });
      });
    });
  });

  const components = new Map();
  const componentSizes = [];
  let componentIndex = 0;
  tagData.forEach((node) => {
    if (components.has(node.id)) return;
    const queue = [node.id];
    components.set(node.id, componentIndex);
    let size = 0;
    while (queue.length) {
      const id = queue.shift();
      size += 1;
      adjacency.get(id)?.forEach((next) => {
        if (components.has(next)) return;
        components.set(next, componentIndex);
        queue.push(next);
      });
    }
    componentSizes[componentIndex] = size;
    componentIndex += 1;
  });

  return { nodeById, adjacency, edgeRows, components, componentSizes };
}

export function buildSemanticWorldMap({
  tagData = [],
  connectionData = [],
  arrowConnectionData = [],
  dashedConnectionData = [],
  tunnelConnectionData = [],
  config = {},
} = {}) {
  const resolvedConfig = { ...DEFAULT_CONFIG, ...config };
  const graph = readGraph(tagData, [
    { rows: connectionData, kind: 'normal' },
    { rows: arrowConnectionData, kind: 'arrow' },
    { rows: dashedConnectionData, kind: 'dashed' },
    { rows: tunnelConnectionData, kind: 'tunnel' },
  ]);

  let maxDegree = 1;
  graph.adjacency.forEach((targets) => {
    maxDegree = Math.max(maxDegree, targets.size);
  });

  const nodeMetrics = new Map();
  const candidates = tagData.map((node) => {
    const size = Number(node.size) || 1;
    const degree = graph.adjacency.get(node.id)?.size || 0;
    const centrality = degree / maxDegree;
    const slideBoost = node.slides ? 0.16 : 0;
    const componentSize = graph.componentSizes[graph.components.get(node.id)] || 1;
    const componentShare = componentSize / Math.max(1, tagData.length);
    const score = clamp01(size / 110 * 0.54 + centrality * 0.34 + slideBoost + componentShare * 0.08);
    const colorIndex = Number(node.color) || 0;
    const path = classifyPath(colorIndex);
    const metrics = {
      degree,
      centrality,
      componentId: graph.components.get(node.id) || 0,
      componentShare,
      semanticScore: score,
      path,
    };
    nodeMetrics.set(node.id, metrics);
    return {
      id: node.id,
      text: node.text,
      lat: Number(node.lat),
      lng: Number(node.lng),
      unit: unitFromLatLng(node.lat, node.lng),
      colorIndex,
      color: colorToVec(palette[colorIndex] ?? palette[0]),
      path,
      size,
      centrality,
      componentShare,
      score,
      radiusRad: THREE.MathUtils.degToRad(7 + score * 18 + clamp(size / 110, 0, 1) * 8),
      hasSlides: Boolean(node.slides),
    };
  });

  const anchors = candidates
    .filter((node) => Number.isFinite(node.lat) && Number.isFinite(node.lng))
    .sort((a, b) => b.score - a.score)
    .slice(0, resolvedConfig.anchorCount);

  const routes = graph.edgeRows
    .map((edge) => {
      const source = graph.nodeById.get(edge.sourceId);
      const target = graph.nodeById.get(edge.targetId);
      if (!source || !target) return null;
      const startUnit = unitFromLatLng(source.lat, source.lng);
      const endUnit = unitFromLatLng(target.lat, target.lng);
      const normal = new THREE.Vector3().crossVectors(startUnit, endUnit);
      if (normal.lengthSq() < 1e-8) return null;
      normal.normalize();
      const sourceMetrics = nodeMetrics.get(edge.sourceId);
      const targetMetrics = nodeMetrics.get(edge.targetId);
      const score = clamp01(
        ((sourceMetrics?.semanticScore || 0) + (targetMetrics?.semanticScore || 0)) * 0.5 +
        ((sourceMetrics?.centrality || 0) + (targetMetrics?.centrality || 0)) * 0.22,
      );
      return {
        ...edge,
        startUnit,
        endUnit,
        normal,
        totalAngle: Math.acos(clamp(startUnit.dot(endUnit), -1, 1)),
        score,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, resolvedConfig.routeCount);

	  return {
	    tagData,
	    nodeById: graph.nodeById,
	    nodeMetrics,
	    nodes: candidates.filter((node) => Number.isFinite(node.lat) && Number.isFinite(node.lng)),
	    anchors,
	    routes,
	    componentCount: graph.componentSizes.length,
    componentSizes: graph.componentSizes,
  };
}

function routeField(unit, routes) {
  let influence = 0;
  let light = 0;
  for (const route of routes) {
    const width = THREE.MathUtils.degToRad(1.8 + route.score * 2.2);
    const sideDistance = Math.abs(Math.asin(clamp(unit.dot(route.normal), -1, 1)));
    if (sideDistance > width * 2.75) continue;
    const fromStart = Math.acos(clamp(route.startUnit.dot(unit), -1, 1));
    const fromEnd = Math.acos(clamp(route.endUnit.dot(unit), -1, 1));
    if (fromStart + fromEnd > route.totalAngle + width * 3.5) continue;
    const routeInfluence = smoothstep(width * 2.1, 0, sideDistance) * route.score;
    influence = Math.max(influence, routeInfluence);
    light += routeInfluence * (route.kind === 'arrow' ? 0.42 : 0.28);
  }
  return { influence: clamp01(influence), light: clamp01(light) };
}

function semanticField(unit, anchors) {
  let semanticLand = 0;
  let centrality = 0;
  let settlement = 0;
  let strongest = 0;
  let dominantBiome = BIOME.neutral;
  let colorR = 0;
  let colorG = 0;
  let colorB = 0;
  let colorWeight = 0;

  for (const anchor of anchors) {
    const dot = clamp(unit.dot(anchor.unit), -1, 1);
    const edge = Math.cos(anchor.radiusRad);
    const local = smoothstep(edge, 1, dot);
    if (local <= 0) continue;
    const influence = local * (0.25 + anchor.score * 0.95);
    semanticLand += influence;
    centrality += influence * anchor.centrality;
    settlement += influence * (anchor.hasSlides ? 0.35 : 0.15);
    colorR += anchor.color[0] * influence;
    colorG += anchor.color[1] * influence;
    colorB += anchor.color[2] * influence;
    colorWeight += influence;
    if (influence > strongest) {
      strongest = influence;
      dominantBiome = pathToBiome(anchor.path);
    }
  }

  return {
    semanticLand: clamp01(semanticLand),
    centrality: clamp01(centrality),
    settlement: clamp01(settlement + centrality * 0.4),
    strongest: clamp01(strongest),
    dominantBiome,
    color: colorWeight > 0
      ? [colorR / colorWeight, colorG / colorWeight, colorB / colorWeight]
      : BIOME_COLORS[BIOME.neutral],
  };
}

function mixColor(a, b, t) {
  return [
    lerp(a[0], b[0], t),
    lerp(a[1], b[1], t),
    lerp(a[2], b[2], t),
  ];
}

function multiplyColor(color, scalar) {
  return color.map((channel) => clamp01(channel * scalar));
}

function addVertexColorEmission(material, strength, cacheKey) {
  material.userData.vertexColorEmissionStrength = strength;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.proceduralVertexColorEmissionStrength = { value: strength };
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <emissivemap_pars_fragment>',
        `#include <emissivemap_pars_fragment>
uniform float proceduralVertexColorEmissionStrength;`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
#ifdef USE_COLOR
  totalEmissiveRadiance += vColor.rgb * proceduralVertexColorEmissionStrength;
#endif`,
      );
    material.userData.vertexColorEmissionShader = shader;
  };
  material.customProgramCacheKey = () => `procedural-vertex-color-emission-${cacheKey}-v1`;
  return material;
}

export class ProceduralPlanet {
  constructor(mindmap, config = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.seed = hashString(this.config.seed);
    this.weatherSeed = hashString(this.config.weatherSeed);
    this.ready = Promise.resolve(this);
    this.textures = null;
    this.textureStats = null;
    this.terrainMaterial = null;
    this.semanticWorldMap = null;
    this.semanticOverlayStats = null;
    this.semanticLandmarkStats = null;
    this.rebuild(mindmap);
  }

  rebuild(mindmap) {
    this.semanticWorldMap = buildSemanticWorldMap({
      ...mindmap,
      config: this.config,
    });
    this.textures = this.generateTextures(this.config.textureWidth, this.config.textureHeight);
    this.semanticOverlayStats = null;
    this.semanticLandmarkStats = null;
    return this;
  }

  sample(lat, lng) {
    return this.sampleLatLng(lat, lng);
  }

  sampleLatLng(lat, lng) {
    return this.sampleUnit(unitFromLatLng(lat, lng));
  }

  sampleSurfaceLatLng(lat, lng) {
    return this.sampleSurfaceUnit(unitFromLatLng(lat, lng));
  }

  sampleUnit(unitInput) {
    const unit = unitInput.clone ? unitInput.clone().normalize() : new THREE.Vector3(unitInput.x, unitInput.y, unitInput.z).normalize();
    const { lat } = latLngFromUnit(unit);
    const semantic = semanticField(unit, this.semanticWorldMap.anchors);
    const routes = routeField(unit, this.semanticWorldMap.routes);

    const low = fbm3(unit, 1.35, this.seed, 5);
    const medium = fbm3(unit, 4.2, this.seed + 313, 4);
    const detail = fbm3(unit, 14.5, this.seed + 977, 3);
    const moisture = fbm3(unit, 3.3, this.seed + 1777, 4);
    const ridge = Math.abs(fbm3(unit, 8.5, this.seed + 771, 4) * 2 - 1);
    const latitude = Math.abs(lat) / 90;

    const headBoost = semantic.dominantBiome === BIOME.head ? 0.085 : 0;
    const gutWetness = semantic.dominantBiome === BIOME.gut ? 0.055 : 0;
    const routeValley = routes.influence * 0.045;
    const mountain = Math.pow(ridge, 2.15) * (0.055 + headBoost) * semantic.semanticLand;
    const continent = -0.09 + low * 0.18 + semantic.semanticLand * 0.45 + medium * 0.07;
    const height = clamp(
      (continent + mountain + (detail - 0.5) * 0.032 - routeValley - gutWetness) * this.config.terrainScale,
      -0.28,
      0.52,
    );

    const seaLevel = this.config.seaLevel;
    const waterDepth = Math.max(0, seaLevel - height);
    const waterScore = clamp01(waterDepth * 5.4);
    const slope = clamp01(mountain * 3.2 + Math.abs(medium - detail) * 0.9);

    let biomeId = semantic.dominantBiome;
    if (waterDepth > 0.015) {
      biomeId = BIOME.ocean;
    } else if (latitude > 0.77 && height > seaLevel + 0.02) {
      biomeId = BIOME.snow;
    } else if (height > seaLevel + 0.22 || slope > 0.62) {
      biomeId = BIOME.highland;
    } else if (semantic.dominantBiome === BIOME.heart && moisture > 0.48) {
      biomeId = BIOME.practice;
    }

    const biomeColor = BIOME_COLORS[biomeId] || BIOME_COLORS[BIOME.neutral];
    const semanticColor = semantic.color;
    const routeTint = routes.influence > 0 ? [0.72, 0.62, 0.42] : biomeColor;
    const semanticMix = waterDepth > 0
      ? 0.08
      : clamp01(0.28 + semantic.strongest * 0.16 + semantic.centrality * 0.06);
    let albedo = mixColor(biomeColor, semanticColor, semanticMix);
    albedo = mixColor(albedo, routeTint, routes.influence * 0.22);
    albedo = multiplyColor(albedo, lerp(0.88, 1.2, detail));
    if (waterDepth > 0) {
      albedo = mixColor([0.035, 0.13, 0.22], [0.09, 0.34, 0.40], clamp01(1 - waterDepth * 5));
    }

    const coast = waterDepth > 0
      ? smoothstep(0.08, 0.005, waterDepth)
      : smoothstep(0.012, 0.0, height - seaLevel);
    const roughness = clamp01(waterDepth > 0 ? 0.28 : 0.62 + slope * 0.27 - moisture * 0.12);
    const emission = clamp01(
      semantic.settlement * 0.26 +
      routes.light * 0.28 +
      semantic.strongest * 0.18 -
      waterDepth * 0.9,
    );
    const settlementSuitability = clamp01(
      semantic.settlement * 0.9 +
      routes.influence * 0.26 +
      (1 - waterScore) * 0.24 -
      slope * 0.34,
    );

    return {
      height,
      waterDepth,
      waterScore,
      biomeId,
      albedo,
      color: new THREE.Color(albedo[0], albedo[1], albedo[2]),
      roughness,
      slope,
      slopeScore: slope,
      emission,
      settlementSuitability,
      routeInfluence: routes.influence,
      centrality: semantic.centrality,
      coast,
    };
  }

  getSurfaceElevation(sample) {
    const elevation = (sample.height - this.config.seaLevel) * 0.13;
    const routeShelf = sample.routeInfluence * 0.006;
    const coastShelf = sample.coast * 0.004;
    return clamp(elevation + routeShelf + coastShelf, -0.034, 0.078);
  }

  sampleSurfaceUnit(unitInput) {
    const unit = unitInput.clone ? unitInput.clone().normalize() : new THREE.Vector3(unitInput.x, unitInput.y, unitInput.z).normalize();
    const sample = this.sampleUnit(unit);
    const elevation = this.getSurfaceElevation(sample);
    return {
      ...sample,
      unit,
      elevation,
      radius: PROCEDURAL_PLANET_RADIUS + elevation,
    };
  }

  getNodeMetrics(nodeId) {
    return this.semanticWorldMap.nodeMetrics.get(nodeId);
  }

  getTextureStats() {
    return this.textureStats;
  }

  generateTextures(width, height) {
    const count = width * height;
    const samples = new Array(count);
    const heights = new Float32Array(count);

    const albedo = new Uint8Array(count * 4);
    const normal = new Uint8Array(count * 4);
    const roughness = new Uint8Array(count * 4);
    const heightData = new Uint8Array(count * 4);
    const water = new Uint8Array(count * 4);
    const waterAlpha = new Uint8Array(count * 4);
    const waterNormal = new Uint8Array(count * 4);
    const waterFoam = new Uint8Array(count * 4);
    const waterFoamAlpha = new Uint8Array(count * 4);
    const emission = new Uint8Array(count * 4);
    const weatherShadow = new Uint8Array(count * 4);
    const cloudA = new Uint8Array(count * 4);
    const cloudAlphaA = new Uint8Array(count * 4);
    const cloudB = new Uint8Array(count * 4);
    const cloudAlphaB = new Uint8Array(count * 4);
    const debug = new Uint8ClampedArray(count * 4);
    const stats = {
      width,
      height,
      pixels: count,
      landPixels: 0,
      waterPixels: 0,
      coastalPixels: 0,
      waterCoverage: 0,
      coastCoverage: 0,
      foamCoverage: 0,
      weatherShadowCoverage: 0,
      cloudLowCoverage: 0,
      cloudHighCoverage: 0,
      emissionCoverage: 0,
      settlementSuitabilityCoverage: 0,
      maxFoam: 0,
      maxWeatherShadow: 0,
      maxEmission: 0,
    };

    for (let y = 0; y < height; y++) {
      const v = y / Math.max(1, height - 1);
      const lat = 90 - v * 180;
      for (let x = 0; x < width; x++) {
        const u = x / width;
        const lng = u * 360 - 180;
        const idx = y * width + x;
        const sample = this.sampleLatLng(lat, lng);
        samples[idx] = sample;
        heights[idx] = sample.height;
      }
    }

    const indexAt = (x, y) => {
      const wrappedX = (x + width) % width;
      const clampedY = clamp(y, 0, height - 1);
      return clampedY * width + wrappedX;
    };

    for (let y = 0; y < height; y++) {
      const v = y / Math.max(1, height - 1);
      const lat = 90 - v * 180;
      for (let x = 0; x < width; x++) {
        const u = x / width;
        const lng = u * 360 - 180;
        const idx = y * width + x;
        const offset = idx * 4;
        const sample = samples[idx];
        const unit = unitFromLatLng(lat, lng);

        const hL = heights[indexAt(x - 1, y)];
        const hR = heights[indexAt(x + 1, y)];
        const hD = heights[indexAt(x, y + 1)];
        const hU = heights[indexAt(x, y - 1)];
        const nx = (hL - hR) * 3.8;
        const ny = (hD - hU) * 3.8;
        const nz = 1;
        const normalLength = Math.hypot(nx, ny, nz) || 1;

        const heightNorm = clamp01((sample.height + 0.28) / 0.8);
        const waterAmount = clamp01(sample.waterScore + sample.coast * 0.35);
        const cloudNoiseA = fbm3(unit, 4.0, this.weatherSeed, 5);
        const cloudNoiseB = fbm3(unit, 8.5, this.weatherSeed + 909, 4);
        const cloudBand = Math.pow(1 - Math.abs(lat) / 95, 0.35);
        const cloudCoverageA = smoothstep(0.58, 0.84, cloudNoiseA * 0.88 + cloudNoiseB * 0.26 + cloudBand * 0.11);
        const cloudCoverageB = smoothstep(0.62, 0.82, fbm3(unit, 11.0, this.weatherSeed + 1901, 4) + sample.routeInfluence * 0.1);
        const weatherShade = clamp01(cloudCoverageA * 0.13 + cloudCoverageB * 0.09);
        if (sample.waterDepth > 0) stats.waterPixels += 1;
        else stats.landPixels += 1;
        if (sample.coast > 0.08) stats.coastalPixels += 1;
        stats.waterCoverage += waterAmount;
        stats.coastCoverage += sample.coast;
        stats.weatherShadowCoverage += weatherShade;
        stats.cloudLowCoverage += cloudCoverageA;
        stats.cloudHighCoverage += cloudCoverageB;
        stats.emissionCoverage += sample.emission;
        stats.settlementSuitabilityCoverage += sample.settlementSuitability;
        stats.maxWeatherShadow = Math.max(stats.maxWeatherShadow, weatherShade);
        stats.maxEmission = Math.max(stats.maxEmission, sample.emission);
        const debugColor = sample.waterDepth > 0
          ? [0.05, 0.28, 0.44]
          : mixColor(BIOME_COLORS[sample.biomeId], [1, 0.85, 0.34], sample.settlementSuitability * 0.45);

        const shadowedAlbedo = sample.waterDepth > 0
          ? sample.albedo
          : multiplyColor(
            mixColor(sample.albedo, [0.42, 0.52, 0.58], weatherShade * 0.12),
            1 - weatherShade * 0.24,
          );

        albedo[offset] = Math.round(shadowedAlbedo[0] * 255);
        albedo[offset + 1] = Math.round(shadowedAlbedo[1] * 255);
        albedo[offset + 2] = Math.round(shadowedAlbedo[2] * 255);
        albedo[offset + 3] = 255;

        normal[offset] = Math.round((nx / normalLength * 0.5 + 0.5) * 255);
        normal[offset + 1] = Math.round((ny / normalLength * 0.5 + 0.5) * 255);
        normal[offset + 2] = Math.round((nz / normalLength * 0.5 + 0.5) * 255);
        normal[offset + 3] = 255;

        const rough = Math.round(sample.roughness * 255);
        roughness[offset] = rough;
        roughness[offset + 1] = rough;
        roughness[offset + 2] = rough;
        roughness[offset + 3] = 255;

        const hByte = Math.round(heightNorm * 255);
        heightData[offset] = hByte;
        heightData[offset + 1] = hByte;
        heightData[offset + 2] = hByte;
        heightData[offset + 3] = 255;

        const waterColor = mixColor([0.04, 0.19, 0.30], [0.22, 0.58, 0.62], sample.coast);
        water[offset] = Math.round(waterColor[0] * 255);
        water[offset + 1] = Math.round(waterColor[1] * 255);
        water[offset + 2] = Math.round(waterColor[2] * 255);
        water[offset + 3] = 255;

        const alphaByte = Math.round(waterAmount * 255);
        waterAlpha[offset] = alphaByte;
        waterAlpha[offset + 1] = alphaByte;
        waterAlpha[offset + 2] = alphaByte;
        waterAlpha[offset + 3] = 255;

        const wave = fbm3(unitFromLatLng(lat, lng), 36, this.seed + this.weatherSeed + 41, 3);
        waterNormal[offset] = Math.round((0.48 + (wave - 0.5) * 0.18) * 255);
        waterNormal[offset + 1] = Math.round((0.52 + (fbm3(unitFromLatLng(lat, lng), 29, this.seed + 901, 3) - 0.5) * 0.18) * 255);
        waterNormal[offset + 2] = 255;
        waterNormal[offset + 3] = 255;

        const foamNoise = fbm3(unit, 54, this.seed + this.weatherSeed + 1447, 3);
        const foamBreakup = smoothstep(0.34, 0.86, foamNoise + sample.routeInfluence * 0.1);
        const coastFoam = smoothstep(0.18, 0.92, sample.coast) * smoothstep(0.08, 0.46, waterAmount);
        const foamAmount = clamp01(coastFoam * (0.25 + foamBreakup * 0.92));
        stats.foamCoverage += foamAmount;
        stats.maxFoam = Math.max(stats.maxFoam, foamAmount);
        const foamTint = mixColor([0.58, 0.86, 0.88], [1.0, 0.96, 0.82], sample.settlementSuitability * 0.24);
        waterFoam[offset] = Math.round(foamTint[0] * 255);
        waterFoam[offset + 1] = Math.round(foamTint[1] * 255);
        waterFoam[offset + 2] = Math.round(foamTint[2] * 255);
        waterFoam[offset + 3] = 255;
        const foamAlphaByte = Math.round(foamAmount * 205);
        waterFoamAlpha[offset] = foamAlphaByte;
        waterFoamAlpha[offset + 1] = foamAlphaByte;
        waterFoamAlpha[offset + 2] = foamAlphaByte;
        waterFoamAlpha[offset + 3] = 255;

        const e = Math.round(sample.emission * 255);
        emission[offset] = Math.round(e * 1.0);
        emission[offset + 1] = Math.round(e * 0.78);
        emission[offset + 2] = Math.round(e * 0.42);
        emission[offset + 3] = 255;

        const cloudShadeA = Math.round(lerp(176, 255, cloudNoiseB) * cloudCoverageA);
        const cloudShadeB = Math.round(lerp(148, 235, cloudNoiseA) * cloudCoverageB);

        const shadowByte = Math.round(weatherShade * 255);
        weatherShadow[offset] = shadowByte;
        weatherShadow[offset + 1] = shadowByte;
        weatherShadow[offset + 2] = shadowByte;
        weatherShadow[offset + 3] = 255;

        cloudA[offset] = cloudShadeA;
        cloudA[offset + 1] = cloudShadeA;
        cloudA[offset + 2] = Math.round(cloudShadeA * 1.03);
        cloudA[offset + 3] = 255;
        const cloudAlphaByteA = Math.round(cloudCoverageA * 124);
        cloudAlphaA[offset] = cloudAlphaByteA;
        cloudAlphaA[offset + 1] = cloudAlphaByteA;
        cloudAlphaA[offset + 2] = cloudAlphaByteA;
        cloudAlphaA[offset + 3] = 255;

        cloudB[offset] = cloudShadeB;
        cloudB[offset + 1] = cloudShadeB;
        cloudB[offset + 2] = Math.round(cloudShadeB * 1.02);
        cloudB[offset + 3] = 255;
        const cloudAlphaByteB = Math.round(cloudCoverageB * 78);
        cloudAlphaB[offset] = cloudAlphaByteB;
        cloudAlphaB[offset + 1] = cloudAlphaByteB;
        cloudAlphaB[offset + 2] = cloudAlphaByteB;
        cloudAlphaB[offset + 3] = 255;

        debug[offset] = Math.round(debugColor[0] * 255);
        debug[offset + 1] = Math.round(debugColor[1] * 255);
        debug[offset + 2] = Math.round(debugColor[2] * 255);
        debug[offset + 3] = 255;
      }
    }

    const normalizeCoverage = (value) => Number((value / Math.max(1, count)).toFixed(6));
    this.textureStats = {
      ...stats,
      landRatio: normalizeCoverage(stats.landPixels),
      waterRatio: normalizeCoverage(stats.waterPixels),
      coastalRatio: normalizeCoverage(stats.coastalPixels),
      waterCoverage: normalizeCoverage(stats.waterCoverage),
      coastCoverage: normalizeCoverage(stats.coastCoverage),
      foamCoverage: normalizeCoverage(stats.foamCoverage),
      weatherShadowCoverage: normalizeCoverage(stats.weatherShadowCoverage),
      cloudLowCoverage: normalizeCoverage(stats.cloudLowCoverage),
      cloudHighCoverage: normalizeCoverage(stats.cloudHighCoverage),
      emissionCoverage: normalizeCoverage(stats.emissionCoverage),
      settlementSuitabilityCoverage: normalizeCoverage(stats.settlementSuitabilityCoverage),
      maxFoam: Number(stats.maxFoam.toFixed(6)),
      maxWeatherShadow: Number(stats.maxWeatherShadow.toFixed(6)),
      maxEmission: Number(stats.maxEmission.toFixed(6)),
    };

    return {
      width,
      height,
      albedo: makeTexture(albedo, width, height, { colorSpace: THREE.SRGBColorSpace }),
      normal: makeTexture(normal, width, height),
      roughness: makeTexture(roughness, width, height),
      heightMap: makeTexture(heightData, width, height),
      water: makeTexture(water, width, height, { colorSpace: THREE.SRGBColorSpace }),
      waterAlpha: makeTexture(waterAlpha, width, height),
      waterNormal: makeTexture(waterNormal, width, height),
      waterFoam: makeTexture(waterFoam, width, height, { colorSpace: THREE.SRGBColorSpace }),
      waterFoamAlpha: makeTexture(waterFoamAlpha, width, height),
      emission: makeTexture(emission, width, height, { colorSpace: THREE.SRGBColorSpace }),
      weatherShadow: makeTexture(weatherShadow, width, height),
      cloudA: makeTexture(cloudA, width, height, { colorSpace: THREE.SRGBColorSpace }),
      cloudAlphaA: makeTexture(cloudAlphaA, width, height),
      cloudB: makeTexture(cloudB, width, height, { colorSpace: THREE.SRGBColorSpace }),
      cloudAlphaB: makeTexture(cloudAlphaB, width, height),
      debugData: debug,
      debug: makeTexture(new Uint8Array(debug), width, height, { colorSpace: THREE.SRGBColorSpace }),
    };
  }

  createTerrainMaterial() {
    const { albedo, normal, roughness, heightMap, emission, weatherShadow } = this.textures;
    const weatherOffset = new THREE.Vector2();
    const material = new THREE.MeshStandardMaterial({
      map: albedo,
      normalMap: normal,
      normalScale: new THREE.Vector2(1.45, 1.45),
      roughnessMap: roughness,
      displacementMap: heightMap,
      displacementScale: 0.06,
      displacementBias: -0.022,
      emissive: new THREE.Color(0xffd89a),
      emissiveMap: emission,
      emissiveIntensity: 0.48,
      metalness: 0,
      roughness: 0.78,
      flatShading: false,
      side: THREE.FrontSide,
    });
    material.userData.proceduralWeatherShadow = true;
    material.userData.weatherShadowMap = weatherShadow;
    material.userData.weatherShadowOffset = weatherOffset;
    material.onBeforeCompile = (shader) => {
      shader.uniforms.proceduralWeatherShadowMap = { value: weatherShadow };
      shader.uniforms.proceduralWeatherShadowOffset = { value: weatherOffset };
      shader.uniforms.proceduralWeatherShadowStrength = { value: 0.24 };
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <map_pars_fragment>',
          `#include <map_pars_fragment>
uniform sampler2D proceduralWeatherShadowMap;
uniform vec2 proceduralWeatherShadowOffset;
uniform float proceduralWeatherShadowStrength;`,
        )
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
#ifdef USE_MAP
  float proceduralWeatherShadow = texture2D(
    proceduralWeatherShadowMap,
    fract(vMapUv + proceduralWeatherShadowOffset)
  ).r;
  diffuseColor.rgb *= 1.0 - proceduralWeatherShadow * proceduralWeatherShadowStrength;
#endif`,
        );
      material.userData.proceduralShader = shader;
    };
    material.customProgramCacheKey = () => 'procedural-terrain-weather-shadow-v1';
    this.terrainMaterial = material;
    return material;
  }

  createWaterMesh(radius = PROCEDURAL_PLANET_RADIUS + 0.018, segments = 200) {
    const group = new THREE.Object3D();
    group.name = 'procedural-water-group';

    const material = new THREE.MeshPhysicalMaterial({
      map: this.textures.water,
      alphaMap: this.textures.waterAlpha,
      normalMap: this.textures.waterNormal,
      normalScale: new THREE.Vector2(0.42, 0.42),
      color: 0x89c6d2,
      transparent: true,
      opacity: 0.74,
      depthWrite: false,
      roughness: 0.18,
      metalness: 0,
      clearcoat: 0.7,
      clearcoatRoughness: 0.18,
      side: THREE.FrontSide,
    });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, segments), material);
    mesh.name = 'procedural-water-shell';
    mesh.renderOrder = 4;
    group.add(mesh);

    const foamMaterial = new THREE.MeshBasicMaterial({
      map: this.textures.waterFoam,
      alphaMap: this.textures.waterFoamAlpha,
      color: 0xffffff,
      transparent: true,
      opacity: 0.48,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
    });
    const foam = new THREE.Mesh(new THREE.SphereGeometry(radius + 0.004, segments, segments), foamMaterial);
    foam.name = 'procedural-coast-foam-shell';
    foam.renderOrder = 4.5;
    group.add(foam);

    group.userData.waterShellCount = 1;
    group.userData.foamShellCount = 1;
    return group;
  }

  createCloudGroup(radius = PROCEDURAL_PLANET_RADIUS + 0.055, segments = 200) {
    const group = new THREE.Object3D();
    group.name = 'procedural-clouds';
    const cloudSpecs = [
      {
        name: 'procedural-cloud-low',
        radius,
        map: this.textures.cloudA,
        alphaMap: this.textures.cloudAlphaA,
        opacity: 0.42,
      },
      {
        name: 'procedural-cloud-high',
        radius: radius + 0.045,
        map: this.textures.cloudB,
        alphaMap: this.textures.cloudAlphaB,
        opacity: 0.28,
      },
    ];

    cloudSpecs.forEach((spec) => {
      const material = new THREE.MeshLambertMaterial({
        map: spec.map,
        alphaMap: spec.alphaMap,
        color: 0xffffff,
        transparent: true,
        opacity: spec.opacity,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(spec.radius, segments, segments), material);
      mesh.name = spec.name;
      mesh.renderOrder = 5;
      group.add(mesh);
    });

    return group;
  }

  createSemanticLandmarkGroup(radius = PROCEDURAL_PLANET_RADIUS + 0.072, landmarkCount = this.config.landmarkCount) {
    const group = new THREE.Object3D();
    group.name = 'procedural-semantic-landmarks';

    const nodes = this.semanticWorldMap.nodes || this.semanticWorldMap.anchors;
    const landmarks = nodes
      .map((node) => {
        const sizeScore = clamp((node.size || 0) / 110, 0, 1);
        const importance = clamp01(
          node.score * 0.56 +
          node.centrality * 0.18 +
          sizeScore * 0.2 +
          (node.hasSlides ? 0.18 : 0),
        );
        return { node, importance };
      })
      .filter(({ importance }) => importance > 0.11)
      .sort((a, b) => b.importance - a.importance)
      .slice(0, Math.max(12, Math.floor(landmarkCount)));

    const positions = [];
    const colors = [];
    const sizes = [];
    const importanceValues = [];
    let slideCount = 0;
    let maxImportance = 0;

    landmarks.forEach(({ node, importance }) => {
      const surface = this.sampleSurfaceUnit(node.unit);
      const surfaceRadius = Math.max(radius, surface.radius + 0.055 + importance * 0.014);
      const position = node.unit.clone().multiplyScalar(surfaceRadius);
      const color = new THREE.Color(node.color[0], node.color[1], node.color[2])
        .lerp(new THREE.Color(0xffd389), node.hasSlides ? 0.42 : 0.22)
        .lerp(new THREE.Color(0xffffff), importance * 0.08);
      if (surface.waterDepth > 0.018) {
        color.lerp(new THREE.Color(0x8ddbe4), 0.28);
      }

      positions.push(position.x, position.y, position.z);
      colors.push(color.r, color.g, color.b);
      sizes.push(lerp(54, 186, importance));
      importanceValues.push(importance);
      if (node.hasSlides) slideCount += 1;
      maxImportance = Math.max(maxImportance, importance);
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('landmarkColor', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('landmarkSize', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('landmarkImportance', new THREE.Float32BufferAttribute(importanceValues, 1));
    geometry.computeBoundingSphere();

    const material = new THREE.ShaderMaterial({
      vertexShader: landmarkVertexShader,
      fragmentShader: landmarkFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });
    const points = new THREE.Points(geometry, material);
    points.name = 'procedural-semantic-landmark-lights';
    points.renderOrder = 6;
    points.frustumCulled = false;
    group.add(points);

    this.semanticLandmarkStats = {
      count: landmarks.length,
      slideCount,
      radius,
      maxImportance,
    };

    return group;
  }

  createSemanticOverlayGroup(radius = PROCEDURAL_PLANET_RADIUS + 0.032) {
    const group = new THREE.Object3D();
    group.name = 'procedural-semantic-overlays';

    const coastline = this.createCoastlineMesh(
      radius,
      this.config.coastlineLongitudeSteps,
      this.config.coastlineLatitudeSteps,
    );
    const contours = this.createElevationContourMesh(
      radius + 0.006,
      this.config.elevationContourLongitudeSteps,
      this.config.elevationContourLatitudeSteps,
      this.config.elevationContourLevels,
    );
    const routes = this.createRouteCorridorMesh(
      radius + 0.012,
      this.config.routeOverlayCount,
    );

    group.add(coastline);
    group.add(contours);
    group.add(routes);

    this.semanticOverlayStats = {
      coastlineSegments: coastline.userData.segmentCount || 0,
      elevationContourSegments: contours.userData.segmentCount || 0,
      elevationContourLevels: contours.userData.levelCount || 0,
      routeSegments: routes.userData.segmentCount || 0,
      routeCount: routes.userData.routeCount || 0,
      radius,
    };

    return group;
  }

  createCoastlineMesh(
    radius = PROCEDURAL_PLANET_RADIUS + 0.032,
    longitudeSteps = this.config.coastlineLongitudeSteps,
    latitudeSteps = this.config.coastlineLatitudeSteps,
  ) {
    const lonSteps = Math.max(24, Math.floor(longitudeSteps));
    const latSteps = Math.max(12, Math.floor(latitudeSteps));
    const grid = [];

    for (let y = 0; y <= latSteps; y++) {
      const lat = 90 - (y / latSteps) * 180;
      const row = [];
      for (let x = 0; x < lonSteps; x++) {
        const lng = -180 + (x / lonSteps) * 360;
        const unit = unitFromLatLng(lat, lng);
        const sample = this.sampleUnit(unit);
        row.push({
          unit,
          landValue: sample.height - this.config.seaLevel,
        });
      }
      grid.push(row);
    }

    const positions = [];
    let segmentCount = 0;
    const crossingPoint = (a, b) => {
      const denominator = b.landValue - a.landValue;
      const alpha = Math.abs(denominator) > 1e-8
        ? clamp01(-a.landValue / denominator)
        : 0.5;
      return slerpUnitVectors(a.unit, b.unit, alpha).multiplyScalar(radius);
    };
    const maybeCrossing = (a, b, crossings) => {
      const aLand = a.landValue >= 0;
      const bLand = b.landValue >= 0;
      if (aLand === bLand) return;
      crossings.push(crossingPoint(a, b));
    };
    const addSegment = (a, b) => {
      positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      segmentCount += 1;
    };

    for (let y = 0; y < latSteps; y++) {
      for (let x = 0; x < lonSteps; x++) {
        const nextX = (x + 1) % lonSteps;
        const topLeft = grid[y][x];
        const topRight = grid[y][nextX];
        const bottomRight = grid[y + 1][nextX];
        const bottomLeft = grid[y + 1][x];
        const crossings = [];

        maybeCrossing(topLeft, topRight, crossings);
        maybeCrossing(topRight, bottomRight, crossings);
        maybeCrossing(bottomRight, bottomLeft, crossings);
        maybeCrossing(bottomLeft, topLeft, crossings);

        if (crossings.length === 2) {
          addSegment(crossings[0], crossings[1]);
        } else if (crossings.length === 4) {
          addSegment(crossings[0], crossings[1]);
          addSegment(crossings[2], crossings[3]);
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.computeBoundingSphere();

    const material = new THREE.LineBasicMaterial({
      color: 0xc8e8df,
      transparent: true,
      opacity: 0.36,
      depthWrite: false,
    });
    const mesh = new THREE.LineSegments(geometry, material);
    mesh.name = 'procedural-coastline-overlay';
    mesh.renderOrder = 6;
    mesh.frustumCulled = false;
    mesh.userData.segmentCount = segmentCount;
    return mesh;
  }

  createElevationContourMesh(
    radius = PROCEDURAL_PLANET_RADIUS + 0.038,
    longitudeSteps = this.config.elevationContourLongitudeSteps,
    latitudeSteps = this.config.elevationContourLatitudeSteps,
    levels = this.config.elevationContourLevels,
  ) {
    const lonSteps = Math.max(24, Math.floor(longitudeSteps));
    const latSteps = Math.max(12, Math.floor(latitudeSteps));
    const contourLevels = (Array.isArray(levels) ? levels : [])
      .map((level) => Number(level))
      .filter((level) => Number.isFinite(level))
      .sort((a, b) => a - b);
    const grid = [];

    for (let y = 0; y <= latSteps; y++) {
      const lat = 90 - (y / latSteps) * 180;
      const row = [];
      for (let x = 0; x < lonSteps; x++) {
        const lng = -180 + (x / lonSteps) * 360;
        const unit = unitFromLatLng(lat, lng);
        const sample = this.sampleUnit(unit);
        row.push({
          unit,
          elevation: sample.height - this.config.seaLevel,
          settlement: sample.settlementSuitability,
          slope: sample.slope,
        });
      }
      grid.push(row);
    }

    const positions = [];
    const colors = [];
    let segmentCount = 0;
    const lowColor = new THREE.Color(0x8fb18d);
    const highColor = new THREE.Color(0xf0d08d);
    const settlementColor = new THREE.Color(0xffd387);

    const crossingPoint = (a, b, level) => {
      const denominator = b.elevation - a.elevation;
      const alpha = Math.abs(denominator) > 1e-8
        ? clamp01((level - a.elevation) / denominator)
        : 0.5;
      return {
        position: slerpUnitVectors(a.unit, b.unit, alpha).multiplyScalar(radius),
        settlement: lerp(a.settlement, b.settlement, alpha),
        slope: lerp(a.slope, b.slope, alpha),
      };
    };
    const maybeCrossing = (a, b, level, crossings) => {
      const aAbove = a.elevation >= level;
      const bAbove = b.elevation >= level;
      if (aAbove === bAbove) return;
      crossings.push(crossingPoint(a, b, level));
    };
    const addSegment = (a, b, levelIndex) => {
      const levelAlpha = contourLevels.length > 1
        ? levelIndex / Math.max(1, contourLevels.length - 1)
        : 0;
      const emphasis = clamp01(
        0.2 +
        levelAlpha * 0.5 +
        (a.slope + b.slope) * 0.18 +
        (a.settlement + b.settlement) * 0.1,
      );
      const color = lowColor.clone()
        .lerp(highColor, levelAlpha)
        .lerp(settlementColor, clamp01((a.settlement + b.settlement) * 0.16))
        .multiplyScalar(0.58 + emphasis * 0.38);

      positions.push(a.position.x, a.position.y, a.position.z, b.position.x, b.position.y, b.position.z);
      colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
      segmentCount += 1;
    };

    for (let y = 0; y < latSteps; y++) {
      for (let x = 0; x < lonSteps; x++) {
        const nextX = (x + 1) % lonSteps;
        const topLeft = grid[y][x];
        const topRight = grid[y][nextX];
        const bottomRight = grid[y + 1][nextX];
        const bottomLeft = grid[y + 1][x];

        contourLevels.forEach((level, levelIndex) => {
          const crossings = [];
          maybeCrossing(topLeft, topRight, level, crossings);
          maybeCrossing(topRight, bottomRight, level, crossings);
          maybeCrossing(bottomRight, bottomLeft, level, crossings);
          maybeCrossing(bottomLeft, topLeft, level, crossings);

          if (crossings.length === 2) {
            addSegment(crossings[0], crossings[1], levelIndex);
          } else if (crossings.length === 4) {
            addSegment(crossings[0], crossings[1], levelIndex);
            addSegment(crossings[2], crossings[3], levelIndex);
          }
        });
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeBoundingSphere();

    const material = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      vertexColors: true,
    });
    const mesh = new THREE.LineSegments(geometry, material);
    mesh.name = 'procedural-elevation-contour-overlay';
    mesh.renderOrder = 5.8;
    mesh.frustumCulled = false;
    mesh.userData.segmentCount = segmentCount;
    mesh.userData.levelCount = contourLevels.length;
    return mesh;
  }

  createRouteCorridorMesh(
    radius = PROCEDURAL_PLANET_RADIUS + 0.044,
    routeCount = this.config.routeOverlayCount,
  ) {
    const positions = [];
    const colors = [];
    let segmentCount = 0;
    let visibleRouteCount = 0;
    const routeLimit = Math.max(0, Math.floor(routeCount));
    const colorByKind = {
      arrow: new THREE.Color(0xffc06e),
      dashed: new THREE.Color(0xdce7d6),
      tunnel: new THREE.Color(0x91d4ff),
      normal: new THREE.Color(0xbfd49f),
    };
    const fallbackSide = new THREE.Vector3(0, 1, 0);

    const addColoredSegment = (a, b, color) => {
      positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
      segmentCount += 1;
    };

    this.semanticWorldMap.routes.slice(0, routeLimit).forEach((route) => {
      const baseColor = colorByKind[route.kind] || colorByKind.normal;
      const color = baseColor.clone().lerp(new THREE.Color(0xffffff), route.score * 0.22);
      const segments = clamp(Math.ceil(route.totalAngle / THREE.MathUtils.degToRad(4)), 8, 36);
      const angularWidth = THREE.MathUtils.degToRad(0.13 + route.score * 0.34);
      let emittedForRoute = false;

      for (let i = 0; i < segments; i++) {
        const aUnit = slerpUnitVectors(route.startUnit, route.endUnit, i / segments);
        const bUnit = slerpUnitVectors(route.startUnit, route.endUnit, (i + 1) / segments);
        const sideA = route.normal.clone().sub(aUnit.clone().multiplyScalar(route.normal.dot(aUnit)));
        const sideB = route.normal.clone().sub(bUnit.clone().multiplyScalar(route.normal.dot(bUnit)));
        if (sideA.lengthSq() < 1e-8) sideA.copy(fallbackSide);
        if (sideB.lengthSq() < 1e-8) sideB.copy(fallbackSide);
        sideA.normalize();
        sideB.normalize();

        const leftA = aUnit.clone()
          .multiplyScalar(Math.cos(angularWidth))
          .add(sideA.clone().multiplyScalar(Math.sin(angularWidth)))
          .normalize()
          .multiplyScalar(radius);
        const leftB = bUnit.clone()
          .multiplyScalar(Math.cos(angularWidth))
          .add(sideB.clone().multiplyScalar(Math.sin(angularWidth)))
          .normalize()
          .multiplyScalar(radius);
        const rightA = aUnit.clone()
          .multiplyScalar(Math.cos(angularWidth))
          .add(sideA.clone().multiplyScalar(-Math.sin(angularWidth)))
          .normalize()
          .multiplyScalar(radius);
        const rightB = bUnit.clone()
          .multiplyScalar(Math.cos(angularWidth))
          .add(sideB.clone().multiplyScalar(-Math.sin(angularWidth)))
          .normalize()
          .multiplyScalar(radius);

        addColoredSegment(leftA, leftB, color);
        addColoredSegment(rightA, rightB, color);
        emittedForRoute = true;
      }

      if (emittedForRoute) visibleRouteCount += 1;
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeBoundingSphere();

    const material = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
      vertexColors: true,
    });
    const mesh = new THREE.LineSegments(geometry, material);
    mesh.name = 'procedural-route-corridor-overlay';
    mesh.renderOrder = 6;
    mesh.frustumCulled = false;
    mesh.userData.segmentCount = segmentCount;
    mesh.userData.routeCount = visibleRouteCount;
    return mesh;
  }

  getSemanticOverlayStats() {
    return this.semanticOverlayStats;
  }

  getSemanticLandmarkStats() {
    return this.semanticLandmarkStats;
  }

  createSurfaceDetailLayer(options = {}) {
    return new ProceduralSurfaceDetailLayer(this, options);
  }

  update(delta) {
    const amount = Math.min(delta || 0, 1 / 20);
    const scroll = (texture, x, y) => {
      if (!texture) return;
      texture.offset.x = (texture.offset.x + x * amount) % 1;
      texture.offset.y = (texture.offset.y + y * amount) % 1;
    };
    scroll(this.textures.water, 0.004, 0.001);
    scroll(this.textures.waterAlpha, 0.004, 0.001);
    scroll(this.textures.waterNormal, 0.018, 0.006);
    scroll(this.textures.waterFoam, 0.007, 0.002);
    scroll(this.textures.waterFoamAlpha, 0.007, 0.002);
    scroll(this.textures.weatherShadow, 0.0011, 0);
    scroll(this.textures.cloudA, 0.0011, 0);
    scroll(this.textures.cloudAlphaA, 0.0011, 0);
    scroll(this.textures.cloudB, -0.0008, 0.0003);
    scroll(this.textures.cloudAlphaB, -0.0008, 0.0003);

    const weatherShader = this.terrainMaterial?.userData?.proceduralShader;
    const weatherOffset = this.terrainMaterial?.userData?.weatherShadowOffset;
    if (weatherShader?.uniforms?.proceduralWeatherShadowOffset && weatherOffset) {
      weatherOffset.copy(this.textures.weatherShadow.offset);
      weatherShader.uniforms.proceduralWeatherShadowOffset.value.copy(weatherOffset);
    }
  }

  createDebugCanvas() {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = this.textures.width;
    canvas.height = this.textures.height;
    const context = canvas.getContext('2d');
    const imageData = new ImageData(this.textures.debugData, this.textures.width, this.textures.height);
    context.putImageData(imageData, 0, 0);
    return canvas;
  }
}

class ProceduralSurfaceDetailLayer {
  constructor(planet, {
    radius = PROCEDURAL_PLANET_RADIUS,
    patchSize = planet.config.surfacePatchSize,
    segments = planet.config.surfacePatchSegments,
    propCount = planet.config.surfacePropCount,
  } = {}) {
    this.planet = planet;
    this.radius = radius;
    this.patchSize = patchSize;
    this.segments = segments;
    this.propCount = propCount;
    this.visibleDistance = radius + 1.65;
    this.rebuildAngleThreshold = THREE.MathUtils.degToRad(0.42);
    this.lastCenterUnit = null;
    this.lastKey = '';
    this.stats = {
      visible: false,
      rebuilds: 0,
      rocks: 0,
      plants: 0,
      settlementPads: 0,
      settlementStructures: 0,
      settlementSpires: 0,
      settlementBeacons: 0,
      routeTraces: 0,
      routeMarkers: 0,
      terrainStrokes: 0,
      hazeSegments: 0,
      center: null,
    };

    this.root = new THREE.Object3D();
    this.root.name = 'procedural-surface-detail';
    this.root.visible = false;

    this.geometry = this.createPatchGeometry();
    this.material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 1,
      alphaTest: 0.035,
      emissive: new THREE.Color(0x6f6250),
      emissiveIntensity: 0.78,
      roughness: 0.9,
      metalness: 0,
      flatShading: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
      side: THREE.FrontSide,
    });
    addVertexColorEmission(this.material, 0.72, 'surface-patch');
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.name = 'procedural-surface-detail-patch';
    this.mesh.renderOrder = 7;
    this.root.add(this.mesh);

    this.skyDomeGeometry = new THREE.SphereGeometry(18, 40, 20);
    this.skyDomeMaterial = new THREE.ShaderMaterial({
      vertexShader: surfaceSkyVertexShader,
      fragmentShader: surfaceSkyFragmentShader,
      uniforms: {
        surfaceSkyOpacity: { value: 0.96 },
        surfaceSkyUp: { value: new THREE.Vector3(0, 1, 0) },
      },
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      depthTest: true,
    });
    this.skyDomeMesh = new THREE.Mesh(this.skyDomeGeometry, this.skyDomeMaterial);
    this.skyDomeMesh.name = 'procedural-surface-sky-dome';
    this.skyDomeMesh.renderOrder = -80;
    this.skyDomeMesh.frustumCulled = false;
    this.skyDomeMesh.visible = false;
    this.root.add(this.skyDomeMesh);

    this.atmosphereVeilGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.atmosphereVeilMaterial = new THREE.ShaderMaterial({
      vertexShader: surfaceVeilVertexShader,
      fragmentShader: surfaceVeilFragmentShader,
      uniforms: {
        surfaceVeilOpacity: { value: 0.84 },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });
    this.atmosphereVeilMesh = new THREE.Mesh(this.atmosphereVeilGeometry, this.atmosphereVeilMaterial);
    this.atmosphereVeilMesh.name = 'procedural-surface-atmosphere-veil';
    this.atmosphereVeilMesh.renderOrder = 12;
    this.atmosphereVeilMesh.frustumCulled = false;
    this.atmosphereVeilMesh.visible = false;
    this.root.add(this.atmosphereVeilMesh);

    this.rockGeometry = new THREE.DodecahedronGeometry(1, 0);
    this.rockMaterial = new THREE.MeshStandardMaterial({
      color: 0x827867,
      emissive: new THREE.Color(0x5a4937),
      emissiveIntensity: 0.68,
      roughness: 0.96,
      metalness: 0,
      flatShading: true,
      vertexColors: true,
    });
    addVertexColorEmission(this.rockMaterial, 0.44, 'surface-rocks');
    this.rockMesh = new THREE.InstancedMesh(this.rockGeometry, this.rockMaterial, propCount);
    this.rockMesh.name = 'procedural-surface-rocks';
    this.rockMesh.count = 0;
    this.rockMesh.renderOrder = 8;
    this.root.add(this.rockMesh);

    this.plantGeometry = new THREE.ConeGeometry(1, 1, 6);
    this.plantMaterial = new THREE.MeshStandardMaterial({
      color: 0x668755,
      emissive: new THREE.Color(0x334a2c),
      emissiveIntensity: 0.62,
      roughness: 0.88,
      metalness: 0,
      flatShading: true,
      vertexColors: true,
    });
    addVertexColorEmission(this.plantMaterial, 0.5, 'surface-growth');
    this.plantMesh = new THREE.InstancedMesh(this.plantGeometry, this.plantMaterial, propCount);
    this.plantMesh.name = 'procedural-surface-growth';
    this.plantMesh.count = 0;
    this.plantMesh.renderOrder = 8;
    this.root.add(this.plantMesh);

    this.settlementPadLimit = Math.max(8, Math.floor(planet.config.surfaceSettlementLimit));
    this.settlementInstanceLimit = Math.max(this.settlementPadLimit, Math.floor(planet.config.surfaceSettlementInstanceLimit));
    this.settlementPadGeometry = new THREE.CircleGeometry(1, 24);
    this.settlementPadGeometry.rotateX(-Math.PI / 2);
    this.settlementPadMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: -5,
      polygonOffsetUnits: -5,
    });
    this.settlementPadMesh = new THREE.InstancedMesh(this.settlementPadGeometry, this.settlementPadMaterial, this.settlementPadLimit);
    this.settlementPadMesh.name = 'procedural-surface-settlement-pads';
    this.settlementPadMesh.count = 0;
    this.settlementPadMesh.renderOrder = 8;
    this.root.add(this.settlementPadMesh);

    this.settlementGeometry = new THREE.BoxGeometry(1, 1, 1);
    this.settlementMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      vertexColors: true,
      emissive: new THREE.Color(0x6f431d),
      emissiveIntensity: 0.64,
      roughness: 0.72,
      metalness: 0,
      flatShading: true,
    });
    addVertexColorEmission(this.settlementMaterial, 0.38, 'surface-settlements');
    this.settlementMesh = new THREE.InstancedMesh(this.settlementGeometry, this.settlementMaterial, this.settlementInstanceLimit);
    this.settlementMesh.name = 'procedural-surface-settlements';
    this.settlementMesh.count = 0;
    this.settlementMesh.renderOrder = 9;
    this.root.add(this.settlementMesh);

    this.settlementSpireGeometry = new THREE.ConeGeometry(1, 1, 6);
    this.settlementSpireMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      vertexColors: true,
      emissive: new THREE.Color(0x71451f),
      emissiveIntensity: 0.72,
      roughness: 0.7,
      metalness: 0,
      flatShading: true,
    });
    addVertexColorEmission(this.settlementSpireMaterial, 0.42, 'surface-spires');
    this.settlementSpireMesh = new THREE.InstancedMesh(
      this.settlementSpireGeometry,
      this.settlementSpireMaterial,
      this.settlementPadLimit,
    );
    this.settlementSpireMesh.name = 'procedural-surface-settlement-spires';
    this.settlementSpireMesh.count = 0;
    this.settlementSpireMesh.renderOrder = 10;
    this.root.add(this.settlementSpireMesh);

    this.settlementBeaconGeometry = new THREE.SphereGeometry(1, 10, 6);
    this.settlementBeaconMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      vertexColors: true,
      transparent: true,
      opacity: 0.68,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.settlementBeaconMesh = new THREE.InstancedMesh(
      this.settlementBeaconGeometry,
      this.settlementBeaconMaterial,
      this.settlementPadLimit,
    );
    this.settlementBeaconMesh.name = 'procedural-surface-settlement-beacons';
    this.settlementBeaconMesh.count = 0;
    this.settlementBeaconMesh.renderOrder = 10;
    this.root.add(this.settlementBeaconMesh);

    this.routeTraceSegmentLimit = Math.max(64, Math.floor(planet.config.surfaceRouteTraceSegmentLimit));
    this.routeTracePositions = new Float32Array(this.routeTraceSegmentLimit * 6 * 3);
    this.routeTraceColors = new Float32Array(this.routeTraceSegmentLimit * 6 * 3);
    this.routeTraceGeometry = new THREE.BufferGeometry();
    this.routeTraceGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.routeTracePositions, 3).setUsage(THREE.DynamicDrawUsage),
    );
    this.routeTraceGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(this.routeTraceColors, 3).setUsage(THREE.DynamicDrawUsage),
    );
    this.routeTraceGeometry.setDrawRange(0, 0);
    this.routeTraceMaterial = new THREE.MeshStandardMaterial({
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      vertexColors: true,
      side: THREE.DoubleSide,
      roughness: 0.86,
      metalness: 0,
      emissive: new THREE.Color(0x19140f),
      emissiveIntensity: 0.18,
      polygonOffset: true,
      polygonOffsetFactor: -6,
      polygonOffsetUnits: -6,
    });
    addVertexColorEmission(this.routeTraceMaterial, 0.34, 'surface-routes');
    this.routeTraceMesh = new THREE.Mesh(this.routeTraceGeometry, this.routeTraceMaterial);
    this.routeTraceMesh.name = 'procedural-surface-route-traces';
    this.routeTraceMesh.renderOrder = 9;
    this.routeTraceMesh.frustumCulled = false;
    this.root.add(this.routeTraceMesh);

    this.routeMarkerLimit = Math.max(16, Math.floor(planet.config.surfaceRouteMarkerLimit));
    this.routeMarkerGeometry = new THREE.SphereGeometry(1, 8, 5);
    this.routeMarkerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      vertexColors: true,
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.routeMarkerMesh = new THREE.InstancedMesh(
      this.routeMarkerGeometry,
      this.routeMarkerMaterial,
      this.routeMarkerLimit,
    );
    this.routeMarkerMesh.name = 'procedural-surface-route-markers';
    this.routeMarkerMesh.count = 0;
    this.routeMarkerMesh.renderOrder = 10;
    this.root.add(this.routeMarkerMesh);

    this.terrainStrokeLimit = Math.max(64, Math.floor(planet.config.surfaceTerrainStrokeLimit));
    this.terrainStrokePositions = new Float32Array(this.terrainStrokeLimit * 2 * 3);
    this.terrainStrokeColors = new Float32Array(this.terrainStrokeLimit * 2 * 3);
    this.terrainStrokeGeometry = new THREE.BufferGeometry();
    this.terrainStrokeGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.terrainStrokePositions, 3).setUsage(THREE.DynamicDrawUsage),
    );
    this.terrainStrokeGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(this.terrainStrokeColors, 3).setUsage(THREE.DynamicDrawUsage),
    );
    this.terrainStrokeGeometry.setDrawRange(0, 0);
    this.terrainStrokeMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.23,
      depthWrite: false,
      vertexColors: true,
    });
    this.terrainStrokeMesh = new THREE.LineSegments(this.terrainStrokeGeometry, this.terrainStrokeMaterial);
    this.terrainStrokeMesh.name = 'procedural-surface-terrain-strokes';
    this.terrainStrokeMesh.renderOrder = 8.4;
    this.terrainStrokeMesh.frustumCulled = false;
    this.root.add(this.terrainStrokeMesh);

    this.hazeSegmentLimit = this.segments * 4;
    this.hazePositions = new Float32Array(this.hazeSegmentLimit * 2 * 3);
    this.hazeColors = new Float32Array(this.hazeSegmentLimit * 2 * 3);
    this.hazeGeometry = new THREE.BufferGeometry();
    this.hazeGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.hazePositions, 3).setUsage(THREE.DynamicDrawUsage),
    );
    this.hazeGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(this.hazeColors, 3).setUsage(THREE.DynamicDrawUsage),
    );
    this.hazeGeometry.setDrawRange(0, 0);
    this.hazeMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    this.hazeMesh = new THREE.LineSegments(this.hazeGeometry, this.hazeMaterial);
    this.hazeMesh.name = 'procedural-surface-horizon-haze';
    this.hazeMesh.renderOrder = 8;
    this.hazeMesh.frustumCulled = false;
    this.root.add(this.hazeMesh);

    this.surfaceFillLight = new THREE.HemisphereLight(0xcfe0ff, 0x7a5634, 0.86);
    this.surfaceFillLight.name = 'procedural-surface-fill-light';
    this.surfaceFillLight.visible = false;
    this.root.add(this.surfaceFillLight);

    this.inspectionLight = new THREE.PointLight(0xffdfa3, 2.15, 2.65, 1.18);
    this.inspectionLight.name = 'procedural-surface-inspection-light';
    this.inspectionLight.visible = false;
    this.root.add(this.inspectionLight);

    this.cameraWorld = new THREE.Vector3();
    this.localCamera = new THREE.Vector3();
    this.skyDomeWorldUp = new THREE.Vector3(0, 1, 0);
    this.skyDomeQuaternion = new THREE.Quaternion();
    this.cameraWorldQuaternion = new THREE.Quaternion();
    this.jaraniusWorldQuaternion = new THREE.Quaternion();
    this.localCameraForward = new THREE.Vector3(0, 0, -1);
    this.localCameraUp = new THREE.Vector3(0, 1, 0);
    this.localCameraRight = new THREE.Vector3(1, 0, 0);
    this.atmosphereVeilQuaternion = new THREE.Quaternion();
    this.atmosphereVeilBasis = new THREE.Matrix4();
  }

  createPatchGeometry() {
    const row = this.segments + 1;
    const vertexCount = row * row;
    const positions = new Float32Array(vertexCount * 3);
    const colors = new Float32Array(vertexCount * 4);
    const indices = [];

    for (let y = 0; y < this.segments; y++) {
      for (let x = 0; x < this.segments; x++) {
        const a = y * row + x;
        const b = a + 1;
        const c = a + row;
        const d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4).setUsage(THREE.DynamicDrawUsage));
    geometry.setIndex(indices);
    return geometry;
  }

  update({ camera, jaranius, appStatus }) {
    if (!camera || !jaranius) return;
    camera.getWorldPosition(this.cameraWorld);
    this.localCamera.copy(this.cameraWorld);
    jaranius.worldToLocal(this.localCamera);

    const cameraDistance = this.localCamera.length();
    const visible = appStatus === 'flight' || cameraDistance <= this.visibleDistance;
    this.root.visible = visible;
    this.stats.visible = visible;
    this.inspectionLight.visible = visible;
    this.surfaceFillLight.visible = visible;
    this.skyDomeMesh.visible = visible;
    this.atmosphereVeilMesh.visible = visible;
    if (!visible || cameraDistance <= 0.001) return;

    const centerUnit = this.localCamera.clone().normalize();
    this.skyDomeMesh.position.copy(this.localCamera);
    this.skyDomeQuaternion.setFromRotationMatrix(getSurfaceFrame(centerUnit, tangentBasisFromUnit(centerUnit).east));
    this.skyDomeMesh.quaternion.copy(this.skyDomeQuaternion);
    this.skyDomeWorldUp.copy(centerUnit).transformDirection(jaranius.matrixWorld).normalize();
    this.skyDomeMaterial.uniforms.surfaceSkyUp.value.copy(this.skyDomeWorldUp);
    camera.getWorldQuaternion(this.cameraWorldQuaternion);
    jaranius.getWorldQuaternion(this.jaraniusWorldQuaternion).invert();
    this.localCameraForward
      .set(0, 0, -1)
      .applyQuaternion(this.cameraWorldQuaternion)
      .applyQuaternion(this.jaraniusWorldQuaternion)
      .normalize();
    this.localCameraUp
      .set(0, 1, 0)
      .applyQuaternion(this.cameraWorldQuaternion)
      .applyQuaternion(this.jaraniusWorldQuaternion)
      .normalize();
    this.localCameraRight
      .crossVectors(this.localCameraForward, this.localCameraUp)
      .multiplyScalar(-1)
      .normalize();
    this.localCameraUp.crossVectors(this.localCameraRight, this.localCameraForward).normalize();
    const veilDistance = 1.45;
    const halfHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * veilDistance;
    this.atmosphereVeilMesh.position
      .copy(this.localCamera)
      .add(this.localCameraForward.clone().multiplyScalar(veilDistance))
      .add(this.localCameraUp.clone().multiplyScalar(halfHeight * 0.08));
    this.atmosphereVeilMesh.scale.set(halfHeight * camera.aspect * 2.35, halfHeight * 1.5, 1);
    this.atmosphereVeilBasis.makeBasis(
      this.localCameraRight,
      this.localCameraUp,
      this.localCameraForward.clone().multiplyScalar(-1),
    );
    this.atmosphereVeilQuaternion.setFromRotationMatrix(this.atmosphereVeilBasis);
    this.atmosphereVeilMesh.quaternion.copy(this.atmosphereVeilQuaternion);
    this.inspectionLight.position.copy(this.localCamera).add(centerUnit.clone().multiplyScalar(0.12));
    const shouldRebuild = !this.lastCenterUnit || this.lastCenterUnit.angleTo(centerUnit) > this.rebuildAngleThreshold;
    if (shouldRebuild) {
      this.rebuild(centerUnit);
      this.lastCenterUnit = centerUnit;
    }
  }

  rebuild(centerUnit) {
    const { east, north } = tangentBasisFromUnit(centerUnit);
    const half = this.patchSize * 0.5;
    const row = this.segments + 1;
    const positionAttribute = this.geometry.getAttribute('position');
    const colorAttribute = this.geometry.getAttribute('color');

    for (let y = 0; y <= this.segments; y++) {
      const v = y / this.segments;
      const localY = (v - 0.5) * this.patchSize;
      for (let x = 0; x <= this.segments; x++) {
        const u = x / this.segments;
        const localX = (u - 0.5) * this.patchSize;
        const index = y * row + x;
        const unit = centerUnit.clone()
          .multiplyScalar(this.radius)
          .add(east.clone().multiplyScalar(localX))
          .add(north.clone().multiplyScalar(localY))
          .normalize();
        const surface = this.planet.sampleSurfaceUnit(unit);
        const edge = Math.max(Math.abs(localX) / half, Math.abs(localY) / half);
        const edgeFade = smoothstep(1.02, 0.72, edge);
        const edgeAlpha = smoothstep(1.0, 0.58, edge);
        const microDetail = this.getMicroDetail(unit, surface, edgeFade);
        const elevation = (surface.elevation + microDetail.elevation) * edgeFade + 0.011;
        const position = unit.clone().multiplyScalar(this.radius + elevation);
        const color = this.getPatchColor(surface, edgeFade, microDetail);

        positionAttribute.setXYZ(index, position.x, position.y, position.z);
        colorAttribute.setXYZW(index, color.r, color.g, color.b, edgeAlpha);
      }
    }

    positionAttribute.needsUpdate = true;
    colorAttribute.needsUpdate = true;
    this.geometry.computeVertexNormals();
    this.geometry.computeBoundingSphere();
    this.rebuildSettlements(centerUnit, east, north);
    this.rebuildRouteTraces(centerUnit, east, north);
    this.rebuildTerrainStrokes(centerUnit, east, north);
    this.rebuildProps(centerUnit, east, north);
    this.rebuildHorizonHaze(centerUnit, east, north);

    const center = latLngFromUnit(centerUnit);
    this.stats.rebuilds += 1;
    this.stats.center = center;
    this.lastKey = `${center.lat.toFixed(2)}:${center.lng.toFixed(2)}`;
  }

  getMicroDetail(unit, surface, edgeFade) {
    if (edgeFade <= 0.001) {
      return { elevation: 0, shade: 0, ridge: 0, grain: 0 };
    }
    const wetnessDamping = surface.waterDepth > 0.012 ? 0.18 : 1;
    const routeDamping = lerp(1, 0.38, surface.routeInfluence);
    const slopeLift = lerp(0.65, 1.25, surface.slope);
    const grain = fbm3(unit, 72, this.planet.seed + 4421, 3);
    const fine = fbm3(unit, 132, this.planet.seed + 7331, 2);
    const ridge = Math.abs(fbm3(unit, 46, this.planet.seed + 5939, 4) * 2 - 1);
    const crack = smoothstep(0.72, 0.94, ridge);
    const elevation = (
      (grain - 0.5) * 0.0048 +
      (fine - 0.5) * 0.0021 +
      crack * 0.0024
    ) * wetnessDamping * routeDamping * slopeLift;

    return {
      elevation,
      shade: ((grain - 0.5) * 0.2 + crack * 0.12 - (fine - 0.5) * 0.08) * wetnessDamping,
      ridge: crack,
      grain,
    };
  }

  getPatchColor(surface, edgeFade, microDetail = { shade: 0, ridge: 0, grain: 0 }) {
    const color = surface.color.clone();
    if (surface.waterDepth > 0.015) {
      color.lerp(new THREE.Color(0x2b6570), 0.7);
      color.lerp(new THREE.Color(0x7fb8b6), surface.coast * 0.22);
      color.multiplyScalar(1.12 + microDetail.shade * 0.28 * edgeFade);
    } else {
      color.lerp(new THREE.Color(0xdcc583), surface.routeInfluence * 0.32);
      color.lerp(new THREE.Color(0xd9b978), surface.settlementSuitability * 0.08);
      color.lerp(new THREE.Color(0x9f8f67), 0.08);
      color.lerp(new THREE.Color(0x2b2418), microDetail.ridge * 0.1 * edgeFade);
      color.multiplyScalar(1.18 + surface.slope * 0.22 + edgeFade * 0.22 + microDetail.shade * edgeFade);
    }
    return color;
  }

  rebuildSettlements(centerUnit, east, north) {
    const center = latLngFromUnit(centerUnit);
    const rebuildKey = `${center.lat.toFixed(1)}:${center.lng.toFixed(1)}`;
    const padMatrix = new THREE.Matrix4();
    const structureMatrix = new THREE.Matrix4();
    const spireMatrix = new THREE.Matrix4();
    const beaconMatrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const half = this.patchSize * 0.52;
    const centerPoint = centerUnit.clone().multiplyScalar(this.radius);
    const patchAngularRadius = Math.atan2(half, this.radius) * 1.1;
    let padIndex = 0;
    let structureIndex = 0;
    let spireIndex = 0;
    let beaconIndex = 0;

    const localPoint = (unit) => {
      const relative = unit.clone().multiplyScalar(this.radius).sub(centerPoint);
      return {
        x: relative.dot(east),
        y: relative.dot(north),
      };
    };

    const settlementSource = this.planet.semanticWorldMap.nodes || this.planet.semanticWorldMap.anchors;
    const localAnchors = settlementSource
      .map((anchor) => {
        const displayScore = clamp01(
          anchor.score * 0.72 +
          clamp(anchor.size / 110, 0, 1) * 0.18 +
          anchor.centrality * 0.12 +
          (anchor.hasSlides ? 0.12 : 0),
        );
        return {
          anchor,
          displayScore,
          angle: centerUnit.angleTo(anchor.unit),
        };
      })
      .filter(({ angle }) => angle <= patchAngularRadius)
      .sort((a, b) => (a.angle - a.displayScore * 0.05) - (b.angle - b.displayScore * 0.05))
      .slice(0, this.settlementPadLimit);

    localAnchors.forEach(({ anchor, angle, displayScore }) => {
      if (padIndex >= this.settlementPadLimit || structureIndex >= this.settlementInstanceLimit) return;
      const surface = this.planet.sampleSurfaceUnit(anchor.unit);
      if (surface.waterDepth > 0.014 || surface.slope > 0.88) return;

      const local = localPoint(anchor.unit);
      const edge = Math.max(Math.abs(local.x) / half, Math.abs(local.y) / half);
      const edgeFade = smoothstep(1, 0.72, edge);
      if (edgeFade <= 0.02) return;

      const frame = getSurfaceFrame(anchor.unit, east);
      quaternion.setFromRotationMatrix(frame);
      const importance = clamp01(displayScore * 0.86 + (anchor.hasSlides ? 0.18 : 0));
      const distanceFade = smoothstep(patchAngularRadius, 0, angle);
      const visibility = edgeFade * lerp(0.5, 1, distanceFade);
      const padRadius = lerp(0.014, 0.044, importance) * visibility;
      const baseColor = new THREE.Color(anchor.color[0], anchor.color[1], anchor.color[2])
        .lerp(new THREE.Color(0xe0c88b), 0.3)
        .multiplyScalar(lerp(0.82, 1.18, visibility));
      const basePosition = anchor.unit.clone().multiplyScalar(this.radius + surface.elevation + 0.016);

      padMatrix.compose(
        basePosition,
        quaternion,
        new THREE.Vector3(padRadius, 1, padRadius * lerp(0.72, 1.18, importance)),
      );
      this.settlementPadMesh.setMatrixAt(padIndex, padMatrix);
      this.settlementPadMesh.setColorAt(padIndex, baseColor);
      padIndex += 1;

      if (spireIndex < this.settlementPadLimit && importance > 0.18 && visibility > 0.14) {
        const spireHeight = lerp(0.02, 0.092, importance) * visibility;
        const spireWidth = spireHeight * lerp(0.12, 0.22, 1 - importance);
        const spirePosition = anchor.unit.clone().multiplyScalar(
          this.radius + surface.elevation + 0.018 + spireHeight * 0.5,
        );
        const spireColor = baseColor.clone()
          .lerp(new THREE.Color(0xf1c06f), anchor.hasSlides ? 0.32 : 0.18)
          .multiplyScalar(1.04);
        spireMatrix.compose(
          spirePosition,
          quaternion,
          new THREE.Vector3(spireWidth, spireHeight, spireWidth),
        );
        this.settlementSpireMesh.setMatrixAt(spireIndex, spireMatrix);
        this.settlementSpireMesh.setColorAt(spireIndex, spireColor);
        spireIndex += 1;
      }

      if (beaconIndex < this.settlementPadLimit) {
        const beaconHeight = lerp(0.035, 0.082, importance) * visibility;
        const beaconScale = lerp(0.0055, 0.014, importance) * lerp(0.74, 1, visibility);
        const beaconPosition = anchor.unit.clone().multiplyScalar(
          this.radius + surface.elevation + 0.026 + beaconHeight,
        );
        const beaconColor = baseColor.clone()
          .lerp(new THREE.Color(0xffe4a6), anchor.hasSlides ? 0.46 : 0.22)
          .lerp(new THREE.Color(0xffffff), importance * 0.12);
        beaconMatrix.compose(
          beaconPosition,
          quaternion,
          new THREE.Vector3(beaconScale, beaconScale, beaconScale),
        );
        this.settlementBeaconMesh.setMatrixAt(beaconIndex, beaconMatrix);
        this.settlementBeaconMesh.setColorAt(beaconIndex, beaconColor);
        beaconIndex += 1;
      }

      const random = seededRandom(`${this.planet.config.seed}:surface-settlement:${anchor.id}:${rebuildKey}`);
      const structureCount = Math.min(
        this.settlementInstanceLimit - structureIndex,
        anchor.hasSlides || importance > 0.76 ? 4 : importance > 0.48 ? 3 : 1,
      );
      const { east: localEast, north: localNorth } = tangentBasisFromUnit(anchor.unit);
      for (let i = 0; i < structureCount; i++) {
        const radial = i === 0 ? 0 : padRadius * lerp(0.16, 0.62, random());
        const angleOffset = random() * Math.PI * 2;
        const structureUnit = anchor.unit.clone()
          .multiplyScalar(this.radius)
          .add(localEast.clone().multiplyScalar(Math.cos(angleOffset) * radial))
          .add(localNorth.clone().multiplyScalar(Math.sin(angleOffset) * radial))
          .normalize();
        const structureSurface = this.planet.sampleSurfaceUnit(structureUnit);
        if (structureSurface.waterDepth > 0.014) continue;
        const structureHeight = lerp(0.018, 0.084, importance) * lerp(0.68, 1.24, random()) * visibility;
        const footprint = structureHeight * lerp(0.18, 0.34, random());
        const structureFrame = getSurfaceFrame(
          structureUnit,
          localEast.clone().multiplyScalar(random() - 0.5).add(localNorth.clone().multiplyScalar(random() - 0.5)),
        );
        quaternion.setFromRotationMatrix(structureFrame);
        const position = structureUnit.clone()
          .multiplyScalar(this.radius + structureSurface.elevation + 0.016 + structureHeight * 0.5);
        structureMatrix.compose(
          position,
          quaternion,
          new THREE.Vector3(footprint, structureHeight, footprint * lerp(0.82, 1.34, random())),
        );
        const structureColor = baseColor.clone()
          .lerp(new THREE.Color(0xf5d48a), anchor.hasSlides ? 0.34 : 0.12)
          .multiplyScalar(lerp(0.94, 1.28, random()));
        this.settlementMesh.setMatrixAt(structureIndex, structureMatrix);
        this.settlementMesh.setColorAt(structureIndex, structureColor);
        structureIndex += 1;
      }
    });

    this.settlementPadMesh.count = padIndex;
    this.settlementMesh.count = structureIndex;
    this.settlementSpireMesh.count = spireIndex;
    this.settlementBeaconMesh.count = beaconIndex;
    this.settlementPadMesh.instanceMatrix.needsUpdate = true;
    this.settlementMesh.instanceMatrix.needsUpdate = true;
    this.settlementSpireMesh.instanceMatrix.needsUpdate = true;
    this.settlementBeaconMesh.instanceMatrix.needsUpdate = true;
    if (this.settlementPadMesh.instanceColor) this.settlementPadMesh.instanceColor.needsUpdate = true;
    if (this.settlementMesh.instanceColor) this.settlementMesh.instanceColor.needsUpdate = true;
    if (this.settlementSpireMesh.instanceColor) this.settlementSpireMesh.instanceColor.needsUpdate = true;
    if (this.settlementBeaconMesh.instanceColor) this.settlementBeaconMesh.instanceColor.needsUpdate = true;
    this.stats.settlementPads = padIndex;
    this.stats.settlementStructures = structureIndex;
    this.stats.settlementSpires = spireIndex;
    this.stats.settlementBeacons = beaconIndex;
  }

  rebuildRouteTraces(centerUnit, east, north) {
    const positionAttribute = this.routeTraceGeometry.getAttribute('position');
    const colorAttribute = this.routeTraceGeometry.getAttribute('color');
    const routeLimit = Math.max(1, Math.floor(this.planet.config.surfaceRouteTraceRouteCount));
    const sampleStep = THREE.MathUtils.degToRad(Math.max(0.8, this.planet.config.surfaceRouteTraceSampleStepDegrees));
    const half = this.patchSize * 0.54;
    const centerPoint = centerUnit.clone().multiplyScalar(this.radius);
    const patchAngularRadius = Math.atan2(half, this.radius) * 1.18;
    const markerMatrix = new THREE.Matrix4();
    const markerQuaternion = new THREE.Quaternion();
    let segmentIndex = 0;
    let markerIndex = 0;

    const localPoint = (unit) => {
      const relative = unit.clone().multiplyScalar(this.radius).sub(centerPoint);
      return {
        x: relative.dot(east),
        y: relative.dot(north),
      };
    };
    const insidePatch = ({ x, y }) => Math.abs(x) <= half && Math.abs(y) <= half;
    const colorByKind = {
      arrow: [1.0, 0.64, 0.32],
      dashed: [0.72, 0.76, 0.62],
      tunnel: [0.38, 0.62, 0.82],
      normal: [0.72, 0.60, 0.36],
    };
    const addTrace = (aUnit, bUnit, route) => {
      if (segmentIndex >= this.routeTraceSegmentLimit) return;
      const aLocal = localPoint(aUnit);
      const bLocal = localPoint(bUnit);
      if (!insidePatch(aLocal) && !insidePatch(bLocal)) return;
      const aEdge = Math.max(Math.abs(aLocal.x) / half, Math.abs(aLocal.y) / half);
      const bEdge = Math.max(Math.abs(bLocal.x) / half, Math.abs(bLocal.y) / half);
      const aFade = smoothstep(1, 0.34, aEdge);
      const bFade = smoothstep(1, 0.34, bEdge);
      if (Math.max(aFade, bFade) <= 0.02) return;

      const aSurface = this.planet.sampleSurfaceUnit(aUnit);
      const bSurface = this.planet.sampleSurfaceUnit(bUnit);
      if (aSurface.waterDepth > 0.012 || bSurface.waterDepth > 0.012) return;

      const roadLift = 0.03 + route.score * 0.006;
      const start = aUnit.clone().multiplyScalar(this.radius + aSurface.elevation + roadLift);
      const end = bUnit.clone().multiplyScalar(this.radius + bSurface.elevation + roadLift);
      const direction = end.clone().sub(start);
      if (direction.lengthSq() < 1e-8) return;
      direction.normalize();
      const normal = aUnit.clone().add(bUnit).normalize();
      const side = new THREE.Vector3().crossVectors(normal, direction);
      if (side.lengthSq() < 1e-8) return;
      side.normalize().multiplyScalar(0.001 + route.score * 0.00135);
      const startLeft = start.clone().add(side);
      const startRight = start.clone().sub(side);
      const endLeft = end.clone().add(side);
      const endRight = end.clone().sub(side);
      const baseColor = colorByKind[route.kind] || colorByKind.normal;
      const brightness = lerp(0.34, 0.58, route.score);
      const offset = segmentIndex * 6;
      const vertices = [
        { position: startLeft, fade: aFade },
        { position: endLeft, fade: bFade },
        { position: startRight, fade: aFade },
        { position: startRight, fade: aFade },
        { position: endLeft, fade: bFade },
        { position: endRight, fade: bFade },
      ];

      vertices.forEach(({ position, fade }, vertexIndex) => {
        const edgeBrightness = brightness * lerp(0.18, 1, fade);
        positionAttribute.setXYZ(offset + vertexIndex, position.x, position.y, position.z);
        colorAttribute.setXYZ(
          offset + vertexIndex,
          clamp01(baseColor[0] * edgeBrightness),
          clamp01(baseColor[1] * edgeBrightness),
          clamp01(baseColor[2] * edgeBrightness),
        );
      });

      if (markerIndex < this.routeMarkerLimit && Math.min(aFade, bFade) > 0.08) {
        const midUnit = aUnit.clone().add(bUnit).normalize();
        const midSurface = this.planet.sampleSurfaceUnit(midUnit);
        if (midSurface.waterDepth <= 0.012) {
          const markerScale = lerp(0.0034, 0.0084, route.score) * lerp(0.62, 1, Math.min(aFade, bFade));
          const markerPosition = midUnit.clone().multiplyScalar(
            this.radius + midSurface.elevation + roadLift + markerScale * 1.8,
          );
          const markerColor = new THREE.Color(baseColor[0], baseColor[1], baseColor[2])
            .lerp(new THREE.Color(0xffe2a0), route.kind === 'arrow' ? 0.34 : 0.18)
            .multiplyScalar(lerp(0.86, 1.24, route.score));
          markerMatrix.compose(
            markerPosition,
            markerQuaternion,
            new THREE.Vector3(markerScale, markerScale, markerScale),
          );
          this.routeMarkerMesh.setMatrixAt(markerIndex, markerMatrix);
          this.routeMarkerMesh.setColorAt(markerIndex, markerColor);
          markerIndex += 1;
        }
      }
      segmentIndex += 1;
    };

    const localRoutes = this.planet.semanticWorldMap.routes
      .map((route) => {
        let minAngle = Infinity;
        for (let i = 0; i <= 8; i++) {
          minAngle = Math.min(
            minAngle,
            centerUnit.angleTo(slerpUnitVectors(route.startUnit, route.endUnit, i / 8)),
          );
        }
        return { route, minAngle };
      })
      .filter(({ minAngle }) => minAngle <= patchAngularRadius + sampleStep)
      .sort((a, b) => (a.minAngle - a.route.score * 0.035) - (b.minAngle - b.route.score * 0.035))
      .slice(0, routeLimit);

    localRoutes.forEach(({ route }) => {
      const segments = clamp(Math.ceil(route.totalAngle / sampleStep), 4, 96);
      const endpointPadding = clamp(THREE.MathUtils.degToRad(3.8) / Math.max(route.totalAngle, 1e-4), 0.025, 0.12);
      for (let i = 0; i < segments; i++) {
        const startT = i / segments;
        const endT = (i + 1) / segments;
        if (startT < endpointPadding || endT > 1 - endpointPadding) continue;
        const aUnit = slerpUnitVectors(route.startUnit, route.endUnit, startT);
        const bUnit = slerpUnitVectors(route.startUnit, route.endUnit, endT);
        addTrace(aUnit, bUnit, route);
      }
    });

    this.routeTraceMesh.visible = segmentIndex > 0;
    this.routeMarkerMesh.visible = markerIndex > 0;
    this.routeMarkerMesh.count = markerIndex;
    this.routeTraceGeometry.setDrawRange(0, segmentIndex * 6);
    positionAttribute.needsUpdate = true;
    colorAttribute.needsUpdate = true;
    this.routeMarkerMesh.instanceMatrix.needsUpdate = true;
    if (this.routeMarkerMesh.instanceColor) this.routeMarkerMesh.instanceColor.needsUpdate = true;
    this.routeTraceGeometry.computeBoundingSphere();
    this.stats.routeTraces = segmentIndex;
    this.stats.routeMarkers = markerIndex;
  }

  rebuildTerrainStrokes(centerUnit, east, north) {
    const positionAttribute = this.terrainStrokeGeometry.getAttribute('position');
    const colorAttribute = this.terrainStrokeGeometry.getAttribute('color');
    const half = this.patchSize * 0.48;
    const center = latLngFromUnit(centerUnit);
    const centerPoint = centerUnit.clone().multiplyScalar(this.radius);
    const angularRadiusDegrees = THREE.MathUtils.radToDeg(Math.atan2(half * 1.06, this.radius));
    const cellDegrees = 0.36;
    const lngScale = Math.max(0.18, Math.cos(THREE.MathUtils.degToRad(center.lat)));
    const latMinIndex = Math.floor(clamp(center.lat - angularRadiusDegrees, -88, 88) / cellDegrees) - 1;
    const latMaxIndex = Math.ceil(clamp(center.lat + angularRadiusDegrees, -88, 88) / cellDegrees) + 1;
    const lngSpan = angularRadiusDegrees / lngScale;
    const lngCenterIndex = Math.floor((center.lng + 180) / cellDegrees);
    const lngMinIndex = lngCenterIndex - Math.ceil(lngSpan / cellDegrees) - 1;
    const lngMaxIndex = lngCenterIndex + Math.ceil(lngSpan / cellDegrees) + 1;
    const lngModulo = Math.ceil(360 / cellDegrees);
    let segmentIndex = 0;

    const surfacePoint = (unit, lift = 0.019) => {
      const surface = this.planet.sampleSurfaceUnit(unit);
      return {
        surface,
        position: unit.clone().multiplyScalar(this.radius + surface.elevation + lift),
      };
    };
    const localPoint = (unit) => {
      const relative = unit.clone().multiplyScalar(this.radius).sub(centerPoint);
      return {
        x: relative.dot(east),
        y: relative.dot(north),
      };
    };
    const addStroke = (aUnit, bUnit, color) => {
      if (segmentIndex >= this.terrainStrokeLimit) return;
      const a = surfacePoint(aUnit);
      const b = surfacePoint(bUnit);
      const offset = segmentIndex * 2;
      positionAttribute.setXYZ(offset, a.position.x, a.position.y, a.position.z);
      positionAttribute.setXYZ(offset + 1, b.position.x, b.position.y, b.position.z);
      colorAttribute.setXYZ(offset, color.r, color.g, color.b);
      colorAttribute.setXYZ(offset + 1, color.r, color.g, color.b);
      segmentIndex += 1;
    };

    for (let latIndex = latMinIndex; latIndex <= latMaxIndex; latIndex++) {
      for (let lngIndex = lngMinIndex; lngIndex <= lngMaxIndex; lngIndex++) {
        if (segmentIndex >= this.terrainStrokeLimit) break;
        const wrappedLngIndex = ((lngIndex % lngModulo) + lngModulo) % lngModulo;
        const seedKey = `${this.planet.config.seed}:surface-stroke-cell:${latIndex}:${wrappedLngIndex}`;
        const random = seededRandom(seedKey);
        if (random() > 0.42) continue;
        const lat = clamp((latIndex + random()) * cellDegrees, -88, 88);
        const lng = wrapLng(-180 + (wrappedLngIndex + random()) * cellDegrees);
        const unit = unitFromLatLng(lat, lng);
        const local = localPoint(unit);
        const localX = local.x;
        const localY = local.y;
        if (Math.abs(localX) > half || Math.abs(localY) > half) continue;
        const edge = Math.max(Math.abs(localX) / half, Math.abs(localY) / half);
        const edgeFade = smoothstep(1, 0.56, edge);
        if (edgeFade <= 0.02) continue;

        const { surface } = surfacePoint(unit);
        if (surface.slope > 0.92) continue;

        const ridge = Math.abs(fbm3(unit, 68, this.planet.seed + 11903, 4) * 2 - 1);
        const grain = fbm3(unit, 118, this.planet.seed + 12047, 3);
        const shore = surface.coast * smoothstep(0.08, 0.44, surface.waterScore + surface.coast * 0.4);
        const route = surface.routeInfluence;
        const settlement = surface.settlementSuitability;
        const strokeScore = Math.max(
          smoothstep(0.63, 0.9, ridge) * 0.78,
          shore * 0.72,
          route * 0.62,
          settlement * 0.2,
        ) * edgeFade;
        if (strokeScore < 0.18 || random() > strokeScore + 0.04) continue;

        const orientation = fbm3(unit, 22, this.planet.seed + 12197, 3) * Math.PI * 2;
        const shoreTurn = shore > 0.18 ? Math.PI * 0.5 : 0;
        const length = lerp(0.009, 0.036, random()) * lerp(0.58, 1.08, strokeScore);
        const strokeBasis = tangentBasisFromUnit(unit);
        const strokeDirection = strokeBasis.east
          .clone()
          .multiplyScalar(Math.cos(orientation + shoreTurn))
          .add(strokeBasis.north.clone().multiplyScalar(Math.sin(orientation + shoreTurn)))
          .normalize();
        const aUnit = unit.clone()
          .multiplyScalar(this.radius)
          .add(strokeDirection.clone().multiplyScalar(-length * 0.5))
          .normalize();
        const bUnit = unit.clone()
          .multiplyScalar(this.radius)
          .add(strokeDirection.clone().multiplyScalar(length * 0.5))
          .normalize();
        const aLocal = localPoint(aUnit);
        const bLocal = localPoint(bUnit);
        if (
          Math.abs(aLocal.x) > half ||
          Math.abs(aLocal.y) > half ||
          Math.abs(bLocal.x) > half ||
          Math.abs(bLocal.y) > half
        ) {
          continue;
        }

        const base = surface.color.clone();
        const color = base
          .lerp(new THREE.Color(0xc9ad69), route * 0.22 + settlement * 0.08)
          .lerp(new THREE.Color(0x5d9faa), shore * 0.34)
          .lerp(new THREE.Color(0x27231a), ridge * 0.28 * (1 - shore))
          .multiplyScalar(lerp(0.46, 0.96, grain) * lerp(0.5, 0.92, edgeFade));
        addStroke(aUnit, bUnit, color);
      }
    }

    this.terrainStrokeMesh.visible = segmentIndex > 0;
    this.terrainStrokeGeometry.setDrawRange(0, segmentIndex * 2);
    positionAttribute.needsUpdate = true;
    colorAttribute.needsUpdate = true;
    this.terrainStrokeGeometry.computeBoundingSphere();
    this.stats.terrainStrokes = segmentIndex;
  }

  rebuildHorizonHaze(centerUnit, east, north) {
    const positionAttribute = this.hazeGeometry.getAttribute('position');
    const colorAttribute = this.hazeGeometry.getAttribute('color');
    const half = this.patchSize * 0.52;
    const hazeLift = 0.055;
    let segmentIndex = 0;

    const samplePoint = (localX, localY, lift = hazeLift) => {
      const unit = centerUnit.clone()
        .multiplyScalar(this.radius)
        .add(east.clone().multiplyScalar(localX))
        .add(north.clone().multiplyScalar(localY))
        .normalize();
      const surface = this.planet.sampleSurfaceUnit(unit);
      return {
        unit,
        surface,
        position: unit.clone().multiplyScalar(this.radius + surface.elevation + lift),
      };
    };

    const addHazeSegment = (a, b) => {
      if (segmentIndex >= this.hazeSegmentLimit) return;
      const lowerA = samplePoint(a.x, a.y, hazeLift);
      const lowerB = samplePoint(b.x, b.y, hazeLift);
      const waterMix = clamp01((lowerA.surface.waterScore + lowerB.surface.waterScore) * 0.5);
      const settlementGlow = clamp01(
        (lowerA.surface.settlementSuitability + lowerB.surface.settlementSuitability) * 0.5,
      );
      const rimColor = new THREE.Color(0x6b5b3f)
        .lerp(new THREE.Color(0x3a7b8a), waterMix * 0.62)
        .lerp(new THREE.Color(0xe1aa64), settlementGlow * 0.22)
        .lerp(new THREE.Color(0x9ebfdd), 0.28)
        .multiplyScalar(0.54);
      const vertexOffset = segmentIndex * 2;
      const vertices = [
        { position: lowerA.position, color: rimColor },
        { position: lowerB.position, color: rimColor },
      ];

      vertices.forEach(({ position, color }, vertexIndex) => {
        positionAttribute.setXYZ(vertexOffset + vertexIndex, position.x, position.y, position.z);
        colorAttribute.setXYZ(vertexOffset + vertexIndex, color.r, color.g, color.b);
      });
      segmentIndex += 1;
    };

    for (let i = 0; i < this.segments; i++) {
      const a = -half + (i / this.segments) * this.patchSize;
      const b = -half + ((i + 1) / this.segments) * this.patchSize;
      addHazeSegment({ x: a, y: -half }, { x: b, y: -half });
      addHazeSegment({ x: a, y: half }, { x: b, y: half });
      addHazeSegment({ x: -half, y: a }, { x: -half, y: b });
      addHazeSegment({ x: half, y: a }, { x: half, y: b });
    }

    this.hazeMesh.visible = segmentIndex > 0;
    this.hazeGeometry.setDrawRange(0, segmentIndex * 2);
    positionAttribute.needsUpdate = true;
    colorAttribute.needsUpdate = true;
    this.hazeGeometry.computeBoundingSphere();
    this.stats.hazeSegments = segmentIndex;
  }

  rebuildProps(centerUnit, east, north) {
    const center = latLngFromUnit(centerUnit);
    const half = this.patchSize * 0.43;
    const centerPoint = centerUnit.clone().multiplyScalar(this.radius);
    const angularRadiusDegrees = THREE.MathUtils.radToDeg(Math.atan2(half * 1.08, this.radius));
    const cellDegrees = 0.62;
    const lngScale = Math.max(0.18, Math.cos(THREE.MathUtils.degToRad(center.lat)));
    const latMinIndex = Math.floor(clamp(center.lat - angularRadiusDegrees, -88, 88) / cellDegrees) - 1;
    const latMaxIndex = Math.ceil(clamp(center.lat + angularRadiusDegrees, -88, 88) / cellDegrees) + 1;
    const lngSpan = angularRadiusDegrees / lngScale;
    const lngCenterIndex = Math.floor((center.lng + 180) / cellDegrees);
    const lngMinIndex = lngCenterIndex - Math.ceil(lngSpan / cellDegrees) - 1;
    const lngMaxIndex = lngCenterIndex + Math.ceil(lngSpan / cellDegrees) + 1;
    let rockIndex = 0;
    let plantIndex = 0;
    const candidates = [];
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();

    const localPoint = (unit) => {
      const relative = unit.clone().multiplyScalar(this.radius).sub(centerPoint);
      return {
        x: relative.dot(east),
        y: relative.dot(north),
      };
    };

    const placeProp = ({ unit, surface, edgeFade, seedKey }) => {
      if (rockIndex + plantIndex >= this.propCount) return;
      const random = seededRandom(`${seedKey}:shape`);
      const { east: localEast, north: localNorth } = tangentBasisFromUnit(unit);
      const frame = getSurfaceFrame(
        unit,
        localEast.clone().multiplyScalar(random() - 0.5).add(localNorth.clone().multiplyScalar(random() - 0.5)),
      );
      quaternion.setFromRotationMatrix(frame);
      const plantBiome = [BIOME.gut, BIOME.heart, BIOME.practice, BIOME.neutral].includes(surface.biomeId);
      const nearSettlement = surface.settlementSuitability > 0.62;
      const plantChance = plantBiome ? (nearSettlement ? 0.34 : 0.58) : 0.2;
      const isPlant = random() < plantChance;
      const terrainColor = surface.color.clone();

      if (isPlant && plantIndex < this.propCount) {
        const height = lerp(0.012, 0.036, random()) * (nearSettlement ? 0.78 : 1) * lerp(0.72, 1, edgeFade);
        const width = height * lerp(0.18, 0.32, random());
        const position = unit.clone().multiplyScalar(this.radius + surface.elevation + height * 0.5 + 0.012);
        const plantBase = surface.biomeId === BIOME.gut
          ? new THREE.Color(0x755f6d)
          : surface.biomeId === BIOME.heart || surface.biomeId === BIOME.practice
            ? new THREE.Color(0x5e8d5a)
            : new THREE.Color(0x6f8450);
        const plantColor = plantBase
          .lerp(terrainColor, 0.16)
          .lerp(new THREE.Color(0xd6ba78), nearSettlement ? 0.16 : 0.04)
          .multiplyScalar(lerp(0.86, 1.28, random()) * lerp(0.74, 1, edgeFade));
        matrix.compose(position, quaternion, new THREE.Vector3(width, height, width));
        this.plantMesh.setMatrixAt(plantIndex, matrix);
        this.plantMesh.setColorAt(plantIndex, plantColor);
        plantIndex += 1;
      } else if (rockIndex < this.propCount) {
        const scale = lerp(0.006, 0.018, random()) * (surface.biomeId === BIOME.highland ? 1.25 : 1) * lerp(0.72, 1, edgeFade);
        const position = unit.clone().multiplyScalar(this.radius + surface.elevation + scale * 0.42 + 0.01);
        const rockBase = surface.biomeId === BIOME.highland || surface.biomeId === BIOME.snow
          ? new THREE.Color(0x9a978d)
          : new THREE.Color(0x7c7465);
        const rockColor = rockBase
          .lerp(terrainColor, 0.32)
          .lerp(new THREE.Color(0xc8b987), surface.slope * 0.18)
          .lerp(new THREE.Color(0xe0c080), nearSettlement ? 0.08 : 0)
          .multiplyScalar(lerp(0.86, 1.22, random()) * lerp(0.76, 1, edgeFade));
        matrix.compose(
          position,
          quaternion,
          new THREE.Vector3(scale * lerp(0.8, 1.7, random()), scale * lerp(0.35, 0.82, random()), scale),
        );
        this.rockMesh.setMatrixAt(rockIndex, matrix);
        this.rockMesh.setColorAt(rockIndex, rockColor);
        rockIndex += 1;
      }
    };

    for (let latIndex = latMinIndex; latIndex <= latMaxIndex; latIndex++) {
      for (let lngIndex = lngMinIndex; lngIndex <= lngMaxIndex; lngIndex++) {
        const wrappedLngIndex = ((lngIndex % Math.ceil(360 / cellDegrees)) + Math.ceil(360 / cellDegrees)) % Math.ceil(360 / cellDegrees);
        const cellSeed = `${this.planet.config.seed}:surface-prop-cell:${latIndex}:${wrappedLngIndex}`;
        const cellRandom = seededRandom(cellSeed);
        const candidateCount = cellRandom() > 0.68 ? 2 : 1;
        for (let candidate = 0; candidate < candidateCount; candidate++) {
          const seedKey = `${cellSeed}:${candidate}`;
          const positionRandom = seededRandom(`${seedKey}:position`);
          const lat = clamp((latIndex + positionRandom()) * cellDegrees, -88, 88);
          const lng = wrapLng(-180 + (wrappedLngIndex + positionRandom()) * cellDegrees);
          const unit = unitFromLatLng(lat, lng);
          const local = localPoint(unit);
          if (Math.abs(local.x) > half || Math.abs(local.y) > half) continue;
          const edge = Math.max(Math.abs(local.x) / half, Math.abs(local.y) / half);
          const edgeFade = smoothstep(1, 0.74, edge);
          if (edgeFade <= 0.015) continue;

          const surface = this.planet.sampleSurfaceUnit(unit);
          if (surface.waterDepth > 0.012 || surface.slope > 0.84) continue;

          candidates.push({
            unit,
            surface,
            edgeFade,
            seedKey,
            rank: seededRandom(`${seedKey}:rank`)(),
          });
        }
      }
    }

    candidates
      .sort((a, b) => b.rank - a.rank)
      .slice(0, this.propCount)
      .forEach(placeProp);

    this.rockMesh.count = rockIndex;
    this.plantMesh.count = plantIndex;
    this.rockMesh.instanceMatrix.needsUpdate = true;
    this.plantMesh.instanceMatrix.needsUpdate = true;
    if (this.rockMesh.instanceColor) this.rockMesh.instanceColor.needsUpdate = true;
    if (this.plantMesh.instanceColor) this.plantMesh.instanceColor.needsUpdate = true;
    this.stats.rocks = rockIndex;
    this.stats.plants = plantIndex;
  }

  getStats() {
    return {
      ...this.stats,
      inspectionLightVisible: Boolean(this.inspectionLight?.visible),
      inspectionLightIntensity: this.inspectionLight?.intensity ?? 0,
      surfaceFillLightVisible: Boolean(this.surfaceFillLight?.visible),
      surfaceFillLightIntensity: this.surfaceFillLight?.intensity ?? 0,
      horizonHazeOpacity: this.hazeMaterial?.opacity ?? 0,
      skyDomeVisible: Boolean(this.skyDomeMesh?.visible),
      skyDomeOpacity: this.skyDomeMaterial?.uniforms?.surfaceSkyOpacity?.value ?? 0,
      atmosphereVeilVisible: Boolean(this.atmosphereVeilMesh?.visible),
      atmosphereVeilOpacity: this.atmosphereVeilMaterial?.uniforms?.surfaceVeilOpacity?.value ?? 0,
    };
  }

  getPropSnapshot(precision = 4) {
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const readMesh = (mesh) => {
      const positions = [];
      for (let index = 0; index < mesh.count; index++) {
        mesh.getMatrixAt(index, matrix);
        position.setFromMatrixPosition(matrix);
        positions.push(`${position.x.toFixed(precision)}:${position.y.toFixed(precision)}:${position.z.toFixed(precision)}`);
      }
      return positions;
    };
    const readLineSegments = (lineSegments) => {
      const positionAttribute = lineSegments.geometry.getAttribute('position');
      const segments = [];
      for (let index = 0; index < lineSegments.geometry.drawRange.count; index += 2) {
        const a = [
          positionAttribute.getX(index).toFixed(precision),
          positionAttribute.getY(index).toFixed(precision),
          positionAttribute.getZ(index).toFixed(precision),
        ].join(':');
        const b = [
          positionAttribute.getX(index + 1).toFixed(precision),
          positionAttribute.getY(index + 1).toFixed(precision),
          positionAttribute.getZ(index + 1).toFixed(precision),
        ].join(':');
        segments.push(`${a}>${b}`);
      }
      return segments;
    };

    return {
      rocks: readMesh(this.rockMesh),
      plants: readMesh(this.plantMesh),
      terrainStrokes: readLineSegments(this.terrainStrokeMesh),
    };
  }
}

function makeTexture(data, width, height, { colorSpace = THREE.NoColorSpace } = {}) {
  const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.UnsignedByteType);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.colorSpace = colorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function createProceduralPlanet(mindmap, config = {}) {
  return new ProceduralPlanet(mindmap, config);
}
