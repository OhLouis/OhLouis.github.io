import processing.serial.*;

Serial myPort;
int potState;
int buttonState;
int buttonState0;
int[] inputVars = {0, 0,0,0}; //make array to be populated from serial (note number of variables)



int rad = 60;        // Width of the shape
float xpos, ypos;    // Starting position of shape
float pady = 0;
float pady1 = 0;
int padx = 1150;
int padx1 = 50;
float xspeed = 4;  // Speed of the shape
float yspeed = 4;  // Speed of the shape

int xdirection = 1;  // Left or Right
int ydirection = 1;  // Top to Bottom

color c = color(0);
float x = 0;
float y = 100;
float speed = 1;
int winSize = 750;

int leftscore = 0;
int rightscore = 0;
void setup() {
  size(1200, 750);
  println(Serial.list()); //print serial devices (remember to count from 0)
  myPort = new Serial(this, Serial.list()[5], 9600); //make sure the baudrate matches arduino
  myPort.bufferUntil('\n'); // don't generate a serialEvent() unless you get a newline character


  frameRate(54);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width/2;
  ypos = height/2;
}
void draw() {
  background(0);
  
    fill(255);
  textSize(50);
  text(leftscore, 530, 45);
  text(rightscore, 650, 45);


if(inputVars[2] == 1){
  // set score to 0
  // start ball in middle
  leftscore = 0;
  rightscore = 0;
  xpos = 600;
  ypos = 400;
  xspeed = 4;  
  yspeed = 4;
}

if(inputVars[3] == 1){
  // set score to 0
  // start ball in middle
  leftscore = 0;
  rightscore = 0;
  xpos = 600;
  ypos = 400;
  xspeed = 4;  
  yspeed = 4;
}
  //left stick (350 is center y)
  pady1 = map(inputVars[0], 0, 1023, 0, 675);
  rect(padx1, pady1, 10, 100);
  

  //x,y, width, length
  //border mid
  rect (600, 0, 3, 1000);


  //right stick   rect( 750, 350, 10, 100);
  pady = map(inputVars[1], 0, 1023, 0, 750 );
  rect( padx, pady, 10, 100);


      //ellipse( (winSize/2), 400, 20, 20);


      // Update the position of the shape
      xpos = xpos + ( xspeed * xdirection );
      ypos = ypos + ( yspeed * ydirection );

      //println(ypos);
      //println(pady);


      if (xpos >= padx - 10) {
        if (ypos<=(pady+100) && ypos>= pady) {
          xdirection = xdirection*-1;
          xspeed++;
          yspeed++;
          println("in if");
        }
      }
      
     
      if (xpos <= padx1 + 25) {
        if (ypos<=(pady1+100) && ypos>= pady1) {
          xdirection = xdirection*-1;
          xspeed++;
          yspeed++;
          println("in if");
        }
        
      }
      // Test to see if the shape exceeds the boundaries of the screen
      // If it does, reverse its direction by multiplying by -1
      //if (xpos > width-rad  xpos < rad) {
      //  xdirection *= -1;
      //}
      if (ypos > height-rad || ypos < rad) {
        ydirection *= -1;
      }

      ellipse(xpos, ypos, 15, 15);
      if (xpos > 1200 ) {
        xpos = (600);
        ypos = 400;
         leftscore++;
         xspeed =4;
         yspeed =4;
      } else {
        //ydirection *= -1;
      }

      if (xpos < 1) {
        xpos = (600);
        ypos = 400;
       rightscore++;
       xspeed =4;
       yspeed =4;
      }
        }


  void serialEvent (Serial myPort) {
    String inString = myPort.readStringUntil('\n'); //read until new line (Serial.println on Arduino)
    if (inString != null) {
      inString = trim(inString); // trim off whitespace
      //println(inString);
      inputVars = int(split(inString, '&')); // break string into an array and change strings to ints
      //pady = inputVars;
    }
  }
