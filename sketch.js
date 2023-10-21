let pelota1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pelota1 = new pelotarebota(windowWidth / 2, windowHeight * 0.2);
}

function draw() {
  pelota1.update();
  pelota1.display();
}

class pelotarebota {
  constructor(_posX, _posY) {
    this.posX = random(windowWidth * 0.1, windowWidth * 0.9);
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
