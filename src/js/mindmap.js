//  IMPORT DEPENDENCIES
import * as THREE from 'three';
import { DoubleSide, Object3D } from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

//  IMPORT SCRIPTS
import { convertLatLngtoCartesian } from './mathScripts.js'

//  IMPORT DATA
import { contexts } from './core/datasets.js'

//  IMPORT TEXTURES
import dash from '/assets/textures/dash.webp'
import arrow from '/assets/textures/arrow6.webp'

//  IMPORT MATERIALS
import { textMaterial, connectionMaterial, boxMaterials, pinMaterials, pinWireframeMaterials } from './data/materials.js';
import { planetNuggetData } from './data/planetNuggetData.js';
import { enneagramTagData } from './data/enneagramData.js';

//  IMPORT SHADERS
import arrowConnectionVertexShader from '../shaders/arrowConnectionVertex.glsl'
import arrowConnectionFragmentShader from '../shaders/arrowConnectionFragment.glsl'

const tagFont = "/Planet/assets/fonts/SourceSans3_Regular.json"

const textureLoader = new THREE.TextureLoader()

export const intersectObjectsArray = []

export const hoveredPins = []

let cachedTagFont = null;
let tagFontPromise = null;

function loadTagFont() {
  if (cachedTagFont) return Promise.resolve(cachedTagFont);
  if (!tagFontPromise) {
    const loader = new FontLoader();
    tagFontPromise = new Promise((resolve, reject) => {
      loader.load(tagFont, (font) => {
        cachedTagFont = font;
        resolve(font);
      }, undefined, reject);
    });
  }
  return tagFontPromise;
}

function latAfterNorthArc(latDeg, arcLen, R) {
  return THREE.MathUtils.clamp(latDeg + THREE.MathUtils.radToDeg(arcLen / Math.max(R, 1e-6)), -90, 90);
}

function orientedGroupAt(bottomVec, topVec) {
  const mid = bottomVec.clone().add(topVec).multiplyScalar(0.5);
  const z = mid.clone().normalize();
  const y = topVec.clone().sub(bottomVec).normalize();
  const x = new THREE.Vector3().crossVectors(y, z).normalize();
  y.copy(new THREE.Vector3().crossVectors(z, x)).normalize();

  const m = new THREE.Matrix4().makeBasis(x, y, z);
  const g = new THREE.Group();
  g.position.copy(mid);
  g.quaternion.setFromRotationMatrix(m);
  return g;
}

function calculateTextWidth(font, txt, size) {
  const shapes = font.generateShapes(txt, size);
  const geometry = new THREE.ShapeGeometry(shapes);
  geometry.computeBoundingBox();
  return geometry.boundingBox.max.x - geometry.boundingBox.min.x;
}

function centerText(font, txt, size) {
  const lines = txt.split('\n');
  const lineWidths = lines.map((line) => calculateTextWidth(font, line, size));
  const longest = Math.max(...lineWidths);
  let spaceWidth = calculateTextWidth(font, ' ', size);
  if (!isFinite(spaceWidth)) spaceWidth = calculateTextWidth(font, 'M', size);
  const spaceFactor = 1.38;
  return lines
    .map((line, i) => ' '.repeat(Math.floor((longest - lineWidths[i]) / spaceWidth * spaceFactor)) + line)
    .join('\n');
}

