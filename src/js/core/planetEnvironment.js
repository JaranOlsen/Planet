//  Planet environment setup and update helpers
import * as THREE from 'three';
import { Float32BufferAttribute, FrontSide, DoubleSide, Vector2 } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';

import atmosphericLightVertexShader from '../../shaders/atmosphericLightVertex.glsl';
import atmosphericLightFragmentShader from '../../shaders/atmosphericLightFragment.glsl';
import atmosphereVertexShader from '../../shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../../shaders/atmosphereFragment.glsl';
import spiralVertexShader from '../../shaders/spiralVertex.glsl';
import spriralFragmentShader from '../../shaders/spiralFragment.glsl';

import milkyway from '/assets/textures/milkyway4.webp';
import starW from '/assets/textures/starW.webp';
import starR5 from '/assets/textures/starR5.webp';
import starR10 from '/assets/textures/starR10.webp';
import starR15 from '/assets/textures/starR15.webp';
import starR20 from '/assets/textures/starR20.webp';
import starB5 from '/assets/textures/starB5.webp';
import starB10 from '/assets/textures/starB10.webp';
import starB15 from '/assets/textures/starB15.webp';
import starB20 from '/assets/textures/starB20.webp';
import sunTexture from '/assets/textures/sun1k.webp';
import moonTexture from '/assets/textures/moon1k.webp';
import redmoonTexture from '/assets/textures/moonRed1k.webp';
import icemoonTexture from '/assets/textures/moonIce1k.webp';
import dash from '/assets/textures/dash.webp';
import tier from '/assets/textures/tier.webp';

import signModel from '../../models/sign.glb';

import { palette } from '../data/palette.js';
import { createRoute } from '../mindmap.js';
import { createFieldLines } from '../flux.js';

class Moon {
    constructor(radius, texture, z, pivot, intensity) {
        this.radius = radius;
        this.texture = texture;
        this.z = z;
        this.pivot = pivot;
        this.intensity = intensity;
    }
}

export class PlanetEnvironment {
    constructor({ scene, camera, renderer, postLoadingManager, textureLoader, textureLoader2 }) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.postLoadingManager = postLoadingManager;
        this.textureLoader = textureLoader;
        this.textureLoader2 = textureLoader2;

        this.middleOfPlanet = new THREE.Vector3(0, 0, 0);

        this.center = new THREE.Object3D();
        this.scene.add(this.center);

        this.jaraniusCenter = new THREE.Object3D();
        this.center.add(this.jaraniusCenter);

        this.spiralCenter = new THREE.Object3D();
        this.enneaCenter = new THREE.Object3D();
        this.center.add(this.spiralCenter);
        this.center.add(this.enneaCenter);

        this.pivot1 = new THREE.Object3D();
        this.pivot2 = new THREE.Object3D();
        this.pivot3 = new THREE.Object3D();
        this.pivot4 = new THREE.Object3D();

        this.pivot1.rotation.y = Math.PI / 2.5;
        this.pivot1.rotation.x = 0.15;
        this.pivot2.rotation.y = (2 * Math.PI) / 16;
        this.pivot2.rotation.x = 0.22;
        this.pivot3.rotation.y = (2 * Math.PI) / 2;
        this.pivot3.rotation.x = 0.31;
        this.pivot4.rotation.y = (9 * Math.PI) / 6;
        this.pivot4.rotation.x = -0.41;

        this.center.add(this.pivot1);
        this.center.add(this.pivot2);
        this.center.add(this.pivot3);
        this.center.add(this.pivot4);

        this.spiral = new THREE.Object3D();
        this.planetContent = new THREE.Object3D();
        this.jaraniusConnections = new THREE.Object3D();
        this.spiralDynamicsConnections = new THREE.Object3D();
        this.enneagram = new THREE.Object3D();
        this.enneagramConnectionsObj = new THREE.Object3D();

        this.signRotationVector = new THREE.Vector3(
            this.camera.position.x,
            this.camera.position.y,
            this.camera.position.z,
        );

        this.sunObjectWorldPosition = new THREE.Vector3();

        this.jaranius = null;
        this.clouds = null;
        this.atmosphere = null;
        this.atmosphericLight = null;
        this.sign = null;
        this.sunRadiance = null;

        this.spiralActive = false;
        this.enneagramActive = false;
        this.jaraniusInitialized = false;

