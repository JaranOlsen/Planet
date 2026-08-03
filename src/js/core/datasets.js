import * as THREE from 'three';
import { planetTagData as planetTagDataInitial, planetConnections as planetConnectionsInitial, planetArrowedConnections as planetArrowedConnectionsInitial, planetDashedConnections as planetDashedConnectionsInitial, planetTunnelConnections as planetTunnelConnectionsInitial } from '../data/planetData.js';
import { planetImageData as planetImageDataInitial } from '../data/planetImageData.js';
import { planetNuggetData } from '../data/planetNuggetData.js';
import { spiralTagData, spiralConnections, spiralArrowedConnections, spiralDashedConnections, spiralTunnelConnections } from '../data/spiralData.js';
import { spiralImageData } from '../data/spiralImageData.js';
import { enneagramTagData, enneagramConnections, enneagramArrowedConnections, enneagramDashedConnections, enneagramTunnelConnections } from '../data/enneagramData.js';

export const contexts = [];
export const nuggets = [];

let activePlanetImages = planetImageDataInitial;

const fullMindmapModule = Object.freeze({
  planetTagData: planetTagDataInitial,
  planetConnections: planetConnectionsInitial,
  planetArrowedConnections: planetArrowedConnectionsInitial,
  planetDashedConnections: planetDashedConnectionsInitial,
  planetTunnelConnections: planetTunnelConnectionsInitial,
});

const fullMindmapImageModule = Object.freeze({
  planetImageData: planetImageDataInitial,
});

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
  clearConnectionEditorObjectsForDestination: null,
  intersectObjectsArray: null,
  developerMode: false,
};

export function configureDatasets(deps) {
  Object.assign(datasetState, deps);
}

export function resetContexts() {
  contexts.length = 0;
}

function normalizeConnectionRows(tagData, rows) {
  if (!Array.isArray(rows)) return rows;
  const rowsById = new Map();
  rows.forEach((row) => {
    if (Array.isArray(row) && row[0]) rowsById.set(row[0], row);
  });
  const normalized = tagData.map((tag) => rowsById.get(tag.id) || [tag.id]);
  rows.splice(0, rows.length, ...normalized);
  return rows;
}

function normalizeContextConnectionRows(context) {
  normalizeConnectionRows(context.tagData, context.connectionData);
  normalizeConnectionRows(context.tagData, context.arrowConnectionData);
  normalizeConnectionRows(context.tagData, context.dashedConnectionData);
  normalizeConnectionRows(context.tagData, context.tunnelConnectionData);
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
    imageData: activePlanetImages,
    imageDestination: datasetState.planetContent,
    images: [],
  });

  contexts.push({
    name: 'Spiral',
    tagData: spiralTagData,
    tagDestination: datasetState.spiral,
    connectionData: spiralConnections,
    arrowConnectionData: spiralArrowedConnections,
    dashedConnectionData: spiralDashedConnections,
    tunnelConnectionData: spiralTunnelConnections,
    connectionDestination: datasetState.spiralDynamicsConnections,
    radius: 7,
    pins: [],
    boxes: [],
    tags: [],
    imageData: spiralImageData,
    imageDestination: datasetState.spiral,
    images: [],
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
    imageData: [],
    imageDestination: datasetState.enneagram,
    images: [],
  });

  contexts.forEach(normalizeContextConnectionRows);

  datasetState.developerMode = version === 3;
  return datasetState.developerMode;
}

export function clearPlanetImages() {
  const { planetContent, intersectObjectsArray: intersectors } = datasetState;
  if (!planetContent) return;
  const planetCtx = contexts[0];
  const removals = new Set(planetCtx?.images || []);
  planetContent.traverse((child) => {
    if (child.isMesh && child.material && child.material.map) {
      removals.add(child);
    }
  });
  removals.forEach((mesh) => {
    const intersectIndex = intersectors ? intersectors.indexOf(mesh) : -1;
    if (intersectIndex >= 0) intersectors.splice(intersectIndex, 1);
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
  if (planetCtx?.images) planetCtx.images.length = 0;
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
    if (pin.geometry) pin.geometry.dispose();
  });
  planetCtx.boxes.forEach((box) => {
    const group = box.userData?.group;
    if (group?.parent) group.parent.remove(group);
    else if (box.parent) box.parent.remove(box);
    if (box.geometry) box.geometry.dispose();
  });
  planetCtx.tags.forEach((tag) => {
    const group = tag.userData?.group;
    if (group?.parent) group.parent.remove(group);
    else if (tag.parent) tag.parent.remove(tag);
    if (tag.geometry) tag.geometry.dispose();
  });
  planetCtx.pins.length = 0;
  planetCtx.boxes.length = 0;
  planetCtx.tags.length = 0;

  if (jaraniusConnections) {
    if (datasetState.clearConnectionEditorObjectsForDestination) {
      datasetState.clearConnectionEditorObjectsForDestination(jaraniusConnections);
    }
    if (typeof window !== 'undefined' && Array.isArray(window.curveMeshes)) {
      window.curveMeshes = window.curveMeshes.filter((curveData) => curveData.mesh?.parent !== jaraniusConnections);
    }
    jaraniusConnections.children.slice().forEach((child) => {
      disposeMeshRecursive(child);
      jaraniusConnections.remove(child);
    });
  }
}

