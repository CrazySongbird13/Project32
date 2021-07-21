const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25, block26, block27, block28, block29, block30;
var groundObject, ball;
var stand1, stand2;
var launch;
var lImage, dImage;
var background;
var bg;

function preload() {
	lImage = loadImage("Pasted Graphic.png");
	dImage = loadImage("Pasted Graphic 1.png");
}
function setup() {
	background(bg);
	createCanvas(2000, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	ball = new BALL(500, 300, 110);
	launch = new launcher(ball.body, {x: 500, y:300});
	groundObject=new ground(width/2,600,width,20);
	stand1 = new ground(1200, 500, 600, 20);
    block1 = new block(1200, 50, 100, 100);
	block3 = new block(1200, 50, 100, 100);
	block4 = new block(1200, 50, 100, 100);
	block6 = new block(1100, 50, 100, 100);
	block7 = new block(1000, 50, 100, 100);
	block8 = new block(1300, 50, 100, 100);
	block9 = new block(1400, 50, 100, 100);
	block11 = new block(1300, 50, 100, 100);
	block13 = new block(1100, 50, 100, 100);

	stand2 = new ground(1700, 200, 400, 20);
	block14 = new block(1700, 50, 50, 50);
	block15 = new block(1700, 50, 50, 50);
	block16 = new block(1650, 50, 50, 50);
	block17 = new block(1750, 50, 50, 50);

	World.add(world, stand1);
	World.add(world, stand2);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 ball.display();
 block1.display();
 block3.display();
 block4.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block11.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 stand1.display();
 stand2.display();

 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});
  }
  function mouseReleased() {
	launch.fly();
  }
function keyPressed() {
	if (keyCode === 32) {
		launch.attach(this.ball)
	}
}
async function getBG() {
	var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
	if (hour >= 06 && hour <= 18){
		bg = "lImage";
	} else {
		bg = "dImage";
	}
}