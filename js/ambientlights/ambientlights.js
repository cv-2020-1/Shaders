var shader_ambientlight;

function preload() {
    shader_ambientlight = loadShader('../js/ambientlights/ambientlights.vert', '../js/ambientlights/ambientlights.frag'); 
}

function setup() {
	createCanvas(1000, 500, WEBGL).parent('p5');;
	noStroke();
	angleMode(DEGREES);
}

function draw(){
	background(0);
	
	shader(shader_ambientlight);
	//shader_ambientlight.setUniform("objectColor", [255,255,0]);
	//shader_ambientlight.setUniform("lightColor", [255,255,255]);
	shader_ambientlight.setUniform("objectColor", [1,1,0]);
	shader_ambientlight.setUniform("lightColor", [1,1,1]);	
	pointLight(255, 255, 255, width/2, height/2, 100);
	//translate(width/8, height/8,0);
	rotate(50, [1,1,0]);
	//fill(255,255,0)
	box(200);
}