import * as THREE from 'three';

import { convertLatLngtoCartesian, convertCartesiantoLatLng } from './mathScripts.js';
import { getConnectionTargetId } from './mindmap.js';

import diffuseMapUrl from '/assets/textures/diffuse1k.webp?url';
import normalMapUrl from '/assets/textures/normal1k.webp?url';
import roughnessMapUrl from '/assets/textures/roughness1k.webp?url';

const PLANET_RADIUS = 5;
const ROAD_SAMPLE_COUNT = 48;
const ROAD_SURFACE_OFFSET = 0.009;
const SETTLEMENT_SURFACE_OFFSET = 0.002;
const WATER_THRESHOLD = 0.74;
const FERRY_ROUTE_FRACTION_THRESHOLD = 0.42;
const DEFAULT_TERRAIN_COLOR = new THREE.Color(0x6f7352);
const DEFAULT_ROAD_COLOR = new THREE.Color(0x9e8d68);
const ROAD_TRACK_COLOR = new THREE.Color(0x5f523a);
const WATER_ROUTE_COLOR = new THREE.Color(0x8eb3b6);
const BRIDGE_COLOR = new THREE.Color(0xbdaa85);

const lightVertexShader = `
attribute vec3 surfaceNormal;
attribute float lightSize;
varying float vNight;
varying vec3 vColor;
uniform vec3 sunDirection;
uniform float pointScale;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  float side = dot(normalize(surfaceNormal), normalize(sunDirection));
  vNight = smoothstep(0.15, -0.28, side);
  vColor = color;
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = lightSize * pointScale / max(1.0, -mvPosition.z);
}
`;

const lightFragmentShader = `
varying float vNight;
varying vec3 vColor;

void main() {
  vec2 p = gl_PointCoord - vec2(0.5);
  float d = length(p);
  float alpha = smoothstep(0.5, 0.08, d) * vNight;
  gl_FragColor = vec4(vColor, alpha);
}
`;

const ribbonVertexShader = `
varying vec3 vColor;
varying vec3 vNormalWorld;
varying vec3 vWorldPosition;

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vColor = color;
  vNormalWorld = normalize(mat3(modelMatrix) * normal);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;

const ribbonFragmentShader = `
uniform float opacity;
varying vec3 vColor;
varying vec3 vNormalWorld;
varying vec3 vWorldPosition;

