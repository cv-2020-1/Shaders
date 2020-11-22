precision mediump float;

varying vec2 vTexCoord;

uniform vec3 lightColor;
uniform vec3 objectColor;

void main() {

  float ambientStrength = 1.0;
  vec3 ambient = ambientStrength * lightColor;
  vec3 result = ambient * objectColor;

  gl_FragColor = vec4(result ,1.0);
}