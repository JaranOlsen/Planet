uniform sampler2D diffuseTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    //float intensity = 0.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0 ));
    float intensity = 0.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0 ));
    //vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

    gl_FragColor = vec4(atmosphere, 1.0);
    //gl_FragColor = vec4(atmosphere + texture2D(diffuseTexture, vertexUV).xyz, 1.0);
}

    
