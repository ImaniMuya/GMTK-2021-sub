// Edric Yu

function getCanvasData(ctx) {
  data = [];
  raw_data = ctx.getImageData(0, 0, SIZE, MAP_H).data;
  for (let row = 0; row < MAP_H; row++) {
    data.push([]);
    for (let col = 0; col < SIZE; col++) {
      let pos = 4 * (col + row * SIZE);
      let tileid = TILES[raw_data[pos + 3]];
      data[row].push(tileid);
    }
  }
  return data;
}

// returns x pos of collision or null
function getCollisionDown(bottom, x, width) {
  let r = Math.round(bottom) + 1; //row below bottom
  if (r < 0) return null;
  if (r >= MAP_H) return x; //screen bottom
  x = Math.round(x); //left
  for (let c = x; c < x + width; c++) {
    if (map_data[r][c] !== null) {
      return c;
    }
  }
  return null;
}

// returns x pos of collision or null
function getCollisionUp(top, x, width) {
  let r = Math.round(top) - 1; //row above top
  if (r < 0) return x; //screen top
  x = Math.round(x); //left
  for (let c = x; c < x + width; c++) {
    if (map_data[r][c] == 1) {
      return c;
    }
  }
  return null;
}

// returns y pos of collision or null
function getCollisionRight(right, bottom, height) {
  let c = Math.round(right) + 1; //col after right
  if (c > SIZE) return bottom; //screen right
  bottom = Math.round(bottom); //bottom
  for (let r = bottom - height + 1; r <= bottom; r++) {
    //scan downward to find highest collision
    if (map_data[r][c] == 1) {
      return r;
    }
  }
  return null;
}

// returns y pos of collision or null
function getCollisionLeft(left, bottom, height) {
  let c = Math.round(left) - 1; //col before left
  if (c < 0) return bottom; //screen left
  bottom = Math.round(bottom); //bottom
  for (let r = bottom - height + 1; r <= bottom; r++) {
    //scan downward
    if (map_data[r][c] == 1) {
      return r;
    }
  }
  return null;
}

function flushToCanvas() {
  vis_ctx.drawImage(renderer, 0, 0); //flush to canvas
  requestAnimationFrame(flushToCanvas);
}
