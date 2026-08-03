//  IMPORT DEPENDENCIES
import * as THREE from 'three'
import { generateUUID } from 'three/src/math/MathUtils.js'
import WordCloud from 'wordcloud';
window.WordCloud = WordCloud;


//  IMPORT SCRIPTS
import {
    renderer,
    camera,
    clock,
    orbitControls,
    flyControls,
    resizeRendererToDisplaySize,
    updateFlightSpeedByDistance,
    beginSmoothOrbitTransition,
    cancelSmoothOrbitTransition,
    getFollowMode,
    setFollowMode,
    setOrbitReviewView,
    updateFlightStabilizer,
    updateSmoothOrbitTransition,
} from './core/camera.js'
import { setupLighting } from './core/lighting.js'
import {
    createImages,
    createTags,
    hoveredPins,
    intersectObjectsArray,
    createConnections,
    hoverPins,
    instantiateNugget,
    refreshNode,
    beginConnectionHandleDrag,
    updateConnectionHandleDrag,
    endConnectionHandleDrag,
    isConnectionHandleDragActive,
    refreshConnectionHandleVisibility,
    clearConnectionEditorObjectsForDestination,
    findConnectionTargetIndex,
    rebuildNodeLabel,
    refreshNodeMaterial,
    clearHoveredPins,
} from './mindmap.js'
import {
    configureDatasets,
    contexts,
    nuggets,
    createContexts as datasetsCreateContexts,
    createMindmap as datasetsCreateMindmap,
    clearPlanetMindmapVisuals as datasetsClearPlanetMindmapVisuals,
    clearPlanetImages as datasetsClearPlanetImages,
    switchMindmap as datasetsSwitchMindmap,
    isDeveloperMode,
} from './core/datasets.js'
import { getRandomNum, convertCartesiantoLatLng, convertLatLngtoCartesian, constrainLatLng, easeInOutQuad } from './mathScripts.js'
import { pushContent, handleCarouselButton, createSlideshowStatus, createPreviewSlideshowStatus } from './content.js'
import { revealNextSlideStep } from './slides.js'
import { initialiseVersion } from './versions.js'
import { creation } from './creation.js'
import { updateGutta, guttCrumbMesh, maraCrumbMesh, cycleStatsChartView, toggleParametersPanel } from './gutta.js'
import { setupIntro, introState, fadeOutAudio, animateLetterSpacing } from './core/intro.js'
import { DeveloperHud } from './core/developerHud.js'
import { DeveloperContextMenu } from './core/developerContextMenu.js'
import { DeveloperSlideLab } from './core/developerSlideLab.js'
import { saveMindmapDataFile, serializeMindmapDataFile } from './core/mindmapDataFile.js'
import { hasOpenableSlides } from './core/slideAccess.js'
import { PlanetEnvironment } from './core/planetEnvironment.js'
import { createProceduralPlanet } from './core/proceduralPlanet.js'
import { createProceduralPlanetRuntime } from './core/proceduralPlanetRuntime.js'
import { SettlementMapLayer } from './settlementMap.js'

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        window.location.reload();
    });
}

//IMPORT DATA
// Default / initial mindmap dataset (index 0). Additional datasets loaded dynamically.
import { palette } from './data/palette.js'
import { boxMaterials } from './data/materials.js'
import {
    planetTagData,
    planetConnections,
    planetArrowedConnections,
    planetDashedConnections,
    planetTunnelConnections,
} from './data/planetData.js'

window.appStatus = "initialising";


const scene = new THREE.Scene();

const pointer = new THREE.Vector2;
const raycaster = new THREE.Raycaster();

let developer = false;

let selectedContext = 0;
let selectedPin = null;
let selectedBox = null;
let selectedTag = null;
let selectedNode = null;
let selectedNodes = []
let selectedImage = null;
let selectedImageMesh = null;
let showContent = true;
let fastMove = false;
let openSlidesOnNodeClick = true;
let cursorConnectionMode = 'off';
let cursorConnectionSource = null;
let editorDirtyContexts = new Set();
let editorBaselines = new Map();
let editorUndoStack = [];
let editorRedoStack = [];
let tagInputMode = null;
let suppressTagInputEnterKeyUp = false;
let pointerClient = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let nodeDragState = null;
let imageDragState = null;
let connectionHandleHistoryBefore = null;
let settlementMode = false;
let settlementMapLayer = null;
let settlementLabelRefreshTimer = null;
const developerContextMenu = new DeveloperContextMenu({
    onCreate: (state) => openTagInput('create', state.contextIndex, null, state),
    onEdit: (state) => openTagInput('edit', state.contextIndex, state.nodeIndex, state),
    onDelete: (state) => deleteEditorNodes(state.contextIndex, state.targetIndices),
    onSetSize: (size, state) => setEditorNodesSize(state.contextIndex, state.targetIndices, size),
    onSetColor: (colorIndex, state) => setEditorNodesColor(state.contextIndex, state.targetIndices, colorIndex),
    onStartConnection: (kind, state) => startCursorConnectionFromNodes(kind, state.contextIndex, state.targetIndices),
    onToggleSelection: (state) => toggleEditorMultiSelection(state.contextIndex, state.nodeIndex),
    onClearSelection: () => clearEditorSelection(),
});
const developerHud = new DeveloperHud({
    onUndo: () => undoEditorChange(),
    onRedo: () => redoEditorChange(),
    onEditText: () => openSelectedNodeTextEditor(),
    onToggleSlides: () => toggleNodeSlideOpening(),
    onConnectionModeChange: (mode) => setCursorConnectionMode(mode),
});
const urlParams = new URLSearchParams(window.location.search);
const showDeveloperOctree = urlParams.get('debugOctree') === '1';
const planetRenderMode = urlParams.get('planet') === 'procedural' ? 'procedural' : 'legacy';

function readProceduralPlanetConfig(params) {
    const config = {};
    const seed = params.get('planetSeed');
    const weatherSeed = params.get('weatherSeed');
    if (seed) config.seed = seed;
    if (weatherSeed) config.weatherSeed = weatherSeed;
    if (params.has('seaLevel')) {
        const seaLevel = Number(params.get('seaLevel'));
        if (Number.isFinite(seaLevel)) config.seaLevel = seaLevel;
    }
    if (params.has('terrainScale')) {
        const terrainScale = Number(params.get('terrainScale'));
        if (Number.isFinite(terrainScale)) config.terrainScale = terrainScale;
    }
    return config;
}

const proceduralPlanet = planetRenderMode === 'procedural'
    ? createProceduralPlanet({
        tagData: planetTagData,
        connectionData: planetConnections,
        arrowConnectionData: planetArrowedConnections,
        dashedConnectionData: planetDashedConnections,
        tunnelConnectionData: planetTunnelConnections,
    }, readProceduralPlanetConfig(urlParams))
    : null;

window.planetRenderMode = planetRenderMode;

function getSelectedConnectionNodeIds() {
    const ctx = contexts[selectedContext];
    if (!ctx?.tagData) return [];

    if (selectedNodes.length > 0) {
        return selectedNodes
            .map((nodeIndex) => ctx.tagData[nodeIndex]?.id)
            .filter(Boolean);
    }

    if (selectedNode !== null && selectedNode !== undefined) {
        return [ctx.tagData[selectedNode]?.id].filter(Boolean);
    }

    return [];
}

function updateConnectionHandleVisibility() {
    if (!developer) {
        refreshConnectionHandleVisibility(selectedContext, []);
        return;
    }

    refreshConnectionHandleVisibility(selectedContext, getSelectedConnectionNodeIds());
}

function updateDeveloperHud() {
    const dirtyKey = getEditorDirtyKey(selectedContext);
    developerHud.update({
        developer,
        contexts,
        selectedContext,
        selectedNode,
        selectedNodes,
        selectedImage,
        fastMove,
        slidesOpen: openSlidesOnNodeClick,
        connectionMode: cursorConnectionMode,
        connectionSource: cursorConnectionSource?.label,
        dirty: editorDirtyContexts.has(dirtyKey),
        canUndo: editorUndoStack.length > 0,
        canRedo: editorRedoStack.length > 0,
    });
    updateConnectionHandleVisibility();
}

function setDeveloperStatus(status) {
    developerHud.setStatus(status);
    updateDeveloperHud();
}

function getEditorDirtyKey(contextIndex) {
    const context = contexts[contextIndex];
    return `${contextIndex}:${context?.name || 'unknown'}`;
}

function isEditableContext(contextIndex = selectedContext) {
    return contextIndex === 0 || contextIndex === 1 || contextIndex === 3;
}

function cloneEditorData(value) {
    if (value === undefined) return undefined;
    return typeof structuredClone === 'function'
        ? structuredClone(value)
        : JSON.parse(JSON.stringify(value));
}

function snapshotEditorContext(contextIndex = selectedContext) {
    const context = contexts[contextIndex];
    if (!context || !isEditableContext(contextIndex)) return null;
    return {
        tagData: cloneEditorData(context.tagData),
        connectionData: cloneEditorData(context.connectionData),
        arrowConnectionData: cloneEditorData(context.arrowConnectionData),
        dashedConnectionData: cloneEditorData(context.dashedConnectionData),
        tunnelConnectionData: cloneEditorData(context.tunnelConnectionData),
        imageData: cloneEditorData(context.imageData),
    };
}

function editorSnapshotsEqual(left, right) {
    return JSON.stringify(left) === JSON.stringify(right);
}

function markEditorDirty(contextIndex = selectedContext) {
    editorDirtyContexts.add(getEditorDirtyKey(contextIndex));
    if (contextIndex === 0) markSettlementMapDirty();
}

function refreshEditorDirtyState(contextIndex = selectedContext) {
    const key = getEditorDirtyKey(contextIndex);
    const baseline = editorBaselines.get(key);
    const current = snapshotEditorContext(contextIndex);
    if (baseline && current && editorSnapshotsEqual(baseline, current)) editorDirtyContexts.delete(key);
    else editorDirtyContexts.add(key);
    if (contextIndex === 0) markSettlementMapDirty();
}

function commitEditorMutation(label, contextIndex, before) {
    const after = snapshotEditorContext(contextIndex);
    if (!before || !after || editorSnapshotsEqual(before, after)) return false;
    const dirtyKey = getEditorDirtyKey(contextIndex);
    if (!editorBaselines.has(dirtyKey)) editorBaselines.set(dirtyKey, cloneEditorData(before));
    editorUndoStack.push({ label, contextIndex, contextName: contexts[contextIndex]?.name, before, after });
    if (editorUndoStack.length > 40) editorUndoStack.shift();
    editorRedoStack.length = 0;
    refreshEditorDirtyState(contextIndex);
    setDeveloperStatus(label);
    return true;
}

function replaceArrayContents(destination, source) {
    if (!Array.isArray(destination) || !Array.isArray(source)) return;
    destination.splice(0, destination.length, ...cloneEditorData(source));
}

async function restoreEditorSnapshot(entry, snapshot) {
    const context = contexts[entry.contextIndex];
    if (!context || context.name !== entry.contextName) {
        setDeveloperStatus(`Cannot restore ${entry.label}: the active dataset changed.`);
        return false;
    }

    clearContextVisuals(entry.contextIndex);
    replaceArrayContents(context.tagData, snapshot.tagData);
    replaceArrayContents(context.connectionData, snapshot.connectionData);
    replaceArrayContents(context.arrowConnectionData, snapshot.arrowConnectionData);
    replaceArrayContents(context.dashedConnectionData, snapshot.dashedConnectionData);
    replaceArrayContents(context.tunnelConnectionData, snapshot.tunnelConnectionData);
    replaceArrayContents(context.imageData, snapshot.imageData);
    await rebuildContextVisuals(entry.contextIndex);
    clearEditorSelection();
    refreshEditorDirtyState(entry.contextIndex);
    return true;
}

async function undoEditorChange() {
    const entry = editorUndoStack.pop();
    if (!entry) return;
    if (await restoreEditorSnapshot(entry, entry.before)) {
        editorRedoStack.push(entry);
        setDeveloperStatus(`Undid: ${entry.label}`);
    } else {
        editorUndoStack.push(entry);
    }
}

async function redoEditorChange() {
    const entry = editorRedoStack.pop();
    if (!entry) return;
    if (await restoreEditorSnapshot(entry, entry.after)) {
        editorUndoStack.push(entry);
        setDeveloperStatus(`Redid: ${entry.label}`);
    } else {
        editorRedoStack.push(entry);
    }
}

function toggleNodeSlideOpening() {
    openSlidesOnNodeClick = !openSlidesOnNodeClick;
    setDeveloperStatus(`Slides on node click: ${openSlidesOnNodeClick ? 'on' : 'off'}`);
}

function setCursorConnectionMode(mode) {
    const allowed = new Set(['off', 'normal', 'arrow', 'dashed', 'tunnel']);
    cursorConnectionMode = allowed.has(mode) ? mode : 'off';
    cursorConnectionSource = null;
    setDeveloperStatus(cursorConnectionMode === 'off'
        ? 'Cursor connection tool off.'
        : `Cursor connection: ${cursorConnectionMode}. Click a source node, then a target node.`);
}

function cycleCursorConnectionMode() {
    const modes = ['off', 'normal', 'arrow', 'dashed', 'tunnel'];
    const next = modes[(modes.indexOf(cursorConnectionMode) + 1) % modes.length];
    setCursorConnectionMode(next);
}

function clearEditorSelection() {
    selectedNodes.length = 0;
    selectedNode = null;
    selectedPin = null;
    selectedBox = null;
    selectedTag = null;
    selectedImage = null;
    selectedImageMesh = null;
    cursorConnectionSource = null;
    clearHoveredPins();
    updateDeveloperHud();
}

