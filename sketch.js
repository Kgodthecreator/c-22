const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var object,ball,ball2;



function setup(){
var canvas = createCanvas(500,500);
engine=Engine.create();
world=engine.world;
var object_options={
 isStatic:true
}


object=Bodies.rectangle(250,480,500,20,object_options);
World.add(world,object);

var ball_options={
    restitution:3
}
ball=Bodies.circle(250,250,20,ball_options);
World.add(world,ball);

var ball2_options={
    restitution:3
}
ball2=Bodies.circle(200,200,20,ball2_options);
World.add(world,ball2);






}
 function draw(){
            background("blue");

            Engine.update(engine);
fill("red");
rectMode(CENTER);
rect(object.position.x, object.position.y,500,20);
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y,20);

ellipseMode(RADIUS);
ellipse(ball2.position.x, ball2.position.y,20);



 }