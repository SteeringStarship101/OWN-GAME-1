var player; 
var enemy;

var gamestate = 1;
var health = 100;
var score = 0;
var invisibleWall1;
var invisibleWall2;
var invisibleWall3;
var invisibleWall4;

var Enemygroup;

var EnemyImg1;
var EnemyImg2;
var EnemyImg3;

function preload()
{
EnemyImg1 = loadImage("Enemy1.png")
EnemyImg2 = loadImage("Enemy2.PNG")
EnemyImg3 = loadImage("Enemy3.PNG")
}
function setup() {
  createCanvas(displayWidth,displayHeight-110);
  Enemygroup = new Group();
  player = createSprite(400,300,50,50);
  player.shapeColor = "aqua";
  
 

 invisibleWall1 = createSprite(10,5,10,5000)
 invisibleWall1.visible = false;

 invisibleWall2 = createSprite(10,5,5000,10)
 invisibleWall2.visible = false;
 
 invisibleWall3 = createSprite(1250,5,10,5000)
 invisibleWall3.visible = false;
 
 invisibleWall4 = createSprite(1250,5,5000,10)
 invisibleWall4.visible = false;
}

function draw() {
  background("Black");  

 Enemygroup.bounceOff(invisibleWall1);
 Enemygroup.bounceOff(invisibleWall2);
 Enemygroup.bounceOff(invisibleWall3);
 Enemygroup.bounceOff(invisibleWall4);
 player.collide(invisibleWall1);
 player.collide(invisibleWall2);
 player.collide(invisibleWall3);
 player.collide(invisibleWall4);
 console.log(gamestate);
  if(gamestate===1)
  {
    if(keyDown("up")||keyDown("w"))
  {
    player.y = player.y-10;
  }
  if(keyDown("down")||keyDown("s"))
  {
    player.y = player.y+10;
  }
  if(keyDown("left")||keyDown("a"))
  {
    player.x = player.x-10;
  }
  if(keyDown("right")||keyDown("s"))
  {
    player.x = player.x+10;
  }
  if(Enemygroup.isTouching(player)&&keyDown("space"))
  {
    Enemygroup.destroyEach();
  }
  if(Enemygroup.isTouching(player))
  {
    Enemygroup.destroyEach();
    health = health-10;
  }
}
if(frameCount%260===0){
  spawnEnemy();
  score = score+100;
}
}
 if(score>1000){
  gamestate = 2 
  if(frameCount%200===0){
    spawnEnemy();
    score = score+100;
  }
  if(gamestate==2)
  {
    if(keyDown("up")||keyDown("w"))
  {
    player.y = player.y-10;
  }
  if(keyDown("down")||keyDown("s"))
  {
    player.y = player.y+10;
  }
  if(keyDown("left")||keyDown("a"))
  {
    player.x = player.x-10;
  }
  if(keyDown("right")||keyDown("s"))
  {
    player.x = player.x+10;
  }
  if(Enemygroup.isTouching(player)&&keyDown("space"))
  {
    Enemygroup.destroyEach();
    score = score+1;
  }
  if(Enemygroup.isTouching(player))
  {
    Enemygroup.destroyEach();
    health = health-10;
  }
   }
  





 drawSprites();
 textSize(20);
 fill("white");
 text("Health:"+health,1050,50)
 text("Score:"+score,500,50);
 
}

function spawnEnemy(){
  
  
    enemy = createSprite(500,500,50,50);
    enemy.x = Math.round(random(100,500));
    enemy.y = Math.round(random(50,250));
    enemy.velocityX = 10;
    Enemygroup.add(enemy);
    enemy.scale = 0.5;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: enemy.addImage(EnemyImg1);
              break;
      case 2: enemy.addImage(EnemyImg2);
              break;
      case 3: enemy.addImage(EnemyImg3);
              break;
      default: break;
    }
  
 
}


