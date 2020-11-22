//this variable will hold our shader object
let myShader;

function preload() {
  myShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  // shader() sets the active shader with our shader
  shader(myShader);

  // Rotate our geometry on the X and Y axes
  
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.005);

  // Draw some geometry to the screen
  box(200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
