function setup() {
	createCanvas(1000, 600);  
}

function draw(){
	background("skyblue");

//hair
fill("red");
ellipse(width/2, height/2-100, 500, 400)

//head
stroke("black");
fill("white");
ellipse(width/2, height/2, 300, 300)

stroke("black");
fill("white");
ellipse(width/2-75, height/2, 50, 50)


fill("white");
ellipse(width/2+75, height/2, 50, 50)

fill("black");
ellipse(width/2+75, height/2, 30, 30)

fill("black");
ellipse(width/2-75, height/2, 30, 30)

stroke("white")
fill("white");
ellipse(width/2+80, height/2+10, 10, 10)

stroke("white")
fill("white");
ellipse(width/2-70, height/2+10, 10, 10)

//nose
stroke("black");
fill("red");
ellipse(width/2, height/2+40, 40, 40)

//mouth
strokeWeight(5);
line(450, 400, 550, 400);
line(475, 410, 525, 410);
}