function instantiateTag(font, item, radius, context, globalIndex, destination) {
  const dataSourceRef = contexts[context].tagData;
  const lat = Number(item.lat);
  const lng = Number(item.lng);
  const color = item.color;
  const sizeScalar = item.size / 100000;

  const text = centerText(font, item.text, sizeScalar);

  const txtGeo = new THREE.ShapeGeometry(font.generateShapes(text, 100));
  txtGeo.computeBoundingBox();
  txtGeo.translate(
    -0.5 * (txtGeo.boundingBox.max.x - txtGeo.boundingBox.min.x),
    (txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y),
    0
  );
  const tag = new THREE.Mesh(txtGeo, textMaterial);
  tag.scale.set(sizeScalar, sizeScalar, sizeScalar);
  tag.userData = tag.userData || {};
  tag.userData.baseScale = sizeScalar;
  tag.userData.textHeightFactor = txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y;

  let textBottom = convertLatLngtoCartesian(lat, lng, radius + 0.061);
  if (dataSourceRef === enneagramTagData) {
    const t = (lat * Math.PI) / 180;
    const radiusModifier = Math.cos(t);
    const scaleFactor = 3;
    const constrictFactor = 2.4;
    textBottom = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor + 0.062);
  }
  const textBottomVec = new THREE.Vector3(textBottom.x, textBottom.y, textBottom.z);
  const Rtag = textBottomVec.length();
  const textHeightWorld = (txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y) * sizeScalar;
  const halfText = 0.5 * textHeightWorld;

  const latTopText = latAfterNorthArc(lat, textHeightWorld, Rtag);
  const textTopDir = convertLatLngtoCartesian(latTopText, lng, Rtag);
  const textTopVec = new THREE.Vector3(textTopDir.x, textTopDir.y, textTopDir.z);

  const tagGroup = orientedGroupAt(textBottomVec, textTopVec);
  tag.position.set(0, -halfText, 0);

  const xPadding = 200;
  const yPadding = 0;
  const roundingFactor = sizeScalar * 125;
  const width = (Math.abs(txtGeo.boundingBox.min.x) + Math.abs(txtGeo.boundingBox.max.x) + xPadding) * sizeScalar;
  const height = (Math.abs(txtGeo.boundingBox.min.y) + Math.abs(txtGeo.boundingBox.max.y) + yPadding) * sizeScalar;

  const shape = new THREE.Shape()
    .moveTo(0, roundingFactor)
    .lineTo(0, height - roundingFactor)
    .quadraticCurveTo(0, height, roundingFactor, height)
    .lineTo(width - roundingFactor, height)
    .quadraticCurveTo(width, height, width, height - roundingFactor)
    .lineTo(width, roundingFactor)
    .quadraticCurveTo(width, 0, width - roundingFactor, 0)
    .lineTo(roundingFactor, 0)
    .quadraticCurveTo(0, 0, 0, roundingFactor);

  const boxGeo = new THREE.ShapeGeometry(shape);
  const uv = boxGeo.attributes.uv;
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < uv.count; i++) {
    const u = uv.getX(i);
    const v = uv.getY(i);
    min = Math.min(min, u, v);
    max = Math.max(max, u, v);
  }
  for (let i = 0; i < uv.count; i++) {
    const u = uv.getX(i);
    const v = uv.getY(i);
    uv.setXY(i, THREE.MathUtils.mapLinear(u, min, max, 0, 1), THREE.MathUtils.mapLinear(v, min, max, 0, 1));
  }
  boxGeo.computeBoundingBox();
  boxGeo.translate(
    -0.5 * (boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x),
    0,
    0
  );

  const box = new THREE.Mesh(boxGeo, boxMaterials[color]);
  box.castShadow = true;
  box.userData = box.userData || {};
  box.userData.baseScale = 1;
  box.userData.heightFactor = height;

  let boxBottom = convertLatLngtoCartesian(lat, lng, radius + 0.06);
  if (dataSourceRef === enneagramTagData) {
    const t = (lat * Math.PI) / 180;
    const radiusModifier = Math.cos(t);
    const scaleFactor = 3;
    const constrictFactor = 2.4;
    boxBottom = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor + 0.06);
  }
  const boxBottomVec = new THREE.Vector3(boxBottom.x, boxBottom.y, boxBottom.z);
  const Rbox = boxBottomVec.length();
  const latTopBox = latAfterNorthArc(lat, height, Rbox);
  const boxTopDir = convertLatLngtoCartesian(latTopBox, lng, Rbox);
  const boxTopVec = new THREE.Vector3(boxTopDir.x, boxTopDir.y, boxTopDir.z);

  const boxGroup = orientedGroupAt(boxBottomVec, boxTopVec);
  const halfBox = 0.5 * height;
  box.position.set(0, -halfBox, 0);

  box.renderOrder = 10;
  tag.renderOrder = 11;

  box.source = dataSourceRef;
  tag.source = dataSourceRef;
  box.context = context;
  tag.context = context;
  box.index = globalIndex;
  tag.index = globalIndex;

  tagGroup.add(tag);
  boxGroup.add(box);

  tag.userData.group = tagGroup;
  box.userData.group = boxGroup;

  destination.add(boxGroup);
  destination.add(tagGroup);

  contexts[context].boxes.push(box);
  contexts[context].tags.push(tag);
}

function instantiatePin(item, radius, context, globalIndex, destination) {
  const dataSourceRef = contexts[context].tagData;
  const lat = Number(item.lat);
  const lng = Number(item.lng);
  const color = item.color;
  const size = item.size;
  const slides = item.slides;

  const segments = slides ? 10 : 6;
  const material = slides ? pinMaterials[color] : pinWireframeMaterials[color];

  const pin = new THREE.Mesh(new THREE.SphereGeometry(size / 1333, segments, segments), material);
  pin.userData = pin.userData || {};
  pin.userData.baseScale = pin.scale.x;
  pin.source = dataSourceRef;
  pin.context = context;
  pin.index = globalIndex;
  pin.originalSize = size;

  let pos = convertLatLngtoCartesian(lat, lng, radius + 0.01);
  if (dataSourceRef === enneagramTagData) {
    const t = (lat * Math.PI) / 180;
    const radiusModifier = Math.cos(t);
    const scaleFactor = 3;
    const constrictFactor = 2.4;
    pos = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor);
  }

  pin.position.set(pos.x, pos.y, pos.z);
  pin.castShadow = true;

  destination.add(pin);
  intersectObjectsArray.push(pin);
  contexts[context].pins.push(pin);
}

