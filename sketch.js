
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1=new Dustbin(600,635,width/2,200,20)
    side2=new Dustbin(width/2,height,20,100)
    side3=new Dustbin(width/2,height,20,100)

	ground=new Ground(400,640,800,10)
	Engine.run(engine);
  paper=new Paper(600,635,1)
	

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


  side1.display();
  side2.display();
  side3.display();
  ground.display();
  paper.display();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



