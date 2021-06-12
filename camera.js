class Camera {
  y = 0;
  x = 0;
  yBase = 0;
  h = 1000;

  update() {
    if (diver.isOutOfSub) {
      return;
    }
    if (this.y < -2500 + this.h) {
      console.log("floor hit");
      return;
    }
    this.x = 0;
    // this.y = isGoingDown ? this.y - 1 : this.y + 1;
    if (submarine.isGoingDown) {
      this.y -= 1;
    } else {
      this.y += 1;
    }
  }
}