export function createTags(dataSource, destination, radius, context, indexMod) {
  const fontPromise = loadTagFont().then((font) => {
    dataSource.forEach((item, index) => {
      const globalIndex = index + indexMod;
      instantiateTag(font, item, radius, context, globalIndex, destination);
    });
  });

  dataSource.forEach((item, index) => {
    const globalIndex = index + indexMod;
    instantiatePin(item, radius, context, globalIndex, destination);
  });

  return fontPromise;
}

function updatePinTransform(pin) {
  if (!pin || !pin.source) return;
  const contextIndex = pin.context;
  const data = pin.source[pin.index];
  if (!data) return;
  const radius = contexts[contextIndex].radius;
  const lat = Number(data.lat);
  const lng = Number(data.lng);
  let pos = convertLatLngtoCartesian(lat, lng, radius + 0.01);
  if (pin.source === enneagramTagData) {
    const t = (lat * Math.PI) / 180;
    const radiusModifier = Math.cos(t);
    const scaleFactor = 3;
    const constrictFactor = 2.4;
    pos = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor);
  }
  pin.position.set(pos.x, pos.y, pos.z);
}

function updateBoxTransform(box) {
  if (!box || !box.source) return;
  const contextIndex = box.context;
  const data = box.source[box.index];
  if (!data) return;
  const radius = contexts[contextIndex].radius;
  const lat = Number(data.lat);
  const lng = Number(data.lng);
  let boxBottom = convertLatLngtoCartesian(lat, lng, radius + 0.06);
  if (box.source === enneagramTagData) {
    const t = (lat * Math.PI) / 180;
    const radiusModifier = Math.cos(t);
    const scaleFactor = 3;
    const constrictFactor = 2.4;
    boxBottom = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor + 0.06);
  }
  const boxBottomVec = new THREE.Vector3(boxBottom.x, boxBottom.y, boxBottom.z);
  const Rbox = boxBottomVec.length();
  const heightFactor = box.userData.heightFactor || 0;
  const heightWorld = heightFactor * box.scale.y;
  const latTopBox = latAfterNorthArc(lat, heightWorld, Rbox);
  const boxTopDir = convertLatLngtoCartesian(latTopBox, lng, Rbox);
  const boxTopVec = new THREE.Vector3(boxTopDir.x, boxTopDir.y, boxTopDir.z);

  const mid = boxBottomVec.clone().add(boxTopVec).multiplyScalar(0.5);
  const z = mid.clone().normalize();
  const y = boxTopVec.clone().sub(boxBottomVec).normalize();
  const x = new THREE.Vector3().crossVectors(y, z).normalize();
  y.copy(new THREE.Vector3().crossVectors(z, x)).normalize();

  const matrix = new THREE.Matrix4().makeBasis(x, y, z);
  const boxGroup = box.userData.group;
  if (boxGroup) {
    boxGroup.position.copy(mid);
    boxGroup.quaternion.setFromRotationMatrix(matrix);
    boxGroup.updateMatrixWorld();
  }

  const halfBox = 0.5 * heightWorld;
  box.position.set(0, -halfBox, 0);
}

function updateTagTransform(tag) {
  if (!tag || !tag.source) return;
  const contextIndex = tag.context;
  const data = tag.source[tag.index];
  if (!data) return;
  const radius = contexts[contextIndex].radius;
  const lat = Number(data.lat);
  const lng = Number(data.lng);
  let textBottom = convertLatLngtoCartesian(lat, lng, radius + 0.061);
  if (tag.source === enneagramTagData) {
    const t = (lat * Math.PI) / 180;
    const radiusModifier = Math.cos(t);
    const scaleFactor = 3;
    const constrictFactor = 2.4;
    textBottom = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor + 0.062);
  }
  const textBottomVec = new THREE.Vector3(textBottom.x, textBottom.y, textBottom.z);
  const Rtag = textBottomVec.length();
  const textHeightFactor = tag.userData.textHeightFactor || 0;
  const textHeightWorld = textHeightFactor * tag.scale.y;
  const latTopText = latAfterNorthArc(lat, textHeightWorld, Rtag);
  const textTopDir = convertLatLngtoCartesian(latTopText, lng, Rtag);
  const textTopVec = new THREE.Vector3(textTopDir.x, textTopDir.y, textTopDir.z);

  const mid = textBottomVec.clone().add(textTopVec).multiplyScalar(0.5);
  const z = mid.clone().normalize();
  const y = textTopVec.clone().sub(textBottomVec).normalize();
  const x = new THREE.Vector3().crossVectors(y, z).normalize();
  y.copy(new THREE.Vector3().crossVectors(z, x)).normalize();

  const matrix = new THREE.Matrix4().makeBasis(x, y, z);
  const tagGroup = tag.userData.group;
  if (tagGroup) {
    tagGroup.position.copy(mid);
    tagGroup.quaternion.setFromRotationMatrix(matrix);
    tagGroup.updateMatrixWorld();
  }

  const halfText = 0.5 * textHeightWorld;
  tag.position.set(0, -halfText, 0);
}

