
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var object1,object2,object3;
var piso;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
var piso1_options={
	isStatic:true
}
piso=Bodies.rectangle(600,580,1200,2,piso1_options);
World.add(world,piso);
	
     var object1_options={
		 restitution:0.5,
		 friction:0.02,
		 frictionAir:0
	 }
	 var object2_options={
		restitution:0.7,
		 friction:0.01,
		 frictionAir:0.1
	 }
var object3_options={
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}
	//Crie os Corpos Aqui.
   object1=Bodies.circle(220,10,10,object1_options);
   World.add(world,object1);
    object2=Bodies.rectangle(110,50,10,10,object2_options);
	World.add(world,object2);
	object3=Bodies.rectangle(350,50,10,10,object3_options);
	World.add(world,object3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(object1.position.x,object1.position.y,10);
  rect(object2.position.x,object2.position.y,10,10);
  rect(object3.position.x,object3.position.y,10,10);
  rect(piso.position.x,piso.position.y,1200,2)
    drawSprites();
 
}