function createPlanetVisuals() {
  const {
    jaranius,
    planetContent,
    jaraniusConnections,
    createImages,
    createTags,
    createConnections,
  } = datasetState;

  if (!jaranius || !planetContent || !jaraniusConnections || !createImages || !createTags || !createConnections) {
    throw new Error('Planet dataset dependencies are missing.');
  }

  const planetCtx = contexts[0];
  normalizeContextConnectionRows(planetCtx);
  if (!planetContent.parent) jaranius.add(planetContent);

  for (let i = 0; i < activePlanetImages.length; i++) {
    const img = activePlanetImages[i];
    const created = createImages(img.src, img.lat, img.lng, img.size / 500, img.radius, planetContent, {
      contextIndex: 0,
      imageIndex: i,
      source: activePlanetImages,
      dataSize: img.size,
    });
    planetCtx.images[i] = created.box;
  }
  planetCtx.imageData = activePlanetImages;
  planetCtx.imageDestination = planetContent;

  createTags(planetCtx.tagData, planetCtx.tagDestination, planetCtx.radius, 0, 0);

  const curveThickness = 0.0001;
  const curveRadiusSegments = 3;
  const curveMaxAltitude = 0.02;
  const curveMinAltitude = planetCtx.radius + 0.02;
  const editorOptions = (kind) => ({
    developer: datasetState.developerMode,
    contextIndex: 0,
    kind,
  });

  if (!jaraniusConnections.parent) jaranius.add(jaraniusConnections);
  const planetCurveThickness = planetCtx.name === 'Compass' ? 0.00032 : curveThickness;
  const planetCurveMaxAltitude = planetCtx.name === 'Compass' ? 0.025 : curveMaxAltitude;
  const planetCurveMinAltitude = planetCtx.name === 'Compass' ? planetCtx.radius + 0.075 : curveMinAltitude;
  createConnections(planetCtx.tagData, planetCtx.connectionData, planetCurveThickness, curveRadiusSegments, planetCurveMaxAltitude, planetCurveMinAltitude, jaraniusConnections, false, false, false, editorOptions('normal'));
  createConnections(planetCtx.tagData, planetCtx.dashedConnectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, jaraniusConnections, true, false, false, editorOptions('dashed'));
  createConnections(planetCtx.tagData, planetCtx.arrowConnectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, jaraniusConnections, false, true, false, editorOptions('arrow'));
  createConnections(planetCtx.tagData, planetCtx.tunnelConnectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, jaraniusConnections, false, false, true, editorOptions('tunnel'));
}

