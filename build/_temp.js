//GPT optimised
export function createImages(textureSrc, lat, lng, size, radius, context) {
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
    context.add(box);

    return { box };
}

//original
export function createImages(textureSrc, lat, lng, size, radius, context) {
    let img = textureLoader.load(textureSrc);
    const boxMat = new THREE.MeshStandardMaterial( {
        map: img,
        transparent: true,
        side: DoubleSide,
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

    return { box }
}

//GPT optimised
export function createTags(dataSource, context, radius) {
    const loader = new FontLoader();
    loader.load(tagFont, function (font) {

        function instantiateTag(txt, lat, lng, color, size) {
            // create text
            const txtGeo = new THREE.ShapeGeometry(font.generateShapes(txt, 100));
            txtGeo.computeBoundingBox();
            txtGeo.translate(-0.5 * (txtGeo.boundingBox.max.x - txtGeo.boundingBox.min.x), (txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y), 0);

            const tag = new THREE.Mesh(txtGeo, textMaterial);
            const latLng = convertLatLngtoCartesian(lat, lng, radius + 0.06);
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
            boxGeo.translate(-0.5 * (boxGeo.boundingBox.max.x - boxGeo.boundingBox.min.x), -0.5 * (boxGeo.boundingBox.max.y - boxGeo.boundingBox.min.y), 0);

            const box = new THREE.Mesh(boxGeo, boxMaterials[color]);
            const boxLatLng = convertLatLngtoCartesian(lat, lng, radius + 0.05);
            const boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
            box.lookAt(boxRotationVector);
            box.position.copy(boxRotationVector);

            box.renderOrder = -8;
            tag.renderOrder = -7;
    
            context.add(box);
            context.add(tag);
    
            return { box, tag };
        }
    
        dataSource.forEach(item => {
            const tag = instantiateTag(item.text, item.lat, item.lng - 180, item.color, item.size / 100000);
            tags.push(tag);
        });
    });
    
    function instantiatePin(index, lat, lng, color, size, originalSize, slides, context) {
        const segments = slides ? 10 : 6;
        const material = slides ? pinMaterials[color] : pinWireframeMaterials[color];
        const wireframe = slides === undefined;
    
        const pin = new THREE.Mesh(
            new THREE.SphereGeometry(size * 75, segments, segments),
            material,
        );
        pin.source = dataSource;
        pin.index = index;
    
        const pos = convertLatLngtoCartesian(lat, lng, radius + 0.01);
        pin.position.set(pos.x, pos.y, pos.z);
    
        context.add(pin);
        intersectObjectsArray.push(pin);
    
        return { pin, color, originalSize, slides };
    }
    
    dataSource.forEach((item, index) => {
        const pin = instantiatePin(index, item.lat, item.lng - 180, item.color, item.size / 100000, item.size, item.slides, context);
        pins.push(pin);
    });
}    

//original
export function createTags(dataSource, context, radius) {
    const loader = new FontLoader();
    loader.load( tagFont, function ( font ) { 

        function instantiateTag(txt, lat, lng, color, size) {

            //create text
            const shapes = font.generateShapes( txt, 100 );
            const txtGeo = new THREE.ShapeGeometry( shapes );
            txtGeo.computeBoundingBox();
            const xMid = - 0.5 * ( txtGeo.boundingBox.max.x - txtGeo.boundingBox.min.x );
            const yMid = 0.5 * ( txtGeo.boundingBox.max.y - txtGeo.boundingBox.min.y );
            txtGeo.translate( xMid, yMid * 2, 0 );
            
            const tag = new THREE.Mesh( txtGeo, textMaterial );
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
            
            let box = new THREE.Mesh(boxGeo, boxMaterials[color]);

            let boxLatLng = convertLatLngtoCartesian(lat, lng, radius + 0.05);
            let boxRotationVector = new THREE.Vector3(boxLatLng.x, boxLatLng.y, boxLatLng.z);
            box.lookAt( boxRotationVector )
            box.position.copy( boxRotationVector )

            box.renderOrder = -8
            tag.renderOrder = -7
            
            context.add( box );
            context.add( tag );

            return { box, tag }
        }
        
        for (let i = 0; i < dataSource.length; i++) {  
            let tag = instantiateTag(dataSource[i].text, dataSource[i].lat, dataSource[i].lng - 180, dataSource[i].color, dataSource[i].size / 100000);
            tags.push(tag)
        }
    } );

    function instantiatePin(index, lat, lng, color, size, originalSize, slides, context) {
        let segments
        let material
        let wireframe = true

        if (slides !== undefined) {
            wireframe = false
            material = pinMaterials[color]
            segments = 10 //Math.floor(size * 750)
        } else {
            segments = 6 //Math.floor(size * 750 / 3)
            material = pinWireframeMaterials[color]
        }

        const pin = new THREE.Mesh(
            new THREE.SphereGeometry(size * 75, segments, segments),
            material,
        )
        pin.source = dataSource
        pin.index = index

        let pos = convertLatLngtoCartesian(lat, lng, radius + 0.01);
        pin.position.set(pos.x, pos.y, pos.z);
    
        context.add(pin);
        intersectObjectsArray.push(pin);
    
        return {pin, color, originalSize, slides};
    }

    for (let i = 0; i < dataSource.length; i++) { 
        let pin = instantiatePin(i, dataSource[i].lat, dataSource[i].lng - 180, dataSource[i].color, dataSource[i].size / 100000, dataSource[i].size, dataSource[i].slides, context);
        pins.push(pin)
    }
}

//GPT optimised
export function createConnections(tagSource, connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, dashed, arrowed) {
    tagSource.forEach((sourceItem, i) => {
        connectionSource.forEach((connection, j) => {
            if (sourceItem.id === connection[0]) {
                connection.slice(1).forEach((targetId, k) => {
                    tagSource.forEach((target, l) => {
                        if (target.id === targetId) {
                            const p1 = convertLatLngtoCartesian(sourceItem.lat, sourceItem.lng - 180, curveMinAltitude);
                            const p2 = convertLatLngtoCartesian(target.lat, target.lng - 180, curveMinAltitude);
                            const weight = (sourceItem.size + target.size) / 2;
                            getCurve(p1, p2, weight, target.lat, target.lng - 180);
                        }
                    });
                });
            }
        });
    });

    function getCurve(p1, p2, weight, lat, lng){
        const v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
        const v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
        const points = Array.from({length: 21}, (_, i) => {
            const p = new THREE.Vector3().lerpVectors(v1, v2, i/20);
            p.normalize();
            p.multiplyScalar(curveMinAltitude + curveMaxAltitude * Math.sin(Math.PI * i / 20));
            return p;
        });

        const path = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(path, 20, curveThickness * weight, curveRadiusSegments, false);

        let material = connectionMaterial;

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
            const img = createImages(arrow, lat, lng, 0.2, curveMinAltitude + 0.01, context);
            const up = new THREE.Vector3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
            up.normalize();
            img.box.up = up;
            img.box.lookAt(v2.x, v2.y, v2.z);
            img.box.renderOrder = -9;
        }

        const curve = new THREE.Mesh(geometry, material);
        curve.renderOrder = -10;
        context.add(curve);
    }
}

//original
export function createConnections(tagSource, connectionSource, curveThickness, curveRadiusSegments, curveMaxAltitude, curveMinAltitude, context, dashed, arrowed) {
    for (let i = 0; i < tagSource.length; i++) {
        for (let j = 0; j < connectionSource.length; j++) {
            if (tagSource[i].id == connectionSource[j][0]) {
                for (let k = 1; k < connectionSource[j].length; k++) {
                    for (let l = 0; l < tagSource.length; l++) {
                        if (tagSource[l].id == connectionSource[j][k]) {
                            let p1 = convertLatLngtoCartesian(tagSource[i].lat, tagSource[i].lng - 180, curveMinAltitude);
                            let p2 = convertLatLngtoCartesian(tagSource[l].lat, tagSource[l].lng - 180, curveMinAltitude);
                            const weight = (tagSource[i].size + tagSource[l].size) / 2;
                            getCurve(p1, p2, weight, tagSource[l].lat, tagSource[l].lng - 180);
                        }
                    }
                }
            }
        }
    }

    function getCurve(p1, p2, weight, lat, lng){
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
        
        const geometry = new THREE.TubeGeometry(path, 20, curveThickness * weight, curveRadiusSegments, false);
        
        let material = connectionMaterial
        
        if (dashed == true) {
            const dashTexture = textureLoader.load(dash)
            const distance = Math.floor(v1.distanceTo(v2) * 25)
            dashTexture.repeat.set(0, distance)
            dashTexture.wrapS = THREE.RepeatWrapping;
            dashTexture.wrapT = THREE.RepeatWrapping;
            dashTexture.rotation = Math.PI / 2
            
            material = new THREE.MeshStandardMaterial({
                color: 0xffffaa,
                transparent: true,
                opacity: 0.6,
                emissive: 0xffffff,
                emissiveIntensity: 0.1,
                alphaMap: dashTexture
            });
        }

        if (arrowed == true) {
            let img = createImages(arrow, lat, lng, 0.2, curveMinAltitude + 0.01, context)
            let up = new THREE.Vector3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z)
            up.normalize()
            img.box.up = up
            img.box.lookAt(v2.x, v2.y, v2.z)
            img.box.renderOrder = -9
        }

        const curve = new THREE.Mesh(geometry, material);
        curve.renderOrder = -10
        context.add(curve);
    }
}

