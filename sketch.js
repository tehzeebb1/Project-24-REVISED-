
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var bottem, ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	ground1 = new Ground(width/2, 670, width, 20);
	 ball = new Paper(200, 450, 40);
	 dustbinObj=new Dustbin(1200,650);
	
	 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  dustbinObj.display();
  
ground1.display();
ball.display();

  drawSprites();
 
}

function keyPressed()
{
if (keyCode === UP_ARROW)
{
	console.log("Hi I am here")
	Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:-900});
}
}

