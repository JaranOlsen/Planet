import * as THREE from 'three';
import { getRandomBell, getRandomInt, getRandomNum, convertLatLngtoCartesian, convertCartesiantoLatLng, angularDistance } from './mathScripts.js'
import { generateRandomSanskritName } from './miscScripts.js'
import { DoubleSide, ExtrudeGeometry } from 'three'
import { GUI } from 'dat.gui'
import { planetTagData } from './data/planetData.js';

let stats = {
    "upper hard": 0,
    "upper soft": 0,
    "lower soft": 0,
    "lower hard": 0
}

// ================================
// Robust KD-Tree Implementation (3D)
// ================================
class KDNode {
    constructor(agent, depth = 0) {
        this.agent = agent;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }
}

class KDTree {
    constructor(agents) {
        this.root = this.build(agents, 0);
    }

    build(agents, depth) {
        if (agents.length === 0) return null;

        const axis = depth % 3; // 0=x,1=y,2=z
        agents.sort((a, b) => {
            if (axis === 0) return a.position3D.x - b.position3D.x;
            else if (axis === 1) return a.position3D.y - b.position3D.y;
            else return a.position3D.z - b.position3D.z;
        });
        const median = Math.floor(agents.length / 2);
        const node = new KDNode(agents[median], depth);

        const leftAgents = agents.slice(0, median);
        const rightAgents = agents.slice(median + 1);

        node.left = this.build(leftAgents, depth + 1);
        node.right = this.build(rightAgents, depth + 1);

        return node;
    }

    rangeSearch(target, radius) {
        const results = [];
        this._rangeSearch(this.root, target, radius, results);
        return results;
    }

    _rangeSearch(node, target, radius, results) {
        if (!node) return;
        const axis = node.depth % 3;
        const agent = node.agent;
        const dx = agent.position3D.x - target.x;
        const dy = agent.position3D.y - target.y;
        const dz = agent.position3D.z - target.z;
        const distSq = dx*dx + dy*dy + dz*dz;
        const radiusSq = radius*radius;

        if (distSq <= radiusSq) {
            results.push(agent);
        }

        let diff;
        if (axis === 0) diff = target.x - agent.position3D.x;
        else if (axis === 1) diff = target.y - agent.position3D.y;
        else diff = target.z - agent.position3D.z;

        if (diff < radius) {
            this._rangeSearch(node.left, target, radius, results);
        }
        if (diff > -radius) {
            this._rangeSearch(node.right, target, radius, results);
        }
    }
}

export class Gutt {
    constructor(lat, lng, geometry, material, array, guttaState, destination, parameters, species, version, ID) {
        this.ID = ID;
        this.material = material;
        this.geometry = geometry;
        this.array = array;
        this.guttaState = guttaState;
        this.parameters = parameters;
        this.species = species;
        this.version = version;

        // Random initial position
        const radius = 5.1;

        lat = getRandomNum(-70, 80)
        lng = getRandomNum(-180, 180)
        const GCSposition = convertLatLngtoCartesian(lat, lng, radius)

        this.position3D = new THREE.Vector3(GCSposition.x, GCSposition.y, GCSposition.z);
        //this.pos = new THREE.Vector2(lat, lng);

        this.velocity3D = new THREE.Vector3(
            getRandomNum(-0.001,0.001),
            getRandomNum(-0.001,0.001),
            getRandomNum(-0.001,0.001)
        );
        this.acceleration3D = new THREE.Vector3();

        this.gutt = new THREE.Mesh(this.geometry, this.material)
        this.gutt.position.copy(this.position3D);
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

        // Initialize wander target indicator in developer mode
        if (this.version === 3) {
            const indicatorGeometry = new THREE.SphereGeometry(0.005, 8, 8); // Small sphere
            const indicatorMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow color
            this.wanderIndicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial);
            this.wanderIndicator.visible = false; // Initially hidden
            destination.add(this.wanderIndicator); // Add directly to the scene
        }

        if (this.version == 3) {
            // Create a forward arrow: +Z direction, red color
            const forwardArrow = new THREE.ArrowHelper(
                new THREE.Vector3(0,0,1), // direction
                new THREE.Vector3(0,0,0), // origin
                0.05,                     // length
                0xff0000                  // color (red)
            );
            this.gutt.add(forwardArrow);
        
            // Create an up arrow: +Y direction, blue color
            const upArrow = new THREE.ArrowHelper(
                new THREE.Vector3(0,1,0), // direction
                new THREE.Vector3(0,0,0), // origin
                0.05,                     // length
                0x0000ff                  // color (blue)
            );
            this.gutt.add(upArrow);
        }

