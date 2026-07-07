import * as THREE from 'three';
import { FrontSide, DoubleSide, Vector2 } from 'three';
import { getPlanetGraphicsProfileSettings, planetGraphicsSettings } from './planetGraphicsSettings.js';

function smoothstep(edge0, edge1, value) {
  const t = THREE.MathUtils.clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export function configureTextureQuality(renderer, texture, {
  colorSpace,
  generateMipmaps = true,
  minFilter = THREE.LinearMipmapLinearFilter,
  magFilter = THREE.LinearFilter,
  anisotropy = planetGraphicsSettings.textures.maxAnisotropy,
} = {}) {
  if (!texture) return texture;

  if (colorSpace !== undefined) {
    texture.colorSpace = colorSpace;
  }

  texture.generateMipmaps = generateMipmaps;
  texture.minFilter = minFilter;
  texture.magFilter = magFilter;

  const maxAnisotropy = renderer?.capabilities?.getMaxAnisotropy?.() || 1;
  texture.anisotropy = Math.min(anisotropy, maxAnisotropy);

  return texture;
}

export function selectSupportedTexture(renderer, texturePath) {
  const maxTextureSize = renderer?.capabilities?.maxTextureSize || Infinity;
  const raw = String(texturePath);

  if (maxTextureSize < 16384 && raw.includes('16k')) {
    return raw
      .replace('diffuse16k.jpg', 'diffuse8k.webp')
      .replace('normal16k.jpg', 'normal8k.webp')
      .replace('roughness16k.jpg', 'roughness8k.webp');
  }

  if (maxTextureSize < 8192 && raw.includes('8k')) {
    return raw
      .replace('diffuse8k.webp', 'diffuse4k.webp')
      .replace('normal8k.webp', 'normal4k.webp')
      .replace('roughness8k.webp', 'roughness4k.webp')
      .replace('clouds8k.webp', 'clouds4k.webp')
      .replace('clouds8kNormal.webp', 'clouds4kNormal.webp')
      .replace('cloudsWispy8k.webp', 'cloudsWispy4k.webp');
  }

  return texturePath;
}

export function createPlanetSurfaceMaterial({ diffuseMap, normalMap, roughnessMap }) {
  const settings = planetGraphicsSettings.surface;
  const material = new THREE.MeshStandardMaterial({
    map: diffuseMap,
    normalMap,
    roughnessMap,
    normalScale: new Vector2(settings.normalScale.far, settings.normalScale.far),
    roughness: settings.material.roughness,
    metalness: settings.material.metalness,
    flatShading: false,
    side: FrontSide,
  });

  const shaderStrengths = [
    settings.shader.microColorStrength,
    settings.shader.microRoughnessStrength,
    settings.shader.waterRoughnessBoost,
    settings.shader.waterSaturationSoftening,
  ];
  const shouldPatchShader = shaderStrengths.some((strength) => Math.abs(strength) > 0.0001);

  if (!shouldPatchShader) {
    return material;
  }

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uPlanetMicroDetailStart = { value: settings.shader.microDetailStart };
    shader.uniforms.uPlanetMicroDetailEnd = { value: settings.shader.microDetailEnd };
    shader.uniforms.uPlanetMicroDetailScale = { value: settings.shader.microDetailScale };
    shader.uniforms.uPlanetMicroColorStrength = { value: settings.shader.microColorStrength };
    shader.uniforms.uPlanetMicroRoughnessStrength = { value: settings.shader.microRoughnessStrength };
    shader.uniforms.uPlanetWaterRoughnessBoost = { value: settings.shader.waterRoughnessBoost };
    shader.uniforms.uPlanetWaterSaturationSoftening = { value: settings.shader.waterSaturationSoftening };

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
varying vec3 vPlanetWorldPosition;`,
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
vPlanetWorldPosition = worldPosition.xyz;`,
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
varying vec3 vPlanetWorldPosition;
uniform float uPlanetMicroDetailStart;
uniform float uPlanetMicroDetailEnd;
uniform float uPlanetMicroDetailScale;
uniform float uPlanetMicroColorStrength;
uniform float uPlanetMicroRoughnessStrength;
uniform float uPlanetWaterRoughnessBoost;
uniform float uPlanetWaterSaturationSoftening;

float planetHash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float planetNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float n000 = planetHash(i + vec3(0.0, 0.0, 0.0));
  float n100 = planetHash(i + vec3(1.0, 0.0, 0.0));
  float n010 = planetHash(i + vec3(0.0, 1.0, 0.0));
  float n110 = planetHash(i + vec3(1.0, 1.0, 0.0));
  float n001 = planetHash(i + vec3(0.0, 0.0, 1.0));
  float n101 = planetHash(i + vec3(1.0, 0.0, 1.0));
  float n011 = planetHash(i + vec3(0.0, 1.0, 1.0));
  float n111 = planetHash(i + vec3(1.0, 1.0, 1.0));

  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  float nxy0 = mix(nx00, nx10, f.y);
  float nxy1 = mix(nx01, nx11, f.y);
  return mix(nxy0, nxy1, f.z);
}

float planetWaterMask(vec3 color) {
  float blueLead = color.b - max(color.r, color.g) * 0.82;
  float saturation = color.b - min(color.r, color.g);
  return smoothstep(0.025, 0.18, blueLead) * smoothstep(0.02, 0.22, saturation);
}`,
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
float planetViewDistance = distance(cameraPosition, vPlanetWorldPosition);
float planetCloseFade = 1.0 - smoothstep(uPlanetMicroDetailStart, uPlanetMicroDetailEnd, planetViewDistance);
float planetWater = planetWaterMask(diffuseColor.rgb);
float planetLand = 1.0 - planetWater;
float planetMicro = planetNoise(normalize(vPlanetWorldPosition) * uPlanetMicroDetailScale + vPlanetWorldPosition * 0.35) - 0.5;
diffuseColor.rgb *= 1.0 + planetMicro * uPlanetMicroColorStrength * planetLand * planetCloseFade;
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114))), planetWater * uPlanetWaterSaturationSoftening);`,
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
roughnessFactor = clamp(
  roughnessFactor
    + planetWater * uPlanetWaterRoughnessBoost
    + planetMicro * uPlanetMicroRoughnessStrength * planetLand * planetCloseFade,
  0.42,
  1.0
);`,
      );

    material.userData.shader = shader;
  };

  return material;
}

export function updatePlanetSurfaceMaterial(material, cameraDistance) {
  if (!material?.normalScale) return;

  const { normalScale } = planetGraphicsSettings.surface;
  let scale;

  if (cameraDistance <= normalScale.midDistance) {
    const t = smoothstep(normalScale.nearDistance, normalScale.midDistance, cameraDistance);
    scale = THREE.MathUtils.lerp(normalScale.near, normalScale.mid, t);
  } else {
    const t = smoothstep(normalScale.midDistance, normalScale.farDistance, cameraDistance);
    scale = THREE.MathUtils.lerp(normalScale.mid, normalScale.far, t);
  }

  material.normalScale.set(scale, scale);
}

export function createCloudMaterial({ map, normalMap, opacity, wispy = false }) {
  const settings = planetGraphicsSettings.clouds;
  const profileSettings = getPlanetGraphicsProfileSettings();
  const material = new THREE.MeshStandardMaterial({
    map,
    normalMap,
    normalScale: new Vector2(settings.normalScale, settings.normalScale),
    transparent: true,
    side: DoubleSide,
    opacity,
    depthWrite: false,
    roughness: 1,
    metalness: 0,
  });
  material.userData.wispyCloud = wispy;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uCloudLightPosition = { value: new THREE.Vector3() };
    shader.uniforms.uCloudPlanetPosition = { value: new THREE.Vector3() };
    shader.uniforms.uCloudNightAlpha = { value: wispy ? settings.nightAlpha * 0.75 : settings.nightAlpha };
    shader.uniforms.uCloudDayBoost = { value: wispy ? settings.dayBoost * 0.55 : settings.dayBoost };
    shader.uniforms.uCloudRimBoost = { value: wispy ? settings.rimBoost * 1.35 : settings.rimBoost };
    shader.uniforms.uCloudWispyBreakup = { value: wispy ? profileSettings.clouds.wispyBreakup : 0 };
    shader.uniforms.uCloudCloseFadeStart = { value: wispy ? settings.wispyCloseFadeStart : 0 };
    shader.uniforms.uCloudCloseFadeEnd = { value: wispy ? settings.wispyCloseFadeEnd : 0 };

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
varying vec3 vCloudWorldPosition;
varying vec3 vCloudWorldNormal;`,
      )
      .replace(
        '#include <beginnormal_vertex>',
        `#include <beginnormal_vertex>
vCloudWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`,
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
vCloudWorldPosition = worldPosition.xyz;`,
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
varying vec3 vCloudWorldPosition;
varying vec3 vCloudWorldNormal;
uniform vec3 uCloudLightPosition;
uniform vec3 uCloudPlanetPosition;
uniform float uCloudNightAlpha;
uniform float uCloudDayBoost;
uniform float uCloudRimBoost;
uniform float uCloudWispyBreakup;
uniform float uCloudCloseFadeStart;
uniform float uCloudCloseFadeEnd;

float cloudHash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.17, 0.31, 0.47));
  p *= 19.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float cloudNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float n000 = cloudHash(i + vec3(0.0, 0.0, 0.0));
  float n100 = cloudHash(i + vec3(1.0, 0.0, 0.0));
  float n010 = cloudHash(i + vec3(0.0, 1.0, 0.0));
  float n110 = cloudHash(i + vec3(1.0, 1.0, 0.0));
  float n001 = cloudHash(i + vec3(0.0, 0.0, 1.0));
  float n101 = cloudHash(i + vec3(1.0, 0.0, 1.0));
  float n011 = cloudHash(i + vec3(0.0, 1.0, 1.0));
  float n111 = cloudHash(i + vec3(1.0, 1.0, 1.0));

  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  float nxy0 = mix(nx00, nx10, f.y);
  float nxy1 = mix(nx01, nx11, f.y);
  return mix(nxy0, nxy1, f.z);
}`,
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
vec3 cloudNormal = normalize(vCloudWorldNormal);
vec3 cloudLightDirection = normalize(uCloudLightPosition - vCloudWorldPosition);
vec3 cloudViewDirection = normalize(cameraPosition - vCloudWorldPosition);
float cloudSun = smoothstep(-0.28, 0.62, dot(cloudNormal, cloudLightDirection));
float cloudRim = pow(1.0 - clamp(dot(cloudNormal, cloudViewDirection), 0.0, 1.0), 2.0);
float cloudDistanceFromCenter = length(cameraPosition - uCloudPlanetPosition);
float cloudCloseFade = uCloudCloseFadeEnd > uCloudCloseFadeStart
  ? smoothstep(uCloudCloseFadeStart, uCloudCloseFadeEnd, cloudDistanceFromCenter)
  : 1.0;
float cloudBreakup = cloudNoise(normalize(vCloudWorldPosition - uCloudPlanetPosition) * 5.5 + vCloudWorldPosition * 0.35);
float cloudWispyAlpha = mix(1.0, smoothstep(0.2, 0.92, cloudBreakup), uCloudWispyBreakup);
diffuseColor.rgb *= 0.72 + cloudSun * (0.28 + uCloudDayBoost) + cloudRim * uCloudRimBoost;
diffuseColor.a *= mix(uCloudNightAlpha, 1.0, cloudSun) * cloudCloseFade * cloudWispyAlpha;`,
      );

    material.userData.shader = shader;
  };

  return material;
}

export function updateCloudMaterial(material, lightPosition, planetPosition) {
  const shader = material?.userData?.shader;
  if (!shader) return;
  shader.uniforms.uCloudLightPosition.value.copy(lightPosition);
  shader.uniforms.uCloudPlanetPosition.value.copy(planetPosition);
  if (material.userData.wispyCloud) {
    shader.uniforms.uCloudWispyBreakup.value = getPlanetGraphicsProfileSettings().clouds.wispyBreakup;
  }
}
