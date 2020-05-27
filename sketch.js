var fixedRect, movingRect;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  object1=createSprite(380,100,50,50);
  object2=createSprite(200,200,50,50);
  object1.shapeColor="green";
  object2.shapeColor="green";
  object1.debug=true;
  object2.debug=true;

}

function draw() {
  background(0,0,0); 
 movingRect.x=mouseX; 
 movingRect.y=mouseY;   
if(isTouching(movingRect,object2)){
  movingRect.shapeColor="red";
  object2.shapeColor="red";

}
else{
  movingRect.shapeColor="green";
  object2.shapeColor="green";
}
  
  drawSprites();
}