export function createMindmap() {
  const {
    jaranius,
    planetContent,
    spiral,
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

  createPlanetVisuals();

  for (let i = 0; i < spiralImageData.length; i++) {
    const img = spiralImageData[i];
    const created = createImages(img.src, img.lat, img.lng, img.size / 500, img.radius, spiral, {
      contextIndex: 1,
      imageIndex: i,
      source: spiralImageData,
      dataSize: img.size,
    });
    contexts[1].images[i] = created.box;
  }

  createTags(contexts[1].tagData, contexts[1].tagDestination, contexts[1].radius, 1, 0);
  createTags(contexts[3].tagData, contexts[3].tagDestination, contexts[3].radius, 3, 0);

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
  const editorOptions = (contextIndex, kind) => ({
    developer: datasetState.developerMode,
    contextIndex,
    kind,
  });

  if (!spiralDynamicsConnections.parent) spiral.add(spiralDynamicsConnections);
  createConnections(contexts[1].tagData, contexts[1].connectionData, 0.0002, curveRadiusSegments, 0.1, contexts[1].radius + 0.01, spiralDynamicsConnections, false, false, false, editorOptions(1, 'normal'));
  createConnections(contexts[1].tagData, contexts[1].arrowConnectionData, 0.0002, curveRadiusSegments, 0.1, contexts[1].radius + 0.01, spiralDynamicsConnections, false, true, false, editorOptions(1, 'arrow'));
  createConnections(contexts[1].tagData, contexts[1].dashedConnectionData, 0.0002, curveRadiusSegments, 0.1, contexts[1].radius + 0.01, spiralDynamicsConnections, true, false, false, editorOptions(1, 'dashed'));
  createConnections(contexts[1].tagData, contexts[1].tunnelConnectionData, 0.0002, curveRadiusSegments, 0.1, contexts[1].radius + 0.01, spiralDynamicsConnections, false, false, true, editorOptions(1, 'tunnel'));

  if (!enneagramConnectionsObj.parent) enneagram.add(enneagramConnectionsObj);
  createConnections(contexts[3].tagData, contexts[3].connectionData, 0.0002, curveRadiusSegments, 0.1, contexts[3].radius + 0.01, enneagramConnectionsObj, false, false, false, editorOptions(3, 'normal'));
  createConnections(contexts[3].tagData, contexts[3].arrowConnectionData, 0.0002, curveRadiusSegments, 0.1, contexts[3].radius + 0.01, enneagramConnectionsObj, false, true, false, editorOptions(3, 'arrow'));
  createConnections(contexts[3].tagData, contexts[3].dashedConnectionData, 0.0002, curveRadiusSegments, 0.1, contexts[3].radius + 0.01, enneagramConnectionsObj, true, false, false, editorOptions(3, 'dashed'));
  createConnections(contexts[3].tagData, contexts[3].tunnelConnectionData, 0.0002, curveRadiusSegments, 0.1, contexts[3].radius + 0.01, enneagramConnectionsObj, false, false, true, editorOptions(3, 'tunnel'));
}

const mindmapRegistry = [
  {
    name: 'Full',
    load: () => Promise.resolve([fullMindmapModule, fullMindmapImageModule]),
  },
  {
    name: 'Simple',
    load: () => Promise.all([import('../data/planetSimpleData.js'), import('../data/planetSimpleImageData.js')]),
  },
  {
    name: 'Compass',
    load: () => Promise.all([import('../data/planetCompassData.js'), import('../data/planetCompassImageData.js')]),
  },
];

let activeMindmapIndex = 0;
let mindmapSwitchInProgress = false;

export async function switchMindmap(index) {
  if (index === activeMindmapIndex) return { ok: true, unchanged: true, name: mindmapRegistry[index]?.name };
  if (index < 0 || index >= mindmapRegistry.length) return { ok: false, error: 'Unknown mindmap.' };
  if (mindmapSwitchInProgress) return { ok: false, error: 'A mindmap switch is already in progress.' };

  mindmapSwitchInProgress = true;
  const entry = mindmapRegistry[index];
  const planetCtx = contexts[0];
  const previous = {
    index: activeMindmapIndex,
    name: planetCtx.name,
    tagData: planetCtx.tagData,
    connectionData: planetCtx.connectionData,
    arrowConnectionData: planetCtx.arrowConnectionData,
    dashedConnectionData: planetCtx.dashedConnectionData,
    tunnelConnectionData: planetCtx.tunnelConnectionData,
    images: activePlanetImages,
  };

  try {
    const [mod, imgMod] = await entry.load();

    const required = ['planetTagData', 'planetConnections', 'planetArrowedConnections', 'planetDashedConnections', 'planetTunnelConnections'];
    const missing = required.filter((k) => !mod[k]);
    if (missing.length) console.warn('Mindmap dataset missing exports:', missing.join(', '));

    clearPlanetMindmapVisuals();
    clearPlanetImages();

    planetCtx.name = entry.name;
    planetCtx.tagData = mod.planetTagData || [];
    planetCtx.connectionData = mod.planetConnections || [];
    planetCtx.arrowConnectionData = mod.planetArrowedConnections || [];
    planetCtx.dashedConnectionData = mod.planetDashedConnections || [];
    planetCtx.tunnelConnectionData = mod.planetTunnelConnections || [];
    planetCtx.pins = [];
    planetCtx.tags = [];
    planetCtx.boxes = [];
    planetCtx.images = [];

    activePlanetImages = imgMod.planetImageData || [];
    planetCtx.imageData = activePlanetImages;

    normalizeContextConnectionRows(planetCtx);
    createPlanetVisuals();
    activeMindmapIndex = index;
    console.log(`Mindmap switched to ${entry.name}`);
    return { ok: true, name: entry.name };
  } catch (err) {
    console.error('Mindmap switch failed:', err);
    try {
      clearPlanetMindmapVisuals();
      clearPlanetImages();
      planetCtx.name = previous.name;
      planetCtx.tagData = previous.tagData;
      planetCtx.connectionData = previous.connectionData;
      planetCtx.arrowConnectionData = previous.arrowConnectionData;
      planetCtx.dashedConnectionData = previous.dashedConnectionData;
      planetCtx.tunnelConnectionData = previous.tunnelConnectionData;
      activePlanetImages = previous.images;
      planetCtx.imageData = activePlanetImages;
      activeMindmapIndex = previous.index;
      createPlanetVisuals();
    } catch (rollbackError) {
      console.error('Mindmap rollback failed:', rollbackError);
    }
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
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

export function getActivePlanetTagData() {
  return contexts[0]?.tagData || fullMindmapModule.planetTagData;
}

export function isDeveloperMode() {
  return !!datasetState.developerMode;
}
