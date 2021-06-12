class Camera {
  y = 0;
  x = 0;
  yBase = 0;
  h = 1000;

  update() {
    if (diver.isOutOfSub) {
      return;
    }
    if (this.y < -2500 + this.h && submarine.isGoingDown) {
      return;
    }
    if (this.y >= 0 && !submarine.isGoingDown) {
      return;
    }
    this.x = 0;
    if (submarine.isGoingDown) {
      this.y -= 1;
    } else {
      this.y += 1;
    }
  }
}
