class Submarine {
  x = 500;
  y = 500;

  vx = 0;
  vy = 0;

  w = 50;
  h = 50;
  speed = 2;
  boost = 0;

  isGoingDown = true;
  takingDamage = false;

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
    // check if on bottom
    if (this.y > 2416 && this.isGoingDown) {
      switchDirectionsPrompt();
    }

    // check if off camera
    if (this.isGoingDown && this.y <= Math.abs(camera.y) - this.h) {
      done = true;
      dead = true;
      lossScreen.classList.remove("hidden");
      lossMsg.innerText = "You were too slow";
    }
    if (!this.isGoingDown && this.y - SIZE >= Math.abs(camera.y)) {
      done = true;
      dead = true;
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
      particles.explode(this.x, this.y, "pink");
      this.boost++;
      if (this.boost >= 10) {
        this.boost = 0;
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
        } else {
          //landed on something
          if (this.boost) {
            this.y -= 1.3;
            this.boost--;
          } else {
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
        } else {
          if (this.boost) {
            this.y += 1.3;
            this.boost--;
          } else {
            this.vy = 0;
            this.takingDamage = true;
          }
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
