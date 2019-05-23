let img;
var slider;
let value = 0;

var slider2;
let value2 = 0;

var slider3;
let value3 = 0;

let value1 = 0;

let val = 0;
let val2 = 0;
let val3 = 0;



function setup(){
	createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 255);
  slider.position(20, 10);
  slider.style('width', '200px');


  slider2 = createSlider(0, 255, 255);
  slider2.position(20, 25);
  slider2.style('width', '200px');


  slider3 = createSlider(0, 255, 255);
  slider3.position(20, 40);
  slider3.style('width', '200px');



  img = loadImage('final.png');

}




 
 

function draw() {
  //var val = slider.value();
  //var val2 = slider2.value();
  //var val3 = slider3.value();
  background(val,val2,val3);

  value  = slider.value();
  value2  = slider2.value();
  value3 = slider3.value ();

  fill(value);


  image(img, 0, 0);
}





function keyPressed() {
   if (keyCode === LEFT_ARROW) {
     val =255; 
     val2 =255;
     val3 =255;
     console.log("test") //4 key


   } else if (keyCode === RIGHT_ARROW) {
     val =0;
     val3 =0;
     val2 =0;
   }
 }

 function mouseReleased(){
   val = slider.value();
   val2 = slider2.value();
   val3 = slider3.value();

 }