class Submarine {
  x = 0;
  y = 0;

  vx = 0;
  vy = 0;

  w = 50;
  h = 50;
  speed = 5;

  get cx() {
    return this.x + this.w / 2;
  }
  get cy() {
    return this.y + this.h / 2;
  }

  update(keys) {
    this.vx = 0;
    if (diver.isOutOfSub) {
      return;
    }

    if (keys["a"]) this.vx = -this.speed;
    if (keys["d"]) this.vx = +this.speed;

    if (keys[" "]) {
      particles.explode(this.x, this.y, "pink");
    }

    this.x += this.vx;
    this.y += 1.25;
  }
  reset(xcord,ycord) {
    this.x = xcord
    this.y = ycord
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, 50, 50);
  }
}
