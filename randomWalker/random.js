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
  createCanvas(720, 400);
  walker = new Walker();
}

function draw() {
  background("#050505");

  walker.walk();
  walker.display();
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);

  this.display = walkerDisplay;
  this.walk = walk;

  function walkerDisplay() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }

  function walk() {
    vel = createVector(random(-5, 5), random(-5, 5));
    pos = pos.add(this.vel);

    // this.x = this.pos.x + random(-3, 3);
    // this.y = this.pos.y + random(-3, 3);
  }
}
