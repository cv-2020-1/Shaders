let theShader;
let angle = 0.01;

function preload(){
  theShader = loadShader('texture.vert','texture.frag');
}


function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
}

function draw() {
  background(0);

  shader(theShader);

  pointLight(0, 255, 255, 0, 0, 200);  
  

  rotateY(angle);  
  cylinder(100, 200)
  angle += 0.01;  
}