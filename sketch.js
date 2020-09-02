var back  ;
var monkey1 , monkey1Img;
var fruita , Img ;
var obstacle ;
var fruita ;
var ground ;
var score=0;

function preload(){ 
backImg=loadImage("jungle.jpg");
  monkey1Img=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  graniteImg=loadImage("stone.png");
  fruitImg=loadImage("banana.png");
}
    
function setup() {
  createCanvas(400, 400);
  back=createSprite(200,200,10,10);
  back.addImage(backImg);
  back.scale=1;
  back.velocityX=-5;
 
  monkey1 = createSprite(50,350,20,50);
  monkey1.addAnimation("monkey",monkey1Img);
  monkey1.scale=0.2;
  ground=createSprite(200,380,500,10);
   obstaclesGroup = new Group();
  fruitsGroup = new Group ();
  ground.visible=false;
   
}
function draw() {
  background(220);
   if (back.x  < 0) {
          back.x = back.width/2;
            }
  
  if (keyDown("space") ) {
    monkey1.velocityY=-10;
  }
  monkey1.velocityY = monkey1.velocityY + 0.8;
   monkey1.collide(ground);
  spawnObstacles();
  spawnFruit();
   
        textSize(20);
  fill("white");
  stroke("white");
  switch (score) {
    case 10: monkey1.sacle=0.12;
      break;
      case 20: monkey1.scale=0.14;
      break;
      case 30: monkey1.scale=0.16;
      break;
      case 40: monkey1.scale=0.18;
      break;
      default : break;
          }        
  
  
  if (fruitsGroup.isTouching(monkey1)) {
      score=score+2;
    fruitsGroup.destroyEach();
    monkey1.scale=0.3;
  }
  if (obstaclesGroup.isTouching(monkey1)) {
      monkey1.scale=0.1;
    obstaclesGroup.destroyEach();
      }
 
 
  drawSprites();
  text("Score : " + score , 300,50);
  
}


function spawnObstacles() {
  if(frameCount % 160 === 0) {
    var obstacle = createSprite(400,350,40,40);
   obstacle.addImage(graniteImg);
    obstacle.scale=0.13;          
    obstacle.velocityX = -4;
    obstacle.lifetime = 300;
    
     obstaclesGroup.add(obstacle);
  }
}
function spawnFruit() {
  if(frameCount % 90 === 0) {
    var fruita = createSprite(400,200,20,60);
    fruita.addImage(fruitImg);         
    fruita.scale=0.09;
    fruita.velocityX = -4;
       fruita.lifetime = 300;
    fruitsGroup.add(fruita);
  }
}