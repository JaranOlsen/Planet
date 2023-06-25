uniform vec3 direction;
  varying vec2 vUv;
  void main() {
    float arrowWidth = 0.2; // change this value to adjust the width of the arrow
    float arrowHeight = 0.6; // change this value to adjust the height of the arrow

    // normalize uv coordinates to [0,1]
    vec2 uv = fract(vUv);

    // compute the rotation angle based on the direction vector
    float angle = atan(direction.y, direction.x);
    
    // rotate the uv coordinates
    vec2 rotatedUv;
    rotatedUv.x = uv.x * cos(angle) - uv.y * sin(angle);
    rotatedUv.y = uv.x * sin(angle) + uv.y * cos(angle);
    
    // create an arrow pattern
    float arrow = step(arrowHeight, rotatedUv.y) * step(rotatedUv.x, arrowWidth * rotatedUv.y / arrowHeight);

    // make the arrow pattern repeat along the tube
    float arrows = mod(rotatedUv.x + rotatedUv.y * arrowHeight / arrowWidth, 1.0) < arrow ? 1.0 : 0.0;

    vec3 color = mix(vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0), arrows); // change colors here

    gl_FragColor = vec4(color, 1.0);
  }