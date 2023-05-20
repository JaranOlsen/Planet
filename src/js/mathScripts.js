import * as THREE from 'three';

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
    const lngRad = Math.atan2(x, z);

    const lat = (latRad / Math.PI * 180);
    const lng = ((lngRad / Math.PI * 180) + 360) % 360; // Added 180 and applied modulo 360

    return {
        lat,
        lng,
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

export function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  
