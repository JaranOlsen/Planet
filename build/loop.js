export function animationLoop(renderer, resizeRendererToDisplaySize, camera, gutta, hoverPin) {

    //WebXR
    if (renderer.xr.isPresenting){
        const dt = clock.getDelta();

        if (controllers ){
            Object.values( controllers).forEach( ( value ) => {
                handleController( value.controller );
            });
        } 
        if (elapsedTime===undefined) elapsedTime = 0;
        elapsedTime += dt;
        if (elapsedTime > 0.3){
            updateGamepadState();
            elapsedTime = 0;
        }
        if (XRinSession == true) {
            const xInput = Number(buttonStates.xr_standard_thumbstick.xAxis)
            const yInput = Number(buttonStates.xr_standard_thumbstick.yAxis)
            if (xInput != 0 || yInput != 0 || buttonStates.a_button != 0 || buttonStates.b_button != 0) {
                dollyLng += xInput * 2
                dollyLat += yInput
                dollyRadius += ((0.1 * buttonStates.a_button) - (0.1 * buttonStates.b_button)) * (dollyRadius - 5)
                const dollyPosit = convertLatLngtoCartesian(dollyLat, dollyLng, dollyRadius)
                dolly.position.set(dollyPosit.x, dollyPosit.y - 1.6, dollyPosit.z)
            }
        }
    }
            
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    for (let i = 0; i < gutta.length; i++) {
        gutta[i].calculateWander();
        gutta[i].calculateAlignment();
        gutta[i].calculateCohesion();
        gutta[i].calculateSeparation();
        gutta[i].calculateTemperature();
        gutta[i].move();
    }

    hoverPin();

    renderer.render(scene, camera);

    const camPos = camera.position
    const camRot = camera.rotation
    spotlight.position.set(camPos.x, camPos.y, camPos.z);
    spotlight.rotation.set(camRot.x, camRot.y, camRot.z);
    
    center.rotation.y += -0.00001;
    pivot1.rotation.y += -0.0003;
    pivot2.rotation.y += -0.00003;
    pivot3.rotation.y += -0.000009;
    pivot4.rotation.y += -0.0001;
    clouds.rotation.y += 0.00001;

    if (camera.position.z > 15 && start == true) {
        camera.position.z -= 0.0213 * Math.pow(camera.position.z - 10, 1.35) / introTuneLength
    }
    if (camera.position.z < -15 && start == true) {
        camera.position.z += 0.213 * Math.pow(Math.abs(camera.position.z) - 10, 1.35) / introTuneLength
    }
    if (start == true) {
        camera.position.x += 0.4 / introTuneLength
        camera.position.y += 0.1 / introTuneLength
    }
    //console.log("x: ", camera.position.x, "y: ", camera.position.y, "z: ", camera.position.z)
    if (camera.position.z > -15 && camera.position.z < 15) start = false
  
    controls.rotateSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet);
    controls.zoomSpeed = (camera.position.distanceTo(middleOfPlanet) - 5) / camera.position.distanceTo(middleOfPlanet) / 3;

    if (sign) {
        signRotationVector.set(camera.position.x, camera.position.y, camera.position.z)
        signRotationVector.normalize()
        sign.lookAt(signRotationVector.x, signRotationVector.y, signRotationVector.z ) 
    }

    controls.update();
}