function createContexts(version) {
    const devMode = datasetsCreateContexts(version);
    developer = devMode;
    openSlidesOnNodeClick = !developer;
    developerSlideLab.setDeveloperMode(developer);
    if (!developer) {
        developerHud.hide();
    } else {
        updateDeveloperHud();
    }
    return devMode;
}

function createMindmap() {
    const result = datasetsCreateMindmap();
    updateDeveloperHud();
    return result;
}

function clearPlanetMindmapVisuals() {
    const result = datasetsClearPlanetMindmapVisuals();
    updateDeveloperHud();
    return result;
}

function clearPlanetImages() {
    const result = datasetsClearPlanetImages();
    updateDeveloperHud();
    return result;
}

function switchMindmap(index) {
    const result = datasetsSwitchMindmap(index);
    if (result && typeof result.then === 'function') {
        return result.then((value) => {
            if (value?.ok) {
                clearEditorSelection();
                editorUndoStack.length = 0;
                editorRedoStack.length = 0;
                setDeveloperStatus(value.unchanged ? `${value.name} is already active.` : `Switched to ${value.name}.`);
            } else if (value?.error) {
                setDeveloperStatus(`Switch failed: ${value.error}`);
            }
            markSettlementMapDirty();
            if (settlementMode) {
                setClassicMindmapVisualsVisible(false);
                scheduleSettlementLabelStyleRefresh();
                syncSettlementMapVisibility();
            }
            updateDeveloperHud();
            return value;
        });
    }
    markSettlementMapDirty();
    if (settlementMode) {
        setClassicMindmapVisualsVisible(false);
        scheduleSettlementLabelStyleRefresh();
        syncSettlementMapVisibility();
    }
    updateDeveloperHud();
    return result;
}

export { createContexts, createMindmap, clearPlanetMindmapVisuals, clearPlanetImages, switchMindmap };

export let slideshowStatus = {
    activeSlideshow: undefined,
    activeSlideshowLength: undefined,
    activeSlide: undefined,
    activeSlideLength: undefined,
    activeSubSlide: undefined
}

const developerSlideLab = new DeveloperSlideLab({
    onPreviewDeck: previewDeckInSlideshow,
    onRevealStep: revealNextSlideStep,
});

window.slideLab = {
    previewDeck: previewDeckInSlideshow,
    revealNext: revealNextSlideStep,
    getDiagnostics: () => window.slideDiagnostics,
};

async function previewDeckInSlideshow(deck) {
    slideshowStatus = createPreviewSlideshowStatus(deck);
    await pushContent(slideshowStatus);
    if (window.appStatus == "flight") {
        flyControls.enabled = false;
        document.body.style.cursor = 'default';
    }
    window.appStatus = "slideshow";
    const slideShowScreen = document.querySelector(`#slides`);
    slideShowScreen.style.display = "flex";
    return window.slideDiagnostics;
}

const silenceOverlayElementIds = [
    'credits',
    'skipbutton',
    'playbutton',
    'subtitle-container',
    'versions',
    'footer',
    'hotKeys',
    'slides',
    'fpsCounter',
    'guttaStatScreen',
];

const silenceOverlayState = {
    previousAppStatus: undefined,
    previousCursor: '',
    previousOrbitEnabled: false,
    previousFlyEnabled: false,
    previousTitleVisible: false,
    hiddenDisplays: new Map(),
    resumeIntroAudio: false,
    introAudioTime: 0,
};

function enterSilenceScreen() {
    if (window.appStatus === "initialising" || window.appStatus === "silence" || window.appStatus === "flight") {
        return;
    }

    const silence = document.getElementById('silence');
    const silenceAudio = document.getElementById('silenceAudio');
    if (!silence || !silenceAudio) {
        return;
    }

    silenceOverlayState.previousAppStatus = window.appStatus;
    silenceOverlayState.previousCursor = document.body.style.cursor;
    silenceOverlayState.previousOrbitEnabled = orbitControls.enabled;
    silenceOverlayState.previousFlyEnabled = flyControls.enabled;
    silenceOverlayState.hiddenDisplays.clear();

    silenceOverlayElementIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
            return;
        }
        silenceOverlayState.hiddenDisplays.set(id, element.style.display);
        element.style.display = 'none';
    });

    const title = scene.getObjectByName('title');
    silenceOverlayState.previousTitleVisible = !!title && title.visible;
    if (title) {
        title.visible = false;
    }

    silenceOverlayState.resumeIntroAudio = !!introState.audio && !introState.audio.paused;
    silenceOverlayState.introAudioTime = silenceOverlayState.resumeIntroAudio ? introState.audio.currentTime : 0;
    if (silenceOverlayState.resumeIntroAudio) {
        introState.audio.pause();
    }

    silence.style.display = 'block';
    silence.style.letterSpacing = '4rem';
    silence.style.marginRight = '-4rem';
    document.body.style.cursor = 'none';
    orbitControls.enabled = false;
    flyControls.enabled = false;
    window.appStatus = "silence";

    silenceAudio.pause();
    silenceAudio.currentTime = 0;
    silenceAudio.volume = 1;
    silenceAudio.play().catch((error) => {
        console.warn('Unable to play silence audio:', error);
    });
    animateLetterSpacing();
}

function exitSilenceScreen() {
    if (window.appStatus !== "silence") {
        return;
    }

    const silence = document.getElementById('silence');
    const silenceAudio = document.getElementById('silenceAudio');
    if (silence) {
        silence.style.display = 'none';
    }

    silenceOverlayState.hiddenDisplays.forEach((displayValue, id) => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = displayValue;
        }
    });
    silenceOverlayState.hiddenDisplays.clear();

    const title = scene.getObjectByName('title');
    if (title) {
        title.visible = silenceOverlayState.previousTitleVisible;
    }

    orbitControls.enabled = silenceOverlayState.previousOrbitEnabled;
    flyControls.enabled = silenceOverlayState.previousFlyEnabled;
    document.body.style.cursor = silenceOverlayState.previousCursor || 'default';
    window.appStatus = silenceOverlayState.previousAppStatus || "orbit";

    if (silenceOverlayState.resumeIntroAudio && introState.audio) {
        introState.audio.currentTime = silenceOverlayState.introAudioTime;
        introState.audio.play().catch((error) => {
            console.warn('Unable to resume intro audio:', error);
        });
    }

    silenceOverlayState.previousAppStatus = undefined;
    silenceOverlayState.resumeIntroAudio = false;
    silenceOverlayState.introAudioTime = 0;

    if (silenceAudio) {
        fadeOutAudio(silenceAudio, 5000);
    }
}

function toggleSilenceScreen() {
    if (window.appStatus === "silence") {
        exitSilenceScreen();
        return;
    }

    enterSilenceScreen();
}

window.actionsCompleted = true
window.currentTransitionEndHandler = null;
window.curveMeshes = [];

window.onload = function() {
    let allElements = document.querySelectorAll('#slide .appear');
    allElements.forEach(function(element) {
      element.style.opacity = "1";
    });
  };
  


let guttaState = {
    gutta: [],
    mara: [],
    species: undefined,
    init: false,
    exampleGuttIndex: 0,
    exampleMaraIndex: 0,
    exampleGuttId: null,
    exampleMaraId: null,
}

let guttaStats = {
    kills: 0,
    totalHungerAtKill: 0,
    munch: 0,
    totalHungerAtMunch: 0,
    guttMatingAttempts: 0,
    maraMatingAttempts: 0,
    guttMatingSuccesses: 0,
    maraMatingSuccesses: 0,
    guttMatingFailures: 0,
    maraMatingFailures: 0,
    guttBirths: 0,
    maraBirths: 0,
    guttBirthsBlocked: 0,
    maraBirthsBlocked: 0,
    guttDeaths: 0,
    maraDeaths: 0
}

// Loaders used across the environment and dataset initialisation
const postLoadingManager = new THREE.LoadingManager();
const textureLoader2 = new THREE.TextureLoader(postLoadingManager);

const initialLoadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(initialLoadingManager);

const planetEnvironment = new PlanetEnvironment({
    scene,
    camera,
    renderer,
    postLoadingManager,
    textureLoader,
    textureLoader2,
    proceduralPlanet,
});

const {
    planetContent,
    spiral,
    jaraniusConnections,
    spiralDynamicsConnections,
    enneagram,
    enneagramConnectionsObj,
} = planetEnvironment.getDatasetNodes();

const jaraniusCenter = planetEnvironment.getJaraniusCenter();
const middleOfPlanet = planetEnvironment.getMiddleOfPlanet();
let jaranius = planetEnvironment.getJaranius();

const compassReviewViews = [
    { name: 'Befriending meridian', lat: 0, lng: 120 },
    { name: 'Training meridian', lat: 0, lng: 0 },
    { name: 'Discovering meridian', lat: 0, lng: -120 },
    { name: 'Centre axis', lat: 0, lng: 180 },
    { name: 'Shared horizon', lat: 58, lng: 180 },
    { name: 'Southern origins', lat: -58, lng: 0 },
];
let compassReviewIndex = -1;

function showCompassReviewView(index) {
    const normalized = ((index % compassReviewViews.length) + compassReviewViews.length) % compassReviewViews.length;
    const view = compassReviewViews[normalized];
    compassReviewIndex = normalized;
    window.appStatus = 'orbit';
    document.body.style.cursor = 'default';
    setOrbitReviewView(view.lat, view.lng, middleOfPlanet, 13.5);
    console.log(`Compass review view: ${view.name}`);
    return view;
}

const proceduralPlanetRuntime = createProceduralPlanetRuntime({
    proceduralPlanet,
    planetEnvironment,
    scene,
    camera,
    orbitControls,
    flyControls,
    middleOfPlanet,
    cancelSmoothOrbitTransition,
    getJaranius: () => jaranius,
    getPlanetContext: () => contexts[0],
    getCurveMeshes: () => window.curveMeshes || [],
    getOctreeHelperRoot: () => (typeof octreeHelperRoot !== 'undefined' ? octreeHelperRoot : null),
    datasetObjects: [
        planetContent,
        jaraniusConnections,
        spiral,
        spiralDynamicsConnections,
        enneagram,
        enneagramConnectionsObj,
    ],
});

window.planetDebug = {
    mode: planetRenderMode,
    proceduralPlanet,
    bookmarks: proceduralPlanetRuntime.getBookmarkNames(),
    bookmark: proceduralPlanetRuntime.applyBookmark,
    bookmarkAt: ({
        mode = 'surface',
        lat = 20,
        lng = 20,
        radius = mode === 'orbit' ? 11 : 5.34,
        clearance = 0.28,
        heading = 'north',
        lookAhead = 1.02,
        lookDown = 0.48,
    } = {}) => proceduralPlanetRuntime.applyBookmarkConfig({
        mode,
        lat,
        lng,
        radius,
        clearance,
        heading,
        lookAhead,
        lookDown,
    }),
    sampleLatLng: (lat, lng) => proceduralPlanet?.sampleLatLng(lat, lng),
    sampleSurfaceLatLng: (lat, lng) => proceduralPlanet?.sampleSurfaceLatLng(lat, lng),
    getNodeMetrics: (nodeId) => proceduralPlanet?.getNodeMetrics(nodeId),
    getTextureStats: () => proceduralPlanet?.getTextureStats?.() || null,
    getProceduralLayerStats: () => planetEnvironment.getProceduralLayerStats?.() || null,
    getSurfaceDetailStats: () => planetEnvironment.getSurfaceDetailStats(),
    getSurfacePropSnapshot: (precision = 4) => planetEnvironment.getSurfacePropSnapshot(precision),
    getSemanticOverlayStats: () => planetEnvironment.getSemanticOverlayStats(),
    getSemanticLandmarkStats: () => planetEnvironment.getSemanticLandmarkStats(),
    setSemanticOverlayVisible: (active) => {
        if (!planetEnvironment.semanticOverlay) return false;
        planetEnvironment.semanticOverlay.visible = Boolean(active);
        return planetEnvironment.semanticOverlay.visible;
    },
    getSurfacePresentationState: proceduralPlanetRuntime.getSurfacePresentationState,
    getSurfacePresentationDiagnostics: proceduralPlanetRuntime.getSurfacePresentationDiagnostics,
    setSurfacePresentation: proceduralPlanetRuntime.setSurfacePresentation,
    getSurfaceFlightState: proceduralPlanetRuntime.getSurfaceFlightState,
    setSurfaceFlightAltitude: proceduralPlanetRuntime.setSurfaceFlightAltitude,
    getCameraPose: () => {
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        return {
            status: window.appStatus,
            position: camera.position.toArray(),
            direction: direction.toArray(),
            up: camera.up.toArray(),
            distance: camera.position.distanceTo(middleOfPlanet),
        };
    },
    showCompassReviewView,
    createDebugCanvas: () => proceduralPlanet?.createDebugCanvas() || null,
    openDebugMap: () => {
        const canvas = proceduralPlanet?.createDebugCanvas();
        if (!canvas) return null;
        const win = window.open('', 'procedural-planet-debug');
        if (!win) return canvas;
        win.document.body.style.margin = '0';
        win.document.body.style.background = '#0b1014';
        win.document.body.appendChild(canvas);
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.imageRendering = 'pixelated';
        return canvas;
    },
};

configureDatasets({
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
    clearConnectionEditorObjectsForDestination,
    intersectObjectsArray,
});

initialiseLoadingManager(initialLoadingManager);

initialiseVersion(creation, postLoadingManager, guttaState, scene);
window.appStatus = "version-menu";

const initialPlanetBookmark = urlParams.get('planetView');
let pendingInitialPlanetBookmark = proceduralPlanet && initialPlanetBookmark
    ? initialPlanetBookmark
    : null;

function applyPendingInitialPlanetBookmark() {
    if (!pendingInitialPlanetBookmark) return;
    if (window.appStatus !== 'orbit' && window.appStatus !== 'flight') return;
    const bookmark = pendingInitialPlanetBookmark;
    pendingInitialPlanetBookmark = null;
    proceduralPlanetRuntime.applyBookmark(bookmark);
}

