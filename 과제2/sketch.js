let bgColor = 220;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bgColor);
  fill(250, 100, 100);
  circle(200, 200, 100);
}

function mousePressed() {
  bgColor = random(255);
}
