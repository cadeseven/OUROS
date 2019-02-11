
let angle = 0;


function setup() {
  var myCanvas = createCanvas(120, 120, WEBGL);
  myCanvas.parent("spinsnake");

  snake = loadModel('snaketiny.obj');

}

function draw() {
  background(256);
  rotateY(angle);
  translate (0, 0, 0);
  model(snake);
  angle += .01;
}
