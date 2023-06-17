varying vec2 vertexUV;
varying vec3 vertexNormal;

uniform vec3 rotation;

void main() {
    
    gl_FragColor = vec4(rotation, 0.5);
    
}
