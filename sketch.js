
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,groundObject	
var world;
var paperObj


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paperobj= new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 

  groundObject.display();
  dustbinObj.display();
  paperobj.display();
  
  drawSprites()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body.position, {x: 15, y: -15})
	}
}