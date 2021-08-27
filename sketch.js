// to assign all the varibles
var backgroundImg;
var sleep;
var brush;
var gym;
var eat;
var bath;
var move;


function preload(){
backgroundImg = loadImage("images/images/iss.png");
sleep = loadImage("images/images/sleep.png");
brush = loadAnimation("images/images/brush.png");
gym = loadAnimation("images/images/gym1.png","images/images/gym2.png","images/images/gym11.png","images/images/gym12.png");
eat = loadAnimation("images/images/eat1.png","images/images/eat2.png","images/images/drink1.png","images/images/drink2.png");
bath = loadAnimation("images/images/bath1.png","images/images/bath2.png");
move = loadAnimation("images/images/move.png","images/images/move1.png","images/images/move1.png");
}

function setup() {
  createCanvas(800,400);

  //to create the astronat
 astronat = createSprite(400, 200, 50, 50);
 astronat.addImage("sleeping",sleep);
 astronat.scale = 0.1;
}

function draw() {
  background(backgroundImg);
 
  //to create edges
  var edges = createEdgeSprites();
  astronat.bounceOff(edges);
  // text(mouseX+","+mouseY,mouseX,mouseY);

  //to assign all the texts
   textSize(15);
   fill("white");
   text("INSTRUCTIONS:",20,30);
   text("Up arrow = Brushing",20,60);
   text("Down arrow = Gymming",20,90);
   text("left arrow = Eating",20,120);
   text("Right arrow = Bathing",20,150);
   text("m key = Moving",20,180);

  drawSprites();

  //to add all the key functions
  if(keyDown("UP_ARROW")){
   astronat.addAnimation("brushing",brush);
   astronat.changeAnimation("brushing");
   astronat.y = 250;
   astronat.velocityX = 0;
   astronat.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronat.addAnimation("gymming",gym);
    astronat.changeAnimation("gymming");
    astronat.y = 250;
    astronat.velocityX = 0;
    astronat.velocityY = 0;
   }

   if(keyDown("LEFT_ARROW")){
    astronat.addAnimation("eating",eat);
    astronat.changeAnimation("eating");
    astronat.y = 250;
    astronat.velocityX = 0;
    astronat.velocityY = 0;
   }

   if(keyDown("RIGHT_ARROW")){
    astronat.addAnimation("bathing",bath);
    astronat.changeAnimation("bathing");
    astronat.y = 250;
    astronat.velocityX = 0;
    astronat.velocityY = 0;
   }

   if(keyDown("m")){
    astronat.addAnimation("moving",move);
    astronat.changeAnimation("moving");
    astronat.velocityX = 1;
    astronat.velocityY = 1;
   }

}
