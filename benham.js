

let theShader;


function preload() {
    theShader = loadShader('../benham.vert', '../benham.frag');  
}

function setup() {
    let cnv = createCanvas(500, 500, WEBGL);
    // cnv.position(100, 50);
    noStroke();
}

function draw() {
    shader(theShader);  
    rect(0, 0, width, height); 
    
    theShader.setUniform("u_resolution", [width, height]);
    theShader.setUniform("u_time", millis() / 1000.0);
    theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);

  // print out the framerate
    // print(frameRate());
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }