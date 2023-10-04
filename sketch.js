// let posX, posY, diam, rad;
// let esp = 50;
// let margen = 40;
// let piso;
// let velY = 0;
// let acel = 0.98;
let pelota1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pelota1 = new pelotarebota(windowWidth / 2, windowHeight * 0.2);

  // posX = windowWidth / 2;
  // posY = windowHeight * 0.2;
  // rectMode(CENTER);
  // // //frameRate(35);
  // diam = random(10, 50);
  // rad = diam / 2;
  // piso = windowHeight - margen - esp / 2;
}

function draw() {
  // background(0, 220, 210, 50);
  // update();
  // noStroke();
  //posY += velY;
  //if (posY > piso - rad) {
  //  print("se choco");
  //  velY *= -1;
  // }
  //if (posY < 0 + rad) {
  //  print("arriba");
  //  velY *= -1;
  // }
  // fill(255);
  // circle(posX, posY, diam);
  // fill(255, 0, 0);
  // rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);
  pelota1.update();
  pelota1.display();
}

function update() {
  // velY += acel;
  // posY += velY;
  // if (posY >= piso - rad) {
  //   //posY = piso - rad;
  //   //print("se choco");
  //   velY *= -1;
  //   posY += velY;
  // }
}

class pelotarebota {
  constructor(_posX, _posY) {
    this.posX = _posX;
    this.posY = _posY;
    this.diam = random(10, 50);
    this.rad = this.diam / 2;
    this.esp = 50;
    this.margen = 40;
    this.piso = windowHeight - this.margen - this.esp / 2;
    this.velY = 0;
    this.acel = 0.98;
  }

  update() {
    this.velY += this.acel;
    this.posY += this.velY;
    if (this.posY >= this.piso - this.rad) {
      this.posY = this.piso - this.rad;
      this.velY *= -1;
    }
  }

  display() {
    background(0, 220, 210, 50);
    noStroke();
    rectMode(CENTER);

    fill(255);
    circle(this.posX, this.posY, this.diam);
    fill(255, 0, 0);
    rect(windowWidth / 2, windowHeight - this.margen, windowWidth, this.esp);
  }
}
