import { MeshBasicMaterial, MeshStandardMaterial, DoubleSide, LoadingManager, TextureLoader, Vector2 } from "three";
import { palette } from "./data/palette";

//IMPORT TEXTURES
import nugget_diffuse from "../img/textures/nugget_diffuse.jpg"
import nugget_ao from "../img/textures/nugget_ao.jpg"
import nugget_normal from "../img/textures/nugget_normal.jpg"
import nugget_displacement from "../img/textures/nugget_displacement.png"
import nugget_roughness from "../img/textures/nugget_roughness.jpg"

const materialLoadingManager = new LoadingManager();
const textureLoader3 = new TextureLoader(materialLoadingManager)

//Box materials
//const boxMaterial0 = new MeshBasicMaterial({
const boxMaterial0 = new MeshStandardMaterial({
        color: palette[0],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[0],
        emissiveIntensity: 0.5,
    })
    
const boxMaterial10 = new MeshStandardMaterial({
        color: palette[10],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[10],
        emissiveIntensity: 0.1,
    })
const boxMaterial11 = new MeshStandardMaterial({
        color: palette[11],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[11],
        emissiveIntensity: 0.1,
    })
const boxMaterial12 = new MeshStandardMaterial({
        color: palette[12],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[12],
        emissiveIntensity: 0.1,
    })
const boxMaterial13 = new MeshStandardMaterial({
        color: palette[13],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[13],
        emissiveIntensity: 0.1,
    })
    
const boxMaterial20 = new MeshStandardMaterial({
        color: palette[20],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[20],
        emissiveIntensity: 0.1,
    })
const boxMaterial21 = new MeshStandardMaterial({
        color: palette[21],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[21],
        emissiveIntensity: 0.1,
    })
const boxMaterial22 = new MeshStandardMaterial({
        color: palette[22],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[22],
        emissiveIntensity: 0.1,
    })

const boxMaterial30 = new MeshStandardMaterial({
        color: palette[30],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[30],
        emissiveIntensity: 0.1,
    })
const boxMaterial31 = new MeshStandardMaterial({
        color: palette[31],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[31],
        emissiveIntensity: 0.1,
    })
const boxMaterial32 = new MeshStandardMaterial({
        color: palette[32],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[32],
        emissiveIntensity: 0.1,
    })
const boxMaterial33 = new MeshStandardMaterial({
        color: palette[33],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[33],
        emissiveIntensity: 0.1,
    })

const boxMaterial40 = new MeshStandardMaterial({
        color: palette[40],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[40],
        emissiveIntensity: 0.1,
    })
const boxMaterial41 = new MeshStandardMaterial({
        color: palette[41],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[41],
        emissiveIntensity: 0.1,
    })
const boxMaterial42 = new MeshStandardMaterial({
        color: palette[42],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[42],
        emissiveIntensity: 0.1,
    })
const boxMaterial43 = new MeshStandardMaterial({
        color: palette[43],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[43],
        emissiveIntensity: 0.1,
    })
const boxMaterial44 = new MeshStandardMaterial({
        color: palette[44],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[44],
        emissiveIntensity: 0.1,
    })
const boxMaterial45 = new MeshStandardMaterial({
        color: palette[45],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[45],
        emissiveIntensity: 0.1,
    })
const boxMaterial46 = new MeshStandardMaterial({
        color: palette[46],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[46],
        emissiveIntensity: 0.1,
    })
const boxMaterial47 = new MeshStandardMaterial({
        color: palette[47],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[47],
        emissiveIntensity: 0.1,
    })
const boxMaterial48 = new MeshStandardMaterial({
        color: palette[48],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[48],
        emissiveIntensity: 0.1,
    })
const boxMaterial49 = new MeshStandardMaterial({
        color: palette[49],
        transparent: true,
        opacity: 0.65, 
        side: DoubleSide,
        emissive: palette[49],
        emissiveIntensity: 0.1,
    })

//Pin materials
const pinMaterial0 = new MeshBasicMaterial({
//const pinMaterial0 = new MeshStandardMaterial({
    color: palette[0],
    emissive: palette[0],
    emissiveIntensity: 0.2,
})
const pinMaterial1 = new MeshStandardMaterial({
    color: palette[1],
    emissive: palette[1],
    emissiveIntensity: 0.2,
})
const pinMaterial2 = new MeshStandardMaterial({
    map: textureLoader3.load(nugget_diffuse),
    aoMap: textureLoader3.load(nugget_ao),
    aoMapIntensity: 1,
    normalMap: textureLoader3.load(nugget_normal),
    normalScale: new Vector2(4, 4),
    displacementMap: textureLoader3.load(nugget_displacement),
    displacementScale: 0.005,
    roughnessMap: textureLoader3.load(nugget_roughness),
    roughness: 0.3,
    metalness: 0.7,
})

