
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var grnd;
var leftWall;
var rightWall;


function setup() {
	createCanvas(1600, 700);
    
	
	engine = Engine.create();
	world = engine.world;

	grnd= new Ground(width/2,670,width,20);
	leftWall= new Ground(1100,600,20,120);
	rightWall= new Ground(1350,600,20,120);
	
	

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}

	
	//Create the Bodies Here.
    ball = Bodies.circle(260,100,20,ball_options);
    World.add(world,ball);

    rectMode(CENTER);
    ellipseMode(RADIUS);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20);
  grnd.display();
  leftWall.display();
  rightWall.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:25,y:-25});
	}
}
/*
function hForce(){

	if(mouseClicked("m")){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
	}
}

function vForce(){

	if(mouseClicked("z")){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.1});
	}
}
*/