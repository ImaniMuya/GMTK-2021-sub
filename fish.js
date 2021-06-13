class Fish {
    constructor(fishX, fishY, amount, entity) {
      this.x = fishX;
      this.y = fishY;
      this.r = 10;
      this.increase = amount;
      this.startSide = fishX;
      this.entity = entity;
    }
    update() {
        if (this.y >= Math.abs(camera.y) && this.y <= (Math.abs(camera.y)+ SIZE - 100)){ //checking if on screen
            if (this.startSide <= 0){
                this.x = this.x + this.increase/2;
            }
            else{
                this.x = this.x - this.increase/2;
            }
        }
    }
    draw(ctx) {
        if (this.entity == "sub"){
            ctx.fillStyle = "red";}
        else {ctx.fillStyle = "blue"}
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  }