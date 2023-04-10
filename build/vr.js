import * as THREE from 'three'
import { VRButton } from 'three/addons/webxr/VRButton.js'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js'
import { Constants as MotionControllerConstants, fetchProfile, MotionController } from 'three/examples/jsm/libs/motion-controllers.module.js'
import { getRandomNum, convertLatLngtoCartesian, convertCartesiantoLatLng, constrainLatLng } from './mathScripts.js'
import { pushContent, pushVRContent } from './content.js'


export function checkForXRSupport(renderer, camera, scene, selectState, slideAction) {
    return navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
        if (supported) {
            const button = VRButton.createButton(renderer);
            document.body.appendChild(button);
            setupXR(renderer, camera, scene, selectState, slideAction);
            return true;
        } else {
            return false;
        }
    });
}

function declareGlobalVariables() {
    window.dolly = new THREE.Object3D();
    window.dummyCam = new THREE.Object3D();
    window.workingMatrix = new THREE.Matrix4();
    window.buttonStates = {};
    window.gamepadIndices = "";
    window.info = {};
    window.controllers = {};
    window.elapsedTime = 0;
    window.dollyLat = 90;
    window.dollyLng = 180;
    window.dollyRadius = 8;
    window.XRinSession = false;
    window.activeVRSlideshow = undefined;
    window.activeVRSlide = undefined;
    window.activeVRSlideshowPosition = undefined;
    window.activeVRSlideshowLength = undefined;
    window.slideshowActions = []
}

function setupXR(renderer, camera, scene, selectState, slideAction, UI, UIcontainer, UIactive) {
    renderer.xr.enabled = true;

    declareGlobalVariables();
    
    camera.position.set( 0, 1.6, 0 );
    const dollyPos = convertLatLngtoCartesian(dollyLat, dollyLng, dollyRadius)
    dolly.position.set(dollyPos.x, dollyPos.y - 1.6, dollyPos.z)
    dolly.add( camera );
    scene.add( dolly );
    camera.add( dummyCam );

    const controller = renderer.xr.getController( 0 );
    //controller.addEventListener( 'connected', onConnected( "", renderer) );
    controller.addEventListener('connected', (event) => onConnected(event, renderer, selectState, slideAction, UI, UIcontainer, UIactive));
    const modelFactory = new XRControllerModelFactory();
    const geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0,0,0 ), new THREE.Vector3( 0,0,-1 ) ] );
    const line = new THREE.Line( geometry );
    line.scale.z = 0;
    
    controllers = {};
    controllers.right = buildController( 0, line, modelFactory, renderer );
    controllers.left = buildController( 1, line, modelFactory, renderer );
}

function onConnected( event, renderer, selectState, slideAction, UI, UIcontainer, UIactive ){
    /* playButton.style.display = "none";
    skipButton.style.display = "none";
    credits.style.display = "none"; */

    const DEFAULT_PROFILES_PATH = 'https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles';
    const DEFAULT_PROFILE = 'generic-trigger';

    info = {};
    
    fetchProfile( event.data, DEFAULT_PROFILES_PATH, DEFAULT_PROFILE ).then( ( { profile, assetPath } ) => {
        console.log( JSON.stringify(profile));
        
        info.name = profile.profileId;
        info.targetRayMode = event.data.targetRayMode;

        Object.entries( profile.layouts ).forEach( ( [key, layout] ) => {
            const components = {};
            Object.values( layout.components ).forEach( ( component ) => {
                components[component.rootNodeName] = component.gamepadIndices;
            });
            info[key] = components;
        });

        createButtonStates( info.right );
        
        console.log( JSON.stringify(info) );

        updateControllers( info, renderer, selectState, slideAction, UI, UIcontainer, UIactive );

    } );
}

function createButtonStates(components){
    buttonStates = {};
    gamepadIndices = components
    Object.keys( components ).forEach( (key) => {
        if ( key.indexOf('touchpad')!=-1 || key.indexOf('thumbstick')!=-1){
            buttonStates[key] = { button: 0, xAxis: 0, yAxis: 0 };
        }else{
            buttonStates[key] = 0; 
        }
    })
}

