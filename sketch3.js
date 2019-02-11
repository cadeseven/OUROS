
let angle = 0;


function setup() {
  createCanvas(windowWidth - windowWidth*.03, windowHeight - windowHeight*.1, WEBGL);
  fullscreen()

  if (windowWidth > 720) {
    snake = loadModel('snakesmooth.obj')
  }

  else {
    snake = loadModel('snakesmall.obj');
  }


}

function windowResized() {
  resizeCanvas(windowWidth - windowWidth*.03, windowHeight - windowHeight*.1);
}

function draw() {
  background(256, 256, 256);
  normalMaterial(100, 200, 150);
  orbitControl();
  rotateY(angle);
  model(snake);
  angle += .01;
}
