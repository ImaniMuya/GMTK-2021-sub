class HUD {
  y = 0;
  x = 0;

  draw() {
    ctx.font = "italic 18px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    ctx.fillText("Sub Lives Left: " + subLives, 30, 25 - camera.y);
    ctx.fillText("Dive Lives Left: " + diveLives, 30, 50 - camera.y);
    ctx.fillText("Treasure Points: " + points, 30, 75 - camera.y);
    ctx.fillText("Sub Time Remaining: " + subTimeRemaining.toFixed(0), 500, 25 - camera.y);
    ctx.fillText("Dive Time Remaining: " + diveTimeRemaining.toFixed(0), 500, 50 - camera.y);
  }
}