function updateControllers(info, renderer, selectState, slideAction, UI, UIcontainer, UIactive){
    if (info.right !== undefined){
        const right = renderer.xr.getController(0);
        
        let trigger = false, squeeze = false;
        
        Object.keys( info.right ).forEach( (key) => {
            if (key.indexOf('trigger')!=-1) trigger = true;                   
            if (key.indexOf('squeeze')!=-1) squeeze = true;
            
        });
        
        if (trigger){
            //right.addEventListener( 'selectstart', onSelectStart(selectState));
            right.addEventListener('selectstart', (event) => onSelectStart(right, selectState));
            //right.addEventListener( 'selectend', onSelectEnd );
            right.addEventListener('selectend', (event) => onSelectEnd(right, selectState, slideAction));
        }

        if (squeeze){
            //right.addEventListener( 'squeezestart', onSqueezeStart );
            right.addEventListener('squeezestart', (event) => onSqueezeStart(right));
            //right.addEventListener( 'squeezeend', onSqueezeEnd );
            right.addEventListener('squeezeend', (event) => onSqueezeEnd(right, UI, UIcontainer, () => UIactive));
        }
        
        right.addEventListener( 'disconnected', onDisconnected );
    }
    
    if (info.left !== undefined){
        const left = renderer.xr.getController(1);
        
        let trigger = false, squeeze = false;
        
        Object.keys( info.left ).forEach( (key) => {
            if (key.indexOf('trigger')!=-1) trigger = true;                   if (key.indexOf('squeeze')!=-1) squeeze = true;      
        });
        
        if (trigger){
            //left.addEventListener( 'selectstart', onSelectStart(selectState) );
            left.addEventListener('selectstart', (event) => onSelectStart(left, selectState));
            //left.addEventListener( 'selectend', onSelectEnd );
            left.addEventListener('selectend', (event) => onSelectEnd(left, selectState, slideAction));

        }

        if (squeeze){
            //left.addEventListener( 'squeezestart', onSqueezeStart );
            left.addEventListener('squeezestart', (event) => onSqueezeStart(left));
            //left.addEventListener( 'squeezeend', onSqueezeEnd );
            left.addEventListener('squeezeend', (event) => onSqueezeEnd(left, UI, UIcontainer, () => UIactive));

        }
        
        left.addEventListener( 'disconnected', onDisconnected );
    }
}

export function updateLine(controller) {
    const line = controller.getObjectByName('line');
    if (controller.userData.selectPressed) {
      line.visible = true;
      line.scale.z = 5; // You can adjust the line length here
    } else {
      line.visible = false;
    }
  }

function buildController( index, line, modelFactory, renderer ){
    const controller = renderer.xr.getController( index );
    
    controller.userData.selectPressed = false;
    controller.userData.index = index;
    controller.userData.UIactive = false;
    
    if (line) {
        const clonedLine = line.clone();
        clonedLine.name = 'line';
        controller.add(clonedLine);
      }
    
    dolly.add( controller );
    
    let grip;
    
    if ( modelFactory ){
        grip = renderer.xr.getControllerGrip( index );
        grip.add( modelFactory.createControllerModel( grip ));
        dolly.add( grip );
    }
    
    return { controller, grip };
}

function onSelectStart( controller, selectState ){
    controller.userData.selectPressed = true;
    selectState = true;
}

function onSelectEnd( controller, selectState, slideAction ){
    controller.children[0].scale.z = 0;
    controller.userData.selectPressed = false;
    controller.userData.selected = undefined;
    selectState = false;
    slideAction = false;
}

function onSqueezeStart( controller ){
    controller.userData.squeezePressed = true;
    if (controller.userData.selected !== undefined ){
        controller.attach( controller.userData.selected );
        controller.userData.attachedObject = userData.selected;
    }
}

function onSqueezeEnd( controller, UI, UIcontainer ){
    controller.userData.squeezePressed = false;
    if (controller.userData.attachedObject !== undefined){
            room.attach( controller.userData.attachedObject );
        controller.userData.attachedObject = undefined;
    }

    const UIactive = controller.userData.UIactive;
    console.log(UIactive)

    if (UIactive) {
        console.log("close", UI, UIcontainer)

        UI.remove(UIcontainer)
        controller.userData.UIactive = false
    }
}