export function refreshNode(contextIndex, nodeIndex) {
  const ctx = contexts[contextIndex];
  if (!ctx) return;
  updatePinTransform(ctx.pins[nodeIndex]);
  updateBoxTransform(ctx.boxes[nodeIndex]);
  updateTagTransform(ctx.tags[nodeIndex]);
}

// export function createTags(dataSource, destination, radius, context, indexMod) {
//     const loader = new FontLoader();
//     loader.load(tagFont, function (font) {

//         function instantiateTag(index, txt, lat, lng, color, size) {

//             function calculateTextWidth(txt, font, size) {
//                 const shapes = font.generateShapes(txt, size);
//                 const geometry = new THREE.ShapeGeometry(shapes);
//                 geometry.computeBoundingBox();
            
//                 // The actual width of the text
//                 const width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
            
//                 return width;
//             }
            
//             function centerText(txt, font, size) {
//                 const lines = txt.split('\n');
//                 const lineWidths = lines.map(line => calculateTextWidth(line, font, size));
//                 const longest = Math.max(...lineWidths);
            
//                 // Calculate width of a single space character
//                 let spaceWidth = calculateTextWidth(' ', font, size);
            
//                 // If space width isn't finite, use width of 'M' as a rough estimation
//                 if (!isFinite(spaceWidth)) {
//                     spaceWidth = calculateTextWidth('M', font, size);
//                 }
            
//                 const centeredText = lines.map((line, i) => {
//                     const spaceFactor = 1.38 //lower to add fewer spaces
//                     const spacesNeeded = Math.floor((longest - lineWidths[i]) / spaceWidth * spaceFactor); 
//                     return ' '.repeat(spacesNeeded) + line;
//                 });
            
//                 return centeredText.join('\n');
//             }
//             txt = centerText(txt, font, size);

//             // create text
//             const txtGeo = new THREE.ShapeGeometry(font.generateShapes(txt, 100));
//             txtGeo.computeBoundingBox();
//             txtGeo.translate(-0.5 * (txtGeo.boundingBox.max.x - txtGeo.boundingBox.min.x), (txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y), 0);

//             const tag = new THREE.Mesh(txtGeo, textMaterial);
//             let latLng = convertLatLngtoCartesian(lat, lng, radius + 0.061);

//             if (dataSource == enneagramTagData) {
//                 const t = lat * Math.PI / 180; // convert to radians
//                 const radiusModifier = Math.cos(t); // creates a cosine wave from -1 to 1
//                 const scaleFactor = 3; // adjust this value to scale the curve to match your flux-tube shape
//                 const constrictFactor = 2.4 // adjust this value to shrink the curve to match your flux-tube shape
//                 latLng = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor + 0.062);
//             }

//             const rotationVector = new THREE.Vector3(latLng.x, latLng.y, latLng.z);
//             tag.lookAt(rotationVector);
//             tag.position.copy(rotationVector);
//             tag.scale.set(size, size, size);

//             // create box
//             const xPadding = 200, yPadding = 0;
//             const roundingFactor = size * 125;
//             const width = (Math.abs(txtGeo.boundingBox.min.x) + Math.abs(txtGeo.boundingBox.max.x) + xPadding) * size;
//             const height = (Math.abs(txtGeo.boundingBox.min.y) + Math.abs(txtGeo.boundingBox.max.y) + yPadding) * size;

//             const shape = new THREE.Shape()
//                 .moveTo(0, roundingFactor)
//                 .lineTo(0, height - roundingFactor)
//                 .quadraticCurveTo(0, height, roundingFactor, height)
//                 .lineTo(width - roundingFactor, height)
//                 .quadraticCurveTo(width, height, width, height - roundingFactor)
//                 .lineTo(width, roundingFactor)
//                 .quadraticCurveTo(width, 0, width - roundingFactor, 0)
//                 .lineTo(roundingFactor, 0)
//                 .quadraticCurveTo(0, 0, 0, roundingFactor);

//             const boxGeo = new THREE.ShapeGeometry(shape);
//             const uvAttribute = boxGeo.attributes.uv;
//             let min = Infinity, max = 0;

