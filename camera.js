class Camera {
  y = 0;
  x = 0;
  yBase = 0;

  update() {
    if (diver.isOutOfSub) {
      return;
    }
    this.x = 0;
    this.y -= 1;
  }
}
