const board = [];
let turn = 1;
let p = {};

function setup() {
  createCanvas(445, 370);
  for (let x = 0; x < 8; x++) {
    board.push([]);
    for (let y = 0; y < 6; y++) {
      board[x].push(new Clip(x, y));
    }
  }
  p.x = 0;
  p.y = 0;
}

function draw() {
  background(70, 120, 220);
  board.forEach(x => x.forEach(y => y.show()));
}

function mousePressed() {
  let x = Math.floor(mouseX / 55);
  if (x > 7) return;
  if (board[x][0].stop) return;
  for (let i = 0; i < 6; i++) {
    if (board[x][i].stop) {
      board[x][i - 1].type = turn;
      turn%=2;
      turn++;
      board[x][i - 1].stop = 1;
      return;
    }
  }
  board[x][5].type = turn;
  turn%=2;
  turn++;
  board[x][5].stop = 1;
}
