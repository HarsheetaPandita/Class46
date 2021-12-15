var mario, marioImg, coins, coinsImg;
var bg_img, bg;
var score;
var coinsGroup;

function preload()
{
  marioImg = loadImage("mario1.png");
  //bg_img = loadImage("background.jpg");
  coinsImg = loadImage("coin.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  mario = createSprite(600,500,30,30);
  mario.addImage(marioImg);
  mario.scale = 0.1;

  coinsGroup = createGroup();

  score = 0;
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  //image(bg_img,0,0);
  //bg_img.scale = 0.3;
  push()
  fill(255);
  //text("Vertical Velocity: "+round(vy),800,75);
  text("Score: "+ score, 500,50);
  pop();


  

  if(keyDown(UP_ARROW))
  {
    mario.velocityY = -2;
  }

  if(keyDown(RIGHT_ARROW))
  {
    mario.velocityX = 2;
  }

  if(keyDown(LEFT_ARROW))
  {
    mario.velocityX = -2;
  }
  if(keyDown(DOWN_ARROW))
  {
    mario.velocityY = 2;
  }

  if(mario.isTouching(coins))
  {
    score = score+1;
  }


  spwanCoin();

  coinsGroup.setLifetimeEach(-1);
  coinsGroup.setVelocityXEach(0);

  drawSprites();
}

function spwanCoin()
{
  if (frameCount % 60 === 0) {
    var coins = createSprite(200,500,40,10);
    coins.y = Math.round(random(80,120));
    coins.addImage(coinsImg);
    coins.scale = 0.5;
    coins.velocityX = -3;
    
     //assign lifetime to the variable
    coins.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    coinsGroup.add(coinsImg);
  }
}
