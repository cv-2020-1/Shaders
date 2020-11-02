#ifdef GL_ES
precision mediump float;
#endif

attribute vec3 aPosition;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1);

  positionVec4.y = positionVec4.y*0.5;
  positionVec4.xy = positionVec4.xy - 0.5;
  positionVec4.y = positionVec4.y + 0.25;

  gl_Position = positionVec4;
}
