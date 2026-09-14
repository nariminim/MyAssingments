let prevs = []; //previous x,y positions 를 담을 배열 생성
// @ts-ignore
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // @ts-ignore
  bgColor = color(50);
  background(bgColor);
}

function draw() {
  // step 1
  noFill();
  stroke(255, 255, 0);
  line(0, 0, 100, 100);

  // step 2
  if (touches.length > 0) {
    for (let i = 0; i < touches.length; i++) {
      // @ts-ignore
      let xpos = touches[i].x;
      // @ts-ignore
      let ypos = touches[i].y;

      // null, undefined => false
      if (prevs[i]) {
        line(xpos, ypos, prevs[i].x, prevs[i].y);
      }

      prevs[i] = {
        x: xpos,
        y: ypos,
      };
    }
  }

  //print(millis() / 1000);
}

// step 3
// 이전 위치에서 선 연결되는 문제
// 손가락 모두 뗐을 때 초기화하기
function mouseReleased() {
  if (touches.length === 0) {
    prevs = [];
  }
}

// step 4
// 더블탭과 지우기
let lastTap = 0;
function mousePressed() {
  // 이전 탭으로부터 0.3초 안에 다시 탭했을 경우만 실행됨
  if (millis() - lastTap < 300) {
    background(bgColor);
  }
  lastTap = millis();
}
