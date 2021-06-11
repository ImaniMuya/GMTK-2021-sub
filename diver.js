class Diver {
  x = submarine.x;
  y = submarine.x;

  vx = 0;
  vy = 0;

  w = 200;
  h = 200;
  speed = 5;

  update(keys) {
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
    this.y += this.vx;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 20, 30);
  }
}