const pinMaterial10 = new MeshStandardMaterial({
    color: palette[10],
    emissive: palette[10],
    emissiveIntensity: 0.2,
})
const pinMaterial11 = new MeshStandardMaterial({
    color: palette[11],
    emissive: palette[11],
    emissiveIntensity: 0.2,
})
const pinMaterial12 = new MeshStandardMaterial({
    color: palette[12],
    emissive: palette[12],
    emissiveIntensity: 0.2,
})
const pinMaterial13 = new MeshStandardMaterial({
    color: palette[13],
    emissive: palette[13],
    emissiveIntensity: 0.2,
})

const pinMaterial20 = new MeshStandardMaterial({
    color: palette[20],
    emissive: palette[20],
    emissiveIntensity: 0.2,
})
const pinMaterial21 = new MeshStandardMaterial({
    color: palette[21],
    emissive: palette[21],
    emissiveIntensity: 0.2,
})
const pinMaterial22 = new MeshStandardMaterial({
    color: palette[22],
    emissive: palette[22],
    emissiveIntensity: 0.2,
})

const pinMaterial30 = new MeshStandardMaterial({
    color: palette[30],
    emissive: palette[30],
    emissiveIntensity: 0.2,
})
const pinMaterial31 = new MeshStandardMaterial({
    color: palette[31],
    emissive: palette[31],
    emissiveIntensity: 0.2,
})
const pinMaterial32 = new MeshStandardMaterial({
    color: palette[32],
    emissive: palette[32],
    emissiveIntensity: 0.2,
})
const pinMaterial33 = new MeshStandardMaterial({
    color: palette[33],
    emissive: palette[33],
    emissiveIntensity: 0.2,
})

