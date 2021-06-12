class Diver {
  x = submarine.x;
  y = submarine.x;

  vx = 0;
  vy = 0;

  w = 20;
  h = 30;
  speed = 3;
  isOutOfSub = false;

  get cx() {
    return this.x + this.w / 2;
  }
  get cy() {
    return this.y + this.h / 2;
  }

  update(keys) {
    // leave sub
    if (keys["w"]) {
      if (!this.isOutOfSub) {
        this.isOutOfSub = true;
      }
    }
    // reenters sub
    if (keys["e"] && this.isOutOfSub && circlesCollide(submarine.cx, submarine.cy, submarine.h / 2, this.x, this.y, this.h / 2)) {
      this.isOutOfSub = false;
    }
    // movement outside of sub
    if (this.isOutOfSub) {
      this.vx = 0;
      this.vy = 0;

      if (keys["ArrowLeft"]) this.vx = -this.speed;
      if (keys["ArrowRight"]) this.vx = +this.speed;
      if (keys["ArrowUp"]) this.vy = -this.speed;
      if (keys["ArrowDown"]) this.vy = +this.speed;

      if (keys[" "]) {
        particles.explode(this.x, this.y, "blue");
        //console.log("x: ", this.x, " y: ", this.y);
      }

      let vx = Math.round(this.vx);
      let bottom = this.y + this.h;
      let right = this.x + this.w;

      if (vx > 0) {
        //moving right
        for (let i = 0; i < vx; i++) {
          let y_cls = getCollisionRight(right + 1, bottom, this.h);
          if (y_cls == null) {
            this.x++;
          } else {
            //hit wall
            this.vx = 0;
          }
        }
      } else if (vx < 0) {
        //moving left
        for (let i = 0; i > vx; i--) {
          let y_cls = getCollisionLeft(this.x, bottom, this.h);
          if (y_cls == null) {
            this.x--;
          } else {
            //hit wall
            this.vx = 0;
          }
        }
      }

      if (this.vy > 0) {
        //moving down
        for (let i = 0; i < this.vy; i++) {
          let x_cls = getCollisionDown(bottom, this.x, this.w);
          if (x_cls == null) {
            this.y++;
          } else {
            //landed on something
            this.vy = 0;
          }
        }
      } else if (this.vy < 0) {
        //moving up
        for (let i = 0; i > this.vy; i--) {
          let x_cls = getCollisionUp(this.y, this.x, this.w);
          if (x_cls == null) {
            this.y--;
          } else {
            this.vy = 0;
          }
        }
      }
    } else {
      this.x = submarine.x;
      this.y = submarine.y;
    }
  }
  reset(xcord, ycord) {
    this.x = xcord;
    this.y = ycord;
    this.isOutOfSub = false;
  }

  draw(ctx) {
    if (!this.isOutOfSub) {
      return;
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, 20, 30);
  }
}