export function createJaranius(diffuseTexture, normalTexture, roughnessTexture, cloudsTexture, cloudsNormal, version) {
    const jaraniusMesh = planetEnvironment.createJaranius(diffuseTexture, normalTexture, roughnessTexture, cloudsTexture, cloudsNormal, version);
    jaranius = jaraniusMesh;
    configureDatasets({ jaranius: jaraniusMesh });
    return jaraniusMesh;
}

export function initialiseLoadingManager(loadingManager) {
    loadingManager.onStart = function () {
        if (loadingManager == postLoadingManager) progressBarContainer.style.display = 'flex';
    };

    const progressBar = document.getElementById('progress-bar');
    loadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
        progressBar.value = (itemsLoaded / itemsTotal ) * 100
        //console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };

    const progressBarContainer = document.querySelector('.progress-bar-container')
    loadingManager.onLoad = function ( ) {
        progressBarContainer.style.display = 'none';
        //console.log( 'Loading complete!');
    };
    loadingManager.onError = function ( url ) {
        console.log( 'There was an error loading ' + url );
    };
}

setupIntro({ orbitControls, camera, scene });

//SLIDE CAROUSEL
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
    const handleClick = () => {
      slideshowStatus = handleCarouselButton(button, slideshowStatus);
    };
  
    button.addEventListener("click", handleClick);
    button.addEventListener("touchend", (event) => {
      event.preventDefault(); // Prevent mouse event from firing after touch event
      handleClick();
    });
});
  
//CREATE LIGHTS
const {
    ambient,
    spotlight,
    updateLightIntensity,
    queueSpotlightIntensity,
    queueAmbientIntensity,
    setLightIntensities,
    getLightIntensities,
} = setupLighting(scene);
window.planetDebug.getPresentationLighting = getLightIntensities;
window.planetDebug.setPresentationLighting = ({
    spotlightIntensity = 1.15,
    ambientIntensity = 0.25,
} = {}) => {
    setLightIntensities({ spotlightIntensity, ambientIntensity });
    return getLightIntensities();
};
window.planetDebug.setNaturalLighting = () => {
    setLightIntensities({ spotlightIntensity: 0, ambientIntensity: 0.01 });
    return getLightIntensities();
};

//CREATE CONTEXTS
//CREATE GUTTA STATS
const guttaStatScreen = document.querySelector('#guttaStatScreen');
const statsDisplay = document.createElement('div');

//CREATE FPS COUNTER
const times = [];
let fps;

const fpsContainer = document.querySelector('#fpsCounter');
const fpsDisplay = document.createElement('div');
fpsContainer.appendChild(fpsDisplay);

function updateFpsCounter(now) {
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }
    times.push(now);
    fps = times.length;
    fpsDisplay.textContent = fps;
}

function toggleHotKeysOverlay() {
    const hotKeys = document.querySelector('#hotKeys');
    if (!hotKeys) {
        return;
    }

    hotKeys.style.display = hotKeys.style.display == "block" ? "none" : "block";
}

function toggleFpsOverlay() {
    fpsContainer.style.display = fpsContainer.style.display == "block" ? "none" : "block";
}

function closeActiveOverlay() {
    if (developerContextMenu.isOpen()) {
        developerContextMenu.close();
        return true;
    }

    if (focusElement === "tagInput") {
        closeTagInput();
        return true;
    }

    if (window.appStatus === "silence") {
        exitSilenceScreen();
        return true;
    }

    if (slideshowStatus.activeSlideshow !== undefined) {
        const exitButton = document.querySelector("[data-carousel-button='exit']");
        if (exitButton) {
            slideshowStatus = handleCarouselButton(exitButton, slideshowStatus);
            return true;
        }
    }

    const hotKeys = document.querySelector('#hotKeys');
    if (hotKeys && hotKeys.style.display == "block") {
        hotKeys.style.display = "none";
        return true;
    }

    return false;
}

function clearConnectionDestination(destination) {
    if (!destination) return;
    clearConnectionEditorObjectsForDestination(destination);
    if (Array.isArray(window.curveMeshes)) {
        window.curveMeshes = window.curveMeshes.filter((curveData) => curveData.mesh?.parent !== destination);
    }
    destination.clear();
}

function removeNodeMesh(mesh) {
    if (!mesh) return;
    const group = mesh.userData?.group;
    if (group?.parent) group.parent.remove(group);
    else if (mesh.parent) mesh.parent.remove(mesh);
    if (mesh.geometry) mesh.geometry.dispose();
}

function clearContextVisuals(contextIndex) {
    const context = contexts[contextIndex];
    if (!context) return;
    context.pins.forEach((pin) => {
        const intersectIndex = intersectObjectsArray.indexOf(pin);
        if (intersectIndex >= 0) intersectObjectsArray.splice(intersectIndex, 1);
        if (pin?.parent) pin.parent.remove(pin);
        if (pin?.geometry) pin.geometry.dispose();
    });
    context.boxes.forEach(removeNodeMesh);
    context.tags.forEach(removeNodeMesh);
    context.pins.length = 0;
    context.boxes.length = 0;
    context.tags.length = 0;
    clearConnectionDestination(context.connectionDestination);
    clearHoveredPins();
}

function removeEditorImage(mesh) {
    if (!mesh) return;
    const intersectIndex = intersectObjectsArray.indexOf(mesh);
    if (intersectIndex >= 0) intersectObjectsArray.splice(intersectIndex, 1);
    if (mesh.parent) mesh.parent.remove(mesh);
    if (mesh.geometry) mesh.geometry.dispose();
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    materials.forEach((material) => {
        material?.map?.dispose?.();
        material?.dispose?.();
    });
}

function clearContextImages(contextIndex) {
    const context = contexts[contextIndex];
    context?.images?.forEach(removeEditorImage);
    if (context?.images) context.images.length = 0;
}

function rebuildContextImages(contextIndex) {
    const context = contexts[contextIndex];
    if (!context?.imageDestination || !Array.isArray(context.imageData)) return;
    clearContextImages(contextIndex);
    context.imageData.forEach((item, imageIndex) => {
        const created = createImages(
            item.src,
            Number(item.lat),
            Number(item.lng),
            Number(item.size) / 500,
            Number(item.radius) || context.radius,
            context.imageDestination,
            { contextIndex, imageIndex, source: context.imageData, dataSize: item.size },
        );
        context.images[imageIndex] = created.box;
    });
}

async function rebuildContextVisuals(contextIndex) {
    const context = contexts[contextIndex];
    if (!context || !isEditableContext(contextIndex)) return;
    const labelsPromise = createTags(context.tagData, context.tagDestination, context.radius, contextIndex, 0);
    redrawDeveloperConnections(contextIndex);
    rebuildContextImages(contextIndex);
    await labelsPromise;
    updateDeveloperHud();
}

function getConnectionDataForKind(context, kind) {
    if (kind === 'arrow') return context.arrowConnectionData;
    if (kind === 'dashed') return context.dashedConnectionData;
    if (kind === 'tunnel') return context.tunnelConnectionData;
    return context.connectionData;
}

function ensureConnectionRows(context, kind) {
    let rows = getConnectionDataForKind(context, kind);
    if (!Array.isArray(rows)) {
        rows = context.tagData.map((tag) => [tag.id]);
        if (kind === 'arrow') context.arrowConnectionData = rows;
        else if (kind === 'dashed') context.dashedConnectionData = rows;
        else if (kind === 'tunnel') context.tunnelConnectionData = rows;
        else context.connectionData = rows;
    }
    const rowsById = new Map(rows.filter(Array.isArray).map((row) => [row[0], row]));
    const normalized = context.tagData.map((tag) => rowsById.get(tag.id) || [tag.id]);
    rows.splice(0, rows.length, ...normalized);
    return rows;
}

function toggleConnectionBetween(contextIndex, sourceIndex, targetIndex, kind) {
    const context = contexts[contextIndex];
    if (!context || sourceIndex === targetIndex || !context.tagData[sourceIndex] || !context.tagData[targetIndex]) return false;
    const rows = ensureConnectionRows(context, kind);
    const row = rows[sourceIndex];
    const targetId = context.tagData[targetIndex].id;
    const connectionIndex = findConnectionTargetIndex(row, targetId);
    if (connectionIndex >= 0) row.splice(connectionIndex, 1);
    else row.push(targetId);
    redrawDeveloperConnections(contextIndex);
    return connectionIndex < 0;
}

function getSelectedEditorNodeIndices() {
    const context = contexts[selectedContext];
    if (!context || !isEditableContext(selectedContext)) return [];
    const candidates = selectedNodes.length > 0 ? selectedNodes : [selectedNode];
    return [...new Set(candidates)].filter((index) => Number.isInteger(index) && context.tagData[index]);
}

function changeSelectedNodeColors(direction) {
    const targets = getSelectedEditorNodeIndices();
    if (!targets.length) return;
    const before = snapshotEditorContext(selectedContext);
    const step = fastMove ? 10 : 1;
    targets.forEach((nodeIndex) => {
        let color = Number(contexts[selectedContext].tagData[nodeIndex].color) || 0;
        do {
            color = (color + direction * step + palette.length) % palette.length;
        } while (!boxMaterials[color]);
        contexts[selectedContext].tagData[nodeIndex].color = color;
        refreshNodeMaterial(selectedContext, nodeIndex);
    });
    commitEditorMutation(`Changed color of ${targets.length} node${targets.length === 1 ? '' : 's'}`, selectedContext, before);
}

function refreshMindmapImage(contextIndex, imageIndex) {
    const context = contexts[contextIndex];
    const item = context?.imageData?.[imageIndex];
    const mesh = context?.images?.[imageIndex];
    if (!item || !mesh) return false;
    const size = Number(item.size) || mesh.userData.baseImageSize || 5;
    const baseSize = Number(mesh.userData.baseImageSize) || size;
    const ratio = size / baseSize;
    const aspect = Number(mesh.userData.imageAspect) || 1;
    mesh.scale.set(aspect * ratio, ratio, 1);
    const radius = Number(item.radius) || context.radius;
    const position = convertLatLngtoCartesian(Number(item.lat), Number(item.lng), radius);
    const normal = new THREE.Vector3(position.x, position.y, position.z).normalize();
    mesh.position.copy(normal).multiplyScalar(radius + 0.001 * (size / 500));
    mesh.lookAt(normal.clone().multiplyScalar(radius + 10 * (size / 500)));
    return true;
}

function resizeSelectedItems(direction) {
    if (Number.isInteger(selectedImage)) {
        const context = contexts[selectedContext];
        const item = context?.imageData?.[selectedImage];
        if (!item) return;
        const before = snapshotEditorContext(selectedContext);
        const delta = direction * (fastMove ? 25 : 5);
        item.size = THREE.MathUtils.clamp(Number(item.size) + delta, 5, 2000);
        refreshMindmapImage(selectedContext, selectedImage);
        commitEditorMutation(`${direction > 0 ? 'Increased' : 'Decreased'} image size to ${item.size}`, selectedContext, before);
        return;
    }

    const targets = getSelectedEditorNodeIndices();
    if (!targets.length) return;
    const before = snapshotEditorContext(selectedContext);
    const delta = direction * (fastMove ? 25 : 5);
    targets.forEach((nodeIndex) => {
        const context = contexts[selectedContext];
        const pin = context.pins[nodeIndex];
        const box = context.boxes[nodeIndex];
        const tag = context.tags[nodeIndex];
        const size = THREE.MathUtils.clamp(Number(context.tagData[nodeIndex].size) + delta, 5, 500);
        context.tagData[nodeIndex].size = size;
        const originalSize = pin?.originalSize || size;
        const ratio = size / originalSize;
        const tagScale = size / 100000;
        if (pin) {
            pin.scale.setScalar(ratio);
            pin.userData.baseScale = ratio;
        }
        if (box) {
            box.scale.setScalar(ratio);
            box.userData.baseScale = ratio;
        }
        if (tag) {
            tag.scale.setScalar(tagScale);
            tag.userData.baseScale = tagScale;
        }
        refreshNode(selectedContext, nodeIndex);
    });
    commitEditorMutation(`${direction > 0 ? 'Increased' : 'Decreased'} size of ${targets.length} node${targets.length === 1 ? '' : 's'}`, selectedContext, before);
}

function selectEditorNode(contextIndex, nodeIndex) {
    const context = contexts[contextIndex];
    if (!context?.tagData?.[nodeIndex]) return false;
    selectedContext = contextIndex;
    selectedNode = nodeIndex;
    selectedPin = context.pins[nodeIndex] || null;
    selectedBox = context.boxes[nodeIndex] || null;
    selectedTag = context.tags[nodeIndex] || null;
    selectedImage = null;
    selectedImageMesh = null;
    updateDeveloperHud();
    return true;
}

function selectEditorImage(contextIndex, imageIndex) {
    const context = contexts[contextIndex];
    if (!context?.imageData?.[imageIndex] || !context?.images?.[imageIndex]) return false;
    selectedContext = contextIndex;
    selectedNodes.length = 0;
    selectedNode = null;
    selectedPin = null;
    selectedBox = null;
    selectedTag = null;
    selectedImage = imageIndex;
    selectedImageMesh = context.images[imageIndex];
    cursorConnectionSource = null;
    updateDeveloperHud();
    return true;
}

