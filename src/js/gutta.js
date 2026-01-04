import * as THREE from 'three';
import { InstancedMesh, Matrix4 } from 'three';
import { getRandomBell, getRandomInt, getRandomNum, convertLatLngtoCartesian, convertCartesiantoLatLng, angularDistance } from './mathScripts.js'
import { generateRandomSanskritName } from './miscScripts.js'
import { DoubleSide, ExtrudeGeometry } from 'three'
import { GUI } from 'dat.gui'
import { planetTagData } from './data/planetData.js';

// Global or outside function scope
let guttaInstancedMeshes = {};
let maraInstancedMeshes = {};

// InstancedMesh for Gutt crumbs and Mara crumbs:
export let guttCrumbMesh;
export let maraCrumbMesh;

const MAX_CRUMBS = 3000;   // e.g. how many crumbs we allow
let guttCrumbIndex = 0;    // ring buffer index for Gutt crumb mesh
let maraCrumbIndex = 0;    // ring buffer index for Mara crumb mesh
let frameCount = 0;

let debugFrameCount = 0;

// ================================
// Octree Implementation (3D)
// ================================
class OctreeNode {
    constructor(bounds, depth=0, maxDepth=8, maxItems=8) {
        // bounds: { min: {x,y,z}, max: {x,y,z} }
        this.bounds = bounds;
        this.depth = depth;
        this.maxDepth = maxDepth;
        this.maxItems = maxItems;
        this.agents = [];
        this.children = [];
    }

    subdivide() {
        const { min, max } = this.bounds;
        const midX = (min.x + max.x)*0.5;
        const midY = (min.y + max.y)*0.5;
        const midZ = (min.z + max.z)*0.5;

        // 8 children
        const childBounds = [
            { min: {x: min.x, y: min.y, z: min.z}, max: {x: midX, y: midY, z: midZ} },
            { min: {x: midX, y: min.y, z: min.z}, max: {x: max.x, y: midY, z: midZ} },
            { min: {x: min.x, y: midY, z: min.z}, max: {x: midX, y: max.y, z: midZ} },
            { min: {x: midX, y: midY, z: min.z}, max: {x: max.x, y: max.y, z: midZ} },
            { min: {x: min.x, y: min.y, z: midZ}, max: {x: midX, y: midY, z: max.z} },
            { min: {x: midX, y: min.y, z: midZ}, max: {x: max.x, y: midY, z: max.z} },
            { min: {x: min.x, y: midY, z: midZ}, max: {x: midX, y: max.y, z: max.z} },
            { min: {x: midX, y: midY, z: midZ}, max: {x: max.x, y: max.y, z: max.z} }
        ];

        for (let b of childBounds) {
            this.children.push(new OctreeNode(b, this.depth+1, this.maxDepth, this.maxItems));
        }
    }

    insert(agent) {
        // agent.position3D is a THREE.Vector3
        const p = agent.position3D;
        if (!this._inBounds(p)) return false;

        // If no children and not full
        if (this.children.length === 0 && this.agents.length < this.maxItems) {
            this.agents.push(agent);
            return true;
        }

        // If we are at max depth, store here
        if (this.depth === this.maxDepth) {
            this.agents.push(agent);
            return true;
        }

        // If no children, subdivide
        if (this.children.length === 0) {
            this.subdivide();
        }

        // Try inserting into children
        for (let child of this.children) {
            if (child.insert(agent)) return true;
        }

        // If we get here, insert here if necessary
        this.agents.push(agent);
        return true;
    }

    _inBounds(p) {
        return (p.x >= this.bounds.min.x && p.x <= this.bounds.max.x &&
                p.y >= this.bounds.min.y && p.y <= this.bounds.max.y &&
                p.z >= this.bounds.min.z && p.z <= this.bounds.max.z);
    }

    rangeSearch(center, radius, results) {
        // center: {x,y,z}
        // radius: number
        const { min, max } = this.bounds;
        // If bounding box is completely out of range
        if (!this._sphereIntersectBox(center, radius, min, max)) return;
        
        // Check all agents
        const radiusSq = radius * radius;
        for (let a of this.agents) {
            const dx = a.position3D.x - center.x;
            const dy = a.position3D.y - center.y;
            const dz = a.position3D.z - center.z;
            const distSq = dx*dx + dy*dy + dz*dz;
            if (distSq <= radiusSq) {
                results.push(a);
            }
        }

        // Recursively search children
        for (let child of this.children) {
            child.rangeSearch(center, radius, results);
        }
    }

    _sphereIntersectBox(center, radius, boxMin, boxMax) {
        // Find the point on the AABB closest to the sphere center
        let x = Math.max(boxMin.x, Math.min(center.x, boxMax.x));
        let y = Math.max(boxMin.y, Math.min(center.y, boxMax.y));
        let z = Math.max(boxMin.z, Math.min(center.z, boxMax.z));

        let dx = x - center.x;
        let dy = y - center.y;
        let dz = z - center.z;
        return (dx*dx + dy*dy + dz*dz) <= radius*radius;
    }
}

class Octree {
    constructor(agents, maxDepth=8, maxItems=8) {
        // Determine bounds to cover all agents
        // You can set a global bound if your planet radius is known, e.g.:
        // If radius ~5.5 (max altitude), then let's pick a cube that encloses it: -6 to +6
        // Adjust as needed. 
        const BOUND = 6;
        const bounds = {
            min: {x: -BOUND, y: -BOUND, z: -BOUND},
            max: {x: BOUND, y: BOUND, z: BOUND}
        };
        this.root = new OctreeNode(bounds, 0, maxDepth, maxItems);

        // Insert all agents
        for (let a of agents) {
            this.root.insert(a);
        }
    }

    rangeSearch(target, radius, results) {
        const out = results || [];
        out.length = 0;
        this.root.rangeSearch(target, radius, out);
        return out;
    }
}

function createBoxEdges(min, max) {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
        // Bottom square
        min.x, min.y, min.z, max.x, min.y, min.z,
        max.x, min.y, min.z, max.x, min.y, max.z,
        max.x, min.y, max.z, min.x, min.y, max.z,
        min.x, min.y, max.z, min.x, min.y, min.z,
        // Top square
        min.x, max.y, min.z, max.x, max.y, min.z,
        max.x, max.y, min.z, max.x, max.y, max.z,
        max.x, max.y, max.z, min.x, max.y, max.z,
        min.x, max.y, max.z, min.x, max.y, min.z,
        // Vertical lines
        min.x, min.y, min.z, min.x, max.y, min.z,
        max.x, min.y, min.z, max.x, max.y, min.z,
        max.x, min.y, max.z, max.x, max.y, max.z,
        min.x, min.y, max.z, min.x, max.y, max.z
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    return new THREE.LineSegments(geometry, material);
}

function visualizeOctreeNode(node, parent) {
    // Create a box for this node
    const box = createBoxEdges(node.bounds.min, node.bounds.max);
    parent.add(box);

    // If it has children, recurse
    for (let child of node.children) {
        visualizeOctreeNode(child, parent);
    }
}

function visualizeOctree(octree, octreeHelperRoot) {
    // Clear previous visualization
    while (octreeHelperRoot.children.length > 0) {
        let c = octreeHelperRoot.children.pop();
        octreeHelperRoot.remove(c);
        c.geometry && c.geometry.dispose();
        c.material && c.material.dispose();
    }

    // Visualize the root node recursively
    visualizeOctreeNode(octree.root, octreeHelperRoot);
}

// Instance allocation helpers to keep headroom for offspring
const instancePools = { gutt: [], mara: [] };
const GUTT_BASE_COLOR = new THREE.Color(0xcc6655);
const MARA_BASE_COLOR = new THREE.Color(0x333333);
const BASE_VARIATION_BLEND = 0.7;

const INHERITABLE_TRAITS = {
    gutt: [
        'gutt_body_mass',
        'gutt_muscle_power',
        'gutt_wing_area',
        'gutt_energy_efficiency',
        'gutt_vision_acuity',
        'gutt_reaction_time',
        'gutt_risk_tolerance',
        'gutt_alignment_bias',
        'gutt_cohesion_bias',
        'gutt_separation_bias',
        'gutt_wander_bias',
        'gutt_flee_bias',
        'gutt_feed_bias'
    ],
    mara: [
        'mara_body_mass',
        'mara_muscle_power',
        'mara_wing_area',
        'mara_energy_efficiency',
        'mara_vision_acuity',
        'mara_reaction_time',
        'mara_risk_tolerance',
        'mara_alignment_bias',
        'mara_cohesion_bias',
        'mara_separation_bias',
        'mara_wander_bias',
        'mara_hunt_bias'
    ]
};

