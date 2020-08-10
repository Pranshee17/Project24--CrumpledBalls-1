
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(50,50);
	edge1 = new Dustbin(500,400,70,PI/2);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  paper.display();
  edge1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:85});
	}
}


