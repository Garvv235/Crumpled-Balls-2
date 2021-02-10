const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin2Image =loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ball = new Paperball(100,600,70);

	dustbin = new Dustbin(550,620,20,100);
	dustbin2= new Dustbin(610,660,100,20);
	dustbin2.addImage("dustbin2Image")
	dustbin3= new Dustbin(670,620,20,100);
	
	ground0 = new Ground(400,680,800,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground0.display();
  ball.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
    drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	}
	Engine.update(engine)
  }