const pinMaterial40 = new MeshStandardMaterial({
    color: palette[40],
    emissive: palette[40],
    emissiveIntensity: 0.2,
})
const pinMaterial41 = new MeshStandardMaterial({
    color: palette[41],
    emissive: palette[41],
    emissiveIntensity: 0.2,
})
const pinMaterial42 = new MeshStandardMaterial({
    color: palette[42],
    emissive: palette[42],
    emissiveIntensity: 0.2,
})
const pinMaterial43 = new MeshStandardMaterial({
    color: palette[43],
    emissive: palette[43],
    emissiveIntensity: 0.2,
})
const pinMaterial44 = new MeshStandardMaterial({
    color: palette[44],
    emissive: palette[44],
    emissiveIntensity: 0.2,
})
const pinMaterial45 = new MeshStandardMaterial({
    color: palette[45],
    emissive: palette[45],
    emissiveIntensity: 0.2,
})
const pinMaterial46 = new MeshStandardMaterial({
    color: palette[46],
    emissive: palette[46],
    emissiveIntensity: 0.2,
})
const pinMaterial47 = new MeshStandardMaterial({
    color: palette[47],
    emissive: palette[47],
    emissiveIntensity: 0.2,
})
const pinMaterial48 = new MeshStandardMaterial({
    color: palette[48],
    emissive: palette[48],
    emissiveIntensity: 0.2,
})
const pinMaterial49 = new MeshStandardMaterial({
    color: palette[49],
    emissive: palette[49],
    emissiveIntensity: 0.2,
})
//Pin Wireframe materials
const pinWireframeMaterial0 = new MeshBasicMaterial({
//const pinWireframeMaterial0 = new MeshStandardMaterial({
    color: palette[0],
    emissive: palette[0],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial1 = new MeshStandardMaterial({
    color: palette[1],
    emissive: palette[1],
    emissiveIntensity: 0.2,
    wireframe: true
})

const pinWireframeMaterial10 = new MeshStandardMaterial({
    color: palette[10],
    emissive: palette[10],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial11 = new MeshStandardMaterial({
    color: palette[11],
    emissive: palette[11],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial12 = new MeshStandardMaterial({
    color: palette[12],
    emissive: palette[12],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial13 = new MeshStandardMaterial({
    color: palette[13],
    emissive: palette[13],
    emissiveIntensity: 0.2,
    wireframe: true
})

const pinWireframeMaterial20 = new MeshStandardMaterial({
    color: palette[20],
    emissive: palette[20],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial21 = new MeshStandardMaterial({
    color: palette[21],
    emissive: palette[21],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial22 = new MeshStandardMaterial({
    color: palette[22],
    emissive: palette[22],
    emissiveIntensity: 0.2,
    wireframe: true
})

const pinWireframeMaterial30 = new MeshStandardMaterial({
    color: palette[30],
    emissive: palette[30],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial31 = new MeshStandardMaterial({
    color: palette[31],
    emissive: palette[31],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial32 = new MeshStandardMaterial({
    color: palette[32],
    emissive: palette[32],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial33 = new MeshStandardMaterial({
    color: palette[33],
    emissive: palette[33],
    emissiveIntensity: 0.2,
    wireframe: true
})

const pinWireframeMaterial40 = new MeshStandardMaterial({
    color: palette[40],
    emissive: palette[40],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial41 = new MeshStandardMaterial({
    color: palette[41],
    emissive: palette[41],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial42 = new MeshStandardMaterial({
    color: palette[42],
    emissive: palette[42],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial43 = new MeshStandardMaterial({
    color: palette[43],
    emissive: palette[43],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial44 = new MeshStandardMaterial({
    color: palette[44],
    emissive: palette[44],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial45 = new MeshStandardMaterial({
    color: palette[45],
    emissive: palette[45],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial46 = new MeshStandardMaterial({
    color: palette[46],
    emissive: palette[46],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial47 = new MeshStandardMaterial({
    color: palette[47],
    emissive: palette[47],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial48 = new MeshStandardMaterial({
    color: palette[48],
    emissive: palette[48],
    emissiveIntensity: 0.2,
    wireframe: true
})
const pinWireframeMaterial49 = new MeshStandardMaterial({
    color: palette[49],
    emissive: palette[49],
    emissiveIntensity: 0.2,
    wireframe: true
})

//Text Materials
export const textMaterial = new MeshBasicMaterial( {
    color: 0x000000,
    transparent: false,
    //opacity: 0.8,
    side: DoubleSide
} );

//Connection Material
export const connectionMaterial = new MeshStandardMaterial({
    color: 0xffffaa,
    transparent: true,
    opacity: 0.6,
    emissive: 0xffffff,
    emissiveIntensity: 0.1,
});

export const boxMaterials = [
    boxMaterial0, , , , , , , , , , 
    boxMaterial10, boxMaterial11, boxMaterial12, boxMaterial13, , , , , , , 
    boxMaterial20, boxMaterial21, boxMaterial22, , , , , , , , 
    boxMaterial30, boxMaterial31, boxMaterial32, boxMaterial33, , , , , , , 
    boxMaterial40, boxMaterial41, boxMaterial42, boxMaterial43, boxMaterial44, boxMaterial45, boxMaterial46, boxMaterial47, boxMaterial48, boxMaterial49, 
]
export const pinMaterials = [
    pinMaterial0, pinMaterial1, pinMaterial2, , , , , , , , 
    pinMaterial10, pinMaterial11, pinMaterial12, pinMaterial13, , , , , , , 
    pinMaterial20, pinMaterial21, pinMaterial22, , , , , , , , 
    pinMaterial30, pinMaterial31, pinMaterial32, pinMaterial33, , , , , , , 
    pinMaterial40, pinMaterial41, pinMaterial42, pinMaterial43, pinMaterial44, pinMaterial45, pinMaterial46, pinMaterial47, pinMaterial48, pinMaterial49, 
]
export const pinWireframeMaterials = [
    pinWireframeMaterial0,pinWireframeMaterial1, , , , , , , , , 
    pinWireframeMaterial10, pinWireframeMaterial11, pinWireframeMaterial12, pinWireframeMaterial13, , , , , , ,
    pinWireframeMaterial20, pinWireframeMaterial21, pinWireframeMaterial22, , , , , , , ,
    pinWireframeMaterial30, pinWireframeMaterial31, pinWireframeMaterial32, pinWireframeMaterial33, , , , , , , 
    pinWireframeMaterial40, pinWireframeMaterial41, pinWireframeMaterial42, pinWireframeMaterial43, pinWireframeMaterial44, pinWireframeMaterial45, pinWireframeMaterial46, pinWireframeMaterial47, pinWireframeMaterial48, pinWireframeMaterial49, 
]