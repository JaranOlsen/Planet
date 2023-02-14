//  IMPORT SCRIPTS
import { createJaranius, createGutta, initializeLoadingManager } from "./main.js"

//  IMPORT TEXTURES
    // ||Diffuse - 
import diffuseTexture8k from "../img/textures/diffuse8k.webp"
import diffuseTexture4k from "../img/textures/diffuse4k.webp"
import diffuseTexture2k from "../img/textures/diffuse2k.webp"

    // ||Normals - White = high altitude - see https://www.youtube.com/watch?v=YJqWHsllczY&t=1s on how to best generate
import normalTexture8k from "../img/textures/normal8k.webp"
import normalTexture2k from "../img/textures/normal2k.webp"
import normalTexture1k from "../img/textures/normal1k.webp"

    // ||Roughness - Green (white) = high roughness (green channel - see documentation). 
import roughnessTexture8k from "../img/textures/roughness8k.webp"
import roughnessTexture2k from "../img/textures/roughness2k.webp"
import roughnessTexture1k from "../img/textures/roughness1k.webp"

    // ||Clouds
import cloudsTexture4k from "../img/textures/clouds4k.webp"
import cloudsTexture1k from "../img/textures/clouds1k.webp"


export function creation(version, postLoadingManager) {
    if (version == 1){
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture4k, normalTexture2k, roughnessTexture2k, cloudsTexture4k)
        createGutta(300, 15)
    } 
    if (version == 2){
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture2k, normalTexture1k, roughnessTexture1k, cloudsTexture1k)
    } 
    if (version == 3){
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture8k, normalTexture8k, roughnessTexture8k, cloudsTexture4k)
        createGutta(500, 30)
    } 
}