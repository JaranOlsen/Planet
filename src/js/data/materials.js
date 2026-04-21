import * as THREE from 'three';
import { DoubleSide } from 'three';
import { palette } from './palette.js';

// Import textures
import nugget_diffuse from "/assets/textures/nugget_diffuse.jpg";
import nugget_ao from "/assets/textures/nugget_ao.jpg";
import nugget_normal from "/assets/textures/nugget_normal.jpg";
import nugget_displacement from "/assets/textures/nugget_displacement.png";
import nugget_roughness from "/assets/textures/nugget_roughness.jpg";

const materialLoadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(materialLoadingManager);

//Text Materials
export const textMaterial = new THREE.MeshBasicMaterial( {
    color: 0x000000,
    transparent: false,
    //opacity: 0.8,
    side: DoubleSide
} );

//Connection Material
export const connectionMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffaa,
    transparent: true,
    opacity: 0.6,
    emissive: 0xffffff,
    emissiveIntensity: 0.1,
});

// Prepare the materials for the boxes and pins
export const boxMaterials = [];
export const pinMaterials = [];
export const pinWireframeMaterials = [];

for (const color of palette) {
    // For boxes
    const boxMaterial = new THREE.MeshStandardMaterial({ 
        color: color, 
        emissive: color, 
        emissiveIntensity: 0.1,
        transparent: true,
        opacity: 0.85,
        side: DoubleSide
    });
    boxMaterials.push(boxMaterial);

    // For pins
    const pinMaterial = new THREE.MeshStandardMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 0.2,
    });
    pinMaterials.push(pinMaterial);

    // For pin wireframe
    const pinWireframeMaterial = new THREE.MeshStandardMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 0.2,
        wireframe: true,
    });
    pinWireframeMaterials.push(pinWireframeMaterial);
}

// Set unique materials
boxMaterials[0].emissiveIntensity = 0.5;
pinMaterials[0].emissiveIntensity = 0.8;
pinWireframeMaterials[0].emissiveIntensity = 0.8;

boxMaterials[1].emissiveIntensity = 0.5;

// Load textures and apply them to nuggets
pinMaterials[2].map = textureLoader.load(nugget_diffuse);
pinMaterials[2].aoMap = textureLoader.load(nugget_ao);
pinMaterials[2].aoMapIntensity = 1;
pinMaterials[2].normalMap = textureLoader.load(nugget_normal);
pinMaterials[2].normalScale = new THREE.Vector2(4, 4)
pinMaterials[2].displacementMap = textureLoader.load(nugget_displacement);
pinMaterials[2].displacementScale = 0.005;
pinMaterials[2].roughnessMap = textureLoader.load(nugget_roughness);
pinMaterials[2].roughness = 0.3;
pinMaterials[2].metalness = 0.7;

boxMaterials[3].opacity = 0.7;
boxMaterials[4].opacity = 0.7;
boxMaterials[5].opacity = 0.7;
boxMaterials[6].opacity = 0.5;
boxMaterials[7].opacity = 0.5;
boxMaterials[8].opacity = 0.5;