        if (this.version == 3) {
            if (this.species == "gutt") {
                // Gutt - Omni vision spheres
                this.alignmentSphere = this.createSphere(parameters.gutt_alignment_perception_distance,0x99ff99);
                this.cohesionSphere = this.createSphere(parameters.gutt_cohesion_perception_distance,0xff9999);
                this.separationSphere = this.createSphere(parameters.gutt_separation_perception_distance,0x9999ff);
                this.fleeSphere = this.createSphere(parameters.gutt_flee_perception_distance,0xff0000);
                this.feedSphere = this.createSphere(parameters.gutt_feed_perception_distance,0x00ff00);
                this.eatSphere = this.createSphere(0.005,0x00ff00); // small sphere

                this.arrowAlignment = this.createArrow(0x99ff99);
                this.arrowCohesion = this.createArrow(0xff9999);
                this.arrowSeparation = this.createArrow(0x9999ff);
                this.arrowFlee = this.createArrow(0xff0000);
                this.arrowFeed = this.createArrow(0x00ff00);
                this.arrowAvoidance = this.createArrow(0x000000);
                this.arrowWander = this.createArrow(0x444488);
                this.arrowSumForces = this.createArrow(0xffff00); // A yellow arrow for sum of forces
            } else {
                // Mara - Forward cone vision
                this.alignmentCone = this.createCone(parameters.mara_alignment_perception_distance,0x99ff99);
                this.cohesionCone = this.createCone(parameters.mara_cohesion_perception_distance,0xff9999);
                this.separationCone = this.createCone(parameters.mara_separation_perception_distance,0x9999ff);
                this.huntCone = this.createCone(parameters.mara_hunt_perception_distance,0xff0000);
                this.eatSphere = this.createSphere(0.01,0xff0000);

                this.arrowAlignment = this.createArrow(0x99ff99);
                this.arrowCohesion = this.createArrow(0xff9999);
                this.arrowSeparation = this.createArrow(0x9999ff);
                this.arrowHunt = this.createArrow(0xff0000);
                this.arrowAvoidance = this.createArrow(0x000000);
                this.arrowWander = this.createArrow(0x444488);
                this.arrowSumForces = this.createArrow(0xffff00); // A yellow arrow for sum of forces
            }
        }

