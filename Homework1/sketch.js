function setup() {
  createCanvas(windowWidth, windowHeight);

  // 진단용 임시 로그 (원인 확인 후 지울 것)
  window.addEventListener('pointerdown', (e) => {
    console.log('[진단] raw pointerdown 발생 - type:', e.pointerType, 'x:', e.clientX, 'y:', e.clientY);
  });
  window.addEventListener('touchstart', (e) => {
    console.log('[진단] raw touchstart 발생 - 손가락 개수:', e.touches.length);
  });
}

function draw() {
  background(240);
  fill(50, 150, 250);
  circle(mouseX, mouseY, 50);
}

function mousePressed() {
  console.log('[진단] p5 mousePressed 발생 - mouseX:', mouseX, 'mouseY:', mouseY);
}