        this.setupGalaxy();
        this.setupStars();
        this.setupSunAndMoons();
    }

    setupGalaxy() {
        const radius = 1000;
        const segments = 50;
        const geometry = new THREE.SphereGeometry(radius, segments, segments);
        const galaxyDiffuseTexture = this.textureLoader.load(milkyway);
        galaxyDiffuseTexture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({
            map: galaxyDiffuseTexture,
            transparent: false,
            opacity: 1,
            side: THREE.BackSide,
            depthWrite: false,
        });

        this.galaxy = new THREE.Mesh(geometry, material);
        this.galaxy.rotation.set(-Math.PI / 3, 0.1, Math.PI / 2);
        this.galaxy.renderOrder = -1000;

        this.scene.add(this.galaxy);
    }

    setupStars() {
        const starSets = [
            { texture: starW, count: 5000 },
            { texture: starR5, count: 1000 },
            { texture: starR10, count: 500 },
            { texture: starR15, count: 100 },
            { texture: starR20, count: 25 },
            { texture: starB5, count: 1000 },
            { texture: starB10, count: 500 },
            { texture: starB15, count: 100 },
            { texture: starB20, count: 25 },
        ];

        this.stars = starSets.map(({ texture, count }) => {
            const geometry = new THREE.BufferGeometry();
            const vertices = [];
            this.createStarVertices(vertices, count);
            geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

            const material = this.createStarMaterial(texture);
            return new THREE.Points(geometry, material);
        });

        this.scene.add(...this.stars);
    }

    createStarMaterial(texturePath) {
        const material = new THREE.PointsMaterial({
            size: 5,
            map: this.textureLoader.load(texturePath),
            transparent: true,
            fog: false,
            depthWrite: false,
        });
        material.colorSpace = THREE.SRGBColorSpace;
        return material;
    }

    createStarVertices(target, number) {
        for (let i = 0; i < number; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            const star = new THREE.Vector3(x, y, z);
            if (this.middleOfPlanet.distanceTo(star) > 500) {
                target.push(x, y, z);
            }
        }
    }

    setupSunAndMoons() {
        const sunRadius = 5;
        const sunRadianceGeo = new THREE.SphereGeometry(sunRadius, 25, 25);

        const sunDiffuseTexture = this.textureLoader.load(sunTexture);
        sunDiffuseTexture.colorSpace = THREE.SRGBColorSpace;
        const sunMat = new THREE.MeshBasicMaterial({ map: sunDiffuseTexture });

        this.sunRadiance = new THREE.Mesh(sunRadianceGeo, sunMat);
        this.sunRadiance.position.set(0, 0, 490);
        this.pivot4.add(this.sunRadiance);
        this.sunRadiance.castShadow = false;
        this.sunRadiance.renderOrder = 9000;

        const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
        sunLight.position.set(
            this.sunRadiance.position.x,
            this.sunRadiance.position.y,
            this.sunRadiance.position.z - sunRadius * 1.5,
        );
        sunLight.castShadow = true;
        sunLight.shadow.camera.near = 475;
        sunLight.shadow.camera.far = 700;
        sunLight.shadow.mapSize.width = 8192;
        sunLight.shadow.mapSize.height = 8192;
        sunLight.shadow.bias = 0.0001;
        sunLight.shadow.radius = 1;
        this.pivot4.add(sunLight);

        const textureFlare0 = this.textureLoader.load('/Planet/assets/textures/sunflare.webp');
        const textureFlare3 = this.textureLoader.load('/Planet/assets/textures/lensflare.webp');
        const lensflare = new Lensflare();
        lensflare.position.set(0, 0, 0);
        lensflare.addElement(new LensflareElement(textureFlare0, 2560, 0));
        lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
        lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
        lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
        lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));
        lensflare.renderOrder = 10000;
        sunLight.add(lensflare);

        this.sunLight = sunLight;

        const moons = [
            new Moon(1.5, moonTexture, 110, this.pivot1, 0.1),
            new Moon(2.5, redmoonTexture, 190, this.pivot2, 0.05),
            new Moon(1, icemoonTexture, 250, this.pivot3, 0.005),
        ];

        moons.forEach((moon) => {
            const moonDiffuseTexture = this.textureLoader.load(moon.texture);
            moonDiffuseTexture.colorSpace = THREE.SRGBColorSpace;
            const mesh = new THREE.Mesh(
                new THREE.SphereGeometry(moon.radius, 25, 25),
                new THREE.MeshStandardMaterial({
                    map: moonDiffuseTexture,
                    metalness: 0,
                    flatShading: false,
                    side: FrontSide,
                }),
            );

            mesh.position.set(moon.z, 0, 0);
            moon.pivot.add(mesh);
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            const moonlight = new THREE.PointLight(0xffffff, moon.intensity);
            moonlight.position.set(moon.z, 0, 0);
            mesh.add(moonlight);
        });

        this.addSpiralTier();
    }

    addSpiralTier() {
        // Preload dash/tier textures for the spiral tier ring
        const dashAlphaTexture = this.textureLoader.load(dash);
        dashAlphaTexture.repeat.set(0, 100);
        dashAlphaTexture.wrapT = THREE.RepeatWrapping;
        dashAlphaTexture.rotation = Math.PI / 2;

        const dashTexture = this.textureLoader.load(tier);
        dashTexture.repeat.set(1, 100);
        dashTexture.wrapS = THREE.RepeatWrapping;
        dashTexture.wrapT = THREE.RepeatWrapping;
        dashTexture.rotation = Math.PI / 2;
        dashTexture.offset.set(0.5, 0);

        const tierGeo = new THREE.TorusGeometry(6.05, 0.05, 50, 100);
        const tierMat = new THREE.MeshStandardMaterial({
            alphaMap: dashAlphaTexture,
            transparent: true,
            alphaTest: 0.5,
            map: dashTexture,
            emissive: 0xffffff,
            emissiveMap: dashTexture,
            emissiveIntensity: 0.05,
            color: 0xffffff,
            metalness: 1,
            roughness: 0.7,
            depthWrite: true,
        });

        this.tierRing = new THREE.Mesh(tierGeo, tierMat);
        this.tierRing.rotation.x = Math.PI / 2;
        this.tierRing.position.y = 2.34;
        this.spiral.add(this.tierRing);
    }

    createJaranius(diffuseTexture, normalTexture, roughnessTexture, cloudsTexture, cloudsNormal, version) {
        this.jaraniusInitialized = true;
        if (version == '2') this.renderer.shadowMap.enabled = false;
        const jaraniusSegments = 200;

        const jaraniusGeometry = new THREE.SphereGeometry(5, jaraniusSegments, jaraniusSegments);
        jaraniusGeometry.computeBoundingSphere();

        const diffuse = this.textureLoader2.load(diffuseTexture);
        diffuse.colorSpace = THREE.SRGBColorSpace;

        const jaraniusMaterial = new THREE.MeshStandardMaterial({
            map: diffuse,
            normalMap: this.textureLoader2.load(normalTexture),
            roughnessMap: this.textureLoader2.load(roughnessTexture),
            normalScale: new Vector2(5, 5),
            metalness: 0,
            flatShading: false,
            side: FrontSide,
        });

        this.jaranius = new THREE.Mesh(jaraniusGeometry, jaraniusMaterial);
        this.jaranius.name = 'jaranius';
        this.jaraniusCenter.add(this.jaranius);
        this.jaranius.receiveShadow = true;
        this.jaranius.castShadow = true;

        const cloudsDiffuseTexture = this.textureLoader2.load(cloudsTexture);
        cloudsDiffuseTexture.colorSpace = THREE.SRGBColorSpace;
        const cloudsMaterial = new THREE.MeshLambertMaterial({
            map: cloudsDiffuseTexture,
            normalMap: this.textureLoader2.load(cloudsNormal),
            normalScale: new Vector2(0.5, 0.5),
            transparent: true,
            side: DoubleSide,
            opacity: 0.8,
            depthWrite: false,
        });

        this.clouds = new THREE.Mesh(
            new THREE.SphereGeometry(5.04, jaraniusSegments, jaraniusSegments),
            cloudsMaterial,
        );
        this.clouds.receiveShadow = true;
        this.clouds.castShadow = false;
        this.jaranius.add(this.clouds);

        this.atmosphericLight = new THREE.Mesh(
            new THREE.SphereGeometry(5.01, jaraniusSegments, jaraniusSegments),
            new THREE.ShaderMaterial({
                vertexShader: atmosphericLightVertexShader,
                fragmentShader: atmosphericLightFragmentShader,
                blending: THREE.AdditiveBlending,
                uniforms: {
                    baseIntensity: { value: 0.9 },
                    atmosphereStrength: { value: 2.5 },
                    uniformCameraPosition: { value: this.camera.position },
                    planetPosition: { value: new THREE.Vector3(0, 0, 0) },
                    lightPosition: { value: this.sunObjectWorldPosition },
                    closeDistanceThreshold: { value: 7 },
                    standardColor: { value: new THREE.Vector3(0.3, 0.6, 1.0) },
                    sunsetColor: { value: new THREE.Vector3(1.0, 0.4, 0.1) },
                    nightColor: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
                    sunsetMinAngleThreshold: { value: 75 },
                    sunsetMaxAngleThreshold: { value: 102 },
                    nightMaxAngleThreshold: { value: 130 },
                },
            }),
        );
        this.atmosphericLight.position.set(0, 0, 0);
        this.jaranius.add(this.atmosphericLight);

        this.atmosphere = new THREE.Mesh(
            new THREE.SphereGeometry(5.3, 100, 100),
            new THREE.ShaderMaterial({
                vertexShader: atmosphereVertexShader,
                fragmentShader: atmosphereFragmentShader,
                uniforms: {
                    baseIntensity: { value: 0.1 },
                    intensityPower: { value: 1.1 },
                    lightPosition: { value: this.sunObjectWorldPosition },
                    uniformCameraPosition: { value: this.camera.position },
                    planetPosition: { value: new THREE.Vector3(0, 0, 0) },
                    minDistance: { value: 5.0 },
                    maxDistance: { value: 5000.0 },
                    closeDistanceThreshold: { value: 7 },
                    standardColor: { value: new THREE.Vector3(0.3, 0.6, 1.0) },
                    sunsetColor: { value: new THREE.Vector3(1.0, 0.4, 0.1) },
                    nightColor: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
                    sunsetMinAngleThreshold: { value: 75 },
                    sunsetMaxAngleThreshold: { value: 102 },
                    nightMaxAngleThreshold: { value: 130 },
                },
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide,
                transparent: true,
                depthWrite: false,
            }),
        );
        this.atmosphere.position.set(0, 0, 0);
        this.atmosphere.scale.set(1.2, 1.2, 1.2);
        this.jaranius.add(this.atmosphere);

        const jaraniusLight = new THREE.PointLight(0xffffff, 0);
        jaraniusLight.position.set(0, 0, 0);
        this.jaranius.add(jaraniusLight);

        this.sign = new THREE.Object3D();
        this.planetContent.add(this.sign);
        this.sign.position.set(0, -5.05, 0);

        const loader = new GLTFLoader(this.postLoadingManager);
        loader.load(
            signModel,
            (glb) => {
                const model = glb.scene;
                this.sign.add(model);
                model.scale.set(5, 5, 5);
                model.rotation.y += Math.PI / 2;
                model.rotation.x += Math.PI / 3;
                model.traverse((object) => {
                    if (object.isMesh) {
                        object.castShadow = true;
                    }
                });
            },
            undefined,
            (error) => {
                console.log('An error happened', error);
            },
        );

        const route = new THREE.Object3D();
        this.planetContent.add(route);
        const myRoute = [
            { lat: -90, lng: 0 },
            { lat: -64, lng: 120 },
            { lat: -37, lng: 104 },
            { lat: -28, lng: 96 },
            { lat: -20.2, lng: 103 },
            { lat: -20, lng: 111 },
            { lat: -35, lng: 121 },
            { lat: -41, lng: 136 },
            { lat: -31, lng: 155 },
            { lat: -22, lng: 165 },
            { lat: -10, lng: 164 },
            { lat: 5, lng: 140 },
            { lat: 24, lng: 141 },
            { lat: 40, lng: 130 },
        ];
        createRoute(myRoute, 5.01, 0.3, route);

        return this.jaranius;
    }

    createSpiral() {
        this.spiralCenter.add(this.spiral);
        this.spiralActive = true;

        const helixMaxRadius = 7;
        const helixRevolutions = 9;
        const helixPoints = [];
        const jointPoints = [];

        for (let i = 0; i < helixRevolutions; i++) {
            helixPoints[i] = [];
            jointPoints[i] = [];
            for (let t = (2 * Math.PI) * i; t <= (2 * Math.PI) * (i + 1.0000001); t += Math.PI / 128) {
                const radiusModifier = Math.sin(t / (helixRevolutions * 2));
                const helixX = radiusModifier * helixMaxRadius * Math.cos(t);
                const helixZ = radiusModifier * helixMaxRadius * Math.sin(t);
                const helixY = (helixMaxRadius / (helixRevolutions * Math.PI)) * t;

                const point = new THREE.Vector3(helixX, helixY - helixMaxRadius, helixZ);
                helixPoints[i].push(point);

                if (i === 0) {
                    const threshold = (((2 * Math.PI) * (i + 1.0000001) - (2 * Math.PI) * i) * 0.98);
                    if (t > (2 * Math.PI) * i + threshold) jointPoints[i].push(point.clone());
                } else if (i < helixRevolutions) {
                    const startThreshold = (((2 * Math.PI) * (i + 1.0000001) - (2 * Math.PI) * i) * 0.02);
                    const endThreshold = (((2 * Math.PI) * (i + 1.0000001) - (2 * Math.PI) * i) * 0.98);
                    if (t < (2 * Math.PI) * i + startThreshold) jointPoints[i - 1].push(point.clone());
                    if (t > (2 * Math.PI) * i + endThreshold) jointPoints[i].push(point.clone());
                } else {
                    const threshold = (((2 * Math.PI) * (i + 1.0000001) - (2 * Math.PI) * i) * 0.02);
                    if (t < (2 * Math.PI) * i + threshold) jointPoints[i - 1].push(point.clone());
                }
            }

            const helixCurve = new THREE.CatmullRomCurve3(helixPoints[i]);

            const geometry = new THREE.TubeGeometry(helixCurve, 64, 0.01, 10, false);
            geometry.computeBoundingBox();
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    color1: { value: new THREE.Color(palette[40 + i]) },
                    color2: { value: new THREE.Color(palette[40 + i + 1]) },
                    bboxMin: { value: geometry.boundingBox.min },
                    bboxMax: { value: geometry.boundingBox.max },
                },
                vertexShader: spiralVertexShader,
                fragmentShader: spriralFragmentShader,
            });
            const spiralSection = new THREE.Mesh(geometry, material);
            this.spiral.add(spiralSection);

            const geometry2 = new THREE.TubeGeometry(helixCurve, 64, 0.12 - i / 70, 10, false);
            const material2 = new THREE.MeshBasicMaterial({
                color: palette[40 + i],
                transparent: true,
                opacity: 0.6,
                depthWrite: true,
            });
            const spiralSection2 = new THREE.Mesh(geometry2, material2);
            this.spiral.add(spiralSection2);
            this.spiral.rotation.set(0, 0, 0);

            if (i !== 0) {
                const jointCurve = new THREE.CatmullRomCurve3(jointPoints[i - 1]);
                const jointGeometry = new THREE.TubeGeometry(jointCurve, 64, 0.15 - i / 70, 10, false);
                jointGeometry.computeBoundingBox();
                const jointMaterial = new THREE.ShaderMaterial({
                    uniforms: {
                        color1: { value: new THREE.Color(palette[40 + i - 1]) },
                        color2: { value: new THREE.Color(palette[40 + i]) },
                        bboxMin: { value: jointGeometry.boundingBox.min },
                        bboxMax: { value: jointGeometry.boundingBox.max },
                    },
                    vertexShader: spiralVertexShader,
                    fragmentShader: spriralFragmentShader,
                });
                const jointSection = new THREE.Mesh(jointGeometry, jointMaterial);
                this.spiral.add(jointSection);
            }
        }
    }

    removeSpiral() {
        this.spiralActive = false;
        this.spiralCenter.remove(this.spiral);
    }

    toggleSpiral() {
        if (this.spiralActive) {
            this.removeSpiral();
        } else {
            this.createSpiral();
        }
    }

    createEnneagram() {
        this.enneaCenter.add(this.enneagram);
        this.enneagram.add(this.enneagramConnectionsObj);
        this.enneagramActive = true;

        createFieldLines(this.enneagram, 9, 2, 200, true, 0.5, 5.761, 0.5);
        createFieldLines(this.enneagram, 9, 2, 200, true, 0.35, 5.561, 0.35);
        createFieldLines(this.enneagram, 9, 2, 200, true, 0.35, 5.961, 0.35);
        createFieldLines(this.enneagram, 10, 1.2, 200, false, undefined, 0.02);
        createFieldLines(this.enneagram, 15, 1.225, 200, false, undefined, 0.01);
        createFieldLines(this.enneagram, 20, 1.25, 200, false, undefined, 0);
        createFieldLines(this.enneagram, 25, 1.375, 200, false, undefined, 0.01);
        createFieldLines(this.enneagram, 30, 1.5, 200, false, undefined, 0.02);
        createFieldLines(this.enneagram, 40, 1.675, 200, false, undefined, 0.03);
        createFieldLines(this.enneagram, 50, 1.75, 200, false, undefined, 0.04);
        createFieldLines(this.enneagram, 70, 1.875, 200, false, undefined, 0.05);
        createFieldLines(this.enneagram, 90, 2, 200, false, undefined, 0.06);
        createFieldLines(this.enneagram, 70, 2.125, 200, false, undefined, 0.07);
        createFieldLines(this.enneagram, 50, 2.25, 200, false, undefined, 0.08);
        createFieldLines(this.enneagram, 40, 2.375, 200, false, undefined, 0.09);
        createFieldLines(this.enneagram, 30, 2.5, 200, false, undefined, 0.1);
        createFieldLines(this.enneagram, 25, 2.675, 200, false, undefined, 0.11);
        createFieldLines(this.enneagram, 20, 2.75, 200, false, undefined, 0.12);
        createFieldLines(this.enneagram, 15, 2.875, 200, false, undefined, 0.13);
        createFieldLines(this.enneagram, 10, 3, 200, false, undefined, 0.14);
    }

    removeEnneagram() {
        this.enneagramActive = false;
        this.enneaCenter.remove(this.enneagram);
    }

    toggleEnneagram() {
        if (this.enneagramActive) {
            this.removeEnneagram();
        } else {
            this.createEnneagram();
        }
    }

    update({ appStatus, orbitControls, introState }) {
        if (!this.jaraniusInitialized) return;

        if (appStatus !== 'initialising' && appStatus !== 'version-menu' && appStatus !== 'intro-menu' && appStatus !== 'silence') {
            this.center.rotation.y += -0.00001;
            this.pivot1.rotation.y += -0.0003;
            this.pivot2.rotation.y += -0.00003;
            this.pivot3.rotation.y += -0.000009;
            this.pivot4.rotation.y += -0.0001;
            if (this.clouds) this.clouds.rotation.y += 0.00001;
        }

        this.sunObjectWorldPosition = this.sunRadiance?.getWorldPosition(this.sunObjectWorldPosition) || this.sunObjectWorldPosition;

        if (this.atmosphere) {
            const distance = this.camera.position.distanceTo(this.middleOfPlanet) - 8;
            const scaleFactor = Math.max(1.2, 1 + 0.75 * Math.exp(-0.1 * distance));
            this.atmosphere.scale.set(scaleFactor, scaleFactor, scaleFactor);
            this.atmosphere.material.uniforms.lightPosition.value.copy(this.sunObjectWorldPosition);
        }

        if (this.atmosphericLight) {
            this.atmosphericLight.material.uniforms.lightPosition.value.copy(this.sunObjectWorldPosition);
        }

        if (orbitControls) {
            const distanceToCenter = this.camera.position.distanceTo(this.middleOfPlanet);
            orbitControls.rotateSpeed = (distanceToCenter - 5) / distanceToCenter;
            orbitControls.zoomSpeed = (distanceToCenter - 5) / distanceToCenter / 3;
        }

        if (this.sign) {
            this.signRotationVector.set(
                this.camera.position.x,
                this.camera.position.y,
                this.camera.position.z,
            );
            this.signRotationVector.normalize();
            this.sign.lookAt(
                this.signRotationVector.x,
                this.signRotationVector.y,
                this.signRotationVector.z,
            );
        }

        if (introState && introState.started === true && this.camera.position.z > -15 && this.camera.position.z < 15) {
            introState.started = false;
            const titleMesh = this.scene.getObjectByName('title');
            if (titleMesh) this.scene.remove(titleMesh);
            document.body.style.cursor = 'default';
        }
    }

    getDatasetNodes() {
        return {
            planetContent: this.planetContent,
            spiral: this.spiral,
            jaraniusConnections: this.jaraniusConnections,
            spiralDynamicsConnections: this.spiralDynamicsConnections,
            enneagram: this.enneagram,
            enneagramConnectionsObj: this.enneagramConnectionsObj,
        };
    }

    getJaraniusCenter() {
        return this.jaraniusCenter;
    }

    getJaranius() {
        return this.jaranius;
    }

    isJaraniusInitialized() {
        return this.jaraniusInitialized;
    }

    getMiddleOfPlanet() {
        return this.middleOfPlanet;
    }

    getSunWorldPosition() {
        return this.sunObjectWorldPosition;
    }
}
