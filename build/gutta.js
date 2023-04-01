import * as THREE from 'three';
import { latLngToUnitVector, rotateVector2D, getRandomBell, getRandomInt, getRandomNum, convertLatLngtoCartesian, convertCartesiantoLatLng } from './mathScripts.js'
import { DoubleSide } from 'three'
import { GUI } from 'dat.gui'

export class Gutt {
    constructor(lat, lng, geometry, material, array, guttaState, destination, guttaHelperCenter, parameters) {
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
        this.alignment = new THREE.Vector2(0, 0)
        this.cohesion = new THREE.Vector2(0, 0)
        this.separation = new THREE.Vector2(0, 0)
        this.hunt = new THREE.Vector2(0, 0)
        this.flee = new THREE.Vector2(0, 0)
        this.feed = new THREE.Vector2(0, 0)
        this.avoidance = new THREE.Vector2(0, 0)

        this.hunger = 0

        // arrowHelpers
        this.arrowAlignment = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1, 0x99ff99);
        this.arrowCohesion = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1, 0xff9999);
        this.arrowSeparation = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1, 0x9999ff);
        this.arrowFlee = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1, 0xff0000);
        this.arrowFeed = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1, 0x00ff00);
        this.arrowHunt = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1, 0xff0000);
        this.arrowAvoidance = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1, 0x000000);
        this.arrowWander = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 1, 0x444488);

        guttaHelperCenter.add(this.arrowAlignment);
        guttaHelperCenter.add(this.arrowCohesion);
        guttaHelperCenter.add(this.arrowSeparation);
        guttaHelperCenter.add(this.arrowFlee);
        guttaHelperCenter.add(this.arrowFeed);
        guttaHelperCenter.add(this.arrowHunt);
        guttaHelperCenter.add(this.arrowAvoidance);
        guttaHelperCenter.add(this.arrowWander);

        destination.add(this.gutt)
    }

    move(species, ID) {
        if (this.hunger < 1) this.hunger += 0.0001

        this.originalHeading = Math.atan2(this.velocity.x, this.velocity.y)

        this.acceleration.set(0, 0)
        if (species == "gutt") {
            this.alignment.multiplyScalar(this.parameters.gutt_alignment)
            this.cohesion.multiplyScalar(this.parameters.gutt_cohesion)
            this.separation.multiplyScalar(this.parameters.gutt_separation)
            this.flee.multiplyScalar(this.parameters.gutt_flee)
            this.feed.multiplyScalar(this.parameters.gutt_feed)
            this.wander.multiplyScalar(this.parameters.gutt_wander)
        }
        if (species == "mara") {
            this.alignment.multiplyScalar(this.parameters.mara_alignment)
            this.cohesion.multiplyScalar(this.parameters.mara_cohesion)
            this.separation.multiplyScalar(this.parameters.mara_separation)
            this.hunt.multiplyScalar(this.parameters.mara_hunt)
            this.wander.multiplyScalar(this.parameters.mara_wander)
        }

        this.acceleration.add( this.wander )
        this.acceleration.add( this.alignment )
        this.acceleration.add( this.cohesion )
        this.acceleration.add( this.separation )
        if (species == "gutt") {
            this.acceleration.add( this.flee )
            this.acceleration.add( this.feed )
        }
        if (species == "mara") {
            this.acceleration.add( this.hunt )
        }
        this.acceleration.add( this.avoidance )

        this.velocity.add(this.acceleration)
        if (species == "gutt") {
            this.velocity.clampLength(-this.parameters.gutt_max_speed, this.parameters.gutt_max_speed)
        }
        if (species == "mara") {
            this.velocity.clampLength(-this.parameters.mara_max_speed, this.parameters.mara_max_speed)
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

        const arrowScaling = 50;

        const alignment3D = convertLatLngtoCartesian(this.alignment.x + this.pos.x, this.alignment.y + this.pos.y, 5 + this.guttaFlyAltitude)
        const cohesion3D = convertLatLngtoCartesian(this.cohesion.x + this.pos.x, this.cohesion.y + this.pos.y, 5 + this.guttaFlyAltitude)
        const separation3D = convertLatLngtoCartesian(this.separation.x + this.pos.x, this.separation.y + this.pos.y, 5 + this.guttaFlyAltitude)
        const flee3D = convertLatLngtoCartesian(this.flee.x + this.pos.x, this.flee.y + this.pos.y, 5 + this.guttaFlyAltitude)
        const feed3D = convertLatLngtoCartesian(this.feed.x + this.pos.x, this.feed.y + this.pos.y, 5 + this.guttaFlyAltitude)
        const hunt3D = convertLatLngtoCartesian(this.hunt.x + this.pos.x, this.hunt.y + this.pos.y, 5 + this.guttaFlyAltitude)
        const avoidance3D = convertLatLngtoCartesian(this.avoidance.x + this.pos.x, this.avoidance.y + this.pos.y, 5 + this.guttaFlyAltitude)
        const wander3D = convertLatLngtoCartesian(this.wander.x + this.pos.x, this.wander.y + this.pos.y, 5 + this.guttaFlyAltitude)
        
        const alignmentDirection = new THREE.Vector3().subVectors(alignment3D, this.cartesianPosition).normalize();
        const cohesionDirection = new THREE.Vector3().subVectors(cohesion3D, this.cartesianPosition).normalize();
        const separationDirection = new THREE.Vector3().subVectors(separation3D, this.cartesianPosition).normalize();
        const fleeDirection = new THREE.Vector3().subVectors(flee3D, this.cartesianPosition).normalize();
        const feedDirection = new THREE.Vector3().subVectors(feed3D, this.cartesianPosition).normalize();
        const huntDirection = new THREE.Vector3().subVectors(hunt3D, this.cartesianPosition).normalize();
        const avoidanceDirection = new THREE.Vector3().subVectors(avoidance3D, this.cartesianPosition).normalize();
        const wanderDirection = new THREE.Vector3().subVectors(wander3D, this.cartesianPosition).normalize();

        this.arrowAlignment.setDirection(alignmentDirection);
        this.arrowAlignment.setLength(this.alignment.length() * arrowScaling);
        this.arrowCohesion.setDirection(cohesionDirection);
        this.arrowCohesion.setLength(this.cohesion.length() * arrowScaling);
        this.arrowSeparation.setDirection(separationDirection);
        this.arrowSeparation.setLength(this.separation.length() * arrowScaling);
        this.arrowFlee.setDirection(fleeDirection);
        this.arrowFlee.setLength(this.flee.length() * arrowScaling);
        this.arrowFeed.setDirection(feedDirection);
        this.arrowFeed.setLength(this.feed.length() * arrowScaling);
        this.arrowHunt.setDirection(huntDirection);
        this.arrowHunt.setLength(this.hunt.length() * arrowScaling);
        this.arrowAvoidance.setDirection(avoidanceDirection);
        this.arrowAvoidance.setLength(this.avoidance.length() * arrowScaling);
        this.arrowWander.setDirection(wanderDirection);
        this.arrowWander.setLength(this.wander.length() * arrowScaling);

        this.arrowAlignment.position.copy(this.cartesianPosition);
        this.arrowCohesion.position.copy(this.cartesianPosition);
        this.arrowSeparation.position.copy(this.cartesianPosition);
        this.arrowFlee.position.copy(this.cartesianPosition);
        this.arrowFeed.position.copy(this.cartesianPosition);
        this.arrowHunt.position.copy(this.cartesianPosition);
        this.arrowAvoidance.position.copy(this.cartesianPosition);
        this.arrowWander.position.copy(this.cartesianPosition);
    }

    calculateWander(species) {
         this.wander.set(getRandomNum(-0.005, 0.005), getRandomNum(-0.005, 0.005))
        if (species == "gutt") {
            this.wander.clampLength(-this.parameters.gutt_max_force * (1 - this.hunger), this.parameters.gutt_max_force * (1 - this.hunger))
        }
        if (species == "mara") {
            this.wander.clampLength(-this.parameters.mara_max_force, this.parameters.mara_max_force)
        }
    }

    calculateAlignment(species) {
        let perception 
        if (species == "gutt") {
            perception = this.parameters.gutt_alignment_perception_distance
        }
        if (species == "mara") {
            perception = this.parameters.mara_alignment_perception_distance
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
                this.alignment.clampLength(-this.parameters.gutt_max_force, this.parameters.gutt_max_force)
            }
            if (species == "mara") {
                this.alignment.clampLength(-this.parameters.mara_max_force, this.parameters.mara_max_force)
            }
        }
    }

    calculateCohesion(species) {
        let perception 
        if (species == "gutt") {
            perception = this.parameters.gutt_cohesion_perception_distance
        }
        if (species == "mara") {
            perception = this.parameters.mara_cohesion_perception_distance
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
                this.cohesion.clampLength(-this.parameters.gutt_max_force, this.parameters.gutt_max_force)
            }
            if (species == "mara") {
                this.cohesion.clampLength(-this.parameters.mara_max_force, this.parameters.mara_max_force)
            }
        }
    }

    calculateSeparation(species) {
        let perception 
        if (species == "gutt") {
            perception = this.parameters.gutt_separation_perception_distance
        }
        if (species == "mara") {
            perception = this.parameters.mara_separation_perception_distance
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
                this.separation.clampLength(-this.parameters.gutt_max_force, this.parameters.gutt_max_force)
            }
            if (species == "mara") {
                this.separation.clampLength(-this.parameters.mara_max_force, this.parameters.mara_max_force)
            }
        }
    }

    calculateHunting(guttaStats) {
        let counter = 0
        this.hunt.set(0, 0)
        for (let i = 0; i < this.guttaState.gutta.length; i++) {
            if (this.guttaState.gutta[i] != this && this.gutt.position.distanceTo(this.guttaState.gutta[i].gutt.position) < this.parameters.mara_hunt_perception_distance) {
                if (this.guttaState.gutta[i] != this && this.gutt.position.distanceTo(this.guttaState.gutta[i].gutt.position) < 0.01) {
                    if (this.hunger > 0.2) {
                        guttaStats.kills += 1
                        guttaStats.totalHungerAtKill += this.hunger
                        this.hunger = 0
                    }
                }
                this.hunt.add(this.guttaState.gutta[i].pos)
                counter += 1
            }
        }
        if (counter > 0 ) {
            this.hunt.set(this.hunt.x / counter, this.hunt.y / counter)
            this.hunt.sub(this.pos)
            this.hunt.clampLength(-this.parameters.mara_max_force * this.hunger, this.parameters.mara_max_force * this.hunger)
        }

        return guttaStats
    }

    calculateFleeing() {
        let counter = 0
        this.flee.set(0, 0)
        for (let i = 0; i < this.guttaState.mara.length; i++) {
            if (this.guttaState.mara[i] != this && this.gutt.position.distanceTo(this.guttaState.mara[i].gutt.position) < this.parameters.gutt_flee_perception_distance) {
                let difference = new THREE.Vector2(this.pos.x - this.guttaState.mara[i].pos.x, this.pos.y - this.guttaState.mara[i].pos.y)
                difference.divideScalar(this.gutt.position.distanceTo(this.guttaState.mara[i].gutt.position))
                this.flee.add(difference)
                counter += 1
            }
        }
        if (counter > 0 ) {
            this.flee.set(this.flee.x / counter, this.flee.y / counter)
            this.flee.clampLength(-this.parameters.gutt_max_force, this.parameters.gutt_max_force)
        }
    }

    calculateFeeding(guttaStats, jaranius, nuggets) {
        let counter = 0
        this.feed.set(0, 0)
        for (let i = 0; i < nuggets.length; i++) {
            let nuggetPosition = nuggets[i].nugget.position.clone()
            nuggetPosition.applyMatrix4(jaranius.matrixWorld);

            if (this.gutt.position.distanceTo(nuggetPosition) < this.parameters.gutt_feed_perception_distance) { 
                if (this.gutt.position.distanceTo(nuggetPosition) < 0.005) {
                    if (this.hunger > 0.05) {
                        guttaStats.munch += 1
                        guttaStats.totalHungerAtMunch += this.hunger
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
            this.feed.clampLength(-this.parameters.gutt_max_force * this.hunger, this.parameters.gutt_max_force * this.hunger)
        }

        return guttaStats
    }

    calculateTemperature(species) {
        this.avoidance.set(0, 0)
        if (this.pos.x < 40) {
            this.avoidance.set((Math.pow(40 - this.pos.x, 2)) / 100000, 0)
            if (species == "gutt") {
                this.avoidance.clampLength(-this.parameters.gutt_max_force, this.parameters.gutt_max_force)
            }
            if (species == "mara") {
                this.avoidance.clampLength(-this.parameters.mara_max_force, this.parameters.mara_max_force)
            }
        }
        if (this.pos.x > 140) {
            this.avoidance.set(-(Math.pow(140 - this.pos.x, 2)) / 100000, 0)
            if (species == "gutt") {
                this.avoidance.clampLength(-this.parameters.gutt_max_force, this.parameters.gutt_max_force)
            }
            if (species == "mara") {
                this.avoidance.clampLength(-this.parameters.mara_max_force, this.parameters.mara_max_force)
            }
        }
    }
}

export function createGutta(numberOfGutta, numberOfMara, version, guttaState, destination, guttaHelperCenter) {
    guttaState.initialized = true
    console.log(guttaState.initialized)

    //Dat.GUI
    const gui = new GUI()
    let parameters = {
        gutt_alignment: 0.7,
        gutt_alignment_perception_distance: 0.2,
        gutt_cohesion: 0.6,
        gutt_cohesion_perception_distance: 0.4,
        gutt_separation: 0.6,
        gutt_separation_perception_distance: 0.03,
        gutt_flee: 10,
        gutt_flee_perception_distance: 0.1,
        gutt_feed: 0.3,
        gutt_feed_perception_distance: 1,
        gutt_wander: 0.9,
        gutt_max_force: 0.0005,
        gutt_max_speed: 0.01,

        mara_alignment: 0.1,
        mara_alignment_perception_distance: 0.6,
        mara_cohesion: 0.1,
        mara_cohesion_perception_distance: 0.6,
        mara_separation: 0.4,
        mara_separation_perception_distance: 0.5,
        mara_hunt: 0.75,
        mara_hunt_perception_distance: 0.8,
        mara_wander: 0.6,
        mara_max_force: 0.001,
        mara_max_speed: 0.04,
    }

    const parameterFolder = gui.addFolder('Gutta parameters')
        parameterFolder.add(parameters, 'gutt_alignment', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_alignment_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_cohesion', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_cohesion_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_separation', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_separation_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_flee', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_flee_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_feed', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_feed_perception_distance', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_wander', 0, 1, 0.001)
        parameterFolder.add(parameters, 'gutt_max_force', 0, 0.001, 0.00001)
        parameterFolder.add(parameters, 'gutt_max_speed', 0, 0.1, 0.001)
    parameterFolder.close()

    const parameterFolder2 = gui.addFolder('Mara parameters')
        parameterFolder2.add(parameters, 'mara_alignment', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_alignment_perception_distance', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_cohesion', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_cohesion_perception_distance', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_separation', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_separation_perception_distance', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_hunt', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_hunt_perception_distance', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_wander', 0, 1, 0.001)
        parameterFolder2.add(parameters, 'mara_max_force', 0, 0.01, 0.0001)
        parameterFolder2.add(parameters, 'mara_max_speed', 0, 0.1, 0.001)
    parameterFolder2.close()
    if (version !== 0) gui.hide() //set to 3 to enable for developer mode

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

        let guttaMaterial
        let testBird = new THREE.MeshBasicMaterial({
            color: 0xff0000, 
            side: DoubleSide,
        })
        let redBird = new THREE.MeshLambertMaterial({
            color: 0xcc6655, 
            side: DoubleSide,
        })
        let greyBird = new THREE.MeshLambertMaterial({
            color: 0xcc7788, 
            side: DoubleSide,
        })
        let darkBird = new THREE.MeshLambertMaterial({
            color: 0xbb4455, 
            side: DoubleSide,
        })

        if (i == 0) {
            guttaMaterial = testBird
        } else if (i <= numberOfGutta / 3) {
            guttaMaterial = redBird
        } else if (i < numberOfGutta / 3 * 2) {
            guttaMaterial = greyBird
        } else guttaMaterial = darkBird

        guttaState.gutta.push(new Gutt(lat, lng, guttaGeometry, guttaMaterial, guttaState.gutta, guttaState, destination, guttaHelperCenter, parameters))
    }

    const maraScale = 0.0003;

    const beakLength = 40
    const tipLength = 8

    const maraShape = new THREE.Shape();
    maraShape.moveTo(maraScale * 5,maraScale * 5 );
    maraShape.bezierCurveTo(maraScale * 5,maraScale * 5,maraScale * 4, 0, 0, maraScale * -tipLength );
    maraShape.bezierCurveTo(- maraScale * 6, 0,- maraScale * 6,maraScale * 7, - maraScale * 6,maraScale * 7 );
    maraShape.bezierCurveTo(- maraScale * 6,maraScale * 11,- maraScale * 3,maraScale * 15.4,maraScale * 5,maraScale * beakLength );
    maraShape.bezierCurveTo(maraScale * 12,maraScale * 15.4,maraScale * 16,maraScale * 11,maraScale * 16,maraScale * 7 );
    maraShape.bezierCurveTo(maraScale * 16,maraScale * 7,maraScale * 16, 0,maraScale * 10, maraScale * -tipLength );
    maraShape.bezierCurveTo(maraScale * 7, 0,maraScale * 5,maraScale * 5,maraScale * 5,maraScale * 5 );

    const maraGeometry = new THREE.ShapeGeometry(maraShape)
    maraGeometry.center = (5 * maraScale, 9.5 * maraScale, 0)
    maraGeometry.rotateZ(Math.PI/2)
    maraGeometry.rotateY(Math.PI/2)

    for (let i = 0; i < numberOfMara; i++) {
        let lat = getRandomBell(40, 140, 5)
        let lng = getRandomInt(0, 359)

        let maraMaterial
        let darkMara = new THREE.MeshLambertMaterial({
            color: 0x222222, 
            side: DoubleSide,
        })
        let plainMara = new THREE.MeshLambertMaterial({
            color: 0x333333, 
            side: DoubleSide,
        })
        let lightMara = new THREE.MeshLambertMaterial({
            color: 0x444444, 
            side: DoubleSide,
        })

        if (i <= numberOfMara / 3) {
            maraMaterial = darkMara
        } else if (i < numberOfMara / 3 * 2) {
            maraMaterial = plainMara
        } else maraMaterial = lightMara

        guttaState.mara.push(new Gutt(lat, lng, maraGeometry, maraMaterial, guttaState.mara, guttaState, destination, guttaHelperCenter, parameters))
    }
}