function clampValue(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function deriveTraitOverrides({ species, parameters, traits }) {
    const prefix = species === "gutt" ? "gutt" : "mara";
    const getGene = (name, fallback = 1) => {
        const key = `${prefix}_${name}`;
        if (traits && traits[key] !== undefined) return traits[key];
        const base = parameters[key];
        return base !== undefined ? base : fallback;
    };

    const mass = getGene('body_mass', 1);
    const muscle = getGene('muscle_power', 1);
    const wing = getGene('wing_area', 1);
    const efficiency = getGene('energy_efficiency', 1);
    const vision = getGene('vision_acuity', 1);
    const reaction = getGene('reaction_time', 1);
    const risk = getGene('risk_tolerance', 1);

    const alignmentBias = getGene('alignment_bias', 1);
    const cohesionBias = getGene('cohesion_bias', 1);
    const separationBias = getGene('separation_bias', 1);
    const wanderBias = getGene('wander_bias', 1);

    const powerToMass = clampValue(muscle / Math.max(0.6, mass), 0.6, 1.6);
    const liftRatio = clampValue(wing / Math.max(0.6, mass), 0.6, 1.6);
    const dragFactor = clampValue(mass / Math.max(0.6, wing), 0.6, 1.6);
    const efficiencyFactor = clampValue(efficiency, 0.7, 1.3);
    const visionFactor = clampValue(vision, 0.7, 1.3);
    const reactionFactor = clampValue(1 + (1 - reaction) * 0.1, 0.85, 1.15);
    const riskFactor = clampValue(risk, 0.8, 1.2);

    const derived = {};
    derived[`${prefix}_max_force`] = parameters[`${prefix}_max_force`] * powerToMass;
    derived[`${prefix}_max_acceleration`] = parameters[`${prefix}_max_acceleration`] * powerToMass;
    derived[`${prefix}_thrust_speed`] = parameters[`${prefix}_thrust_speed`] * Math.sqrt(powerToMass);
    derived[`${prefix}_dive_speed`] = parameters[`${prefix}_dive_speed`] * Math.sqrt(powerToMass) * riskFactor;

    derived.dragCoefficient = parameters.dragCoefficient * dragFactor;
    derived.liftCoefficient = parameters.liftCoefficient * liftRatio;
    derived.liftCost = parameters.liftCost * dragFactor / Math.max(0.6, efficiencyFactor);
    derived.energyRegenRate =
        parameters.energyRegenRate *
        efficiencyFactor /
        (Math.max(0.8, mass) * Math.sqrt(Math.max(0.6, muscle)) * Math.max(0.8, visionFactor));
    derived.maxEnergy = parameters.maxEnergy * efficiencyFactor;

    derived.smoothingFactor = clampValue(parameters.smoothingFactor * reactionFactor, 0.2, 0.98);
    derived.maxRoll = parameters.maxRoll * riskFactor;
    derived.rollMultiplier = parameters.rollMultiplier * riskFactor;

    derived[`${prefix}_alignment`] = parameters[`${prefix}_alignment`] * alignmentBias;
    derived[`${prefix}_cohesion`] = parameters[`${prefix}_cohesion`] * cohesionBias;
    derived[`${prefix}_separation`] = parameters[`${prefix}_separation`] * separationBias;
    derived[`${prefix}_wander`] = parameters[`${prefix}_wander`] * wanderBias;

    derived[`${prefix}_alignment_perception_distance`] =
        parameters[`${prefix}_alignment_perception_distance`] * visionFactor;
    derived[`${prefix}_cohesion_perception_distance`] =
        parameters[`${prefix}_cohesion_perception_distance`] * visionFactor;
    derived[`${prefix}_separation_perception_distance`] =
        parameters[`${prefix}_separation_perception_distance`] * visionFactor;

    if (species === "gutt") {
        const fleeBias = getGene('flee_bias', 1);
        const feedBias = getGene('feed_bias', 1);
        derived.gutt_flee = parameters.gutt_flee * fleeBias;
        derived.gutt_feed = parameters.gutt_feed * feedBias;
        derived.gutt_flee_perception_distance = parameters.gutt_flee_perception_distance * visionFactor;
        derived.gutt_feed_perception_distance = parameters.gutt_feed_perception_distance * visionFactor;
    } else {
        const huntBias = getGene('hunt_bias', 1);
        derived.mara_hunt = parameters.mara_hunt * huntBias;
        derived.mara_hunt_perception_distance = parameters.mara_hunt_perception_distance * visionFactor;
        derived.mara_vision_angle = parameters.mara_vision_angle * visionFactor;
    }

    return derived;
}

function registerInstancePool(species, mesh) {
    mesh.userData.used = 0;
    mesh.userData.freeIndices = [];
    if (!instancePools[species].includes(mesh)) {
        instancePools[species].push(mesh);
    }
}

function allocateInstanceSlot(species) {
    const pool = instancePools[species] || [];
    for (const mesh of pool) {
        const freeIndices = mesh.userData.freeIndices || [];
        if (freeIndices.length > 0) {
            const instanceIndex = freeIndices.pop();
            return { meshRef: mesh, instanceIndex };
        }
        const used = mesh.userData.used || 0;
        if (used < mesh.count) {
            mesh.userData.used = used + 1;
            return { meshRef: mesh, instanceIndex: used };
        }
    }
    return null;
}

function releaseInstanceSlot(mesh, instanceIndex) {
    if (!mesh.userData.freeIndices) {
        mesh.userData.freeIndices = [];
    }
    mesh.userData.freeIndices.push(instanceIndex);
}

function clearInstance(mesh, instanceIndex) {
    const m = new THREE.Matrix4();
    m.compose(new THREE.Vector3(0, 0, 0), new THREE.Quaternion(), new THREE.Vector3(0, 0, 0));
    mesh.setMatrixAt(instanceIndex, m);
    mesh.instanceMatrix.needsUpdate = true;
}

export class Gutt {
    constructor(lat, lng, geometry, meshRef, instanceIndex, array, guttaState, destination, parameters, species, version, ID) {
        this.ID = ID;
        this.geometry = geometry;
        this.meshRef = meshRef;        // The InstancedMesh object this agent belongs to
        this.instanceIndex = instanceIndex; // The index of this instance within the InstancedMesh
        this.array = array;
        this.guttaState = guttaState;
        this.parameters = parameters;
        this.species = species;
        this.version = version;
        this.traits = null;

        const femaleRatio = (species === "gutt" ? this.parameters.gutt_female_ratio : this.parameters.mara_female_ratio) ?? 0.5;
        this.sex = Math.random() < femaleRatio ? "female" : "male";

        // === NEW: add a "mode" property ===
        this.mode = "Exploring";  

        this.nuggetMemories = [];
        
        this.feedingDuration = 15000;   // 15 seconds

        // Lifecycle and reproduction tracking
        this.ageFrames = 0;
        this.gestationFrames = 0;
        this.lastMatedTick = -Infinity;
        this.lastMateAttemptTick = -Infinity;
        this.mateRef = null;
        this.maturityFrames = (species === "gutt" ? this.parameters.gutt_maturity_frames : this.parameters.mara_maturity_frames) ?? 2400;
        this.matingCooldownFrames = (species === "gutt" ? this.parameters.gutt_mate_cooldown_frames : this.parameters.mara_mate_cooldown_frames) ?? 1800;
        this.mateHistory = [];
        this.courtingFrames = 0;
        this.offspringCount = 0;
        this.dead = false;
        this.motherId = null;
        this.fatherId = null;
        this._tempScale = new THREE.Vector3(1, 1, 1);
        this._tempColor = new THREE.Color();
        this._tempHsl = { h: 0, s: 0, l: 0 };
        this._neighborCache = [];
        this._visionCache = [];

        // Random initial position
        const radius = 5.1;

        lat = getRandomNum(-70, 80)
        lng = getRandomNum(-180, 180)
        const GCSposition = convertLatLngtoCartesian(lat, lng, radius)

        this.position3D = new THREE.Vector3(GCSposition.x, GCSposition.y, GCSposition.z);

        this.currentQuaternion = new THREE.Quaternion(); 

        this.velocity3D = new THREE.Vector3(
            getRandomNum(-0.001,0.001),
            getRandomNum(-0.001,0.001),
            getRandomNum(-0.001,0.001)
        );
        this.acceleration3D = new THREE.Vector3();

        this.previousForward = this.velocity3D.clone().normalize();

        this.status = getRandomNum(1, 2)
        this.wander = new THREE.Vector3(0, 0, 0)
        const wanderRadius = this.getTraitParam(`${this.species}_wander_radius`);
        this.wanderTarget = new THREE.Vector3(wanderRadius, 0, 0);
        this.alignment = new THREE.Vector3(0, 0, 0)
        this.cohesion = new THREE.Vector3(0, 0, 0)
        this.separation = new THREE.Vector3(0, 0, 0)
        this.hunt = new THREE.Vector3(0, 0, 0)
        this.flee = new THREE.Vector3(0, 0, 0)
        this.feed = new THREE.Vector3(0, 0, 0)
        this.avoidance = new THREE.Vector3(0, 0, 0)
        this.kinship = new THREE.Vector3(0, 0, 0)
        this.kinAlign = new THREE.Vector3(0, 0, 0)

        this.name = generateRandomSanskritName()
        this.energy = this.getTraitParam('maxEnergy');
        this.hunger = 0.65
        this.munches = 0
        this.kills = 0
        this.closestCall = Infinity
        this.nearestMiss = Infinity

        // Initialize previous forward direction
        if (this.velocity3D.lengthSq() > 0.000001) {
            this.previousForward = this.velocity3D.clone().normalize();
        } else {
            this.previousForward = new THREE.Vector3(0, 0, 1);
        }

        this.applyTraits();
        this.updateInstanceMatrix();
    }

    updateMode() {
        // If we are in "Landing," "Feeding," or "Fleeing," do not override automatically
        if (this.mode === "Landing" || this.mode === "Feeding" || this.mode === "Fleeing" || this.mode === "Gestating" || this.mode === "Courting") {
            return;
        }
    
        // Otherwise, decide "Foraging" or "Exploring" based on hunger
        if (this.hunger > 0.7) {
            this.mode = "Foraging";
        } else {
            this.mode = "Exploring";
        }
    }

    move(guttaStats) {
        // ------------------------------------------------------
        // 1) Decide which forces or behaviors to skip
        // ------------------------------------------------------
        let skipBoundaries = false;
        let skipSeparation = false;
        
        // If landing or feeding, ignore boundary & separation
        if (this.mode === "Landing" || this.mode === "Feeding") {
            skipBoundaries = true;
            skipSeparation = true;
        }
    
        // ------------------------------------------------------
        // 2) Update hunger over time
        // ------------------------------------------------------
        if (this.hunger < 1) {
            this.hunger += 0.0001;
        }
    
        // ------------------------------------------------------
        // 3) Clear acceleration
        // ------------------------------------------------------
        this.acceleration3D.set(0, 0, 0);
    
        // ------------------------------------------------------
        // 4) Apply steering forces (wander, alignment, etc.)
        // ------------------------------------------------------
        this.acceleration3D.add(this.wander);
        this.acceleration3D.add(this.alignment);
        this.acceleration3D.add(this.cohesion);
        this.acceleration3D.add(this.kinship);
        this.acceleration3D.add(this.kinAlign);
    
        if (!skipSeparation) {
            this.acceleration3D.add(this.separation);
        }
    
        this.acceleration3D.add(this.flee);
        this.acceleration3D.add(this.feed);
    
        if (!skipBoundaries) {
            this.acceleration3D.add(this.avoidance);
        }
    
        const flightContext = this._applyAerodynamics({
            maxAcceleration: this.getTraitParam('gutt_max_acceleration')
        });

        // ------------------------------------------------------
        // 8) Handle "Landing" mode
        // ------------------------------------------------------
        if (this.mode === "Landing" && this.targetNugget) {
            // Convert lat/lng to 3D at radius ~5.01
            const { lat, lng } = this.targetNugget;
            const targetPos = convertLatLngtoCartesian(lat, lng, 5.01);
    
            // Approach vector
            const approach = new THREE.Vector3(targetPos.x, targetPos.y, targetPos.z).sub(this.position3D);
            approach.clampLength(0, this.getTraitParam('gutt_max_force'));
            this.acceleration3D.copy(approach);
    
            // Check if close enough or speed is low => switch to feeding
            const distToNugget = this.position3D.distanceTo(
                new THREE.Vector3(targetPos.x, targetPos.y, targetPos.z)
            );
            if (distToNugget < 0.01 || this.velocity3D.length() < 0.0001) {
                this.mode = "Feeding";
                this.munches += 1;
                guttaStats.munch += 1;
                guttaStats.totalHungerAtMunch += this.hunger;
            }
        }
    
        // ------------------------------------------------------
        // 9) Handle "Feeding" mode
        // ------------------------------------------------------
        if (this.mode === "Feeding") {
            // Stop movement
            this.velocity3D.set(0,0,0);
            this.acceleration3D.set(0,0,0);
    
            // Eat => reduce hunger
            this.hunger -= 0.001; // tune rate
            if (this.hunger < 0.1) {
                this.hunger = 0;
            }
    
            // If done feeding, revert to exploring
            if (this.hunger <= 0.1) {
                this.mode = "Exploring";
                if (this.targetNugget) {
                    // Refine lat/lng with Gutta's final position
                    const { lat: gutLat, lng: gutLng } = convertCartesiantoLatLng(
                        this.position3D.x, 
                        this.position3D.y, 
                        this.position3D.z
                    );
                    const alpha = 0.3; 
                    this.targetNugget.lat = THREE.MathUtils.lerp(this.targetNugget.lat, gutLat, alpha);
                    this.targetNugget.lng = THREE.MathUtils.lerp(this.targetNugget.lng, gutLng, alpha);
                    this.targetNugget.visits += 1;
                    this.targetNugget.attractiveness += 0.2;
                }
                this.targetNugget = null;
            }
    
            // Update instance matrix with no motion
            const m = new THREE.Matrix4();
            const scale = this.getVisualScale();
            this._tempScale.setScalar(scale);
            m.compose(this.position3D, this.currentQuaternion, this._tempScale);
            this.meshRef.setMatrixAt(this.instanceIndex, m);
            this.updateInstanceColor();
            this.meshRef.instanceMatrix.needsUpdate = true;

            return; // end early
        }

        this._finalizeFlight({
            speed: flightContext.speed,
            dotUp: flightContext.dotUp,
            thrustSpeed: this.getTraitParam('gutt_thrust_speed'),
            diveSpeed: this.getTraitParam('gutt_dive_speed')
        });

        if (this.mode === "Landing" && this.velocity3D.length() < 0.0001) {
            this.mode = "Feeding";
        }

        // ---------------------------------------------------------
        // DEBUG LOG (print once every 60 frames, only for ID=0)
        // ---------------------------------------------------------
        /* debugFrameCount++;
        if (this.ID === 0 && debugFrameCount % 60 === 0 && this.avoidance.length() > 0) {
            console.log(`%c[Gutta #0] Frame: ${debugFrameCount}`, "color: orange; font-weight: bold;");
            console.log({
                forces: {
                    drag: flightContext.debug.drag.toFixed(8),
                    gravity: flightContext.debug.gravity.toFixed(8),
                    lift: flightContext.debug.lift.toFixed(8),
                    alignment: this.alignment.length().toFixed(8),
                    cohesion: this.cohesion.length().toFixed(8),
                    separation: this.separation.length().toFixed(8),
                    flee: this.flee.length().toFixed(8),
                    feed: this.feed.length().toFixed(8),
                    avoidance: this.avoidance.length().toFixed(8),
                },
                speed: this.velocity3D.length().toFixed(5),
                accel: this.acceleration3D.length().toFixed(5),
                isDiving: flightContext.dotUp < 0,
            });
            console.log("----------------------------------------");
        } */
    }

    glide() {
        // ------------------------------------------------------
        // 1) Update hunger
        // ------------------------------------------------------
        if (this.hunger < 1) {
            this.hunger += 0.00005;
        }
    
        // ------------------------------------------------------
        // 2) Clear acceleration
        // ------------------------------------------------------
        this.acceleration3D.set(0,0,0);
    
        // ------------------------------------------------------
        // 3) Apply steering forces
        // ------------------------------------------------------
        this.acceleration3D.add(this.wander);
        this.acceleration3D.add(this.alignment);
        this.acceleration3D.add(this.cohesion);
        this.acceleration3D.add(this.kinship);
        this.acceleration3D.add(this.kinAlign);
        this.acceleration3D.add(this.separation);
        this.acceleration3D.add(this.hunt);
        this.acceleration3D.add(this.avoidance);
    
        const flightContext = this._applyAerodynamics({
            maxAcceleration: this.getTraitParam('mara_max_acceleration')
        });

        this._finalizeFlight({
            speed: flightContext.speed,
            dotUp: flightContext.dotUp,
            thrustSpeed: this.getTraitParam('mara_thrust_speed'),
            diveSpeed: this.getTraitParam('mara_dive_speed')
        });
    
        // ---------------------------------------------------------
        // DEBUG LOG (print once every 60 frames, only for ID=0)
        // ---------------------------------------------------------
/*         debugFrameCount++;
        if (this.ID === 0 && debugFrameCount % 60 === 0) {
            console.log(`%c[Mara #0] Frame: ${debugFrameCount}`, "color: purple; font-weight: bold;");
            console.log({
                forces: {
                    drag: flightContext.debug.drag.toFixed(8),
                    gravity: flightContext.debug.gravity.toFixed(8),
                    lift: flightContext.debug.lift.toFixed(8),
                    alignment: this.alignment.length().toFixed(8),
                    cohesion: this.cohesion.length().toFixed(8),
                    separation: this.separation.length().toFixed(8),
                    hunt: this.hunt.length().toFixed(8),
                    avoidance: this.avoidance.length().toFixed(8),
                },
                speed: this.velocity3D.length().toFixed(5),
                accel: this.acceleration3D.length().toFixed(5),
                isDiving: flightContext.dotUp < 0,
            });
            console.log("----------------------------------------");
        } */
    }

    calculateWander() {
        const isGutt = (this.species === "gutt");
        
        // Retrieve species-specific parameters
        const prefix = isGutt ? "gutt" : "mara";
        const wanderFactor = this.getTraitParam(`${prefix}_wander`);
        const baseMaxForce = this.getTraitParam(`${prefix}_max_force`);
        const maxForce = isGutt ? baseMaxForce * (1 - this.hunger / 2) : baseMaxForce;

        const wanderRadius = this.getTraitParam(`${prefix}_wander_radius`);
        const wanderDistance = this.getTraitParam(`${prefix}_wander_distance`);
        const wanderJitter = this.getTraitParam(`${prefix}_wander_jitter`);
        const targetAltitude = 5.0 + this.getTraitParam(`${prefix}_wander_altitude`);
    
        // Add jitter to the wanderTarget
        this.wanderTarget.x += (Math.random() * 2 - 1) * wanderJitter;
        this.wanderTarget.y += (Math.random() * 2 - 1) * wanderJitter;
        this.wanderTarget.z += (Math.random() * 2 - 1) * wanderJitter;
    
        // Re-normalize to keep on the circle
        this.wanderTarget.normalize();
        this.wanderTarget.multiplyScalar(wanderRadius);
    
        // Determine forward direction
        let forward = this.velocity3D.clone();
        if (forward.lengthSq() < 0.000001) {
            forward.set(0, 0, 1); // Default forward if stationary
        } else {
            forward.normalize();
        }
    
        // Compute the circle center in front of the agent
        let circleCenter = this.position3D.clone().add(forward.clone().multiplyScalar(wanderDistance));
    
        // Adjust circleCenter altitude toward the target altitude
        const currentRadius = circleCenter.length();
        const scaleFactor = (targetAltitude / currentRadius); // Scale factor to move the point
        circleCenter.multiplyScalar(scaleFactor);
    
        // Add the adjusted wander target to the circle center
        let target = circleCenter.clone().add(this.wanderTarget);
    
        // The wander force
        this.wander.copy(target.sub(this.position3D));
        this.wander.clampLength(-maxForce, maxForce);
        this.wander.multiplyScalar(wanderFactor);
    }

    calculateSteeringForces(octtree) {
        const isGutt = this.species === "gutt";
        const prefix = isGutt ? "gutt" : "mara";

        const alignDist = this.getTraitParam(`${prefix}_alignment_perception_distance`);
        const coheDist = this.getTraitParam(`${prefix}_cohesion_perception_distance`);
        const sepaDist = this.getTraitParam(`${prefix}_separation_perception_distance`);

        // Determine the maximum perception distance among alignment, cohesion, separation
        const maxPerception = Math.max(alignDist, coheDist, sepaDist);

        // Single neighbor search
        let neighbors = octtree.rangeSearch(
            {x:this.position3D.x, y:this.position3D.y, z:this.position3D.z},
            maxPerception,
            this._neighborCache
        );

        // Filter once
        neighbors = this.filterByVisionConeInto(neighbors, this._visionCache);

        // Initialize forces to zero
        this.alignment.set(0,0,0);
        this.cohesion.set(0,0,0);
        this.separation.set(0,0,0);

        // Counters to track how many neighbors contributed to each force
        let alignmentCount = 0;
        let cohesionCount = 0;
        let separationCount = 0;

        // Precompute squared distances
        const alignDistSq = alignDist * alignDist;
        const coheDistSq = coheDist * coheDist;
        const sepaDistSq = sepaDist * sepaDist;

        // Temporary vector to avoid allocations in loop
        const diff = new THREE.Vector3();

        for (let agent of neighbors) {
            if (agent === this) continue;

            // Calculate squared distance
            let dx = agent.position3D.x - this.position3D.x;
            let dy = agent.position3D.y - this.position3D.y;
            let dz = agent.position3D.z - this.position3D.z;
            let distSq = dx*dx + dy*dy + dz*dz;

            // Alignment
            if (distSq < alignDistSq) {
                this.alignment.add(agent.velocity3D);
                alignmentCount++;
            }

            // Cohesion
            if (distSq < coheDistSq) {
                this.cohesion.add(agent.position3D);
                cohesionCount++;
            }

            // Separation
            if (distSq < sepaDistSq && distSq > 0) {
                diff.set(dx, dy, dz);
                // Invert direction for separation: we want to push away
                diff.multiplyScalar(-1 / Math.sqrt(distSq));
                this.separation.add(diff);
                separationCount++;
            }
        }

        const maxF = this.getTraitParam(`${prefix}_max_force`);

        const alignmentWeight = this.getTraitParam(`${prefix}_alignment`);
        const cohesionWeight = this.getTraitParam(`${prefix}_cohesion`);
        const separationWeight = this.getTraitParam(`${prefix}_separation`);

        // Finalize Alignment
        if (alignmentCount > 0) {
            this.alignment.divideScalar(alignmentCount);
            this.alignment.sub(this.velocity3D);
            this.alignment.clampLength(-maxF, maxF);
            this.alignment.multiplyScalar(alignmentWeight);
        }

        // Finalize Cohesion
        if (cohesionCount > 0) {
            this.cohesion.divideScalar(cohesionCount);
            this.cohesion.sub(this.position3D);
            this.cohesion.clampLength(-maxF, maxF);
            this.cohesion.multiplyScalar(cohesionWeight);
        }

        // Finalize Separation
        if (separationCount > 0) {
            this.separation.divideScalar(separationCount);
            this.separation.clampLength(-maxF, maxF);
            this.separation.multiplyScalar(separationWeight);
        }
    }

    calculateKinship(octtree) {
        const prefix = this.species === "gutt" ? "gutt" : "mara";
        const perception = this.parameters[`${prefix}_kinship_perception_distance`] ?? 0;
        const attractWeight = this.parameters[`${prefix}_kinship_attract`] ?? 0;
        const alignWeight = this.parameters[`${prefix}_kinship_align`] ?? 0;
        const juvenileBoost = this.parameters[`${prefix}_kinship_juvenile_boost`] ?? 1;
        const motherBoost = this.parameters[`${prefix}_kinship_mother_boost`] ?? 1;
        const maxF = this.getTraitParam(`${prefix}_max_force`);

        this.kinship.set(0, 0, 0);
        this.kinAlign.set(0, 0, 0);

        if (perception <= 0 || (attractWeight === 0 && alignWeight === 0)) return;

        const neighbors = octtree.rangeSearch(
            { x: this.position3D.x, y: this.position3D.y, z: this.position3D.z },
            perception,
            this._neighborCache
        );

        if (this.motherId !== null && this.ageFrames < this.maturityFrames) {
            const mother = neighbors.find(agent => agent.ID === this.motherId);
            if (!mother) return;

            this.kinship.copy(mother.position3D).sub(this.position3D);
            this.kinship.clampLength(-maxF, maxF);
            this.kinship.multiplyScalar(attractWeight * juvenileBoost);

            this.kinAlign.copy(mother.velocity3D).sub(this.velocity3D);
            this.kinAlign.clampLength(-maxF, maxF);
            this.kinAlign.multiplyScalar(alignWeight * juvenileBoost);
            return;
        }

        let count = 0;
        const sumPos = new THREE.Vector3();
        const sumVel = new THREE.Vector3();
        for (const neighbor of neighbors) {
            if (neighbor === this) continue;
            if (neighbor.motherId !== this.ID) continue;
            if (neighbor.ageFrames >= neighbor.maturityFrames) continue;
            sumPos.add(neighbor.position3D);
            sumVel.add(neighbor.velocity3D);
            count++;
        }
        if (count === 0) return;

        sumPos.divideScalar(count);
        sumVel.divideScalar(count);

        this.kinship.copy(sumPos).sub(this.position3D);
        this.kinship.clampLength(-maxF, maxF);
        this.kinship.multiplyScalar(attractWeight * motherBoost);

        this.kinAlign.copy(sumVel).sub(this.velocity3D);
        this.kinAlign.clampLength(-maxF, maxF);
        this.kinAlign.multiplyScalar(alignWeight * motherBoost);
    }

    calculateHunting(guttaStats, octtree) {
        if (this.species !== "mara") return guttaStats;
        if (this.mode === "Courting" || this.mode === "Gestating") {
            return guttaStats;
        }
        let perception = this.getTraitParam('mara_hunt_perception_distance');
        this.hunt.set(0,0,0)
        let neighbors = octtree.rangeSearch(
            {x:this.position3D.x,y:this.position3D.y,z:this.position3D.z},
            perception,
            this._neighborCache
        );
        neighbors = this.filterByVisionConeInto(neighbors, this._visionCache);
        let counter = 0
        for (let prey of neighbors) {
            if (prey!==this && !prey.dead) {
                let d = this.position3D.distanceTo(prey.position3D)
                if (d < perception) {
                    if (d < 0.04 && this.hunger > 0.5) {
                        guttaStats.kills += 1
                        guttaStats.totalHungerAtKill += this.hunger
                        prey.dead = true;
                        prey.mode = "Dead";
                        this.hunger = 0
                        this.kills += 1
                    }
                    if (prey.dead) {
                        continue;
                    }
                    this.hunt.add(prey.position3D)
                    counter++;
                }
            }
        }
        if (counter > 0) {
            this.hunt.divideScalar(counter)
            this.hunt.sub(this.position3D)
            const maxForce = this.getTraitParam('mara_max_force');
            this.hunt.clampLength(-maxForce * this.hunger, maxForce * this.hunger)
            this.hunt.multiplyScalar(this.getTraitParam('mara_hunt'))
            this.mode = "Hunting";
        } else if (this.mode === "Hunting") {
            this.mode = "Exploring";
        }
        return guttaStats
    }

    calculateFleeing(octtree) {
        if (this.species !== "gutt") return;
    
        let perception = this.getTraitParam('gutt_flee_perception_distance');
        this.flee.set(0,0,0);
    
        let neighbors = octtree.rangeSearch(
            {
                x: this.position3D.x, 
                y: this.position3D.y, 
                z: this.position3D.z
            },
            perception,
            this._neighborCache
        );
    
        let counter = 0;
        let startled = false;
    
        for (let predator of neighbors) {
            if (predator.species === "mara") {
                // It's a Mara
                let d = this.position3D.distanceTo(predator.position3D);
                if (d < perception) {
                    // Flee vector
                    let diff = this.position3D.clone().sub(predator.position3D);
                    diff.divideScalar(d);
                    this.flee.add(diff);
                    startled = true;
                    counter++;
                }
            }
        }
    
        if (counter > 0) {
            this.flee.divideScalar(counter);
            this.flee.clampLength(0, this.getTraitParam('gutt_max_force'));
            this.flee.multiplyScalar(this.getTraitParam('gutt_flee'));
    
            // If we are feeding or landing, break out
            if (this.mode === "Feeding" || this.mode === "Landing") {
                // Decrease attractiveness if we had a targetNugget
                if (this.targetNugget) {
                    this.targetNugget.attractiveness = Math.max(0, this.targetNugget.attractiveness - 0.1);
                    this.targetNugget.visits += 1;
                }
                this.targetNugget = null;
            }

            this.mode = "Fleeing";

        } else if (this.mode === "Fleeing") {
            // If no predators, revert to exploring or foraging based on hunger
            if (this.hunger > 0.7) {
                this.mode = "Foraging";
            } else {
                this.mode = "Exploring";
            }
        }
    }

    calculateFeeding(nuggets) {
        this.feed.set(0,0,0);  // Clear the feed force
        let perception = this.getTraitParam('gutt_feed_perception_distance');
    
        // 1) Loop through visible nuggets
        for (let nug of nuggets) {
            // Transform nugget position to world space
            let nugPos = nug.nugget.position.clone();
            //nugPos.applyMatrix4(jaranius.matrixWorld);
    
            // If within feed perception
            let d = this.position3D.distanceTo(nugPos);
            if (d < perception) {
                // Add or update memory
                let mem = this.addOrUpdateNuggetMemory(nugPos);
                // If fairly close, refine lat/lng in memory
                if (d < 0.2) {
                    const { lat: nugLat, lng: nugLng } = convertCartesiantoLatLng(
                        nugPos.x, nugPos.y, nugPos.z
                    );
                    mem.lat = THREE.MathUtils.lerp(mem.lat, nugLat, 0.1);
                    mem.lng = THREE.MathUtils.lerp(mem.lng, nugLng, 0.1);
                }
            }
        }
    
        // 2) Steering force if "Foraging"
        if (this.mode === "Foraging") {
            let bestNug = null;
            let bestScore = -Infinity;
    
            // Pick best from memory
            for (let mem of this.nuggetMemories) {
                const memPos = convertLatLngtoCartesian(mem.lat, mem.lng, 5.0);
                const dist = this.position3D.distanceTo(memPos);
                const score = mem.attractiveness / Math.max(0.001, dist);
                if (score > bestScore) {
                    bestScore = score;
                    bestNug = mem;
                }
            }
    
            if (bestNug) {
                // Steer toward bestNug
                const { lat, lng } = bestNug;
                const bestNugPos = convertLatLngtoCartesian(lat, lng, 5.0);
                const bestNugPosVec = new THREE.Vector3(
                    bestNugPos.x,
                    bestNugPos.y,
                    bestNugPos.z
                );
                let desired = bestNugPosVec.clone().sub(this.position3D);
                desired.clampLength(0, this.getTraitParam('gutt_max_force'));
                this.feed.copy(desired).multiplyScalar(this.getTraitParam('gutt_feed'));
    
                // Check if close enough to land
                const dist = this.position3D.distanceTo(bestNugPosVec);
                if (dist < 0.1) {
                    this.mode = "Landing";
                    this.targetNugget = bestNug;  // The memory object
                }
            }
        }

    }

    calculateAvoidance() {
        this.avoidance.set(0,0,0);

        const currentRadius = this.position3D.length();
        const lowerLimit = this.parameters.altitudeLowerLimit;
        const upperLimit = this.parameters.altitudeUpperLimit;
        let boundaryForce = this.parameters.boundaryForceStrength;
        const lookaheadFactor = this.parameters.lookaheadFactor ?? 2.0;
        const altitudeBuffer = this.parameters.altitudeBuffer ?? 0.2;
        const buffer = altitudeBuffer;
        const upperBuffer = this.parameters.altitudeBuffer !== undefined ? altitudeBuffer * 3 : 20.0;
        const anticipatoryMultiplier = this.parameters.anticipatoryMultiplier ?? 2.0;
    
        // Compute future position to anticipate boundary violations
        const velocityNormalized = this.velocity3D.clone().normalize();
        const lookaheadDistance = this.velocity3D.length() * lookaheadFactor;
        const futurePosition = this.position3D.clone().add(velocityNormalized.clone().multiplyScalar(lookaheadDistance));
        const futureRadius = futurePosition.length();
    
        // Convert current and future positions to lat/lng for latitude checks
        const { lat, lng } = convertCartesiantoLatLng(this.position3D.x, this.position3D.y, this.position3D.z);
        const futureLatLng = convertCartesiantoLatLng(futurePosition.x, futurePosition.y, futurePosition.z);
        const futureLat = futureLatLng.lat;
    
        const latLower = this.parameters.latitudeLowerLimit;
        const latUpper = this.parameters.latitudeUpperLimit;
    
        // --- Altitude Avoidance ---
        // Hard upper limit
        if (currentRadius > upperLimit) {
            const penetration = currentRadius - upperLimit;
            const forceDir = this.position3D.clone().normalize().multiplyScalar(-1);
            this.avoidance.add(forceDir.multiplyScalar(penetration * boundaryForce * 100));
        }

        // Anticipatory avoidance for approaching upper altitude boundary
        if (futureRadius > (upperLimit - upperBuffer)) {
            const penetration = futureRadius - (upperLimit - upperBuffer);
            const steeringForceDir = futurePosition.clone().normalize().multiplyScalar(-1); // direction inward
            this.avoidance.add(steeringForceDir.multiplyScalar(penetration * boundaryForce * anticipatoryMultiplier));
        }

        // Anticipatory avoidance for approaching lower altitude boundary
        if (futureRadius < (lowerLimit + buffer)) {
            const penetration = (lowerLimit + buffer) - futureRadius;
            const steeringForceDir = futurePosition.clone().normalize(); // direction outward
            this.avoidance.add(steeringForceDir.multiplyScalar(penetration * boundaryForce * 10 * anticipatoryMultiplier));
        }
    
        // Hard lower limit
        if (currentRadius < lowerLimit) {
            const penetration = lowerLimit - currentRadius;
            const forceDir = this.position3D.clone().normalize();
            this.avoidance.add(forceDir.multiplyScalar(penetration * boundaryForce * 1000));
        }
    
        // --- Latitude Avoidance ---
        // If we're outside the allowed latitude range, or about to be:
        // Determine a desired latitude within the range
        let desiredLat = null;
    
        // Hard limit check
        if (lat < latLower) desiredLat = latLower;
        if (lat > latUpper) {
            desiredLat = latUpper;
            boundaryForce = boundaryForce * 100
        }
    
        // Anticipation check
        if (desiredLat === null) {
            if (futureLat < latLower) desiredLat = latLower;
            if (futureLat > latUpper) {
                desiredLat = latUpper;
                boundaryForce = boundaryForce * 100
            }
        }
    
        if (desiredLat !== null) {
            // Compute a desired position on the sphere at the allowed latitude, same radius and current longitude
            const desiredPos = convertLatLngtoCartesian(desiredLat, lng, currentRadius);
            const desiredPosVector = new THREE.Vector3(desiredPos.x, desiredPos.y, desiredPos.z)
            let latDiff = desiredPosVector.clone().sub(this.position3D);
    
            // The magnitude of this force can scale with how far outside the limit we are
            const latPenetration = (lat < latLower) ? (latLower - lat) :
                                    (lat > latUpper) ? (lat - latUpper) :
                                    (futureLat < latLower) ? (latLower - futureLat) :
                                    (futureLat > latUpper) ? (futureLat - latUpper) : 0;
    
            // Apply a force proportional to how far we are from the allowed zone
            this.avoidance.add(latDiff.normalize().multiplyScalar(latPenetration * boundaryForce * anticipatoryMultiplier));
        }
    }

    _applyAerodynamics({ maxAcceleration }) {
        if (this.acceleration3D.length() > maxAcceleration) {
            this.acceleration3D.setLength(maxAcceleration);
        }

        const speed = this.velocity3D.length();

        const dragForce = new THREE.Vector3();
        if (speed > 0) {
            dragForce.copy(this.velocity3D).normalize().multiplyScalar(-1);
        }
        const dragMagnitude = this.getTraitParam('dragCoefficient') * speed * speed;
        dragForce.multiplyScalar(dragMagnitude);
        this.acceleration3D.add(dragForce);

        const planetNormal = this.position3D.clone().normalize();
        const gravityForce = planetNormal.clone().multiplyScalar(-this.parameters.gravityStrength);
        this.acceleration3D.add(gravityForce);

        let forward = this.velocity3D.clone();
        if (forward.lengthSq() < 0.000001) {
            forward.set(0,0,1);
        } else {
            forward.normalize();
        }

        const dotUp = forward.dot(planetNormal);

        const liftVector = new THREE.Vector3();
        if (dotUp > 0 && this.energy > 0) {
            const climbForce = dotUp * this.getTraitParam('liftCoefficient');
            const actualLift = climbForce * this.energy;
            liftVector.copy(planetNormal).multiplyScalar(actualLift);
            this.acceleration3D.add(liftVector);

            const energyUsed = actualLift * this.getTraitParam('liftCost');
            this.energy = Math.max(0, this.energy - energyUsed);
        }

        return {
            speed,
            dotUp,
            debug: {
                drag: dragForce.length(),
                gravity: gravityForce.length(),
                lift: liftVector.length()
            }
        };
    }

    _finalizeFlight({ speed, dotUp, thrustSpeed, diveSpeed }) {
        this.velocity3D.add(this.acceleration3D);

        const diving = dotUp < 0;

        if (!diving) {
            if (speed > thrustSpeed) {
                const clampStrength = 0.1;
                const newSpeed = THREE.MathUtils.lerp(speed, thrustSpeed, clampStrength);
                this.velocity3D.setLength(newSpeed);
            }
        } else {
            if (speed > diveSpeed) {
                const clampStrength = 0.01;
                const newSpeed = THREE.MathUtils.lerp(speed, diveSpeed, clampStrength);
                this.velocity3D.setLength(newSpeed);
            }
        }

        this.position3D.add(this.velocity3D);

        let forward = this.velocity3D.clone();
        if (forward.lengthSq() < 0.000001) {
            forward.set(0,0,1);
        } else {
            forward.normalize();
        }

        let planetNormal = this.position3D.clone().normalize();

        let right = new THREE.Vector3().crossVectors(planetNormal, forward).normalize();
        if (right.lengthSq() < 0.000001) {
            right.set(1,0,0);
        }
        let up = new THREE.Vector3().crossVectors(forward, right).normalize();

        const rotationMatrix = new THREE.Matrix4();
        rotationMatrix.makeBasis(right, up, forward);

        let desiredQuaternion = new THREE.Quaternion().setFromRotationMatrix(rotationMatrix);
        this.currentQuaternion.slerp(desiredQuaternion, this.getTraitParam('smoothingFactor'));

        const deltaForward = forward.clone().sub(this.previousForward).normalize();
        let turnAngle = Math.asin(Math.min(1, deltaForward.length() / 2));
        const maxRollRad = THREE.MathUtils.degToRad(this.getTraitParam('maxRoll'));
        let rollAngle = THREE.MathUtils.clamp(
            turnAngle * this.getTraitParam('rollMultiplier'),
            -maxRollRad,
            maxRollRad
        );
        let qRoll = new THREE.Quaternion().setFromAxisAngle(forward, rollAngle);
        this.currentQuaternion.multiply(qRoll);

        if (this.species === "gutt") {
            const flapMinDeg = this.getTraitParam('gutt_flap_roll_min_deg');
            const flapMaxDeg = this.getTraitParam('gutt_flap_roll_max_deg');
            const flapSpeed = this.getTraitParam('gutt_flap_speed');
            const climbStart = this.getTraitParam('gutt_flap_climb_start');
            const climbFull = this.getTraitParam('gutt_flap_climb_full');
            if (flapMaxDeg > 0 && flapSpeed > 0 && climbFull > climbStart) {
                const climbRate = this.velocity3D.dot(planetNormal);
                if (climbRate > climbStart) {
                    const climbFactor = THREE.MathUtils.clamp(
                        (climbRate - climbStart) / (climbFull - climbStart),
                        0,
                        1
                    );
                    const tick = this.guttaState?.tick ?? 0;
                    const slowWave = 0.5 + 0.5 * Math.sin(tick * flapSpeed * 0.5);
                    const flapAmplitude = THREE.MathUtils.lerp(flapMinDeg, flapMaxDeg, slowWave);
                    const flapAngle = Math.sin(tick * flapSpeed) *
                        THREE.MathUtils.degToRad(flapAmplitude) *
                        climbFactor;
                    const qFlap = new THREE.Quaternion().setFromAxisAngle(forward, flapAngle);
                    this.currentQuaternion.multiply(qFlap);
                }
            }
        }

        this.previousForward.copy(forward);

        const mat = new THREE.Matrix4();
        const scale = this.getVisualScale();
        this._tempScale.setScalar(scale);
        mat.compose(this.position3D, this.currentQuaternion, this._tempScale);
        this.meshRef.setMatrixAt(this.instanceIndex, mat);
        this.updateInstanceColor();
        this.meshRef.instanceMatrix.needsUpdate = true;

        const hungerFactor = (1 - this.hunger);
        const regen = hungerFactor * this.getTraitParam('energyRegenRate');
        const maxEnergy = this.getTraitParam('maxEnergy');
        this.energy = Math.min(maxEnergy, this.energy + regen);
    }

    updateInstanceMatrix() {
        // Compute a matrix from position and orientation
        const m = new THREE.Matrix4();
        const q = new THREE.Quaternion();
        // Orientation is computed in move(). Here we simply set position and orientation:
        // At initialization, just set a default orientation.
        q.setFromEuler(new THREE.Euler(0,0,0));
        const scale = this.getVisualScale();
        this._tempScale.setScalar(scale);
        m.compose(this.position3D, q, this._tempScale);

        this.meshRef.setMatrixAt(this.instanceIndex, m);
        this.updateInstanceColor();
        this.meshRef.instanceMatrix.needsUpdate = true;
    }

    getTraitParam(name, fallback = 0) {
        if (this.traits && this.traits[name] !== undefined) {
            return this.traits[name];
        }
        const value = this.parameters[name];
        return value !== undefined ? value : fallback;
    }

    applyTraits(traits) {
        const geneTraits = traits || this.traits || {};
        const derived = deriveTraitOverrides({
            species: this.species,
            parameters: this.parameters,
            traits: geneTraits
        });
        this.traits = { ...geneTraits, ...derived };

        const wanderRadius = this.getTraitParam(`${this.species}_wander_radius`);
        this.wanderTarget.set(wanderRadius, 0, 0);
        const maxEnergy = this.getTraitParam('maxEnergy');
        if (this.energy > maxEnergy) {
            this.energy = maxEnergy;
        }
    }

    getVisualScale() {
        const juvenileScale = 0.1;
        const adultScale = 1.0;
        const oldAgeScale = 0.85;
        const maturityFactor = this.maturityFrames > 0
            ? THREE.MathUtils.clamp(this.ageFrames / this.maturityFrames, 0, 1)
            : 1;
        let scale = THREE.MathUtils.lerp(juvenileScale, adultScale, maturityFactor);

        const prefix = this.species === "gutt" ? "gutt" : "mara";
        const oldAgeStart = this.parameters[`${prefix}_old_age_start_frames`];
        const maxAge = this.parameters[`${prefix}_max_age_frames`];
        if (oldAgeStart !== undefined && maxAge !== undefined && maxAge > oldAgeStart && this.ageFrames > oldAgeStart) {
            const oldAgeFactor = THREE.MathUtils.clamp(
                (this.ageFrames - oldAgeStart) / (maxAge - oldAgeStart),
                0,
                1
            );
            scale = THREE.MathUtils.lerp(scale, oldAgeScale, oldAgeFactor);
        }

        if (this.sex === "female" && this.gestationFrames > 0) {
            const tick = this.guttaState?.tick ?? 0;
            const pulse = 0.04 * (1 + Math.sin(tick * 0.2)) * 0.5;
            scale *= (1 + pulse);
        }

        return scale;
    }

    getVisualColor() {
        const baseColor = this.meshRef.userData.baseColor;
        if (!baseColor) {
            return null;
        }

        const color = this._tempColor.copy(baseColor);
        const speciesBase = this.species === "mara" ? MARA_BASE_COLOR : GUTT_BASE_COLOR;
        color.lerp(speciesBase, BASE_VARIATION_BLEND);
        color.getHSL(this._tempHsl);

        const maturityFactor = this.maturityFrames > 0
            ? THREE.MathUtils.clamp(this.ageFrames / this.maturityFrames, 0, 1)
            : 1;
        this._tempHsl.s *= 0.4 + 0.6 * maturityFactor;
        this._tempHsl.l *= 0.6 + 0.4 * maturityFactor;

        if (this.species === "mara") {
            if (this.sex === "male") {
                this._tempHsl.s *= 0.85;
                this._tempHsl.l *= 0.6;
            } else if (this.sex === "female") {
                this._tempHsl.s *= 1.1;
                this._tempHsl.l *= 1.35;
            }
        } else {
            if (this.sex === "male") {
                this._tempHsl.s *= 1.4;
                this._tempHsl.l *= 1.1;
            } else if (this.sex === "female") {
                this._tempHsl.s *= 0.6;
                this._tempHsl.l *= 0.9;
            }
        }

        const prefix = this.species === "gutt" ? "gutt" : "mara";
        const oldAgeStart = this.parameters[`${prefix}_old_age_start_frames`];
        const maxAge = this.parameters[`${prefix}_max_age_frames`];
        if (oldAgeStart !== undefined && maxAge !== undefined && maxAge > oldAgeStart && this.ageFrames > oldAgeStart) {
            const oldAgeFactor = THREE.MathUtils.clamp(
                (this.ageFrames - oldAgeStart) / (maxAge - oldAgeStart),
                0,
                1
            );
            this._tempHsl.s *= (1 - 0.25 * oldAgeFactor);
            this._tempHsl.l *= (1 - 0.15 * oldAgeFactor);
        }

        if (this.sex === "female" && this.gestationFrames > 0) {
            const tick = this.guttaState?.tick ?? 0;
            const pulse = 0.5 + 0.5 * Math.sin(tick * 0.2);
            const targetHue = this.species === "mara" ? 0.04 : 0.78;
            this._tempHsl.h = targetHue;
            this._tempHsl.s = THREE.MathUtils.lerp(this._tempHsl.s, 0.8, 0.5);
            this._tempHsl.l = THREE.MathUtils.lerp(this._tempHsl.l, 0.65, 0.5) + 0.08 * pulse;
        }

        this._tempHsl.s = THREE.MathUtils.clamp(this._tempHsl.s, 0, 1);
        this._tempHsl.l = THREE.MathUtils.clamp(this._tempHsl.l, 0, 1);
        color.setHSL(this._tempHsl.h, this._tempHsl.s, this._tempHsl.l);
        return color;
    }

    updateInstanceColor() {
        const color = this.getVisualColor();
        if (!color) return;
        this.meshRef.setColorAt(this.instanceIndex, color);
        if (this.meshRef.instanceColor) {
            this.meshRef.instanceColor.needsUpdate = true;
        }
    }

    applyAging() {
        const prefix = this.species === "gutt" ? "gutt" : "mara";
        const oldAgeStart = this.parameters[`${prefix}_old_age_start_frames`];
        const maxAge = this.parameters[`${prefix}_max_age_frames`];
        if (oldAgeStart === undefined || maxAge === undefined) return;
        if (maxAge <= oldAgeStart || this.ageFrames < oldAgeStart) return;

        const ageFactor = THREE.MathUtils.clamp(
            (this.ageFrames - oldAgeStart) / (maxAge - oldAgeStart),
            0,
            1
        );
        const hungerRate = this.parameters[`${prefix}_old_age_hunger_rate`] ?? 0;
        const energyDrain = this.parameters[`${prefix}_old_age_energy_drain`] ?? 0;

        if (hungerRate > 0) {
            this.hunger = Math.min(1, this.hunger + hungerRate * ageFactor);
        }
        if (energyDrain > 0) {
            this.energy = Math.max(0, this.energy - energyDrain * ageFactor);
        }
    }

    syncLifecycleParameters() {
        const prefix = this.species === "gutt" ? "gutt" : "mara";
        const maturityFrames = this.parameters[`${prefix}_maturity_frames`];
        const cooldownFrames = this.parameters[`${prefix}_mate_cooldown_frames`];
        const gestationFrames = this.parameters[`${prefix}_gestation_frames`];

        if (maturityFrames !== undefined) {
            this.maturityFrames = maturityFrames;
        }
        if (cooldownFrames !== undefined) {
            this.matingCooldownFrames = cooldownFrames;
        }
        if (gestationFrames !== undefined && this.gestationFrames > gestationFrames) {
            this.gestationFrames = gestationFrames;
        }
    }

    filterByVisionCone(neighbors) {
        return this.filterByVisionConeInto(neighbors, null);
    }

    filterByVisionConeInto(neighbors, output) {
        if (this.species !== "mara") return neighbors;
        const forward = this.velocity3D.clone();
        if (forward.lengthSq() < 1e-6) {
            forward.copy(this.previousForward);
        }
        forward.normalize();
        const halfAngle = ((this.getTraitParam('mara_vision_angle', 45)) * Math.PI/180);
        const out = output || [];
        out.length = 0;
        for (const agent of neighbors) {
            if (agent === this) continue;
            const dir = agent.position3D.clone().sub(this.position3D).normalize();
            const angle = forward.angleTo(dir);
            if (angle < halfAngle) {
                out.push(agent);
            }
        }
        return out;
    }

    advanceLifeCycle() {
        this.ageFrames += 1;
        if (this.courtingFrames > 0) {
            this.courtingFrames -= 1;
            if (this.courtingFrames === 0 && this.mode === "Courting") {
                this.mode = "Exploring";
            }
        }
        let readyToBirth = false;
        if (this.gestationFrames > 0) {
            this.gestationFrames -= 1;
            if (this.gestationFrames === 0) {
                this.mode = "Exploring";
                readyToBirth = true;
            }
        }
        this.applyAging();
        const prefix = this.species === "gutt" ? "gutt" : "mara";
        const maxAge = this.parameters[`${prefix}_max_age_frames`];
        if (maxAge !== undefined && this.ageFrames >= maxAge) {
            this.dead = true;
        }
        return readyToBirth;
    }

    canMate(tick) {
        if (!this.parameters.reproductionEnabled) return false;
        if (this.mode === "Courting") return false;
        const prefix = this.species === "gutt" ? "gutt" : "mara";
        const minEnergy = this.parameters[`${prefix}_min_energy_to_mate`] ?? 0.3;
        const maxHunger = this.parameters[`${prefix}_max_hunger_to_mate`] ?? 0.75;
        const attemptCooldown = this.parameters[`${prefix}_mate_attempt_cooldown_frames`] ?? 60;
        if (this.energy < minEnergy || this.hunger > maxHunger) return false;
        if (this.gestationFrames > 0) return false;
        if (this.ageFrames < this.maturityFrames) return false;
        if (tick - this.lastMateAttemptTick < attemptCooldown) return false;
        return tick - this.lastMatedTick >= this.matingCooldownFrames;
    }

    applyMatingCosts({ applyCost = true } = {}) {
        const prefix = this.species === "gutt" ? "gutt" : "mara";
        const cost = this.parameters[`${prefix}_mating_cost`] ?? 0.1;
        if (applyCost) {
            this.energy = Math.max(0, this.energy - cost);
            this.hunger = Math.min(1, this.hunger + cost);
        }
        this.courtingFrames = this.parameters[`${prefix}_courting_frames`] ?? 120;
        this.mode = "Courting";
    }

    startGestation(tick) {
        const prefix = this.species === "gutt" ? "gutt" : "mara";
        this.gestationFrames = this.parameters[`${prefix}_gestation_frames`] ?? 600;
        this.lastMatedTick = tick;
        this.courtingFrames = 0;
        this.mode = "Gestating";
    }

    addOrUpdateNuggetMemory(newPos) {
        // Convert XYZ to lat/lng
        const { lat, lng } = convertCartesiantoLatLng(newPos.x, newPos.y, newPos.z);
    
        const threshold = 0.3; // how close in deg lat/lng to consider it the same nugget
                               // you can tweak this: 0.3 degrees is ~33km at equator, or pick smaller
    
        let found = null;
    
        for (let mem of this.nuggetMemories) {
            // measure approximate distance in lat/lng
            const dLat = mem.lat - lat;
            const dLng = mem.lng - lng;
            const distDeg = Math.sqrt(dLat * dLat + dLng * dLng);
            if (distDeg < threshold) {
                found = mem;
                break;
            }
        }
    
        if (!found) {
            // Create new memory
            const newMem = {
                lat: lat,
                lng: lng,
                attractiveness: 1.0,
                visits: 0
            };
            this.nuggetMemories.push(newMem);
            return newMem;
        } else {
            // We won't refine lat/lng here yet; we'll do so after feeding or on repeated sightings
            return found;
        }
    }
}

function getExampleAgentFromState(guttaState, species) {
    const list = species === "gutt" ? guttaState.gutta : guttaState.mara;
    if (!list || list.length === 0) return null;
    const indexKey = species === "gutt" ? "exampleGuttIndex" : "exampleMaraIndex";
    const idKey = species === "gutt" ? "exampleGuttId" : "exampleMaraId";
    let idx = -1;
    const currentId = guttaState[idKey];
    if (currentId !== null && currentId !== undefined) {
        idx = list.findIndex(agent => agent.ID === currentId);
    }
    if (idx === -1) {
        const current = Number.isFinite(guttaState[indexKey]) ? guttaState[indexKey] : 0;
        idx = ((current % list.length) + list.length) % list.length;
    }
    guttaState[indexKey] = idx;
    guttaState[idKey] = list[idx].ID;
    return list[idx];
}

const STATS_SAMPLE_INTERVAL = 5;
const GUTT_CHART_COLOR = '#ff8a72';
const MARA_CHART_COLOR = '#9aa0a6';
const GUTT_NEG_ALT_COLOR = '#5cb6ff';
const MARA_NEG_ALT_COLOR = '#6c8bd5';
const CHART_BG_COLOR = 'rgba(0, 0, 0, 0.1)';
const CHART_BORDER_COLOR = 'rgba(255, 255, 255, 0.2)';
const GUTTA_MODE_KEYS = [
    'Exploring',
    'Foraging',
    'Landing',
    'Feeding',
    'Fleeing',
    'Courting',
    'Gestating',
    'Dead'
];
const GUTTA_MODE_LABELS = [
    'Exploring',
    'Foraging',
    'Landing',
    'Feeding',
    'Fleeing',
    'Courting',
    'Gestating',
    'Dead'
];
const MARA_MODE_KEYS = [
    'Exploring',
    'Hunting',
    'Courting',
    'Gestating',
    'Dead'
];
const MARA_MODE_LABELS = [
    'Exploring',
    'Hunting',
    'Courting',
    'Gestating',
    'Dead'
];

const statsUi = {
    initialized: false,
    elements: null,
    history: {
        ticks: [],
        population: { gutt: [], mara: [] },
        traitDrift: { gutt: {}, mara: {} }
    },
    traitKeys: {
        gutt: INHERITABLE_TRAITS.gutt || [],
        mara: INHERITABLE_TRAITS.mara || []
    },
    traitColors: {
        gutt: {},
        mara: {}
    },
    lastSampleTick: -Infinity,
    lastRenderMode: null,
    lastVisible: false,
    viewMode: 0
};

function createGraphBlock(title, options = {}) {
    const { withLegend = false } = options;
    const block = document.createElement('div');
    block.className = 'gutta-graph-block';
    const titleEl = document.createElement('div');
    titleEl.className = 'gutta-graph-title';
    titleEl.textContent = title;
    const canvas = document.createElement('canvas');
    canvas.className = 'gutta-graph-canvas';
    block.appendChild(titleEl);
    block.appendChild(canvas);
    let legend = null;
    if (withLegend) {
        legend = document.createElement('div');
        legend.className = 'gutta-graph-legend';
        block.appendChild(legend);
    }
    return { block, titleEl, canvas, legend };
}

function ensureStatsUi() {
    if (statsUi.initialized) return statsUi.elements;
    const guttaStatScreen = document.querySelector('#guttaStatScreen');
    if (!guttaStatScreen) return null;

    guttaStatScreen.innerHTML = '';

    const layout = document.createElement('div');
    layout.className = 'gutta-stats-layout';

    const left = document.createElement('div');
    left.className = 'gutta-stats-left';
    const text = document.createElement('div');
    left.appendChild(text);

    const right = document.createElement('div');
    right.className = 'gutta-stats-right';

    const populationGutt = createGraphBlock('Gutta population');
    const populationMara = createGraphBlock('Mara population');
    const guttAge = createGraphBlock('Gutta age distribution');
    const maraAge = createGraphBlock('Mara age distribution');
    const guttAltitude = createGraphBlock('Gutta altitude distribution');
    const maraAltitude = createGraphBlock('Mara altitude distribution');
    const guttEnergy = createGraphBlock('Gutta energy distribution');
    const maraEnergy = createGraphBlock('Mara energy distribution');
    const guttHunger = createGraphBlock('Gutta hunger distribution');
    const maraHunger = createGraphBlock('Mara hunger distribution');
    const guttMode = createGraphBlock('Gutta active mode');
    const maraMode = createGraphBlock('Mara active mode');
    const guttTraitDrift = createGraphBlock('Gutta trait drift', { withLegend: true });
    const maraTraitDrift = createGraphBlock('Mara trait drift', { withLegend: true });

    right.appendChild(populationGutt.block);
    right.appendChild(populationMara.block);
    right.appendChild(guttAge.block);
    right.appendChild(maraAge.block);
    right.appendChild(guttAltitude.block);
    right.appendChild(maraAltitude.block);
    right.appendChild(guttEnergy.block);
    right.appendChild(maraEnergy.block);
    right.appendChild(guttHunger.block);
    right.appendChild(maraHunger.block);
    right.appendChild(guttMode.block);
    right.appendChild(maraMode.block);
    right.appendChild(guttTraitDrift.block);
    right.appendChild(maraTraitDrift.block);

    layout.appendChild(left);
    layout.appendChild(right);
    guttaStatScreen.appendChild(layout);

    statsUi.initialized = true;
    statsUi.elements = {
        root: guttaStatScreen,
        text,
        populationGutt,
        populationMara,
        guttAge,
        maraAge,
        guttAltitude,
        maraAltitude,
        guttEnergy,
        maraEnergy,
        guttHunger,
        maraHunger,
        guttMode,
        maraMode,
        guttTraitDrift,
        maraTraitDrift
    };

    ensureTraitHistory('gutt');
    ensureTraitHistory('mara');
    populateTraitLegend(guttTraitDrift.legend, 'gutt');
    populateTraitLegend(maraTraitDrift.legend, 'mara');

    return statsUi.elements;
}

function pushHistory(list, value) {
    list.push(value);
}

function resizeCanvasToDisplaySize(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
    const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
    }
    return dpr;
}

