let canvas;
let c1;
let c2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', ' -1');
  c1 = color(0);
  c2 = color('#eeeeee');
  // pixelDensity(2);
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('CE001', 'png')
  }
  if (key == 'r') {
    clear();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    stroke(c2);
    fill(c1);
    ellipse(mouseX, mouseY, 100);
  }
}
