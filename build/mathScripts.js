import * as THREE from 'three';

export function latLngToUnitVector(lat, lng) {
    const phi = THREE.MathUtils.degToRad(90 - lat);
    const theta = THREE.MathUtils.degToRad(lng);
  
    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.sin(phi) * Math.sin(theta);
    const z = Math.cos(phi);
  
    return new THREE.Vector3(x, y, z);
  }

export function rotateVector2D(vector, angle) {
    const x = vector.x * Math.cos(angle) - vector.y * Math.sin(angle);
    const y = vector.x * Math.sin(angle) + vector.y * Math.cos(angle);
    return new THREE.Vector2(x, y);
}

export function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomBell(min, max, bias = 7) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-bias * Math.log(u)) * Math.cos(bias * Math.PI * v);
    num = num / 10.0 + 0.5;
    if (num > 1 || num < 0) return getRandomBell(min, max);
    return Math.floor(num * (max - min + 1) + min);
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function convertLatLngtoCartesian(lat, lng, radius) {
    const latRad = (lat * Math.PI / 180);
    const lngRad = (lng * Math.PI / 180) - Math.PI;
    const x = radius * Math.sin(latRad) * Math.sin(lngRad);
    const y = radius * Math.cos(latRad);
    const z = radius * Math.sin(latRad) * Math.cos(lngRad);

    return { x, y, z };
}

export function convertCartesiantoLatLng(x, y, z) {
    const latRad = Math.acos(y / Math.sqrt(x * x + y * y + z * z));
    const lngRad = Math.atan(x / z);

    const lat = (latRad / Math.PI * 180);
    const lng = ((lngRad) / Math.PI * 180) + 180;

    return {
        lat,
        lng: (x <= 0) ? lng - 180 : lng + 180,
    };
}

export function constrainLatLng(lat, lng) {
    if (lat < 0) {
        lat = Math.abs(lat);
        lng = (lng < 180) ? lng + 180 : lng - 180;
    }
    if (lat > 180) {
        lat = 180 - (lat - 180);
        lng = (lng < 180) ? lng + 180 : lng - 180;
    }

    return {
        lat,
        lng: (lng < 0) ? 360 + lng : (lng > 360) ? lng - 360 : lng,
    };
}
