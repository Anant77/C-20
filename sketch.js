var mRect;
var fRect;

function setup() {
  createCanvas(800,400);
  fRect=createSprite(400, 200, 50, 50);
  fRect.shapeColor="green";

  mRect=createSprite(500, 200, 50, 70);
  mRect.shapeColor="green";
}

function draw() {
  background(255,255,255);
  
  mRect.x=World.mouseX;
  mRect.y=World.mouseY;

if(mRect.x-fRect.x<mRect.width/2+fRect.width/2 && 
   fRect.x-mRect.x<mRect.width/2+fRect.width/2 &&
   mRect.y-fRect.y<mRect.height/2+fRect.height/2 && 
   fRect.y-mRect.y<mRect.height/2+fRect.height/2){
  fRect.shapeColor="red";
  mRect.shapeColor="red";
}
else{
  fRect.shapeColor="green";
  mRect.shapeColor="green";
}
  drawSprites();
}