function formatAxisValue(value, options = {}) {
    if (options.percent) {
        return `${value.toFixed(2)}%`;
    }
    if (options.integer) {
        return `${Math.round(value)}`;
    }
    return `${value.toFixed(2)}`;
}

function formatTickCompact(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
        return `${value}`;
    }
    const abs = Math.abs(value);
    if (abs >= 1e6) {
        const scaled = (value / 1e6).toFixed(1).replace(/\.0$/, '');
        return `${scaled}M`;
    }
    if (abs >= 1e3) {
        const scaled = (value / 1e3).toFixed(1).replace(/\.0$/, '');
        return `${scaled}k`;
    }
    return `${Math.round(value)}`;
}

function buildTraitColor(index, total, species) {
    const hue = (index / Math.max(1, total)) * 300;
    const saturation = 70;
    const lightness = species === 'gutt' ? 62 : 48;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function populateTraitLegend(legendEl, species) {
    if (!legendEl) return;
    legendEl.innerHTML = '';
    const keys = statsUi.traitKeys[species] || [];
    keys.forEach((key) => {
        const item = document.createElement('div');
        item.className = 'gutta-legend-item';
        const swatch = document.createElement('span');
        swatch.className = 'gutta-legend-swatch';
        swatch.style.backgroundColor = statsUi.traitColors[species]?.[key] || '#ffffff';
        const label = document.createElement('span');
        label.textContent = key;
        item.appendChild(swatch);
        item.appendChild(label);
        legendEl.appendChild(item);
    });
}

function ensureTraitHistory(species) {
    const keys = statsUi.traitKeys[species] || [];
    if (!statsUi.history.traitDrift[species]) {
        statsUi.history.traitDrift[species] = {};
    }
    if (!statsUi.traitColors[species]) {
        statsUi.traitColors[species] = {};
    }
    keys.forEach((key, index) => {
        if (!statsUi.history.traitDrift[species][key]) {
            statsUi.history.traitDrift[species][key] = [];
        }
        if (!statsUi.traitColors[species][key]) {
            statsUi.traitColors[species][key] = buildTraitColor(index, keys.length, species);
        }
    });
}

function sampleSeries(values, maxPoints) {
    if (values.length <= maxPoints) {
        return values;
    }
    const stride = Math.max(1, Math.ceil(values.length / maxPoints));
    const sampled = [];
    for (let i = 0; i < values.length; i += stride) {
        sampled.push(values[i]);
    }
    if (sampled[sampled.length - 1] !== values[values.length - 1]) {
        sampled.push(values[values.length - 1]);
    }
    return sampled;
}

function drawLineChart(canvas, series, options = {}) {
    const ctx = canvas.getContext('2d');
    const dpr = resizeCanvasToDisplaySize(canvas);
    const width = canvas.width;
    const height = canvas.height;
    if (width <= 0 || height <= 0) return;

    const basePadding = {
        left: 36 * dpr,
        right: 10 * dpr,
        top: 24 * dpr,
        bottom: 30 * dpr
    };
    ctx.clearRect(0, 0, width, height);
    if (CHART_BG_COLOR !== 'transparent') {
        ctx.fillStyle = CHART_BG_COLOR;
        ctx.fillRect(0, 0, width, height);
    }
    ctx.strokeStyle = CHART_BORDER_COLOR;
    ctx.lineWidth = dpr;
    ctx.strokeRect(0.5 * dpr, 0.5 * dpr, width - dpr, height - dpr);

    let min = Number.isFinite(options.min) ? options.min : Infinity;
    let max = Number.isFinite(options.max) ? options.max : -Infinity;
    for (const item of series) {
        for (const value of item.values) {
            if (value < min) min = value;
            if (value > max) max = value;
        }
    }
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
        min = 0;
        max = 1;
    }
    if (min === max) {
        max = min + 1;
    }

    ctx.font = `${9 * dpr}px monospace`;
    ctx.textAlign = 'left';

    const tickCount = 3;
    const yTickValues = [];
    const yTickLabels = [];
    let maxYLabelWidth = 0;
    for (let i = 0; i < tickCount; i++) {
        const t = i / (tickCount - 1);
        const value = min + (max - min) * t;
        const label = options.formatY ? options.formatY(value) : formatAxisValue(value, options.yFormat);
        yTickValues.push(value);
        yTickLabels.push(label);
        maxYLabelWidth = Math.max(maxYLabelWidth, ctx.measureText(label).width);
    }

    const xTickValues = [];
    if (options.ticks && options.ticks.length > 0) {
        const midIndex = Math.floor(options.ticks.length / 2);
        xTickValues.push(options.ticks[0], options.ticks[midIndex], options.ticks[options.ticks.length - 1]);
    }
    const formatX = options.formatX
        ? options.formatX
        : (value) => (options.compactXTicks === false ? `${Math.round(value)}` : formatTickCompact(value));
    const xTickLabels = xTickValues.map(formatX);
    const firstXWidth = xTickLabels[0] ? ctx.measureText(xTickLabels[0]).width : 0;
    const lastXWidth = xTickLabels[2] ? ctx.measureText(xTickLabels[2]).width : 0;

    const padding = {
        left: Math.max(basePadding.left, maxYLabelWidth + 8 * dpr, firstXWidth / 2 + 6 * dpr),
        right: Math.max(basePadding.right, lastXWidth / 2 + 6 * dpr),
        top: basePadding.top,
        bottom: basePadding.bottom
    };

    const chartWidth = Math.max(1, width - padding.left - padding.right);
    const chartHeight = Math.max(1, height - padding.top - padding.bottom);
    const originX = padding.left;
    const originY = height - padding.bottom;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = dpr;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX, originY - chartHeight);
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + chartWidth, originY);
    ctx.stroke();

    if (options.zeroLine && min < 0 && max > 0) {
        const zeroY = originY - ((0 - min) / (max - min)) * chartHeight;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.moveTo(originX, zeroY);
        ctx.lineTo(originX + chartWidth, zeroY);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    for (let i = 0; i < yTickValues.length; i++) {
        const t = i / (yTickValues.length - 1);
        const y = originY - t * chartHeight;
        ctx.beginPath();
        ctx.moveTo(originX - 3 * dpr, y);
        ctx.lineTo(originX + 3 * dpr, y);
        ctx.stroke();
        ctx.fillText(yTickLabels[i], 2 * dpr, y);
    }

    ctx.textBaseline = 'top';
    ctx.textAlign = 'center';
    const tickLabels = [];
    if (xTickValues.length > 0) {
        tickLabels.push({ t: 0, label: xTickLabels[0] });
        tickLabels.push({ t: 0.5, label: xTickLabels[1] });
        tickLabels.push({ t: 1, label: xTickLabels[2] });
    }
    tickLabels.forEach(label => {
        const x = originX + label.t * chartWidth;
        ctx.beginPath();
        ctx.moveTo(x, originY - 3 * dpr);
        ctx.lineTo(x, originY + 3 * dpr);
        ctx.stroke();
        ctx.fillText(label.label ?? '', x, originY + 6 * dpr);
    });

    if (options.yLabel) {
        ctx.textAlign = 'left';
        ctx.fillText(options.yLabel, 2 * dpr, 2 * dpr);
    }
    if (options.xLabel) {
        ctx.textAlign = 'right';
        ctx.fillText(options.xLabel, width - 6 * dpr, height - 8 * dpr);
    }

    const maxPoints = Math.max(2, Math.floor(chartWidth / (2 * dpr)));
    for (const item of series) {
        const values = sampleSeries(item.values, maxPoints);
        if (values.length < 2) continue;
        ctx.beginPath();
        for (let i = 0; i < values.length; i++) {
            const x = originX + (i / (values.length - 1)) * chartWidth;
            const normalized = (values[i] - min) / (max - min);
            const y = originY - normalized * chartHeight;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.strokeStyle = item.color;
        ctx.lineWidth = 1.5 * dpr;
        ctx.stroke();
    }
}

function drawHistogram(canvas, bins, options = {}) {
    const ctx = canvas.getContext('2d');
    const dpr = resizeCanvasToDisplaySize(canvas);
    const width = canvas.width;
    const height = canvas.height;
    if (width <= 0 || height <= 0) return;

    const extraBottomPadding = options.rotateXTicks ? 18 * dpr : 0;
    const basePadding = {
        left: 40 * dpr,
        right: 10 * dpr,
        top: 24 * dpr,
        bottom: 30 * dpr + extraBottomPadding
    };
    ctx.clearRect(0, 0, width, height);
    if (CHART_BG_COLOR !== 'transparent') {
        ctx.fillStyle = CHART_BG_COLOR;
        ctx.fillRect(0, 0, width, height);
    }
    ctx.strokeStyle = CHART_BORDER_COLOR;
    ctx.lineWidth = dpr;
    ctx.strokeRect(0.5 * dpr, 0.5 * dpr, width - dpr, height - dpr);

    if (!bins || bins.length === 0) return;
    let maxValue = 1;
    for (const value of bins) {
        if (value > maxValue) maxValue = value;
    }

    ctx.font = `${9 * dpr}px monospace`;
    ctx.textAlign = 'left';
    let maxYLabelWidth = 0;
    const maxLabel = `${Math.round(maxValue)}`;
    maxYLabelWidth = Math.max(maxYLabelWidth, ctx.measureText(maxLabel).width);
    maxYLabelWidth = Math.max(maxYLabelWidth, ctx.measureText('0').width);

    const xTicks = options.xTicks || [];
    const showAllTicks = options.showAllXTicks === true;
    const tickValues = xTicks.length === 0
        ? []
        : (showAllTicks ? xTicks : [xTicks[0], xTicks[Math.floor(xTicks.length / 2)], xTicks[xTicks.length - 1]]);
    const formatX = options.formatX
        ? options.formatX
        : (value) => (typeof value === 'number' ? formatTickCompact(value) : `${value}`);
    const tickLabels = tickValues.map(formatX);
    const maxXLabelWidth = tickLabels.reduce((max, label) => {
        return Math.max(max, ctx.measureText(label).width);
    }, 0);
    const sideExtra = options.rotateXTicks ? maxXLabelWidth * 0.6 : maxXLabelWidth / 2;

    const padding = {
        left: Math.max(basePadding.left, maxYLabelWidth + 8 * dpr, sideExtra + 6 * dpr),
        right: Math.max(basePadding.right, sideExtra + 6 * dpr),
        top: basePadding.top,
        bottom: basePadding.bottom
    };

    const chartWidth = Math.max(1, width - padding.left - padding.right);
    const chartHeight = Math.max(1, height - padding.top - padding.bottom);
    const originX = padding.left;
    const originY = height - padding.bottom;
    const barWidth = chartWidth / bins.length;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = dpr;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX, originY - chartHeight);
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + chartWidth, originY);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = `${9 * dpr}px monospace`;
    ctx.textBaseline = 'middle';
    ctx.beginPath();
    ctx.moveTo(originX - 3 * dpr, originY);
    ctx.lineTo(originX + 3 * dpr, originY);
    ctx.moveTo(originX - 3 * dpr, originY - chartHeight);
    ctx.lineTo(originX + 3 * dpr, originY - chartHeight);
    ctx.stroke();
    ctx.fillText('0', 2 * dpr, originY);
    ctx.fillText(`${Math.round(maxValue)}`, 2 * dpr, originY - chartHeight);

    ctx.textBaseline = 'top';
    ctx.textAlign = 'center';
    if (tickValues.length > 0) {
        const tickCount = tickValues.length;
        const tickFontScale = options.xTickFontScale ?? 9;
        ctx.font = `${tickFontScale * dpr}px monospace`;
        tickValues.forEach((value, index) => {
            let t = 0.5;
            if (showAllTicks) {
                if (tickCount === bins.length) {
                    t = (index + 0.5) / bins.length;
                } else if (tickCount > 1) {
                    t = index / (tickCount - 1);
                }
            } else {
                t = tickCount === 1 ? 0.5 : index / (tickCount - 1);
            }
            const x = originX + t * chartWidth;
            ctx.beginPath();
            ctx.moveTo(x, originY - 3 * dpr);
            ctx.lineTo(x, originY + 3 * dpr);
            ctx.stroke();
            const labelText = tickLabels[index];
            if (options.rotateXTicks) {
                ctx.save();
                ctx.translate(x, originY + 10 * dpr);
                ctx.rotate(-Math.PI / 4);
                ctx.textAlign = 'right';
                ctx.textBaseline = 'middle';
                ctx.fillText(labelText, 0, 0);
                ctx.restore();
            } else {
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(labelText, x, originY + 6 * dpr);
            }
        });
    }
    if (options.yLabel) {
        ctx.textAlign = 'left';
        ctx.fillText(options.yLabel, 2 * dpr, 2 * dpr);
    }
    if (options.xLabel) {
        ctx.textAlign = 'right';
        ctx.fillText(options.xLabel, width - 6 * dpr, height - 8 * dpr);
    }

    for (let i = 0; i < bins.length; i++) {
        const value = bins[i];
        const barHeight = (value / maxValue) * chartHeight;
        const x = originX + i * barWidth;
        const y = originY - barHeight;
        if (options.binCenters && options.colorNegative) {
            const center = options.binCenters[i] ?? 0;
            ctx.fillStyle = center < 0 ? options.colorNegative : (options.color || '#ffffff');
        } else {
            ctx.fillStyle = options.color || '#ffffff';
        }
        ctx.fillRect(x, y, barWidth * 0.9, barHeight);
    }
}

