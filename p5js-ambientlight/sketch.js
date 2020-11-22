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

  shader(myShader);
  myShader.setUniform("lightColor", [1.0, 0.0, 1.0]);
  myShader.setUniform("objectColor", [0.0, 1.0, 1.0]);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.005);

  // Draw some geometry to the screen
  box(200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