void main() {
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float facing = dot(normalize(vNormalWorld), viewDirection);
  float alpha = opacity * smoothstep(-0.02, 0.18, facing);
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(vColor, alpha);
}
`;

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
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

function seededRandom(seedString) {
  return mulberry32(hashString(seedString));
}

function cubicBezierValue(p0, p1, p2, p3, t) {
  const invT = 1 - t;
  return (
    invT * invT * invT * p0 +
    3 * invT * invT * t * p1 +
    3 * invT * t * t * p2 +
    t * t * t * p3
  );
}

function slerpVectors(start, end, alpha) {
  const dot = THREE.MathUtils.clamp(start.dot(end), -1, 1);
  const omega = Math.acos(dot);
  const sinOmega = Math.sin(omega);

  if (sinOmega < 1e-6) {
    return start.clone().lerp(end, alpha).normalize();
  }

  return start
    .clone()
    .multiplyScalar(Math.sin((1 - alpha) * omega) / sinOmega)
    .add(end.clone().multiplyScalar(Math.sin(alpha * omega) / sinOmega))
    .normalize();
}

function latLngToUnit(lat, lng) {
  const point = convertLatLngtoCartesian(Number(lat), Number(lng), 1);
  return new THREE.Vector3(point.x, point.y, point.z).normalize();
}

function unitToLatLng(unit) {
  return convertCartesiantoLatLng(unit.x, unit.y, unit.z);
}

function getTangentBasis(normal) {
  const reference = Math.abs(normal.y) > 0.92 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const east = new THREE.Vector3().crossVectors(reference, normal).normalize();
  const north = new THREE.Vector3().crossVectors(normal, east).normalize();
  return { east, north };
}

function getConnectionSideUnit(startUnit, endUnit) {
  const side = new THREE.Vector3().crossVectors(startUnit, endUnit);
  if (side.lengthSq() > 1e-8) return side.normalize();
  const mid = startUnit.clone().add(endUnit).normalize();
  return getTangentBasis(mid).east;
}

function getRotatedTangentAxis(east, north, angle) {
  return east.clone()
    .multiplyScalar(Math.cos(angle))
    .add(north.clone().multiplyScalar(Math.sin(angle)))
    .normalize();
}

function projectToTangent(vector, normal, fallback) {
  const projected = vector.clone().sub(normal.clone().multiplyScalar(vector.dot(normal)));
  if (projected.lengthSq() < 1e-8) return fallback.clone();
  return projected.normalize();
}

function getSurfaceFrame(normal, forward) {
  const tangentForward = projectToTangent(forward, normal, getTangentBasis(normal).north);
  const right = new THREE.Vector3().crossVectors(normal, tangentForward).normalize();
  return new THREE.Matrix4().makeBasis(right, normal, tangentForward);
}

function createHipRoofGeometry() {
  const vertices = new Float32Array([
    -0.5, -0.5, -0.5,
    0.5, -0.5, -0.5,
    0.5, -0.5, 0.5,
    -0.5, -0.5, 0.5,
    0, 0.5, -0.24,
    0, 0.5, 0.24,
  ]);
  const indices = [
    0, 4, 5,
    0, 5, 3,
    1, 2, 5,
    1, 5, 4,
    0, 1, 4,
    3, 5, 2,
  ];
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function createSettlementMaterial(color) {
  const baseColor = new THREE.Color(color);
  return new THREE.MeshStandardMaterial({
    color,
    emissive: baseColor.clone().multiplyScalar(0.12),
    emissiveIntensity: 0.045,
    roughness: 0.94,
    metalness: 0,
    side: THREE.DoubleSide,
  });
}

function getConnectionCurveValues(connectionEntry) {
  if (!connectionEntry || typeof connectionEntry !== 'object') return [0, 0];
  const raw = connectionEntry.curve || connectionEntry.handles;
  if (Array.isArray(raw)) {
    return [
      Number.isFinite(Number(raw[0])) ? Number(raw[0]) : 0,
      Number.isFinite(Number(raw[1])) ? Number(raw[1]) : 0,
    ];
  }
  if (raw && typeof raw === 'object') {
    return [
      Number.isFinite(Number(raw.start)) ? Number(raw.start) : Number(raw.a) || 0,
      Number.isFinite(Number(raw.end)) ? Number(raw.end) : Number(raw.b) || 0,
    ];
  }
  return [0, 0];
}

function routeDirection(startUnit, endUnit, sideUnit, offsetDegrees, t) {
  const baseUnit = slerpVectors(startUnit, endUnit, t);
  const offset = THREE.MathUtils.degToRad(offsetDegrees);
  return baseUnit
    .multiplyScalar(Math.cos(offset))
    .add(sideUnit.clone().multiplyScalar(Math.sin(offset)))
    .normalize();
}

async function loadImageData(url) {
  const image = new Image();
  image.decoding = 'async';
  const loadPromise = new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });
  image.src = url;
  await loadPromise;

  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth || image.width;
  canvas.height = image.naturalHeight || image.height;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.drawImage(image, 0, 0);
  return {
    width: canvas.width,
    height: canvas.height,
    data: context.getImageData(0, 0, canvas.width, canvas.height).data,
  };
}

export class TerrainSampler {
  constructor({
    diffuseUrl = diffuseMapUrl,
    normalUrl = normalMapUrl,
    roughnessUrl = roughnessMapUrl,
  } = {}) {
    this.maps = {
      diffuse: null,
      normal: null,
      roughness: null,
    };
    this.ready = this.load(diffuseUrl, normalUrl, roughnessUrl);
  }

  async load(diffuseUrl, normalUrl, roughnessUrl) {
    if (typeof document === 'undefined') return this;
    const [diffuse, normal, roughness] = await Promise.allSettled([
      loadImageData(diffuseUrl),
      loadImageData(normalUrl),
      loadImageData(roughnessUrl),
    ]);
    this.maps = {
      diffuse: diffuse.status === 'fulfilled' ? diffuse.value : null,
      normal: normal.status === 'fulfilled' ? normal.value : null,
      roughness: roughness.status === 'fulfilled' ? roughness.value : null,
    };
    if (diffuse.status === 'rejected' || normal.status === 'rejected' || roughness.status === 'rejected') {
      console.warn('Settlement terrain sampler is using fallback values because one or more texture maps failed to load.');
    }
    return this;
  }

  samplePixel(map, lat, lng) {
    if (!map) return [0, 0, 0, 255];

    const u = ((Number(lng) + 180) / 360) % 1;
    const v = THREE.MathUtils.clamp((90 - Number(lat)) / 180, 0, 0.999999);
    const x = Math.floor((u < 0 ? u + 1 : u) * map.width) % map.width;
    const y = Math.floor(v * map.height);
    const index = (y * map.width + x) * 4;
    return [
      map.data[index] / 255,
      map.data[index + 1] / 255,
      map.data[index + 2] / 255,
      map.data[index + 3] / 255,
    ];
  }

  sample(lat, lng) {
    const diffuse = this.maps.diffuse
      ? this.samplePixel(this.maps.diffuse, lat, lng)
      : [DEFAULT_TERRAIN_COLOR.r, DEFAULT_TERRAIN_COLOR.g, DEFAULT_TERRAIN_COLOR.b, 1];
    const rough = this.samplePixel(this.maps.roughness, lat, lng);
    const normal = this.maps.normal ? this.samplePixel(this.maps.normal, lat, lng) : [0.5, 0.5, 1, 1];
    const normalEast = this.maps.normal ? this.samplePixel(this.maps.normal, lat, Number(lng) + 0.35) : normal;
    const normalNorth = this.maps.normal ? this.samplePixel(this.maps.normal, Number(lat) + 0.35, lng) : normal;

    const color = new THREE.Color(diffuse[0], diffuse[1], diffuse[2]);
    const red = diffuse[0];
    const green = diffuse[1];
    const blue = diffuse[2];
    const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
    const coolBlue = blue - Math.max(red * 1.08, green * 0.72);
    const cyanLift = Math.min(blue - red * 1.12, green - red * 0.82);
    const landGreenPenalty = Math.max(0, green - blue * 1.18);
    const warmLandPenalty = Math.max(0, red - blue * 0.92);
    const roughness = this.maps.roughness ? rough[1] : 0.55;
    const normalDelta =
      Math.abs(normal[0] - normalEast[0]) +
      Math.abs(normal[1] - normalEast[1]) +
      Math.abs(normal[0] - normalNorth[0]) +
      Math.abs(normal[1] - normalNorth[1]);

    const waterScore = clamp01(
      coolBlue * 4.2 +
      cyanLift * 2.4 +
      (0.5 - roughness) * 0.32 +
      (0.34 - luminance) * 0.12 -
      landGreenPenalty * 3.3 -
      warmLandPenalty * 2.6,
    );
    const slopeScore = clamp01(normalDelta * 1.9);

    return {
      color,
      waterScore,
      roughness: clamp01(roughness),
      slopeScore,
    };
  }

  sampleUnit(unit) {
    const latLng = unitToLatLng(unit);
    return this.sample(latLng.lat, latLng.lng);
  }
}

export class SettlementMapLayer {
  constructor({
    jaranius,
    contexts,
    getSunWorldPosition,
    getCameraWorldPosition,
    terrainSampler = new TerrainSampler(),
  }) {
    this.jaranius = jaranius;
    this.contexts = contexts;
    this.getSunWorldPosition = getSunWorldPosition;
    this.getCameraWorldPosition = getCameraWorldPosition;
    this.terrainSampler = terrainSampler;
    this.root = new THREE.Object3D();
    this.root.name = 'settlement-map-layer';
    this.root.visible = false;
    this.jaranius.add(this.root);

    this.intersectObjects = [];
    this.hoveredObjects = [];
    this.closeDetailObjects = [];
    this.mediumDetailObjects = [];
    this.routeCache = new Map();
    this.built = false;
    this.dirty = true;
    this.currentDetailFactor = 1;
    this.currentMediumFactor = 1;
    this.currentCloseDetailVisible = true;
    this.currentMediumDetailVisible = true;

    this.bodyGeometry = new THREE.BoxGeometry(1, 1, 1);
    this.roofGeometry = createHipRoofGeometry();
    this.treeTrunkGeometry = new THREE.CylinderGeometry(0.45, 0.55, 1, 5);
    this.treeCanopyGeometry = new THREE.ConeGeometry(1, 1.45, 7);
    this.padGeometry = new THREE.CircleGeometry(1, 28);
    this.contactShadowGeometry = new THREE.CircleGeometry(1, 16);
    this.lightUniforms = {
      sunDirection: { value: new THREE.Vector3(0, 0, 1) },
      pointScale: { value: 40 },
    };
    this.lightMaterial = new THREE.ShaderMaterial({
      vertexShader: lightVertexShader,
      fragmentShader: lightFragmentShader,
      uniforms: this.lightUniforms,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    this.bodyMaterials = [
      createSettlementMaterial(0xb9ad98),
      createSettlementMaterial(0x9f9b8a),
      createSettlementMaterial(0xa99378),
      createSettlementMaterial(0x8f8475),
      createSettlementMaterial(0xb6a48c),
      createSettlementMaterial(0x7f7568),
    ];
    this.roofMaterials = [
      createSettlementMaterial(0x8f4f32),
      createSettlementMaterial(0x5f625d),
      createSettlementMaterial(0xa2804b),
      createSettlementMaterial(0x4d554f),
      createSettlementMaterial(0x7c583d),
      createSettlementMaterial(0xb56c45),
    ];
    this.treeTrunkMaterial = createSettlementMaterial(0x5f4a32);
    this.treeCanopyMaterials = [
      createSettlementMaterial(0x4f6d45),
      createSettlementMaterial(0x647d4a),
      createSettlementMaterial(0x3f5e3d),
    ];
    this.contactShadowMaterial = new THREE.MeshBasicMaterial({
      color: 0x17120c,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    this.roadShoulderMaterial = this.createRibbonMaterial(0.16);
    this.roadCoreMaterial = this.createRibbonMaterial(0.34);
    this.roadTrackMaterial = this.createRibbonMaterial(0.18);
    this.bridgeMaterial = this.createRibbonMaterial(0.62);
    this.waterRouteMaterial = this.createRibbonMaterial(0.46);
    this.settlementStreetMaterial = this.createRibbonMaterial(0.38);
  }

  createRibbonMaterial(opacity) {
    const material = new THREE.ShaderMaterial({
      vertexShader: ribbonVertexShader,
      fragmentShader: ribbonFragmentShader,
      uniforms: {
        opacity: { value: opacity },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      vertexColors: true,
      side: THREE.DoubleSide,
    });
    material.userData.baseOpacity = opacity;
    return material;
  }

  async ensureBuilt() {
    if (this.built && !this.dirty) return;
    await this.terrainSampler.ready;
    this.clear();
    this.buildSettlements();
    this.buildRoads();
    this.built = true;
    this.dirty = false;
  }

  markDirty() {
    this.dirty = true;
  }

  async setVisible(visible) {
    if (visible) await this.ensureBuilt();
    this.root.visible = visible;
  }

  isVisible() {
    return this.root.visible;
  }

  clear() {
    this.hoveredObjects.length = 0;
    this.intersectObjects.length = 0;
    this.closeDetailObjects.length = 0;
    this.mediumDetailObjects.length = 0;
    this.root.children.slice().forEach((child) => {
      this.root.remove(child);
      this.disposeObject(child);
    });
  }

  dispose() {
    this.clear();
    if (this.root.parent) this.root.parent.remove(this.root);
    this.bodyGeometry.dispose();
    this.roofGeometry.dispose();
    this.treeTrunkGeometry.dispose();
    this.treeCanopyGeometry.dispose();
    this.padGeometry.dispose();
    this.contactShadowGeometry.dispose();
    this.lightMaterial.dispose();
    this.bodyMaterials.forEach((material) => material.dispose());
    this.roofMaterials.forEach((material) => material.dispose());
    this.treeTrunkMaterial.dispose();
    this.treeCanopyMaterials.forEach((material) => material.dispose());
    this.contactShadowMaterial.dispose();
    this.roadShoulderMaterial.dispose();
    this.roadCoreMaterial.dispose();
    this.roadTrackMaterial.dispose();
    this.bridgeMaterial.dispose();
    this.waterRouteMaterial.dispose();
    this.settlementStreetMaterial.dispose();
  }

  disposeObject(object) {
    object.traverse((child) => {
      if (child.geometry && ![
        this.bodyGeometry,
        this.roofGeometry,
        this.treeTrunkGeometry,
        this.treeCanopyGeometry,
        this.padGeometry,
        this.contactShadowGeometry,
      ].includes(child.geometry)) {
        child.geometry.dispose();
      }
      const sharedMaterials = [
        this.lightMaterial,
        this.roadShoulderMaterial,
        this.roadCoreMaterial,
        this.roadTrackMaterial,
        this.bridgeMaterial,
        this.waterRouteMaterial,
        this.settlementStreetMaterial,
        this.treeTrunkMaterial,
        this.contactShadowMaterial,
        ...this.bodyMaterials,
        ...this.roofMaterials,
        ...this.treeCanopyMaterials,
      ];
      if (child.material && !sharedMaterials.includes(child.material)) {
        child.material.dispose?.();
      }
    });
  }

  buildSettlementRouteShapes(ctx) {
    const nodeById = new Map(ctx.tagData.map((node) => [node.id, node]));
    const accumulators = new Map();

    const addAxis = (source, target) => {
      const sourceUnit = latLngToUnit(source.lat, source.lng);
      const targetUnit = latLngToUnit(target.lat, target.lng);
      const tangent = projectToTangent(targetUnit, sourceUnit, getTangentBasis(sourceUnit).north);
      if (tangent.lengthSq() < 1e-8) return;

      const { east, north } = getTangentBasis(sourceUnit);
      const angle = Math.atan2(tangent.dot(north), tangent.dot(east));
      if (!accumulators.has(source.id)) {
        accumulators.set(source.id, {
          unit: sourceUnit,
          east,
          north,
          cos2: 0,
          sin2: 0,
          count: 0,
        });
      }
      const item = accumulators.get(source.id);
      item.cos2 += Math.cos(angle * 2);
      item.sin2 += Math.sin(angle * 2);
      item.count += 1;
    };

    const scanRows = (rows) => {
      if (!Array.isArray(rows)) return;
      rows.forEach((row) => {
        if (!Array.isArray(row) || row.length < 2) return;
        const source = nodeById.get(row[0]);
        if (!source) return;
        row.slice(1).forEach((entry) => {
          const target = nodeById.get(getConnectionTargetId(entry));
          if (!target) return;
          addAxis(source, target);
          addAxis(target, source);
        });
      });
    };

    scanRows(ctx.connectionData);
    scanRows(ctx.arrowConnectionData);
    scanRows(ctx.dashedConnectionData);

    const shapes = new Map();
    accumulators.forEach((item, id) => {
      const strength = Math.sqrt(item.cos2 * item.cos2 + item.sin2 * item.sin2);
      const alignment = item.count > 0 ? clamp01(strength / item.count) : 0;
      const angle = 0.5 * Math.atan2(item.sin2, item.cos2);
      shapes.set(id, {
        mainAxis: item.east.clone().multiplyScalar(Math.cos(angle))
          .add(item.north.clone().multiplyScalar(Math.sin(angle)))
          .normalize(),
        alignment,
        count: item.count,
      });
    });
    return shapes;
  }

  shapeSettlementSpec(settlement, routeShape, seed) {
    const countFactor = clamp01((routeShape?.count || 0) / 6);
    const alignment = routeShape?.alignment || 0;
    const maxAspect = settlement.type === 'city' ? 1.95 : settlement.type === 'town' ? 1.68 : 1.34;
    const aspect = routeShape
      ? lerp(1.12, maxAspect, clamp01(alignment * 0.68 + countFactor * 0.32))
      : lerp(1.04, settlement.type === 'city' ? 1.22 : 1.12, seed());
    return {
      ...settlement,
      aspect,
      alongRadius: settlement.radius * aspect,
      crossRadius: settlement.radius * lerp(0.68, 0.86, 1 - alignment),
      routeAlignment: alignment,
    };
  }

  buildSettlements() {
    const ctx = this.contexts[0];
    if (!ctx?.tagData) return;
    const routeShapes = this.buildSettlementRouteShapes(ctx);

    const bodyItems = this.bodyMaterials.map(() => []);
    const roofItems = this.roofMaterials.map(() => []);
    const contactShadowItems = [];
    const treeTrunkItems = [];
    const treeCanopyItems = this.treeCanopyMaterials.map(() => []);
    const lightPositions = [];
    const lightNormals = [];
    const lightColors = [];
    const lightSizes = [];

    ctx.tagData.forEach((node, index) => {
      const unit = latLngToUnit(node.lat, node.lng);
      const sample = this.terrainSampler.sample(node.lat, node.lng);
      const settlementBase = this.getSettlementSpec(node);
      const center = unit.clone().multiplyScalar(PLANET_RADIUS + SETTLEMENT_SURFACE_OFFSET);
      const { east, north } = getTangentBasis(unit);
      const seed = seededRandom(node.id);
      const routeShape = routeShapes.get(node.id);
      const settlement = this.shapeSettlementSpec(settlementBase, routeShape, seed);
      const mainAxis = routeShape?.mainAxis || getRotatedTangentAxis(east, north, seed() * Math.PI * 2);
      const crossAxis = new THREE.Vector3().crossVectors(unit, mainAxis).normalize();

      const padMaterial = new THREE.MeshBasicMaterial({
        color: sample.color.clone().lerp(new THREE.Color(0xb7aa82), 0.18),
        transparent: true,
        opacity: 0.18,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
        toneMapped: false,
      });
      const pad = new THREE.Mesh(this.padGeometry, padMaterial);
      pad.name = `settlement-hit-${node.id}`;
      pad.position.copy(center);
      pad.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(mainAxis, crossAxis, unit));
      pad.scale.set(settlement.alongRadius, settlement.crossRadius, 1);
      pad.source = ctx.tagData;
      pad.context = 0;
      pad.index = index;
      pad.userData.settlementPad = true;
      pad.userData.baseScale = new THREE.Vector3(settlement.alongRadius, settlement.crossRadius, 1);
      this.root.add(pad);
      this.intersectObjects.push(pad);
      this.addSettlementStreets(unit, settlement, mainAxis, crossAxis, sample);
      this.addSettlementTrees(unit, settlement, seed, mainAxis, crossAxis, treeTrunkItems, treeCanopyItems);

      for (let i = 0; i < settlement.buildingCount; i++) {
        const placement = this.getBuildingPlacement(i, settlement, seed, mainAxis, crossAxis);
        const buildingUnit = unit.clone().multiplyScalar(PLANET_RADIUS).add(placement.local).normalize();
        const surfacePosition = buildingUnit.clone().multiplyScalar(PLANET_RADIUS + SETTLEMENT_SURFACE_OFFSET);
        const landmarkBoost = settlement.type === 'city' && i === 0 ? 1.18 : settlement.type === 'town' && i === 0 ? 1.1 : 1;
        const along = placement.local.dot(mainAxis) / Math.max(settlement.alongRadius, 0.001);
        const across = placement.local.dot(crossAxis) / Math.max(settlement.crossRadius, 0.001);
        const distanceFromCenter = Math.sqrt(along * along + across * across);
        const densityScale = lerp(1.04, 0.66, clamp01(distanceFromCenter));
        const footprint = settlement.footprint * landmarkBoost * densityScale * lerp(0.46, 1.42, seed());
        const depth = settlement.footprint * landmarkBoost * densityScale * lerp(0.48, 1.76, seed());
        const height = settlement.height * landmarkBoost * lerp(0.34, settlement.type === 'city' ? 1.28 : 1.12, seed());
        const forward = projectToTangent(
          placement.forward.clone().applyAxisAngle(unit, placement.rotationJitter),
          buildingUnit,
          mainAxis,
        );
        const quaternion = new THREE.Quaternion().setFromRotationMatrix(getSurfaceFrame(buildingUnit, forward));
        const bodyPosition = surfacePosition.clone().add(buildingUnit.clone().multiplyScalar(height * 0.5));
        const bodyMatrix = new THREE.Matrix4().compose(
          bodyPosition,
          quaternion,
          new THREE.Vector3(footprint, height, depth),
        );
        const bodyVariant = this.getBodyMaterialIndex(settlement, seed);
        bodyItems[bodyVariant].push({ matrix: bodyMatrix });

        const shadowQuaternion = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(
          forward.clone().cross(buildingUnit).normalize(),
          forward.clone(),
          buildingUnit,
        ));
        const shadowMatrix = new THREE.Matrix4().compose(
          buildingUnit.clone().multiplyScalar(PLANET_RADIUS + 0.0025),
          shadowQuaternion,
          new THREE.Vector3(footprint * 1.65, depth * 1.45, 1),
        );
        contactShadowItems.push({ matrix: shadowMatrix });

        const roofHeight = Math.max(footprint, depth) * 0.24;
        const roofPosition = surfacePosition.clone().add(buildingUnit.clone().multiplyScalar(height + roofHeight * 0.5));
        const roofMatrix = new THREE.Matrix4().compose(
          roofPosition,
          quaternion,
          new THREE.Vector3(footprint * 1.28, roofHeight, depth * 1.28),
        );
        const roofVariant = this.getRoofMaterialIndex(settlement, seed);
        roofItems[roofVariant].push({ matrix: roofMatrix });

        if (i % 2 === 0 || settlement.type !== 'village') {
          const windowPosition = surfacePosition.clone().add(buildingUnit.clone().multiplyScalar(height * 0.72));
          const windowColor = new THREE.Color().setHSL(0.08 + seed() * 0.04, 0.82, 0.62 + seed() * 0.1);
          lightPositions.push(windowPosition.x, windowPosition.y, windowPosition.z);
          lightNormals.push(buildingUnit.x, buildingUnit.y, buildingUnit.z);
          lightColors.push(windowColor.r, windowColor.g, windowColor.b);
          lightSizes.push(settlement.type === 'city' ? 0.32 : settlement.type === 'town' ? 0.26 : 0.2);
        }
      }
    });

    bodyItems.forEach((items, index) => {
      this.addInstancedMesh(this.bodyGeometry, this.bodyMaterials[index], items, `settlement-building-bodies-${index}`, { lod: 'close' });
    });
    roofItems.forEach((items, index) => {
      this.addInstancedMesh(this.roofGeometry, this.roofMaterials[index], items, `settlement-building-roofs-${index}`, { lod: 'close' });
    });
    this.addInstancedMesh(this.treeTrunkGeometry, this.treeTrunkMaterial, treeTrunkItems, 'settlement-tree-trunks', { lod: 'close' });
    treeCanopyItems.forEach((items, index) => {
      this.addInstancedMesh(this.treeCanopyGeometry, this.treeCanopyMaterials[index], items, `settlement-tree-canopies-${index}`, { lod: 'close' });
    });
    this.addInstancedMesh(
      this.contactShadowGeometry,
      this.contactShadowMaterial,
      contactShadowItems,
      'settlement-contact-shadows',
      { castShadow: false, receiveShadow: false, renderOrder: 13, lod: 'close' },
    );
    this.addLightPoints(lightPositions, lightNormals, lightColors, lightSizes, 'settlement-window-lights', 'close');
  }

  getBodyMaterialIndex(settlement, seed) {
    if (settlement.type === 'city' && seed() < 0.38) return 2;
    if (settlement.type === 'village' && seed() < 0.45) return 3;
    return Math.floor(seed() * this.bodyMaterials.length) % this.bodyMaterials.length;
  }

  getRoofMaterialIndex(settlement, seed) {
    if (settlement.type === 'village' && seed() < 0.45) return 2;
    if (settlement.type === 'city' && seed() < 0.38) return 3;
    return Math.floor(seed() * this.roofMaterials.length) % this.roofMaterials.length;
  }

  addSettlementStreets(unit, settlement, mainAxis, crossAxis, sample) {
    const color = sample.color.clone().lerp(DEFAULT_ROAD_COLOR, settlement.type === 'village' ? 0.38 : 0.52);
    const width = settlement.type === 'city' ? 0.0032 : settlement.type === 'town' ? 0.0025 : 0.0018;
    const streetSpecs = [];

    const makePoint = (along, across = 0, bend = 0) => {
      return mainAxis.clone().multiplyScalar(along)
        .add(crossAxis.clone().multiplyScalar(across + bend));
    };

    const mainLength = settlement.alongRadius * (settlement.type === 'village' ? 0.82 : 0.94);
    const bendScale = settlement.crossRadius * (settlement.type === 'village' ? 0.06 : 0.045);
    streetSpecs.push([
      makePoint(-mainLength, 0, -bendScale * 0.35),
      makePoint(-mainLength * 0.34, 0, bendScale),
      makePoint(mainLength * 0.34, 0, -bendScale),
      makePoint(mainLength, 0, bendScale * 0.35),
    ]);

    if (settlement.type !== 'village') {
      const crossCount = settlement.type === 'city' ? 4 : 2;
      for (let i = 0; i < crossCount; i++) {
        const t = crossCount === 1 ? 0 : i / (crossCount - 1) * 2 - 1;
        const along = t * settlement.alongRadius * (settlement.type === 'city' ? 0.48 : 0.38);
        const length = settlement.crossRadius * (settlement.type === 'city' ? 0.76 : 0.56) * (1 - Math.abs(t) * 0.18);
        streetSpecs.push([
          makePoint(along, -length),
          makePoint(along + settlement.alongRadius * 0.025 * t, 0),
          makePoint(along, length),
        ]);
      }
    }

    if (settlement.type === 'city') {
      const ring = [];
      const ringAlong = settlement.alongRadius * 0.62;
      const ringAcross = settlement.crossRadius * 0.62;
      for (let i = 0; i <= 14; i++) {
        const angle = (i / 14) * Math.PI * 2;
        ring.push(makePoint(Math.cos(angle) * ringAlong, Math.sin(angle) * ringAcross));
      }
      streetSpecs.push(ring);
    }

    streetSpecs.forEach((points, index) => {
      const geometry = this.createLocalRibbonGeometry(unit, points, width, color);
      if (!geometry) return;
      this.addRibbonMesh(geometry, this.settlementStreetMaterial, `${settlement.type}-street-${index}`, 17, 'medium');
    });
  }

  createLocalRibbonGeometry(originUnit, localPoints, width, color) {
    const samples = localPoints.map((local) => {
      const unit = originUnit.clone().multiplyScalar(PLANET_RADIUS).add(local).normalize();
      return {
        unit,
        position: unit.clone().multiplyScalar(PLANET_RADIUS + ROAD_SURFACE_OFFSET + 0.002),
        terrain: { color },
      };
    });
    return this.createRibbonGeometry(samples, width, () => true, () => color.clone());
  }

  addSettlementTrees(unit, settlement, seed, mainAxis, crossAxis, trunkItems, canopyItems) {
    const count = settlement.type === 'city' ? 26 : settlement.type === 'town' ? 13 : 5;
    for (let i = 0; i < count; i++) {
      const angle = seed() * Math.PI * 2;
      const ring = lerp(0.56, 0.98, seed());
      const local = mainAxis.clone().multiplyScalar(Math.cos(angle) * settlement.alongRadius * ring)
        .add(crossAxis.clone().multiplyScalar(Math.sin(angle) * settlement.crossRadius * ring));
      if (seed() < 0.35) {
        local.multiplyScalar(lerp(0.45, 0.68, seed()));
      }
      const treeUnit = unit.clone().multiplyScalar(PLANET_RADIUS).add(local).normalize();
      const surface = treeUnit.clone().multiplyScalar(PLANET_RADIUS + SETTLEMENT_SURFACE_OFFSET + 0.002);
      const { east } = getTangentBasis(treeUnit);
      const quaternion = new THREE.Quaternion().setFromRotationMatrix(getSurfaceFrame(treeUnit, east));
      const trunkHeight = settlement.type === 'city' ? 0.0028 : 0.0024;
      const canopyHeight = settlement.type === 'city' ? 0.0052 : 0.0044;
      const trunkMatrix = new THREE.Matrix4().compose(
        surface.clone().add(treeUnit.clone().multiplyScalar(trunkHeight * 0.5)),
        quaternion,
        new THREE.Vector3(0.0011, trunkHeight, 0.0011),
      );
      const canopyMatrix = new THREE.Matrix4().compose(
        surface.clone().add(treeUnit.clone().multiplyScalar(trunkHeight + canopyHeight * 0.48)),
        quaternion,
        new THREE.Vector3(0.0032, canopyHeight, 0.0032),
      );
      trunkItems.push({ matrix: trunkMatrix });
      canopyItems[Math.floor(seed() * canopyItems.length) % canopyItems.length].push({ matrix: canopyMatrix });
    }
  }

  clampSettlementLocal(local, settlement, mainAxis, crossAxis, maxNorm = 0.96) {
    const along = local.dot(mainAxis);
    const across = local.dot(crossAxis);
    const norm = Math.sqrt(
      (along / Math.max(settlement.alongRadius, 0.001)) ** 2 +
      (across / Math.max(settlement.crossRadius, 0.001)) ** 2,
    );
    if (norm <= maxNorm) return local;
    const scale = maxNorm / norm;
    return mainAxis.clone().multiplyScalar(along * scale)
      .add(crossAxis.clone().multiplyScalar(across * scale));
  }

  getBuildingPlacement(index, settlement, seed, mainAxis, crossAxis) {
    if (settlement.type === 'village') {
      const count = Math.max(1, settlement.buildingCount - 1);
      const t = count === 1 ? 0 : (index / count) * 2 - 1;
      const stagger = (index % 2 === 0 ? -1 : 1) * settlement.crossRadius * lerp(0.1, 0.22, seed());
      const bend = Math.sin(t * Math.PI) * settlement.crossRadius * 0.08;
      const local = mainAxis.clone().multiplyScalar(t * settlement.alongRadius * 0.72)
        .add(crossAxis.clone().multiplyScalar(stagger + bend))
        .add(mainAxis.clone().multiplyScalar((seed() - 0.5) * settlement.alongRadius * 0.04))
        .add(crossAxis.clone().multiplyScalar((seed() - 0.5) * settlement.crossRadius * 0.06));
      return {
        local: this.clampSettlementLocal(local, settlement, mainAxis, crossAxis),
        forward: seed() < 0.2 ? mainAxis.clone().negate() : mainAxis.clone(),
        rotationJitter: (seed() - 0.5) * 0.42,
      };
    }

    if (index === 0) {
      return {
        local: mainAxis.clone().multiplyScalar((seed() - 0.5) * settlement.alongRadius * 0.035)
          .add(crossAxis.clone().multiplyScalar((seed() - 0.5) * settlement.crossRadius * 0.04)),
        forward: mainAxis.clone(),
        rotationJitter: (seed() - 0.5) * 0.08,
      };
    }

    const laneCount = settlement.type === 'city' ? 15 : 9;
    const laneIndex = (index - 1) % laneCount;
    const rowIndex = Math.floor((index - 1) / laneCount);
    const maxRows = Math.max(1, Math.ceil((settlement.buildingCount - 1) / laneCount));
    const laneT = laneCount === 1 ? 0 : laneIndex / (laneCount - 1) * 2 - 1;
    const rowT = maxRows === 1 ? 0 : rowIndex / (maxRows - 1) * 2 - 1;
    const curve = Math.sin(rowT * Math.PI + laneIndex * 0.75) * settlement.crossRadius * 0.12;
    const taper = lerp(0.58, 0.96, 1 - Math.abs(rowT));
    const local = mainAxis.clone().multiplyScalar(rowT * settlement.alongRadius * (settlement.type === 'city' ? 0.82 : 0.72) + curve)
      .add(crossAxis.clone().multiplyScalar(laneT * settlement.crossRadius * taper))
      .add(mainAxis.clone().multiplyScalar((seed() - 0.5) * settlement.alongRadius * 0.055))
      .add(crossAxis.clone().multiplyScalar((seed() - 0.5) * settlement.crossRadius * 0.12));
    const forward = (index + Math.floor(seed() * 5)) % 4 === 0 ? crossAxis.clone() : mainAxis.clone();
    if (seed() < 0.12) forward.negate();
    return {
      local: this.clampSettlementLocal(local, settlement, mainAxis, crossAxis),
      forward,
      rotationJitter: (seed() - 0.5) * (settlement.type === 'city' ? 0.12 : 0.22),
    };
  }

  getSettlementSpec(node) {
    const size = Number(node.size) || 20;
    if (size >= 55) {
      return { type: 'city', buildingCount: 240, radius: 0.12, footprint: 0.0039, height: 0.0115 };
    }
    if (size >= 28) {
      return { type: 'town', buildingCount: 108, radius: 0.084, footprint: 0.0036, height: 0.0088 };
    }
    return { type: 'village', buildingCount: 34, radius: 0.052, footprint: 0.0033, height: 0.0072 };
  }

  addInstancedMesh(geometry, material, items, name, {
    castShadow = true,
    receiveShadow = true,
    renderOrder = null,
    lod = null,
  } = {}) {
    if (!items.length) return;
    const mesh = new THREE.InstancedMesh(geometry, material, items.length);
    mesh.name = name;
    items.forEach((item, index) => {
      mesh.setMatrixAt(index, item.matrix);
      if (material.vertexColors && item.color) {
        mesh.setColorAt(index, item.color);
      }
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    if (renderOrder !== null) mesh.renderOrder = renderOrder;
    this.root.add(mesh);
    this.registerLodObject(mesh, lod);
  }

  buildRoads() {
    const ctx = this.contexts[0];
    if (!ctx?.tagData) return;

    const nodeById = new Map(ctx.tagData.map((node) => [node.id, node]));
    const lightPositions = [];
    const lightNormals = [];
    const lightColors = [];
    const lightSizes = [];
    const ferryPositions = [];
    const ferryNormals = [];
    const ferryColors = [];
    const ferrySizes = [];

    this.buildConnectionSet(ctx.connectionData, nodeById, 'road', lightPositions, lightNormals, lightColors, lightSizes, ferryPositions, ferryNormals, ferryColors, ferrySizes);
    this.buildConnectionSet(ctx.arrowConnectionData, nodeById, 'route', lightPositions, lightNormals, lightColors, lightSizes, ferryPositions, ferryNormals, ferryColors, ferrySizes);
    this.buildConnectionSet(ctx.dashedConnectionData, nodeById, 'path', lightPositions, lightNormals, lightColors, lightSizes, ferryPositions, ferryNormals, ferryColors, ferrySizes);

    this.addLightPoints(lightPositions, lightNormals, lightColors, lightSizes, 'settlement-road-lights', 'medium');
    this.addLightPoints(ferryPositions, ferryNormals, ferryColors, ferrySizes, 'settlement-ferry-lights', 'medium');
  }

  buildConnectionSet(connectionData, nodeById, kind, lightPositions, lightNormals, lightColors, lightSizes, ferryPositions, ferryNormals, ferryColors, ferrySizes) {
    if (!Array.isArray(connectionData)) return;
    connectionData.forEach((row) => {
      if (!Array.isArray(row) || row.length < 2) return;
      const source = nodeById.get(row[0]);
      if (!source) return;
      row.slice(1).forEach((entry) => {
        const targetId = getConnectionTargetId(entry);
        const target = nodeById.get(targetId);
        if (!target) return;
        const route = this.getRouteSamples(source, target, entry, kind);
        this.addRoadMeshes(route, kind);
        this.addRouteLights(route, kind, lightPositions, lightNormals, lightColors, lightSizes, ferryPositions, ferryNormals, ferryColors, ferrySizes);
      });
    });
  }

  getRouteSamples(source, target, entry, kind) {
    const curve = getConnectionCurveValues(entry);
    const key = [
      kind,
      source.id,
      target.id,
      source.lat,
      source.lng,
      target.lat,
      target.lng,
      curve[0],
      curve[1],
    ].join(':');

    if (this.routeCache.has(key)) return this.routeCache.get(key);

    const startUnit = latLngToUnit(source.lat, source.lng);
    const endUnit = latLngToUnit(target.lat, target.lng);
    const sideUnit = getConnectionSideUnit(startUnit, endUnit);
    const random = seededRandom(key);
    const phase = random() * Math.PI * 2;
    const phase2 = random() * Math.PI * 2;
    const naturalAmplitude = kind === 'path' ? 0.24 : kind === 'route' ? 0.2 : 0.18;
    let offsets = [];
    const samples = [];

    for (let i = 0; i <= ROAD_SAMPLE_COUNT; i++) {
      const t = i / ROAD_SAMPLE_COUNT;
      const falloff = Math.sin(Math.PI * t);
      const manualOffset = cubicBezierValue(0, curve[0], curve[1], 0, t);
      const naturalOffset = falloff * (
        Math.sin(t * Math.PI * 2 + phase) * naturalAmplitude +
        Math.sin(t * Math.PI * 5 + phase2) * naturalAmplitude * 0.35
      );
      const baseOffset = manualOffset + naturalOffset;
      const offset = (i === 0 || i === ROAD_SAMPLE_COUNT)
        ? 0
        : this.chooseTerrainOffset(startUnit, endUnit, sideUnit, baseOffset, t);
      offsets.push(offset);
    }

    offsets = this.smoothRouteOffsets(offsets);

    for (let i = 0; i <= ROAD_SAMPLE_COUNT; i++) {
      const t = i / ROAD_SAMPLE_COUNT;
      const unit = routeDirection(startUnit, endUnit, sideUnit, offsets[i], t);
      const latLng = unitToLatLng(unit);
      const terrain = this.terrainSampler.sample(latLng.lat, latLng.lng);
      samples.push({
        unit,
        position: unit.clone().multiplyScalar(PLANET_RADIUS + ROAD_SURFACE_OFFSET),
        lat: latLng.lat,
        lng: latLng.lng,
        terrain,
      });
    }

    const waterFraction = samples.reduce((sum, sample) => sum + (sample.terrain.waterScore > WATER_THRESHOLD ? 1 : 0), 0) / samples.length;
    const route = { samples, waterFraction, lightSeed: key };
    this.routeCache.set(key, route);
    return route;
  }

  smoothRouteOffsets(offsets) {
    let smoothed = offsets.slice();
    for (let pass = 0; pass < 6; pass++) {
      smoothed = smoothed.map((offset, index) => {
        if (index === 0 || index === smoothed.length - 1) return 0;
        return offset * 0.28 + smoothed[index - 1] * 0.36 + smoothed[index + 1] * 0.36;
      });
    }
    return smoothed;
  }

  chooseTerrainOffset(startUnit, endUnit, sideUnit, baseOffset, t) {
    let bestOffset = baseOffset;
    let bestScore = Infinity;
    const candidates = [-0.8, -0.4, 0, 0.4, 0.8];
    candidates.forEach((delta) => {
      const candidateOffset = baseOffset + delta;
      const unit = routeDirection(startUnit, endUnit, sideUnit, candidateOffset, t);
      const terrain = this.terrainSampler.sampleUnit(unit);
      const score =
        terrain.waterScore * 2.15 +
        terrain.slopeScore * 0.9 +
        terrain.roughness * 0.25 +
        Math.abs(delta) * 0.11;
      if (score < bestScore) {
        bestScore = score;
        bestOffset = candidateOffset;
      }
    });
    return bestOffset;
  }

  addRoadMeshes(route, kind) {
    const width = kind === 'route' ? 0.014 : kind === 'path' ? 0.006 : 0.009;
    const roadPredicate = (a, b) => this.getSegmentWaterScore(a, b) <= WATER_THRESHOLD;
    const bridgePredicate = (a, b) => this.getSegmentWaterScore(a, b) > WATER_THRESHOLD && route.waterFraction <= FERRY_ROUTE_FRACTION_THRESHOLD;

    const shoulder = this.createRibbonGeometry(route.samples, width * 2.15, roadPredicate, (sample, index) => {
      return sample.terrain.color.clone()
        .lerp(DEFAULT_TERRAIN_COLOR, 0.14)
        .lerp(DEFAULT_ROAD_COLOR, kind === 'path' ? 0.08 : 0.12)
        .multiplyScalar(lerp(0.9, 1.08, (Math.sin(index * 1.7) + 1) * 0.5));
    });
    if (shoulder) this.addRibbonMesh(shoulder, this.roadShoulderMaterial, `${kind}-road-shoulder`, 14);

    const core = this.createRibbonGeometry(route.samples, width, roadPredicate, (sample, index) => {
      return sample.terrain.color.clone()
        .lerp(DEFAULT_ROAD_COLOR, kind === 'path' ? 0.22 : 0.34)
        .multiplyScalar(lerp(0.92, 1.06, (Math.sin(index * 2.3 + 0.6) + 1) * 0.5));
    });
    if (core) this.addRibbonMesh(core, this.roadCoreMaterial, `${kind}-road-core`, 15);

    const trackWidth = Math.max(width * (kind === 'path' ? 0.2 : 0.14), 0.0014);
    const trackOffset = kind === 'path' ? 0 : width * 0.26;
    [-trackOffset, trackOffset].forEach((offset, index) => {
      if (kind === 'path' && index > 0) return;
      const track = this.createRibbonGeometry(route.samples, trackWidth, roadPredicate, (sample) => {
        return sample.terrain.color.clone().lerp(ROAD_TRACK_COLOR, kind === 'path' ? 0.22 : 0.2);
      }, offset);
      if (track) this.addRibbonMesh(track, this.roadTrackMaterial, `${kind}-road-track-${index}`, 16);
    });

    const bridge = this.createRibbonGeometry(route.samples, width * 0.82, bridgePredicate, () => BRIDGE_COLOR.clone());
    if (bridge) this.addRibbonMesh(bridge, this.bridgeMaterial, `${kind}-bridge`, 16);

    const ferry = this.createRibbonGeometry(route.samples, width * 0.44, (a, b, index) => {
      return route.waterFraction > FERRY_ROUTE_FRACTION_THRESHOLD && this.getSegmentWaterScore(a, b) > WATER_THRESHOLD && index % 4 < 2;
    }, () => WATER_ROUTE_COLOR.clone().lerp(DEFAULT_ROAD_COLOR, 0.14));
    if (ferry) this.addRibbonMesh(ferry, this.waterRouteMaterial, `${kind}-ferry-route`, 16);
  }

  addRibbonMesh(geometry, material, name, renderOrder, lod = null) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.renderOrder = renderOrder;
    mesh.frustumCulled = false;
    this.root.add(mesh);
    this.registerLodObject(mesh, lod);
  }

  getSegmentWaterScore(a, b) {
    return (a.terrain.waterScore + b.terrain.waterScore) * 0.5;
  }

  createRibbonGeometry(samples, width, segmentPredicate, colorForSample, centerOffset = 0) {
    const positions = [];
    const normals = [];
    const colors = [];
    const indices = [];
    let vertexIndex = 0;
    let previousPair = null;

    const addPair = (sample, sampleIndex) => {
      const prev = samples[Math.max(0, sampleIndex - 1)];
      const next = samples[Math.min(samples.length - 1, sampleIndex + 1)];
      let tangent = next.position.clone().sub(prev.position);
      if (tangent.lengthSq() < 1e-8 && sampleIndex < samples.length - 1) {
        tangent = samples[sampleIndex + 1].position.clone().sub(sample.position);
      }
      if (tangent.lengthSq() < 1e-8 && sampleIndex > 0) {
        tangent = sample.position.clone().sub(samples[sampleIndex - 1].position);
      }
      tangent.normalize();
      const sideDirection = new THREE.Vector3().crossVectors(sample.unit, tangent);
      if (sideDirection.lengthSq() < 1e-8) sideDirection.copy(getTangentBasis(sample.unit).east);
      sideDirection.normalize();
      const center = sample.position.clone().add(sideDirection.clone().multiplyScalar(centerOffset));
      const side = sideDirection.multiplyScalar(width * 0.5);
      const left = center.clone().add(side);
      const right = center.clone().sub(side);
      const color = colorForSample(sample, sampleIndex);

      [left, right].forEach((position) => {
        positions.push(position.x, position.y, position.z);
      });
      [sample.unit, sample.unit].forEach((normal) => {
        normals.push(normal.x, normal.y, normal.z);
      });
      [color, color].forEach((entryColor) => {
        colors.push(entryColor.r, entryColor.g, entryColor.b);
      });

      const pair = { left: vertexIndex, right: vertexIndex + 1 };
      vertexIndex += 2;
      return pair;
    };

    for (let i = 0; i < samples.length - 1; i++) {
      const a = samples[i];
      const b = samples[i + 1];
      if (!segmentPredicate(a, b, i)) {
        previousPair = null;
        continue;
      }

      if (!previousPair) previousPair = addPair(a, i);
      const nextPair = addPair(b, i + 1);
      indices.push(previousPair.left, nextPair.left, previousPair.right);
      indices.push(previousPair.right, nextPair.left, nextPair.right);
      previousPair = nextPair;
    }

    if (!positions.length) return null;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);
    geometry.computeBoundingSphere();
    return geometry;
  }

  addRouteLights(route, kind, lightPositions, lightNormals, lightColors, lightSizes, ferryPositions, ferryNormals, ferryColors, ferrySizes) {
    const random = seededRandom(`route-lights:${route.lightSeed}:${kind}`);
    const spacing = kind === 'path' ? 0.005 : kind === 'route' ? 0.008 : 0.006;
    const lateralOffset = kind === 'path' ? 0.003 : kind === 'route' ? 0.007 : 0.0055;
    let accumulated = 0;
    let nextLightAt = spacing * lerp(0.45, 0.75, random());
    let lightIndex = 0;

    for (let i = 0; i < route.samples.length - 1; i++) {
      const a = route.samples[i];
      const b = route.samples[i + 1];
      const segmentLength = a.position.distanceTo(b.position);
      if (segmentLength <= 1e-5) continue;

      while (nextLightAt <= accumulated + segmentLength) {
        const localT = (nextLightAt - accumulated) / segmentLength;
        const unit = slerpVectors(a.unit, b.unit, localT);
        const waterScore = lerp(a.terrain.waterScore, b.terrain.waterScore, localT);
        const water = waterScore > WATER_THRESHOLD;
        const isFerry = water && route.waterFraction > FERRY_ROUTE_FRACTION_THRESHOLD;
        const tangent = b.position.clone().sub(a.position).normalize();
        const side = new THREE.Vector3().crossVectors(unit, tangent);
        if (side.lengthSq() < 1e-8) side.copy(getTangentBasis(unit).east);
        side.normalize();
        const sideSign = isFerry || kind === 'path' ? 0 : lightIndex % 2 === 0 ? -1 : 1;
        const position = unit.clone()
          .multiplyScalar(PLANET_RADIUS + ROAD_SURFACE_OFFSET + (water ? 0.012 : 0.004))
          .add(side.multiplyScalar(lateralOffset * sideSign));
        const targetPositions = isFerry ? ferryPositions : lightPositions;
        const targetNormals = isFerry ? ferryNormals : lightNormals;
        const targetColors = isFerry ? ferryColors : lightColors;
        const targetSizes = isFerry ? ferrySizes : lightSizes;
        const color = this.getRouteLightColor(route, kind, isFerry, lightIndex);
        const baseSize = isFerry ? 0.16 : kind === 'path' ? 0.055 : 0.07;
        const size = baseSize * lerp(0.9, 1.1, random());
        targetPositions.push(position.x, position.y, position.z);
        targetNormals.push(unit.x, unit.y, unit.z);
        targetColors.push(color.r, color.g, color.b);
        targetSizes.push(size);
        lightIndex += 1;
        nextLightAt += spacing;
      }

      accumulated += segmentLength;
    }
  }

  getRouteLightColor(route, kind, isFerry, index) {
    const random = seededRandom(`route-light-color:${route.lightSeed}:${kind}:${index}`);
    if (isFerry) {
      return new THREE.Color().setHSL(0.47 + random() * 0.035, 0.12 + random() * 0.08, 0.46 + random() * 0.07)
        .lerp(WATER_ROUTE_COLOR, 0.25);
    }
    return new THREE.Color().setHSL(0.07 + random() * 0.052, 0.32 + random() * 0.18, 0.46 + random() * 0.1);
  }

  addLightPoints(positions, normals, colors, sizes, name, lod = null) {
    if (!positions.length) return;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('surfaceNormal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('lightSize', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.computeBoundingSphere();
    const points = new THREE.Points(geometry, this.lightMaterial);
    points.name = name;
    points.renderOrder = 25;
    this.root.add(points);
    this.registerLodObject(points, lod);
  }

  registerLodObject(object, lod) {
    if (lod === 'close') this.closeDetailObjects.push(object);
    if (lod === 'medium') this.mediumDetailObjects.push(object);
  }

  setRibbonOpacity(material, factor) {
    if (!material?.uniforms?.opacity) return;
    const baseOpacity = material.userData.baseOpacity ?? material.uniforms.opacity.value;
    material.uniforms.opacity.value = baseOpacity * factor;
  }

  updateLod() {
    if (!this.getCameraWorldPosition || !this.root.parent) return;
    const cameraWorld = this.getCameraWorldPosition(new THREE.Vector3());
    if (!cameraWorld) return;

    const cameraLocal = this.root.parent.worldToLocal(cameraWorld.clone());
    const altitude = Math.max(0, cameraLocal.length() - PLANET_RADIUS);
    const detailFactor = clamp01((3.2 - altitude) / 2.25);
    const mediumFactor = clamp01((4.9 - altitude) / 3.1);
    const closeVisible = detailFactor > 0.08;
    const mediumVisible = mediumFactor > 0.06;

    if (closeVisible !== this.currentCloseDetailVisible) {
      this.closeDetailObjects.forEach((object) => {
        object.visible = closeVisible;
      });
      this.currentCloseDetailVisible = closeVisible;
    }

    if (mediumVisible !== this.currentMediumDetailVisible) {
      this.mediumDetailObjects.forEach((object) => {
        object.visible = mediumVisible;
      });
      this.currentMediumDetailVisible = mediumVisible;
    }

    if (
      Math.abs(detailFactor - this.currentDetailFactor) > 0.025 ||
      Math.abs(mediumFactor - this.currentMediumFactor) > 0.025
    ) {
      const roadFactor = lerp(0.64, 1, mediumFactor);
      this.setRibbonOpacity(this.roadShoulderMaterial, roadFactor);
      this.setRibbonOpacity(this.roadCoreMaterial, roadFactor);
      this.setRibbonOpacity(this.roadTrackMaterial, roadFactor);
      this.setRibbonOpacity(this.bridgeMaterial, roadFactor);
      this.setRibbonOpacity(this.waterRouteMaterial, roadFactor);
      this.setRibbonOpacity(this.settlementStreetMaterial, lerp(0.2, 1, detailFactor));
      this.lightUniforms.pointScale.value = lerp(18, 40, detailFactor);
      this.currentDetailFactor = detailFactor;
      this.currentMediumFactor = mediumFactor;
    }
  }

  hover(intersects) {
    const setScale = (object, factor) => {
      const baseScale = object.userData.baseScale || 1;
      if (baseScale.isVector3) {
        object.scale.copy(baseScale).multiplyScalar(factor);
      } else {
        object.scale.setScalar(baseScale * factor);
      }
    };
    const nextHovered = intersects.length > 0 ? [intersects[0].object] : [];
    this.hoveredObjects.forEach((object) => {
      if (!nextHovered.includes(object)) {
        setScale(object, 1);
        if (object.material) object.material.opacity = 0.22;
      }
    });
    nextHovered.forEach((object) => {
      setScale(object, 1.16);
      if (object.material) object.material.opacity = 0.42;
    });
    this.hoveredObjects = nextHovered;
  }

  update() {
    if (!this.root.visible || !this.getSunWorldPosition) return;
    this.updateLod();
    const sunWorld = this.getSunWorldPosition(new THREE.Vector3());
    if (!sunWorld || !this.root.parent) return;
    const sunLocal = this.root.parent.worldToLocal(sunWorld.clone()).normalize();
    this.lightUniforms.sunDirection.value.copy(sunLocal);
  }
}