//GPT optimised
export function instantiateNugget(index, lat, lng, color, size, slides, context) {
    const material = pinMaterials[color];

    const nugget = new THREE.Mesh(
        new THREE.SphereGeometry(size * 5, 20, 20),
        material,
    );
    nugget.source = planetNuggetData;
    nugget.index = index;

    const position = convertLatLngtoCartesian(lat, lng, 5 + 0.01);
    nugget.position.set(position.x, position.y, position.z);

    context.add(nugget);
    intersectObjectsArray.push(nugget);

    return {nugget, slides};
}

//original
export function instantiateNugget(index, lat, lng, color, size, slides, context) {
    let material = pinMaterials[color]

    const nugget = new THREE.Mesh(
        new THREE.SphereGeometry(size * 5, 20, 20),
        material,
    )
    nugget.source = planetNuggetData
    nugget.index = index

    let position = convertLatLngtoCartesian(lat, lng, 5 + 0.01);
    nugget.position.set(position.x, position.y, position.z);

/*     let adjusted_lng = lng + 360    // These three lines possibly never utilized
    if (adjusted_lng >= 360) adjusted_lng -= 360   // These three lines possibly never utilized
    let pos = new THREE.Vector2(lat, adjusted_lng)   // These three lines possibly never utilized */

    context.add(nugget);
    intersectObjectsArray.push(nugget);

    return {nugget, slides};  //, pos
}

