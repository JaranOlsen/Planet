//  IMPORT DEPENDENCIES
import * as THREE from 'three';
import { DoubleSide } from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

//  IMPORT SCRIPTS
import { convertLatLngtoCartesian } from './mathScripts.js'
import { palette } from './data/palette.js'

//  IMPORT TEXTURES
import dash from '../img/textures/dash.webp'

const tagFont = "https://jaranolsen.github.io/Planet/SourceSans3_Regular.json"
//const tagFont = "fonts/SourceSans3_Regular.json"

const textureLoader = new THREE.TextureLoader()

export const pins = []
export const pinPositions = []
export const boxes = []
export const tags = []

export function createImages(textureSrc, lat, lng, size, radius, context) {
    let img = textureLoader.load(textureSrc);
    //const boxMat = new THREE.MeshBasicMaterial( {
    const boxMat = new THREE.MeshStandardMaterial( {
        map: img,
        transparent: true,
        side: DoubleSide
    } );

    let roundingFactor = 0.01;
    let x = 0; let y = 0; 
    let width = size; 
    let height = size; 
    let shape = new THREE.Shape();
    shape.moveTo( x, y + roundingFactor );
    shape.lineTo( x, y + height - roundingFactor );
    shape.quadraticCurveTo( x, y + height, x + roundingFactor, y + height );
    shape.lineTo( x + width - roundingFactor, y + height );
    shape.quadraticCurveTo( x + width, y + height, x + width, y + height - roundingFactor );
    shape.lineTo( x + width, y + roundingFactor );
    shape.quadraticCurveTo( x + width, y, x + width - roundingFactor, y );
    shape.lineTo( x + roundingFactor, y );
    shape.quadraticCurveTo( x, y, x, y + roundingFactor );
    const boxGeo = new THREE.ShapeGeometry( shape );

    var uvAttribute = boxGeo.attributes.uv;
    let min = Infinity, max = 0
    for (var i = 0; i < uvAttribute.count; i++) {
        let u = uvAttribute.getX(i);
        let v = uvAttribute.getY(i);
        min = Math.min(min, u, v)
        max = Math.max(max, u, v)
    }
    for (var i = 0; i < uvAttribute.count; i++) {
        let u = uvAttribute.getX(i);
        let v = uvAttribute.getY(i);
        u = THREE.MathUtils.mapLinear(u, min, max, 0, 1)
        v = THREE.MathUtils.mapLinear(v, min, max, 0, 1)
        uvAttribute.setXY(i, u, v);
    }

    boxGeo.computeBoundingBox();
    const boxMidx = -0.5 * ( boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x );
    const boxMidy = -0.5 * ( boxGeo.boundingBox.max.y - boxGeo.boundingBox.min.y );
    boxGeo.translate( boxMidx, boxMidy, 0 );
    let box = new THREE.Mesh(boxGeo, boxMat);

    let boxLatLng = convertLatLngtoCartesian(lat, lng, radius);
    let boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
    box.lookAt( boxRotationVector )
    box.position.copy( boxRotationVector )
    context.add( box );    
}

