class Fish {
  constructor(fishX, fishY, amount, entity) {
    this.x = fishX;
    this.y = fishY;
    this.r = 10;
    this.increase = amount;
    this.startSide = fishX;
    this.entity = entity;
    this.dw = 20;
    this.dh = 30;
    this.rightFish = [fishR1, fishR2];
    this.leftFish = [fishL1, fishL2];
    this.frameTime = 200;
  }
  get cx() {
    return this.x + this.w / 2;
  }
  get cy() {
    return this.y + this.h / 2;
  }
  update() {
    if (this.y >= Math.abs(camera.y) && this.y <= Math.abs(camera.y) + SIZE - 100) {
      //checking if on screen
      if (this.startSide <= 0) {
        this.x = this.x + this.increase / 2;
      } else {
        this.x = this.x - this.increase / 2;
      }
    }
  }
  draw(ctx) {
    const frame = Math.floor(Date.now() / this.frameTime) % 2;
    let image;
    if (this.startSide > 0) {
      image = this.rightFish[frame];
    } else {
      image = this.leftFish[frame];
    }

    // if (this.entity == "sub") {
    //   ctx.fillStyle = "red";
    // } else {
    //   ctx.fillStyle = "blue";
    // }
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    // ctx.closePath();
    // ctx.fill();
    ctx.drawImage(image, this.x - this.r, this.y - this.r, this.dw, this.dh);
  }
}