//GPT optimised
export function hoverPins(intersects) {
    // Unhover
    if (intersects.length === 0) {
        for (const hoveredPin of hoveredPins) {
            if (hoveredPin.source !== planetNuggetData) {
                hoveredPin.material = hoveredPin.material.wireframe ? pinWireframeMaterials[1] : pinMaterials[1];
                if (hoveredPin.scale.x === 1) hoveredPin.scale.multiplyScalar(1.2);
            }

            const source = hoveredPin.source[hoveredPin.index];
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

//original
export function hoverPins(intersects) {
    //unhover
    if (intersects.length == 0) {
        for (let i = 0; i < hoveredPins.length; i++) {
              
            if (hoveredPins[i].source !== planetNuggetData) {
                if (hoveredPins[i].material.wireframe == false) {
                    hoveredPins[i].material = pinMaterials[1]
                } else hoveredPins[i].material = pinWireframeMaterials[1]
                
                if (hoveredPins[i].scale.x == 1) hoveredPins[i].scale.multiplyScalar(1.2)
            }

            if (hoveredPins[i].source[hoveredPins[i].index].slides !== undefined) {
                hoveredPins[i].material = pinMaterials[hoveredPins[i].source[hoveredPins[i].index].color]; 
            } else hoveredPins[i].material = pinWireframeMaterials[hoveredPins[i].source[hoveredPins[i].index].color];
            
            hoveredPins[i].scale.x = 1
            hoveredPins[i].scale.y = 1
            hoveredPins[i].scale.z = 1

            hoveredPins.length = 0  
        }
    }

    //hover
    for (let i = 0; i < intersects.length; i++) {    
        if (hoveredPins.includes(intersects[0].object) == false) hoveredPins.push(intersects[0].object)

        if (intersects[i].object.source !== planetNuggetData) {
            if (intersects[i].object.material.wireframe == false) {
                intersects[i].object.material = pinMaterials[1]
            } else intersects[i].object.material = pinWireframeMaterials[1]
            
            if (intersects[i].object.scale.x == 1) intersects[i].object.scale.multiplyScalar(1.2)
        }
    }
}

//versions.js
//GPT optimised
export function initializeVersion(callback, postLoadingManager) {
    const elements = {
        playButton: document.getElementById("playbutton"),
        credits: document.getElementById("credits"),
        skipButton: document.getElementById("skipbutton"),
        enableVRbutton: document.getElementById("enableVRbutton"),
        keys: document.getElementById("keys"),
        versionButtons: [
            document.getElementById("version1"),
            document.getElementById("version2"),
            document.getElementById("version3"),
            document.getElementById("version4"),
        ],
    };

    const hideButtons = (showVR) => {
        elements.versionButtons.forEach((btn) => (btn.style.display = "none"));
        elements.keys.style.display = "none";
        elements.playButton.style.display = "block";
        elements.skipButton.style.display = "block";
        elements.credits.style.display = "block";
        elements.enableVRbutton.style.display = showVR ? "block" : "none";
    };

    elements.versionButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            hideButtons(index === 2 || index === 3);
            return callback(index + 1, postLoadingManager);
        });
    });
}

