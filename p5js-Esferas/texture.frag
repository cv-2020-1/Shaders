// casey conchinha - @kcconch ( https://github.com/kcconch )
// louise lessel - @louiselessel ( https://github.com/louiselessel )
// more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;
#endif

// These are our passed in information from the sketch.js
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  // position of the pixel divided by resolution, to get normalized positions on the canvas
  // st.x now hold x-pos, st.y now holds y-pos.
	vec2 st = gl_FragCoord.xy/u_resolution; 

  // make the color depend on the mouse input using the uniform, calculate
  // the st.x, u_mouse.x, u_mouse.y, st.y are all mapped to the 0-1 space
  // so multiplying them will still make a new number between 0 and 1!
  float y = u_mouse.y * st.y;
  float x = st.x * u_mouse.x;

  // lets map x to red, and y to green (try to edit this line and make other colors)
  // remember to keep all values between 0 and 1
  vec3 color = vec3(x,y,0.0);      // vec3(r,g,b)

  // gl_FragColor is a built in shader variable, and your .frag file must contain it
  // We are setting the vec3 color into a new vec4, with a transparency of 1 (no opacity)
	gl_FragColor = vec4(color,1.0);  // vec4(r,g,b,a)
}