function applyEditorNodeSize(contextIndex, nodeIndex, size) {
    const context = contexts[contextIndex];
    if (!context?.tagData?.[nodeIndex]) return false;
    if (Number(context.tagData[nodeIndex].size) === size) return false;
    context.tagData[nodeIndex].size = size;
    const pin = context.pins[nodeIndex];
    const box = context.boxes[nodeIndex];
    const tag = context.tags[nodeIndex];
    const originalSize = pin?.originalSize || size;
    const ratio = size / originalSize;
    if (pin) {
        pin.scale.setScalar(ratio);
        pin.userData.baseScale = ratio;
    }
    if (box) {
        box.scale.setScalar(ratio);
        box.userData.baseScale = ratio;
    }
    if (tag) {
        const tagScale = size / 100000;
        tag.scale.setScalar(tagScale);
        tag.userData.baseScale = tagScale;
    }
    refreshNode(contextIndex, nodeIndex);
    return true;
}

function setEditorNodesSize(contextIndex, requestedIndices, requestedSize) {
    const context = contexts[contextIndex];
    const targets = [...new Set(requestedIndices || [])].filter((index) => Number.isInteger(index) && context?.tagData?.[index]);
    if (!targets.length) return;
    const size = THREE.MathUtils.clamp(Number(requestedSize) || 5, 5, 500);
    const before = snapshotEditorContext(contextIndex);
    const changed = targets.reduce((count, nodeIndex) => count + Number(applyEditorNodeSize(contextIndex, nodeIndex, size)), 0);
    if (changed) commitEditorMutation(`Set ${changed} node${changed === 1 ? '' : 's'} to size ${size}`, contextIndex, before);
}

function setEditorNodesColor(contextIndex, requestedIndices, requestedColor) {
    const context = contexts[contextIndex];
    const color = Number(requestedColor);
    const targets = [...new Set(requestedIndices || [])].filter((index) => Number.isInteger(index) && context?.tagData?.[index]);
    if (!targets.length || !boxMaterials[color]) return;
    const before = snapshotEditorContext(contextIndex);
    let changed = 0;
    targets.forEach((nodeIndex) => {
        if (Number(context.tagData[nodeIndex].color) === color) return;
        context.tagData[nodeIndex].color = color;
        refreshNodeMaterial(contextIndex, nodeIndex);
        changed++;
    });
    if (changed) commitEditorMutation(`Changed color of ${changed} node${changed === 1 ? '' : 's'}`, contextIndex, before);
}

function deleteEditorNodes(contextIndex, requestedIndices) {
    const context = contexts[contextIndex];
    if (!context || !isEditableContext(contextIndex)) return;
    const targets = [...new Set(requestedIndices)]
        .filter((index) => Number.isInteger(index) && context.tagData[index])
        .sort((a, b) => b - a);
    if (!targets.length) return;
    const before = snapshotEditorContext(contextIndex);
    const removedIds = new Set(targets.map((index) => context.tagData[index]?.id).filter(Boolean));
    clearContextVisuals(contextIndex);
    targets.forEach((index) => context.tagData.splice(index, 1));
    ['normal', 'arrow', 'dashed', 'tunnel'].forEach((kind) => {
        const rows = ensureConnectionRows(context, kind);
        for (let i = rows.length - 1; i >= 0; i--) {
            if (removedIds.has(rows[i]?.[0])) rows.splice(i, 1);
            else if (Array.isArray(rows[i])) {
                rows[i] = rows[i].filter((entry, entryIndex) => entryIndex === 0 || !removedIds.has(typeof entry === 'string' ? entry : entry?.id || entry?.target || entry?.to));
            }
        }
    });
    rebuildContextVisuals(contextIndex).catch((error) => {
        console.error('Mindmap rebuild after deletion failed:', error);
        setDeveloperStatus('Node deleted, but the map could not be fully redrawn.');
    });
    clearEditorSelection();
    commitEditorMutation(`Deleted ${targets.length} node${targets.length === 1 ? '' : 's'}`, contextIndex, before);
}

function toggleEditorMultiSelection(contextIndex, nodeIndex) {
    const context = contexts[contextIndex];
    if (!context?.tagData?.[nodeIndex]) return;
    const previousPrimary = selectedContext === contextIndex ? selectedNode : null;
    if (selectedContext !== contextIndex) selectedNodes.length = 0;
    if (selectedNodes.length === 0 && Number.isInteger(previousPrimary) && previousPrimary !== nodeIndex && context.tagData[previousPrimary]) {
        selectedNodes.push(previousPrimary);
    }
    const existing = selectedNodes.indexOf(nodeIndex);
    if (existing >= 0) selectedNodes.splice(existing, 1);
    else selectedNodes.push(nodeIndex);

    if (selectedNodes.length === 0) {
        clearEditorSelection();
        setDeveloperStatus('Selection cleared.');
        return;
    }
    const primaryIndex = selectedNodes.includes(nodeIndex) ? nodeIndex : selectedNodes[selectedNodes.length - 1];
    selectEditorNode(contextIndex, primaryIndex);
    setDeveloperStatus(`${selectedNodes.length} node${selectedNodes.length === 1 ? '' : 's'} selected.`);
}

function startCursorConnectionFromNodes(kind, contextIndex, requestedIndices) {
    const context = contexts[contextIndex];
    const nodeIndices = [...new Set(requestedIndices || [])].filter((index) => Number.isInteger(index) && context?.tagData?.[index]);
    if (!nodeIndices.length) return;
    selectEditorNode(contextIndex, nodeIndices[nodeIndices.length - 1]);
    selectedNodes.splice(0, selectedNodes.length, ...nodeIndices);
    cursorConnectionMode = kind;
    cursorConnectionSource = {
        contextIndex,
        nodeIndices,
        label: nodeIndices.length === 1
            ? context.tagData[nodeIndices[0]]?.text || context.tagData[nodeIndices[0]]?.id
            : `${nodeIndices.length} selected nodes`,
    };
    setDeveloperStatus(`${nodeIndices.length} connection source${nodeIndices.length === 1 ? '' : 's'} selected. Click a target for ${kind} connection${nodeIndices.length === 1 ? '' : 's'}.`);
}

function toggleSelectedConnections(kind) {
    const targets = getSelectedEditorNodeIndices();
    if (targets.length < 2) {
        setDeveloperStatus('Select at least two nodes (A) to edit connections.');
        return;
    }
    const before = snapshotEditorContext(selectedContext);
    let added = 0;
    for (let i = 1; i < targets.length; i++) {
        if (toggleConnectionBetween(selectedContext, targets[0], targets[i], kind)) added++;
    }
    commitEditorMutation(`${kind} connections updated (${added} added)`, selectedContext, before);
}

function openTagInput(mode, contextIndex, nodeIndex = null, placement = {}) {
    const tagInput = document.getElementById('tagInput');
    const tagInputPanel = document.getElementById('tagInputPanel');
    if (!tagInput || !tagInputPanel || !isEditableContext(contextIndex)) return;
    developerContextMenu.close();
    const latLng = placement.latLng || (mode === 'create' ? getPointerLatLngForContext(contextIndex) : null);
    const clientX = Number.isFinite(placement.x) ? placement.x : pointerClient.x;
    const clientY = Number.isFinite(placement.y) ? placement.y : pointerClient.y;
    tagInputMode = { mode, contextIndex, nodeIndex, latLng };
    focusElement = 'tagInput';
    tagInputPanel.hidden = false;
    tagInputPanel.style.display = 'block';
    tagInputPanel.style.left = `${Math.max(8, Math.min(clientX + 12, window.innerWidth - 352))}px`;
    tagInputPanel.style.top = `${Math.max(8, Math.min(clientY + 12, window.innerHeight - 190))}px`;
    tagInput.value = mode === 'edit' ? contexts[contextIndex]?.tagData?.[nodeIndex]?.text || '' : '';
    tagInput.placeholder = mode === 'edit' ? 'Edit node text' : 'New node text';
    tagInput.focus();
    tagInput.select();
    setDeveloperStatus(mode === 'edit' ? 'Editing node text. Enter saves; Shift+Enter adds a line.' : 'Creating node. Enter saves; Escape cancels.');
}

function openSelectedNodeTextEditor() {
    if (!Number.isInteger(selectedNode) || !contexts[selectedContext]?.tagData?.[selectedNode]) {
        setDeveloperStatus('Select a node before editing its text.');
        return;
    }
    openTagInput('edit', selectedContext, selectedNode);
}

function ensureSettlementMapLayer() {
    if (!settlementMapLayer && jaranius) {
        settlementMapLayer = new SettlementMapLayer({
            jaranius,
            contexts,
            getSunWorldPosition: () => planetEnvironment.getSunWorldPosition(),
            getCameraWorldPosition: (target) => camera.getWorldPosition(target),
            terrainSampler: proceduralPlanet || undefined,
        });
    }
    return settlementMapLayer;
}

function setClassicMindmapVisualsVisible(visible) {
    const planetCtx = contexts[0];
    if (planetCtx?.pins) {
        planetCtx.pins.forEach((pin) => {
            pin.visible = visible;
        });
    }
    if (planetCtx?.connectionDestination) {
        planetCtx.connectionDestination.visible = true;
        planetCtx.connectionDestination.children.forEach((child) => {
            const isEditorObject = child.userData?.connectionHandle || child.userData?.connectionHandleGuide;
            child.visible = isEditorObject ? child.visible : visible;
        });
        updateConnectionHandleVisibility();
    }
}

function applySettlementLabelStyle(active) {
    const planetCtx = contexts[0];
    if (!planetCtx) return;

    planetCtx.boxes?.forEach((box) => {
        if (!box) return;
        if (!box.userData.classicMaterial) box.userData.classicMaterial = box.material;
        if (box.userData.classicVisible === undefined) box.userData.classicVisible = box.visible;
        if (active) {
            if (!box.userData.settlementMaterial) {
                const material = box.userData.classicMaterial.clone();
                if (material.color) material.color.set(0xf1e5c4);
                if (material.emissive) material.emissive.set(0x2a2114);
                if (material.emissiveIntensity !== undefined) material.emissiveIntensity = 0.035;
                material.transparent = true;
                material.opacity = 0.12;
                material.depthWrite = false;
                box.userData.settlementMaterial = material;
            }
            box.material = box.userData.settlementMaterial;
            box.visible = false;
        } else {
            box.material = box.userData.classicMaterial;
            box.visible = box.userData.classicVisible;
        }
    });

    planetCtx.tags?.forEach((tag) => {
        if (!tag) return;
        if (!tag.userData.classicMaterial) tag.userData.classicMaterial = tag.material;
        if (!tag.userData.classicScale) tag.userData.classicScale = tag.scale.clone();
        if (active) {
            if (!tag.userData.settlementMaterial) {
                const material = tag.userData.classicMaterial.clone();
                if (material.color) material.color.set(0x11100d);
                material.transparent = true;
                material.opacity = 0.58;
                material.depthWrite = false;
                tag.userData.settlementMaterial = material;
            }
            tag.material = tag.userData.settlementMaterial;
            tag.scale.copy(tag.userData.classicScale).multiplyScalar(0.58);
        } else {
            tag.material = tag.userData.classicMaterial;
            tag.scale.copy(tag.userData.classicScale);
        }
    });
}

function updateSettlementDebugVisibility() {
    if (typeof octreeHelperRoot !== 'undefined') {
        octreeHelperRoot.visible = !settlementMode;
    }
}

function scheduleSettlementLabelStyleRefresh() {
    if (settlementLabelRefreshTimer) {
        clearInterval(settlementLabelRefreshTimer);
        settlementLabelRefreshTimer = null;
    }

    let remainingPasses = 8;
    const refresh = () => {
        if (!settlementMode) {
            clearInterval(settlementLabelRefreshTimer);
            settlementLabelRefreshTimer = null;
            return;
        }
        applySettlementLabelStyle(true);
        remainingPasses -= 1;
        if (remainingPasses <= 0) {
            clearInterval(settlementLabelRefreshTimer);
            settlementLabelRefreshTimer = null;
        }
    };

    refresh();
    settlementLabelRefreshTimer = setInterval(refresh, 250);
}

function syncSettlementMapVisibility() {
    if (!settlementMapLayer) return;
    const shouldShow = Boolean(settlementMode && showContent);
    if (shouldShow) {
        settlementMapLayer.setVisible(true)
            .then(refreshSelectedSettlementPin)
            .catch(handleSettlementMapError);
    } else {
        settlementMapLayer.root.visible = false;
    }
}

function refreshSelectedSettlementPin() {
    if (!settlementMode || selectedContext !== 0 || selectedNode === null || selectedNode === undefined || !settlementMapLayer) return;
    const nextPin = settlementMapLayer.intersectObjects.find((object) => object.index === selectedNode);
    if (nextPin) selectedPin = nextPin;
}

async function setSettlementMode(active) {
    settlementMode = active;
    const layer = ensureSettlementMapLayer();
    if (!layer) return;

    if (active) {
        hoverPins([]);
        await layer.setVisible(showContent);
        refreshSelectedSettlementPin();
        setClassicMindmapVisualsVisible(false);
        scheduleSettlementLabelStyleRefresh();
    } else {
        if (settlementLabelRefreshTimer) {
            clearInterval(settlementLabelRefreshTimer);
            settlementLabelRefreshTimer = null;
        }
        layer.hover([]);
        layer.root.visible = false;
        setClassicMindmapVisualsVisible(showContent);
        applySettlementLabelStyle(false);
    }
    updateSettlementDebugVisibility();
    updateDeveloperHud();
}

function handleSettlementMapError(error) {
    console.error('Settlement map mode failed:', error);
    settlementMode = false;
    if (settlementMapLayer) {
        settlementMapLayer.root.visible = false;
    }
    setClassicMindmapVisualsVisible(showContent);
    applySettlementLabelStyle(false);
    updateDeveloperHud();
}

function markSettlementMapDirty() {
    if (!settlementMapLayer) return;
    settlementMapLayer.markDirty();
    if (settlementMode && showContent && settlementMapLayer.isVisible()) {
        settlementMapLayer.setVisible(true)
            .then(refreshSelectedSettlementPin)
            .catch(handleSettlementMapError);
    }
}

