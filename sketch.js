
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobX,bobY

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER)
	//Create the Bodies Here.
 bobX=width/2
 bobY=height/4+500
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	roof  = new Roof(width/2,height/4,width/7,20);
    
    bob1 = new Bob(bobX-40*2,bobY,40);

	
	bob2 = new Bob(bobX-40,bobY,40);


	bob3 = new Bob(bobX,bobY,40);


	bob4 = new Bob(bobX+40,bobY,40);


	bob5 = new Bob(bobX+40*2,bobY,40);
	


	rope1 = new Rope(bob1.body,roof.body,-80,0);
	
	rope2 = new Rope(bob2.body,roof.body,-40,0);

	rope3 = new Rope(bob3.body,roof.body,0,0);
	

	rope4 = new Rope(bob4.body,roof.body,40,0);


	rope5 = new Rope(bob5.body,roof.body,80,0);
	

  
}


function draw() {

  background(255);
  Engine.update(engine)
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


}
function keyPressed()
{
	if(keyCode===UP_ARROW)
	{Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})}
}
  



