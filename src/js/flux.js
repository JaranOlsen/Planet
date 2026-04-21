import * as THREE from 'three';
import fluxVertexShader from '../shaders/fluxVertex.glsl'
import fluxFragmentShader from '../shaders/fluxFragment.glsl'

export function createFieldLines(destination, numLines, radius, segments, tube, thickness, rotY = 0, opacity) {
    const group = new THREE.Group();
    for (let i = 0; i < numLines; i++) {
        const phi = i * 2 * Math.PI / numLines;
        const line = createHalfNephroidCurve(radius, segments, tube, thickness, opacity);

        // rotate the line around the x-axis by phi
        line.rotation.x = phi;

        if (line.material.type == "ShaderMaterial") {
            let h = line.rotation.x / (Math.PI * 2) + (rotY - 5.75) / (Math.PI * 2); // hue
            let s = 0.6; // saturation
            let l = 0.3; // lightness

            let color = new THREE.Color();
            color.setHSL(h, s, l);
           
            line.material.uniforms.rotation.value = new THREE.Vector3(color.r, color.g, color.b)
        }

        group.add(line);
    }

    // rotate the entire group 90 degrees around the z-axis
    group.rotation.z = Math.PI / 2;
    
    // rotate the entire group around the y-axis by rotY
    group.rotation.y = rotY;
    
    destination.add(group);
}

function createHalfNephroidCurve(radius, segments, tube, thickness, opacity) {
    const curve = new THREE.Curve();

    curve.getPoint = function(t) {
        const theta = Math.PI * t;
        const x = radius * (3 * Math.cos(theta) - Math.cos(3 * theta));
        const z = radius * (3 * Math.sin(theta) - Math.sin(3 * theta));
        return new THREE.Vector3(x, 0, z);
    };

    let geometry;
    let material;
    let line;
    if (tube == true) {
        geometry = new THREE.TubeGeometry(curve, segments, thickness, 32, false);
        material = new THREE.ShaderMaterial({ 
            vertexShader: fluxVertexShader,
            fragmentShader: fluxFragmentShader,
            uniforms: {
                rotation: { value: new THREE.Vector3(0.0, 1.0, 0,0) },
                opacity: { value: opacity },
            },
            transparent: true,
         });
        line = new THREE.Mesh(geometry, material);
        line.renderOrder = 12;
    } else {
        geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(segments));
        let color = new THREE.Color(Math.random() * 0xffffff);
        material = new THREE.LineBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.25,
        });
        line = new THREE.Line(geometry, material);
    }

    return line;
}