async function toggleSettlementMode() {
    await setSettlementMode(!settlementMode);
    console.log(`Settlement map mode: ${settlementMode ? 'on' : 'off'}`);
}

function connectionEditorOptions(contextIndex, kind) {
    return {
        developer,
        contextIndex,
        kind,
    };
}

function redrawDeveloperConnections(contextIndex) {
    const ctx = contexts[contextIndex];
    if (!ctx?.connectionDestination) return;

    clearConnectionDestination(ctx.connectionDestination);

    const curveThickness = 0.0001;
    const curveRadiusSegments = 3;
    const curveMaxAltitude = 0.03;
    const curveMinAltitude = ctx.radius;

    createConnections(ctx.tagData, ctx.connectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, ctx.connectionDestination, false, false, false, connectionEditorOptions(contextIndex, 'normal'));
    createConnections(ctx.tagData, ctx.arrowConnectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, ctx.connectionDestination, false, true, false, connectionEditorOptions(contextIndex, 'arrow'));
    createConnections(ctx.tagData, ctx.dashedConnectionData, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, ctx.connectionDestination, true, false, false, connectionEditorOptions(contextIndex, 'dashed'));
    createConnections(ctx.tagData, ctx.tunnelConnectionData, 0.001, 6, 0.1, curveMinAltitude, ctx.connectionDestination, false, false, true, connectionEditorOptions(contextIndex, 'tunnel'));
    if (settlementMode && contextIndex === 0) {
        setClassicMindmapVisualsVisible(false);
    }
    markSettlementMapDirty();
    updateDeveloperHud();
}

function printSelectedMindmapDataFile() {
    if (!developer || !isEditableContext(selectedContext)) {
        setDeveloperStatus('This context cannot be printed.');
        return null;
    }
    const context = contexts[selectedContext];
    const source = serializeMindmapDataFile(context);
    console.groupCollapsed(`Mindmap data · ${context.name} · ${context.tagData.length} nodes`);
    console.log(source);
    if (context.imageData?.length) console.log('Image data:', cloneEditorData(context.imageData));
    console.groupEnd();
    const imageSummary = context.imageData?.length ? `, ${context.imageData.length} images` : '';
    setDeveloperStatus(`Printed ${context.name} data (${context.tagData.length} nodes${imageSummary}) to the console.`);
    return source;
}

async function saveActiveMindmapDataFile() {
    if (!developer) return;
    if (!isEditableContext(selectedContext)) {
        setDeveloperStatus('This context is not editable.');
        return;
    }

    const contextIndex = selectedContext;
    const context = contexts[contextIndex];
    const contextName = context?.name || 'mindmap';
    const savedSnapshot = snapshotEditorContext(contextIndex);
    setDeveloperStatus(`Saving ${context?.name || 'mindmap'} data...`);

    try {
        const result = await saveMindmapDataFile(context);
        const message = result.imageFile
            ? `Saved ${result.file} and ${result.imageFile}`
            : `Saved ${result.file}`;
        const dirtyKey = `${contextIndex}:${contextName}`;
        editorBaselines.set(dirtyKey, savedSnapshot);
        if (contexts[contextIndex]?.name === contextName) refreshEditorDirtyState(contextIndex);
        else editorDirtyContexts.delete(dirtyKey);
        setDeveloperStatus(message);
        console.log(`Mindmap data saved to ${result.file}`);
        if (result.imageFile) console.log(`Mindmap image data saved to ${result.imageFile}`);
        return result;
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        setDeveloperStatus(`Save failed: ${message}`);
        console.error('Mindmap data save failed:', error);
        return null;
    }
}


//INTERACTION FUNCTIONS
function getActiveIntersectObjects() {
    if (settlementMode && settlementMapLayer?.isVisible()) {
        return settlementMapLayer.intersectObjects;
    }
    return intersectObjectsArray.filter((object) => {
        let current = object;
        while (current) {
            if (current.visible === false) return false;
            if (current === scene) return true;
            current = current.parent;
        }
        return false;
    });
}

function getActiveEditorNodeObjects() {
    const objects = new Set(getActiveIntersectObjects());
    contexts.forEach((context, contextIndex) => {
        if (!isEditableContext(contextIndex)) return;
        context.boxes?.forEach((box) => objects.add(box));
        context.tags?.forEach((tag) => objects.add(tag));
        context.images?.forEach((image) => objects.add(image));
    });
    return [...objects].filter((object) => {
        if (!object || object.visible === false || !Number.isInteger(object.index)) return false;
        let current = object;
        while (current) {
            if (current.visible === false) return false;
            if (current === scene) return true;
            current = current.parent;
        }
        return false;
    });
}

function isMindmapImageObject(object) {
    return Boolean(object?.userData?.isMindmapImage);
}

function isEditorIntersectionVisible(intersection) {
    const contextIndex = intersection?.object?.context;
    const context = contexts[contextIndex];
    const destination = context?.tagDestination || context?.imageDestination;
    if (!context || !destination || !Number.isFinite(Number(context.radius))) return true;

    const center = destination.getWorldPosition(new THREE.Vector3());
    const worldScale = destination.getWorldScale(new THREE.Vector3());
    const radius = Number(context.radius) * Math.max(Math.abs(worldScale.x), Math.abs(worldScale.y), Math.abs(worldScale.z));
    if (!Number.isFinite(radius) || radius <= 0) return true;
    const cameraPosition = camera.getWorldPosition(new THREE.Vector3());
    if (cameraPosition.distanceTo(center) <= radius + 0.01) return true;

    const item = isMindmapImageObject(intersection.object)
        ? context.imageData?.[intersection.object.index]
        : context.tagData?.[intersection.object.index];
    if (item && Number.isFinite(Number(item.lat)) && Number.isFinite(Number(item.lng))) {
        const localAnchor = convertLatLngtoCartesian(Number(item.lat), Number(item.lng), Number(context.radius));
        const worldAnchor = new THREE.Vector3(localAnchor.x, localAnchor.y, localAnchor.z).applyMatrix4(destination.matrixWorld);
        const outward = worldAnchor.clone().sub(center).normalize();
        const towardCamera = cameraPosition.clone().sub(worldAnchor).normalize();
        if (outward.dot(towardCamera) <= 0) return false;
    }

    const surfaceHit = raycaster.ray.intersectSphere(new THREE.Sphere(center, radius), new THREE.Vector3());
    if (!surfaceHit) return true;
    const surfaceDistance = raycaster.ray.origin.distanceTo(surfaceHit);
    return surfaceDistance + Math.max(0.015, radius * 0.003) >= intersection.distance;
}

function getVisibleIntersections(objects, recursive = false) {
    return raycaster.intersectObjects(objects, recursive).filter(isEditorIntersectionVisible);
}

function scanPins() {
    raycaster.setFromCamera(pointer, camera);
    const intersects = getVisibleIntersections(getActiveIntersectObjects());

    if (settlementMode && settlementMapLayer?.isVisible()) {
        settlementMapLayer.hover(intersects);
    } else {
        hoverPins(intersects)
    }
}

//EVENTS KEYBOARD
function getResizeDirectionForKey(event) {
    if (event.code === 'NumpadAdd' || event.key === '+' || event.key === '=') return 1;
    if (event.code === 'NumpadSubtract' || event.key === '-') return -1;
    return 0;
}

document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    const keyCode = event.which;
    const code = event.code;
    const hasModifier = event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;
    const digitMatch = /^Digit([1-9])$/.exec(code);
    const textEntryActive = isTextEntryTarget(event.target);

    if (code === 'Enter' && suppressTagInputEnterKeyUp) {
        suppressTagInputEnterKeyUp = false;
        return;
    }

    if (code === "Escape" && closeActiveOverlay()) {
        return;
    }

    if (textEntryActive) {
        return;
    }

    const resizeDirection = getResizeDirectionForKey(event);
    if (developer && resizeDirection && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        resizeSelectedItems(resizeDirection);
        return;
    }

    if (developer && (event.ctrlKey || event.metaKey) && code === 'KeyZ') {
        if (event.shiftKey) redoEditorChange();
        else undoEditorChange();
        return;
    }

    if (developer && (event.ctrlKey || event.metaKey) && code === 'KeyY') {
        redoEditorChange();
        return;
    }

    if (code === 'Escape' && cursorConnectionMode !== 'off') {
        setCursorConnectionMode('off');
        return;
    }

    if (focusElement !== "tagInput" && !hasModifier && code === "KeyS" && window.appStatus !== "flight") {
        toggleSilenceScreen();
        return;
    }

    if (window.appStatus === "silence") {
        return;
    }

    if (focusElement !== "tagInput" && !hasModifier && code === "KeyH") {
        toggleHotKeysOverlay();
        return;
    }

    if (focusElement !== "tagInput" && !hasModifier && code === "KeyP") {
        toggleFpsOverlay();
        return;
    }

    if (event.altKey && (keyCode === 37 || keyCode === 39)) {
        if (guttaStatScreen.style.display === "block") {
            event.preventDefault();
            const direction = keyCode === 37 ? -1 : 1;
            cycleStatsChartView(direction);
        }
        return;
    }

    //Controls
    if (focusElement !== "tagInput") {
        if (!hasModifier && keyCode == 79) { //O
            if (window.appStatus === "orbit") {
                cancelSmoothOrbitTransition();
                window.appStatus = "flight";
                orbitControls.enabled = false;
                flyControls.enabled = true;
                document.body.style.cursor = 'crosshair';
            } else {
                window.appStatus = "orbit";
                flyControls.enabled = false;
                document.body.style.cursor = 'default';
                beginSmoothOrbitTransition(middleOfPlanet, { targetRadius: contexts[0]?.radius });
            }
        }
        if (event.shiftKey) {
            if (keyCode === 37 || keyCode === 39) { // Shift + Left/Right
                const delta = keyCode === 37 ? -1 : 1;
                adjustExampleIndex('exampleGuttId', 'exampleGuttIndex', guttaState.gutta, delta);
                return;
            }
            if (keyCode === 38 || keyCode === 40) { // Shift + Up/Down
                const delta = keyCode === 38 ? -1 : 1;
                adjustExampleIndex('exampleMaraId', 'exampleMaraIndex', guttaState.mara, delta);
                return;
            }
            if (window.appStatus !== "flight" && code === "KeyS") { // Shift+S
                if (window.appStatus == "orbit") {
                    planetEnvironment.toggleSpiral();
                }
                return;
            }
            if (window.appStatus !== "flight" && code === "KeyE") { // Shift+E
                planetEnvironment.toggleEnneagram();
                return;
            }
            if (window.appStatus !== "flight" && code === "KeyC") { // Shift+C
                toggleSettlementMode().catch(handleSettlementMapError);
                return;
            }
            if (developer && code === "KeyP") { // Shift+P
                toggleParametersPanel();
                return;
            }
            if (developer && code === "KeyL") { // Shift+L
                developerSlideLab.toggle();
                return;
            }
            if (developer && code === "KeyQ") { // Shift+Q
                saveActiveMindmapDataFile();
                return;
            }
            if (developer && code === "KeyO") { // Shift+O
                toggleNodeSlideOpening();
                return;
            }
            if (import.meta.env.DEV && code === "KeyJ") { // Shift+J
                showCompassReviewView(compassReviewIndex + 1);
                return;
            }
            if (window.appStatus === "orbit") {
                if (keyCode == 71) { // Shift+G
                    const mode = getFollowMode() === "gutt" ? "manual" : "gutt";
                    setFollowMode(mode);
                    console.log(mode === "gutt" ? "Orbit now follows the exampleGutt" : "Orbit follow disabled");
                    return;
                }
                if (keyCode == 77) { // Shift+M
                    const mode = getFollowMode() === "mara" ? "manual" : "mara";
                    setFollowMode(mode);
                    console.log(mode === "mara" ? "Orbit now follows the exampleMara" : "Orbit follow disabled");
                    return;
                }
            }
            if (window.appStatus !== "flight" && digitMatch) { // Shift+1..9
                const index = Number(digitMatch[1]) - 1; // 0-based
                switchMindmap(index);
                return;
            }
        }

        if (hasModifier) {
            return;
        }

        // Only do this when in flight-mode:
        if (window.appStatus === "flight") {
            if (keyCode == 71) { // 'G'
                setFollowMode("gutt");
                console.log("Camera now follows the exampleGutt");
                // Optionally disable user flight controls so user can't move camera manually
                flyControls.enabled = false;
            }
            if (keyCode == 77) { // 'M'
                setFollowMode("mara");
                console.log("Camera now follows the exampleMara");
                flyControls.enabled = false;
            }
            if (keyCode == 70) { // 'F'
                setFollowMode("manual");
                console.log("Camera back to manual flight");
                flyControls.enabled = true; // re-enable
            }
            if (keyCode == 188) { //,
                    flyControls.dragToLook = !flyControls.dragToLook
                    console.log("dragToLook: " + flyControls.dragToLook)
            }
        }

    }
    if (focusElement !== "tagInput" && window.appStatus !== "flight") {
        if (hasModifier) return;
        //Slide control
        if (slideshowStatus.activeSlideshow !== undefined && (keyCode === 37 || keyCode === 116)) { // left arrow or play button on USB remote
            const leftButton = document.querySelector("[data-carousel-button='left']");
            slideshowStatus = handleCarouselButton(leftButton, slideshowStatus);
        }
        if (slideshowStatus.activeSlideshow !== undefined && (keyCode === 39 || keyCode === 190)) { // right arrow or sceen button on USB remote
            const rightButton = document.querySelector("[data-carousel-button='right']");
            slideshowStatus = handleCarouselButton(rightButton, slideshowStatus);
        }
        if (slideshowStatus.activeSlideshow !== undefined && (keyCode === 38 || keyCode == 33)) { // up arrow or left button on USB remote
            const upButton = document.querySelector("[data-carousel-button='up']");
            slideshowStatus = handleCarouselButton(upButton, slideshowStatus);
        }
        if (slideshowStatus.activeSlideshow !== undefined && (keyCode === 40 || keyCode == 34)) { // down arrow or right button on USB remote
            const downButton = document.querySelector("[data-carousel-button='down']");
            slideshowStatus = handleCarouselButton(downButton, slideshowStatus);
        }

                //Light control (numbers 1-5 when NOT holding shift)
                //Light control (numbers 1-5 when NOT holding shift)
                if (!event.shiftKey && keyCode >= 49 && keyCode <= 53) {
            const intensities = [0, 0.5, 0.75, 1, 1.5];
            queueSpotlightIntensity(intensities[keyCode - 49], clock);
          }
                // Ambient control (6-9 when NOT holding shift)
                if (!event.shiftKey && keyCode >= 54 && keyCode <= 57) {
            const intensities = [0, 0.05, 0.15, 0.25];
            queueAmbientIntensity(intensities[keyCode - 54], clock);
          }
                if (!event.shiftKey && keyCode == 48) {
            queueAmbientIntensity(0.5, clock);
          }
        //Stats display
        if (keyCode == 71) { //G
            if (guttaStatScreen.style.display == "block") {
                guttaStatScreen.style.display = "none"
                guttCrumbMesh.visible = false;
                maraCrumbMesh.visible = false;
            } else {
                guttaStatScreen.style.display = "block" 
                guttCrumbMesh.visible = true;
                maraCrumbMesh.visible = true;
            }
        }

        //Content display
        if (keyCode == 67) { //C
            if (showContent == true) {
                jaranius.remove(planetContent)
                jaranius.remove(jaraniusConnections)
                showContent = false
            } else {
                jaranius.add(planetContent)
                jaranius.add(jaraniusConnections)
                showContent = true
            }
            if (settlementMode) {
                setClassicMindmapVisualsVisible(false);
                scheduleSettlementLabelStyleRefresh();
                syncSettlementMapVisibility();
            } else {
                setClassicMindmapVisualsVisible(showContent);
                applySettlementLabelStyle(false);
            }
        }
        if (keyCode == 73) { //I
            jaranius.material.wireframe = !jaranius.material.wireframe;

            for (let lat = -80; lat < 90; lat += 10) {
                for (let lng = -170; lng <= 180; lng += 10) {
                    const id = generateUUID()
                    const newItem = {
                        id: id,
                        text: "lat: " + lat + "\nlng: " + lng,
                        lat: lat,
                        lng: lng,
                        color: 1,
                        size: 10,
                        slides: undefined
                    };
        
                    contexts[0].tagData.push(newItem)
                    contexts[0].connectionData.push([id])
                    contexts[0].arrowConnectionData.push([id])
                    contexts[0].dashedConnectionData.push([id])
        
                    const indexMod = contexts[0].tagData.length - 1
        
                    createTags([newItem], contexts[0].tagDestination, contexts[0].radius, 0, indexMod);
                }
            }
            console.log(contexts)
        }

        //Node management
        if (keyCode == 90 && developer == true) { //Z - clear selection
            clearEditorSelection()
        }
        if (keyCode == 65 && developer == true) { //A - add to selection
            if (selectedNode !== null) {
                if (selectedNodes.indexOf(selectedNode) == -1) {
                    selectedNodes.push(selectedNode)
                }
                console.log(selectedNodes)
                setDeveloperStatus(`${selectedNodes.length} node${selectedNodes.length === 1 ? '' : 's'} selected.`)
            }
        }
        if (keyCode == 70 && developer == true) { //F - toggle fast move
            if (fastMove == true) {
                fastMove = false
            } else {
                fastMove = true
            }
            setDeveloperStatus(`Move mode: ${fastMove ? 'fast' : 'fine'}`)
        }
        if (keyCode == 81 && developer == true) { //Q - print tagdata and connectiondata
            printSelectedMindmapDataFile()
        }
        if (keyCode == 84 && developer == true) { //T - create new node
            const activeElement = document.activeElement;
            if (event.key === 't' && pointer !== null && !(activeElement instanceof HTMLInputElement)) {
                openTagInput('create', selectedContext);
                event.preventDefault();
            }
        }
        if (code === 'Enter' && developer == true && slideshowStatus.activeSlideshow === undefined) {
            openSelectedNodeTextEditor();
            return;
        }
        if (code === 'KeyK' && developer == true) {
            cycleCursorConnectionMode();
            return;
        }
        if (keyCode == 88 && developer == true) { //X - remove node
            deleteEditorNodes(selectedContext, getSelectedEditorNodeIndices())
        }
        if (keyCode == 82 && developer == true) { //R - create new connections
            toggleSelectedConnections('normal')
        }
        if (keyCode == 86 && developer == true) { //V - create new arrow connections
            toggleSelectedConnections('arrow')
        }
        if (keyCode == 66 && developer == true) { //B - create new dashed connections
            toggleSelectedConnections('dashed')
        }
        if (keyCode == 78 && developer == true) { //N - create new tunnel connections
            toggleSelectedConnections('tunnel')
        }
        
        if (keyCode == 87 && developer == true) { //W - redraw connections
            redrawDeveloperConnections(selectedContext)
        } 
        if (keyCode == 69 && developer == true) { //E - change color
            changeSelectedNodeColors(1)
        }
        if (keyCode == 68 && developer == true) { //D - change color
            changeSelectedNodeColors(-1)
        }

    }
}