        destination.add(this.gutt)
    }

    createArrow(color) {
        // Arrows already point along +Z and start at local origin (0,0,0)
        const arrow = new THREE.ArrowHelper(new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,0), 1, color);
        this.gutt.add(arrow);
        arrow.visible = false;
        return arrow;
    }

    createSphere(radius,color) {
        const geo = new THREE.SphereGeometry(radius,8,8);
        const mat = new THREE.MeshBasicMaterial({color:color,wireframe:true,opacity:0.1,transparent:true});
        const sphere = new THREE.Mesh(geo,mat);
        this.gutt.add(sphere);
        sphere.visible = false;
        return sphere;
    }

    createCone(radius, color) {
        const halfAngle = (this.parameters.mara_vision_angle || 45) * Math.PI / 180;
        const baseRadius = Math.tan(halfAngle) * radius;
        let geo = new THREE.ConeGeometry(baseRadius, radius, 16, 1, true);
    
        // Move apex to origin
        geo.translate(0, -radius/2, 0);   // Move apex to origin
        geo.rotateX(Math.PI / 2); 
    
        const mat = new THREE.MeshBasicMaterial({color:color,wireframe:true,opacity:0.5,transparent:true});
        const cone = new THREE.Mesh(geo, mat);
    
        this.gutt.add(cone);
        cone.visible = false;
        return cone;
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

    move(ID, developer) {
        // Update perception volumes in case DAT.GUI changed
        if (this.version == 3) this.updatePerceptionVolumes();

        if (this.hunger < 1) this.hunger += 0.0001

        this.acceleration3D.set(0,0,0)
        this.acceleration3D.add(this.wander)
        this.acceleration3D.add(this.alignment)
        this.acceleration3D.add(this.cohesion)
        this.acceleration3D.add(this.separation)
        if (this.species == "gutt") {
            this.acceleration3D.add(this.flee)
            this.acceleration3D.add(this.feed)
        }
        if (this.species == "mara") {
            this.acceleration3D.add(this.hunt)
        }
        this.acceleration3D.add(this.avoidance)

        const maxAcceleration = (this.species == "gutt") ? this.parameters.gutt_max_acceleration : this.parameters.mara_max_acceleration
        const rawAcceleration = this.acceleration3D.clone()
        if (this.acceleration3D.length() > maxAcceleration) { 
            this.acceleration3D.setLength(maxAcceleration);
        }

        this.acceleration3D.add(this.velocity3D.clone().multiplyScalar(-this.parameters.dragCoefficient));

        /* const center = new THREE.Vector3(0, 0, 0); // Center of the planet
        const toCenter = center.clone().sub(this.position3D).normalize(); // Vector pointing toward the center
        const gravityStrength = this.parameters.gravityStrength || 0.00001; // Adjust this based on your scale
        const gravity = toCenter.multiplyScalar(gravityStrength);
        this.acceleration3D.add(gravity); */

        this.velocity3D.add(this.acceleration3D)

        if (this.version == 3 && this.arrowSumForces) {
            this.setArrowDirectionAndLength(this.arrowSumForces, this.acceleration3D, this.gutt);
            this.logForces(rawAcceleration);   
        }

        const maxSpeed = (this.species == "gutt") ? this.parameters.gutt_max_speed : this.parameters.mara_max_speed
        if (this.velocity3D.length() > maxSpeed) {
            this.velocity3D.setLength(maxSpeed);
        }

        this.position3D.add(this.velocity3D)

        let forward = this.velocity3D.clone();
        if (forward.lengthSq() < 0.000001) {
            forward.set(0,0,1); // default forward if almost stationary
        } else {
            forward.normalize();
        }

        // ********** NEW ORIENTATION CODE START **********
        // Define global down as negative Y
        const globalUp = new THREE.Vector3(0, 1, 0);

        // Cross in this order to ensure a proper right vector:
        let right = new THREE.Vector3().crossVectors(globalUp, forward).normalize();

        // If forward is nearly parallel to up, fallback to a known right vector
        if (right.lengthSq() < 0.000001) {
            right.set(1,0,0); 
        }

        // Now derive up so that forward, up, and right form a proper orthonormal basis
        let up = new THREE.Vector3().crossVectors(forward, right).normalize();

        // Create the rotation matrix from (x=right, y=up, z=forward)
        let m = new THREE.Matrix4().makeBasis(right, up, forward);

        // Convert this matrix to a quaternion
        let desiredQuaternion = new THREE.Quaternion().setFromRotationMatrix(m);

        // Smoothly interpolate to the desired orientation
        this.gutt.quaternion.slerp(desiredQuaternion, this.parameters.smoothingFactor);

        // Calculate the change in forward direction
        let deltaForward = forward.clone().sub(this.previousForward).normalize();
        let turnAngle = Math.asin(deltaForward.length() / 2); // Approximate small angle

        // Define roll intensity based on turn angle
        const maxRoll = THREE.MathUtils.degToRad(this.parameters.maxRoll); // Convert degrees to radians
        let rollAngle = THREE.MathUtils.clamp(turnAngle * this.parameters.rollMultiplier, -maxRoll, maxRoll);

        // Create a quaternion for the roll around the forward axis
        let qRoll = new THREE.Quaternion();
        qRoll.setFromAxisAngle(forward, rollAngle);

        // Apply the roll to the current orientation
        this.gutt.quaternion.multiply(qRoll);

        // Update previous forward for the next frame
        this.previousForward.copy(forward);
        // ********** NEW ORIENTATION CODE END **********

        this.gutt.position.copy(this.position3D)

        // ********** WANDER TARGET VISUALIZATION START **********
        if (this.version === 3 && this.wanderIndicator) {
            // Normalize the wander vector
            const wanderDir = this.wander.clone().normalize();

            // Scale by wander distance
            const wanderOffset = wanderDir.multiplyScalar(this.parameters.gutt_wander_distance);

            // Calculate world position for the indicator
            const wanderWorldPos = this.position3D.clone().add(wanderOffset);

            // Update the indicator's world position
            this.wanderIndicator.position.copy(wanderWorldPos);

            // Ensure the indicator is visible based on developer mode
            this.wanderIndicator.visible = this.parameters.showWanderIndicator;
        }
        // ********** WANDER TARGET VISUALIZATION END **********

        if (this.velocity3D.lengthSq() > 0.000001) {
            const forward = this.velocity3D.clone().normalize();
            const targetPos = this.position3D.clone().add(forward);
        }

        if (developer && this.species == "gutt") {
            this.updateDeveloperArrowsGutt(this.gutt);
        }
        if (developer && this.species == "mara") {
            this.updateDeveloperArrowsMara(this.gutt);
        }
    }

    updatePerceptionVolumes() {
        // Update sizes if changed:
        if (this.species=="gutt") {
            this.updateSphere(this.alignmentSphere,this.parameters.gutt_alignment_perception_distance);
            this.updateSphere(this.cohesionSphere,this.parameters.gutt_cohesion_perception_distance);
            this.updateSphere(this.separationSphere,this.parameters.gutt_separation_perception_distance);
            this.updateSphere(this.fleeSphere,this.parameters.gutt_flee_perception_distance);
            this.updateSphere(this.feedSphere,this.parameters.gutt_feed_perception_distance);
            // eatSphere fixed
        } else {
            this.updateCone(this.alignmentCone,this.parameters.mara_alignment_perception_distance);
            this.updateCone(this.cohesionCone,this.parameters.mara_cohesion_perception_distance);
            this.updateCone(this.separationCone,this.parameters.mara_separation_perception_distance);
            this.updateCone(this.huntCone,this.parameters.mara_hunt_perception_distance);
            // eatSphere fixed
        }
    }

    updateSphere(sphere,newRadius) {
        if (!sphere) return;
        sphere.geometry.dispose();
        sphere.geometry = new THREE.SphereGeometry(newRadius,8,8);
    }

    updateCone(cone, newRadius) {
        if (!cone) return;
        const halfAngle = (this.parameters.mara_vision_angle || 75) * Math.PI / 180;
        const baseRadius = Math.tan(halfAngle)*newRadius;
    
        cone.geometry.dispose();
        cone.geometry = new THREE.ConeGeometry(baseRadius,newRadius,16,1,true);
    
        // Keep apex at origin and pointing along +Z
        // We already know apex at (0, radius/2,0) after geometry creation, so translate and rotate again
        cone.geometry.translate(0, -newRadius/2, 0);
        cone.rotation.x = -Math.PI/2;
    }

    updateDeveloperArrowsGutt(gutt) {
        const arrowScaling = 1;
        const pos = this.position3D;

        function setArrow(arrow, vec) {
            if (!arrow) return;
            arrow.visible = true;
        
            // Convert the world-space vector `vec` into this.gutt's local space
            const localVec = vec.clone();
            const invQuat = gutt.quaternion.clone().invert();
            localVec.applyQuaternion(invQuat);
        
            if (localVec.length() > 0.000001) {
                arrow.setDirection(localVec.normalize());
                arrow.setLength(localVec.length() * arrowScaling);
            } else {
                arrow.setDirection(new THREE.Vector3(0,0,1));
                arrow.setLength(0);
            }
            arrow.position.set(0,0,0);
        }

        setArrow(this.arrowAlignment, this.alignment);
        setArrow(this.arrowCohesion, this.cohesion);
        setArrow(this.arrowSeparation, this.separation);
        setArrow(this.arrowFlee, this.flee);
        setArrow(this.arrowFeed, this.feed);
        setArrow(this.arrowAvoidance, this.avoidance);
        setArrow(this.arrowWander, this.wander);
    }

    updateDeveloperArrowsMara(mara) {
        const arrowScaling = 1;
        const pos = this.position3D;

        function setArrow(arrow, vec) {
            if (!arrow) return;
            arrow.visible = true;
        
            // Convert the world-space vector `vec` into this.gutt's local space
            const localVec = vec.clone();
            const invQuat = mara.quaternion.clone().invert();
            localVec.applyQuaternion(invQuat);
        
            if (localVec.length() > 0.000001) {
                arrow.setDirection(localVec.normalize());
                arrow.setLength(localVec.length() * arrowScaling);
            } else {
                arrow.setDirection(new THREE.Vector3(0,0,1));
                arrow.setLength(0);
            }
            arrow.position.set(0,0,0);
        }

        setArrow(this.arrowAlignment, this.alignment);
        setArrow(this.arrowCohesion, this.cohesion);
        setArrow(this.arrowSeparation, this.separation);
        setArrow(this.arrowHunt, this.hunt);
        setArrow(this.arrowAvoidance, this.avoidance);
        setArrow(this.arrowWander, this.wander);
    }

    setArrowDirectionAndLength(arrow, vec, gutt) {
        if (!arrow) return;
        arrow.visible = true;
    
        // Convert the world-space vector `vec` into this.gutt's local space
        const localVec = vec.clone();
        const invQuat = gutt.quaternion.clone().invert();
        localVec.applyQuaternion(invQuat);
    
        const length = localVec.length();
        if (length > 0.000001) {
            arrow.setDirection(localVec.normalize());
            arrow.setLength(length * 1000);
        } else {
            arrow.setDirection(new THREE.Vector3(0,0,1));
            arrow.setLength(0);
        }
        arrow.position.set(0,0,0);
    }

    logForces(rawAcceleration) {
        // Initialize objects to track sums and counts for averages
        if (!this.vectorAverages) {
            this.vectorAverages = {
                wander: { sum: 0, count: 0 },
                alignment: { sum: 0, count: 0 },
                cohesion: { sum: 0, count: 0 },
                separation: { sum: 0, count: 0 },
                flee: { sum: 0, count: 0 },
                feed: { sum: 0, count: 0 },
                hunt: { sum: 0, count: 0 },
                avoidance: { sum: 0, count: 0 },

                rawAcceleration: { sum: 0, count: 0 },
                velocity3D: { sum: 0, count: 0 },
            };
        }

        // Function to update averages
        function updateVectorAverage(vectorName, vectorLength) {
            if (vectorLength > 0) {
                const avgData = this.vectorAverages[vectorName];
                avgData.sum += vectorLength;
                avgData.count += 1;
            }
            const avgData = this.vectorAverages[vectorName];
            return avgData.count > 0 ? avgData.sum / avgData.count : 0; // Return the running average
        }

        // Calculate current lengths and update averages
        const wanderLength = this.wander.length();
        const alignmentLength = this.alignment.length();
        const cohesionLength = this.cohesion.length();
        const separationLength = this.separation.length();
        const fleeLength = this.flee.length();
        const feedLength = this.feed.length();
        const huntLength = this.hunt.length();
        const avoidanceLength = this.avoidance.length();
        const rawAccelerationLength = rawAcceleration.length();
        const velocity3DLength = this.velocity3D.length();

        // Update averages
        const wanderAvg = updateVectorAverage.call(this, "wander", wanderLength);
        const alignmentAvg = updateVectorAverage.call(this, "alignment", alignmentLength);
        const cohesionAvg = updateVectorAverage.call(this, "cohesion", cohesionLength);
        const separationAvg = updateVectorAverage.call(this, "separation", separationLength);
        const fleeAvg = updateVectorAverage.call(this, "flee", fleeLength);
        const feedAvg = updateVectorAverage.call(this, "feed", feedLength);
        const huntAvg = updateVectorAverage.call(this, "hunt", huntLength);
        const avoidanceAvg = updateVectorAverage.call(this, "avoidance", avoidanceLength);
        const rawAccelerationAvg = updateVectorAverage.call(this, "rawAcceleration", rawAccelerationLength);
        const velocity3DAvg = updateVectorAverage.call(this, "velocity3D", velocity3DLength);

        // Log current and average lengths
        const maxSpeed = (this.species == "gutt") ? this.parameters.gutt_max_speed : this.parameters.mara_max_speed
        const maxAcc = (this.species == "gutt") ? this.parameters.gutt_max_acceleration : this.parameters.mara_max_acceleration

        if (this.ID == 0) {
            console.log(this.species, "\n",
                "wander:          ", this.wander.length().toFixed(8).padEnd(12), "(avg: ", wanderAvg.toFixed(8), ")\n",
                "alignment:       ", this.alignment.length().toFixed(8).padEnd(12), "(avg: ", alignmentAvg.toFixed(8), ")\n",
                "cohesion:        ", this.cohesion.length().toFixed(8).padEnd(12), "(avg: ", cohesionAvg.toFixed(8), ")\n",
                "separation:      ", this.separation.length().toFixed(8).padEnd(12), "(avg: ", separationAvg.toFixed(8), ")\n",
                "flee:            ", this.flee.length().toFixed(8).padEnd(12), "(avg: ", fleeAvg.toFixed(8), ")\n",
                "feed:            ", this.feed.length().toFixed(8).padEnd(12), "(avg: ", feedAvg.toFixed(8), ")\n",
                "hunt:            ", this.hunt.length().toFixed(8).padEnd(12), "(avg: ", huntAvg.toFixed(8), ")\n",
                "avoidance:       ", this.avoidance.length().toFixed(8).padEnd(12), "(avg: ", avoidanceAvg.toFixed(8), ")\n",
                "rawAcceleration: ", rawAcceleration.length().toFixed(8).padEnd(12), "(avg: ", rawAccelerationAvg.toFixed(8), maxAcc, (rawAccelerationAvg - maxAcc).toFixed(8),")\n",
                "raw velocity3D:  ", this.velocity3D.length().toFixed(8).padEnd(12), "(avg: ", velocity3DAvg.toFixed(8), maxSpeed, (velocity3DAvg - maxSpeed).toFixed(8),")");
        }
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

    calculateAlignment(kdTree) {
        let perception = (this.species == "gutt") ? this.parameters.gutt_alignment_perception_distance : this.parameters.mara_alignment_perception_distance
        this.alignment.set(0,0,0)
        let neighbors = kdTree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
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

    calculateCohesion(kdTree) {
        let perception = (this.species == "gutt") ? this.parameters.gutt_cohesion_perception_distance : this.parameters.mara_cohesion_perception_distance
        this.cohesion.set(0,0,0)
        let neighbors = kdTree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
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

    calculateSeparation(kdTree) {
        let perception = (this.species == "gutt") ? this.parameters.gutt_separation_perception_distance : this.parameters.mara_separation_perception_distance
        this.separation.set(0,0,0)
        let neighbors = kdTree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
        neighbors = this.filterByVisionCone(neighbors);
        let counter = 0
        for (let agent of neighbors) {
            if (agent!==this) {
                let d = this.gutt.position.distanceTo(agent.gutt.position)
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

    calculateHunting(guttaStats, kdTree) {
        if (this.species !== "mara") return guttaStats;
        let perception = this.parameters.mara_hunt_perception_distance
        this.hunt.set(0,0,0)
        let neighbors = kdTree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
        neighbors = this.filterByVisionCone(neighbors);
        let counter = 0
        for (let prey of neighbors) {
            if (prey!==this) {
                let d = this.gutt.position.distanceTo(prey.gutt.position)
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

    calculateFleeing(kdTree) {
        if (this.species !== "gutt") return;
        let perception = this.parameters.gutt_flee_perception_distance
        this.flee.set(0,0,0)
        let neighbors = kdTree.rangeSearch({x:this.position3D.x,y:this.position3D.y,z:this.position3D.z}, perception)
        let counter = 0
        for (let predator of neighbors) {
            if (predator!==this) {
                let d = this.gutt.position.distanceTo(predator.gutt.position)
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
            let d = this.gutt.position.distanceTo(nuggetPos)
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
            stats['upper hard'] += 1
            const penetration = currentRadius - upperLimit;
            const forceDir = this.position3D.clone().normalize().multiplyScalar(-1);
            this.avoidance.add(forceDir.multiplyScalar(penetration * boundaryForce));
        }

        // Anticipatory avoidance for approaching upper altitude boundary
        if (futureRadius > (upperLimit - buffer)) {
            stats['upper soft'] += 1
            const penetration = futureRadius - (upperLimit - buffer);
            const steeringForceDir = futurePosition.clone().normalize().multiplyScalar(-1); // direction inward
            this.avoidance.add(steeringForceDir.multiplyScalar(penetration * boundaryForce * anticipatoryMultiplier));
        }

        // Anticipatory avoidance for approaching lower altitude boundary
        if (futureRadius < (lowerLimit + buffer)) {
            stats['lower soft'] += 1
            const penetration = (lowerLimit + buffer) - futureRadius;
            const steeringForceDir = futurePosition.clone().normalize(); // direction outward
            this.avoidance.add(steeringForceDir.multiplyScalar(penetration * boundaryForce * 10 * anticipatoryMultiplier));
        }
    
        // Hard lower limit
        if (currentRadius < lowerLimit) {
            stats['lower hard'] += 1
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
    let kdTreeHelperRoot = new THREE.Object3D();
    if (version == 3) {
        destination.add(kdTreeHelperRoot);
    }
    
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

    for (let i = 0; i < numberOfGutta; i++) {
        let guttaMaterial
        if (i == 0) {
            guttaMaterial = testBird
        } else if (i <= numberOfGutta / 3) {
            guttaMaterial = redBird
        } else if (i < numberOfGutta / 3 * 2) {
            guttaMaterial = greyBird
        } else guttaMaterial = darkBird

        guttaState.gutta.push(new Gutt(0,0,guttaGeometry,guttaMaterial,guttaState.gutta,guttaState,destination,parameters,"gutt",version, i))
    }

    const testMara = new THREE.MeshBasicMaterial({color:0x999999, side:DoubleSide})
    const darkMara = new THREE.MeshLambertMaterial({color:0x222222, side:DoubleSide})
    const plainMara = new THREE.MeshLambertMaterial({color:0x333333, side:DoubleSide})
    const lightMara = new THREE.MeshLambertMaterial({color:0x444444, side:DoubleSide})

    for (let i = 0; i < numberOfMara; i++) {
        let maraMaterial
        if (i == 0) {
            maraMaterial = testMara
        } else if (i <= numberOfMara / 3) {
            maraMaterial = darkMara
        } else if (i < numberOfMara / 3 * 2) {
            maraMaterial = plainMara
        } else maraMaterial = lightMara

        guttaState.mara.push(new Gutt(0,0,maraGeometry,maraMaterial,guttaState.mara,guttaState,destination,parameters,"mara",version, i))
    }
}

export function updateGutta(guttaState, guttaStats, jaranius, nuggets, developer) {
    if (!guttaState.init) return;

    // Create a KDTree using a copy of the guttaState.gutta array
    const guttKD = new KDTree([...guttaState.gutta]);
    const maraKD = new KDTree([...guttaState.mara]);

    for (let i=0; i<guttaState.gutta.length; i++) {
        let g = guttaState.gutta[i]
        g.calculateWander();
        g.calculateAlignment(guttKD);
        g.calculateCohesion(guttKD);
        g.calculateSeparation(guttKD);
        g.calculateFleeing(maraKD);
        guttaStats = g.calculateFeeding(guttaStats, jaranius, nuggets);
        g.calculateAvoidance();
        g.move(i, developer);
    }

    for (let i=0; i<guttaState.mara.length; i++) {
        let m = guttaState.mara[i]
        m.calculateWander();
        m.calculateAlignment(maraKD);
        m.calculateCohesion(maraKD);
        m.calculateSeparation(maraKD);
        guttaStats = m.calculateHunting(guttaStats, guttKD);
        m.calculateAvoidance();
        m.move(i, developer);
    }

    // Refresh stats here after updates
    refreshStats(guttaState, guttaStats);
    console.log(stats)
}

export function togglePerceptionCircles(guttaState) {
    function toggleVisibility(agent) {
        if (agent.version != 3) return;
        if (agent.species=="gutt") {
            agent.alignmentSphere.visible = !agent.alignmentSphere.visible;
            agent.cohesionSphere.visible = !agent.cohesionSphere.visible;
            agent.separationSphere.visible = !agent.separationSphere.visible;
            agent.fleeSphere.visible = !agent.fleeSphere.visible;
            agent.feedSphere.visible = !agent.feedSphere.visible;
            agent.eatSphere.visible = !agent.eatSphere.visible;
        } else {
            // Mara
            agent.alignmentCone.visible = !agent.alignmentCone.visible;
            agent.cohesionCone.visible = !agent.cohesionCone.visible;
            agent.separationCone.visible = !agent.separationCone.visible;
            agent.huntCone.visible = !agent.huntCone.visible;
            agent.eatSphere.visible = !agent.eatSphere.visible;
        }
    }

    for (const gutt of guttaState.gutta) {
        toggleVisibility(gutt);
    }
    for (const mara of guttaState.mara) {
        toggleVisibility(mara);
    }
}