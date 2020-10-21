const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;
function setup() {
 var canvas= createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 var ball_options={
   restitution:0.7
 }
ball=Bodies.circle(250,100,40,ball_options);
World.add(world,ball);
var ground_options={
  isStatic:true
}
 ground=Bodies.rectangle(200,390,400,10,ground_options);

 World.add(world,ground);

  
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,40);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,10);
  drawSprites();
}