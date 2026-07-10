import {
  createProceduralPlanet,
} from '../src/js/core/proceduralPlanet.js';
import {
  createProceduralPlanetRuntime,
} from '../src/js/core/proceduralPlanetRuntime.js';
import * as THREE from 'three';
import {
  planetTagData,
  planetConnections,
  planetArrowedConnections,
  planetDashedConnections,
  planetTunnelConnections,
} from '../src/js/data/planetData.js';

const mindmap = {
  tagData: planetTagData,
  connectionData: planetConnections,
  arrowConnectionData: planetArrowedConnections,
  dashedConnectionData: planetDashedConnections,
  tunnelConnectionData: planetTunnelConnections,
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertClose(actual, expected, message, epsilon = 1e-12) {
  if (Math.abs(actual - expected) > epsilon) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
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

function makePlanet(overrides = {}) {
  return createProceduralPlanet(
    { ...mindmap, ...overrides },
    {
      seed: 'procedural-planet-validation',
      weatherSeed: 'procedural-planet-weather-validation',
      textureWidth: 64,
      textureHeight: 32,
    },
  );
}

const first = makePlanet();
const second = makePlanet();

const probePoints = [
  { lat: 0, lng: 0 },
  { lat: 25.5, lng: 18.5 },
  { lat: -54, lng: 98 },
  { lat: 67.5, lng: -121 },
  { lat: -75, lng: 0 },
];

probePoints.forEach(({ lat, lng }) => {
  const a = first.sampleLatLng(lat, lng);
  const b = second.sampleLatLng(lat, lng);
  assertClose(a.height, b.height, `height is deterministic at ${lat},${lng}`);
  assertClose(a.waterDepth, b.waterDepth, `water depth is deterministic at ${lat},${lng}`);
  assertClose(a.roughness, b.roughness, `roughness is deterministic at ${lat},${lng}`);
  assertClose(a.settlementSuitability, b.settlementSuitability, `settlement suitability is deterministic at ${lat},${lng}`);
  assert(a.biomeId === b.biomeId, `biome is deterministic at ${lat},${lng}`);
});

const surfaceProbe = { x: 0.68, y: 0.31, z: 0.66 };
const surfaceA = first.sampleSurfaceUnit(surfaceProbe);
const surfaceB = second.sampleSurfaceUnit(surfaceProbe);
assertClose(surfaceA.elevation, surfaceB.elevation, 'surface elevation is deterministic');
assertClose(surfaceA.radius, surfaceB.radius, 'surface radius is deterministic');
assert(surfaceA.radius > 4.95 && surfaceA.radius < 5.1, 'surface radius stays near the planet shell');
assert(surfaceA.unit.length() > 0.999 && surfaceA.unit.length() < 1.001, 'surface unit is normalized');

const surfaceLatLng = first.sampleSurfaceLatLng(20, 20);
assert(surfaceLatLng.radius > 4.95 && surfaceLatLng.radius < 5.1, 'surface lat/lng sampler returns surface radius');
assert(surfaceLatLng.unit.length() > 0.999 && surfaceLatLng.unit.length() < 1.001, 'surface lat/lng sampler returns normalized unit');

assert(first.textures.width === 64, 'procedural texture width is configurable');
assert(first.textures.height === 32, 'procedural texture height is configurable');
assert(first.textures.albedo.image.data.length === 64 * 32 * 4, 'albedo texture has expected data length');
assert(first.textures.normal.image.data.length === 64 * 32 * 4, 'normal texture has expected data length');
assert(first.textures.heightMap.image.data.length === 64 * 32 * 4, 'height texture has expected data length');
assert(first.textures.water.image.data.length === 64 * 32 * 4, 'water texture has expected data length');
assert(first.textures.waterFoam.image.data.length === 64 * 32 * 4, 'water foam texture has expected data length');
assert(first.textures.waterFoamAlpha.image.data.length === 64 * 32 * 4, 'water foam alpha texture has expected data length');
assert(first.textures.emission.image.data.length === 64 * 32 * 4, 'emission texture has expected data length');
assert(first.textures.weatherShadow.image.data.length === 64 * 32 * 4, 'weather shadow texture has expected data length');
const textureStats = first.getTextureStats();
assert(textureStats?.width === 64 && textureStats?.height === 32, 'texture stats report generated texture dimensions');
assert(textureStats?.pixels === 64 * 32, 'texture stats report generated pixel count');
assert(textureStats?.landRatio > 0 && textureStats?.waterRatio > 0, 'texture stats include land and water ratios');
assert(textureStats?.foamCoverage > 0, 'texture stats include generated foam coverage');
assert(textureStats?.weatherShadowCoverage > 0, 'texture stats include generated weather shadow coverage');
assert(textureStats?.cloudLowCoverage > 0 && textureStats?.cloudHighCoverage > 0, 'texture stats include cloud coverage');
assert(textureStats?.emissionCoverage > 0, 'texture stats include semantic emission coverage');
assert(textureStats?.maxFoam > textureStats?.foamCoverage, 'texture stats include peak foam above average coverage');

const terrainMaterial = first.createTerrainMaterial();
assert(terrainMaterial.userData.proceduralWeatherShadow === true, 'terrain material enables dynamic weather shadows');
assert(terrainMaterial.userData.weatherShadowMap === first.textures.weatherShadow, 'terrain material uses generated weather-shadow texture');
const shaderMock = {
  uniforms: {},
  fragmentShader: '#include <map_pars_fragment>\nvoid main() {\n  vec4 diffuseColor = vec4(1.0);\n  #include <color_fragment>\n}',
};
terrainMaterial.onBeforeCompile(shaderMock);
assert(shaderMock.fragmentShader.includes('proceduralWeatherShadowMap'), 'terrain shader receives weather-shadow sampler');
assert(shaderMock.fragmentShader.includes('proceduralWeatherShadowOffset'), 'terrain shader receives weather-shadow offset');
first.update(1 / 30);
assert(
  shaderMock.uniforms.proceduralWeatherShadowOffset.value.lengthSq() > 0,
  'terrain shader weather-shadow offset updates over time',
);
assert(first.semanticWorldMap.nodes.length >= first.semanticWorldMap.anchors.length, 'semantic world map keeps all finite nodes for local detail');
assert(first.semanticWorldMap.anchors.length > 20, 'semantic world map has anchors');
assert(first.semanticWorldMap.routes.length > 20, 'semantic world map has routes');

const waterGroup = first.createWaterMesh();
assert(waterGroup.children.length === 2, 'procedural water has water and foam shells');
assert(waterGroup.userData.foamShellCount === 1, 'procedural water reports a foam shell');
assert(waterGroup.children.some((child) => child.name === 'procedural-coast-foam-shell'), 'procedural water creates a coast foam shell');
assert(waterGroup.children.find((child) => child.name === 'procedural-coast-foam-shell')?.material?.blending === THREE.AdditiveBlending, 'coast foam uses additive blending');

const semanticOverlay = first.createSemanticOverlayGroup();
const semanticLandmarks = first.createSemanticLandmarkGroup();
const overlayStats = first.getSemanticOverlayStats();
const landmarkStats = first.getSemanticLandmarkStats();
assert(semanticOverlay.children.length >= 3, 'semantic overlay has coastline, elevation contour, and route layers');
assert(overlayStats?.coastlineSegments > 0, 'semantic overlay generates coastline segments');
assert(overlayStats?.elevationContourSegments > 0, 'semantic overlay generates elevation contour segments');
assert(overlayStats?.elevationContourLevels >= 3, 'semantic overlay generates multiple elevation contour levels');
assert(overlayStats?.routeSegments > 0, 'semantic overlay generates route corridor segments');
assert(overlayStats?.routeCount > 0, 'semantic overlay includes visible routes');
assert(semanticLandmarks.children.length === 1, 'semantic landmarks create a point layer');
assert(landmarkStats?.count > 20, 'semantic landmarks are generated from important nodes');
assert(landmarkStats?.slideCount > 0, 'semantic landmarks include slide-bearing nodes');
assert(landmarkStats?.maxImportance > 0.5, 'semantic landmarks have importance values');

const surfaceDetail = first.createSurfaceDetailLayer({ propCount: 40 });
surfaceDetail.rebuild(unitFromLatLng(20, 20));
const surfaceDetailStats = surfaceDetail.getStats();
assert(surfaceDetailStats.routeTraces > 0, 'surface detail generates local route traces on semantic corridors');
assert(surfaceDetailStats.routeMarkers >= 6, 'surface detail generates visible local route markers on semantic corridors');
assert(surfaceDetailStats.settlementPads > 0, 'surface detail generates local semantic settlement pads');
assert(surfaceDetailStats.settlementStructures > 0, 'surface detail generates local semantic settlement structures');
assert(surfaceDetailStats.settlementSpires >= 4, 'surface detail generates visible local semantic settlement spires');
assert(surfaceDetailStats.settlementBeacons > 0, 'surface detail generates local semantic settlement beacons');
assert(surfaceDetailStats.rocks + surfaceDetailStats.plants > 0, 'surface detail generates local props');
assert(surfaceDetailStats.terrainStrokes > 0, 'surface detail generates local terrain stroke detail');
assert(surfaceDetail.rockMaterial.vertexColors === true, 'surface rocks use per-instance terrain colors');
assert(surfaceDetail.plantMaterial.vertexColors === true, 'surface growth uses per-instance terrain colors');
assert(surfaceDetail.rockMesh.instanceColor?.count >= surfaceDetail.rockMesh.count, 'surface rocks receive instance colors');
assert(surfaceDetail.plantMesh.instanceColor?.count >= surfaceDetail.plantMesh.count, 'surface growth receives instance colors');
assert(surfaceDetail.geometry.getAttribute('color').itemSize === 4, 'surface patch carries vertex alpha for edge blending');
const surfaceSnapshot = surfaceDetail.getPropSnapshot();
assert(surfaceSnapshot.terrainStrokes.length === surfaceDetailStats.terrainStrokes, 'surface snapshot includes terrain strokes');
function collectInstancePositions(mesh) {
  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const positions = [];
  for (let index = 0; index < mesh.count; index++) {
    mesh.getMatrixAt(index, matrix);
    position.setFromMatrixPosition(matrix);
    positions.push(`${position.x.toFixed(4)}:${position.y.toFixed(4)}:${position.z.toFixed(4)}`);
  }
  return positions;
}
function collectLineSegments(lineSegments) {
  const positionAttribute = lineSegments.geometry.getAttribute('position');
  const count = lineSegments.geometry.drawRange.count;
  const segments = [];
  for (let index = 0; index < count; index += 2) {
    const a = `${positionAttribute.getX(index).toFixed(4)}:${positionAttribute.getY(index).toFixed(4)}:${positionAttribute.getZ(index).toFixed(4)}`;
    const b = `${positionAttribute.getX(index + 1).toFixed(4)}:${positionAttribute.getY(index + 1).toFixed(4)}:${positionAttribute.getZ(index + 1).toFixed(4)}`;
    segments.push(`${a}>${b}`);
  }
  return segments;
}
const firstRockPositions = new Set(collectInstancePositions(surfaceDetail.rockMesh));
const firstPlantPositions = new Set(collectInstancePositions(surfaceDetail.plantMesh));
const firstTerrainStrokes = new Set(collectLineSegments(surfaceDetail.terrainStrokeMesh));
surfaceDetail.rebuild(unitFromLatLng(20.16, 20.16));
const shiftedRockPositions = collectInstancePositions(surfaceDetail.rockMesh);
const shiftedPlantPositions = collectInstancePositions(surfaceDetail.plantMesh);
const shiftedTerrainStrokes = collectLineSegments(surfaceDetail.terrainStrokeMesh);
const stableRockCount = shiftedRockPositions.filter((position) => firstRockPositions.has(position)).length;
const stablePlantCount = shiftedPlantPositions.filter((position) => firstPlantPositions.has(position)).length;
const stableStrokeCount = shiftedTerrainStrokes.filter((segment) => firstTerrainStrokes.has(segment)).length;
assert(stableRockCount + stablePlantCount >= 8, 'surface props remain world-stable across nearby patch rebuilds');
assert(stableStrokeCount >= 12, 'surface terrain strokes remain world-stable across nearby patch rebuilds');
assert(surfaceDetailStats.hazeSegments >= surfaceDetail.segments * 4, 'surface detail generates a local horizon haze rim');
const microDetailProbeUnit = unitFromLatLng(20.25, 20.25);
const microDetailProbeSurface = first.sampleSurfaceUnit(microDetailProbeUnit);
const microDetail = surfaceDetail.getMicroDetail(microDetailProbeUnit, microDetailProbeSurface, 1);
assert(Math.abs(microDetail.elevation) > 0.00001, 'surface detail adds deterministic micro relief');
assert(surfaceDetail.routeTraceMaterial.transparent === true, 'surface route traces are translucent');
assert(surfaceDetail.routeTraceMaterial.depthWrite === false, 'surface route traces do not punch through local terrain');
assert(surfaceDetail.settlementBeaconMaterial.blending === THREE.AdditiveBlending, 'surface semantic beacons use additive light');
assert(surfaceDetail.routeMarkerMaterial.blending === THREE.AdditiveBlending, 'surface route markers use additive light');
assert(surfaceDetail.hazeMaterial.blending === THREE.AdditiveBlending, 'surface horizon haze uses additive light');
assert(surfaceDetail.hazeMesh.isLineSegments === true, 'surface horizon haze renders as a rim instead of a curtain mesh');
assert(surfaceDetail.material.transparent === true, 'surface patch supports edge alpha blending');
assert(surfaceDetail.terrainStrokeMaterial.transparent === true, 'surface terrain strokes are translucent');
assert(surfaceDetail.terrainStrokeMaterial.depthWrite === false, 'surface terrain strokes do not punch through local terrain');
assert(surfaceDetailStats.horizonHazeOpacity > 0, 'surface detail reports horizon haze opacity');
assert(surfaceDetail.skyDomeMesh.isMesh === true, 'surface detail has a local sky dome');
assert(surfaceDetail.skyDomeMaterial.depthWrite === false, 'surface sky dome does not write depth');
assert(surfaceDetailStats.skyDomeOpacity > 0, 'surface detail reports sky dome opacity');
assert(surfaceDetail.atmosphereVeilMesh.isMesh === true, 'surface detail has a local atmosphere veil');
assert(surfaceDetail.atmosphereVeilMaterial.depthWrite === false, 'surface atmosphere veil does not write depth');
assert(surfaceDetail.atmosphereVeilMaterial.depthTest === false, 'surface atmosphere veil can soften the horizon silhouette');
assert(surfaceDetailStats.atmosphereVeilOpacity > 0, 'surface detail reports atmosphere veil opacity');
assert(surfaceDetail.material.emissiveIntensity > 0, 'surface detail patch has procedural inspection fill');
assert(surfaceDetail.rockMaterial.emissiveIntensity > 0, 'surface rocks have procedural inspection fill');
assert(surfaceDetail.material.userData.vertexColorEmissionStrength > 0, 'surface patch has vertex-color emission lift');
assert(surfaceDetail.rockMaterial.userData.vertexColorEmissionStrength > 0, 'surface rocks have vertex-color emission lift');
assert(surfaceDetail.plantMaterial.userData.vertexColorEmissionStrength > 0, 'surface growth has vertex-color emission lift');
assert(surfaceDetail.inspectionLight?.isLight, 'surface detail has a local inspection light');
assert(surfaceDetail.surfaceFillLight?.isLight, 'surface detail has a local fill light');
assert(surfaceDetail.inspectionLight.intensity > 0, 'surface detail inspection light has intensity');
assert(surfaceDetailStats.inspectionLightIntensity > 0, 'surface detail stats report inspection light intensity');
assert(surfaceDetailStats.surfaceFillLightIntensity > 0, 'surface detail stats report fill light intensity');

const surfaceUpdateCamera = new THREE.PerspectiveCamera(60, 1.4, 0.1, 1000);
const surfaceUpdateJaranius = new THREE.Object3D();
const surfaceUpdateUnit = unitFromLatLng(20, 20);
const surfaceUpdateTangent = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), surfaceUpdateUnit).normalize();
surfaceUpdateCamera.position.copy(surfaceUpdateUnit.clone().multiplyScalar(5.34));
surfaceUpdateCamera.up.copy(surfaceUpdateUnit);
surfaceUpdateCamera.lookAt(
  surfaceUpdateCamera.position.clone()
    .add(surfaceUpdateTangent)
    .add(surfaceUpdateUnit.clone().multiplyScalar(-0.48)),
);
surfaceUpdateCamera.updateMatrixWorld(true);
surfaceUpdateJaranius.updateMatrixWorld(true);
surfaceDetail.update({
  camera: surfaceUpdateCamera,
  jaranius: surfaceUpdateJaranius,
  appStatus: 'flight',
});
const surfaceUpdateStats = surfaceDetail.getStats();
assert(surfaceUpdateStats.visible === true, 'surface detail update makes the local patch visible in flight mode');
assert(surfaceUpdateStats.skyDomeVisible === true, 'surface detail update shows the local sky dome');
assert(surfaceUpdateStats.atmosphereVeilVisible === true, 'surface detail update shows the atmosphere veil');
assert(surfaceDetail.atmosphereVeilMesh.scale.x > 0.1, 'surface atmosphere veil is scaled from camera FOV');
assert(surfaceDetail.atmosphereVeilMesh.position.distanceTo(surfaceDetail.localCamera) > 0.1, 'surface atmosphere veil is placed in front of the camera');

