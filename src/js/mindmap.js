//  IMPORT DEPENDENCIES
import * as THREE from 'three';
import { DoubleSide, Object3D } from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

//  IMPORT SCRIPTS
import { convertLatLngtoCartesian } from './mathScripts.js'

//  IMPORT DATA
import { contexts } from './main.js'

//  IMPORT TEXTURES
import dash from '/assets/textures/dash.webp'
import arrow from '/assets/textures/arrow4.webp'

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

export function createTags(dataSource, destination, radius, context, indexMod) {
    const loader = new FontLoader();
    loader.load(tagFont, function (font) {

        function instantiateTag(index, txt, lat, lng, color, size) {

            function calculateTextWidth(txt, font, size) {
                const shapes = font.generateShapes(txt, size);
                const geometry = new THREE.ShapeGeometry(shapes);
                geometry.computeBoundingBox();
            
                // The actual width of the text
                const width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
            
                return width;
            }
            
            function centerText(txt, font, size) {
                const lines = txt.split('\n');
                const lineWidths = lines.map(line => calculateTextWidth(line, font, size));
                const longest = Math.max(...lineWidths);
            
                // Calculate width of a single space character
                let spaceWidth = calculateTextWidth(' ', font, size);
            
                // If space width isn't finite, use width of 'M' as a rough estimation
                if (!isFinite(spaceWidth)) {
                    spaceWidth = calculateTextWidth('M', font, size);
                }
            
                const centeredText = lines.map((line, i) => {
                    const spaceFactor = 1.38 //lower to add fewer spaces
                    const spacesNeeded = Math.floor((longest - lineWidths[i]) / spaceWidth * spaceFactor); 
                    return ' '.repeat(spacesNeeded) + line;
                });
            
                return centeredText.join('\n');
            }
            txt = centerText(txt, font, size);

            // create text
            const txtGeo = new THREE.ShapeGeometry(font.generateShapes(txt, 100));
            txtGeo.computeBoundingBox();
            txtGeo.translate(-0.5 * (txtGeo.boundingBox.max.x - txtGeo.boundingBox.min.x), (txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y), 0);

            const tag = new THREE.Mesh(txtGeo, textMaterial);
            let latLng = convertLatLngtoCartesian(lat, lng, radius + 0.061);

            if (dataSource == enneagramTagData) {
                const t = (lat + 90) * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
                const radiusModifier = -Math.cos(t); // creates a cosine wave from -1 to 1
                const scaleFactor = 3; // adjust this value to scale the curve to match your flux-tube shape
                const constrictFactor = 2.4 // adjust this value to shrink the curve to match your flux-tube shape
                latLng = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor + 0.061);
            }

            const rotationVector = new THREE.Vector3(latLng.x, latLng.y, latLng.z);
            tag.lookAt(rotationVector);
            tag.position.copy(rotationVector);
            tag.scale.set(size, size, size);

            // create box
            const xPadding = 200, yPadding = 0;
            const roundingFactor = size * 125;
            const width = (Math.abs(txtGeo.boundingBox.min.x) + Math.abs(txtGeo.boundingBox.max.x) + xPadding) * size;
            const height = (Math.abs(txtGeo.boundingBox.min.y) + Math.abs(txtGeo.boundingBox.max.y) + yPadding) * size;

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
            const uvAttribute = boxGeo.attributes.uv;
            let min = Infinity, max = 0;

            // find min max
            for (let i = 0; i < uvAttribute.count; i++) {
                const u = uvAttribute.getX(i);
                const v = uvAttribute.getY(i);
                min = Math.min(min, u, v);
                max = Math.max(max, u, v);
            }

            // map min map to 1 to 1 range
            for (let i = 0; i < uvAttribute.count; i++) {
                const u = uvAttribute.getX(i);
                const v = uvAttribute.getY(i);
                uvAttribute.setXY(i, THREE.MathUtils.mapLinear(u, min, max, 0, 1), THREE.MathUtils.mapLinear(v, min, max, 0, 1));
            }

            boxGeo.computeBoundingBox();
            boxGeo.translate(-0.5 * (boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x), 0, 0);

            const box = new THREE.Mesh(boxGeo, boxMaterials[color]);
            let boxLatLng = convertLatLngtoCartesian(lat, lng, radius + 0.06);

            if (dataSource == enneagramTagData) {
                const t = (lat + 90) * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
                const radiusModifier = -Math.cos(t); // creates a cosine wave from -1 to 1
                const scaleFactor = 3; // adjust this value to scale the curve to match your flux-tube shape
                const constrictFactor = 2.4 // adjust this value to shrink the curve to match your flux-tube shape
                boxLatLng = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor + 0.06);
            }
            
            const boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
            box.lookAt(boxRotationVector);
            box.position.copy(boxRotationVector);

            box.renderOrder = 10;
            tag.renderOrder = 11;

            box.source = dataSource;
            box.context = context;
            box.index = index + indexMod;
            tag.source = dataSource;
            tag.context = context;
            tag.index = index + indexMod;
    
            destination.add(box);
            destination.add(tag);

            contexts[context].boxes.push(box)
            contexts[context].tags.push(tag)
        }
    
        dataSource.forEach((item, index) => {
            instantiateTag(index, item.text, item.lat, item.lng - 180, item.color, item.size / 100000);
        });
    });
    
    function instantiatePin(index, lat, lng, color, size, slides, destination) {
        const segments = slides ? 10 : 6;
        const material = slides ? pinMaterials[color] : pinWireframeMaterials[color];
        const wireframe = slides === undefined;
    
        const pin = new THREE.Mesh(
            new THREE.SphereGeometry(size / 1333, segments, segments),
            material,
        );
        pin.source = dataSource;
        pin.context = context;
        pin.index = index + indexMod;
        pin.originalSize = size
    
        let pos = convertLatLngtoCartesian(lat, lng, radius + 0.01);

        if (dataSource == enneagramTagData) {
            const t = (lat + 90) * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
            const radiusModifier = -Math.cos(t); // creates a cosine wave from -1 to 1
            const scaleFactor = 3; // adjust this value to scale the curve to match your flux-tube shape
            const constrictFactor = 2.4 // adjust this value to shrink the curve to match your flux-tube shape
            pos = convertLatLngtoCartesian(lat, lng, radius + radiusModifier * scaleFactor - constrictFactor);
        }
        
        pin.position.set(pos.x, pos.y, pos.z);
    
        destination.add(pin);
        intersectObjectsArray.push(pin);
        contexts[context].pins.push(pin)
    }
    
    dataSource.forEach((item, index) => {
        instantiatePin(index, item.lat, item.lng - 180, item.color, item.size, item.slides, destination);
    });
}    