function isTextEntryTarget(target) {
    if (!(target instanceof Element)) return false;
    return Boolean(target.closest('input, textarea, select, button, [contenteditable="true"], #developer-slide-lab, #developer-hud, #developer-context-menu, #tagInputPanel'));
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    const keyCode = event.which;
    const isMoveKey = keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39;
    const movementBefore = developer && isMoveKey ? snapshotEditorContext(selectedContext) : null;

    if (window.appStatus === "silence") {
        return;
    }

    if (selectedNodes.length > 0 && developer == true  && slideshowStatus.activeSlideshow == undefined && focusElement !== "tagInput" && !flyControls.enabled) {
        for (let node = 0; node < selectedNodes.length; node++) {
            if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
                let posLatLng = convertCartesiantoLatLng(contexts[selectedContext].pins[selectedNodes[node]].position.x, contexts[selectedContext].pins[selectedNodes[node]].position.y, contexts[selectedContext].pins[selectedNodes[node]].position.z);
                if (keyCode == 38) {
                    if (fastMove) posLatLng.lat += .4;
                    posLatLng.lat += .1;
                }
                if (keyCode == 40) {
                    if (fastMove)posLatLng.lat -= .4;
                    posLatLng.lat -= .1;
                }
                if (keyCode == 37) {
                    if (fastMove)posLatLng.lng += .4;
                    posLatLng.lng += .1;
                }
                if (keyCode == 39) {
                    if (fastMove)posLatLng.lng -= .4;
                    posLatLng.lng -= .1;
                }

                posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng)

                contexts[selectedContext].tagData[selectedNodes[node]].lat = posLatLng.lat.toFixed(1)
                contexts[selectedContext].tagData[selectedNodes[node]].lng = posLatLng.lng.toFixed(1)
                refreshNode(selectedContext, selectedNodes[node])
                markEditorDirty(selectedContext)
            }
        }
    } else if (selectedPin != null && developer == true  && slideshowStatus.activeSlideshow == undefined && focusElement !== "tagInput" && !flyControls.enabled) {

        if (keyCode == 38 || keyCode == 40 || keyCode == 37 || keyCode == 39){
            const selectedNodeData = contexts[selectedContext]?.tagData?.[selectedNode];
            let posLatLng = selectedNodeData
                ? { lat: Number(selectedNodeData.lat), lng: Number(selectedNodeData.lng) }
                : convertCartesiantoLatLng(selectedPin.position.x, selectedPin.position.y, selectedPin.position.z);
            console.log(posLatLng)
            if (keyCode == 38) {
                if (fastMove) posLatLng.lat += .4;
                posLatLng.lat += .1;                
            }
            if (keyCode == 40) {
                if (fastMove) posLatLng.lat -= .4;
                posLatLng.lat -= .1;
            }
            if (keyCode == 37) {
                if (fastMove) posLatLng.lng += .4;
                posLatLng.lng += .1;  
            }
            if (keyCode == 39) {
                if (fastMove) posLatLng.lng -= .4;
                posLatLng.lng -= .1;
            }

            posLatLng = constrainLatLng(posLatLng.lat, posLatLng.lng)
            contexts[selectedContext].tagData[selectedNode].lat = posLatLng.lat.toFixed(1)
            contexts[selectedContext].tagData[selectedNode].lng = posLatLng.lng.toFixed(1)
            refreshNode(selectedContext, selectedNode)
            markEditorDirty(selectedContext)
        }
    }
    if (movementBefore && isMoveKey) {
        commitEditorMutation('Moved node', selectedContext, movementBefore)
    }
};

let focusElement //create new Node
function getPointerLatLngForContext(contextIndex) {
    const context = contexts[contextIndex];
    if (!context?.tagDestination) return null;
    raycaster.setFromCamera(pointer, camera);
    context.tagDestination.updateMatrixWorld(true);
    const inverseMatrix = new THREE.Matrix4().copy(context.tagDestination.matrixWorld).invert();
    const localRay = raycaster.ray.clone().applyMatrix4(inverseMatrix);
    const localPoint = new THREE.Vector3();
    if (!localRay.intersectSphere(new THREE.Sphere(new THREE.Vector3(), context.radius), localPoint)) return null;
    return convertCartesiantoLatLng(localPoint.x, localPoint.y, localPoint.z);
}

function closeTagInput() {
    const input = document.getElementById('tagInput');
    const panel = document.getElementById('tagInputPanel');
    if (panel) {
        panel.hidden = true;
        panel.style.display = 'none';
    }
    if (input) {
        input.blur();
        input.value = '';
    }
    focusElement = undefined;
    tagInputMode = null;
}

function commitTagInput() {
    const input = document.getElementById('tagInput');
    const mode = tagInputMode ? { ...tagInputMode } : null;
    const text = input?.value.trim() || '';
    if (!mode || !text) {
        setDeveloperStatus('Node text cannot be empty.');
        return;
    }

    const context = contexts[mode.contextIndex];
    if (!context || !isEditableContext(mode.contextIndex)) {
        closeTagInput();
        return;
    }
    const before = snapshotEditorContext(mode.contextIndex);

    if (mode.mode === 'edit') {
        const item = context.tagData[mode.nodeIndex];
        if (!item) {
            closeTagInput();
            return;
        }
        item.text = text;
        closeTagInput();
        commitEditorMutation('Edited node text', mode.contextIndex, before);
        rebuildNodeLabel(mode.contextIndex, mode.nodeIndex).then(() => {
            selectedBox = context.boxes[mode.nodeIndex] || null;
            selectedTag = context.tags[mode.nodeIndex] || null;
            refreshNode(mode.contextIndex, mode.nodeIndex);
            updateDeveloperHud();
        }).catch((error) => {
            console.error('Node label rebuild failed:', error);
            setDeveloperStatus('Text saved, but the label could not be redrawn.');
        });
        return;
    }

    const latLng = mode.latLng;
    if (!latLng) {
        setDeveloperStatus('Point at the active map surface before creating a node.');
        return;
    }

    const id = generateUUID();
    const newItem = {
        id,
        text,
        lat: Number(latLng.lat.toFixed(1)),
        lng: Number(latLng.lng.toFixed(1)),
        color: 22,
        size: 40,
        slides: undefined,
    };
    context.tagData.push(newItem);
    ['normal', 'arrow', 'dashed', 'tunnel'].forEach((kind) => ensureConnectionRows(context, kind));
    const globalIndex = context.tagData.length - 1;
    const creationPromise = createTags([newItem], context.tagDestination, context.radius, mode.contextIndex, globalIndex);
    selectedContext = mode.contextIndex;
    selectedNode = globalIndex;
    selectedPin = context.pins[globalIndex] || null;
    closeTagInput();
    commitEditorMutation('Created node', mode.contextIndex, before);
    creationPromise.then(() => {
        selectedBox = context.boxes[globalIndex] || null;
        selectedTag = context.tags[globalIndex] || null;
        refreshNode(mode.contextIndex, globalIndex);
        updateDeveloperHud();
    }).catch((error) => {
        console.error('New node label creation failed:', error);
        setDeveloperStatus('Node created, but its label could not be drawn.');
    });
}

document.getElementById('tagInput').addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        closeTagInput();
        setDeveloperStatus('Node edit cancelled.');
        return;
    }
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;
    event.preventDefault();
    event.stopPropagation();
    suppressTagInputEnterKeyUp = true;
    commitTagInput();
});
document.getElementById('tagInputSave').addEventListener('click', commitTagInput);
document.getElementById('tagInputCancel').addEventListener('click', () => {
    closeTagInput();
    setDeveloperStatus('Node edit cancelled.');
});

