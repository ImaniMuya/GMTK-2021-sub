// Edric Yu

function attemptInit() {
  if (loadedImgs == 1) {
    ctx.drawImage(c_map, 0, 0);
    map_data = getCanvasData();
    loadmsg.parentNode.removeChild(loadmsg);
    gameInt = setInterval(tick, 1);
    flushToCanvas();
    clearInterval(loadInterval);
  }
}

function getCanvasData() {
  data = [];
  raw_data = ctx.getImageData(0, 0, W, H).data;
  for (let row = 0; row < H; row++) {
    data.push([]);
    for (let col = 0; col < W; col++) {
      let pos = 4 * (col + row * W);
      let colorstr = raw_data.slice(pos, pos + 4).toString();
      let tileid = TILES[colorstr];
      data[row].push(tileid);
    }
  }
  return data;
}
