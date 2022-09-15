varying vec3 vertexNormal;

void main() {
    //float intensity = pow(0.8 - dot(vertexNormal, vec3(0.0, 0.0, 1.0 )), 2.0);
    float intensity = pow(0.1 - dot(vertexNormal, vec3(0.0, 0.0, 1.0 )), 10.0);

    gl_FragColor = vec4(1.0, 1.0, 0.4, 1.0) * intensity;
}
