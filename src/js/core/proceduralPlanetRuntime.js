import * as THREE from 'three';

import { convertLatLngtoCartesian, convertCartesiantoLatLng } from '../mathScripts.js';

const PROCEDURAL_SURFACE_FLIGHT_CLEARANCE = 0.12;
const SURFACE_PRESENTATION_DOM_IDS = [
    'credits',
    'playbutton',
    'skipbutton',
    'footer',
    'hotKeys',
    'fpsCounter',
    'guttaStatScreen',
];
const SURFACE_PRESENTATION_DOM_STATUSES = new Set(['orbit', 'flight']);

const DEFAULT_BOOKMARKS = {
    far: { mode: 'orbit', lat: 18, lng: -35, radius: 22 },
    mindmap: { mode: 'orbit', lat: 18, lng: -35, radius: 12 },
    head: { mode: 'orbit', lat: 67.5, lng: -121, radius: 11 },
    heart: { mode: 'orbit', lat: 69, lng: 0, radius: 11 },
    gut: { mode: 'orbit', lat: 69, lng: 120, radius: 11 },
    surface: { mode: 'surface', lat: 20, lng: 20, radius: 5.34, clearance: 0.28, heading: 'north', lookAhead: 1.02, lookDown: 0.48 },
    surfaceFlight: { mode: 'flight', lat: 20, lng: 20, radius: 5.2, clearance: 0.14, heading: 'north', lookAhead: 0.82, lookDown: 0.62 },
};

function vectorFromLatLng(lat, lng, radius) {
    const point = convertLatLngtoCartesian(lat, lng, radius);
    return new THREE.Vector3(point.x, point.y, point.z);
}

function tangentForUnit(unit, heading = 'east') {
    const northReference = Math.abs(unit.y) > 0.92
        ? new THREE.Vector3(1, 0, 0)
        : new THREE.Vector3(0, 1, 0);
    const east = new THREE.Vector3().crossVectors(northReference, unit).normalize();
    const north = new THREE.Vector3().crossVectors(unit, east).normalize();
    if (heading === 'north') return north;
    if (heading === 'south') return north.multiplyScalar(-1);
    if (heading === 'west') return east.multiplyScalar(-1);
    return east;
}

function isEffectivelyVisible(object) {
    let current = object;
    while (current) {
        if (!current.visible) return false;
        current = current.parent;
    }
    return true;
}

function isSurfacePresentationAllowedObject(object) {
    return String(object?.name || '').startsWith('procedural-surface-');
}

