/*
 * @name Applying Shaders as Textures, simple example
 * @description Shaders can be applied to 2D/3D shapes as textures. 
 * To learn more about shaders and p5.js: https://itp-xstory.github.io/p5js-shaders/
 */

let theShader;
let shaderTexture;

let theta = 0;

function preload(){
  // load the shader
  theShader = loadShader('texture.vert','texture.frag');
}

function setup() {
  //disables scaling for retina screens which can create inconsistent scaling between displays
  pixelDensity(1);
  // shaders require WEBGL mode to work
  createCanvas(710, 400, WEBGL);
  noStroke();

  // initialize the createGraphics layers
  shaderTexture = createGraphics(710, 400, WEBGL);

  // turn off the createGraphics layers stroke
  shaderTexture.noStroke();
  
}

function draw() {  
  // instead of just setting the active shader we are passing it to the createGraphics layer
  shaderTexture.shader(theShader);

  // here we're using setUniform() to send our uniform values to the shader
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0);
  theShader.setUniform("u_mouse", [mouseX / width, map(mouseY, 0, height, height, 0) / height]);

  // passing the shaderTexture layer geometry to render on
  shaderTexture.rect(0,0,width,height);

  background(255);
  
  //pass the shader as a texture
  texture(shaderTexture);

  // 3D sphere
  translate(-150, 0, 0); // move coordinate system to the left
  push();
  rotateY(theta);
  theta += 0.01;
  sphere(125); // sphere with a radius of 125
  pop();
  
  // 2D ellipse
  /*
    when you put a texture or shader on an ellipse it is rendered in 3d,
    so a fifth parameter that controls the # vertices in it becomes necessary,
    or else you'll have sharp corners. setting it to 100 is smooth.
  */
  // let ellipseFidelity = int(map(mouseX, 0, width, 8, 100));   // map the fidelity to mouseX
  let ellipseFidelity = 100;
  ellipse(260, 0, 200, 200, ellipseFidelity);
}
