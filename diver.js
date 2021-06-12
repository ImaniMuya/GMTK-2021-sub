class Diver {
  x = submarine.x;
  y = submarine.x;

  vx = 0;
  vy = 0;

  w = 20;
  h = 30;
  speed = 1;
  isOutOfSub = false;

  get cx() {
    return this.x + this.w / 2;
  }
  get cy() {
    return this.y + this.h / 2;
  }

  update(keys) {
    if (this.isOutOfSub) {
      this.vx = 0;
      this.vy = 0;

      if (keys["ArrowLeft"]) this.vx = -this.speed;
      if (keys["ArrowRight"]) this.vx = +this.speed;
      if (keys["ArrowUp"]) this.vy = -this.speed;
      if (keys["ArrowDown"]) this.vy = +this.speed;

      if (keys[" "]) {
        particles.explode(this.x, this.y, "blue");
      }

      this.x += this.vx;
      this.y += this.vy;
    } else {
      this.x = submarine.x;
      this.y = submarine.y;
    }
  }
  reset(xcord,ycord) {
    this.x = xcord
    this.y = ycord
    this.isOutOfSub = false
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, 20, 30);
  }
}