function computeAgeBins(agents, maxAgeFrames, binCount) {
    const bins = new Array(binCount).fill(0);
    if (!agents || agents.length === 0) {
        return { bins, maxAge: maxAgeFrames ?? 0 };
    }
    let maxAge = maxAgeFrames ?? 0;
    if (!Number.isFinite(maxAge) || maxAge <= 0) {
        maxAge = 1;
        for (const agent of agents) {
            if (agent.ageFrames > maxAge) {
                maxAge = agent.ageFrames;
            }
        }
    }
    const scale = binCount / Math.max(1, maxAge);
    for (const agent of agents) {
        const index = Math.min(binCount - 1, Math.floor(agent.ageFrames * scale));
        bins[index] += 1;
    }
    return { bins, maxAge };
}

function computeAltitudeBins(agents, binCount) {
    const bins = new Array(binCount).fill(0);
    if (!agents || agents.length === 0) {
        return { bins, minAlt: 0, maxAlt: 0, binCenters: bins.map(() => 0) };
    }

    let minAlt = Infinity;
    let maxAlt = -Infinity;
    const altitudes = [];
    for (const agent of agents) {
        const alt = (agent.position3D.length() - 5.0) * 1000;
        altitudes.push(alt);
        if (alt < minAlt) minAlt = alt;
        if (alt > maxAlt) maxAlt = alt;
    }

    if (minAlt === maxAlt) {
        minAlt -= 1;
        maxAlt += 1;
    }
    const range = Math.max(1, maxAlt - minAlt);
    const binSize = range / binCount;
    for (const alt of altitudes) {
        let index = Math.floor((alt - minAlt) / range * binCount);
        if (index >= binCount) index = binCount - 1;
        if (index < 0) index = 0;
        bins[index] += 1;
    }

    const binCenters = [];
    for (let i = 0; i < binCount; i++) {
        binCenters.push(minAlt + (i + 0.5) * binSize);
    }

    return { bins, minAlt, maxAlt, binCenters };
}

