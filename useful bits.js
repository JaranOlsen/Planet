
document.body.appendChild( VRButton.createButton( renderer ) );



let dolly = new THREE.Object3D();
dolly.position.z = 8;
dolly.add( camera );
scene.add( dolly );

let dummyCam = new THREE.Object3D();
camera.add( dummyCam );