//             // find min max
//             for (let i = 0; i < uvAttribute.count; i++) {
//                 const u = uvAttribute.getX(i);
//                 const v = uvAttribute.getY(i);
//                 min = Math.min(min, u, v);
//                 max = Math.max(max, u, v);
//             }

//             // map min map to 1 to 1 range
//             for (let i = 0; i < uvAttribute.count; i++) {
//                 const u = uvAttribute.getX(i);
//                 const v = uvAttribute.getY(i);
//                 uvAttribute.setXY(i, THREE.MathUtils.mapLinear(u, min, max, 0, 1), THREE.MathUtils.mapLinear(v, min, max, 0, 1));
//             }

//             boxGeo.computeBoundingBox();
//             boxGeo.translate(-0.5 * (boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x), 0, 0);

//             const box = new THREE.Mesh(boxGeo, boxMaterials[color]);
//             let boxLatLng = convertLatLngtoCartesian(lat, lng, radius + 0.06);

//             if (dataSource == enneagramTagData) {
//                 const t = lat * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
//                 const radiusModifier = Math.cos(t); // creates a cosine wave from -1 to 1
//                 const scaleFactor = 3; // adjust this value to scale the curve to match your flux-tube shape
//                 const constrictFactor = 2.4 // adjust this value to shrink the curve to match your flux-tube shape
//                 boxLatLng = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor + 0.06);
//             }
            
//             const boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
//             box.lookAt(boxRotationVector);
//             box.position.copy(boxRotationVector);

//             box.renderOrder = 10;
//             tag.renderOrder = 11;

//             box.castShadow = true;

//             box.source = dataSource;
//             box.context = context;
//             box.index = index + indexMod;
//             tag.source = dataSource;
//             tag.context = context;
//             tag.index = index + indexMod;
    
//             destination.add(box);
//             destination.add(tag);

//             contexts[context].boxes.push(box)
//             contexts[context].tags.push(tag)
//         }
    
//         dataSource.forEach((item, index) => {
//             instantiateTag(index, item.text, item.lat, item.lng, item.color, item.size / 100000);
//         });
//     });
    
//     function instantiatePin(index, lat, lng, color, size, slides, destination) {
//         const segments = slides ? 10 : 6;
//         const material = slides ? pinMaterials[color] : pinWireframeMaterials[color];
//         const wireframe = slides === undefined;
    
//         const pin = new THREE.Mesh(
//             new THREE.SphereGeometry(size / 1333, segments, segments),
//             material,
//         );
//         pin.source = dataSource;
//         pin.context = context;
//         pin.index = index + indexMod;
//         pin.originalSize = size
    
//         let pos = convertLatLngtoCartesian(lat, lng, radius + 0.01);

//         if (dataSource == enneagramTagData) {
//             const t = lat * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
//             const radiusModifier = Math.cos(t); // creates a cosine wave from -1 to 1
//             const scaleFactor = 3; // adjust this value to scale the curve to match your flux-tube shape
//             const constrictFactor = 2.4 // adjust this value to shrink the curve to match your flux-tube shape
//             pos = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor);
//         }
        
//         pin.position.set(pos.x, pos.y, pos.z);

//         pin.castShadow = true;
    
//         destination.add(pin);
//         intersectObjectsArray.push(pin);
//         contexts[context].pins.push(pin)
//     }
    
//     dataSource.forEach((item, index) => {
//         instantiatePin(index, item.lat, item.lng, item.color, item.size, item.slides, destination);
//     });
// }    

