let myShader;

function preload() {
  //myShader = loadShader("../js/ambientlights/ambientlights.vert", "../js/ambientlights/ambientlights.frag");
  myShader = loadShader("../js/lights/shader.vert", "../js/lights/shader.frag");
  console.log("../js/lights/shader.vert")
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
  box(width / 8);
}

/* 
    //float ambientStrength = 0.1;
    //vec3 ambient = ambientStrength * lightColor;

    //vec3 result = ambient * objectColor;
*/