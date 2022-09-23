//enable VR

const DEFAULT_PROFILES_PATH = 'https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles';
const DEFAULT_PROFILE = 'generic-trigger';
const stats = new Stats();
document.body.appendChild( stats.dom );
let workingMatrix = new THREE.Matrix4();
let origin = new THREE.Vector3();
//let ui = createUI();
let controllers = {};


setupXR();
/* function createUI(){
    const config = {
        panelSize: { height: 0.5 },
        height: 256,
        body: { type: "text" }
    }
    const ui = new CanvasUI( { body: "" }, config );
    ui.mesh.position.set(0, 1.5, -1);
    scene.add( ui.mesh );
    return ui;
} */
function createButtonStates(components){

    let buttonStates = {};
    let gamepadIndices = components;
    
    Object.keys( components ).forEach( (key) => {
        if ( key.indexOf('touchpad')!=-1 || key.indexOf('thumbstick')!=-1){
            buttonStates[key] = { button: 0, xAxis: 0, yAxis: 0 };
        }else{
            buttonStates[key] = 0; 
        }
    })
    
    //buttonStates = buttonStates;
}

/* function updateUI(){
    const str = JSON.stringify( buttonStates );
    if (strStates === undefined || ( str != strStates )){
        ui.updateElement( 'body', str );
        ui.update(); 
        strStates = str;
    }
} */

/* function updateGamepadState(){
    const session = renderer.xr.getSession();
    
    const inputSource = session.inputSources[0];
    
    if (inputSource && inputSource.gamepad && gamepadIndices && ui && buttonStates){
        const gamepad = inputSource.gamepad;
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
                
                updateUI();
            });
        }catch(e){
            console.warn("An error occurred setting the ui");
        }
    }
} */

function setupXR(){
    renderer.xr.enabled = true;
    
    const button = new VRButton( renderer );

    document.body.appendChild( VRButton.createButton( renderer ) );

    const self = this;
    
    function onConnected( event ){
        const info = {};
        
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

            updateControllers( info );

        } );
    }
     
    const controller = renderer.xr.getController( 0 );
    
    controller.addEventListener( 'connected', onConnected );
    
    const modelFactory = new XRControllerModelFactory();
    
    const geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0,0,0 ), new THREE.Vector3( 0,0,-1 ) ] );

    const line = new THREE.Line( geometry );
    line.scale.z = 0;
    
    //let controllers = {};
    controllers.right = buildController( 0, line, modelFactory );
    controllers.left = buildController( 1, line, modelFactory );

    let dolly = new THREE.Object3D();
    dolly.position.z = 6;
    dolly.add( camera );
    scene.add( dolly );
    
    let dummyCam = new THREE.Object3D();
    camera.add( dummyCam );

}

function buildController( index, line, modelFactory ){
    const controller = renderer.xr.getController( index );
    
    controller.userData.selectPressed = false;
    controller.userData.index = index;
    
    if (line) controller.add( line.clone() );
    
    scene.add( controller );
    
    let grip;
    
    if ( modelFactory ){
        grip = renderer.xr.getControllerGrip( index );
        grip.add( modelFactory.createControllerModel( grip ));
        scene.add( grip );
    }
    
    return { controller, grip };
}

