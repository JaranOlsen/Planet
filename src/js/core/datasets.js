import * as THREE from 'three';
import { planetTagData as planetTagDataInitial, planetConnections as planetConnectionsInitial, planetArrowedConnections as planetArrowedConnectionsInitial, planetDashedConnections as planetDashedConnectionsInitial, planetTunnelConnections as planetTunnelConnectionsInitial } from '../data/planetData.js';
import { planetImageData as planetImageDataInitial } from '../data/planetImageData.js';
import { planetNuggetData } from '../data/planetNuggetData.js';
import { spiralTagData, spiralConnections, spiralArrowedConnections, spiralDashedConnections } from '../data/spiralData.js';
import { spiralImageData } from '../data/spiralImageData.js';
import { enneagramTagData, enneagramConnections, enneagramArrowedConnections, enneagramDashedConnections, enneagramTunnelConnections } from '../data/enneagramData.js';

export const contexts = [];
export const nuggets = [];

let activePlanetImages = planetImageDataInitial;

const datasetState = {
  jaranius: null,
  planetContent: null,
  spiral: null,
  jaraniusConnections: null,
  spiralDynamicsConnections: null,
  enneagram: null,
  enneagramConnectionsObj: null,
  instantiateNugget: null,
  createImages: null,
  createTags: null,
  createConnections: null,
  intersectObjectsArray: null,
  developerMode: false,
};

export function configureDatasets(deps) {
  Object.assign(datasetState, deps);
}

export function resetContexts() {
  contexts.length = 0;
}

export function createContexts(version) {
  if (!datasetState.planetContent || !datasetState.spiral || !datasetState.enneagram) {
    throw new Error('Dataset dependencies missing. Call configureDatasets() before createContexts().');
  }

  // Avoid duplicating entries if createContexts is called multiple times
  contexts.length = 0;

  contexts.push({
    name: 'Planet',
    tagData: planetTagDataInitial,
    tagDestination: datasetState.planetContent,
    connectionData: planetConnectionsInitial,
    arrowConnectionData: planetArrowedConnectionsInitial,
    dashedConnectionData: planetDashedConnectionsInitial,
    tunnelConnectionData: planetTunnelConnectionsInitial,
    connectionDestination: datasetState.jaraniusConnections,
    radius: 5,
    pins: [],
    boxes: [],
    tags: [],
  });

  contexts.push({
    name: 'Spiral',
    tagData: spiralTagData,
    tagDestination: datasetState.spiral,
    connectionData: spiralConnections,
    arrowConnectionData: spiralArrowedConnections,
    dashedConnectionData: spiralDashedConnections,
    connectionDestination: datasetState.spiralDynamicsConnections,
    radius: 7,
    pins: [],
    boxes: [],
    tags: [],
  });

  contexts.push({
    name: 'Nuggets',
    tagData: planetNuggetData,
    tagDestination: datasetState.planetContent,
    connectionData: undefined,
    arrowConnectionData: undefined,
    dashedConnectionData: undefined,
    connectionDestination: undefined,
    radius: 5,
    pins: [],
    boxes: [],
    tags: [],
  });

  contexts.push({
    name: 'Enneagram',
    tagData: enneagramTagData,
    tagDestination: datasetState.enneagram,
    connectionData: enneagramConnections,
    arrowConnectionData: enneagramArrowedConnections,
    dashedConnectionData: enneagramDashedConnections,
    tunnelConnectionData: enneagramTunnelConnections,
    connectionDestination: datasetState.enneagramConnectionsObj,
    radius: 8.5,
    pins: [],
    boxes: [],
    tags: [],
  });

  datasetState.developerMode = version === 3;
  return datasetState.developerMode;
}

export function clearPlanetImages() {
  const { planetContent } = datasetState;
  if (!planetContent) return;
  const removals = [];
  planetContent.traverse((child) => {
    if (child.isMesh && child.material && child.material.map) {
      removals.push(child);
    }
  });
  removals.forEach((mesh) => {
    planetContent.remove(mesh);
    if (mesh.geometry) mesh.geometry.dispose();
    if (Array.isArray(mesh.material)) {
      mesh.material.forEach((m) => {
        if (m && m.map && m.map.dispose) m.map.dispose();
        if (m && m.dispose) m.dispose();
      });
    } else if (mesh.material) {
      if (mesh.material.map && mesh.material.map.dispose) mesh.material.map.dispose();
      if (mesh.material.dispose) mesh.material.dispose();
    }
  });
}

function disposeMeshRecursive(obj) {
  obj.traverse((child) => {
    if (child.isMesh) {
      if (child.geometry) child.geometry.dispose();
      if (Array.isArray(child.material)) {
        child.material.forEach((m) => m && m.dispose && m.dispose());
      } else if (child.material) {
        child.material.dispose && child.material.dispose();
      }
    }
  });
}

export function clearPlanetMindmapVisuals() {
  const { jaraniusConnections, intersectObjectsArray: intersectors } = datasetState;
  const planetCtx = contexts[0];
  if (!planetCtx) return;

  planetCtx.pins.forEach((pin) => {
    const idx = intersectors ? intersectors.indexOf(pin) : -1;
    if (idx > -1) intersectors.splice(idx, 1);
    if (pin.parent) pin.parent.remove(pin);
  });
  planetCtx.boxes.forEach((box) => {
    if (box.parent) box.parent.remove(box);
  });
  planetCtx.tags.forEach((tag) => {
    if (tag.parent) tag.parent.remove(tag);
  });
  planetCtx.pins.length = 0;
  planetCtx.boxes.length = 0;
  planetCtx.tags.length = 0;

  if (jaraniusConnections) {
    jaraniusConnections.children.slice().forEach((child) => {
      disposeMeshRecursive(child);
      jaraniusConnections.remove(child);
    });
  }
}

