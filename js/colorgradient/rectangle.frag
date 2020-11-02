// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;
#endif


void main() {

  gl_FragColor = vec4(0.49,0.49,0.49,1.0); // R,G,B,A
  
}