function computeScalarBins(values, binCount, minValue = 0, maxValue = 1) {
    const bins = new Array(binCount).fill(0);
    const min = Number.isFinite(minValue) ? minValue : 0;
    const max = Number.isFinite(maxValue) ? maxValue : min + 1;
    if (!values || values.length === 0) {
        const binCenters = bins.map((_, i) => min + ((i + 0.5) / binCount) * (max - min));
        return { bins, min, max, binCenters };
    }

    const range = Math.max(1e-6, max - min);
    values.forEach((value) => {
        const clamped = clampValue(value, min, max);
        let index = Math.floor(((clamped - min) / range) * binCount);
        if (index >= binCount) index = binCount - 1;
        if (index < 0) index = 0;
        bins[index] += 1;
    });

    const binCenters = [];
    for (let i = 0; i < binCount; i++) {
        binCenters.push(min + (i + 0.5) * (range / binCount));
    }
    return { bins, min, max, binCenters };
}

function computeEnergyBins(agents, binCount) {
    const values = [];
    for (const agent of agents || []) {
        const maxEnergy = agent.getTraitParam('maxEnergy', 1);
        const normalized = maxEnergy > 0 ? agent.energy / maxEnergy : 0;
        values.push(normalized);
    }
    return computeScalarBins(values, binCount, 0, 1);
}

function computeHungerBins(agents, binCount) {
    const values = [];
    for (const agent of agents || []) {
        values.push(agent.hunger);
    }
    return computeScalarBins(values, binCount, 0, 1);
}

function computeModeBins(agents, modeKeys) {
    const bins = new Array(modeKeys.length).fill(0);
    const indexByMode = new Map(modeKeys.map((mode, idx) => [mode, idx]));
    for (const agent of agents || []) {
        const index = indexByMode.get(agent.mode);
        if (index !== undefined) {
            bins[index] += 1;
        }
    }
    return bins;
}

function computeTraitDriftByTrait(agents, species, parameters) {
    const keys = statsUi.traitKeys[species] || [];
    const results = {};
    if (!parameters || keys.length === 0) return results;
    if (!agents || agents.length === 0) {
        keys.forEach(key => { results[key] = 0; });
        return results;
    }

    const sums = {};
    for (const agent of agents) {
        for (const key of keys) {
            const base = parameters[key];
            if (base === undefined) continue;
            const value = agent.traits?.[key] ?? base;
            sums[key] = (sums[key] || 0) + value;
        }
    }

    keys.forEach(key => {
        const base = parameters[key];
        if (base === undefined) {
            results[key] = 0;
            return;
        }
        const avg = (sums[key] ?? 0) / agents.length;
        if (base !== 0) {
            results[key] = ((avg - base) / base) * 100;
        } else {
            results[key] = avg;
        }
    });

    return results;
}

function updateStatsGraphs(guttaState, ui) {
    const tick = guttaState.tick ?? 0;
    const shouldSample = tick - statsUi.lastSampleTick >= STATS_SAMPLE_INTERVAL;
    if (shouldSample) {
        statsUi.lastSampleTick = tick;
        statsUi.history.ticks.push(tick);
        pushHistory(statsUi.history.population.gutt, guttaState.gutta.length);
        pushHistory(statsUi.history.population.mara, guttaState.mara.length);

        const driftParameters = guttaState.shared?.parameters || {};
        ensureTraitHistory('gutt');
        ensureTraitHistory('mara');
        const guttDrifts = computeTraitDriftByTrait(guttaState.gutta, 'gutt', driftParameters);
        const maraDrifts = computeTraitDriftByTrait(guttaState.mara, 'mara', driftParameters);
        statsUi.traitKeys.gutt.forEach(key => {
            pushHistory(statsUi.history.traitDrift.gutt[key], guttDrifts[key] ?? 0);
        });
        statsUi.traitKeys.mara.forEach(key => {
            pushHistory(statsUi.history.traitDrift.mara[key], maraDrifts[key] ?? 0);
        });
    }

    const isVisible = ui.root.style.display === "block";
    if (!isVisible) {
        statsUi.lastVisible = false;
        return;
    }

    const viewChanged = statsUi.viewMode !== statsUi.lastRenderMode;
    const becameVisible = !statsUi.lastVisible;
    if (!shouldSample && !viewChanged && !becameVisible) {
        return;
    }

    statsUi.lastRenderMode = statsUi.viewMode;
    statsUi.lastVisible = true;
    applyStatsViewMode(statsUi.viewMode);

    ui.populationGutt.titleEl.textContent = `Gutta population`;
    drawLineChart(ui.populationGutt.canvas, [
        { values: statsUi.history.population.gutt, color: GUTT_CHART_COLOR }
    ], {
        min: 0,
        yLabel: 'count',
        xLabel: 'tick',
        ticks: statsUi.history.ticks,
        yFormat: { integer: true }
    });

    ui.populationMara.titleEl.textContent = `Mara population`;
    drawLineChart(ui.populationMara.canvas, [
        { values: statsUi.history.population.mara, color: MARA_CHART_COLOR }
    ], {
        min: 0,
        yLabel: 'count',
        xLabel: 'tick',
        ticks: statsUi.history.ticks,
        yFormat: { integer: true }
    });

    const parameters = guttaState.shared?.parameters || {};
    const guttAges = computeAgeBins(guttaState.gutta, parameters.gutt_max_age_frames, 12);
    const maraAges = computeAgeBins(guttaState.mara, parameters.mara_max_age_frames, 12);
    ui.guttAge.titleEl.textContent = `Gutta age distribution (n ${guttaState.gutta.length})`;
    ui.maraAge.titleEl.textContent = `Mara age distribution (n ${guttaState.mara.length})`;
    drawHistogram(ui.guttAge.canvas, guttAges.bins, {
        color: GUTT_CHART_COLOR,
        yLabel: 'count',
        xLabel: 'age frames',
        xTicks: [0, Math.floor(guttAges.maxAge / 2), Math.floor(guttAges.maxAge)]
    });
    drawHistogram(ui.maraAge.canvas, maraAges.bins, {
        color: MARA_CHART_COLOR,
        yLabel: 'count',
        xLabel: 'age frames',
        xTicks: [0, Math.floor(maraAges.maxAge / 2), Math.floor(maraAges.maxAge)]
    });

    const guttAlt = computeAltitudeBins(guttaState.gutta, 12);
    const maraAlt = computeAltitudeBins(guttaState.mara, 12);
    ui.guttAltitude.titleEl.textContent = `Gutta altitude distribution`;
    ui.maraAltitude.titleEl.textContent = `Mara altitude distribution`;
    const guttAltTicks = (guttAlt.minAlt < 0 && guttAlt.maxAlt > 0)
        ? [Math.floor(guttAlt.minAlt), 0, Math.ceil(guttAlt.maxAlt)]
        : [Math.floor(guttAlt.minAlt), Math.floor((guttAlt.minAlt + guttAlt.maxAlt) / 2), Math.ceil(guttAlt.maxAlt)];
    const maraAltTicks = (maraAlt.minAlt < 0 && maraAlt.maxAlt > 0)
        ? [Math.floor(maraAlt.minAlt), 0, Math.ceil(maraAlt.maxAlt)]
        : [Math.floor(maraAlt.minAlt), Math.floor((maraAlt.minAlt + maraAlt.maxAlt) / 2), Math.ceil(maraAlt.maxAlt)];
    drawHistogram(ui.guttAltitude.canvas, guttAlt.bins, {
        color: GUTT_CHART_COLOR,
        colorNegative: GUTT_NEG_ALT_COLOR,
        binCenters: guttAlt.binCenters,
        yLabel: 'count',
        xLabel: 'alt m',
        xTicks: guttAltTicks
    });
    drawHistogram(ui.maraAltitude.canvas, maraAlt.bins, {
        color: MARA_CHART_COLOR,
        colorNegative: MARA_NEG_ALT_COLOR,
        binCenters: maraAlt.binCenters,
        yLabel: 'count',
        xLabel: 'alt m',
        xTicks: maraAltTicks
    });

    const guttEnergy = computeEnergyBins(guttaState.gutta, 12);
    const maraEnergy = computeEnergyBins(guttaState.mara, 12);
    ui.guttEnergy.titleEl.textContent = `Gutta energy distribution`;
    ui.maraEnergy.titleEl.textContent = `Mara energy distribution`;
    drawHistogram(ui.guttEnergy.canvas, guttEnergy.bins, {
        color: GUTT_CHART_COLOR,
        yLabel: 'count',
        xLabel: 'energy %',
        xTicks: [0, 0.5, 1],
        formatX: value => `${Math.round(value * 100)}%`
    });
    drawHistogram(ui.maraEnergy.canvas, maraEnergy.bins, {
        color: MARA_CHART_COLOR,
        yLabel: 'count',
        xLabel: 'energy %',
        xTicks: [0, 0.5, 1],
        formatX: value => `${Math.round(value * 100)}%`
    });

    const guttHunger = computeHungerBins(guttaState.gutta, 12);
    const maraHunger = computeHungerBins(guttaState.mara, 12);
    ui.guttHunger.titleEl.textContent = `Gutta hunger distribution`;
    ui.maraHunger.titleEl.textContent = `Mara hunger distribution`;
    drawHistogram(ui.guttHunger.canvas, guttHunger.bins, {
        color: GUTT_CHART_COLOR,
        yLabel: 'count',
        xLabel: 'hunger %',
        xTicks: [0, 0.5, 1],
        formatX: value => `${Math.round(value * 100)}%`
    });
    drawHistogram(ui.maraHunger.canvas, maraHunger.bins, {
        color: MARA_CHART_COLOR,
        yLabel: 'count',
        xLabel: 'hunger %',
        xTicks: [0, 0.5, 1],
        formatX: value => `${Math.round(value * 100)}%`
    });

    const guttModeBins = computeModeBins(guttaState.gutta, GUTTA_MODE_KEYS);
    const maraModeBins = computeModeBins(guttaState.mara, MARA_MODE_KEYS);
    ui.guttMode.titleEl.textContent = `Gutta active mode`;
    ui.maraMode.titleEl.textContent = `Mara active mode`;
    drawHistogram(ui.guttMode.canvas, guttModeBins, {
        color: GUTT_CHART_COLOR,
        yLabel: 'count',
        xLabel: 'mode',
        xTicks: GUTTA_MODE_LABELS,
        formatX: value => value,
        showAllXTicks: true,
        rotateXTicks: true,
        xTickFontScale: 7
    });
    drawHistogram(ui.maraMode.canvas, maraModeBins, {
        color: MARA_CHART_COLOR,
        yLabel: 'count',
        xLabel: 'mode',
        xTicks: MARA_MODE_LABELS,
        formatX: value => value,
        showAllXTicks: true,
        rotateXTicks: true,
        xTickFontScale: 7
    });

    ui.guttTraitDrift.titleEl.textContent = `Gutta trait drift`;
    const guttTraitSeries = statsUi.traitKeys.gutt.map(key => ({
        values: statsUi.history.traitDrift.gutt[key] || [],
        color: statsUi.traitColors.gutt[key]
    }));
    drawLineChart(ui.guttTraitDrift.canvas, guttTraitSeries, {
        yLabel: '% drift',
        xLabel: 'tick',
        ticks: statsUi.history.ticks,
        yFormat: { percent: true },
        formatY: value => `${value.toFixed(1)}%`,
        zeroLine: true
    });

    ui.maraTraitDrift.titleEl.textContent = `Mara trait drift`;
    const maraTraitSeries = statsUi.traitKeys.mara.map(key => ({
        values: statsUi.history.traitDrift.mara[key] || [],
        color: statsUi.traitColors.mara[key]
    }));
    drawLineChart(ui.maraTraitDrift.canvas, maraTraitSeries, {
        yLabel: '% drift',
        xLabel: 'tick',
        ticks: statsUi.history.ticks,
        yFormat: { percent: true },
        formatY: value => `${value.toFixed(1)}%`,
        zeroLine: true
    });
}

function applyStatsViewMode(mode) {
    const ui = ensureStatsUi();
    if (!ui) return;
    const showPopulation = mode === 0;
    const showAges = mode === 1;
    const showAltitudes = mode === 2;
    const showEnergy = mode === 3;
    const showHunger = mode === 4;
    const showModes = mode === 5;
    const showTraits = mode === 6;

    ui.populationGutt.block.style.display = showPopulation ? 'flex' : 'none';
    ui.populationMara.block.style.display = showPopulation ? 'flex' : 'none';
    ui.guttAge.block.style.display = showAges ? 'flex' : 'none';
    ui.maraAge.block.style.display = showAges ? 'flex' : 'none';
    ui.guttAltitude.block.style.display = showAltitudes ? 'flex' : 'none';
    ui.maraAltitude.block.style.display = showAltitudes ? 'flex' : 'none';
    ui.guttEnergy.block.style.display = showEnergy ? 'flex' : 'none';
    ui.maraEnergy.block.style.display = showEnergy ? 'flex' : 'none';
    ui.guttHunger.block.style.display = showHunger ? 'flex' : 'none';
    ui.maraHunger.block.style.display = showHunger ? 'flex' : 'none';
    ui.guttMode.block.style.display = showModes ? 'flex' : 'none';
    ui.maraMode.block.style.display = showModes ? 'flex' : 'none';
    ui.guttTraitDrift.block.style.display = showTraits ? 'flex' : 'none';
    ui.maraTraitDrift.block.style.display = showTraits ? 'flex' : 'none';
}

