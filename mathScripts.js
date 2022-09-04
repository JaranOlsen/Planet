export function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomBell(min, max) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-7.0 * Math.log(u)) * Math.cos(7.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return getRandomBell(min, max) // resample between 0 and 1
    num = Math.floor(num * (max - min + 1) + min);
    return num
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* export function convertLatLngtoCartesian(lat, lng, radius) {
    let latRad = lat * Math.PI / 180;
    let lngRad = (lng * Math.PI / 180);

    let x = radius * Math.sin(latRad) * Math.sin(lngRad)
    let y = radius * Math.cos(latRad)
    let z = radius * Math.sin(latRad) * Math.cos(lngRad)

    return {
        x, y, z
    }
}

export function convertCartesiantoLatLng(x, y, z) {
    let latRad = Math.acos(y / (Math.sqrt(Math.pow(z, 2) + Math.pow(x, 2) + Math.pow(y, 2))));
    let lngRad = Math.atan(x / z);

    let lat = latRad / Math.PI * 180;
    let lng = lngRad / Math.PI * 180;

    return {
        lat, lng
    }
} */

export function convertLatLngtoCartesian(lat, lng, radius) {
    let latRad = (lat * Math.PI / 180);
    let lngRad = (lng * Math.PI / 180) - Math.PI;

    let x = radius * Math.sin(latRad) * Math.sin(lngRad)
    let y = radius * Math.cos(latRad)
    let z = radius * Math.sin(latRad) * Math.cos(lngRad)

    return {
        x, y, z
    }
}

export function convertCartesiantoLatLng(x, y, z) {
    let latRad = Math.acos(y / (Math.sqrt(Math.pow(z, 2) + Math.pow(x, 2) + Math.pow(y, 2))));
    let lngRad = Math.atan(x / z);

    let zpos = false;
    let xpos = false;
    if (z > 0) {zpos = true}
    if (x > 0) {xpos = true}

    let lat = (latRad / Math.PI * 180);
    let lng = ((lngRad) / Math.PI * 180) + 180;

    if (zpos == false && xpos == false) {lng -= 180}
    if (zpos == false && xpos == true) {lng += 180}

    return {
        lat, lng
    }
}

export function convertLatLngtoCartesianAndBack(lat, lng, radius) {
    let latRad = (lat * Math.PI / 180);
    let lngRad = (lng * Math.PI / 180) - Math.PI;

    let x = radius * Math.sin(latRad) * Math.sin(lngRad)
    let y = radius * Math.cos(latRad)
    let z = radius * Math.sin(latRad) * Math.cos(lngRad)

    let latRad2 = Math.acos(y / (Math.sqrt(Math.pow(z, 2) + Math.pow(x, 2) + Math.pow(y, 2))));
    let lngRad2 = Math.atan(x / z);

    let zpos = false;
    let xpos = false;
    if (z > 0) {zpos = true}
    if (x > 0) {xpos = true}

    let lat2 = (latRad2 / Math.PI * 180);
    let lng2 = ((lngRad2) / Math.PI * 180) + 180;

    if (zpos == false && xpos == false) {lng2 -= 180}
    if (zpos == false && xpos == true) {lng2 += 180}

    return {
        lat2, lng2, zpos, xpos
    }
}