function updateControllers(info){
    const self = this;
    
    function onSelectStart( ){
        userData.selectPressed = true;
    }

    function onSelectEnd( ){
        children[0].scale.z = 0;
        userData.selectPressed = false;
        userData.selected = undefined;
    }

    function onSqueezeStart( ){
        userData.squeezePressed = true;
        if (userData.selected !== undefined ){
            attach( userData.selected );
            userData.attachedObject = userData.selected;
        }
    }

    function onSqueezeEnd( ){
        userData.squeezePressed = false;
        if (userData.attachedObject !== undefined){
            self.room.attach( userData.attachedObject );
            userData.attachedObject = undefined;
        }
    }
    
    function onDisconnected(){
        const index = userData.index;
        console.log(`Disconnected controller ${index}`);
        
        if ( self.controllers ){
            const obj = (index==0) ? self.controllers.right : self.controllers.left;
            
            if (obj){
                if (obj.controller){
                    const controller = obj.controller;
                    while( controller.children.length > 0 ) controller.remove( controller.children[0] );
                    self.scene.remove( controller );
                }
                if (obj.grip) self.scene.remove( obj.grip );
            }
        }
    }
    
    if (info.right !== undefined){
        const right = renderer.xr.getController(0);
        
        let trigger = false, squeeze = false;
        
        Object.keys( info.right ).forEach( (key) => {
            if (key.indexOf('trigger')!=-1) trigger = true;                   if (key.indexOf('squeeze')!=-1) squeeze = true;      
        });
        
        if (trigger){
            right.addEventListener( 'selectstart', onSelectStart );
            right.addEventListener( 'selectend', onSelectEnd );
        }

        if (squeeze){
            right.addEventListener( 'squeezestart', onSqueezeStart );
            right.addEventListener( 'squeezeend', onSqueezeEnd );
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
            left.addEventListener( 'selectstart', onSelectStart );
            left.addEventListener( 'selectend', onSelectEnd );
        }

        if (squeeze){
            left.addEventListener( 'squeezestart', onSqueezeStart );
            left.addEventListener( 'squeezeend', onSqueezeEnd );
        }
        
        left.addEventListener( 'disconnected', onDisconnected );
    }
}

function handleController( controller ){
/*     if (controller.userData.selectPressed ){
        controller.children[0].scale.z = 10;

        workingMatrix.identity().extractRotation( controller.matrixWorld );

        raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
        raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( workingMatrix );

        const intersects = raycaster.intersectObjects( pinPositions );

        if (intersects.length>0){
            intersects[0].object.add(highlight);
            highlight.visible = true;
            controller.children[0].scale.z = intersects[0].distance;
            controller.userData.selected = intersects[0].object;
        }else{
            highlight.visible = false;
        }
    } */
    if (controller.userData.selectPressed ){
            
        const wallLimit = 0.5;
        const speed = 0.2;
        let pos = dolly.position.clone();
        pos.y += 1;

        let dir = new THREE.Vector3();
        //Store original dolly rotation
        const quaternion = dolly.quaternion.clone();
        //Get rotation for movement from the headset pose
        dolly.quaternion.copy( dummyCam.getWorldQuaternion() );
        dolly.getWorldDirection(dir);
        dir.negate();
        raycaster.set(pos, dir);

        let blocked = false;

        let intersect = raycaster.intersectObjects(jaranius);
        if (intersect.length>0){
            if (intersect[0].distance < wallLimit) blocked = true;
        }

        if (!blocked){
            dolly.translateZ(-dt*speed);
            pos = dolly.getWorldPosition( origin );
        }

        //cast left
        dir.set(-1,0,0);
        dir.applyMatrix4(dolly.matrix);
        dir.normalize();
        raycaster.set(pos, dir);

        intersect = raycaster.intersectObjects(jaranius);
        if (intersect.length>0){
            if (intersect[0].distance<wallLimit) dolly.translateX(wallLimit-intersect[0].distance);
        }

        //cast right
        dir.set(1,0,0);
        dir.applyMatrix4(dolly.matrix);
        dir.normalize();
        raycaster.set(pos, dir);

        intersect = raycaster.intersectObjects(jaranius);
        if (intersect.length>0){
            if (intersect[0].distance<wallLimit) dolly.translateX(intersect[0].distance-wallLimit);
        }

        dolly.position.y = 0;

        //Restore the original rotation
        dolly.quaternion.copy( quaternion );

    }
}












    //VR
    if (renderer.xr.isPresenting){
        if (controllers ){
            Object.values( controllers).forEach( ( value ) => {
                handleController( value.controller );
            });
        } 
        /* if (elapsedTime===undefined) elapsedTime = 0;
        elapsedTime += dt;
        if (elapsedTime > 0.3){
            updateGamepadState();
            elapsedTime = 0; */
        }
    //}else{
        //stats.update();
    //}