//EVENTS MOUSE
function openDeveloperMindmapContextMenu(event) {
    if (!developer || openSlidesOnNodeClick || settlementMode || isTextEntryTarget(event.target)) return;
    event.preventDefault();
    event.stopPropagation();

    const x = event.clientX;
    const y = event.clientY;
    pointer.x = (x / window.innerWidth) * 2 - 1;
    pointer.y = -(y / window.innerHeight) * 2 + 1;
    pointerClient = { x, y };
    raycaster.setFromCamera(pointer, camera);

    const pin = getVisibleIntersections(getActiveEditorNodeObjects(), false)[0]?.object || null;
    if (isMindmapImageObject(pin)) {
        selectEditorImage(pin.context, pin.index);
        setDeveloperStatus('Image selected. Drag to move it or use +/- to resize it.');
        return;
    }
    const contextIndex = pin?.context ?? selectedContext;
    if (!isEditableContext(contextIndex)) return;
    const preserveGroup = Boolean(
        pin
        && selectedContext === contextIndex
        && selectedNodes.length > 1
        && selectedNodes.includes(pin.index)
    );
    if (pin) {
        if (!preserveGroup) selectedNodes.length = 0;
        selectEditorNode(contextIndex, pin.index);
    }

    const nodeIndex = pin?.index ?? null;
    const node = Number.isInteger(nodeIndex) ? contexts[contextIndex]?.tagData?.[nodeIndex] : null;
    const targetIndices = node
        ? preserveGroup ? [...selectedNodes] : [nodeIndex]
        : [];
    developerContextMenu.open({
        x,
        y,
        latLng: getPointerLatLngForContext(contextIndex),
        contextIndex,
        nodeIndex,
        node,
        targetIndices,
        selectionCount: targetIndices.length,
        size: Number(node?.size) || 40,
        colorIndex: Number(node?.color) || 0,
        palette,
        inMultiSelection: Number.isInteger(nodeIndex) && selectedNodes.includes(nodeIndex),
    });
}

window.addEventListener('contextmenu', openDeveloperMindmapContextMenu);

let initialTouchPosition = { x: null, y: null };
const tapMoveThreshold = 30; // px movement allowed to still count as a tap/click
let orbitDragging = false; // suppress slide clicks while orbiting

// Guard: track OrbitControls drag state to avoid accidental clicks triggering slides
if (typeof orbitControls !== 'undefined' && orbitControls && orbitControls.addEventListener) {
    orbitControls.addEventListener('start', () => { orbitDragging = true; });
    orbitControls.addEventListener('end',   () => { orbitDragging = false; });
}

function onPointerMove(event) {
    // Support touch and mouse
    const isTouch = !!event.changedTouches;
    const cx = isTouch ? event.changedTouches[0].clientX : event.clientX;
    const cy = isTouch ? event.changedTouches[0].clientY : event.clientY;

    pointer.x = (cx / window.innerWidth) * 2 - 1;
    pointer.y = -(cy / window.innerHeight) * 2 + 1;
    pointerClient = { x: cx, y: cy };

    if (developer && imageDragState) {
        const dx = cx - imageDragState.startX;
        const dy = cy - imageDragState.startY;
        if (!imageDragState.active && (dx * dx + dy * dy) > 25) imageDragState.active = true;
        if (imageDragState.active) {
            const latLng = getPointerLatLngForContext(imageDragState.contextIndex);
            if (latLng) {
                const targetPosition = convertLatLngtoCartesian(latLng.lat, latLng.lng, 1);
                const targetVector = new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z).normalize();
                const rotation = new THREE.Quaternion().setFromUnitVectors(imageDragState.anchorVector, targetVector);
                const rotated = imageDragState.startVector.clone().applyQuaternion(rotation).normalize();
                const nextLatLng = convertCartesiantoLatLng(rotated.x, rotated.y, rotated.z);
                const item = contexts[imageDragState.contextIndex]?.imageData?.[imageDragState.imageIndex];
                if (item) {
                    item.lat = Number(nextLatLng.lat.toFixed(1));
                    item.lng = Number(nextLatLng.lng.toFixed(1));
                    refreshMindmapImage(imageDragState.contextIndex, imageDragState.imageIndex);
                }
            }
            document.body.style.cursor = 'grabbing';
            selectState = false;
            event.preventDefault();
        }
        return;
    }

    if (developer && nodeDragState) {
        const dx = cx - nodeDragState.startX;
        const dy = cy - nodeDragState.startY;
        if (!nodeDragState.active && (dx * dx + dy * dy) > 25) nodeDragState.active = true;
        if (nodeDragState.active) {
            const latLng = getPointerLatLngForContext(nodeDragState.contextIndex);
            if (latLng) {
                const targetPosition = convertLatLngtoCartesian(latLng.lat, latLng.lng, 1);
                const targetVector = new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z).normalize();
                const rotation = new THREE.Quaternion().setFromUnitVectors(nodeDragState.anchorVector, targetVector);
                nodeDragState.startVectors.forEach(({ nodeIndex, vector }) => {
                    const rotated = vector.clone().applyQuaternion(rotation).normalize();
                    const nextLatLng = convertCartesiantoLatLng(rotated.x, rotated.y, rotated.z);
                    const item = contexts[nodeDragState.contextIndex]?.tagData?.[nodeIndex];
                    if (!item) return;
                    item.lat = Number(nextLatLng.lat.toFixed(1));
                    item.lng = Number(nextLatLng.lng.toFixed(1));
                    refreshNode(nodeDragState.contextIndex, nodeIndex);
                });
            }
            document.body.style.cursor = 'grabbing';
            selectState = false;
            event.preventDefault();
        }
        return;
    }

    // If we've moved too far since pointerdown, cancel click intent
    if (initialTouchPosition.x !== null && initialTouchPosition.y !== null) {
        const dx = cx - initialTouchPosition.x;
        const dy = cy - initialTouchPosition.y;
        if ((dx*dx + dy*dy) > (tapMoveThreshold * tapMoveThreshold)) {
            selectState = false;
        }
    }

    if (developer && isConnectionHandleDragActive()) {
        raycaster.setFromCamera(pointer, camera);
        updateConnectionHandleDrag(raycaster);
        selectState = false;
        event.preventDefault();
    }
}

async function onPointerClick(event) {
    event.preventDefault();

    if (window.appStatus === "silence") {
        return;
    }

    // Only respond to primary mouse button (or touch)
    if (event.button !== undefined && event.button !== 0) return;

    let x, y;
  
    // Check if the event is a touch event
    if (event.changedTouches) {
      x = event.changedTouches[0].clientX;
      y = event.changedTouches[0].clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }
  
    pointer.x = (x / window.innerWidth) * 2 - 1;
    pointer.y = -(y / window.innerHeight) * 2 + 1;
  
    raycaster.setFromCamera(pointer, camera);
    const visibleIntersections = getVisibleIntersections(developer ? getActiveEditorNodeObjects() : getActiveIntersectObjects());
    const intersects = developer && cursorConnectionMode !== 'off'
        ? visibleIntersections.filter(({ object }) => !isMindmapImageObject(object))
        : visibleIntersections;
  
    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        if (developer && isMindmapImageObject(clickedObject)) {
            selectEditorImage(clickedObject.context, clickedObject.index);
            setDeveloperStatus('Image selected. Drag to move it or use +/- to resize it.');
            return;
        }
        const clickedContext = clickedObject.context;
        const clickedNode = clickedObject.index;
        const clickedPin = contexts[clickedContext]?.pins?.[clickedNode] || clickedObject;
        const previousContext = selectedContext;
        if (developer && cursorConnectionMode === 'off' && event.shiftKey) {
            toggleEditorMultiSelection(clickedContext, clickedNode);
            return;
        }

        selectedContext = clickedContext;
        if (previousContext !== clickedContext) {
            selectedNodes.length = 0;
            cursorConnectionSource = null;
            developerHud.setStatus('');
        }
        if (developer && cursorConnectionMode === 'off') selectedNodes.length = 0;
        selectedPin = clickedPin;
        selectedNode = clickedNode;
        selectedBox = contexts[selectedContext]?.boxes[selectedNode] || null;
        selectedTag = contexts[selectedContext]?.tags[selectedNode] || null;
        selectedImage = null;
        selectedImageMesh = null;
        updateDeveloperHud();

        if (developer && cursorConnectionMode !== 'off') {
            if (!isEditableContext(selectedContext)) {
                setDeveloperStatus('This context does not support connections.');
                return;
            }
            if (!cursorConnectionSource || cursorConnectionSource.contextIndex !== selectedContext) {
                const sourceIndices = selectedNodes.length > 1 && selectedNodes.includes(selectedNode)
                    ? [...selectedNodes]
                    : [selectedNode];
                startCursorConnectionFromNodes(cursorConnectionMode, selectedContext, sourceIndices);
                return;
            }
            const sourceIndices = cursorConnectionSource.nodeIndices
                || (Number.isInteger(cursorConnectionSource.nodeIndex) ? [cursorConnectionSource.nodeIndex] : []);
            const actionableSources = sourceIndices.filter((nodeIndex) => nodeIndex !== selectedNode);
            if (!actionableSources.length) {
                cursorConnectionSource = null;
                setDeveloperStatus('Connection source cleared.');
                return;
            }
            const before = snapshotEditorContext(selectedContext);
            let added = 0;
            let removed = 0;
            actionableSources.forEach((sourceIndex) => {
                if (toggleConnectionBetween(selectedContext, sourceIndex, selectedNode, cursorConnectionMode)) added++;
                else removed++;
            });
            const sourceLabel = cursorConnectionSource.label;
            cursorConnectionSource = null;
            commitEditorMutation(
                `${cursorConnectionMode} connections from ${sourceLabel}: ${added} added${removed ? `, ${removed} removed` : ''}`,
                selectedContext,
                before,
            );
            return;
        }

    const selectedPinWorldPosition = selectedPin.getWorldPosition(new THREE.Vector3());
    if (openSlidesOnNodeClick && camera.position.distanceTo(selectedPinWorldPosition) < 10 && hasOpenableSlides(contexts[selectedContext].tagData[selectedNode], developer) && slideshowStatus.activeSlideshow == undefined) {
            slideshowStatus = await createSlideshowStatus(contexts[selectedContext].tagData[selectedNode].slides);
            await pushContent(slideshowStatus)
            if (window.appStatus == "flight") {
                flyControls.enabled = false
                document.body.style.cursor = 'default';
            }
            window.appStatus = "slideshow"
            const slideShowScreen = document.querySelector(`#slides`)
            slideShowScreen.style.display = "flex"
        }
    }
}

let selectState = false
let connectionHandleDragOrbitWasEnabled = false;
function processPointerUpEvent(event) {
    if (developer && isConnectionHandleDragActive()) {
        endConnectionHandleDrag();
        commitEditorMutation('Adjusted connection curve', selectedContext, connectionHandleHistoryBefore);
        connectionHandleHistoryBefore = null;
        orbitControls.enabled = connectionHandleDragOrbitWasEnabled;
        connectionHandleDragOrbitWasEnabled = false;
        selectState = false;
        initialTouchPosition.x = null;
        initialTouchPosition.y = null;
        event.preventDefault();
        return;
    }

    if (developer && imageDragState) {
        const drag = imageDragState;
        imageDragState = null;
        orbitControls.enabled = drag.orbitWasEnabled;
        document.body.style.cursor = 'default';
        if (drag.active) {
            selectEditorImage(drag.contextIndex, drag.imageIndex);
            commitEditorMutation('Dragged image', drag.contextIndex, drag.before);
            selectState = false;
            initialTouchPosition.x = null;
            initialTouchPosition.y = null;
            event.preventDefault();
            return;
        }
    }

    if (developer && nodeDragState) {
        const drag = nodeDragState;
        nodeDragState = null;
        orbitControls.enabled = drag.orbitWasEnabled;
        document.body.style.cursor = 'default';
        if (drag.active) {
            selectedContext = drag.contextIndex;
            selectedNode = drag.nodeIndex;
            selectedPin = contexts[selectedContext]?.pins[selectedNode] || null;
            selectedBox = contexts[selectedContext]?.boxes[selectedNode] || null;
            selectedTag = contexts[selectedContext]?.tags[selectedNode] || null;
            redrawDeveloperConnections(drag.contextIndex);
            commitEditorMutation(`Dragged ${drag.nodeIndices.length} node${drag.nodeIndices.length === 1 ? '' : 's'}`, drag.contextIndex, drag.before);
            selectState = false;
            initialTouchPosition.x = null;
            initialTouchPosition.y = null;
            event.preventDefault();
            return;
        }
    }

    // Suppress click if we were orbit-dragging (OrbitControls active)
    if (selectState && !orbitDragging) {
      onPointerClick(event);
    }
    selectState = false;
        // reset initial position for next interaction
        initialTouchPosition.x = null;
        initialTouchPosition.y = null;
  }
  
  window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', (event) => {
        if (isTextEntryTarget(event.target)) {
            selectState = false;
            return;
        }
        if (event.button === 0) developerContextMenu.close();
        const isTouch = !!event.changedTouches;
        const cx = isTouch ? event.changedTouches[0].clientX : event.clientX;
        const cy = isTouch ? event.changedTouches[0].clientY : event.clientY;
        pointer.x = (cx / window.innerWidth) * 2 - 1;
        pointer.y = -(cy / window.innerHeight) * 2 + 1;
        pointerClient = { x: cx, y: cy };

        if (developer && (event.button === undefined || event.button === 0)) {
            raycaster.setFromCamera(pointer, camera);
            if (beginConnectionHandleDrag(raycaster)) {
                connectionHandleHistoryBefore = snapshotEditorContext(selectedContext);
                connectionHandleDragOrbitWasEnabled = orbitControls.enabled;
                orbitControls.enabled = false;
                selectState = false;
                event.preventDefault();
                return;
            }
            if (!settlementMode && cursorConnectionMode === 'off' && !event.shiftKey) {
                const editorIntersects = getVisibleIntersections(getActiveEditorNodeObjects(), false);
                const imageHit = editorIntersects.find(({ object }) => isMindmapImageObject(object));
                if (imageHit && imageHit === editorIntersects[0]) {
                    const imageObject = imageHit.object;
                    if (selectEditorImage(imageObject.context, imageObject.index)) {
                        const context = contexts[imageObject.context];
                        const item = context.imageData[imageObject.index];
                        const pointerLatLng = getPointerLatLngForContext(imageObject.context);
                        const anchorPosition = pointerLatLng
                            ? convertLatLngtoCartesian(pointerLatLng.lat, pointerLatLng.lng, 1)
                            : convertLatLngtoCartesian(Number(item.lat), Number(item.lng), 1);
                        const startPosition = convertLatLngtoCartesian(Number(item.lat), Number(item.lng), 1);
                        imageDragState = {
                            contextIndex: imageObject.context,
                            imageIndex: imageObject.index,
                            anchorVector: new THREE.Vector3(anchorPosition.x, anchorPosition.y, anchorPosition.z).normalize(),
                            startVector: new THREE.Vector3(startPosition.x, startPosition.y, startPosition.z).normalize(),
                            startX: cx,
                            startY: cy,
                            active: false,
                            orbitWasEnabled: orbitControls.enabled,
                            before: snapshotEditorContext(imageObject.context),
                        };
                        orbitControls.enabled = false;
                    }
                }
                const nodeIntersects = imageDragState
                    ? []
                    : editorIntersects.filter(({ object }) => !isMindmapImageObject(object));
                const hasSelectedGroup = selectedNodes.length > 1 && isEditableContext(selectedContext);
                const selectedHit = hasSelectedGroup
                    ? nodeIntersects.find(({ object }) => object.context === selectedContext && selectedNodes.includes(object.index))
                    : null;
                const hitObject = (selectedHit || nodeIntersects[0])?.object;
                if (hitObject && (hasSelectedGroup || isEditableContext(hitObject.context))) {
                    const dragContextIndex = hasSelectedGroup ? selectedContext : hitObject.context;
                    const primaryNodeIndex = hasSelectedGroup && selectedNodes.includes(selectedNode)
                        ? selectedNode
                        : hasSelectedGroup ? selectedNodes[0] : hitObject.index;
                    const nodeIndices = hasSelectedGroup ? [...selectedNodes] : [hitObject.index];
                    if (nodeIndices.length === 1) {
                        selectedNodes.length = 0;
                        selectEditorNode(hitObject.context, hitObject.index);
                    }
                    const context = contexts[dragContextIndex];
                    const anchorItem = context.tagData[primaryNodeIndex];
                    const pointerLatLng = getPointerLatLngForContext(dragContextIndex);
                    const anchorPosition = pointerLatLng
                        ? convertLatLngtoCartesian(pointerLatLng.lat, pointerLatLng.lng, 1)
                        : convertLatLngtoCartesian(Number(anchorItem.lat), Number(anchorItem.lng), 1);
                    nodeDragState = {
                        contextIndex: dragContextIndex,
                        nodeIndex: primaryNodeIndex,
                        nodeIndices,
                        anchorVector: new THREE.Vector3(anchorPosition.x, anchorPosition.y, anchorPosition.z).normalize(),
                        startVectors: nodeIndices.map((nodeIndex) => {
                            const item = context.tagData[nodeIndex];
                            const position = convertLatLngtoCartesian(Number(item.lat), Number(item.lng), 1);
                            return {
                                nodeIndex,
                                vector: new THREE.Vector3(position.x, position.y, position.z).normalize(),
                            };
                        }),
                        startX: cx,
                        startY: cy,
                        active: false,
                        orbitWasEnabled: orbitControls.enabled,
                        before: snapshotEditorContext(dragContextIndex),
                    };
                    orbitControls.enabled = false;
                }
            }
        }

        selectState = true;
        // record initial position for click-vs-drag detection
        if (event.changedTouches) {
            initialTouchPosition.x = event.changedTouches[0].clientX;
            initialTouchPosition.y = event.changedTouches[0].clientY;
        } else {
            initialTouchPosition.x = event.clientX;
            initialTouchPosition.y = event.clientY;
        }
    });
  window.addEventListener('pointerup', processPointerUpEvent);
  window.addEventListener('dblclick', (event) => {
      if (!developer || openSlidesOnNodeClick || isTextEntryTarget(event.target)) return;
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      pointerClient = { x: event.clientX, y: event.clientY };
      raycaster.setFromCamera(pointer, camera);
      const pin = getVisibleIntersections(getActiveIntersectObjects(), false)[0]?.object;
      if (!pin || !isEditableContext(pin.context)) return;
      selectedContext = pin.context;
      selectedNode = pin.index;
      selectedPin = pin;
      selectedBox = contexts[selectedContext]?.boxes[selectedNode] || null;
      selectedTag = contexts[selectedContext]?.tags[selectedNode] || null;
      openSelectedNodeTextEditor();
  });

