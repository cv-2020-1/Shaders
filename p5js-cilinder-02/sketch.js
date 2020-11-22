var theShader;
var angle = 0.01;

function preload(){
  theShader = loadShader('texture.vert','texture.frag');
}


function setup() {
  createCanvas(710, 400, WEBGL).parent("p5");
  noStroke();
}

function draw() {
  background(0);

  shader(theShader);
  lights();
 

  rotateY(angle);  
  cylinder(100, 200)
  angle += 0.01;  
}