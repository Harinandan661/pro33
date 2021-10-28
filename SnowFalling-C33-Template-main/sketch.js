var BGImage,BGI,boy,snowflake


function setup() {
  createCanvas(1600,650);
  BGI=createSprite(750,450,50,50)
  boy=createSprite(700, 350, 50, 50);
}
function preload() {
  BGImage=loadImage("snow1.jpg");
  oyi=loadImage("boy.png");
  snowi1=loadImage("snow4.webp")
  snowi2=loadImage("snow5.webp")
  
}

function draw() {
   if (keyDown("right")) {
    boy.x=boy.x+5
   }
   if (keyDown("left")) {
    boy.x=boy.x-5
   }

  
  BGI.addImage(BGImage)
  BGI.scale=3.5
  boy.addImage(oyi)
  boy.scale=1.5 
  spawnSnow()
  drawSprites();
}
function spawnSnow() {

  //snowflake.velocityY=5;

  if (frameCount %300 === 0){
    var snowflake = createSprite(600, 165, 10, 40);
    snowflake.scale=0.5;
    snowflake.velocityY=2;
    snowflake.lifetime=275
    
   var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        snowflake.addImage(snowi1);
        break;
      case 2:
        snowflake.addImage(snowi2);
        break;
      default:
        break;
       }
    }
    
  }     
