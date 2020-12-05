
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin=new Dustbin(600,300)
ground=new Ground(400,330,800,20)
paper=new Paper(200,200,25)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
}



function keyPressed() {
	 if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-80}); 
	} 
}