const fakeDomElements = new Map([
  ['credits', { style: { display: 'block' } }],
  ['playbutton', { style: { display: 'inline-block' } }],
  ['skipbutton', { style: { display: 'inline-block' } }],
]);
globalThis.window = { appStatus: 'orbit' };
globalThis.document = {
  body: { style: { cursor: 'default' } },
  getElementById(id) {
    return fakeDomElements.get(id) || null;
  },
};

const scene = new THREE.Scene();
const originalSceneFog = new THREE.FogExp2(0x112233, 0.01);
scene.fog = originalSceneFog;
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
const jaranius = new THREE.Object3D();
const runtimeSemanticOverlay = new THREE.Object3D();
const runtimeSemanticLandmarks = new THREE.Object3D();
const runtimeAtmosphere = new THREE.Object3D();
const runtimeAtmosphericLight = new THREE.Object3D();
const runtimeClouds = new THREE.Object3D();
const runtimeWater = new THREE.Object3D();
const datasetObject = new THREE.Object3D();
const tagObject = new THREE.Object3D();
const boxObject = new THREE.Object3D();
const connectionDestination = new THREE.Object3D();
const lineObject = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, 0, 0),
  ]),
  new THREE.LineBasicMaterial({ color: 0x00ff00 }),
);
const routeTrace = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 1, 0),
  ]),
  new THREE.LineBasicMaterial({ color: 0xbba060 }),
);
lineObject.name = 'runtime-validation-line';
routeTrace.name = 'procedural-surface-route-traces';
scene.add(lineObject, routeTrace, datasetObject, jaranius);
connectionDestination.add(new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 1),
  ]),
  new THREE.LineBasicMaterial({ color: 0x00ff00 }),
));