// DATA CONSISTENCY CHECK (updated for dynamic switching)
(() => {
    const planetCtx = contexts && contexts[0];
    if (!planetCtx || !planetCtx.tagData) return;
    const tagData = planetCtx.tagData || [];
    const conn = planetCtx.connectionData || [];
    const arrow = planetCtx.arrowConnectionData || [];
    const dashed = planetCtx.dashedConnectionData || [];
    const tunnel = planetCtx.tunnelConnectionData || [];

    const label = name => `[DATA TEST:${planetCtx.name || 'planet'}:${name}]`;

    if (tagData.length !== conn.length) {
        console.log(label('connections length mismatch'), tagData.length, conn.length);
        for (let i = 0; i < Math.min(tagData.length, conn.length); i++) {
            if (tagData[i].id !== conn[i][0]) {
                console.log(label('id mismatch'), i, tagData[i].id, '!=', conn[i][0]);
            }
        }
    }
    if (tagData.length !== arrow.length) {
        console.log(label('arrow length mismatch'), tagData.length, arrow.length);
    }
    if (tagData.length !== dashed.length) {
        console.log(label('dashed length mismatch'), tagData.length, dashed.length);
    }
    if (tagData.length !== tunnel.length) {
        console.log(label('tunnel length mismatch'), tagData.length, tunnel.length);
    }
})();

let octreeHelperRoot = new THREE.Object3D();
scene.add(octreeHelperRoot);

function clampExampleIndex(list, index) {
    if (!list || list.length === 0) return -1;
    const safeIndex = Number.isFinite(index) ? index : 0;
    return ((safeIndex % list.length) + list.length) % list.length;
}

function getExampleAgent(list, idKey, indexKey) {
    if (!list || list.length === 0) return null;
    let idx = -1;
    const currentId = guttaState[idKey];
    if (currentId !== null && currentId !== undefined) {
        idx = list.findIndex(agent => agent.ID === currentId);
    }
    if (idx === -1) {
        idx = clampExampleIndex(list, guttaState[indexKey]);
    }
    if (idx === -1) return null;
    guttaState[indexKey] = idx;
    guttaState[idKey] = list[idx].ID;
    return list[idx];
}

function adjustExampleIndex(idKey, indexKey, list, delta) {
    if (!list || list.length === 0) return null;
    let idx = -1;
    const currentId = guttaState[idKey];
    if (currentId !== null && currentId !== undefined) {
        idx = list.findIndex(agent => agent.ID === currentId);
    }
    if (idx === -1) {
        idx = clampExampleIndex(list, guttaState[indexKey]);
    }
    if (idx === -1) return null;
    idx = clampExampleIndex(list, idx + delta);
    guttaState[indexKey] = idx;
    guttaState[idKey] = list[idx].ID;
    return list[idx];
}

function followAgent(agent) {
    // Disable manual flight controls
    flyControls.enabled = false;

    // Ensure jaraniusCenter's world matrix is up-to-date
    jaraniusCenter.updateMatrixWorld(true);

    // Clone the agent's local position
    const agentLocalPos = agent.position3D.clone();

    // Calculate the agent's world position by applying jaraniusCenter's world matrix
    const agentWorldPos = jaraniusCenter.localToWorld(agentLocalPos);

    // Compute the planet normal assuming the planet center is at (0,0,0)
    const planetNormal = agentWorldPos.clone().normalize();

    // Get the agent's forward direction (velocity)
    const forward = agent.velocity3D.clone();
    if (forward.lengthSq() < 0.00001) {
        // If velocity is negligible, set a default forward direction
        forward.set(0, 0, 1);
    } else {
        forward.normalize();
    }

    // Define an offset relative to the agent's forward and up vectors
    const offsetLocal = new THREE.Vector3(0, 0.05, -0.3);  

    // Compute the right and up vectors
    const right = new THREE.Vector3().crossVectors(planetNormal, forward).normalize();
    const up = new THREE.Vector3().crossVectors(forward, right).normalize();

    // Calculate the desired camera position in world space
    const cameraDesiredPos = agentWorldPos.clone()
        .add(right.multiplyScalar(offsetLocal.x))
        .add(up.multiplyScalar(offsetLocal.y))
        .add(forward.multiplyScalar(offsetLocal.z));

    // Smoothly interpolate the camera's position towards the desired position
    camera.position.lerp(cameraDesiredPos, 0.08);  // Adjust the lerp factor as needed

    // Optionally, adjust the camera's up vector for aesthetic purposes
    // Be cautious with frequent or large adjustments to prevent instability
    camera.up.lerp(planetNormal, 0.05);

    // Make the camera look at the agent's position
    camera.lookAt(agentWorldPos);
}

function followOrbitAgent(agent) {
    if (!agent) return;
    jaraniusCenter.updateMatrixWorld(true);
    const agentWorldPos = jaraniusCenter.localToWorld(agent.position3D.clone());
    const center = middleOfPlanet;
    const distance = camera.position.distanceTo(center);
    const normal = agentWorldPos.clone().sub(center).normalize();
    const desiredPos = center.clone().add(normal.multiplyScalar(distance));
    orbitControls.target.copy(center);
    camera.position.copy(desiredPos);
}

//ANIMATIONLOOP

function animate() {
    renderer.setAnimationLoop( render );
}

const FPS_LIMIT = 30;
const FRAME_INTERVAL_MS = FPS_LIMIT > 0 ? 1000 / FPS_LIMIT : 0;
let lastFrameTimeMs = 0;

function render() {  
    const now = performance.now();
    if (FRAME_INTERVAL_MS > 0) {
        if (now - lastFrameTimeMs < FRAME_INTERVAL_MS) {
            return;
        }
        lastFrameTimeMs = now - ((now - lastFrameTimeMs) % FRAME_INTERVAL_MS);
    }

    const delta = clock.getDelta();
    updateFpsCounter(now);

    const showGuttaOctreeDebug = proceduralPlanetRuntime.shouldShowGuttaOctreeDebug({ developer: developer && showDeveloperOctree, settlementMode });
    octreeHelperRoot.visible = showGuttaOctreeDebug;
    updateGutta(
        guttaState,
        guttaStats,
        jaranius,
        nuggets,
        showGuttaOctreeDebug,
        octreeHelperRoot,
    )
    
    const camPos = camera.position
    const camRot = camera.rotation
    spotlight.position.set(camPos.x, camPos.y, camPos.z);
    spotlight.rotation.set(camRot.x, camRot.y, camRot.z);
    
    if (planetEnvironment.isJaraniusInitialized()) {
        applyPendingInitialPlanetBookmark();
        planetEnvironment.update({
            appStatus: window.appStatus,
            orbitControls,
            introState,
            delta,
        });
        proceduralPlanetRuntime.applySurfacePresentation();

        window.curveMeshes.forEach(curveData => {
            curveData.texture.offset.y += 0.004;
            curveData.texture.offset.x += 0.001;
        });

        scanPins();
        settlementMapLayer?.update();
        updateLightIntensity(clock);
    }

    if (introState.tuneLength) {
        if (camera.position.z > 15 && introState.started === true) {
            camera.position.z -= 0.0213 * Math.pow(camera.position.z - 10, 1.35) / introState.tuneLength
        }
        if (camera.position.z < -15 && introState.started === true) {
            camera.position.z += 0.213 * Math.pow(Math.abs(camera.position.z) - 10, 1.35) / introState.tuneLength
        }
        if (introState.started === true) {
            camera.position.x += 0.4 / introState.tuneLength
            camera.position.y += 0.2 / introState.tuneLength
        }
        if (introState.audio) {
            // keep subtitle timing in sync
            // (timeupdate listener handles text updates; this mirrors timing for any external consumers)
            introState.elapsedTime = introState.audio.currentTime;
        }
    }

    const cameraTransitionActive = updateSmoothOrbitTransition(delta);

    if (!cameraTransitionActive && flyControls.enabled) {
        flyControls.update(delta);

        const proceduralSurfaceState = proceduralPlanetRuntime.clampCameraToSurface();
        let distance = camera.position.distanceTo(middleOfPlanet);
        if (!proceduralSurfaceState && distance < flyControls.minDistance) {
            const direction = camera.position.clone().sub(middleOfPlanet).normalize();
            camera.position.copy(direction.multiplyScalar(flyControls.minDistance));
            distance = camera.position.distanceTo(middleOfPlanet);
        }

        updateFlightSpeedByDistance(distance);
        updateFlightStabilizer(delta);
    }

    if (!cameraTransitionActive && window.appStatus === "flight") {
        const currentFollowMode = getFollowMode();
        if (currentFollowMode === "gutt") {
          const exampleGutt = getExampleAgent(guttaState.gutta, 'exampleGuttId', 'exampleGuttIndex');
          if (exampleGutt) {
            followAgent(exampleGutt);
          }
        }
        else if (currentFollowMode === "mara") {
          const exampleMara = getExampleAgent(guttaState.mara, 'exampleMaraId', 'exampleMaraIndex');
          if (exampleMara) {
            followAgent(exampleMara);
          }
        }
        else {
          // Manual flight mode => normal fly controls
          flyControls.enabled = true;
        }
      }

    if (!cameraTransitionActive && window.appStatus === "orbit") {
        const currentFollowMode = getFollowMode();
        if (currentFollowMode === "gutt") {
            followOrbitAgent(getExampleAgent(guttaState.gutta, 'exampleGuttId', 'exampleGuttIndex'));
        } else if (currentFollowMode === "mara") {
            followOrbitAgent(getExampleAgent(guttaState.mara, 'exampleMaraId', 'exampleMaraIndex'));
        }
    }

    if (!cameraTransitionActive && orbitControls.enabled) {
        orbitControls.update();
    }

    if (resizeRendererToDisplaySize()) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
}

animate()
