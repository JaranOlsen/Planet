//  IMPORT SCRIPTS
import { createJaranius, createContexts, initializeLoadingManager, createMindmap } from "./main.js"  //createGutta
import { createGutta } from './gutta.js';

//  IMPORT TEXTURES
    // ||Diffuse - 
import diffuseTexture16k from "../img/textures/diffuse16kTest2.jpg"
import diffuseTexture8k from "../img/textures/diffuse8kNew.webp"
import diffuseTexture4k from "../img/textures/diffuse4k.webp"
import diffuseTexture2k from "../img/textures/diffuse2k.webp"

    // ||Normals - White = high altitude - see https://www.youtube.com/watch?v=YJqWHsllczY&t=1s on how to best generate
import normalTexture16k from "../img/textures/normal16kTest.jpg"
import normalTexture8k from "../img/textures/normal8k.webp"
import normalTexture2k from "../img/textures/normal2k.webp"
import normalTexture1k from "../img/textures/normal1k.webp"

    // ||Roughness - Green (white) = high roughness (green channel - see documentation). 
import roughnessTexture16k from "../img/textures/roughness16kTest.jpg"
import roughnessTexture8k from "../img/textures/roughness8k.webp"
import roughnessTexture2k from "../img/textures/roughness2k.webp"
import roughnessTexture1k from "../img/textures/roughness1k.webp"

    // ||Clouds
import cloudsTexture4k from "../img/textures/clouds4k.webp"
import cloudsTexture1k from "../img/textures/clouds1k.webp"


export function creation(version, postLoadingManager, guttaState, scene, guttaHelperCenter) {
    if (version == 1){ //FULL VERSION
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture4k, normalTexture2k, roughnessTexture2k, cloudsTexture4k)
        createContexts(version)
        createMindmap()
        createGutta(400, 25, version, guttaState, scene, guttaHelperCenter)
    } 
    if (version == 2){ //LIGHT VERSION
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture2k, normalTexture1k, roughnessTexture1k, cloudsTexture1k)
        createContexts(version)
        createMindmap()
    } 
    if (version == 3){ //DEVELOPER VERSION
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture8k, normalTexture8k, roughnessTexture8k, cloudsTexture4k)
        createContexts(version)
        createMindmap()
        createGutta(400, 25, version, guttaState, scene, guttaHelperCenter)
    } 
    if (version == 4){ //VR VERSION
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture8k, normalTexture8k, roughnessTexture8k, cloudsTexture4k)
        createContexts(version)
        createMindmap()
        //createGutta(200, 10, version, guttaState, scene, guttaHelperCenter)
    } 
}