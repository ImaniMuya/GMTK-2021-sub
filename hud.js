class HUD {
  y = 0;
  x = 0;
  bubbleSprite = bubble;
  heartSprite = heart;
  timerSprite = timer;
  coinSprite = coin;

  bubbleW = 50;
  bubbleH = 50;
  heartW = 80;
  heartH = 80;
  timerW = 60;
  timerH = 60;
  coinW = 80;
  coinH = 80;

  draw() {
    let bubbleDraw;
    let heartDraw;
    let timerDraw;
    let coinDraw;
    bubbleDraw = this.bubbleSprite;
    heartDraw = this.heartSprite;
    timerDraw = this.timerSprite;
    coinDraw = this.coinSprite;

    ctx.font = "normal 50px VT323";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 1 - camera.y, 1000, 120);
    ctx.fillStyle = "white";

    // Style Coin Text
    if (subTimeRemaining.toFixed(0) <= 60) ctx.fillStyle = "yellow";
    
    // Draw Coins
    ctx.drawImage(coinDraw, 10, 0 - camera.y, this.coinW, this.coinH);
    ctx.fillText(points, 10 + (this.coinW * .90), 0 + (this.coinH * .45) - camera.y);

    // Draw Hearts
    if (difficulty.options[difficulty.selectedIndex].value > 0){
      var heartCounter;
      for (heartCounter = 0; heartCounter < subLives; heartCounter++) {
        ctx.drawImage(heartDraw, 10 + (heartCounter * (this.heartW/2)) , 50 - camera.y, this.heartW, this.heartH);
      }
    }

    // Style Timer Text
    if (subTimeRemaining.toFixed(0) <= 60) ctx.fillStyle = "green";
    if (subTimeRemaining.toFixed(0) <= 30 && subTimeRemaining.toFixed(0) > 10) ctx.fillStyle = "orange";
    else if (subTimeRemaining.toFixed(0) <= 10) ctx.fillStyle = "red";

    // Draw Sub Timer
    ctx.drawImage(timerDraw, 865, 15 - camera.y, this.timerW, this.timerH);
    ctx.fillText(subTimeRemaining.toFixed(0), 865 + (this.timerW * 1), 41 - camera.y);

    // Draw Bubbles
    var bubbleCounter;
    for (bubbleCounter = 0; bubbleCounter < diveTimeRemaining; bubbleCounter++) {
      ctx.drawImage(bubbleDraw, 630 + (bubbleCounter* (this.bubbleW/1.5)) , 65 - camera.y, this.bubbleW, this.bubbleH);
    }
  }
}