//original
export function initializeVersion(callback, postLoadingManager) {
    const playButton = document.getElementById("playbutton")
    const credits = document.getElementById("credits")
    const skipButton = document.getElementById("skipbutton")
    const enableVRbutton = document.getElementById("enableVRbutton")
    const keys = document.getElementById("keys")

    const fullVersionButton = document.getElementById("version1")
    fullVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            version4.style.display = "none";
            keys.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            credits.style.display = "block";
            return callback(1, postLoadingManager)
        })
    const lightVersionButton = document.getElementById("version2")
    lightVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            version4.style.display = "none";
            keys.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            credits.style.display = "block";
            return callback(2, postLoadingManager)
        })
    const developerVersionButton = document.getElementById("version3")
    developerVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            version4.style.display = "none";
            keys.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            enableVRbutton.style.display = "block";
            credits.style.display = "block";
            return callback(3, postLoadingManager)
        })
    const vrVersionButton = document.getElementById("version4")
    vrVersionButton.addEventListener("click", () => {
            version1.style.display = "none";
            version2.style.display = "none";
            version3.style.display = "none";
            version4.style.display = "none";
            keys.style.display = "none";
            playButton.style.display = "block";
            skipButton.style.display = "block";
            enableVRbutton.style.display = "block";
            credits.style.display = "block";
            return callback(4, postLoadingManager)
        })

}

//mathScripts.js
//GPT optimised
export function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomBell(min, max, bias = 7) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-bias * Math.log(u)) * Math.cos(bias * Math.PI * v);
    num = num / 10.0 + 0.5;
    if (num > 1 || num < 0) return getRandomBell(min, max);
    return Math.floor(num * (max - min + 1) + min);
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function convertLatLngtoCartesian(lat, lng, radius) {
    const latRad = (lat * Math.PI / 180);
    const lngRad = (lng * Math.PI / 180) - Math.PI;
    const x = radius * Math.sin(latRad) * Math.sin(lngRad);
    const y = radius * Math.cos(latRad);
    const z = radius * Math.sin(latRad) * Math.cos(lngRad);

    return { x, y, z };
}

export function convertCartesiantoLatLng(x, y, z) {
    const latRad = Math.acos(y / Math.sqrt(x * x + y * y + z * z));
    const lngRad = Math.atan(x / z);

    const lat = (latRad / Math.PI * 180);
    const lng = ((lngRad) / Math.PI * 180) + 180;

    return {
        lat,
        lng: (x <= 0) ? lng - 180 : lng + 180,
    };
}

export function constrainLatLng(lat, lng) {
    if (lat < 0) {
        lat = Math.abs(lat);
        lng = (lng < 180) ? lng + 180 : lng - 180;
    }
    if (lat > 180) {
        lat = 180 - (lat - 180);
        lng = (lng < 180) ? lng + 180 : lng - 180;
    }

    return {
        lat,
        lng: (lng < 0) ? 360 + lng : (lng > 360) ? lng - 360 : lng,
    };
}


