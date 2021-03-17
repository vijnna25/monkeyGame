
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var PLAY = 1
var END = 0
var gameState= PLAY
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
  
  
}



function setup() {
   createCanvas(450,400);


  monkey = createSprite(50,350,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(200,400,500,30);
  ground.shapeColor = "purple"
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  background("blue");
  
  fill("red");
  textSize(30)
  text("score:" + score,100,50);

  
  if(gameState===PLAY){
    if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -10;   
   }
  monkey.velocityY = monkey.velocityY + 0.5;
    
    if(FoodGroup.isTouching(monkey)){
      score = score+1
    }
    
    
    spawnObstacles();
    
   spawnFood();
    
    if(obstacleGroup.isTouching(monkey)){
      gameState = END
    }}
  
  else if(gameState===END){
    ground.velocityX = 0;
    monkey.velocityY = 0; 
  }

   monkey.collide(ground);
  

  
  
  
  drawSprites();
  
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,370,10,40);
   obstacle.scale = 0.1
   obstacle.velocityX = -6;
   
   obstacle.addImage(obstacleImage);
   
   obstacleGroup.add(obstacle);
 }}

function spawnFood(){
  if(frameCount % 60===0){
    banana = createSprite(55,50,30,20);
    banana.addImage(bananaImage);
    
    banana.scale = 0.1; 
    banana.velocityY = 3;
    
    banana.y = Math.round(random(50,350));
    
    FoodGroup.add(banana)
  }}









  