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
        for (let a of this.agents) {
            const dx = a.position3D.x - center.x;
            const dy = a.position3D.y - center.y;
            const dz = a.position3D.z - center.z;
            const distSq = dx*dx + dy*dy + dz*dz;
            const radiusSq = radius*radius;
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

    rangeSearch(target, radius) {
        const results = [];
        this.root.rangeSearch(target, radius, results);
        return results;
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

        // === NEW: add a "mode" property ===
        // Possible modes:
        //   Gutta:   "exploring", "mating", "feeding"
        //   Mara:    "exploring", "mating", "hunting"
        this.mode = "exploring";  

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
        this.wanderTarget = new THREE.Vector3(this.parameters.gutt_wander_radius, 0, 0);
        this.alignment = new THREE.Vector3(0, 0, 0)
        this.cohesion = new THREE.Vector3(0, 0, 0)
        this.separation = new THREE.Vector3(0, 0, 0)
        this.hunt = new THREE.Vector3(0, 0, 0)
        this.flee = new THREE.Vector3(0, 0, 0)
        this.feed = new THREE.Vector3(0, 0, 0)
        this.avoidance = new THREE.Vector3(0, 0, 0)

        this.name = generateRandomSanskritName()
        this.hunger = 0.5
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

        this.updateInstanceMatrix();
    }

    updateMode(octtree, jaranius, nuggets) {
        // This is just an example. Customize the logic and thresholds to your liking.
        if (this.species === "gutt") {
            // Example: If hunger > 0.7 => feed mode, else exploring
            if (this.hunger > 0.7) {
                this.mode = "feeding";
            } else {
                this.mode = "exploring";
            }
            // If you wanted a mating mode, you'd also check some condition, e.g.:
            // if (someMateIsClose) this.mode = "mating";
        } 
        else if (this.species === "mara") {
            // Example: If hunger > 0.7 => hunting mode, else exploring
            if (this.hunger > 0.7) {
                this.mode = "hunting";
            } else {
                this.mode = "exploring";
            }
            // If you wanted a mating mode, you'd do similarly here.
        }
    }

    move() {
    
        // Hunger mechanics
        if (this.hunger < 1) this.hunger += 0.0001;
    
        // Compute net acceleration from all steering behaviors
        this.acceleration3D.set(0,0,0);
        this.acceleration3D.add(this.wander);
        this.acceleration3D.add(this.alignment);
        this.acceleration3D.add(this.cohesion);
        this.acceleration3D.add(this.separation);
    
        // Species-specific behaviors
        if (this.species === "gutt") {
            this.acceleration3D.add(this.flee);
            this.acceleration3D.add(this.feed);
        } else if (this.species === "mara") {
            this.acceleration3D.add(this.hunt);
        }
    
        this.acceleration3D.add(this.avoidance);
    
        // Limit acceleration
        const maxAcceleration = (this.species === "gutt") ? this.parameters.gutt_max_acceleration : this.parameters.mara_max_acceleration;
        const rawAcceleration = this.acceleration3D.clone();
        if (this.acceleration3D.length() > maxAcceleration) {
            this.acceleration3D.setLength(maxAcceleration);
        }
    
        // Apply drag
        this.acceleration3D.add(this.velocity3D.clone().multiplyScalar(-this.parameters.dragCoefficient));
    
        // Update velocity
        this.velocity3D.add(this.acceleration3D);
    
        // Limit speed
        const maxSpeed = (this.species === "gutt") ? this.parameters.gutt_max_speed : this.parameters.mara_max_speed;
        if (this.velocity3D.length() > maxSpeed) {
            this.velocity3D.setLength(maxSpeed);
        }
    
        // Update position
        this.position3D.add(this.velocity3D);
    
        // Compute forward direction
        let forward = this.velocity3D.clone();
        if (forward.lengthSq() < 0.000001) {
            forward.set(0,0,1); // Default forward if almost stationary
        } else {
            forward.normalize();
        }
    
        // Determine orientation from forward direction
        const globalUp = new THREE.Vector3(0,1,0);
        let right = new THREE.Vector3().crossVectors(globalUp, forward).normalize();
        if (right.lengthSq() < 0.000001) {
            right.set(1,0,0);
        }
        let up = new THREE.Vector3().crossVectors(forward, right).normalize();
    
        // Create a rotation matrix from forward/up/right
        // We'll build a rotation matrix from the basis vectors:
        const rotationMatrix = new THREE.Matrix4();
        rotationMatrix.makeBasis(right, up, forward);
    
        // Convert to a quaternion
        let desiredQuaternion = new THREE.Quaternion().setFromRotationMatrix(rotationMatrix);
    
        // Smooth orientation changes
        this.currentQuaternion.slerp(desiredQuaternion, this.parameters.smoothingFactor);
    
        // Compute roll based on turning
        let deltaForward = forward.clone().sub(this.previousForward).normalize();
        let turnAngle = Math.asin(deltaForward.length() / 2); // Approximate small angle turns
        const maxRoll = THREE.MathUtils.degToRad(this.parameters.maxRoll);
        let rollAngle = THREE.MathUtils.clamp(turnAngle * this.parameters.rollMultiplier, -maxRoll, maxRoll);
    
        // Apply roll around the forward axis
        let qRoll = new THREE.Quaternion().setFromAxisAngle(forward, rollAngle);
        this.currentQuaternion.multiply(qRoll);
    
        // Update previous forward
        this.previousForward.copy(forward);
    
        // Compose the final transformation matrix for this instance
        const m = new THREE.Matrix4();
        m.compose(this.position3D, this.currentQuaternion, new THREE.Vector3(1,1,1));
    
        // Update the InstancedMesh
        this.meshRef.setMatrixAt(this.instanceIndex, m);
        this.meshRef.instanceMatrix.needsUpdate = true;
    }

    calculateWander() {
        const isGutt = (this.species === "gutt");
        
        // Retrieve species-specific parameters
        const wanderFactor = isGutt ? this.parameters.gutt_wander : this.parameters.mara_wander;
        const maxForce = isGutt 
            ? this.parameters.gutt_max_force * (1 - this.hunger / 2) 
            : this.parameters.mara_max_force;
    
        const wanderRadius = isGutt ? this.parameters.gutt_wander_radius : this.parameters.mara_wander_radius;
        const wanderDistance = isGutt ? this.parameters.gutt_wander_distance : this.parameters.mara_wander_distance;
        const wanderJitter = isGutt ? this.parameters.gutt_wander_jitter : this.parameters.mara_wander_jitter;
        const targetAltitude = 5.0 + (isGutt ? this.parameters.gutt_wander_altitude : this.parameters.mara_wander_altitude);
    
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
        // Determine the maximum perception distance among alignment, cohesion, separation
        let maxPerception = Math.max(
            this.parameters.gutt_alignment_perception_distance,
            this.parameters.gutt_cohesion_perception_distance,
            this.parameters.gutt_separation_perception_distance
        );
    
        // Single neighbor search
        let neighbors = octtree.rangeSearch({x:this.position3D.x, y:this.position3D.y, z:this.position3D.z}, maxPerception);
    
        // Filter once
        neighbors = this.filterByVisionCone(neighbors);
    
        // Initialize forces to zero
        this.alignment.set(0,0,0);
        this.cohesion.set(0,0,0);
        this.separation.set(0,0,0);
    
        // Counters to track how many neighbors contributed to each force
        let alignmentCount = 0;
        let cohesionCount = 0;
        let separationCount = 0;
    
        const alignDist = this.parameters.gutt_alignment_perception_distance;
        const coheDist = this.parameters.gutt_cohesion_perception_distance;
        const sepaDist = this.parameters.gutt_separation_perception_distance;
    
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
    
        const maxF = this.parameters.gutt_max_force;
    
        // Finalize Alignment
        if (alignmentCount > 0) {
            this.alignment.divideScalar(alignmentCount);
            this.alignment.sub(this.velocity3D);
            this.alignment.clampLength(-maxF, maxF);
            this.alignment.multiplyScalar(this.parameters.gutt_alignment);
        }
    
        // Finalize Cohesion
        if (cohesionCount > 0) {
            this.cohesion.divideScalar(cohesionCount);
            this.cohesion.sub(this.position3D);
            this.cohesion.clampLength(-maxF, maxF);
            this.cohesion.multiplyScalar(this.parameters.gutt_cohesion);
        }
    
        // Finalize Separation
        if (separationCount > 0) {
            this.separation.divideScalar(separationCount);
            this.separation.clampLength(-maxF, maxF);
            this.separation.multiplyScalar(this.parameters.gutt_separation);
        }
    }

    calculateAlignment(octtree) {
        let perception = (this.species == "gutt") ? this.parameters.gutt_alignment_perception_distance : this.parameters.mara_alignment_perception_distance
        this.alignment.set(0,0,0)
        let neighbors = octtree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
        neighbors = this.filterByVisionCone(neighbors);
        let counter = 0
        for (let agent of neighbors) {
            if (agent!==this) {
                this.alignment.add(agent.velocity3D)
                counter++;
            }
        }
        if (counter > 0) {
            this.alignment.divideScalar(counter)
            this.alignment.sub(this.velocity3D)
            const maxF = (this.species == "gutt") ? this.parameters.gutt_max_force : this.parameters.mara_max_force
            const alignStr = (this.species == "gutt") ? this.parameters.gutt_alignment : this.parameters.mara_alignment
            this.alignment.clampLength(-maxF, maxF)
            this.alignment.multiplyScalar(alignStr)
        }
    }

    calculateCohesion(octtree) {
        let perception = (this.species == "gutt") ? this.parameters.gutt_cohesion_perception_distance : this.parameters.mara_cohesion_perception_distance
        this.cohesion.set(0,0,0)
        let neighbors = octtree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
        neighbors = this.filterByVisionCone(neighbors);
        let counter = 0
        for (let agent of neighbors) {
            if (agent!==this) {
                this.cohesion.add(agent.position3D)
                counter++;
            }
        }
        if (counter > 0) {
            this.cohesion.divideScalar(counter)
            this.cohesion.sub(this.position3D)
            const maxF = (this.species == "gutt") ? this.parameters.gutt_max_force : this.parameters.mara_max_force
            const cohStr = (this.species == "gutt") ? this.parameters.gutt_cohesion : this.parameters.mara_cohesion
            this.cohesion.clampLength(-maxF, maxF)
            this.cohesion.multiplyScalar(cohStr)
        }
    }

    calculateSeparation(octtree) {
        let perception = (this.species == "gutt") ? this.parameters.gutt_separation_perception_distance : this.parameters.mara_separation_perception_distance
        this.separation.set(0,0,0)
        let neighbors = octtree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
        neighbors = this.filterByVisionCone(neighbors);
        let counter = 0
        for (let agent of neighbors) {
            if (agent!==this) {
                let d = this.position3D.distanceTo(agent.position3D)
                if (d < perception && d > 0) {
                    let diff = this.position3D.clone().sub(agent.position3D)
                    diff.divideScalar(d)
                    this.separation.add(diff)
                    counter++;
                }
            }
        }
        if (counter > 0) {
            this.separation.divideScalar(counter)
            const maxF = (this.species == "gutt") ? this.parameters.gutt_max_force : this.parameters.mara_max_force
            const sepStr = (this.species == "gutt") ? this.parameters.gutt_separation : this.parameters.mara_separation
            this.separation.clampLength(-maxF, maxF)
            this.separation.multiplyScalar(sepStr)
        }
    }

    calculateHunting(guttaStats, octtree) {
        if (this.species !== "mara") return guttaStats;
        let perception = this.parameters.mara_hunt_perception_distance
        this.hunt.set(0,0,0)
        let neighbors = octtree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
        neighbors = this.filterByVisionCone(neighbors);
        let counter = 0
        for (let prey of neighbors) {
            if (prey!==this) {
                let d = this.position3D.distanceTo(prey.position3D)
                if (d < perception) {
                    if (d < 0.04 && this.hunger > 0.2) {
                        guttaStats.kills += 1
                        guttaStats.totalHungerAtKill += this.hunger
                        this.hunger = 0
                        this.kills += 1
                    }
                    this.hunt.add(prey.position3D)
                    counter++;
                }
            }
        }
        if (counter > 0) {
            this.hunt.divideScalar(counter)
            this.hunt.sub(this.position3D)
            this.hunt.clampLength(-this.parameters.mara_max_force*this.hunger, this.parameters.mara_max_force*this.hunger)
            this.hunt.multiplyScalar(this.parameters.mara_hunt)
        }
        return guttaStats
    }

    calculateFleeing(octtree) {
        if (this.species !== "gutt") return;
        let perception = this.parameters.gutt_flee_perception_distance
        this.flee.set(0,0,0)
        let neighbors = octtree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
        let counter = 0
        for (let predator of neighbors) {
            if (predator!==this) {
                let d = this.position3D.distanceTo(predator.position3D)
                if (d < perception) {
                    let diff = this.position3D.clone().sub(predator.position3D)
                    diff.divideScalar(d)
                    this.flee.add(diff)
                    counter++;
                }
            }
        }
        if (counter > 0) {
            this.flee.divideScalar(counter)
            this.flee.clampLength(-this.parameters.gutt_max_force, this.parameters.gutt_max_force)
            this.flee.multiplyScalar(this.parameters.gutt_flee)
        }
    }

    calculateFeeding(guttaStats, jaranius, nuggets) {
        let perception = this.parameters.gutt_feed_perception_distance
        this.feed.set(0,0,0)
        let counter = 0
        for (let i=0; i<nuggets.length; i++) {
            let nuggetPos = nuggets[i].nugget.position.clone()
            nuggetPos.applyMatrix4(jaranius.matrixWorld);
            let d = this.position3D.distanceTo(nuggetPos)
            if (d < perception) {
                if (d < 0.05 && this.hunger > 0.05) {
                    guttaStats.munch += 1
                    guttaStats.totalHungerAtMunch += this.hunger
                    this.hunger -= 0.05
                    this.munches += 1
                }
                let nugVec = nuggetPos.clone().sub(this.position3D)
                this.feed.add(nugVec)
                counter++;
            }
        }
        if (counter>0) {
            this.feed.divideScalar(counter)
            const hungerF = this.hunger 
            this.feed.clampLength(-this.parameters.gutt_max_force * hungerF, this.parameters.gutt_max_force * hungerF)
            this.feed.multiplyScalar(this.parameters.gutt_feed)
        }
        return guttaStats
    }

    calculateAvoidance() {
        this.avoidance.set(0,0,0);
    
        const currentRadius = this.position3D.length();
        const lowerLimit = this.parameters.altitudeLowerLimit;
        const upperLimit = this.parameters.altitudeUpperLimit;
        let boundaryForce = this.parameters.boundaryForceStrength;
        const lookaheadFactor = this.parameters.lookaheadFactor || 2.0;
        const buffer = this.parameters.altitudeBuffer || 0.2;
        const anticipatoryMultiplier = this.parameters.anticipatoryMultiplier || 2.0;
    
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
        if (futureRadius > (upperLimit - buffer)) {
            const penetration = futureRadius - (upperLimit - buffer);
            const steeringForceDir = futurePosition.clone().normalize().multiplyScalar(-1); // direction inward
            this.avoidance.add(steeringForceDir.multiplyScalar(penetration * boundaryForce * 10 * anticipatoryMultiplier));
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
            this.avoidance.add(forceDir.multiplyScalar(penetration * boundaryForce * 100));
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

    updateInstanceMatrix() {
        // Compute a matrix from position and orientation
        const m = new THREE.Matrix4();
        const q = new THREE.Quaternion();
        // Orientation is computed in move(). Here we simply set position and orientation:
        // At initialization, just set a default orientation.
        q.setFromEuler(new THREE.Euler(0,0,0));
        m.compose(this.position3D, q, new THREE.Vector3(1,1,1));

        this.meshRef.setMatrixAt(this.instanceIndex, m);
        this.meshRef.instanceMatrix.needsUpdate = true;
    }

    filterByVisionCone(neighbors) {
        if (this.species !== "mara") return neighbors;
        const forward = this.velocity3D.clone().normalize();
        const halfAngle = (this.parameters.mara_vision_angle || 45) * Math.PI/180;
        return neighbors.filter(agent => {
            if (agent === this) return false;
            const dir = agent.position3D.clone().sub(this.position3D).normalize();
            const angle = forward.angleTo(dir);
            return angle < halfAngle;
        });
    }
}

function refreshStats(guttaState, guttaStats) {
    const guttaStatScreen = document.querySelector('#guttaStatScreen');
    guttaStatScreen.innerHTML = "";
    const statsDisplay = document.createElement('div');

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

    const guttStats = computeStats(guttaState.gutta);
    const maraStats = computeStats(guttaState.mara);

    const avgHungerAtMunch = (guttaStats.munch>0)? (guttaStats.totalHungerAtMunch/guttaStats.munch).toFixed(3): "N/A";
    const avgHungerAtKill = (guttaStats.kills>0)? (guttaStats.totalHungerAtKill/guttaStats.kills).toFixed(3): "N/A";

    statsDisplay.innerHTML = `
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
    `;

    // ====== Detailed Stats for First Gutt ======
    if (guttaState) {
        const exampleGutt = guttaState.gutta[0];
        const guttLatLng = convertCartesiantoLatLng(exampleGutt.position3D.x, exampleGutt.position3D.y, exampleGutt.position3D.z);
        const guttAltitude = ((exampleGutt.position3D.length() - 5.0)*1000).toFixed(1); 

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

        statsDisplay.innerHTML += `
            <b>Example Gutt Stats:</b><br>
            Name: ${exampleGutt.name}<br>
            Position: (${guttLatLng.lat.toFixed(1)}°, ${guttLatLng.lng.toFixed(1)}°)<br>
            Closest Node: ${closestNodeGutt ? closestNodeGutt.text : 'None'}<br>
            Velocity: ${(exampleGutt.velocity3D.length()*1000).toFixed(2)} m/s<br>
            Altitude: ${guttAltitude}m<br>
            Hunger: ${exampleGutt.hunger.toFixed(3)}<br>
            Munches: ${exampleGutt.munches || 0}<br>
            Closest Mara Distance: ${closestMaraDistance.toFixed(1)}m<br>
            Closest Call: ${(exampleGutt.closestCall || Infinity).toFixed(2)}m<br><br>
        `;
    } else {
        statsDisplay.innerHTML += `<b>Example Gutt Stats:</b><br>No Gutt available.<br><br>`;
    }

    // ====== Detailed Stats for First Mara ======
    if (guttaState) {
        const exampleMara = guttaState.mara[0];
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

        statsDisplay.innerHTML += `
            <b>Example Mara Stats:</b><br>
            Name: ${exampleMara.name}<br>
            Position: (${maraLatLng.lat.toFixed(1)}°, ${maraLatLng.lng.toFixed(1)}°)<br>
            Closest Node: ${closestNodeMara ? closestNodeMara.text : 'None'}<br>
            Velocity: ${(exampleMara.velocity3D.length()*1000).toFixed(4)} m/s<br>
            Altitude: ${maraAltitude}m<br>
            Hunger: ${exampleMara.hunger.toFixed(3)}<br>
            Kills: ${exampleMara.kills || 0}<br>
            Closest Gutt Distance: ${closestGuttDistance.toFixed(1)}m<br>
            Nearest Miss: ${(exampleMara.nearestMiss || Infinity).toFixed(2)}m<br><br>
        `;
    } else {
        statsDisplay.innerHTML += `<b>Example Mara Stats:</b><br>No Mara available.<br><br>`;
    }

    guttaStatScreen.appendChild(statsDisplay);
}

function createGuttaShape(version, scale=0.0002) {
    if (version === 3) scale=scale*5;
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
    if (version === 3) scale=scale*5;
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
    if (version === 3) scale=scale*5;
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

export function createGutta(numberOfGutta, numberOfMara, version, guttaState, destination) {
    
    guttaState.init = true

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
        gutt_max_speed: 0.005,
        gutt_max_acceleration: 0.02,

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
        mara_max_speed: 0.0075,
        mara_max_acceleration: 0.01,
        mara_vision_angle: 45, 

        //Flight parameters
        altitudeLowerLimit: 5.02,
        altitudeUpperLimit: 5.5,
        latitudeLowerLimit: -73,
        latitudeUpperLimit: 83,
        boundaryForceStrength: 0.001,

        lookaheadFactor: 1.0,            // Determines how far ahead to predict based on speed
        altitudeBuffer: 0.05,             // Buffer before lower altitude limit to start avoiding
        anticipatoryMultiplier: 2.0,     // Multiplier to adjust steering force intensity

        smoothingFactor: 0.9, // Controls how smoothly the agent rotates
        maxRoll: 45,           // Maximum roll angle in degrees
        rollMultiplier: 0.5,    // Multiplier to adjust roll intensity based on turn

        dragCoefficient: 0.004,
        //gravityStrength: 0.0001,
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
    guttaParameters.add(parameters, 'gutt_max_speed',0,0.01,0.0001).name('Max Speed');
    guttaParameters.add(parameters, 'gutt_max_acceleration',0,0.1,0.0001).name('Max Acceleration');
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
    maraParameters.add(parameters, 'mara_max_speed',0,0.01,0.0001).name('Max Speed');
    maraParameters.add(parameters, 'mara_max_acceleration',0,0.1,0.0001).name('Max Acceleration');
    maraParameters.add(parameters, 'mara_vision_angle', 10, 120, 1).name('Vision Angle');
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
    //flightParameters.add(parameters, 'gravityStrength', 0, 0.1, 0.0001).name('Gravity Strength');
    flightParameters.close()
    if (version !== 0) gui.hide()
    
    const guttaScale = 0.0002;
    const maraScale = 0.0002;
    const guttaShape = createGuttaShape(version, guttaScale);
    const guttaGeometry = createExtrudeGeometry(guttaShape, guttaScale, version);

    const maraShape = createMaraShape(version, maraScale);
    const maraGeometry = createExtrudeGeometry(maraShape, maraScale, version);

    const testBird = new THREE.MeshBasicMaterial({color:0xff0000, side:DoubleSide})
    const redBird = new THREE.MeshLambertMaterial({color:0xcc6655, side:DoubleSide})
    const greyBird = new THREE.MeshLambertMaterial({color:0xcc7788, side:DoubleSide})
    const darkBird = new THREE.MeshLambertMaterial({color:0xbb4455, side:DoubleSide})

    const testMara = new THREE.MeshBasicMaterial({color:0x999999, side:DoubleSide})
    const darkMara = new THREE.MeshLambertMaterial({color:0x222222, side:DoubleSide})
    const plainMara = new THREE.MeshLambertMaterial({color:0x333333, side:DoubleSide})
    const lightMara = new THREE.MeshLambertMaterial({color:0x444444, side:DoubleSide})

    // Keep track of how many gutta per material variant
    let testCount = 1; // You had i=0 as testBird
    let redCount = Math.ceil(numberOfGutta/3);
    let greyCount = Math.ceil(numberOfGutta/3);
    let darkCount = numberOfGutta - testCount - redCount - greyCount;

    // Similarly for Mara:
    let testMaraCount = 1;
    let darkMaraCount = Math.ceil(numberOfMara/3);
    let plainMaraCount = Math.ceil(numberOfMara/3);
    let lightMaraCount = numberOfMara - testMaraCount - darkMaraCount - plainMaraCount;

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

        guttaState.gutta.push(new Gutt(0, 0, guttaGeometry, meshRef, idxRef, guttaState.gutta, guttaState, destination, parameters, "gutt", version, i));
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

        guttaState.mara.push(new Gutt(0, 0, maraGeometry, meshRef, idxRef, guttaState.mara, guttaState, destination, parameters, "mara", version, i));
    }
}

export function updateGutta(guttaState, guttaStats, jaranius, nuggets, developer, octreeHelperRoot) {
    if (!guttaState.init) return;

    // Create a Octtree by using a copy of the 
    const guttTree = new Octree([...guttaState.gutta]);
    const maraTree = new Octree([...guttaState.mara]);

    // Visualize the Gutta octree (optional, enable for debugging)
    if (developer == true) visualizeOctree(guttTree, octreeHelperRoot);

    for (let i=0; i<guttaState.gutta.length; i++) {
        let g = guttaState.gutta[i]
        g.calculateWander();
        /* g.calculateAlignment(guttTree);
        g.calculateCohesion(guttTree);
        g.calculateSeparation(guttTree); */
        g.calculateSteeringForces(guttTree)
        g.calculateFleeing(maraTree);
        guttaStats = g.calculateFeeding(guttaStats, jaranius, nuggets);
        g.calculateAvoidance();
        g.move();
    }

    for (let i=0; i<guttaState.mara.length; i++) {
        let m = guttaState.mara[i]
        m.calculateWander();
        /* m.calculateAlignment(maraTree);
        m.calculateCohesion(maraTree);
        m.calculateSeparation(maraTree); */
        m.calculateSteeringForces(maraTree)
        guttaStats = m.calculateHunting(guttaStats, guttTree);
        m.calculateAvoidance();
        m.move();
    }

    // Refresh stats here after updates
    refreshStats(guttaState, guttaStats);
}