//original
export function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomBell(min, max, bias) {
    if (bias === undefined) {
        bias = 7;
      }
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-bias * Math.log(u)) * Math.cos(bias * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return getRandomBell(min, max) // resample between 0 and 1
    num = Math.floor(num * (max - min + 1) + min);
    return num
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function convertLatLngtoCartesian(lat, lng, radius) {
    let latRad = (lat * Math.PI / 180);
    let lngRad = (lng * Math.PI / 180) - Math.PI;

    let x = radius * Math.sin(latRad) * Math.sin(lngRad)
    let y = radius * Math.cos(latRad)
    let z = radius * Math.sin(latRad) * Math.cos(lngRad)

    return {
        x, y, z
    }
}

export function convertCartesiantoLatLng(x, y, z) {
    let latRad = Math.acos(y / (Math.sqrt(Math.pow(z, 2) + Math.pow(x, 2) + Math.pow(y, 2))));
    let lngRad = Math.atan(x / z);

    let zpos = false;
    let xpos = false;
    if (z > 0) {zpos = true}
    if (x > 0) {xpos = true}

    let lat = (latRad / Math.PI * 180);
    let lng = ((lngRad) / Math.PI * 180) + 180;

    if (zpos == false && xpos == false) {lng -= 180}
    if (zpos == false && xpos == true) {lng += 180}

    return {
        lat, lng
    }
}

export function constrainLatLng(lat, lng) {
    if (lat < 0) {
        lat = Math.abs(lat)
        if (lng < 180) {
        lng += 180
        } else lng -= 180

    }
    if (lat > 180) {
        lat = 180 - (lat - 180)
        if (lng < 180) {
            lng += 180
        } else lng -= 180

    }
    if (lng < 0) {lng = 360 + lng}
    if (lng > 360) {lng = lng - 360}

    return {lat, lng}
}

//creation.js
//GPT optimised
//  IMPORT SCRIPTS
import { createJaranius, createContexts, createGutta, initializeLoadingManager } from "./main.js";

//  IMPORT TEXTURES
// ||Diffuse - 
import diffuseTexture8k from "../img/textures/diffuse8kNew.webp";
import diffuseTexture4k from "../img/textures/diffuse4k.webp";
import diffuseTexture2k from "../img/textures/diffuse2k.webp";

// ||Normals - White = high altitude
import normalTexture8k from "../img/textures/normal8k.webp";
import normalTexture2k from "../img/textures/normal2k.webp";
import normalTexture1k from "../img/textures/normal1k.webp";

// ||Roughness - Green (white) = high roughness (green channel)
import roughnessTexture8k from "../img/textures/roughness8k.webp";
import roughnessTexture2k from "../img/textures/roughness2k.webp";
import roughnessTexture1k from "../img/textures/roughness1k.webp";

// ||Clouds
import cloudsTexture4k from "../img/textures/clouds4k.webp";
import cloudsTexture1k from "../img/textures/clouds1k.webp";


export function creation(version, postLoadingManager) {
    initializeLoadingManager(postLoadingManager);

    const textures = {
        1: [diffuseTexture4k, normalTexture2k, roughnessTexture2k, cloudsTexture4k],
        2: [diffuseTexture2k, normalTexture1k, roughnessTexture1k, cloudsTexture1k],
        3: [diffuseTexture8k, normalTexture8k, roughnessTexture8k, cloudsTexture4k],
        4: [diffuseTexture8k, normalTexture8k, roughnessTexture8k, cloudsTexture4k],
    };

    createJaranius(...textures[version]);
    createContexts(version);

    if (version === 1) {
        createGutta(200, 10, version);
    } else if (version === 3) {
        createGutta(400, 25, version);
    }
}


//original
//  IMPORT SCRIPTS
import { createJaranius, createContexts, createGutta, initializeLoadingManager } from "./main.js"

//  IMPORT TEXTURES
    // ||Diffuse - 
import diffuseTexture8k from "../img/textures/diffuse8kNew.webp"
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
    if (version == 1){ //FULL VERSION
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture4k, normalTexture2k, roughnessTexture2k, cloudsTexture4k)
        createContexts(version)
        createGutta(200, 10, version)
    } 
    if (version == 2){ //LIGHT VERSION
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture2k, normalTexture1k, roughnessTexture1k, cloudsTexture1k)
        createContexts(version)
    } 
    if (version == 3){ //DEVELOPER VERSION
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture8k, normalTexture8k, roughnessTexture8k, cloudsTexture4k)
        createContexts(version)
        createGutta(400, 25, version)
    } 
    if (version == 4){ //VR VERSION
        initializeLoadingManager(postLoadingManager)
        createJaranius(diffuseTexture8k, normalTexture8k, roughnessTexture8k, cloudsTexture4k)
        createContexts(version)
        //createGutta(200, 10, version)
    } 
}


//main.js
//original
let gutta
let mara
let species

