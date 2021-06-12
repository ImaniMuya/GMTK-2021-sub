class Submarine {
  x = 500;
  y = 500;

  vx = 0;
  vy = 0;

  w = 50;
  h = 50;
  speed = 5;

  isGoingDown = true;

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
    if (keys["a"]) {
      this.vx = -this.speed;
    }
    if (keys["d"]) {
      this.vx = +this.speed;
    }
    // Allowed one switch per level
    if (keys["w"]) {
      // TODO: prompt switch, are you sure?
      this.isGoingDown = false;
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

    if (keys[" "]) {
      particles.explode(this.x, this.y, "pink");
      // TODO: temporary boost in opposite dir to get unstuck
      let boostDir = !this.isGoingDown;
      this.isGoingDown = boostDir;
      console.log(this.isGoingDown);
    }

    // this.vy = this.isGoingDown ? 2 : -2;
    if (this.isGoingDown) {
      this.vy = 2;
    } else {
      this.vy = -2;
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
  }
  reset(xcord, ycord) {
    this.x = xcord;
    this.y = ycord;
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, 50, 50);
  }
}