function onDisconnected(){
    const index = userData.index;
    console.log(`Disconnected controller ${index}`);
    
    if ( controllers ){
        const obj = (index==0) ? controllers.right : controllers.left;
        
        if (obj){
            if (obj.controller){
                const controller = obj.controller;
                while( controller.children.length > 0 ) controller.remove( controller.children[0] );
                dolly.remove( controller );
            }
            if (obj.grip) dolly.remove( obj.grip );
        }
    }
}

export function handleController( controller, raycaster, intersectObjectsArray, UIactive, contentData, UIcontainer, UI, middleOfPlanet, jaranius){
    if (controller.userData.selectPressed ){
        controller.children[0].scale.z = 10;

        workingMatrix.identity().extractRotation( controller.matrixWorld );

        raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
        raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( workingMatrix );

        const intersects = raycaster.intersectObjects( intersectObjectsArray );

        if (intersects.length>0){
            const activatedPin = intersects[0].object;

            if (activatedPin.source[activatedPin.index].slides !== undefined) {
                
                if (UIactive == false) {
                    activeVRSlideshow = activatedPin.source[activatedPin.index].slides
                    activeVRSlideshowPosition = convertLatLngtoCartesian(activatedPin.source[activatedPin.index].lat, activatedPin.source[activatedPin.index].lng + 180, 5.3)
                    activeVRSlideshowLength = contentData[activeVRSlideshow].length
                    activeVRSlide = 0

                    UIcontainer = pushVRContent(activeVRSlideshow, activeVRSlide)
                    UI.add(UIcontainer)
                    UIcontainer.position.set(activeVRSlideshowPosition.x, activeVRSlideshowPosition.y, activeVRSlideshowPosition.z)
                    UIcontainer.lookAt(middleOfPlanet)
                    UIcontainer.rotateY(Math.PI)
                    jaranius.add(UI)
                    
                    controller.userData.UIactive = true;
                } 
            }
        }
    }
}

export function updateGamepadState( renderer, session ){
    session = renderer.xr.getSession();
    
    const inputSource = session.inputSources[0];
    
    if (inputSource && inputSource.gamepad && gamepadIndices && buttonStates){
        const gamepad = inputSource.gamepad;
        XRinSession = true
        try{
            Object.entries( buttonStates ).forEach( ( [ key, value ] ) => {
                const buttonIndex = gamepadIndices[key].button;
                if ( key.indexOf('touchpad')!=-1 || key.indexOf('thumbstick')!=-1){
                    const xAxisIndex = gamepadIndices[key].xAxis;
                    const yAxisIndex = gamepadIndices[key].yAxis;
                    buttonStates[key].button = gamepad.buttons[buttonIndex].value; 
                    buttonStates[key].xAxis = gamepad.axes[xAxisIndex].toFixed(2); 
                    buttonStates[key].yAxis = gamepad.axes[yAxisIndex].toFixed(2); 
                }else{
                    buttonStates[key] = gamepad.buttons[buttonIndex].value;
                }
            });
        }catch(e){
            console.warn("An error occurred setting the ui");
        }
    }
}

function moveDolly(dt){
    
    const speed = 0.2;
    let pos = dolly.position.clone();
    pos.y += 1;
    
    let dir = new THREE.Vector3();
    const q = new THREE.Quaternion();
    //Store original dolly rotation
    const quaternion = dolly.quaternion.clone();
    //Get rotation for movement from the headset pose
    dolly.quaternion.copy( dummyCam.getWorldQuaternion(q) );
    dolly.getWorldDirection(dir);
    dir.negate();
    
        dolly.translateZ(-dt*speed);
        pos = dolly.getWorldPosition( origin );

    //cast left
    dir.set(-1,0,0);
    dir.applyMatrix4(dolly.matrix);
    dir.normalize();

    //cast right
    dir.set(1,0,0);
    dir.applyMatrix4(dolly.matrix);
    dir.normalize();

    //cast down
    dir.set(0,-1,0);
    pos.y += 1.5;

    //Restore the original rotation
    dolly.quaternion.copy( quaternion );
}