export function createGutta(numberOfGutta) {
    guttaInitialized = true
    const guttaFlyAltitude = 0.01

    class Gutt {
        constructor(lat, lng, geometry, material, array, line) {
            this.lat = lat;
            this.lng = lng;
            this.material = material;
            this.geometry = geometry;
            this.array = array;

            this.gutt = new THREE.Mesh(this.geometry, this.material)
    
            this.pos = new THREE.Vector2(lat, lng)
            this.velocity = new THREE.Vector2(getRandomNum(0, 0), getRandomNum(0, 1)).setLength(0.001)
            this.acceleration = new THREE.Vector2
            this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5 + guttaFlyAltitude)
            this.presentHeading
            this.originalHeading
    
            this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)

            this.wander = new THREE.Vector2(0, 0)
            this.alignment = new THREE.Vector2(0, 0)
            this.cohesion = new THREE.Vector2(0, 0)
            this.separation = new THREE.Vector2(0, 0)

            this.feed = new THREE.Vector2(0, 0)
            this.avoidance = new THREE.Vector2(0, 0)

            this.hunger = 0

            scene.add(this.gutt)
        }

        move(species, ID) {
            if (this.hunger < 1) this.hunger += 0.0001

            this.originalHeading = Math.atan2(this.velocity.x, this.velocity.y)

            this.acceleration.set(0, 0)
            if (species == "gutt") {
                this.alignment.multiplyScalar(parameters.gutt_alignment)
                this.cohesion.multiplyScalar(parameters.gutt_cohesion)
                this.separation.multiplyScalar(parameters.gutt_separation)
                this.feed.multiplyScalar(parameters.gutt_feed)
            }
            if (species == "mara") {
                this.alignment.multiplyScalar(parameters.mara_alignment)
                this.cohesion.multiplyScalar(parameters.mara_cohesion)
                this.separation.multiplyScalar(parameters.mara_separation)
            }

            this.acceleration.add( this.wander )
            this.acceleration.add( this.alignment )
            this.acceleration.add( this.cohesion )
            this.acceleration.add( this.separation )
            this.acceleration.add( this.feed )

            this.acceleration.add( this.avoidance )

            this.velocity.add(this.acceleration)
            this.velocity.clampLength(-parameters.gutt_max_speed, parameters.gutt_max_speed)

            this.pos.add(this.velocity)
        
            if (this.pos.x < 0) {
                this.pos.x = Math.abs(this.pos.x)
                if (this.pos.y < 180) {
                this.pos.y += 180
                } else this.pos.y -= 180
                this.velocity.x *= -1
                this.velocity.y *= -1
            }
            if (this.pos.x > 180) {
                this.pos.x = 180 - (this.pos.x - 180)
                if (this.pos.y < 180) {
                    this.pos.y += 180
                } else this.pos.y -= 180
                this.velocity.x *= -1
                this.velocity.y *= -1
            }
            if (this.pos.y < 0) {this.pos.y = 360 + this.pos.y}
            if (this.pos.y > 360) {this.pos.y = this.pos.y - 360}
            
            this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5 + guttaFlyAltitude)
            this.cartesianVelocity = convertLatLngtoCartesian(this.velocity.x, this.velocity.y, 5 + guttaFlyAltitude)
            
            this.presentHeading = Math.atan2(this.velocity.x, this.velocity.y)
            
            this.cp = new THREE.Vector3
            this.cp.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)
            this.gutt.lookAt(this.cp)
            this.gutt.rotateZ(this.presentHeading - this.originalHeading)
            this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)
        }

        calculateWander(species) {
             this.wander.set(getRandomNum(-0.005, 0.005), getRandomNum(-0.005, 0.005))
            if (species == "gutt") {
                this.wander.clampLength(-parameters.gutt_max_force * (1 - this.hunger), parameters.gutt_max_force * (1 - this.hunger))
            }
            if (species == "mara") {
                this.wander.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
            }
        }

        calculateAlignment(species) {
            let perception 
            if (species == "gutt") {
                perception = parameters.gutt_alignment_perception_distance
            }
            if (species == "mara") {
                perception = parameters.mara_alignment_perception_distance
            }
            let counter = 0
            this.alignment.set(0, 0)
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] != this && this.gutt.position.distanceTo(this.array[i].gutt.position) < perception) {
                    this.alignment.add(this.array[i].velocity)
                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.alignment.set(this.alignment.x / counter, this.alignment.y / counter)
                this.alignment.sub(this.velocity)
                if (species == "gutt") {
                    this.alignment.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.alignment.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
        }

        calculateCohesion(species) {
            let perception 
            if (species == "gutt") {
                perception = parameters.gutt_cohesion_perception_distance
            }
            if (species == "mara") {
                perception = parameters.mara_cohesion_perception_distance
            }
            let counter = 0
            this.cohesion.set(0, 0)
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] != this && this.gutt.position.distanceTo(this.array[i].gutt.position) < perception) {
                    this.cohesion.add(this.array[i].pos)
                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.cohesion.set(this.cohesion.x / counter, this.cohesion.y / counter)
                this.cohesion.sub(this.pos)
                if (species == "gutt") {
                    this.cohesion.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.cohesion.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
        }

        calculateSeparation(species) {
            let perception 
            if (species == "gutt") {
                perception = parameters.gutt_separation_perception_distance
            }
            if (species == "mara") {
                perception = parameters.mara_separation_perception_distance
            }
            let counter = 0
            this.separation.set(0, 0)
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] != this && this.gutt.position.distanceTo(this.array[i].gutt.position) < perception) {
                    let difference = new THREE.Vector2(this.pos.x - this.array[i].pos.x, this.pos.y - this.array[i].pos.y)
                    difference.divideScalar(this.gutt.position.distanceTo(this.array[i].gutt.position))
                    this.separation.add(difference)
                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.separation.set(this.separation.x / counter, this.separation.y / counter)
                if (species == "gutt") {
                    this.separation.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.separation.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
        }

        calculateFeeding() {
            let counter = 0
            this.feed.set(0, 0)
            for (let i = 0; i < nuggets.length; i++) {
                let nuggetPosition = nuggets[i].nugget.position.clone()
                nuggetPosition.applyMatrix4(jaranius.matrixWorld);

                if (this.gutt.position.distanceTo(nuggetPosition) < parameters.gutt_feed_perception_distance) { 
                    if (this.gutt.position.distanceTo(nuggetPosition) < 0.005) {
                        if (this.hunger > 0.05) {
                            munch += 1
                            totalHungerAtMunch += this.hunger
                            this.hunger -= 0.05
                        }
                    }

                    let nuggetLatLng = convertCartesiantoLatLng(nuggetPosition.x, nuggetPosition.y, nuggetPosition.z)

                    let adjusted_lng = nuggetLatLng.lng + 360
                    if (adjusted_lng >= 360) adjusted_lng -= 360
                    let adjusted_nuggetLatLng = new THREE.Vector2 (nuggetLatLng.lat, adjusted_lng)
            
                    this.feed.add(adjusted_nuggetLatLng)

                    counter += 1
                }
            }
            if (counter > 0 ) {
                this.feed.set(this.feed.x / counter, this.feed.y / counter)
                this.feed.sub(this.pos)
                this.feed.clampLength(-parameters.gutt_max_force * this.hunger, parameters.gutt_max_force * this.hunger)
            }
        }

        calculateTemperature(species) {
            this.avoidance.set(0, 0)
            if (this.pos.x < 40) {
                this.avoidance.set((Math.pow(40 - this.pos.x, 2)) / 100000, 0)
                if (species == "gutt") {
                    this.avoidance.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.avoidance.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
            if (this.pos.x > 140) {
                this.avoidance.set(-(Math.pow(140 - this.pos.x, 2)) / 100000, 0)
                if (species == "gutt") {
                    this.avoidance.clampLength(-parameters.gutt_max_force, parameters.gutt_max_force)
                }
                if (species == "mara") {
                    this.avoidance.clampLength(-parameters.mara_max_force, parameters.mara_max_force)
                }
            }
        }
    }

    gutta = [];
    const guttaScale = 0.0003;

    const guttaShape = new THREE.Shape();
    guttaShape.moveTo(guttaScale * 5,guttaScale * 5 );
    guttaShape.bezierCurveTo(guttaScale * 5,guttaScale * 5,guttaScale * 4, 0, 0, 0 );
    guttaShape.bezierCurveTo(- guttaScale * 6, 0,- guttaScale * 6,guttaScale * 7, - guttaScale * 6,guttaScale * 7 );
    guttaShape.bezierCurveTo(- guttaScale * 6,guttaScale * 11,- guttaScale * 3,guttaScale * 15.4,guttaScale * 5,guttaScale * 19 );
    guttaShape.bezierCurveTo(guttaScale * 12,guttaScale * 15.4,guttaScale * 16,guttaScale * 11,guttaScale * 16,guttaScale * 7 );
    guttaShape.bezierCurveTo(guttaScale * 16,guttaScale * 7,guttaScale * 16, 0,guttaScale * 10, 0 );
    guttaShape.bezierCurveTo(guttaScale * 7, 0,guttaScale * 5,guttaScale * 5,guttaScale * 5,guttaScale * 5 );

    const guttaGeometry = new THREE.ShapeGeometry(guttaShape)
    guttaGeometry.center = (5 * guttaScale, 9.5 * guttaScale, 0)
    guttaGeometry.rotateZ(Math.PI/2)
    guttaGeometry.rotateY(Math.PI/2)

    for (let i = 0; i < numberOfGutta; i++) {
        let lat = getRandomBell(40, 140, 5)
        let lng = getRandomInt(0, 359)

        let guttaMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000, 
            side: DoubleSide,
        })

        gutta.push(new Gutt(lat, lng, guttaGeometry, guttaMaterial, gutta))
    }

    let parameters = {
        gutt_alignment: 0.7,
        gutt_alignment_perception_distance: 0.2,
        gutt_cohesion: 0.6,
        gutt_cohesion_perception_distance: 0.4,
        gutt_separation: 0.6,
        gutt_separation_perception_distance: 0.03,
        gutt_feed: 0.3,
        gutt_feed_perception_distance: 1,
        gutt_max_force: 0.0005,
        gutt_max_speed: 0.01,
    }
}