export function createMindmap() {
  const {
    jaranius,
    planetContent,
    spiral,
    jaraniusConnections,
    spiralDynamicsConnections,
    enneagram,
    enneagramConnectionsObj,
    instantiateNugget,
    createImages,
    createTags,
    createConnections,
  } = datasetState;

  if (!jaranius || !planetContent || !spiral || !instantiateNugget || !createImages || !createTags || !createConnections) {
    throw new Error('Dataset dependencies missing. Call configureDatasets() before createMindmap().');
  }

  if (!planetContent.parent) jaranius.add(planetContent);

  for (let i = 0; i < activePlanetImages.length; i++) {
    const img = activePlanetImages[i];
    createImages(img.src, img.lat, img.lng, img.size / 500, img.radius, planetContent);
  }

  for (let i = 0; i < spiralImageData.length; i++) {
    createImages(spiralImageData[i].src, spiralImageData[i].lat, spiralImageData[i].lng, spiralImageData[i].size / 500, spiralImageData[i].radius, spiral);
  }

  const indexMod = 0;
  createTags(contexts[0].tagData, contexts[0].tagDestination, contexts[0].radius, 0, indexMod);
  createTags(contexts[1].tagData, contexts[1].tagDestination, contexts[1].radius, 1, indexMod);
  createTags(contexts[3].tagData, contexts[3].tagDestination, contexts[3].radius, 3, indexMod);

  for (let i = 0; i < planetNuggetData.length; i++) {
    const nugget = instantiateNugget(
      i,
      planetNuggetData[i].lat,
      planetNuggetData[i].lng,
      planetNuggetData[i].color,
      planetNuggetData[i].size / 100000,
      planetNuggetData[i].slides,
      jaranius,
      2,
    );
    nuggets.push(nugget);
  }

  const curveThickness = 0.0001;
  const curveRadiusSegments = 3;
  const curveMaxAltitude = 0.02;
  const curveMinAltitude = contexts[0].radius + 0.02;

  if (!jaraniusConnections.parent) jaranius.add(jaraniusConnections);
  const planetCtx = contexts[0];
  createConnections(planetCtx.tagData, planetCtx.connectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, jaraniusConnections, false, false);
  createConnections(planetCtx.tagData, planetCtx.dashedConnectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, jaraniusConnections, true, false);
  createConnections(planetCtx.tagData, planetCtx.arrowConnectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, jaraniusConnections, false, true);
  if (planetCtx.tunnelConnectionData) {
    createConnections(planetCtx.tagData, planetCtx.tunnelConnectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, jaraniusConnections, false, false, true);
  }

  if (!spiralDynamicsConnections.parent) spiral.add(spiralDynamicsConnections);
  createConnections(contexts[1].tagData, contexts[1].connectionData, 0.0002, curveRadiusSegments, 0.1, contexts[1].radius + 0.01, spiralDynamicsConnections, false, false);

  if (!enneagramConnectionsObj.parent) enneagram.add(enneagramConnectionsObj);
  createConnections(contexts[3].tagData, contexts[3].tunnelConnectionData, 0.0002, curveRadiusSegments, 0.1, contexts[3].radius + 0.01, enneagramConnectionsObj, false, false, true);
}

const mindmapRegistry = [
  { name: 'Full', module: '../data/planetData.js', images: '../data/planetImageData.js' },
  { name: 'Simple', module: '../data/planetSimpleData.js', images: '../data/planetSimpleImageData.js' },
];

let activeMindmapIndex = 0;
let mindmapSwitchInProgress = false;

export async function switchMindmap(index) {
  if (index === activeMindmapIndex) return;
  if (index < 0 || index >= mindmapRegistry.length) return;
  if (mindmapSwitchInProgress) return;

  mindmapSwitchInProgress = true;
  const entry = mindmapRegistry[index];
  try {
    const cacheBust = `?t=${Date.now()}`;
    const [mod, imgMod] = await Promise.all([
      import(/* @vite-ignore */ `${entry.module}${cacheBust}`),
      import(/* @vite-ignore */ `${entry.images}${cacheBust}`),
    ]);

    const required = ['planetTagData', 'planetConnections', 'planetArrowedConnections', 'planetDashedConnections', 'planetTunnelConnections'];
    const missing = required.filter((k) => !mod[k]);
    if (missing.length) console.warn('Mindmap dataset missing exports:', missing.join(', '));

    clearPlanetMindmapVisuals();
    clearPlanetImages();

    const planetCtx = contexts[0];
    planetCtx.name = entry.name;
    planetCtx.tagData = mod.planetTagData || [];
    planetCtx.connectionData = mod.planetConnections || [];
    planetCtx.arrowConnectionData = mod.planetArrowedConnections || [];
    planetCtx.dashedConnectionData = mod.planetDashedConnections || [];
    planetCtx.tunnelConnectionData = mod.planetTunnelConnections || [];
    planetCtx.pins = [];
    planetCtx.tags = [];
    planetCtx.boxes = [];

    activePlanetImages = imgMod.planetImageData || [];

    createMindmap();
    activeMindmapIndex = index;
    console.log(`Mindmap switched to ${entry.name}`);
  } catch (err) {
    console.error('Mindmap switch failed:', err);
  } finally {
    mindmapSwitchInProgress = false;
  }
}

export function setActivePlanetImages(images) {
  activePlanetImages = images;
}

export function getActivePlanetImages() {
  return activePlanetImages;
}

export function isDeveloperMode() {
  return !!datasetState.developerMode;
}
