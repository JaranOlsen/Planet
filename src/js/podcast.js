import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//  IMPORT SHADERS
import fieldVertex from '../shaders/fieldVertex.glsl'
import fieldFragment from '../shaders/fieldFragment.glsl'

export function createField(model, color, scene) {

    const loader = new GLTFLoader();

    const material = new THREE.ShaderMaterial({
        vertexShader: fieldVertex,
        fragmentShader: fieldFragment,
        uniforms: {
            color: { value: color }
        },
        transparent: true, 
        blending: THREE.NormalBlending,
    });

    loader.load(model, function (gltf) {
    gltf.scene.traverse(function (child) {
        if (child.isMesh) {
        child.material = material;
        }
    });

    scene.add(gltf.scene);
    gltf.scene.renderOrder = 5
    });
}