export function createConnections(tagSource, connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, destination, dashed, arrowed, tunnel) {
    tagSource.forEach((sourceItem, i) => {
        connectionSource.forEach((connection, j) => {
            if (sourceItem.id === connection[0]) {
                connection.slice(1).forEach((targetId, k) => {
                    tagSource.forEach((target, l) => {
                        if (target.id === targetId) {
                            let p1 = convertLatLngtoCartesian(sourceItem.lat, sourceItem.lng - 180, curveMinAltitude);
                            let p2 = convertLatLngtoCartesian(target.lat, target.lng - 180, curveMinAltitude);

                            if (tagSource == enneagramTagData) {
                                const scaleFactor = 3; // adjust this value to scale the curve to match your flux-tube shape
                                const constrictFactor = 2.4 // adjust this value to shrink the curve to match your flux-tube shape

                                const tP1 = (sourceItem.lat + 90) * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
                                const p1radiusModifier = -Math.cos(tP1); // creates a cosine wave from -1 to 1
                                p1 = convertLatLngtoCartesian(sourceItem.lat, sourceItem.lng - 180, curveMinAltitude + p1radiusModifier * scaleFactor - constrictFactor);
                                
                                const tP2 = (target.lat + 90) * Math.PI / 180; // offset latitude by 90 degrees and convert to radians
                                const p2radiusModifier = -Math.cos(tP2); // creates a cosine wave from -1 to 1
                                p2 = convertLatLngtoCartesian(target.lat, target.lng - 180, curveMinAltitude + p2radiusModifier * scaleFactor - constrictFactor);
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
            const arrowTexture = textureLoader.load(arrow);
            const distance = Math.floor(v1.distanceTo(v2) * 25);
            arrowTexture.repeat.set(7, 8 + distance / 2);
            arrowTexture.wrapS = THREE.RepeatWrapping;
            arrowTexture.wrapT = THREE.RepeatWrapping;
            arrowTexture.rotation = Math.PI / 2;

            const textureOffsetU = -0.1; // You can change this value to control the horizontal offset
            const textureOffsetV = 0; // You can change this value to control the vertical offset
            arrowTexture.offset.set(textureOffsetU, textureOffsetV);

            material = new THREE.MeshStandardMaterial({
                color: 0xffffaa,
                transparent: true,
                opacity: 0.8,
                emissive: 0xffffff,
                emissiveIntensity: 0.1,
                alphaMap: arrowTexture,
            });

            segmentModifier = 5
        }

        const path = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(path, 20, curveThickness * weight, curveRadiusSegments * segmentModifier, false);

        const curve = new THREE.Mesh(geometry, material);
        curve.renderOrder = 9;
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
    const img = textureLoader.load(textureSrc);
    const boxMat = new THREE.MeshStandardMaterial({
        map: img,
        transparent: true,
        side: DoubleSide,
    });

    const roundingFactor = 0.01;
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

    const boxGeo = new THREE.ShapeGeometry(shape);
    const uvAttribute = boxGeo.attributes.uv;
    let min = Infinity, max = 0;

    for (let i = 0; i < uvAttribute.count; i++) {
        const u = uvAttribute.getX(i);
        const v = uvAttribute.getY(i);
        min = Math.min(min, u, v);
        max = Math.max(max, u, v);
    }

    for (let i = 0; i < uvAttribute.count; i++) {
        const u = uvAttribute.getX(i);
        const v = uvAttribute.getY(i);
        uvAttribute.setXY(i, THREE.MathUtils.mapLinear(u, min, max, 0, 1), THREE.MathUtils.mapLinear(v, min, max, 0, 1));
    }

    boxGeo.computeBoundingBox();
    boxGeo.translate(-0.5 * (boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x), -0.5 * (boxGeo.boundingBox.max.y - boxGeo.boundingBox.min.y), 0);

    const box = new THREE.Mesh(boxGeo, boxMat);
    const boxLatLng = convertLatLngtoCartesian(lat, lng, radius);
    const boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);

    box.lookAt(boxRotationVector);
    box.position.copy(boxRotationVector);
    destination.add(box);

    return { box };
}

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

            hoveredPin.scale.set(1, 1, 1);
        }
        hoveredPins.length = 0;
    }

    // Hover
    for (const intersect of intersects) {
        if (!hoveredPins.includes(intersect.object)) hoveredPins.push(intersect.object);

        if (intersect.object.source !== planetNuggetData) {
            intersect.object.material = intersect.object.material.wireframe ? pinWireframeMaterials[1] : pinMaterials[1];
            if (intersect.object.scale.x === 1) intersect.object.scale.multiplyScalar(1.2);
        }
    }
}
