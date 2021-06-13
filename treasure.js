class Treasure {
  constructor(chestX, chestY, amount) {
    this.x = chestX;
    this.y = chestY;
    this.r = 10;
    this.dw = 20;
    this.dh = 30;
    this.loot = amount;
    this.isOpen = false;
    this.chestOpen = chest2;
    this.chestClosed = chest1;
  }

  draw(ctx) {
    // ctx.fillStyle = "green";
    // if (this.isOpen) ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    // ctx.closePath();
    // ctx.fill();

    let image;
    if (this.isOpen) image = this.chestOpen;
    else image = this.chestClosed;
    ctx.drawImage(image, this.x, this.y, this.dw, this.dh);
  }
}