export function createConnections(tagSource, connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, destination, dashed, arrowed, tunnel) {
    tagSource.forEach((sourceItem, i) => {
        connectionSource.forEach((connection, j) => {
            if (sourceItem.id === connection[0]) {
                connection.slice(1).forEach((targetId, k) => {
                    tagSource.forEach((target, l) => {
                        if (target.id === targetId) {
                            let p1 = convertLatLngtoCartesian(sourceItem.lat, sourceItem.lng, curveMinAltitude);
                            let p2 = convertLatLngtoCartesian(target.lat, target.lng, curveMinAltitude);

                            if (tagSource == enneagramTagData) {
                                const scaleFactor = 3; // adjust this value to scale the curve to match your flux-tube shape
                                const constrictFactor = 2.4 // adjust this value to shrink the curve to match your flux-tube shape

                                const tP1 = (sourceItem.lat) * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
                                const p1radiusModifier = Math.cos(tP1); // creates a cosine wave from -1 to 1
                                p1 = convertLatLngtoCartesian(sourceItem.lat, sourceItem.lng, curveMinAltitude + p1radiusModifier * scaleFactor - constrictFactor);
                                
                                const tP2 = (target.lat) * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
                                const p2radiusModifier = Math.cos(tP2); // creates a cosine wave from -1 to 1
                                p2 = convertLatLngtoCartesian(target.lat, target.lng, curveMinAltitude + p2radiusModifier * scaleFactor - constrictFactor);
                            }

                            let weight = (sourceItem.size + target.size) / 2;
                            if (arrowed == true) weight *= 4
                            if (tunnel !== true) {
                                getCurve(p1, p2, weight);
                            } else digTunnel(p1, p2, weight)
                        }
                    });
                });
            }
        });
    });

    function getCurve(p1, p2, weight){
        const v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
        const v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
        const points = Array.from({length: 21}, (_, i) => {
            const p = new THREE.Vector3().lerpVectors(v1, v2, i/20);
            p.normalize();
            p.multiplyScalar(curveMinAltitude + curveMaxAltitude * Math.sin(Math.PI * i / 20));
            return p;
        });

        let material = connectionMaterial;
        let segmentModifier = 1
        let curveTexture

        if (dashed) {
            const dashTexture = textureLoader.load(dash);
            const distance = Math.floor(v1.distanceTo(v2) * 25);
            dashTexture.repeat.set(0, distance);
            dashTexture.wrapS = THREE.RepeatWrapping;
            dashTexture.wrapT = THREE.RepeatWrapping;
            dashTexture.rotation = Math.PI / 2;

            material = new THREE.MeshStandardMaterial({
                color: 0xffffaa,
                transparent: true,
                opacity: 0.6,
                emissive: 0xffffff,
                emissiveIntensity: 0.1,
                alphaMap: dashTexture
            });
        }

        if (arrowed) {
            curveTexture = textureLoader.load(arrow);  // Load the arrow texture
            
            const distance = Math.floor(v1.distanceTo(v2) * 15);  
            curveTexture.repeat.set(3, 4 + distance);  // Set repeat based on distance
            
            curveTexture.wrapS = THREE.RepeatWrapping;
            curveTexture.wrapT = THREE.RepeatWrapping;
            curveTexture.rotation = Math.PI / 2;
        
            const textureOffsetU = -0.1;
            const textureOffsetV = 0;
            curveTexture.offset.set(textureOffsetU, textureOffsetV);
        
            material = new THREE.MeshStandardMaterial({
                color: 0xffffaa,
                transparent: true,
                opacity: 0.8,
                emissive: 0xffffff,
                emissiveIntensity: 0.1,
                alphaMap: curveTexture,
            });
            
            segmentModifier = 5
        }

        const path = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(path, 20, curveThickness * weight, curveRadiusSegments * segmentModifier, false);

        const curve = new THREE.Mesh(geometry, material);
        if (arrowed) {
            // Save the mesh and its texture in the global curveMeshes array
            window.curveMeshes.push({
                mesh: curve,
                texture: curveTexture
            });
        }
        curve.renderOrder = 9;

        curve.castShadow = true;

        destination.add(curve);
    }

    function digTunnel(p1, p2, weight){
        const v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
        const v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
        const points = []
        points.push(v1, v2)

        let material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            transparent: false,
            emissive: 0xffffff,
            emissiveIntensity: 1,
        })

        let segmentModifier = 1

        const path = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(path, 2, curveThickness * weight, curveRadiusSegments * segmentModifier, false);

        const curve = new THREE.Mesh(geometry, material);
        curve.renderOrder = 9;
        destination.add(curve);
    }
}

export function instantiateNugget(index, lat, lng, color, size, slides, destination, context) {
    const material = pinMaterials[color];

    const nugget = new THREE.Mesh(
        new THREE.SphereGeometry(size * 5, 20, 20),
        material,
    );
    nugget.source = planetNuggetData;
    nugget.context = context;
    nugget.index = index;

    const position = convertLatLngtoCartesian(lat, lng, 5 + 0.01);
    nugget.position.set(position.x, position.y, position.z);

    destination.add(nugget);
    intersectObjectsArray.push(nugget);

    return {nugget, slides};
}

