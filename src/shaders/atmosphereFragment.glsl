varying vec3 vertexNormal;
varying vec3 vWorldPosition;

uniform float baseIntensity;
uniform float intensityPower;

uniform vec3 lightPosition;
uniform vec3 uniformCameraPosition;
uniform vec3 planetPosition;

uniform float minDistance;
uniform float maxDistance;

uniform float closeDistanceThreshold;

uniform vec3 standardColor;
uniform vec3 sunsetColor;
uniform vec3 nightColor;

uniform float sunsetMinAngleThreshold;
uniform float sunsetMaxAngleThreshold;
uniform float nightMaxAngleThreshold;


void main() {
    float intensity = pow(baseIntensity - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), intensityPower);
    vec3 atmosphereColor;
    float distance = length(uniformCameraPosition - vWorldPosition);
    float alpha = 1.0 - smoothstep(minDistance, maxDistance, distance);

    vec3 lightDirection = normalize(lightPosition - vWorldPosition);
    float lightIntensity = max(dot(vertexNormal, lightDirection), 0.0);

    float distanceToPlanet = length(uniformCameraPosition - planetPosition);

    vec3 toSun = normalize(lightPosition - planetPosition);
    vec3 toCamera = normalize(uniformCameraPosition - planetPosition);

    float angle = degrees(acos(dot(toSun, toCamera)));

    // standardColor from 0 - 90 degrees
    if (angle <= sunsetMinAngleThreshold) {
        atmosphereColor = standardColor;
    }
    // sunsetColor fading in from 90 degrees, reaching its maximum at 130
    else if (angle > sunsetMinAngleThreshold && angle <= sunsetMaxAngleThreshold) {
        float sunsetFadeIn = smoothstep(sunsetMinAngleThreshold, sunsetMaxAngleThreshold, angle);
        atmosphereColor = mix(standardColor, sunsetColor, sunsetFadeIn);
    }
    // sunsetColor fading out and nightColor fading in between 130 to 150 degrees
    else if (angle > sunsetMaxAngleThreshold && angle <= nightMaxAngleThreshold) {
        float nightFadeIn = smoothstep(sunsetMaxAngleThreshold, nightMaxAngleThreshold, angle);
        atmosphereColor = mix(sunsetColor, nightColor, nightFadeIn);
    }
    // nightColor staying at its maximum all until 180 degrees
    else if (angle > nightMaxAngleThreshold) {
        atmosphereColor = nightColor;
    }

    // Gradual fade when the camera is within a certain range of the planet
    if (distanceToPlanet > (closeDistanceThreshold - 1.0) && distanceToPlanet < (closeDistanceThreshold + 1.0)) {
        float proximityFade = smoothstep((closeDistanceThreshold - 1.0), (closeDistanceThreshold + 1.0), distanceToPlanet);
        atmosphereColor = mix(atmosphereColor, standardColor, proximityFade);
    }
    // When the distance is more than (closeDistanceThreshold + 1), always use standardColor
    else if (distanceToPlanet >= (closeDistanceThreshold + 1.0)) {
        atmosphereColor = standardColor;
    }


    gl_FragColor = vec4(atmosphereColor, alpha) * intensity;
}
