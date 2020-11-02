#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform bool u_mouse;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st.x = 0.8*st.x + 0.1;

  if(u_mouse){
    gl_FragColor = vec4(st.x,st.x,st.x,1.0); // R,G,B,A
  }else{
    gl_FragColor = vec4(0.31,0.31,0.31,1.0); // R,G,B,A
  }
}
