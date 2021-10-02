var sea;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(800,400);

  sea = createSprite(200,200,200,200)
  sea.addImage(seaImg);
  sea.velocityX = -2;
  
  ship = createSprite(100,100,20,20)
  ship.addImage(shipImg1);

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}


function draw() {
  
  background("blue");
 drawSprites();
}