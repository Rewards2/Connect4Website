class Clip {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = 0;
    this.stop = 0;
  }
  show() {
    if (this.type == 1) {
      fill(255, 0, 0);
    } else if (this.type == 2) {
      fill(255, 255, 0);
    } else {
      fill(255);
    }
      circle(this.x * 55 + 30, this.y * 55 + 50, 50);
  }
}
