var canvas,engine,world,ground,object,heli,heli1,box1,pack1,box2,box3;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function preload(){

heli1=loadImage("helicopter.png")



}
function setup() {
canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;

box1=new box(200,370,200,20);
box2=new box(100,330,40,100);
box3= new box(300,330,40,100);
pack1=new pack(200,100);



var object_option={
    isStatic:true,
restitution:0.4
}
var ground_option={
isStatic:true
}

heli=createSprite(width/2,100,50,50);
heli.addImage(heli1);
heli.scale=0.7;




ground=Bodies.rectangle(200,390,400,20,ground_option);
World.add(world,ground);

object=Bodies.circle(200,100,20,object_option);
World.add(world,object);

}

function draw() {
background(0);

Engine.update(engine);




rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(object.position.x,object.position.y,20,20);


drawSprites();

box1.display();
box2.display();
box3.display();
pack1.display();







}
