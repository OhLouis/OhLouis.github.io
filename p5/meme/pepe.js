let img; // Declare variable 'img'.
var col= 300;
var c= 50;
var d= 30;
function setup() {
  createCanvas(1000, 625);
  img = loadImage('images/nervous_pepe.png'); // Load the PEPE
}
function draw() {

//background color should change with mouseX
  col,c,d = mouseX/3;
background (col,c,d);
  // Displays the image at its actual size at point (0,10)
  image(img, 0, 10);

  //left eye
  push();
  fill(0);
  //pupils should move side to side
  ellipse(map(mouseX,0, width, 200, 300),260, 30, 30);
  //ellipse(300, 260, 30, 30);
  pop();

  //right eye
  push();
  fill(0);
  //pupils should move side to side
  ellipse(map(mouseX, 0, width, 400, 498),260, 30, 30);
  //ellipse(500, 260, 30, 30);
  pop();
}