const orbitControls = {
  enabled: true,
  target: new THREE.Vector3(),
  updateCalls: 0,
  update() {
    this.updateCalls += 1;
  },
};
const flyControls = {
  enabled: false,
  minDistance: 5.15,
};
let transitionCancels = 0;
const runtime = createProceduralPlanetRuntime({
  proceduralPlanet: first,
  planetEnvironment: {
    semanticOverlay: runtimeSemanticOverlay,
    semanticLandmarks: runtimeSemanticLandmarks,
    atmosphere: runtimeAtmosphere,
    atmosphericLight: runtimeAtmosphericLight,
    clouds: runtimeClouds,
    water: runtimeWater,
  },
  scene,
  camera,
  orbitControls,
  flyControls,
  middleOfPlanet: new THREE.Vector3(),
  cancelSmoothOrbitTransition: () => {
    transitionCancels += 1;
  },
  getJaranius: () => jaranius,
  getPlanetContext: () => ({
    tags: [tagObject],
    boxes: [boxObject],
    connectionDestination,
  }),
  datasetObjects: [datasetObject],
});

assert(runtime.getBookmarkNames().includes('surfaceFlight'), 'procedural runtime exposes surface flight bookmark');
runtime.applyBookmark('surfaceFlight');
assert(window.appStatus === 'flight', 'surface flight bookmark enters flight mode');
assert(flyControls.enabled === true, 'surface flight bookmark enables fly controls');
assert(orbitControls.enabled === false, 'surface flight bookmark disables orbit controls');
assert(document.body.style.cursor === 'crosshair', 'surface flight bookmark sets flight cursor');
assert(runtime.getSurfacePresentationState().active === true, 'surface flight bookmark enables surface presentation');
assert(runtime.getSurfacePresentationState().fogActive === true, 'surface presentation enables local distance fog');
assert(runtime.getSurfacePresentationState().fogDensity >= 0.22, 'surface presentation uses enough fog to soften the horizon');
assert(scene.fog !== originalSceneFog, 'surface presentation replaces existing scene fog');
assert(runtime.getSurfacePresentationState().hiddenDomElements === 3, 'surface presentation hides configured DOM overlays');
assert(fakeDomElements.get('playbutton').style.display === 'none', 'surface presentation hides play overlay');
assert(runtimeSemanticLandmarks.visible === false, 'surface presentation hides semantic landmarks');
assert(runtimeAtmosphere.visible === false, 'surface presentation hides orbit atmosphere shell');
assert(runtimeAtmosphericLight.visible === false, 'surface presentation hides orbit atmospheric light shell');
assert(runtimeClouds.visible === false, 'surface presentation hides orbit cloud shells');
assert(runtimeWater.visible === false, 'surface presentation hides orbit water shell');
assert(datasetObject.visible === false, 'surface presentation hides dataset objects');
assert(tagObject.visible === false, 'surface presentation hides tag objects');
assert(boxObject.visible === false, 'surface presentation hides box objects');
assert(lineObject.visible === false, 'surface presentation hides generic line objects');
assert(routeTrace.visible === true, 'surface presentation preserves procedural surface route traces');
const routeMarkerObject = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshBasicMaterial({ color: 0x44ff44 }));
routeMarkerObject.name = 'procedural-surface-route-markers';
scene.add(routeMarkerObject);
runtime.applySurfacePresentation();
assert(routeMarkerObject.visible === true, 'surface presentation preserves procedural surface marker objects');
assert(runtime.getSurfacePresentationDiagnostics().every((row) => row.name !== 'runtime-validation-line'), 'surface diagnostics exclude hidden line objects');