export function createImages(textureSrc, lat, lng, size, radius, destination) {
  const roundingFactor = 0.01;

  // 1) Make the square base shape
  const shape = new THREE.Shape()
    .moveTo(0, roundingFactor)
    .lineTo(0, size - roundingFactor)
    .quadraticCurveTo(0, size, roundingFactor, size)
    .lineTo(size - roundingFactor, size)
    .quadraticCurveTo(size, size, size, size - roundingFactor)
    .lineTo(size, roundingFactor)
    .quadraticCurveTo(size, 0, size - roundingFactor, 0)
    .lineTo(roundingFactor, 0)
    .quadraticCurveTo(0, 0, 0, roundingFactor);

  const geo = new THREE.ShapeGeometry(shape);

  // 2) Center it
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  const w = bb.max.x - bb.min.x;
  const h = bb.max.y - bb.min.y;
  geo.translate(-0.5 * w, -0.5 * h, 0);

  // 3) Recompute UVs explicitly so they span [0,1] exactly
  //    (after centering, bounds are symmetric around 0)
  const pos = geo.attributes.position;
  const uvs = new Float32Array((pos.count) * 2);
  let minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  const spanX = maxX - minX || 1, spanY = maxY - minY || 1;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    uvs[2*i + 0] = (x - minX) / spanX; // U
    uvs[2*i + 1] = (y - minY) / spanY; // V
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

  const mat = new THREE.MeshStandardMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    // If your images are fully opaque PNG/JPG, consider removing alphaTest:
    // alphaTest: 0.0,
  });
  // If you DO need to clip transparent halos, keep it low:
  mat.alphaTest = 0.1;

  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;

  // 4) Place on globe facing outward, and nudge off the surface slightly
  const p = convertLatLngtoCartesian(lat, lng, radius);
  const normal = new THREE.Vector3(p.x, p.y, p.z).normalize();
  mesh.position.copy(normal).multiplyScalar(radius + 0.001 * size); // tiny offset
  // Face outward (default -Z faces the look target; use a point "past" the surface)
  mesh.lookAt(normal.clone().multiplyScalar(radius + 10 * size));

  destination.add(mesh);

  // 5) Load texture and scale by aspect
  textureLoader.load(textureSrc, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    // Optional: avoid mipmap artifacts on NPOT textures (Three usually handles this)
    // tex.generateMipmaps = false;
    // tex.minFilter = THREE.LinearFilter;

    mat.map = tex;
    mat.needsUpdate = true;

    const img = tex.image;
    if (img && img.width && img.height) {
      const aspect = img.width / img.height; // e.g., 1620 / 900 = 1.8
      // keep height = `size`, widen X by aspect:
      mesh.scale.set(aspect, 1, 1);
    }
  });

  return { box: mesh };
}

// export function createImages(textureSrc, lat, lng, size, radius, destination) {
//     const img = textureLoader.load(textureSrc);
//     img.colorSpace = THREE.SRGBColorSpace;
//     const boxMat = new THREE.MeshStandardMaterial({
//         map: img,
//         transparent: true,
//         side: DoubleSide,
//     });
//     boxMat.alphaTest = 0.5;

//     const roundingFactor = 0.01;
//     const shape = new THREE.Shape()
//         .moveTo(0, roundingFactor)
//         .lineTo(0, size - roundingFactor)
//         .quadraticCurveTo(0, size, roundingFactor, size)
//         .lineTo(size - roundingFactor, size)
//         .quadraticCurveTo(size, size, size, size - roundingFactor)
//         .lineTo(size, roundingFactor)
//         .quadraticCurveTo(size, 0, size - roundingFactor, 0)
//         .lineTo(roundingFactor, 0)
//         .quadraticCurveTo(0, 0, 0, roundingFactor);

//     const boxGeo = new THREE.ShapeGeometry(shape);
//     const uvAttribute = boxGeo.attributes.uv;
//     let min = Infinity, max = 0;

//     for (let i = 0; i < uvAttribute.count; i++) {
//         const u = uvAttribute.getX(i);
//         const v = uvAttribute.getY(i);
//         min = Math.min(min, u, v);
//         max = Math.max(max, u, v);
//     }

//     for (let i = 0; i < uvAttribute.count; i++) {
//         const u = uvAttribute.getX(i);
//         const v = uvAttribute.getY(i);
//         uvAttribute.setXY(i, THREE.MathUtils.mapLinear(u, min, max, 0, 1), THREE.MathUtils.mapLinear(v, min, max, 0, 1));
//     }

//     boxGeo.computeBoundingBox();
//     boxGeo.translate(-0.5 * (boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x), -0.5 * (boxGeo.boundingBox.max.y - boxGeo.boundingBox.min.y), 0);

//     const box = new THREE.Mesh(boxGeo, boxMat);
//     // Enable shadow casting for the mesh
//     box.castShadow = true;

//     const boxLatLng = convertLatLngtoCartesian(lat, lng, radius);
//     const boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);

//     box.lookAt(boxRotationVector);
//     box.position.copy(boxRotationVector);
//     destination.add(box);

//     return { box };


