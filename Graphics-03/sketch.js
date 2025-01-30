let mike;
let rot = 0;
let score = 0;
let time = 100;

function preload() {
  mike = loadImage('media/mike.png');
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  angleMode(DEGREES);
  textSize(30);
}

function draw() {
  background(220);

  //translate(200,0);
  text("Score: " + score, 10, 30);


  push();
  translate(200,200);
  scale(0.25);
  rotate(rot);
  image(mike,0,0);
  pop();

  text("Time: " + time,275,30);

  rot += 5; 

  if (rot >= 360)
    rot -= 360;

  if (frameCount % 60 === 0) {
    if (time === 0) {
      noLoop();
    }
    time--;
  }
  
}

function keyTyped() {
  if (key === ' ') {
    if (rot >= 350 || rot <= 10) {
      score++;
    } else {
      score--;
    }
  }
}
