varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 color;

void main() {

    // add fresnel-based glow
    float fresnelRatio = 1.0;
    float fresnelPower = 3.0;
    float fresnelEffect = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), fresnelPower) * fresnelRatio;
    vec4 glow = vec4(color, 1.0) * fresnelEffect;
    vec4 baseColor = vec4(color, 0.6); // semi-transparent
    
    gl_FragColor = mix(baseColor, glow, 0.5);
}