export function createProceduralPlanetRuntime({
    proceduralPlanet,
    planetEnvironment,
    scene,
    camera,
    orbitControls,
    flyControls,
    middleOfPlanet,
    cancelSmoothOrbitTransition,
    getJaranius,
    getPlanetContext,
    getCurveMeshes = () => [],
    getOctreeHelperRoot = () => null,
    datasetObjects = [],
    bookmarks = DEFAULT_BOOKMARKS,
}) {
    const surfacePresentationState = {
        active: false,
        objectVisibility: new Map(),
        domDisplays: new Map(),
        lineSweepTargets: new Set(),
        lineSweepFrames: 0,
        lineSweepInterval: 0,
        fogCaptured: false,
        previousFog: null,
        surfaceFog: new THREE.FogExp2(0x7f8980, 0.23),
    };

    const rememberObjectVisibility = (object) => {
        if (!object || surfacePresentationState.objectVisibility.has(object)) return;
        surfacePresentationState.objectVisibility.set(object, object.visible);
    };

    const hideSurfacePresentationObject = (object) => {
        if (!object) return;
        rememberObjectVisibility(object);
        object.visible = false;
    };

    const hideSurfacePresentationDom = () => {
        if (typeof document?.getElementById !== 'function') return;
        SURFACE_PRESENTATION_DOM_IDS.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;
            if (!surfacePresentationState.domDisplays.has(id)) {
                surfacePresentationState.domDisplays.set(id, element.style.display);
            }
            element.style.display = 'none';
        });
    };

    const restoreSurfacePresentationDom = () => {
        if (typeof document?.getElementById === 'function') {
            surfacePresentationState.domDisplays.forEach((display, id) => {
                const element = document.getElementById(id);
                if (element) element.style.display = display;
            });
        }
        surfacePresentationState.domDisplays.clear();
    };

    const restoreSurfacePresentation = () => {
        surfacePresentationState.lineSweepFrames = 0;
        surfacePresentationState.lineSweepInterval = 0;
        surfacePresentationState.lineSweepTargets.clear();
        surfacePresentationState.objectVisibility.forEach((visible, object) => {
            if (object) object.visible = visible;
        });
        surfacePresentationState.objectVisibility.clear();
        if (surfacePresentationState.fogCaptured) {
            scene.fog = surfacePresentationState.previousFog;
            surfacePresentationState.previousFog = null;
            surfacePresentationState.fogCaptured = false;
        }
        restoreSurfacePresentationDom();
    };

    const shouldHideSurfacePresentationObject = (object) => {
        if (!object || isSurfacePresentationAllowedObject(object)) return false;
        if (object.isLine || object.isLineSegments || String(object.type || '').includes('Line')) {
            return true;
        }
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        return materials.some((material) => {
            const color = material?.color;
            return Boolean(color && color.g > color.r * 1.25 && color.g > color.b * 1.15);
        });
    };

    const applySurfacePresentation = () => {
        if (!surfacePresentationState.active) return;
        const planetCtx = getPlanetContext();
        if (!planetCtx) return;

        if (!surfacePresentationState.fogCaptured) {
            surfacePresentationState.previousFog = scene.fog || null;
            surfacePresentationState.fogCaptured = true;
        }
        scene.fog = surfacePresentationState.surfaceFog;

        if (SURFACE_PRESENTATION_DOM_STATUSES.has(window.appStatus)) {
            hideSurfacePresentationDom();
        } else {
            restoreSurfacePresentationDom();
        }

        if (planetEnvironment.semanticOverlay) {
            hideSurfacePresentationObject(planetEnvironment.semanticOverlay);
        }
        if (planetEnvironment.semanticLandmarks) {
            hideSurfacePresentationObject(planetEnvironment.semanticLandmarks);
        }
        if (planetEnvironment.atmosphere) {
            hideSurfacePresentationObject(planetEnvironment.atmosphere);
        }
        if (planetEnvironment.atmosphericLight) {
            hideSurfacePresentationObject(planetEnvironment.atmosphericLight);
        }
        if (planetEnvironment.clouds) {
            hideSurfacePresentationObject(planetEnvironment.clouds);
        }
        if (planetEnvironment.water) {
            hideSurfacePresentationObject(planetEnvironment.water);
        }

        [...datasetObjects, getOctreeHelperRoot()].forEach((object) => {
            hideSurfacePresentationObject(object);
        });

        planetCtx.tags?.forEach((tag) => hideSurfacePresentationObject(tag));
        planetCtx.boxes?.forEach((box) => hideSurfacePresentationObject(box));

        const arrowMeshes = new Set(getCurveMeshes().map((curveData) => curveData.mesh).filter(Boolean));
        arrowMeshes.forEach((mesh) => hideSurfacePresentationObject(mesh));

        planetCtx.connectionDestination?.children.forEach((child) => {
            hideSurfacePresentationObject(child);
        });

        surfacePresentationState.lineSweepTargets.forEach((object) => {
            if (!object || isSurfacePresentationAllowedObject(object)) return;
            object.visible = false;
        });

        surfacePresentationState.lineSweepInterval += 1;
        const sweepCadence = surfacePresentationState.lineSweepFrames > 0 ? 12 : 45;
        if (surfacePresentationState.lineSweepInterval >= sweepCadence) {
            surfacePresentationState.lineSweepInterval = 0;
            if (surfacePresentationState.lineSweepFrames > 0) {
                surfacePresentationState.lineSweepFrames -= 1;
            }
            scene.traverse((object) => {
                if (!shouldHideSurfacePresentationObject(object)) return;
                surfacePresentationState.lineSweepTargets.add(object);
                hideSurfacePresentationObject(object);
            });
        }
    };

    const setSurfacePresentation = (active) => {
        const shouldActivate = Boolean(proceduralPlanet && active);
        if (surfacePresentationState.active === shouldActivate) {
            if (shouldActivate) {
                surfacePresentationState.lineSweepFrames = Math.max(
                    surfacePresentationState.lineSweepFrames,
                    6,
                );
                surfacePresentationState.lineSweepInterval = 12;
            }
            applySurfacePresentation();
            return;
        }

        restoreSurfacePresentation();
        surfacePresentationState.active = shouldActivate;
        surfacePresentationState.lineSweepFrames = shouldActivate ? 18 : 0;
        surfacePresentationState.lineSweepInterval = 12;
        applySurfacePresentation();
    };

    const getSurfacePresentationDiagnostics = () => {
        const rows = [];
        scene.traverse((object) => {
            if (!object || !isEffectivelyVisible(object)) return;
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            const material = materials.find(Boolean);
            const color = material?.color;
            const greenDominant = Boolean(color && color.g > color.r * 1.25 && color.g > color.b * 1.15);
            const lineLike = Boolean(object.isLine || object.isLineSegments || String(object.type || '').includes('Line'));
            if (!lineLike && !greenDominant) return;
            rows.push({
                name: object.name || '',
                type: object.type || '',
                isMesh: Boolean(object.isMesh),
                isLine: Boolean(object.isLine),
                isLineSegments: Boolean(object.isLineSegments),
                material: material?.type || '',
                color: color ? [Number(color.r.toFixed(3)), Number(color.g.toFixed(3)), Number(color.b.toFixed(3))] : null,
                children: object.children?.length || 0,
            });
        });
        return rows.slice(0, 80);
    };

    const getSurfacePresentationState = () => ({
        active: surfacePresentationState.active,
        hiddenObjects: surfacePresentationState.objectVisibility.size,
        hiddenDomElements: surfacePresentationState.domDisplays.size,
        lineSweepFrames: surfacePresentationState.lineSweepFrames,
        lineSweepTargets: surfacePresentationState.lineSweepTargets.size,
        fogActive: scene.fog === surfacePresentationState.surfaceFog,
        fogDensity: scene.fog?.density ?? null,
    });

    const getSurfaceState = (worldPosition, clearance = PROCEDURAL_SURFACE_FLIGHT_CLEARANCE) => {
        const jaranius = getJaranius();
        if (!proceduralPlanet || !jaranius) return null;
        jaranius.updateMatrixWorld(true);
        const localPosition = jaranius.worldToLocal(worldPosition.clone());
        const localDistance = localPosition.length();
        if (localDistance <= 0.000001) return null;

        const localUnit = localPosition.clone().normalize();
        const surface = proceduralPlanet.sampleSurfaceUnit(localUnit);
        const minRadius = Math.max(surface.radius + clearance, flyControls.minDistance);
        const latLng = convertCartesiantoLatLng(localUnit.x, localUnit.y, localUnit.z);

        return {
            localUnit,
            localDistance,
            minRadius,
            clearance,
            altitude: localDistance - surface.radius,
            surface,
            lat: latLng.lat,
            lng: latLng.lng,
        };
    };

    const clampCameraToSurface = (clearance = PROCEDURAL_SURFACE_FLIGHT_CLEARANCE) => {
        const jaranius = getJaranius();
        const state = getSurfaceState(camera.position, clearance);
        if (!jaranius || !state || state.localDistance >= state.minRadius) {
            return state ? { ...state, clamped: false } : null;
        }

        const correctedLocalPosition = state.localUnit.clone().multiplyScalar(state.minRadius);
        camera.position.copy(jaranius.localToWorld(correctedLocalPosition));
        return { ...state, clamped: true, altitude: state.minRadius - state.surface.radius };
    };

    const getBookmarkPosition = (bookmark) => {
        const localUnit = vectorFromLatLng(bookmark.lat, bookmark.lng, 1).normalize();
        if (!proceduralPlanet || (bookmark.mode !== 'surface' && bookmark.mode !== 'flight')) {
            return vectorFromLatLng(bookmark.lat, bookmark.lng, bookmark.radius);
        }

        const surface = proceduralPlanet.sampleSurfaceUnit(localUnit);
        const radius = surface.radius + (bookmark.clearance ?? PROCEDURAL_SURFACE_FLIGHT_CLEARANCE);
        const localPosition = localUnit.multiplyScalar(Math.max(radius, bookmark.radius ?? radius));
        const jaranius = getJaranius();
        if (!jaranius) return localPosition;
        jaranius.updateMatrixWorld(true);
        return jaranius.localToWorld(localPosition);
    };

    const applyBookmarkConfig = (bookmarkInput, name = 'custom') => {
        const bookmark = { ...bookmarkInput };
        cancelSmoothOrbitTransition();
        setSurfacePresentation(bookmark.mode === 'surface' || bookmark.mode === 'flight');
        camera.position.copy(getBookmarkPosition(bookmark));
        const unit = camera.position.clone().sub(middleOfPlanet).normalize();

        if (bookmark.mode === 'flight' || bookmark.mode === 'surface') {
            const tangent = tangentForUnit(unit, bookmark.heading);
            camera.up.copy(unit);
            camera.lookAt(camera.position.clone()
                .add(tangent.multiplyScalar(bookmark.lookAhead ?? 0.7))
                .add(unit.clone().multiplyScalar(-(bookmark.lookDown ?? 0.82))));
            orbitControls.enabled = false;
            flyControls.enabled = bookmark.mode === 'flight';
            document.body.style.cursor = bookmark.mode === 'flight' ? 'crosshair' : 'default';
            window.appStatus = bookmark.mode === 'flight' ? 'flight' : 'orbit';
        } else {
            camera.up.set(0, 1, 0);
            camera.lookAt(middleOfPlanet);
            orbitControls.target.copy(middleOfPlanet);
            orbitControls.enabled = true;
            flyControls.enabled = false;
            document.body.style.cursor = 'default';
            window.appStatus = 'orbit';
            orbitControls.update();
        }

        return { name, bookmark, mode: window.appStatus };
    };

    const applyBookmark = (name = 'far') => {
        const bookmark = bookmarks[name] || bookmarks.far;
        return applyBookmarkConfig(bookmark, name);
    };

    const getSurfaceFlightState = () => {
        const state = getSurfaceState(camera.position);
        if (!state) return null;
        return {
            lat: state.lat,
            lng: state.lng,
            altitude: state.altitude,
            minRadius: state.minRadius,
            surfaceRadius: state.surface.radius,
            waterDepth: state.surface.waterDepth,
            slope: state.surface.slope,
        };
    };

    const setSurfaceFlightAltitude = (altitude = PROCEDURAL_SURFACE_FLIGHT_CLEARANCE) => {
        const jaranius = getJaranius();
        const state = getSurfaceState(camera.position, PROCEDURAL_SURFACE_FLIGHT_CLEARANCE);
        const targetAltitude = Number(altitude);
        if (!jaranius || !state || !Number.isFinite(targetAltitude)) return null;
        const localPosition = state.localUnit.clone().multiplyScalar(state.surface.radius + targetAltitude);
        camera.position.copy(jaranius.localToWorld(localPosition));
        clampCameraToSurface();
        return getSurfaceFlightState();
    };

    return {
        applySurfacePresentation,
        setSurfacePresentation,
        getSurfacePresentationState,
        getSurfacePresentationDiagnostics,
        applyBookmark,
        clampCameraToSurface,
        getSurfaceFlightState,
        setSurfaceFlightAltitude,
        applyBookmarkConfig,
        shouldShowGuttaOctreeDebug: ({ developer, settlementMode }) => (
            Boolean(developer && !settlementMode && !proceduralPlanet && !surfacePresentationState.active)
        ),
        getBookmarkNames: () => Object.keys(bookmarks),
    };
}