export function createTags(dataSource, context, radius) {
    const loader = new FontLoader();
    loader.load( tagFont, function ( font ) { 

        function instantiateTag(txt, lat, lng, color, size) {
            //create text
            const textMat = new THREE.MeshBasicMaterial( {
                color: 0x000000,
                transparent: false,
                //opacity: 0.8,
                side: THREE.DoubleSide
            } );
            //const boxMat = new THREE.MeshBasicMaterial( {
            const boxMat = new THREE.MeshStandardMaterial( {
                color: color,
                transparent: true,
                opacity: 0.65, //0.5
                side: THREE.DoubleSide,
                emissive: color,
                emissiveIntensity: 0.1,
            } );

            const shapes = font.generateShapes( txt, 100 );
            const txtGeo = new THREE.ShapeGeometry( shapes );
            txtGeo.computeBoundingBox();
            const xMid = - 0.5 * ( txtGeo.boundingBox.max.x - txtGeo.boundingBox.min.x );
            const yMid = 0.5 * ( txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y );
            txtGeo.translate( xMid, yMid * 2, 0 );
            
            const tag = new THREE.Mesh( txtGeo, textMat );
            let latLng = convertLatLngtoCartesian(lat, lng, radius + 0.06);
            let rotationVector = new THREE.Vector3(latLng.x, latLng.y, latLng.z);
            tag.lookAt(rotationVector);
            tag.position.x = latLng.x;
            tag.position.y = latLng.y;
            tag.position.z = latLng.z;
            tag.scale.x = size;
            tag.scale.y = size;
            tag.scale.z = size;

            //create box
            const xPadding = 200;
            const yPadding = 0;
            let roundingFactor = size * 125;
            let x = 0; let y = 0; 
            let width = (Math.abs(txtGeo.boundingBox.min.x) + Math.abs(txtGeo.boundingBox.max.x) + xPadding) * size * 1; 
            let height = (Math.abs(txtGeo.boundingBox.min.y) + Math.abs(txtGeo.boundingBox.max.y) + yPadding) * size * 1; 
            let shape = new THREE.Shape();
            shape.moveTo( x, y + roundingFactor );
            shape.lineTo( x, y + height - roundingFactor );
            shape.quadraticCurveTo( x, y + height, x + roundingFactor, y + height );
            shape.lineTo( x + width - roundingFactor, y + height );
            shape.quadraticCurveTo( x + width, y + height, x + width, y + height - roundingFactor );
            shape.lineTo( x + width, y + roundingFactor );
            shape.quadraticCurveTo( x + width, y, x + width - roundingFactor, y );
            shape.lineTo( x + roundingFactor, y );
            shape.quadraticCurveTo( x, y, x, y + roundingFactor );
            const boxGeo = new THREE.ShapeGeometry( shape );

            var uvAttribute = boxGeo.attributes.uv;
            let min = Infinity, max = 0
                //find min max
            for (var i = 0; i < uvAttribute.count; i++) {
                let u = uvAttribute.getX(i);
                let v = uvAttribute.getY(i);
                min = Math.min(min, u, v)
                max = Math.max(max, u, v)
            }

                //map min map to 1 to 1 range
            for (var i = 0; i < uvAttribute.count; i++) {
                let u = uvAttribute.getX(i);
                let v = uvAttribute.getY(i);

                // do something with uv
                u = THREE.MathUtils.mapLinear(u, min, max, 0, 1)
                v = THREE.MathUtils.mapLinear(v, min, max, 0, 1)

                // write values back to attribute
                uvAttribute.setXY(i, u, v);

            }

            boxGeo.computeBoundingBox();
            const boxMidx = -0.5 * ( boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x );
            const boxMidy = -0.5 * ( boxGeo.boundingBox.max.y - boxGeo.boundingBox.min.y );
            boxGeo.translate( boxMidx, boxMidy * 0, 0 );
            let box = new THREE.Mesh(boxGeo, boxMat);

            let boxLatLng = convertLatLngtoCartesian(lat, lng, radius + 0.05);
            let boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
            box.lookAt( boxRotationVector )
            box.position.copy( boxRotationVector )
            
            context.add( box );
            context.add( tag );

            return { box, tag }
        }
        
        for (let i = 0; i < dataSource.length; i++) {  
            let tag = instantiateTag(dataSource[i].text, dataSource[i].lat, dataSource[i].lng - 180, palette[dataSource[i].color], dataSource[i].size / 100000);
            tags.push(tag)
        }
    } );

    function instantiatePin(lat, lng, color, originalColor, size, originalSize, slides, context) {
        let segments
        let wireframe = true

        if (slides !== undefined) {
            wireframe = false
            segments = 10 //Math.floor(size * 750)
        } else segments = 6 //Math.floor(size * 750 / 3)

        const pin = new THREE.Mesh(
            new THREE.SphereGeometry(size * 75, segments, segments),
            //new THREE.MeshBasicMaterial({
            new THREE.MeshStandardMaterial({
                color: color,
                wireframe: wireframe,
                emissive: color,
                emissiveIntensity: 0.1,
            })
        )
        
        let pos = convertLatLngtoCartesian(lat, lng, radius + 0.01);
        pin.position.set(pos.x, pos.y, pos.z);
    
        context.add(pin);
        pinPositions.push(pin);
    
        return {pin, originalColor, originalSize};
    }

    for (let i = 0; i < dataSource.length; i++) { 
        let pin = instantiatePin(dataSource[i].lat, dataSource[i].lng - 180, palette[dataSource[i].color], palette[dataSource[i].color], dataSource[i].size / 100000, dataSource[i].size, dataSource[i].slides, context);
        pins.push(pin)
    }
}

export function createConnections(tagSource, connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, dashed) {
    for (let i = 0; i < tagSource.length; i++) {
        for (let j = 0; j < connectionSource.length; j++) {
            if (tagSource[i].id == connectionSource[j][0]) {
                for (let k = 1; k < connectionSource[j].length; k++) {
                    for (let l = 0; l < tagSource.length; l++) {
                        if (tagSource[l].id == connectionSource[j][k]) {
                            let t1 = convertLatLngtoCartesian(tagSource[i].lat, tagSource[i].lng - 180, curveMinAltitude);
                            let t2 = convertLatLngtoCartesian(tagSource[l].lat, tagSource[l].lng - 180, curveMinAltitude);
                            const weight = (tagSource[i].size + tagSource[l].size) / 2;
                            getCurve(t1, t2, weight);
                        }
                    }
                }
            }
        }
    }

    function getCurve(p1, p2, weight){
        let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
        let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
        let points = []
        for (let i = 0; i <= 20; i++) {
            let p = new THREE.Vector3().lerpVectors(v1, v2, i/20)
            p.normalize()
            p.multiplyScalar(curveMinAltitude + curveMaxAltitude * Math.sin(Math.PI*i/20));
            points.push(p)
        }
        let path = new THREE.CatmullRomCurve3(points);
        const dashTexture = textureLoader.load(dash)
        const distance = Math.floor(v1.distanceTo(v2) * 25)
        dashTexture.repeat.set(0, distance)
        dashTexture.wrapS = THREE.RepeatWrapping;
        dashTexture.wrapT = THREE.RepeatWrapping;
        dashTexture.rotation = Math.PI / 2
        const geometry = new THREE.TubeGeometry(path, 20, curveThickness * weight, curveRadiusSegments, false);
        //const material = new THREE.MeshBasicMaterial({
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.5,
            emissive: 0xffffff,
            emissiveIntensity: 0.1,
        });
        if (dashed == true) {
            material.alphaMap = dashTexture
        }

        const curve = new THREE.Mesh(geometry, material);
        curve.renderOrder = -10
        context.add(curve);
    }
}