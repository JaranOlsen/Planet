//  IMPORT DEPENDENCIES
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

//  IMPORT SCRIPTS
import { createJaranius, createContexts, initialiseLoadingManager, createMindmap } from "./main.js"  //createGutta
import { createGutta } from './gutta.js';

//  IMPORT MATERIALS
import { textMaterial } from './data/materials.js';

//  IMPORT TEXTURES
    // ||Diffuse - All maps can now easily be adjusted/regenerated in Jaranius 16K production developement.psb (use repair layers and clone stamp)
import diffuseTexture16k from "/assets/textures/diffuse16k.jpg"
import diffuseTexture8k from "/assets/textures/diffuse8k.webp"
import diffuseTexture4k from "/assets/textures/diffuse4k.webp"
import diffuseTexture2k from "/assets/textures/diffuse2k.webp"
import diffuseTexture1k from "/assets/textures/diffuse1k.webp"

    // ||Normals - White = high altitude - see https://youtu.be/YJqWHsllczY?t=43 on how to best generate
import normalTexture16k from "/assets/textures/normal16k.jpg"
import normalTexture8k from "/assets/textures/normal8k.webp"
import normalTexture4k from "/assets/textures/normal4k.webp"
import normalTexture2k from "/assets/textures/normal2k.webp"
import normalTexture1k from "/assets/textures/normal1k.webp"

    // ||Roughness - Green (white) = high roughness (green channel - see documentation). 
import roughnessTexture16k from "/assets/textures/roughness16k.jpg"
import roughnessTexture8k from "/assets/textures/roughness8k.webp"
import roughnessTexture4k from "/assets/textures/roughness4k.webp"
import roughnessTexture2k from "/assets/textures/roughness2k.webp"
import roughnessTexture1k from "/assets/textures/roughness1k.webp"

    // ||Clouds
import cloudsTexture8k from "/assets/textures/clouds8k.webp"
import cloudsNormal8k from "/assets/textures/clouds8kNormal.webp"
import cloudsTexture4k from "/assets/textures/clouds4k.webp"
import cloudsNormal4k from "/assets/textures/clouds4kNormal.webp"
import cloudsTexture1k from "/assets/textures/clouds1k.webp"
import cloudsNormal1k from "/assets/textures/clouds1kNormal.webp"



export function creation(version, postLoadingManager, guttaState, scene) {
    createTitle(scene)
    if (version == 1){ //FULL VERSION
        initialiseLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture16k, normalTexture16k, roughnessTexture16k, cloudsTexture8k, cloudsNormal8k, version)
        createContexts(version)
        createMindmap()
        createGutta(4000, 200, version, guttaState, scene)
    } 
    if (version == 2){ //LIGHT VERSION
        initialiseLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture2k, normalTexture1k, roughnessTexture1k, cloudsTexture1k, cloudsNormal1k, version)
        createContexts(version)
        createMindmap()
    } 
    if (version == 3){ //DEVELOPER VERSION
        initialiseLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture4k, normalTexture1k, roughnessTexture1k, cloudsTexture1k, cloudsNormal1k, version)
        createContexts(version)
        createMindmap()
        createGutta(100, 10, version, guttaState, scene)
    } 
}

function createTitle(scene) {
    const tagFont = "/Planet/assets/fonts/SourceSans3_Regular.json"

        const loader = new FontLoader();
        loader.load(tagFont, function (font) {
            const titleGeometry = new THREE.ShapeGeometry(font.generateShapes('Proxima Transcendāra', 1));
            titleGeometry.computeBoundingBox();
            titleGeometry.translate(-0.5 * (titleGeometry.boundingBox.max.x - titleGeometry.boundingBox.min.x), (titleGeometry.boundingBox.max.y - titleGeometry.boundingBox.min.y), 0);

            const titleMaterial = new THREE.MeshBasicMaterial({ 
                color: 0xffffff,
                transparent: true,
                opacity: 0.5
            });
            
            const title = new THREE.Mesh(titleGeometry, titleMaterial);
            title.name = 'title';
            //title.position.set(0, -2, 400);
            title.position.set(0, 20, 400);
            title.scale.set(4, 4, 4)
            //const lookAtPoint = new THREE.Vector3(0, 300, 500)
            const lookAtPoint = new THREE.Vector3(0, 0, 500)
            title.lookAt(lookAtPoint)
            scene.add(title);
        })
}