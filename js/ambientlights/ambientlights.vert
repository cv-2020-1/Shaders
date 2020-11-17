#ifdef GL_ES
precision mediump float;
#endif

uniform mat4 transform;
attribute vec4 position;
attribute vec4 color;
varying vec4 vertColor;

void main() {
	vertColor = color;
 	gl_Position = transform * position;
}