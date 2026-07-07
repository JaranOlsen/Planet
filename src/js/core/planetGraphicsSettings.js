export const CONTENT_LIGHT_LAYER = 1;

const GRAPHICS_PROFILE_NAMES = ['baseline', 'candidate'];

function readInitialGraphicsProfile() {
  if (typeof window === 'undefined') return 'candidate';

  const requestedProfile = new URLSearchParams(window.location.search).get('graphics');
  return GRAPHICS_PROFILE_NAMES.includes(requestedProfile) ? requestedProfile : 'candidate';
}

let activeGraphicsProfile = readInitialGraphicsProfile();
const profileListeners = new Set();

export const planetGraphicsProfiles = {
  baseline: {
    clouds: {
      wispyEnabled: false,
      wispyOpacity: 0,
      wispyBreakup: 0,
    },
    atmosphere: {
      scale: 1.2,
      closeScaleBoost: 0.75,
      sunsetStrength: 1,
      envelopeStrength: 0,
      envelopeDayStrength: 0,
      envelopeNightStrength: 0,
      outerAlphaPower: 1,
    },
    content: {
      lightLayerOnly: false,
      presenceEnabled: false,
      emissive: {
        connection: 0.1,
        box: 0.1,
        pin: 0.2,
        boxPrimary: 0.5,
        boxSecondary: 0.5,
        pinPrimary: 0.8,
      },
    },
  },
  candidate: {
    clouds: {
      wispyEnabled: true,
      wispyOpacity: 0.1,
      wispyBreakup: 0.16,
    },
    atmosphere: {
      scale: 1,
      closeScaleBoost: 0,
      sunsetStrength: 0,
      envelopeStrength: 0.2,
      envelopeDayStrength: 0.08,
      envelopeNightStrength: 0.006,
      outerAlphaPower: 3.2,
    },
    content: {
      lightLayerOnly: true,
      presenceEnabled: true,
      emissive: {
        connection: 0.35,
        box: 0.22,
        pin: 0.38,
        boxPrimary: 0.5,
        boxSecondary: 0.5,
        pinPrimary: 0.8,
      },
    },
  },
};

export const planetGraphicsSettings = {
  renderer: {
    maxPixelRatio: Infinity,
    toneMappingExposure: 1,
    useAcesToneMapping: false,
  },
  textures: {
    maxAnisotropy: 8,
  },
  surface: {
    normalScale: {
      nearDistance: 5.25,
      midDistance: 8.5,
      farDistance: 18,
      near: 5,
      mid: 5,
      far: 5,
    },
    material: {
      roughness: 1,
      metalness: 0,
    },
    shader: {
      microDetailStart: 5.25,
      microDetailEnd: 8.8,
      microDetailScale: 18,
      microColorStrength: 0,
      microRoughnessStrength: 0,
      waterRoughnessBoost: 0,
      waterSaturationSoftening: 0,
    },
  },
  clouds: {
    radius: 5.04,
    wispyRadius: 5.11,
    opacity: 0.8,
    normalScale: 0.5,
    rotationSpeed: 0.00001,
    wispyRotationSpeed: -0.000018,
    wispyInitialRotation: [1.23, 2.72, -0.9],
    wispyCloseFadeStart: 5.45,
    wispyCloseFadeEnd: 6.7,
    nightAlpha: 0.35,
    dayBoost: 0.22,
    rimBoost: 0.1,
  },
  atmosphere: {
    radius: 5.3,
    scale: 1.2,
    closeScaleBoost: 0.75,
    closeDistanceThreshold: 7.0,
    standardColor: [0.3, 0.6, 1.0],
    sunsetColor: [1.0, 0.4, 0.1],
    nightColor: [0.0, 0.0, 0.0],
  },
  content: {
    smallestInnerFadeDistance: 7.2,
    largestOuterFadeDistance: 16.2,
    fadeTransitionDistance: 1.35,
    minOpacity: 0.02,
    minScale: 0.82,
    defaultVisibilitySize: 0.35,
    shadowOpacityCutoff: 0.08,
  },
  postProcessing: {
    enabled: false,
    smaa: true,
  },
};

export function getGraphicsProfile() {
  return activeGraphicsProfile;
}

export function getPlanetGraphicsProfileSettings() {
  return planetGraphicsProfiles[activeGraphicsProfile];
}

export function isCandidateGraphicsProfile() {
  return activeGraphicsProfile === 'candidate';
}

export function setGraphicsProfile(profile, options = {}) {
  if (!GRAPHICS_PROFILE_NAMES.includes(profile)) {
    throw new Error(`Unknown graphics profile "${profile}". Use "baseline" or "candidate".`);
  }

  const changed = profile !== activeGraphicsProfile;
  activeGraphicsProfile = profile;

  if (typeof window !== 'undefined' && options.updateUrl !== false) {
    const url = new URL(window.location.href);
    url.searchParams.set('graphics', profile);
    window.history.replaceState({}, '', url);
  }

  if (changed) {
    profileListeners.forEach((listener) => listener(activeGraphicsProfile, getPlanetGraphicsProfileSettings()));
  }

  return activeGraphicsProfile;
}

export function onGraphicsProfileChange(listener) {
  profileListeners.add(listener);
  return () => profileListeners.delete(listener);
}

export function installPlanetGraphicsApi() {
  if (typeof window === 'undefined') return;

  window.planetGraphics = {
    getProfile: getGraphicsProfile,
    getSettings: getPlanetGraphicsProfileSettings,
    profiles: [...GRAPHICS_PROFILE_NAMES],
    setProfile: setGraphicsProfile,
  };
}

export function enableContentLightLayer(object) {
  if (!object) return;
  object.layers.enable(CONTENT_LIGHT_LAYER);
  object.traverse?.((child) => {
    child.layers.enable(CONTENT_LIGHT_LAYER);
  });
}

installPlanetGraphicsApi();
