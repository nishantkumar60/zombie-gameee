var bg,forestimg
var playerimg,player
var zombie1,zombie2 
var bulletimg
var zombieGroup,bulletGroup

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2,windowWidth,windowHeight);
  bg.addImage("z",forestimg)
  bg.scale=1.5
  player=createSprite(150,height-150)
  player.addImage(playerimg)
  player.scale=0.9
  zombieGroup=new Group();
  bulletGroup=new Group();

}
function preload(){
  forestimg= loadImage("forest.png")
  playerimg=loadImage("player.png")
  zombie1=loadAnimation("z1/z1.png","z1/z2.png","z1/z3.png","z1/z4.png","z1/z5.png","z1/z6.png","z1/z7.png")
  zombie2=loadAnimation("z2/z1.png","z2/z2.png","z2/z3.png","z2/z4.png","z2/z5.png")
  bulletimg=loadImage("bullet.png")



}

function draw() {
  background("red");  
  bg.velocityX=-2
  
  if (bg.x<width/2){
    bg.x=bg.width/2
  }
  bulletGroup.isTouching(zombieGroup,destroyzombie);
  spawnZombie();
  drawSprites();
  
}
function destroyzombie(bullet,zombie){
  zombie.remove();
  bullet.remove();
}
function keyPressed(){
  if(keyCode==32){
    var bullet=createSprite(player.x+130,player.y+40)
    bullet.addImage(bulletimg)
    bullet.scale=0.1
    bullet.velocityX=3;
    bulletGroup.add(bullet);
    
  }
}

function spawnZombie(){
  if(frameCount%200==0){
    var zombie=createSprite(width,height-150);
    zombie.velocityX=-3;
    var rand=random(0,2);
    console.log(rand)
    if(rand<1){
      zombie.addAnimation("z1",zombie1)
      zombie.scale=0.8

    }
    else{
      zombie.addAnimation("z2",zombie2)
      zombie.scale=0.6

    }
    zombie.setCollider("rectangle",0,0,50,200)
    zombie.debug=true;
    zombieGroup.add(zombie);
    
    
  }

}