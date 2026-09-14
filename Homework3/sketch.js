let x = 200;
let speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  x += speed;
  if (x > width || x < 0) {
    speed *= -1;
  }
  fill(100, 200, 100);
  circle(x, 200, 50);
}
