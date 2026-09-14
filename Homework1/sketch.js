function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240);
  fill(50, 150, 250);
  circle(mouseX, mouseY, 50);

  // 버전 확인용 (확인 후 지워도 됨)
  fill(0);
  textSize(16);
  text("v6", 10, 24);
}
