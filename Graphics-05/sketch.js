let GameStates = Object.freeze({ 
  START: "start",
  PLAY: "play",
  END: "end"
});
let gameState = GameStates.START;
let score = 0;
let highScore = 0;
let time = 10;
let textPadding = 15;
let gameFont;

function preload() {
  gameFont = loadFont("media/PressStart2P-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  textFont(gameFont);
}

function draw() {
  background(220);

  switch(gameState) {
    case GameStates.START:
      textAlign(CENTER, CENTER);
      textSize(18);
      text("Press ENTER to Start", width/2,height/2);
      break;
    case GameStates.PLAY:
      textAlign(LEFT, TOP);
      text("Score: " + score, textPadding, textPadding);
      textAlign(RIGHT, TOP);
      text("Time: " + Math.ceil(time), width-textPadding, textPadding);

      time -= deltaTime / 1000;
      if (time <= 0) {
        gameState = GameStates.END;
      }
      break;
    case GameStates.END:
      textAlign(CENTER, CENTER);
      text("Game Over!",width/2,height/2-20);
      text("Score: " + score, width/2, height/2);
      if (score > highScore)
        highScore = score;
      text("High Score: " + highScore, width/2, height/2+20);
      break;
  }
}

function keyPressed() {
  switch(gameState) {
    case GameStates.START:
      if (keyCode === ENTER) {
        gameState = GameStates.PLAY;
      }
      break;
    case GameStates.PLAY:
      break;
    case GameStates.END:
      break;
  }
}