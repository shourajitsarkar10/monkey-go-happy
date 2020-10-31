var suvivaltime=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600 , 600)
monkey=createSprite(80 , 315 , 20 , 20)
  monkey.addAnimation("moving" , monkey_running)
monkey.scale=0.1
ground=createSprite(400 , 350 , 900 , 10)
ground.velocityX=-4
ground.x=ground.width/2
console.log(ground.x)
banana=createSprite(250 ,200)
banana.addImage(bananaImage)
  banana.scale=0.1
obstacle=createSprite(250 ,326)
obstacle.addImage(obstaceImage)
  obstacle.scale=0.1

}


function draw() {
background("darkorange")
  drawSprites();
  if(keyDown("space")&&monkey.y>220){
    monkey.velocityY=-5
  }
  
  
  if(ground.x<200){
    ground.x=ground.width/2
  }
  monkey.velocityY=monkey.velocityY+0.4
monkey.collide(ground)

stroke("white");
textsize=(20);  
fill("white");
text("Score:" +score , 400 , 50);

stroke("black");
  textSize(25);
fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:" + survivalTime, 100 , 50);
  
  
  


}






