var imgBlur;
var img;

function preload() {
  //imgBlur = loadShader('../js/convolution/effect.vert', '../js/convolution/blur.frag');
  imgBlur = loadShader('effect.vert', 'blur.frag');
}

function setup() {
  alert("setup hecho")
  var imgHTML = document.getElementById('img');  
  var canvas = createCanvas(imgHTML.width, imgHTML.height, WEBGL);
  canvas.parent('p5');
  noStroke();
  
  img = loadImage('../img/gato.jpeg');
}

function draw() {
  //frameRate(1);
  shader(imgBlur);
  imgBlur.setUniform('tex0', img);
  imgBlur.setUniform('stepSize', [1.0 / width, 1.0 / height]);
  imgBlur.setUniform('dist', 3.0);
  rect(0, 0, width, height);
}