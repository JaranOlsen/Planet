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
    // Validate inputs
    if (radius <= 0) {
        throw new Error('Radius must be a positive number.');
    }
    if (lat < -90 || lat > 90) {
        throw new Error('Latitude must be between -90 and 90 degrees.');
    }
    if (lng < -180 || lng > 180) {
        throw new Error('Longitude must be between -180 and 180 degrees.');
    }

    // Convert latitude and longitude from degrees to radians
    const latRad = THREE.MathUtils.degToRad(lat);
    const lngRad = THREE.MathUtils.degToRad(lng);

    // Calculate Cartesian coordinates
    const x = radius * Math.cos(latRad) * Math.cos(lngRad);
    const y = radius * Math.sin(latRad);
    const z = radius * Math.cos(latRad) * Math.sin(lngRad);

    // Optionally, round to avoid floating-point precision issues
    const precision = 6; // Number of decimal places
    return {
        x: parseFloat(x.toFixed(precision)),
        y: parseFloat(y.toFixed(precision)),
        z: parseFloat(z.toFixed(precision)),
    };
}

export function convertCartesiantoLatLng(x, y, z) {
    // Calculate radius from origin to the point
    const radius = Math.sqrt(x * x + y * y + z * z);

    if (radius === 0) {
        throw new Error('Cannot convert Cartesian coordinates at the origin (0,0,0) to latitude and longitude.');
    }

    // Calculate latitude in radians
    const latRad = Math.asin(y / radius);
    const lat = THREE.MathUtils.radToDeg(latRad);

    // Calculate longitude in radians
    const lngRad = Math.atan2(z, x); 
    let lng = THREE.MathUtils.radToDeg(lngRad);

    // Normalize longitude to [-180, 180) degrees
    if (lng < -180) {
        lng += 360;
    } else if (lng >= 180) {
        lng -= 360;
    }

    // Optionally, round to avoid floating-point precision issues
    const precision = 6; // Number of decimal places
    return {
        lat: parseFloat(lat.toFixed(precision)),
        lng: parseFloat(lng.toFixed(precision)),
    };
}

export function constrainLatLng(lat, lng) {
    // Constrain latitude to [-90, +90]
    if (lat < -90) {
        lat = -90;
    } else if (lat > 90) {
        lat = 90;
    }

    // Normalize longitude to [-180, +180)
    if (lng < -180) {
        lng += 360;
    } else if (lng >= 180) {
        lng -= 360;
    }

    return {
        lat,
        lng,
    };
}

/* export function constrainLatLng(lat, lng) {
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
} */

export function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

/* export function angularDistance(lat1, lng1, lat2, lng2) {
    // Convert degrees to radians
    const toRad = (deg) => deg * Math.PI / 180;

    const theta1 = toRad(lat1); // Colatitude in radians
    const theta2 = toRad(lat2); // Colatitude in radians
    const phi1 = toRad(lng1);   // Longitude in radians
    const phi2 = toRad(lng2);   // Longitude in radians

    const deltaPhi = phi2 - phi1;

    // Haversine-like formula for spherical distance
    const cosDistance = Math.cos(theta1) * Math.cos(theta2) + Math.sin(theta1) * Math.sin(theta2) * Math.cos(deltaPhi);

    // Clamp the cosine value to the valid range [-1, 1] to avoid numerical issues with acos
    const clampedCosDistance = Math.min(1, Math.max(-1, cosDistance));

    const distanceRad = Math.acos(clampedCosDistance);
    const distanceDeg = distanceRad * 180 / Math.PI;

    return distanceDeg;
} */

export function angularDistance(lat1, lng1, lat2, lng2) {
    const toRad = (deg) => (deg * Math.PI) / 180;

    // Convert lat, lng to radians
    const latRad1 = toRad(lat1);
    const latRad2 = toRad(lat2);
    const lngRad1 = toRad(lng1);
    const lngRad2 = toRad(lng2);

    // Difference in longitude
    const dLng = lngRad2 - lngRad1;

    // Spherical law of cosines
    const cosDistance =
        Math.sin(latRad1) * Math.sin(latRad2) +
        Math.cos(latRad1) * Math.cos(latRad2) * Math.cos(dLng);

    // Clamp the result to [-1, 1] to avoid floating-point issues
    const clamped = Math.min(1, Math.max(-1, cosDistance));

    // Convert from radians to degrees
    const distanceRad = Math.acos(clamped);
    const distanceDeg = (distanceRad * 180) / Math.PI;

    return distanceDeg;
}
  
