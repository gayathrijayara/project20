function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  car.shapecolor="red";
  car.velocityX=speed;
  wall.shapecolor="orange";
  speed=random(55,90);
 weight=random(400,1500)
  }
var wall;
var car;
var speed;
var weight;
var deformation;
function draw() {
  background(255,255,255);  
 if(car.isTouching(wall)){
 deformation=0.5*weight*speed*speed/22500;
 }
 if(deformation<100){
   car.shapecolor="green";
 }
 if(deformation<180&&deformation>100){
   car.shapecolor="yellow";
 }
 if(deformation>180){
   car.shapecolor="red";
 }
  drawSprites();

}