let posX, posY, diam, rad;
let esp = 34;
let margen = 50;
let piso;
let velY = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 100;
  rectMode(CENTER);
  frameRate(25);
  diam = 50;
  rad = diam / 2;
  piso = windowHeight - margen - esp / 2;
}

function draw() {
  background(0, 220, 210, 50);
  noStroke();

  posY += velY;

  if (posY > piso - rad) {
    print("se choco");
    velY *= -1;
  }
  if (posY < 0 + rad) {
    print("arriba");
    velY *= -1;
  }
  fill(255);
  circle(posX, posY, diam);

  fill(255, 0, 0);
  rect(windowWidth / 2, windowHeight - 50, windowWidth * 0.8, esp);
}
