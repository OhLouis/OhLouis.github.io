let img; // Declare variable 'img'.
let img2; // Declare variable 'img'.
var col= 300;
var c= 50;
var d= 30;
function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('images/nervous_pepe.png'); // Load the PEPE
  img2 = loadImage('images/rare_nervous_pepe.png'); // Load the RARE PEPE
}
function draw() {

//background color should change with mouseX
  col,c,d = mouseX/3;
background (col,c,d);

if(mouseIsPressed){
image(img2, 0,130);
}
else {

  // Displays the image at its actual size at point (0,10)
  image(img, 0, 130);
}
  //left eye
  push();
  fill(0);
  //pupils should move side to side
  ellipse(map(mouseX,0, width, 200, 300),380, 30, 30);
  //ellipse(300, 260, 30, 30);
  pop();

  //right eye
  push();
  fill(0);
  //pupils should move side to side
  ellipse(map(mouseX, 0, width, 400, 498),380, 30, 30);
  //ellipse(500, 260, 30, 30);
  pop();
}
