import * as THREE from 'three';

export function setupLighting(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.01);
  scene.add(ambient);

  const spotlight = new THREE.SpotLight(0xefebd8, 0);
  spotlight.penumbra = 0.8;
  spotlight.angle = Math.PI / 4;
  spotlight.decay = 0.5;
  scene.add(spotlight);

  const targetIntensities = {
    spotlight: spotlight.intensity,
    ambient: ambient.intensity,
  };

  let lightTransitionStart = null;
  let lightTransitionDuration = 5;

  function startTransition(clock) {
    lightTransitionStart = clock.getElapsedTime();
  }

  function queueSpotlightIntensity(intensity, clock) {
    targetIntensities.spotlight = intensity;
    startTransition(clock);
  }

  function queueAmbientIntensity(intensity, clock) {
    targetIntensities.ambient = intensity;
    startTransition(clock);
  }

  function updateLightIntensity(clock) {
    if (lightTransitionStart === null) {
      return;
    }

    const elapsed = clock.getElapsedTime() - lightTransitionStart;

    if (elapsed >= lightTransitionDuration) {
      spotlight.intensity = targetIntensities.spotlight;
      ambient.intensity = targetIntensities.ambient;
      lightTransitionStart = null;
    } else {
      const t = elapsed / lightTransitionDuration;
      spotlight.intensity = THREE.MathUtils.lerp(spotlight.intensity, targetIntensities.spotlight, t);
      ambient.intensity = THREE.MathUtils.lerp(ambient.intensity, targetIntensities.ambient, t);
    }
  }

  function setLightTransitionDuration(seconds) {
    lightTransitionDuration = seconds;
  }

  return {
    ambient,
    spotlight,
    updateLightIntensity,
    queueSpotlightIntensity,
    queueAmbientIntensity,
    setLightTransitionDuration,
  };
}
