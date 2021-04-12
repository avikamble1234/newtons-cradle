
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	bob1=new paper(200,450,20);
	bob2=new paper(200,480,20);
	bob3=new paper(200,510,20);
	bob4=new paper(200,540,20);
	bob5=new paper(200,570,20);
	groundObject=new ground(width/2,670,width,650);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  groundObject.display();
  drawSprites();
 
}



