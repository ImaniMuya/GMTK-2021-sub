class HUD {
  y = 0;
  x = 0;

  draw() {
    ctx.font = "normal 18px VT323";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 1 - camera.y, 1000, 100);
    ctx.fillStyle = "white";
    ctx.fillText("Sub Lives Left: " + subLives, 30, 25 - camera.y);
    ctx.fillText("Treasure Points: " + points, 30, 75 - camera.y);
    if (subTimeRemaining.toFixed(0) <= 60) ctx.fillStyle = "green";
    if (subTimeRemaining.toFixed(0) <= 30 && subTimeRemaining.toFixed(0) > 10) ctx.fillStyle = "orange";
    else if (subTimeRemaining.toFixed(0) <= 10) ctx.fillStyle = "red";
    ctx.fillText("Sub Time Remaining: " + subTimeRemaining.toFixed(0), 500, 25 - camera.y);
    if (diveTimeRemaining.toFixed(0) < 10) ctx.fillStyle = "red";
    else ctx.fillStyle = "green";
  }
}