window.appStatus = 'intro-menu';
runtime.applySurfacePresentation();
assert(runtime.getSurfacePresentationState().active === true, 'surface presentation can stay active during intro menu');
assert(runtime.getSurfacePresentationState().hiddenDomElements === 0, 'surface presentation restores DOM overlays during intro menu');
assert(fakeDomElements.get('playbutton').style.display === 'inline-block', 'surface presentation leaves play overlay available during intro menu');
window.appStatus = 'flight';
runtime.applySurfacePresentation();
assert(runtime.getSurfacePresentationState().hiddenDomElements === 3, 'surface presentation hides DOM overlays again in flight');

const preClampState = runtime.setSurfaceFlightAltitude(-0.08);
assert(preClampState.altitude >= 0.119, 'surface flight altitude clamps against generated terrain');
assert(preClampState.surfaceRadius > 4.95 && preClampState.surfaceRadius < 5.1, 'runtime flight state reports generated surface radius');
assert(runtime.shouldShowGuttaOctreeDebug({ developer: true, settlementMode: false }) === false, 'procedural runtime suppresses octree helper debug');

runtime.applyBookmark('far');
assert(window.appStatus === 'orbit', 'far bookmark returns to orbit mode');
assert(flyControls.enabled === false, 'far bookmark disables fly controls');
assert(orbitControls.enabled === true, 'far bookmark enables orbit controls');
assert(runtime.getSurfacePresentationState().active === false, 'far bookmark disables surface presentation');
assert(scene.fog === originalSceneFog, 'surface presentation restores previous scene fog');
assert(fakeDomElements.get('playbutton').style.display === 'inline-block', 'surface presentation restores play overlay');
assert(runtimeSemanticLandmarks.visible === true, 'surface presentation restores semantic landmarks');
assert(runtimeAtmosphere.visible === true, 'surface presentation restores orbit atmosphere shell');
assert(runtimeAtmosphericLight.visible === true, 'surface presentation restores orbit atmospheric light shell');
assert(runtimeClouds.visible === true, 'surface presentation restores orbit cloud shells');
assert(runtimeWater.visible === true, 'surface presentation restores orbit water shell');
assert(datasetObject.visible === true, 'surface presentation restores dataset visibility');
assert(lineObject.visible === true, 'surface presentation restores generic line visibility');
assert(transitionCancels >= 2, 'bookmarks cancel smooth orbit transitions');

const largestNode = [...planetTagData]
  .filter((node) => Number.isFinite(Number(node.lat)) && Number.isFinite(Number(node.lng)))
  .sort((a, b) => Number(b.size || 0) - Number(a.size || 0))[0];
assert(largestNode, 'found a major node for change-sensitivity check');
assert(first.getNodeMetrics(largestNode.id)?.centrality !== undefined, 'node metrics are available by id');

const movedTagData = planetTagData.map((node) => {
  if (node.id !== largestNode.id) return { ...node };
  return {
    ...node,
    lat: Math.max(-84, Math.min(84, Number(node.lat) + 16)),
    lng: Number(node.lng) > 130 ? Number(node.lng) - 32 : Number(node.lng) + 32,
  };
});
const moved = makePlanet({ tagData: movedTagData });
const before = first.sampleLatLng(largestNode.lat, largestNode.lng);
const after = moved.sampleLatLng(largestNode.lat, largestNode.lng);
const localDifference =
  Math.abs(before.height - after.height) +
  Math.abs(before.settlementSuitability - after.settlementSuitability) +
  Math.abs(before.emission - after.emission);
assert(localDifference > 0.01, 'moving a major node changes its old local geography');

console.log('Procedural planet validation passed.');
