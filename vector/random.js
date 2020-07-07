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
  this.x = width / 2;
  this.y = height / 2;

  this.display = walkerDisplay;
  this.walk = walk;

  function walkerDisplay() {
    fill(255);
    ellipse(this.x, this.y, 20, 20);
  }

  function walk() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
}
