var shader_colorgradient;
var shader_rectangle;

function preload() {
    shader_colorgradient = loadShader('../js/colorgradient/colorgradient.vert', '../js/colorgradient/colorgradient.frag'); 
    shader_rectangle = loadShader('../js/colorgradient/rectangle.vert', '../js/colorgradient/rectangle.frag');
}

function setup() {
	createCanvas(1200, 500, WEBGL).parent('p5');;
	noStroke();
}

function draw(){
	push()
	shader(shader_colorgradient);
	shader_colorgradient.setUniform("u_resolution", [width, height]);
	if(mouseIsPressed)
		shader_colorgradient.setUniform("u_mouse", false);
	else
		shader_colorgradient.setUniform("u_mouse", true);
	rect(0,0,width, height)
	pop();

	push()
	shader(shader_rectangle);
	rect(0,0,width, height)
	pop();	
}