export function cycleStatsChartView(direction = 1) {
    const viewCount = 7;
    statsUi.viewMode = (statsUi.viewMode + direction + viewCount) % viewCount;
    applyStatsViewMode(statsUi.viewMode);
}

function refreshStats(guttaState, guttaStats) {
    const ui = ensureStatsUi();
    if (!ui) return;

    const isVisible = ui.root.style.display === "block";
    if (!isVisible) {
        updateStatsGraphs(guttaState, ui);
        return;
    }

    function computeStats(agents) {
        let totalSpeed = 0;
        let totalHunger = 0;
        let minHunger = Infinity;
        let maxHunger = -Infinity;
        let totalAltitude = 0;
        let minAltitude = Infinity;
        let maxAltitude = -Infinity;
    
        for (let a of agents) {
            const speed = a.velocity3D.length();
            totalSpeed += speed;
            const h = a.hunger;
            totalHunger += h;
            if (h<minHunger) minHunger = h;
            if (h>maxHunger) maxHunger = h;
    
            const alt = a.position3D.length();
            if (alt<minAltitude) minAltitude=alt;
            if (alt>maxAltitude) maxAltitude=alt;
            totalAltitude += alt;
        }
        let count = agents.length;
        let avgSpeed = (count>0)? totalSpeed/count:0;
        let avgHunger = (count>0)? totalHunger/count:0;
        let avgAltitude = (count>0)? totalAltitude/count:0;
    
        function altToMeters(a){return (a-5.0)*1000;}
    
        return {
            count,
            avgSpeed,
            avgHunger,
            minHunger: (count>0)? minHunger:0,
            maxHunger: (count>0)? maxHunger:0,
            avgAltitude,
            minAlt: (count>0)? altToMeters(minAltitude):0,
            maxAlt: (count>0)? altToMeters(maxAltitude):0,
            avgAltM: (count>0)? altToMeters(avgAltitude):0
        };
    }

    function computeReproStats(agents, tick) {
        let females = 0;
        let males = 0;
        let gestating = 0;
        let courting = 0;
        let matureFemales = 0;
        let matureMales = 0;
        let readyFemales = 0;
        let readyMales = 0;

        for (let a of agents) {
            if (a.sex === "female") females++;
            if (a.sex === "male") males++;
            if (a.gestationFrames > 0) gestating++;
            if (a.mode === "Courting") courting++;
            if (a.ageFrames >= a.maturityFrames) {
                if (a.sex === "female") matureFemales++;
                if (a.sex === "male") matureMales++;
            }
            if (tick !== undefined && a.canMate(tick)) {
                if (a.sex === "female") readyFemales++;
                if (a.sex === "male") readyMales++;
            }
        }

        return {
            females,
            males,
            gestating,
            courting,
            matureFemales,
            matureMales,
            readyFemales,
            readyMales
        };
    }

    const guttStats = computeStats(guttaState.gutta);
    const maraStats = computeStats(guttaState.mara);
    const tick = guttaState.tick ?? 0;
    const guttRepro = computeReproStats(guttaState.gutta, tick);
    const maraRepro = computeReproStats(guttaState.mara, tick);

    const avgHungerAtMunch = (guttaStats.munch>0)? (guttaStats.totalHungerAtMunch/guttaStats.munch).toFixed(3): "N/A";
    const avgHungerAtKill = (guttaStats.kills>0)? (guttaStats.totalHungerAtKill/guttaStats.kills).toFixed(3): "N/A";
    const guttAttempt = guttaStats.guttMatingAttempts ?? 0;
    const maraAttempt = guttaStats.maraMatingAttempts ?? 0;
    const guttSuccessRate = guttAttempt > 0 ? (((guttaStats.guttMatingSuccesses || 0) / guttAttempt) * 100).toFixed(1) + "%" : "N/A";
    const maraSuccessRate = maraAttempt > 0 ? (((guttaStats.maraMatingSuccesses || 0) / maraAttempt) * 100).toFixed(1) + "%" : "N/A";

    let statsHtml = `
    <b>Gutta Stats:</b><br>
    Population: ${guttStats.count}<br>
    Avg Speed: ${guttStats.avgSpeed.toFixed(3)}<br>
    Avg Hunger: ${guttStats.avgHunger.toFixed(3)} (min:${guttStats.minHunger.toFixed(3)} max:${guttStats.maxHunger.toFixed(3)})<br>
    Avg Altitude: ${guttStats.avgAltM.toFixed(1)}m (min:${guttStats.minAlt.toFixed(1)}m max:${guttStats.maxAlt.toFixed(1)}m)<br><br>
    
    <b>Mara Stats:</b><br>
    Population: ${maraStats.count}<br>
    Avg Speed: ${maraStats.avgSpeed.toFixed(3)}<br>
    Avg Hunger: ${maraStats.avgHunger.toFixed(3)} (min:${maraStats.minHunger.toFixed(3)} max:${maraStats.maxHunger.toFixed(3)})<br>
    Avg Altitude: ${maraStats.avgAltM.toFixed(1)}m (min:${maraStats.minAlt.toFixed(1)}m max:${maraStats.maxAlt.toFixed(1)}m)<br><br>
    
    <b>Interaction Stats:</b><br>
    Number of munches: ${guttaStats.munch}<br>
    Average hunger at munch: ${avgHungerAtMunch}<br>
    Number of kills: ${guttaStats.kills}<br>
    Average hunger at kill: ${avgHungerAtKill}<br><br>

    <b>Reproduction Stats:</b><br>
    Gutt F/M: ${guttRepro.females}/${guttRepro.males}, Courting: ${guttRepro.courting}, Gestating: ${guttRepro.gestating}<br>
    Gutt Mature F/M: ${guttRepro.matureFemales}/${guttRepro.matureMales}, Ready F/M: ${guttRepro.readyFemales}/${guttRepro.readyMales}<br>
    Gutt Attempts: ${guttaStats.guttMatingAttempts || 0}, Success: ${guttaStats.guttMatingSuccesses || 0} (${guttSuccessRate}), Fail: ${guttaStats.guttMatingFailures || 0}<br>
    Gutt Births: ${guttaStats.guttBirths || 0}, Blocked: ${guttaStats.guttBirthsBlocked || 0}<br>
    Gutt Deaths: ${guttaStats.guttDeaths || 0}<br><br>
    Mara F/M: ${maraRepro.females}/${maraRepro.males}, Courting: ${maraRepro.courting}, Gestating: ${maraRepro.gestating}<br>
    Mara Mature F/M: ${maraRepro.matureFemales}/${maraRepro.matureMales}, Ready F/M: ${maraRepro.readyFemales}/${maraRepro.readyMales}<br>
    Mara Attempts: ${guttaStats.maraMatingAttempts || 0}, Success: ${guttaStats.maraMatingSuccesses || 0} (${maraSuccessRate}), Fail: ${guttaStats.maraMatingFailures || 0}<br>
    Mara Births: ${guttaStats.maraBirths || 0}, Blocked: ${guttaStats.maraBirthsBlocked || 0}<br>
    Mara Deaths: ${guttaStats.maraDeaths || 0}<br><br>
    `;

    // ====== Detailed Stats for First Gutt ======
    const exampleGutt = getExampleAgentFromState(guttaState, "gutt");
    if (exampleGutt) {
        const guttLatLng = convertCartesiantoLatLng(exampleGutt.position3D.x, exampleGutt.position3D.y, exampleGutt.position3D.z);
        const guttAltitude = ((exampleGutt.position3D.length() - 5.0)*1000).toFixed(1); 


        // Show all items in the memory
        let memorySize = exampleGutt.nuggetMemories.length;
        let memoryListHtml = "";

        if (memorySize === 0) {
            // If no memories, show 'None'
            memoryListHtml = "None";
        } else {
            // Build a small HTML snippet for each memory
            for (let i = 0; i < memorySize; i++) {
                const mem = exampleGutt.nuggetMemories[i];
                memoryListHtml += `
                    Nugget Memory #${i+1}: 
                    (${mem.lat.toFixed(2)}°, ${mem.lng.toFixed(2)}°)
                    visits: ${mem.visits}, 
                    attractiveness: ${mem.attractiveness.toFixed(2)}
                    <br>
                `;
            }
        }

        // Find closest node in planetTagData
        let closestNodeGutt = null;
        let minDistanceGutt = Infinity;
        for (let node of planetTagData) {
            const distance = angularDistance(guttLatLng.lat, guttLatLng.lng, node.lat, node.lng);
            if (distance < minDistanceGutt) {
                minDistanceGutt = distance;
                closestNodeGutt = node;
            }
        }

        // Find closest Mara and nearest Mara distance
        let closestMaraDistance = Infinity;
        for (let mara of guttaState.mara) {
            const distance = (exampleGutt.position3D.distanceTo(mara.position3D)*10) ** 3;
            if (distance < closestMaraDistance) {
                closestMaraDistance = distance;
            }
            if (distance < exampleGutt.closestCall) {
                exampleGutt.closestCall = distance;
            }
        }

        statsHtml += `
            <b>Example Gutt Stats:</b><br>
            Name: ${exampleGutt.name}<br>
            Sex: ${exampleGutt.sex}<br>
            Active Mode: ${exampleGutt.mode}<br>
            Age: ${exampleGutt.ageFrames} frames<br>
            Position: (${guttLatLng.lat.toFixed(1)}°, ${guttLatLng.lng.toFixed(1)}°)<br>
            Closest Node: ${closestNodeGutt ? closestNodeGutt.text : 'None'}<br>
            Velocity: ${(exampleGutt.velocity3D.length()*1000).toFixed(2)} m/s<br>
            Acceleration: ${(exampleGutt.acceleration3D.length()*1000).toFixed(2)} m/s²<br>
            Altitude: ${guttAltitude}m<br>
            Energy: ${(exampleGutt.energy * 100).toFixed(1)}%<br>
            Hunger: <b>${(exampleGutt.hunger * 100).toFixed(1)}%</b><br>
            Munches: ${exampleGutt.munches || 0}<br>
            Offspring: ${exampleGutt.offspringCount || 0}<br>
            ${memoryListHtml}
            Closest Mara Distance: ${closestMaraDistance.toFixed(1)}m<br>
            Closest Call: ${(exampleGutt.closestCall || Infinity).toFixed(2)}m<br><br>
        `;
    } else {
        statsHtml += `<b>Example Gutt Stats:</b><br>No Gutt available.<br><br>`;
    }

    // ====== Detailed Stats for First Mara ======
    const exampleMara = getExampleAgentFromState(guttaState, "mara");
    if (exampleMara) {
        const maraLatLng = convertCartesiantoLatLng(exampleMara.position3D.x, exampleMara.position3D.y, exampleMara.position3D.z);
        const maraAltitude = ((exampleMara.position3D.length() - 5.0)*1000).toFixed(1); 

        // Find closest node in planetTagData
        let closestNodeMara = null;
        let minDistanceMara = Infinity;
        for (let node of planetTagData) {
            const distance = angularDistance(maraLatLng.lat, maraLatLng.lng, node.lat, node.lng);
            if (distance < minDistanceMara) {
                minDistanceMara = distance;
                closestNodeMara = node;
            }
        }

        // Find closest Gutt and nearest Gutt distance
        let closestGuttDistance = Infinity;
        for (let gutt of guttaState.gutta) {
            const distance = (exampleMara.position3D.distanceTo(gutt.position3D)*10) ** 3;
            if (distance < closestGuttDistance) {
                closestGuttDistance = distance;
            }
            if (distance < exampleMara.nearestMiss) {
                exampleMara.nearestMiss = distance;
            }
        }

        statsHtml += `
            <b>Example Mara Stats:</b><br>
            Name: ${exampleMara.name}<br>
            Sex: ${exampleMara.sex}<br>
            Active Mode: ${exampleMara.mode}<br>
            Age: ${exampleMara.ageFrames} frames<br>
            Position: (${maraLatLng.lat.toFixed(1)}°, ${maraLatLng.lng.toFixed(1)}°)<br>
            Closest Node: ${closestNodeMara ? closestNodeMara.text : 'None'}<br>
            Velocity: ${(exampleMara.velocity3D.length()*1000).toFixed(4)} m/s<br>
            Acceleration: ${(exampleMara.acceleration3D.length()*1000).toFixed(4)} m/s²<br>
            Altitude: ${maraAltitude}m<br>
            Energy: ${(exampleMara.energy * 100).toFixed(1)}%<br>
            Hunger: <b>${(exampleMara.hunger * 100).toFixed(1)}%</b><br>
            Kills: ${exampleMara.kills || 0}<br>
            Offspring: ${exampleMara.offspringCount || 0}<br>
            Closest Gutt Distance: ${closestGuttDistance.toFixed(1)}m<br>
            Nearest Miss: ${(exampleMara.nearestMiss || Infinity).toFixed(2)}m<br><br>
        `;
    } else {
        statsHtml += `<b>Example Mara Stats:</b><br>No Mara available.<br><br>`;
    }

    ui.text.innerHTML = statsHtml;
    updateStatsGraphs(guttaState, ui);
}

function handleSpeciesMating({ agents, tree, tick, newbornQueue, pairedSet, guttaStats }) {
    for (const agent of agents) {
        const readyToBirth = agent.advanceLifeCycle();
        if (readyToBirth) {
            newbornQueue.push(agent);
        }
        if (agent.dead) {
            pairedSet.add(agent);
        }
    }

    for (const agent of agents) {
        if (pairedSet.has(agent)) continue;
        if (agent.dead) continue;
        if (agent.sex !== "female") continue;
        if (!agent.canMate(tick)) continue;

        const mate = findMate(agent, tree, tick, pairedSet);
        if (!mate) continue;

        agent.lastMateAttemptTick = tick;
        mate.lastMateAttemptTick = tick;

        const prefix = agent.species === "gutt" ? "gutt" : "mara";
        const successChance = agent.parameters[`${prefix}_mate_success_chance`] ?? 1;
        const attemptKey = `${prefix}MatingAttempts`;
        const successKey = `${prefix}MatingSuccesses`;
        const failureKey = `${prefix}MatingFailures`;
        guttaStats[attemptKey] = (guttaStats[attemptKey] || 0) + 1;
        if (Math.random() > successChance) {
            agent.mateRef = null;
            guttaStats[failureKey] = (guttaStats[failureKey] || 0) + 1;
            pairedSet.add(agent);
            pairedSet.add(mate);
            continue;
        }
        guttaStats[successKey] = (guttaStats[successKey] || 0) + 1;

        agent.mateRef = mate;
        agent.applyMatingCosts({ applyCost: true });
        mate.applyMatingCosts({ applyCost: false });

        agent.startGestation(tick);
        mate.lastMatedTick = tick;

        pairedSet.add(agent);
        pairedSet.add(mate);
    }
}

function findMate(agent, tree, tick, pairedSet) {
    const prefix = agent.species === "gutt" ? "gutt" : "mara";
    const perception = agent.parameters[`${prefix}_mate_perception_distance`] ?? 0.12;
    const maxAngle = agent.parameters[`${prefix}_mate_angle`] ?? 120;
    const coneRadians = THREE.MathUtils.degToRad(maxAngle);

    const neighbors = tree.rangeSearch(
        { x: agent.position3D.x, y: agent.position3D.y, z: agent.position3D.z },
        perception,
        agent._neighborCache || []
    );

    let best = null;
    let bestDist = Infinity;
    const forward = agent.velocity3D.clone();
    if (forward.lengthSq() < 1e-6) {
        forward.set(0, 0, 1);
    } else {
        forward.normalize();
    }

    for (const other of neighbors) {
        if (other === agent || pairedSet.has(other)) continue;
        if (other.species !== agent.species) continue;
        if (other.sex === agent.sex) continue;
        if (!other.canMate(tick)) continue;

        const dir = other.position3D.clone().sub(agent.position3D);
        const dist = dir.length();
        if (dist < 1e-6) continue;
        const angle = forward.angleTo(dir.normalize());
        if (angle > coneRadians) continue;
        if (dist < bestDist) {
            bestDist = dist;
            best = other;
        }
    }
    return best;
}

function getSpeciesCapacity(species) {
    const pool = instancePools[species] || [];
    return pool.reduce((total, mesh) => total + mesh.count, 0);
}

function createInheritedTraits({ species, mother, father, parameters }) {
    const keys = INHERITABLE_TRAITS[species] || [];
    const prefix = species === "gutt" ? "gutt" : "mara";
    const mutationRate = parameters[`${prefix}_mutation_rate`] ?? 0;
    const mutationRange = parameters[`${prefix}_mutation_range`] ?? 0;
    const minMultiplier = parameters[`${prefix}_trait_min_multiplier`] ?? 0.9;
    const maxMultiplier = parameters[`${prefix}_trait_max_multiplier`] ?? 1.1;
    const minBound = Math.min(minMultiplier, maxMultiplier);
    const maxBound = Math.max(minMultiplier, maxMultiplier);

    const traits = {};
    for (const key of keys) {
        const base = parameters[key];
        if (base === undefined) continue;
        const momValue = mother?.traits?.[key] ?? base;
        const dadValue = father?.traits?.[key] ?? base;
        let value = (momValue + dadValue) * 0.5;

        if (Math.random() < mutationRate) {
            const delta = (Math.random() * 2 - 1) * mutationRange;
            value *= 1 + delta;
        }

        const minValue = base * minBound;
        const maxValue = base * maxBound;
        traits[key] = THREE.MathUtils.clamp(value, minValue, maxValue);
    }

    return traits;
}

function assignInitialAge(agent, parameters) {
    const prefix = agent.species === "gutt" ? "gutt" : "mara";
    const maxAge = parameters[`${prefix}_max_age_frames`];
    const initialMax = parameters[`${prefix}_initial_age_max_frames`] ?? maxAge ?? agent.maturityFrames ?? 0;
    if (initialMax > 0) {
        agent.ageFrames = getRandomInt(0, Math.floor(initialMax));
    }
}

