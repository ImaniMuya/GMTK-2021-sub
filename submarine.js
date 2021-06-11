class Submarine {
  x = 0;
  y = 0;

  vx = 0;
  vy = 0;

  w = 200;
  h = 200;
  speed = 5;

  update(keys) {
    this.vx = 0;

    if (keys["a"]) this.vx = -this.speed;
    if (keys["d"]) this.vx = +this.speed;

    if (keys[" "]) {
      particles.explode(this.x, this.y, "blue");
    }

    this.x += this.vx;
    this.y += 1.25;
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, 50, 50);
  }
}