const guttaStatScreen = document.querySelector('#guttaStatScreen');
const statsDisplay = document.createElement('div');

function refreshStats() {
    statsDisplay.innerHTML = "Number of munches: " + munch + "<br>Average hunger: " + Math.round(totalHungerAtMunch/munch * 100) / 100 + "<br><br>Number of kills: " + kills + "<br>Average hunger: " + Math.round(totalHungerAtKill/kills * 100) / 100
    guttaStatScreen.appendChild(statsDisplay)
}

function render() { 
    if (guttaInitialized == true) {
        species = "gutt"
        let wander
        if ((getRandomNum(0, 1) > 0.95)) {
            wander = true
        } else wander = false
        for (let i = 0; i < gutta.length; i++) {
            if (wander == true) gutta[i].calculateWander(species);
            gutta[i].calculateAlignment(species);
            gutta[i].calculateCohesion(species);
            gutta[i].calculateSeparation(species);
            gutta[i].calculateFeeding();
            gutta[i].calculateTemperature(species);
            gutta[i].move(species, i); 
        }
    }
}


export class Gutt {
    constructor(lat, lng, geometry, material, array, guttaState, scene, parameters) {
        this.lat = lat;
        this.lng = lng;
        this.material = material;
        this.geometry = geometry;
        this.array = array;
        this.guttaState = guttaState;
        this.parameters = parameters;

        this.gutt = new THREE.Mesh(this.geometry, this.material)
        this.guttaFlyAltitude = 0.01

        this.pos = new THREE.Vector2(lat, lng)
        this.velocity = new THREE.Vector2(getRandomNum(0, 0), getRandomNum(0, 1)).setLength(0.001)
        this.acceleration = new THREE.Vector2
        this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5 + this.guttaFlyAltitude)
        this.presentHeading
        this.originalHeading

