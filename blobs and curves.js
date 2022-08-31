import { GUI } from "./public/assets/modules/dat.gui.module.js";


//create blobs
let blob1 = new THREE.Mesh(
    new THREE.SphereBufferGeometry (0.1, 20, 20),
    new THREE.MeshBasicMaterial({color: 0xff0000})
  )
  let blob2 = new THREE.Mesh(
    new THREE.SphereBufferGeometry (0.1, 20, 20),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
  )
  let blob3 = new THREE.Mesh(
    new THREE.SphereBufferGeometry (0.1, 20, 20),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
  )
  
  function convertLatLngToCartesian(p){
    let lat = (p.lat) * Math.PI / 180;
    let lng = (p.lng) * Math.PI / 180;
  
    let z = 5 * Math.cos(lat) * Math.sin(lng)
    let x = 5 * Math.sin(lat) * Math.sin(lng)
    let y = 5 * Math.cos(lng)
  
    return {
      x, y, z
    }
  }
  
  var point1 = {
    lat: 61,
    lng: 22
  }
  
  var point2 = {
    lat: 55,
    lng: -60
  }
  
  var point3 = {
    lat: 55,
    lng: -60
  }
  
  //Dat.gui
  const gui = new GUI()
  gui.add(point1, "lat", 0, 360, 1).name("Latitude").onChange(function(newValue) {
    let pos1 = convertLatLngToCartesian(point1);
    let pos2 = convertLatLngToCartesian(point2);
    blob1.position.set(pos1.x, pos1.y, pos1.z);
    scene.remove(scene.children[scene.children.length - 1]);
    getCurve(pos1, pos2);
  });
  gui.add(point1, "lng", 0, 180, 1).name("Longitude").onChange(function(newValue) {
    let pos1 = convertLatLngToCartesian(point1);
    let pos2 = convertLatLngToCartesian(point2);
    blob1.position.set(pos1.x, pos1.y, pos1.z);
    scene.remove(scene.children[scene.children.length - 1]);
    getCurve(pos1, pos2);
  });
  gui.add(point2, "lat", 0, 360, 0.5).name("Latitude").onChange(function(newValue) {
    let pos1 = convertLatLngToCartesian(point1);
    let pos2 = convertLatLngToCartesian(point2);
    let pos3 = convertLatLngToCartesian(point3);
    blob2.position.set(pos2.x, pos2.y, pos2.z);
    scene.remove(scene.children[scene.children.length - 2]);
    getCurve(pos1, pos2);
    getCurve(pos2, pos3);
  });
  gui.add(point2, "lng", 0, 180, 0.5).name("Longitude").onChange(function(newValue) {
    let pos1 = convertLatLngToCartesian(point1);
    let pos2 = convertLatLngToCartesian(point2);
    let pos3 = convertLatLngToCartesian(point3);
    blob2.position.set(pos2.x, pos2.y, pos2.z);
    scene.remove(scene.children[scene.children.length - 2]);
    getCurve(pos1, pos2);
    getCurve(pos2, pos3);
  });
  gui.add(point3, "lat", 0, 360, 0.5).name("Latitude").onChange(function(newValue) {
    let pos2 = convertLatLngToCartesian(point2);
    let pos3 = convertLatLngToCartesian(point3);
    blob3.position.set(pos3.x, pos3.y, pos3.z);
    scene.remove(scene.children[scene.children.length - 1]);
    getCurve(pos2, pos3);
  });
  gui.add(point3, "lng", 0, 180, 0.5).name("Longitude").onChange(function(newValue) {
    let pos2 = convertLatLngToCartesian(point2);
    let pos3 = convertLatLngToCartesian(point3);
    blob3.position.set(pos3.x, pos3.y, pos3.z);
    scene.remove(scene.children[scene.children.length - 1]);
    getCurve(pos2, pos3);
  });
  
  let pos1 = convertLatLngToCartesian(point1);
  let pos2 = convertLatLngToCartesian(point2);
  let pos3 = convertLatLngToCartesian(point3);
  
  blob1.position.set(pos1.x, pos1.y, pos1.z);
  blob2.position.set(pos2.x, pos2.y, pos2.z);
  blob3.position.set(pos3.x, pos3.y, pos3.z);
  scene.add(blob1, blob2, blob3);
  getCurve(pos1, pos2);
  getCurve(pos2, pos3);
  
  function getCurve(p1,p2){
    let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
    let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
    let points = []
    for (let i = 0; i <= 20; i++) {
      let p = new THREE.Vector3().lerpVectors(v1, v2, i/20)
      p.normalize()
      p.multiplyScalar(5 + 0.5 * Math.sin(Math.PI*i/20));
      points.push(p)
    }
    let path = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(path, 20, 0.01, 8, false);
    const material = new THREE.MeshBasicMaterial({color: 0x000000});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  }