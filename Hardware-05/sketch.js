let port;
let connectButton;
let buttonStatus = "";
let backgroundColor;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  port = createSerial();
  connectButton = createButton("Connect to Arduino");
  connectButton.mousePressed(connectToSerial);

  backgroundColor = color(220);
}

function draw() {
  background(backgroundColor);

  let str = port.readUntil("\n");
  if (str !== "") {
    buttonStatus = str;
    let val = Number(str);
    if (!isNaN(val)) {
      // if (val === 1) {
      //   backgroundColor = color(255, 0, 0);
      // } else if (val === 0) {
      //   backgroundColor = color(220);
      // }
      let hue = map(val, 0, 132, 0, 360);
      backgroundColor = color(hue, 255, 255);
    }
  }
  text(buttonStatus, 20, 20);
}

function connectToSerial() {
  port.open('Arduino', 9600);
}
