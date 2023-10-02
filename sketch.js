let posX, posY, diam, rad;
let esp = 50;
let margen = 40;
let piso;
let velY = 0;
let acel = 0.98;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight * 0.2;
  rectMode(CENTER);
  //frameRate(35);
  diam = random(10, 50);
  rad = diam / 2;
  piso = windowHeight - margen - esp / 2;
}

function draw() {
  background(0, 220, 210, 50);

  update();

  noStroke();

  //posY += velY;

  //if (posY > piso - rad) {
  //  print("se choco");
  //  velY *= -1;
  // }
  //if (posY < 0 + rad) {
  //  print("arriba");
  //  velY *= -1;
  // }
  fill(255);
  circle(posX, posY, diam);

  fill(255, 0, 0);
  rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);
}

function update() {
  velY += acel;
  posY += velY;

  if (posY >= piso - rad) {
    //posY = piso - rad;
    //print("se choco");
    velY *= -1;
    posY += velY;
  }
}
