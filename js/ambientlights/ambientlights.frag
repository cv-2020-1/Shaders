#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform vec3 lightColor;
uniform vec3 objectColor;

void main() {  
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * lightColor;

    vec3 result = ambient * objectColor;
    gl_FragColor = vec4(0.5,0.5,0.5,1.0);
    //vec4(result, 1.0);    
}