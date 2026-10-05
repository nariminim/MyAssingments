let input;
let memos = []; // 오브젝트 형태의 메모를 담을 배열

let bh = 150;
let mh = 40;
let held = null; //지금 잡고있는 메모

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  // 텍스트 입력창
  input = createInput("");
  input.position(20, height / 2);
  input.size(200, 20);
  input.changed(createMemo);

  // 저장해둔 메모 불러오기 (마지막 스텝)
  let saved = getItem("myMemo");
  if (saved !== null) {
    memos = saved;
  }
}

function createMemo() {
  let txt = input.value();
  if (txt === "") return;

  // 1. 배열에 {} 오브젝트 형태로 메모 저장하기
  memos.push({
    txt: txt,
    x: width / 2,
    y: height / 2,
    w: textWidth(txt) + 20,
    archived: false,
  });
  input.value("");

  // 2. 로컬 스토리지에 아이템 저장하기
  storeItem("myMemo", memos);
}

function mousePressed() {
  for (let m of memos) {
    if (
      mouseX < m.x + m.w / 2 &&
      mouseX > m.x - m.w / 2 &&
      mouseY < m.y + mh / 2 &&
      mouseY > m.y - mh / 2
    ) {
      //print("in");
      held = m;
    }
  }
}

function mouseDragged() {
  if (held === null) return;
  // 잡은 메모 위치 이동
  held.x = mouseX;
  held.y = mouseY;
}

// function mouseReleased() {
//   if (held === null) return;

//   if (held.y > height - bh) {
//     // 보관 영역
//     held.archived = true;
//   } else {
//     held.archived = false;
//   }
//   held = null;

//   storeItem("myMemo", memos);
// }

function mouseReleased() {
  if (held === null) return;

  if (held.y < bh) {
    // 삭제 영역: 배열에서 이 메모를 찾아서 빼기
    for (let i = memos.length - 1; i >= 0; i--) {
      if (memos[i] === held) {
        memos.splice(i, 1);
      }
    }
  } else if (held.y > height - bh) {
    // 보관 영역
    held.archived = true;
  } else {
    held.archived = false;
  }
  held = null;

  // 바뀐 배열을 통째로 다시 저장
  storeItem("myMemo", memos);
}

function draw() {
  background(255);

  // 보관 영역
  fill(230);
  noStroke();
  rect(width / 2, height - bh / 2, width, bh);

  // 삭제 영역
  fill(130, 0, 0);
  noStroke();
  rect(width / 2, bh / 2, width, bh);

  // 메모 그리기
  for (let m of memos) {
    if (m.archived === true) {
      fill("#8e8f8c");
    } else {
      fill("#ecfc9c");
    }
    rect(m.x, m.y, m.w, mh);
    fill(0);
    text(m.txt, m.x, m.y);
  }
}