function spawnOffspring(parent, guttaState) {
    const species = parent.species;
    const params = guttaState.shared.parameters;
    const capacity = getSpeciesCapacity(species);
    const maxPop =
        species === "gutt"
            ? params.gutt_population_cap ?? guttaState.gutta.length
            : params.mara_population_cap ?? guttaState.mara.length;
    const currentArray = species === "gutt" ? guttaState.gutta : guttaState.mara;
    const maxAllowed = capacity > 0 ? Math.min(maxPop, capacity) : maxPop;
    if (currentArray.length >= maxAllowed) {
        parent.mateRef = null;
        return false;
    }

    const slot = allocateInstanceSlot(species);
    if (!slot) {
        parent.mateRef = null;
        return false;
    }

    const geometry = species === "gutt" ? guttaState.shared.guttaGeometry : guttaState.shared.maraGeometry;
    const mate = parent.mateRef ?? null;
    const traits = createInheritedTraits({
        species,
        mother: parent,
        father: mate,
        parameters: params
    });
    const id =
        species === "gutt"
            ? (guttaState.nextGuttId = (guttaState.nextGuttId ?? guttaState.gutta.length) + 1) - 1
            : (guttaState.nextMaraId = (guttaState.nextMaraId ?? guttaState.mara.length) + 1) - 1;

    const child = new Gutt(
        0,
        0,
        geometry,
        slot.meshRef,
        slot.instanceIndex,
        currentArray,
        guttaState,
        guttaState.shared.destination,
        params,
        species,
        guttaState.shared.version,
        id
    );

    child.applyTraits(traits);
    child.motherId = parent.ID;
    child.fatherId = mate ? mate.ID : null;
    const offset = new THREE.Vector3().randomDirection().multiplyScalar(0.02);
    child.position3D.copy(parent.position3D).add(offset);
    const parentVelocity = mate ? parent.velocity3D.clone().add(mate.velocity3D).multiplyScalar(0.5) : parent.velocity3D.clone();
    child.velocity3D.copy(parentVelocity.multiplyScalar(0.5));

    const parentHunger = mate ? (parent.hunger + mate.hunger) * 0.5 : parent.hunger;
    const parentEnergy = mate ? (parent.energy + mate.energy) * 0.5 : parent.energy;
    child.hunger = Math.min(1, parentHunger * 0.5);
    child.energy = Math.max(0.2, Math.min(child.getTraitParam('maxEnergy'), parentEnergy * 0.8));
    child.mode = "Exploring";
    child.updateInstanceMatrix();
    parent.offspringCount += 1;
    if (mate) {
        mate.offspringCount += 1;
    }
    parent.mateRef = null;

    currentArray.push(child);
    return true;
}

function cullDeadAgents(agents, guttaStats) {
    for (let i = agents.length - 1; i >= 0; i -= 1) {
        const agent = agents[i];
        if (!agent.dead) continue;
        clearInstance(agent.meshRef, agent.instanceIndex);
        releaseInstanceSlot(agent.meshRef, agent.instanceIndex);
        agents.splice(i, 1);
        const prefix = agent.species === "gutt" ? "gutt" : "mara";
        const key = `${prefix}Deaths`;
        guttaStats[key] = (guttaStats[key] || 0) + 1;
    }
}

function createGuttaShape(version, scale=0.0002) {
    const guttaShape = new THREE.Shape();
    guttaShape.moveTo(scale*5, scale*5);
    guttaShape.bezierCurveTo(scale*5, scale*5, scale*4,0,0,0);
    guttaShape.bezierCurveTo(-scale*6,0,-scale*6,scale*7,-scale*6,scale*7);
    guttaShape.bezierCurveTo(-scale*6,scale*11,-scale*3,scale*15.4,scale*5,scale*19);
    guttaShape.bezierCurveTo(scale*12,scale*15.4,scale*16,scale*11,scale*16,scale*7);
    guttaShape.bezierCurveTo(scale*16,scale*7,scale*16,0,scale*10,0);
    guttaShape.bezierCurveTo(scale*7,0,scale*5,scale*5,scale*5,scale*5);
    return guttaShape;
}

function createMaraShape(version, scale=0.0002) {
    const beakLength = 40
    const tipLength = 8
    const maraShape = new THREE.Shape();
    maraShape.moveTo(scale * 5, scale * 5 );
    maraShape.bezierCurveTo(scale*5, scale*5, scale*4,0,0, scale*(-tipLength) );
    maraShape.bezierCurveTo(-scale*6,0,-scale*6,scale*7,-scale*6,scale*7 );
    maraShape.bezierCurveTo(-scale*6,scale*11,-scale*3,scale*(15.4),scale*5,scale*beakLength );
    maraShape.bezierCurveTo(scale*12,scale*15.4,scale*16,scale*11,scale*16,scale*7 );
    maraShape.bezierCurveTo(scale*16,scale*7,scale*16,0,scale*10, scale*(-tipLength) );
    maraShape.bezierCurveTo(scale*7,0,scale*5,scale*5,scale*5,scale*5 );
    return maraShape;
}

function createExtrudeGeometry(shape, scale, version) {
    const extrudeSettings = {
        depth: 2 * scale,
        bevelEnabled: true,
        bevelThickness: 1 * scale,
        bevelSize: 5 * scale,
        bevelSegments: 3,
        steps: 1
    };
    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    // Compute bounding box
    geo.computeBoundingBox();
    const bb = geo.boundingBox;

    // Move apex (which we assume at minZ) to z=0
    const translateZ = -bb.min.z;
    // Center in X and Y
    const translateX = - (bb.min.x + bb.max.x) / 2;
    const translateY = - (bb.min.y + bb.max.y) / 2;
    geo.translate(translateX, translateY, translateZ);

    geo.rotateX(Math.PI / 2); // Rotate 90 degrees around X
    geo.rotateZ(Math.PI);     // Rotate 180 degrees around Z

    return geo;
}

