class Treasure {
  constructor(chestX, chestY, amount) {
    this.x = chestX;
    this.y = chestY;
    this.r = 10;
    this.loot = amount;
  }
  update() {
    // this.y++;
  }
  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}
