const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,groundImg;
var snow,snowimg;
var ice;
var runnerImg;
var runner;
var maxSnow = 10;

function preload(){
  bg=loadImage("snow2.jpg");
  groundImg=loadImage("snow3.jpg");
  snowimg=loadImage("snow.jpg");
  runnerImg=loadAnimation("01_Santa_Walking.jpg","02_Santa_Walking.jpg","03_Santa_Walking.jpg","04_Santa_Walking.jpg","05_Santa_Walking.jpg","06_Santa_Walking.jpg","07_Santa_Walking.jpg");
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;


  
runner=createSprite(650,690);
runner.addAnimation("running",runnerImg);

ground=createSprite(650,670);
ground.addImage(groundImg);
//ground.scale=1;
//ground.velocityX=-10;



runner.scale=1.0;
runner.velocityX=2;


if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  
  }


}

function draw() {
  background(bg);  
  
  runner.collide(ground);

  ice(new Snow(random(0,1350), random(0,50)));
}
  

  
  

  if(keyCode==32 && runner.y >= 100) {
    runner.velocityY = -12;
}

//add gravity
runner.velocityY = runner.velocityY + 0.8
       
    


ground.display();

  
  drawSprites();

}