function ensureVertexColors(geometry) {
    if (geometry.getAttribute('color')) return;
    const position = geometry.getAttribute('position');
    if (!position) return;
    const colors = new Float32Array(position.count * 3);
    colors.fill(1);
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

export function createGutta(numberOfGutta, numberOfMara, version, guttaState, destination) {
    
    guttaState.init = true
    initBreadcrumbMeshes(destination)
    instancePools.gutt = [];
    instancePools.mara = [];

    const gui = new GUI()
    let parameters = {
        gutt_alignment: 0.1,
        gutt_alignment_perception_distance: 0.1,
        gutt_cohesion: 0.15,
        gutt_cohesion_perception_distance: 0.2,
        gutt_separation: 0.3,
        gutt_separation_perception_distance: 0.04,
        gutt_flee: 1.5,
        gutt_flee_perception_distance: 0.15,
        gutt_feed: 0.4,
        gutt_feed_perception_distance: 0.3,
        gutt_wander: 0.1,
        gutt_wander_radius: 0.05,
        gutt_wander_distance: 0.4,
        gutt_wander_jitter: 0.005,
        gutt_wander_altitude: 0.08,
        gutt_max_force: 0.005,
        gutt_thrust_speed: 0.005,   // The max speed under their own wing-power in level flight
        gutt_dive_speed: 0.007,    // A higher cap that they could reach when diving
        gutt_max_acceleration: 0.02,
        gutt_flap_roll_min_deg: 30,
        gutt_flap_roll_max_deg: 60,
        gutt_flap_speed: 2,
        gutt_flap_climb_start: 0.00015,
        gutt_flap_climb_full: 0.0006,
        gutt_kinship_perception_distance: 0.2,
        gutt_kinship_attract: 0.6,
        gutt_kinship_align: 0.3,
        gutt_kinship_juvenile_boost: 2.0,
        gutt_kinship_mother_boost: 1.2,
        gutt_body_mass: 1.0,
        gutt_muscle_power: 1.0,
        gutt_wing_area: 1.0,
        gutt_energy_efficiency: 1.0,
        gutt_vision_acuity: 1.0,
        gutt_reaction_time: 1.0,
        gutt_risk_tolerance: 1.0,
        gutt_alignment_bias: 1.0,
        gutt_cohesion_bias: 1.0,
        gutt_separation_bias: 1.0,
        gutt_wander_bias: 1.0,
        gutt_flee_bias: 1.0,
        gutt_feed_bias: 1.0,

        mara_alignment: 0.1,
        mara_alignment_perception_distance: 0.4,
        mara_cohesion: 0.1,
        mara_cohesion_perception_distance: 0.8,
        mara_separation: 0.4,
        mara_separation_perception_distance: 0.6,
        mara_hunt: 0.9,
        mara_hunt_perception_distance: 1.5,
        mara_wander: 0.3,
        mara_wander_radius: 0.1,
        mara_wander_distance: 0.6,
        mara_wander_jitter: 0.02,
        mara_wander_altitude: 0.2,
        mara_max_force: 0.009,
        mara_thrust_speed: 0.0075,   // The max speed under their own wing-power in level flight
        mara_dive_speed: 0.0125,    // A higher cap that they could reach when diving
        mara_max_acceleration: 0.01,
        mara_vision_angle: 45, 
        mara_kinship_perception_distance: 0.5,
        mara_kinship_attract: 0.6,
        mara_kinship_align: 0.4,
        mara_kinship_juvenile_boost: 2.0,
        mara_kinship_mother_boost: 1.2,
        mara_body_mass: 1.0,
        mara_muscle_power: 1.0,
        mara_wing_area: 1.0,
        mara_energy_efficiency: 1.0,
        mara_vision_acuity: 1.0,
        mara_reaction_time: 1.0,
        mara_risk_tolerance: 1.0,
        mara_alignment_bias: 1.0,
        mara_cohesion_bias: 1.0,
        mara_separation_bias: 1.0,
        mara_wander_bias: 1.0,
        mara_hunt_bias: 1.0,

        //Flight parameters
        altitudeLowerLimit: 5.02,
        altitudeUpperLimit: 5.5,
        latitudeLowerLimit: -73,
        latitudeUpperLimit: 83,
        boundaryForceStrength: 0.001,

        lookaheadFactor: 5.0,            // Determines how far ahead to predict based on speed //1.0
        altitudeBuffer: 0.05,             // Buffer before lower altitude limit to start avoiding
        anticipatoryMultiplier: 2.0,     // Multiplier to adjust steering force intensity

        smoothingFactor: 0.9, // Controls how smoothly the agent rotates
        maxRoll: 45,           // Maximum roll angle in degrees
        rollMultiplier: 0.5,    // Multiplier to adjust roll intensity based on turn

        dragCoefficient: 0.4,
        gravityStrength: 0.0003,     // Acceleration towards planet center
        liftCoefficient: 0.0005,      // How strongly agents can push “up” if pitching upwards
        liftCost: 0.5,              // How much energy is consumed per unit of lift
        energyRegenRate: 0.00008,      // How quickly energy replenishes
        maxEnergy: 1.0,              // Cap for the energy

        // Reproduction
        reproductionEnabled: true, //version === 3,
        gutt_population_cap: Math.max(numberOfGutta + 50, numberOfGutta),
        mara_population_cap: Math.max(numberOfMara + 20, numberOfMara),
        gutt_maturity_frames: 2400,
        mara_maturity_frames: 2800,
        gutt_mate_cooldown_frames: 1800,
        mara_mate_cooldown_frames: 2200,
        gutt_mate_attempt_cooldown_frames: 60,
        mara_mate_attempt_cooldown_frames: 60,
        gutt_mate_success_chance: 0.1,
        mara_mate_success_chance: 0.2,
        gutt_female_ratio: 0.5,
        mara_female_ratio: 0.5,
        gutt_mutation_rate: 0.15,
        mara_mutation_rate: 0.15,
        gutt_mutation_range: 0.05,
        mara_mutation_range: 0.05,
        gutt_trait_min_multiplier: 0.9,
        mara_trait_min_multiplier: 0.9,
        gutt_trait_max_multiplier: 1.1,
        mara_trait_max_multiplier: 1.1,
        gutt_initial_age_max_frames: 16000,
        mara_initial_age_max_frames: 18000,
        gutt_old_age_start_frames: 12000,
        mara_old_age_start_frames: 14000,
        gutt_max_age_frames: 16000,
        mara_max_age_frames: 18000,
        gutt_old_age_hunger_rate: 0.00012,
        mara_old_age_hunger_rate: 0.0001,
        gutt_old_age_energy_drain: 0.00002,
        mara_old_age_energy_drain: 0.000015,
        gutt_courting_frames: 120,
        mara_courting_frames: 120,
        gutt_gestation_frames: 900,
        mara_gestation_frames: 1100,
        gutt_min_energy_to_mate: 0.35,
        mara_min_energy_to_mate: 0.4,
        gutt_max_hunger_to_mate: 0.65,
        mara_max_hunger_to_mate: 0.6,
        gutt_mating_cost: 0.1,
        mara_mating_cost: 0.15,
        gutt_mate_perception_distance: 0.1,
        mara_mate_perception_distance: 0.12,
        gutt_mate_angle: 140,
        mara_mate_angle: 120,
    }

    // Make font smaller
    const style = document.createElement('style');
    style.innerHTML = `.dg, .dg * { font-size:10px !important; }`;
    document.head.appendChild(style);

    const guttaParameters = gui.addFolder('Gutta parameters')
    guttaParameters.add(parameters, 'gutt_alignment',0,1,0.001).name('Alignment');
    guttaParameters.add(parameters, 'gutt_alignment_perception_distance',0,1,0.001).name('Alignment distance');
    guttaParameters.add(parameters, 'gutt_cohesion',0,1,0.001).name('Cohesion');
    guttaParameters.add(parameters, 'gutt_cohesion_perception_distance',0,1,0.001).name('Cohesion distance');
    guttaParameters.add(parameters, 'gutt_separation',0,1,0.001).name('Separation');
    guttaParameters.add(parameters, 'gutt_separation_perception_distance',0,1,0.001).name('Separation distance');
    guttaParameters.add(parameters, 'gutt_flee',0,10,0.01).name('Flee');
    guttaParameters.add(parameters, 'gutt_flee_perception_distance',0,1,0.001).name('Flee distance');
    guttaParameters.add(parameters, 'gutt_feed',0,1,0.001).name('Feed');
    guttaParameters.add(parameters, 'gutt_feed_perception_distance',0,1,0.001).name('Feed distance');
    guttaParameters.add(parameters, 'gutt_wander',0,1,0.001).name('Wander');
    guttaParameters.add(parameters, 'gutt_wander_radius', 0.01, 1, 0.01).name('Wander Radius');
    guttaParameters.add(parameters, 'gutt_wander_distance', 0.01, 1, 0.01).name('Wander Distance');
    guttaParameters.add(parameters, 'gutt_wander_jitter', 0.001, 0.1, 0.001).name('Wander Jitter');
    guttaParameters.add(parameters, 'gutt_wander_altitude', 0, 0.3, 0.001).name('Wander Altitude');
    guttaParameters.add(parameters, 'gutt_max_force',0,0.5,0.001).name('Max Force');
    guttaParameters.add(parameters, 'gutt_thrust_speed',0,0.01,0.0001).name('Max Speed');
    guttaParameters.add(parameters, 'gutt_dive_speed',0,0.1,0.0001).name('Dive Speed');
    guttaParameters.add(parameters, 'gutt_max_acceleration',0,0.1,0.0001).name('Max Acceleration');
    guttaParameters.add(parameters, 'gutt_flap_roll_min_deg',0,60,1).name('Flap Roll Min');
    guttaParameters.add(parameters, 'gutt_flap_roll_max_deg',0,60,1).name('Flap Roll Max');
    guttaParameters.add(parameters, 'gutt_flap_speed',0,6,0.01).name('Flap Speed');
    guttaParameters.add(parameters, 'gutt_flap_climb_start',0,0.005,0.00001).name('Flap Start');
    guttaParameters.add(parameters, 'gutt_flap_climb_full',0,0.005,0.00001).name('Flap Full');
    guttaParameters.add(parameters, 'gutt_kinship_perception_distance',0,1,0.001).name('Kinship Dist');
    guttaParameters.add(parameters, 'gutt_kinship_attract',0,3,0.01).name('Kinship Attract');
    guttaParameters.add(parameters, 'gutt_kinship_align',0,3,0.01).name('Kinship Align');
    guttaParameters.add(parameters, 'gutt_kinship_juvenile_boost',0,5,0.1).name('Kinship Juvenile');
    guttaParameters.add(parameters, 'gutt_kinship_mother_boost',0,5,0.1).name('Kinship Mother');
    guttaParameters.close()

    const maraParameters = gui.addFolder('Mara parameters')
    maraParameters.add(parameters, 'mara_alignment',0,1,0.001).name('Alignment');
    maraParameters.add(parameters, 'mara_alignment_perception_distance',0,1,0.001).name('Alignment distance');
    maraParameters.add(parameters, 'mara_cohesion',0,1,0.001).name('Cohesion');
    maraParameters.add(parameters, 'mara_cohesion_perception_distance',0,1,0.001).name('Cohesion distance');
    maraParameters.add(parameters, 'mara_separation',0,1,0.001).name('Separation');
    maraParameters.add(parameters, 'mara_separation_perception_distance',0,1,0.001).name('Separation distance');
    maraParameters.add(parameters, 'mara_hunt',0,1,0.001).name('Hunt');
    maraParameters.add(parameters, 'mara_hunt_perception_distance',0,2,0.01).name('Hunt distance');
    maraParameters.add(parameters, 'mara_wander',0,1,0.001).name('Wander');
    maraParameters.add(parameters, 'mara_wander_radius', 0.01, 1, 0.01).name('Wander Radius');
    maraParameters.add(parameters, 'mara_wander_distance', 0.01, 1, 0.01).name('Wander Distance');
    maraParameters.add(parameters, 'mara_wander_jitter', 0.001, 0.1, 0.001).name('Wander Jitter');
    maraParameters.add(parameters, 'mara_wander_altitude', 0, 0.5, 0.001).name('Wander Altitude');
    maraParameters.add(parameters, 'mara_max_force',0,0.001,0.00001).name('Max Force');
    maraParameters.add(parameters, 'mara_thrust_speed',0,0.01,0.0001).name('Max Speed');
    maraParameters.add(parameters, 'mara_dive_speed',0,0.1,0.0001).name('Dive Speed');
    maraParameters.add(parameters, 'mara_max_acceleration',0,0.1,0.0001).name('Max Acceleration');
    maraParameters.add(parameters, 'mara_vision_angle', 10, 120, 1).name('Vision Angle');
    maraParameters.add(parameters, 'mara_kinship_perception_distance',0,2,0.01).name('Kinship Dist');
    maraParameters.add(parameters, 'mara_kinship_attract',0,3,0.01).name('Kinship Attract');
    maraParameters.add(parameters, 'mara_kinship_align',0,3,0.01).name('Kinship Align');
    maraParameters.add(parameters, 'mara_kinship_juvenile_boost',0,5,0.1).name('Kinship Juvenile');
    maraParameters.add(parameters, 'mara_kinship_mother_boost',0,5,0.1).name('Kinship Mother');
    maraParameters.close()

    const flightParameters = gui.addFolder('Flight parameters')
    flightParameters.add(parameters, 'altitudeLowerLimit', 5.00, 5.1, 0.01).name('Altitude Lower Limit');
    flightParameters.add(parameters, 'altitudeUpperLimit', 5.1, 5.5, 0.01).name('Altitude Upper Limit');
    flightParameters.add(parameters, 'latitudeLowerLimit', -90, -50, 1).name('Latitude Lower Limit');
    flightParameters.add(parameters, 'latitudeUpperLimit', 50, 90, 1).name('Latitude Upper Limit');
    flightParameters.add(parameters, 'boundaryForceStrength', 0, 1, 0.001).name('Boundary Force Strength');

    flightParameters.add(parameters, 'lookaheadFactor', 0, 10, 0.1).name('Look Ahead Factor');
    flightParameters.add(parameters, 'altitudeBuffer', 0, 1, 0.01).name('Altitude Buffer');
    flightParameters.add(parameters, 'anticipatoryMultiplier', 0, 5, 0.1).name('Anticipatory Multiplier');

    flightParameters.add(parameters, 'smoothingFactor', 0.01, 1, 0.01).name('Smoothing Factor');
    flightParameters.add(parameters, 'maxRoll', 0, 90, 1).name('Max Roll (deg)');
    flightParameters.add(parameters, 'rollMultiplier', 0, 5, 0.1).name('Roll Multiplier');

    flightParameters.add(parameters, 'dragCoefficient', 0, 1, 0.001).name('Drag Coefficient');
    flightParameters.add(parameters, 'gravityStrength', 0, 0.01, 0.0001).name('Gravity Strength');
    flightParameters.add(parameters, 'liftCoefficient', 0, 0.01, 0.0001).name('Lift Coefficient');
    flightParameters.add(parameters, 'liftCost', 0, 0.5, 0.01).name('Lift Cost');
    flightParameters.add(parameters, 'energyRegenRate', 0, 0.0001, 0.000001).name('Energy Regen Rate');
    flightParameters.add(parameters, 'maxEnergy', 0, 1, 0.001).name('Max Energy');
    flightParameters.close()

    const reproductionParameters = gui.addFolder('Reproduction');
    reproductionParameters.add(parameters, 'reproductionEnabled').name('Enable');
    reproductionParameters.add(parameters, 'gutt_population_cap', numberOfGutta, Math.max(numberOfGutta * 1.5, numberOfGutta + 100), 1).name('Gutt Cap');
    reproductionParameters.add(parameters, 'mara_population_cap', numberOfMara, Math.max(numberOfMara * 1.5, numberOfMara + 50), 1).name('Mara Cap');
    reproductionParameters.add(parameters, 'gutt_maturity_frames', 300, 6000, 10).name('Gutt Maturity');
    reproductionParameters.add(parameters, 'mara_maturity_frames', 300, 6000, 10).name('Mara Maturity');
    reproductionParameters.add(parameters, 'gutt_mate_cooldown_frames', 200, 6000, 10).name('Gutt Cooldown');
    reproductionParameters.add(parameters, 'mara_mate_cooldown_frames', 200, 6000, 10).name('Mara Cooldown');
    reproductionParameters.add(parameters, 'gutt_mate_attempt_cooldown_frames', 0, 1200, 10).name('Gutt Attempt CD');
    reproductionParameters.add(parameters, 'mara_mate_attempt_cooldown_frames', 0, 1200, 10).name('Mara Attempt CD');
    reproductionParameters.add(parameters, 'gutt_mate_success_chance', 0, 1, 0.01).name('Gutt Mate Chance');
    reproductionParameters.add(parameters, 'mara_mate_success_chance', 0, 1, 0.01).name('Mara Mate Chance');
    reproductionParameters.add(parameters, 'gutt_female_ratio', 0, 1, 0.01).name('Gutt Female %');
    reproductionParameters.add(parameters, 'mara_female_ratio', 0, 1, 0.01).name('Mara Female %');
    reproductionParameters.add(parameters, 'gutt_mutation_rate', 0, 1, 0.01).name('Gutt Mut Rate');
    reproductionParameters.add(parameters, 'mara_mutation_rate', 0, 1, 0.01).name('Mara Mut Rate');
    reproductionParameters.add(parameters, 'gutt_mutation_range', 0, 0.5, 0.01).name('Gutt Mut Range');
    reproductionParameters.add(parameters, 'mara_mutation_range', 0, 0.5, 0.01).name('Mara Mut Range');
    reproductionParameters.add(parameters, 'gutt_trait_min_multiplier', 0.5, 1, 0.01).name('Gutt Trait Min');
    reproductionParameters.add(parameters, 'mara_trait_min_multiplier', 0.5, 1, 0.01).name('Mara Trait Min');
    reproductionParameters.add(parameters, 'gutt_trait_max_multiplier', 1, 1.5, 0.01).name('Gutt Trait Max');
    reproductionParameters.add(parameters, 'mara_trait_max_multiplier', 1, 1.5, 0.01).name('Mara Trait Max');
    reproductionParameters.add(parameters, 'gutt_initial_age_max_frames', 0, 50000, 100).name('Gutt Age Seed Max');
    reproductionParameters.add(parameters, 'mara_initial_age_max_frames', 0, 50000, 100).name('Mara Age Seed Max');
    reproductionParameters.add(parameters, 'gutt_old_age_start_frames', 0, 50000, 100).name('Gutt Old Age');
    reproductionParameters.add(parameters, 'mara_old_age_start_frames', 0, 50000, 100).name('Mara Old Age');
    reproductionParameters.add(parameters, 'gutt_max_age_frames', 0, 50000, 100).name('Gutt Max Age');
    reproductionParameters.add(parameters, 'mara_max_age_frames', 0, 50000, 100).name('Mara Max Age');
    reproductionParameters.add(parameters, 'gutt_old_age_hunger_rate', 0, 0.001, 0.00001).name('Gutt Old Hunger');
    reproductionParameters.add(parameters, 'mara_old_age_hunger_rate', 0, 0.001, 0.00001).name('Mara Old Hunger');
    reproductionParameters.add(parameters, 'gutt_old_age_energy_drain', 0, 0.001, 0.00001).name('Gutt Old Drain');
    reproductionParameters.add(parameters, 'mara_old_age_energy_drain', 0, 0.001, 0.00001).name('Mara Old Drain');
    reproductionParameters.add(parameters, 'gutt_courting_frames', 0, 2000, 10).name('Gutt Courting');
    reproductionParameters.add(parameters, 'mara_courting_frames', 0, 2000, 10).name('Mara Courting');
    reproductionParameters.add(parameters, 'gutt_gestation_frames', 100, 4000, 10).name('Gutt Gestation');
    reproductionParameters.add(parameters, 'mara_gestation_frames', 100, 4000, 10).name('Mara Gestation');
    reproductionParameters.close();
    if (version !== 0) gui.hide()
    
    const guttaScale = 0.0002;
    const maraScale = 0.0002;
    const guttaShape = createGuttaShape(version, guttaScale);
    const guttaGeometry = createExtrudeGeometry(guttaShape, guttaScale, version);
    ensureVertexColors(guttaGeometry);

    const maraShape = createMaraShape(version, maraScale);
    const maraGeometry = createExtrudeGeometry(maraShape, maraScale, version);
    ensureVertexColors(maraGeometry);

    const testBird = new THREE.MeshLambertMaterial({color:0xcc6655, side:DoubleSide})
    const redBird = new THREE.MeshLambertMaterial({color:0xcc6655, side:DoubleSide})
    const greyBird = new THREE.MeshLambertMaterial({color:0xcc7788, side:DoubleSide})
    const darkBird = new THREE.MeshLambertMaterial({color:0xbb4455, side:DoubleSide})

    const testMara = new THREE.MeshLambertMaterial({color:0x333333, side:DoubleSide})
    const darkMara = new THREE.MeshLambertMaterial({color:0x222222, side:DoubleSide})
    const plainMara = new THREE.MeshLambertMaterial({color:0x333333, side:DoubleSide})
    const lightMara = new THREE.MeshLambertMaterial({color:0x444444, side:DoubleSide})

    const instancedMaterials = [testBird, redBird, greyBird, darkBird, testMara, darkMara, plainMara, lightMara];
    instancedMaterials.forEach((material) => {
        material.userData.baseColor = material.color.clone();
        material.color.set(0xffffff);
        material.vertexColors = true;
    });

    const guttaCapacity = Math.max(numberOfGutta, Math.floor(parameters.gutt_population_cap));
    const maraCapacity = Math.max(numberOfMara, Math.floor(parameters.mara_population_cap));

    // Keep track of how many gutta per material variant
    let testCount = 1; // You had i=0 as testBird
    const guttaRemaining = Math.max(0, guttaCapacity - testCount);
    let redCount = Math.ceil(guttaRemaining / 3);
    let greyCount = Math.ceil((guttaRemaining - redCount) / 2);
    let darkCount = Math.max(0, guttaCapacity - testCount - redCount - greyCount);

    // Similarly for Mara:
    let testMaraCount = 1;
    const maraRemaining = Math.max(0, maraCapacity - testMaraCount);
    let darkMaraCount = Math.ceil(maraRemaining / 3);
    let plainMaraCount = Math.ceil((maraRemaining - darkMaraCount) / 2);
    let lightMaraCount = Math.max(0, maraCapacity - testMaraCount - darkMaraCount - plainMaraCount);

    // Create InstancedMeshes for Gutta:
    guttaInstancedMeshes.testBird = new InstancedMesh(guttaGeometry, testBird, testCount);
    guttaInstancedMeshes.redBird = new InstancedMesh(guttaGeometry, redBird, redCount);
    guttaInstancedMeshes.greyBird = new InstancedMesh(guttaGeometry, greyBird, greyCount);
    guttaInstancedMeshes.darkBird = new InstancedMesh(guttaGeometry, darkBird, darkCount);

    // Create InstancedMeshes for Mara:
    maraInstancedMeshes.testMara = new InstancedMesh(maraGeometry, testMara, testMaraCount);
    maraInstancedMeshes.darkMara = new InstancedMesh(maraGeometry, darkMara, darkMaraCount);
    maraInstancedMeshes.plainMara = new InstancedMesh(maraGeometry, plainMara, plainMaraCount);
    maraInstancedMeshes.lightMara = new InstancedMesh(maraGeometry, lightMara, lightMaraCount);

    guttaInstancedMeshes.testBird.userData.baseColor = testBird.userData.baseColor.clone();
    guttaInstancedMeshes.redBird.userData.baseColor = redBird.userData.baseColor.clone();
    guttaInstancedMeshes.greyBird.userData.baseColor = greyBird.userData.baseColor.clone();
    guttaInstancedMeshes.darkBird.userData.baseColor = darkBird.userData.baseColor.clone();
    maraInstancedMeshes.testMara.userData.baseColor = testMara.userData.baseColor.clone();
    maraInstancedMeshes.darkMara.userData.baseColor = darkMara.userData.baseColor.clone();
    maraInstancedMeshes.plainMara.userData.baseColor = plainMara.userData.baseColor.clone();
    maraInstancedMeshes.lightMara.userData.baseColor = lightMara.userData.baseColor.clone();

    // Register pools for offspring allocation
    registerInstancePool('gutt', guttaInstancedMeshes.testBird);
    registerInstancePool('gutt', guttaInstancedMeshes.redBird);
    registerInstancePool('gutt', guttaInstancedMeshes.greyBird);
    registerInstancePool('gutt', guttaInstancedMeshes.darkBird);
    registerInstancePool('mara', maraInstancedMeshes.testMara);
    registerInstancePool('mara', maraInstancedMeshes.darkMara);
    registerInstancePool('mara', maraInstancedMeshes.plainMara);
    registerInstancePool('mara', maraInstancedMeshes.lightMara);

    // Add them to the destination scene
    destination.add(
        guttaInstancedMeshes.testBird,
        guttaInstancedMeshes.redBird,
        guttaInstancedMeshes.greyBird,
        guttaInstancedMeshes.darkBird,

        maraInstancedMeshes.testMara,
        maraInstancedMeshes.darkMara,
        maraInstancedMeshes.plainMara,
        maraInstancedMeshes.lightMara
    );

    guttaInstancedMeshes.testBird.frustumCulled = false;
    guttaInstancedMeshes.redBird.frustumCulled = false;
    guttaInstancedMeshes.greyBird.frustumCulled = false;
    guttaInstancedMeshes.darkBird.frustumCulled = false;
    maraInstancedMeshes.testMara.frustumCulled = false;
    maraInstancedMeshes.darkMara.frustumCulled = false;
    maraInstancedMeshes.plainMara.frustumCulled = false;
    maraInstancedMeshes.lightMara.frustumCulled = false;

    // We'll keep counters to assign instance indices
    let testIndex = 0, redIndex = 0, greyIndex = 0, darkIndex = 0;
    let testMaraIndex = 0, darkMaraIndex = 0, plainMaraIndex = 0, lightMaraIndex = 0;

    // Now create Gutta agents without adding their meshes individually.
    // Instead, assign them to a particular instanced mesh and record the instanceIndex.
    for (let i = 0; i < numberOfGutta; i++) {
        let meshRef, idxRef;
        if (i == 0) {
            meshRef = guttaInstancedMeshes.testBird;
            idxRef = testIndex++;
        } else if (i <= numberOfGutta / 3) {
            meshRef = guttaInstancedMeshes.redBird;
            idxRef = redIndex++;
        } else if (i < numberOfGutta / 3 * 2) {
            meshRef = guttaInstancedMeshes.greyBird;
            idxRef = greyIndex++;
        } else {
            meshRef = guttaInstancedMeshes.darkBird;
            idxRef = darkIndex++;
        }

        const agent = new Gutt(0, 0, guttaGeometry, meshRef, idxRef, guttaState.gutta, guttaState, destination, parameters, "gutt", version, i);
        assignInitialAge(agent, parameters);
        agent.updateInstanceMatrix();
        guttaState.gutta.push(agent);
    }

    for (let i = 0; i < numberOfMara; i++) {
        let meshRef, idxRef;
        if (i == 0) {
            meshRef = maraInstancedMeshes.testMara;
            idxRef = testMaraIndex++;
        } else if (i <= numberOfMara / 3) {
            meshRef = maraInstancedMeshes.darkMara;
            idxRef = darkMaraIndex++;
        } else if (i < numberOfMara / 3 * 2) {
            meshRef = maraInstancedMeshes.plainMara;
            idxRef = plainMaraIndex++;
        } else {
            meshRef = maraInstancedMeshes.lightMara;
            idxRef = lightMaraIndex++;
        }

        const agent = new Gutt(0, 0, maraGeometry, meshRef, idxRef, guttaState.mara, guttaState, destination, parameters, "mara", version, i);
        assignInitialAge(agent, parameters);
        agent.updateInstanceMatrix();
        guttaState.mara.push(agent);
    }

    // Track used slots for reproduction headroom
    guttaInstancedMeshes.testBird.userData.used = testIndex;
    guttaInstancedMeshes.redBird.userData.used = redIndex;
    guttaInstancedMeshes.greyBird.userData.used = greyIndex;
    guttaInstancedMeshes.darkBird.userData.used = darkIndex;
    maraInstancedMeshes.testMara.userData.used = testMaraIndex;
    maraInstancedMeshes.darkMara.userData.used = darkMaraIndex;
    maraInstancedMeshes.plainMara.userData.used = plainMaraIndex;
    maraInstancedMeshes.lightMara.userData.used = lightMaraIndex;

    // Shared references for spawning offspring
    guttaState.shared = {
        guttaGeometry,
        maraGeometry,
        parameters,
        destination,
        version,
    };
    guttaState.nextGuttId = guttaState.gutta.length;
    guttaState.nextMaraId = guttaState.mara.length;
}

export function updateGutta(guttaState, guttaStats, jaranius, nuggets, developer, octreeHelperRoot) {
    if (!guttaState.init) return;

    guttaState.tick = (guttaState.tick ?? 0) + 1;
    const tick = guttaState.tick;

    // Create a Octtree by using a copy of the 
    const guttTree = new Octree(guttaState.gutta);
    const maraTree = new Octree(guttaState.mara);

    // Visualize the Gutta octree (optional, enable for debugging)
    if (developer == true) visualizeOctree(guttTree, octreeHelperRoot);

    const newbornQueue = [];
    const pairedSet = new Set();

    handleSpeciesMating({ agents: guttaState.gutta, tree: guttTree, tick, newbornQueue, pairedSet, guttaStats });
    handleSpeciesMating({ agents: guttaState.mara, tree: maraTree, tick, newbornQueue, pairedSet, guttaStats });

    for (let i=0; i<guttaState.gutta.length; i++) {
        let g = guttaState.gutta[i]
        if (g.dead) continue;
        g.syncLifecycleParameters();
        g.updateMode();
        g.calculateWander();
        g.calculateSteeringForces(guttTree)
        g.calculateKinship(guttTree);
        g.calculateFleeing(maraTree);
        g.calculateFeeding(nuggets);
        g.calculateAvoidance();
        g.move(guttaStats);
    }

    for (let i=0; i<guttaState.mara.length; i++) {
        let m = guttaState.mara[i]
        if (m.dead) continue;
        m.syncLifecycleParameters();
        m.calculateWander();
        m.calculateSteeringForces(maraTree)
        m.calculateKinship(maraTree);
        m.calculateHunting(guttaStats, guttTree);
        m.calculateAvoidance();
        m.glide();
    }

    // Spawn new agents after movement so they start with fresh transforms
    for (const parent of newbornQueue) {
        const didSpawn = spawnOffspring(parent, guttaState);
        const prefix = parent.species === "gutt" ? "gutt" : "mara";
        const birthKey = `${prefix}Births`;
        const blockedKey = `${prefix}BirthsBlocked`;
        if (didSpawn) {
            guttaStats[birthKey] = (guttaStats[birthKey] || 0) + 1;
        } else {
            guttaStats[blockedKey] = (guttaStats[blockedKey] || 0) + 1;
        }
    }

    cullDeadAgents(guttaState.gutta, guttaStats);
    cullDeadAgents(guttaState.mara, guttaStats);

    // ============================
    // Drop a crumb for the example Gutt
    // ============================
    frameCount++;
    if (frameCount % 10 === 0) {
        if (guttaState.gutta.length > 0) {
            const exampleGutt = getExampleAgentFromState(guttaState, "gutt");
            dropBreadcrumbInstanced(exampleGutt, guttCrumbMesh, 'gutt');
        }
        if (guttaState.mara.length > 0) {
            const exampleMara = getExampleAgentFromState(guttaState, "mara");
            dropBreadcrumbInstanced(exampleMara, maraCrumbMesh, 'mara');
        }
    }

    // Refresh stats here after updates
    refreshStats(guttaState, guttaStats);
}

function dropBreadcrumbInstanced(agent, crumbMesh, species) {
    // We'll build a small transform matrix at the agent's position.
    // The crumb size is determined by crumbMesh's geometry, so just position.
    const dummyMatrix = new THREE.Matrix4();
    dummyMatrix.setPosition(agent.position3D);

    // Decide which ring buffer index to use: gutt or mara
    let index;
    if (species === 'gutt') {
        index = guttCrumbIndex;
        guttCrumbIndex = (guttCrumbIndex + 1) % MAX_CRUMBS;
    } else {
        index = maraCrumbIndex;
        maraCrumbIndex = (maraCrumbIndex + 1) % MAX_CRUMBS;
    }

    // Place the crumb in the InstancedMesh
    crumbMesh.setMatrixAt(index, dummyMatrix);
    crumbMesh.instanceMatrix.needsUpdate = true;
}

function initBreadcrumbMeshes(jaranius) {
    const crumbGeometry = new THREE.SphereGeometry(0.001, 8, 8);

    // You can vary materials to color the Gutt vs. Mara crumbs differently
    const guttCrumbMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const maraCrumbMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Create InstancedMesh for Gutt
    guttCrumbMesh = new THREE.InstancedMesh(crumbGeometry, guttCrumbMaterial, MAX_CRUMBS);
    guttCrumbMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); 
    guttCrumbMesh.frustumCulled = false;
    guttCrumbMesh.visible = false;

    // Create InstancedMesh for Mara
    maraCrumbMesh = new THREE.InstancedMesh(crumbGeometry, maraCrumbMaterial, MAX_CRUMBS);
    maraCrumbMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    maraCrumbMesh.frustumCulled = false;
    maraCrumbMesh.visible = false;

    // Add them to jaranius (so they rotate with the planet, if jaranius is rotating)
    jaranius.add(guttCrumbMesh);
    jaranius.add(maraCrumbMesh);
}