        this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)

        this.wander = new THREE.Vector2(0, 0)
        this.hunger = 0

        // arrowHelpers
        scene.add(this.arrowWander);

        scene.add(this.gutt)
    }
    move(species, ID) {
        if (this.hunger < 1) this.hunger += 0.0001

        this.originalHeading = Math.atan2(this.velocity.x, this.velocity.y)

        this.acceleration.set(0, 0)

        this.acceleration.add( this.wander )

        this.velocity.add(this.acceleration)
        if (species == "gutt") {
            this.velocity.clampLength(-this.parameters.gutt_max_speed, this.parameters.gutt_max_speed)
        }

        this.pos.add(this.velocity)
    
        if (this.pos.x < 0) {
            this.pos.x = Math.abs(this.pos.x)
            if (this.pos.y < 180) {
            this.pos.y += 180
            } else this.pos.y -= 180
            this.velocity.x *= -1
            this.velocity.y *= -1
        }
        if (this.pos.x > 180) {
            this.pos.x = 180 - (this.pos.x - 180)
            if (this.pos.y < 180) {
                this.pos.y += 180
            } else this.pos.y -= 180
            this.velocity.x *= -1
            this.velocity.y *= -1
        }
        if (this.pos.y < 0) {this.pos.y = 360 + this.pos.y}
        if (this.pos.y > 360) {this.pos.y = this.pos.y - 360}
        
        this.cartesianPosition = convertLatLngtoCartesian(this.pos.x, this.pos.y, 5 + this.guttaFlyAltitude)
        this.cartesianVelocity = convertLatLngtoCartesian(this.velocity.x, this.velocity.y, 5 + this.guttaFlyAltitude)
        
        this.presentHeading = Math.atan2(this.velocity.x, this.velocity.y)
        
        this.cp = new THREE.Vector3
        this.cp.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)
        this.gutt.lookAt(this.cp)
        this.gutt.rotateZ(this.presentHeading - this.originalHeading)
        this.gutt.position.set(this.cartesianPosition.x, this.cartesianPosition.y, this.cartesianPosition.z)
        
        //arrowhelpers
        const wander3D = convertLatLngtoCartesian(this.wander.x + this.pos.x, this.wander.y + this.pos.y, 5 + this.guttaFlyAltitude)

        this.arrowWander.setDirection(wander3D);
        this.arrowWander.setLength(this.wander.length() * arrowScaling * 100);

        this.arrowWander.position.copy(this.cartesianPosition);
    }

    calculateWander(species) {
         this.wander.set(getRandomNum(-0.005, 0.005), getRandomNum(-0.005, 0.005))
        if (species == "gutt") {
            this.wander.clampLength(-this.parameters.gutt_max_force * (1 - this.hunger), this.parameters.gutt_max_force * (1 - this.hunger))
        }
    }
}
