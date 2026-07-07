import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { planetGraphicsSettings } from './planetGraphicsSettings.js';

function getPixelRatio() {
  return Math.min(window.devicePixelRatio || 1, planetGraphicsSettings.renderer.maxPixelRatio);
}

export function createPostProcessingPipeline({ renderer, scene, camera }) {
  if (!planetGraphicsSettings.postProcessing.enabled) {
    return {
      enabled: false,
      resize() {},
      render() {
        renderer.render(scene, camera);
      },
    };
  }

  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(getPixelRatio());

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  let smaaPass = null;
  if (planetGraphicsSettings.postProcessing.smaa) {
    const drawingBufferSize = new THREE.Vector2();
    renderer.getDrawingBufferSize(drawingBufferSize);
    smaaPass = new SMAAPass(drawingBufferSize.x, drawingBufferSize.y);
    composer.addPass(smaaPass);
  }

  composer.addPass(new OutputPass());

  return {
    enabled: true,
    composer,
    resize(width, height) {
      const pixelRatio = getPixelRatio();
      composer.setPixelRatio(pixelRatio);
      composer.setSize(width, height);
      smaaPass?.setSize?.(width * pixelRatio, height * pixelRatio);
    },
    render() {
      composer.render();
    },
  };
}
