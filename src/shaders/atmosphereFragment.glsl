varying vec3 vertexNormal;
varying vec3 vWorldPosition;

uniform vec3 lightPosition;
uniform vec3 uniformCameraPosition;

void main() {
    float intensity = pow(0.1 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 1.1);

    float distance = length(uniformCameraPosition - vWorldPosition);
    float minDistance = 5.0;
    float maxDistance = 5000.0;

    float alpha = smoothstep(minDistance, maxDistance, distance);
    alpha = 1.0 - alpha;

    vec3 lightDirection = normalize(lightPosition - vWorldPosition);
    float lightIntensity = max(dot(vertexNormal, lightDirection), 0.0);

    vec3 atmosphereColor = vec3(0.3, 0.6, 1.0) * (1.0 + 0.8 * lightIntensity);
    gl_FragColor = vec4(atmosphereColor, alpha) * intensity;
}