export function hoverPins(intersects) {
    // Unhover
    if (intersects.length === 0 && hoveredPins.length > 0) {
        for (const hoveredPin of hoveredPins) {
            if (hoveredPin.source !== planetNuggetData) {
            hoveredPin.material = hoveredPin.material.wireframe ? pinWireframeMaterials[1] : pinMaterials[1];
            if (hoveredPin.scale.x === 1) hoveredPin.scale.multiplyScalar(1.2);
            }

            const source = contexts[hoveredPin.context].tagData[hoveredPin.index]
            hoveredPin.material = source.slides ? pinMaterials[source.color] : pinWireframeMaterials[source.color];

            const baseScale = hoveredPin.userData.baseScale || 1;
            hoveredPin.scale.set(baseScale, baseScale, baseScale);
        }
        hoveredPins.length = 0;
    }

    // Hover
    for (const intersect of intersects) {
        if (!hoveredPins.includes(intersect.object)) hoveredPins.push(intersect.object);

        if (intersect.object.source !== planetNuggetData) {
            const baseScale = intersect.object.userData.baseScale || 1;
            intersect.object.material = intersect.object.material.wireframe ? pinWireframeMaterials[1] : pinMaterials[1];
            intersect.object.scale.set(baseScale * 1.2, baseScale * 1.2, baseScale * 1.2);
        }
    }
}




/**
 * Creates a smooth, “snaking” trail hugging the planet’s surface.
 * It interpolates *all* waypoints at once, avoiding sharp corners.
 *
 * @param {Array} route - Array of objects: [{lat, lng}, ...].
 * @param {Number} altitude - Slight offset above planet radius.
 * @param {Number} tension - Catmull-Rom tension parameter (0 to ~1).
 * @returns {THREE.Mesh} - The red “snaky” route mesh (Tube).
 */
export function createRoute(route, altitude = 5.1, tension = 0.3) {
  if (!route || route.length < 2) return null;

  // 1. Convert each waypoint to a normalized 3D vector
  const rawPoints = route.map(({ lat, lng }) => {
    const { x, y, z } = convertLatLngtoCartesian(lat, lng, altitude);
    // normalized so the interpolation is on the unit sphere
    return new THREE.Vector3(x, y, z).normalize();
  });

  // 2. Create a Catmull-Rom spline from these normalized points
  //    Note: "centripetal" or "chordal" can sometimes reduce weird loops.
  //    The default type is 'catmullrom'. We’ll pass in tension as the 4th arg.
  //    (Tension ~0.3 is often a good starting point).
  const baseSpline = new THREE.CatmullRomCurve3(rawPoints, false, 'catmullrom', tension);

  // 3. Sample that curve at many points (say 200) so we can reproject them onto the planet
  const sampleCount = 200;
  const sampledPositions = baseSpline.getPoints(sampleCount);

  // 4. “Reproject” each sample point back onto the planet’s surface at `altitude`.
  //    This ensures no dip below or big arcs above.
  const projectedPositions = sampledPositions.map((pos) => {
    return pos.clone().normalize().multiplyScalar(altitude);
  });

  // 5. Create a *second* Catmull-Rom from these final reprojected points.
  //    This final curve is guaranteed to hug the planet.
  const finalSpline = new THREE.CatmullRomCurve3(projectedPositions, false);

  // 6. Build a TubeGeometry along this final spline
  const tubularSegments = 300;  // more segments => smoother tube
  const tubeRadius      = 0.03; // thickness
  const radialSegments  = 8;
  const closed          = false;
  const geometry = new THREE.TubeGeometry(finalSpline, tubularSegments, tubeRadius, radialSegments, closed);

  // 7. Solid red material, partially transparent, as requested
  const material = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    emissive: 0xff0000,
    emissiveIntensity: 0.2,
    transparent: true,
    opacity: 0.5,
  });

  // 8. Create the mesh
  const routeMesh = new THREE.Mesh(geometry, material);
  routeMesh.renderOrder = 10;
  routeMesh.castShadow = true;
  routeMesh.receiveShadow = true;

  return routeMesh;
}

/**
 * Spherical linear interpolation between two normalized vectors
 * @param {THREE.Vector3} start - normalized vector
 * @param {THREE.Vector3} end   - normalized vector
 * @param {number} alpha        - interpolation factor [0..1]
 * @returns {THREE.Vector3} new slerped, normalized vector
 */
function slerpVectors(start, end, alpha) {
    // Dot product clamped between -1 and +1
    const dot = THREE.MathUtils.clamp(start.dot(end), -1, 1);
  
    // Omega is the angle between start and end
    const omega = Math.acos(dot);
    const sinOmega = Math.sin(omega);
  
    // If angle too small, fallback to simple linear interpolation
    if (sinOmega < 1e-6) {
      // basically the same direction
      return start.clone().lerp(end, alpha).normalize();
    }
  
    const scaleStart = Math.sin((1 - alpha) * omega) / sinOmega;
    const scaleEnd   = Math.sin(alpha * omega) / sinOmega;
  
    // Weighted sum of the two directions
    return start.clone().multiplyScalar(scaleStart).add(end.clone().multiplyScalar(scaleEnd));
  }
