//
//
//
//
//
//
//

var walker;

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(500, 500);
  walker = new Walker();
}

function draw() {
  background("#050505");

  walker.update();
  walker.display();
}

function Walker() {
  this.pos = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.acc = createVector(0.1, 0.1);

  this.display = walkerDisplay;
  this.update = updateFun;

  function walkerDisplay() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }

  function updateFun() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
}
