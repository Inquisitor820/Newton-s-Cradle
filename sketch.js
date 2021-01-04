
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() 
{
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

    roof_ = new roof(width/2,010,width,20);
    
	bobObject1 = new bob(200,470,100)
	bobObject2 = new bob(300,470,100)
	bobObject3 = new bob(400,470,100)
	bobObject4 = new bob(500,470,100)
	bobObject5 = new bob(600,470,100)

  rope1= new rope(bobObject1.body,roof_.body,-100*2,0);
  rope2= new rope(bobObject2.body,roof_.body,-50*2,0);
  rope3= new rope(bobObject3.body,roof_.body,-0*2,0);
  rope4= new rope(bobObject4.body,roof_.body,50*2,0);
  rope5= new rope(bobObject5.body,roof_.body,100*2,0);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0, 128, 128);
  Engine.update(engine);
  
  roof_.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

   drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:-1000}); } 
} 



