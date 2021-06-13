class Submarine {
  x = 500;
  y = 500;

  vx = 0;
  vy = 0;

  w = 50;
  h = 50;

  dw = 70;
  dh = 70;
  speed = 2;
  boostAmount = 0;
  justBoosted = false;
  landed = false;

  isGoingDown = true;
  takingDamage = false;

  facingLeft = false;
  frameTime = 200;
  subL = [subL1, subL2];
  subR = [subR1, subR2];

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

    // check if off camera
    if (this.isGoingDown && this.y <= Math.abs(camera.y) - this.h) {
      done = true;
      dead = true;
      onScreen = false;
      lossScreen.classList.remove("hidden");
      lossMsg.innerText = "You were too slow";
    }
    if (!this.isGoingDown && this.y - SIZE >= Math.abs(camera.y)) {
      done = true;
      dead = true;
      onScreen = false;
      lossScreen.classList.remove("hidden");
      lossMsg.innerText = "You were too slow";
    }

    if (keys["a"]) {
      this.vx = -this.speed;
    }
    if (keys["d"]) {
      this.vx = +this.speed;
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
          this.takingDamage = false;
        } else {
          //hit wall
          this.vx = 0;
          this.takingDamage = true;
        }
      }
    } else if (vx < 0) {
      //moving left
      for (let i = 0; i > vx; i--) {
        let y_cls = getCollisionLeft(this.x, bottom, this.h);
        if (y_cls == null) {
          this.x--;
          this.takingDamage = false;
        } else {
          //hit wall
          this.vx = 0;
          this.takingDamage = true;
        }
      }
    }

    if (keys[" "]) {
      if (!this.justBoosted && this.landed) {
        let xVal = this.x;
        if (this.facingLeft) {
          xVal = this.x + this.dw;
        }
        particles.explode(xVal, this.y, "lightblue");
        this.boostAmount = 10;
        this.justBoosted = true;
        this.landed = false;
      }
    }

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
          this.takingDamage = false;
          this.landed = false;
          if (this.boostAmount > 0) {
            this.justBoosted = false;
            this.y -= 5;
            this.boostAmount--;
          }
        } else {
          //landed on something
          if (this.justBoosted) {
            this.justBoosted = false;
            this.y -= 20;
            this.boostAmount--;
          } else {
            this.landed = true;
            this.vy = 0;
          }
        }
      }
    } else if (this.vy < 0) {
      //moving up
      for (let i = 0; i > this.vy; i--) {
        let x_cls = getCollisionUp(this.y, this.x, this.w);
        if (x_cls == null) {
          this.y--;
          this.takingDamage = false;
          this.landed = false;
          if (this.boostAmount > 0) {
            this.justBoosted = false;
            this.y += 5;
            this.boostAmount--;
          }
        } else {
          //landed on something
          this.landed = true;
          if (this.justBoosted) {
            this.justBoosted = false;
            this.y += 20;
            this.boostAmount--;
          } else {
            this.vy = 0;
            this.takingDamage = true;
          }
        }
      }
    }

    if (this.vx != 0) {
      this.facingLeft = this.vx < 0;
    }
  }
  reset(xcord, ycord) {
    this.x = xcord;
    this.y = ycord;
  }

  draw(ctx) {
    const frame = Math.floor(Date.now() / this.frameTime) % 2;
    let image;
    if (this.facingLeft) {
      image = this.subL[frame];
    } else {
      image = this.subR[frame];
    }
    // ctx.fillStyle = "green";
    // ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.drawImage(image, this.cx - this.dw / 2, this.cy - this.dh / 2, this.dw, this.dh);
  }
}
