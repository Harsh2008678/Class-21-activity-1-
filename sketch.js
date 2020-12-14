var fixedRect, movingRect;
var car;
var wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,100,50,50);
  car.shapeColor = "white";
  car.debug = true;

  wall = createSprite(700,100,20,100);
  wall.shapeColor = "yellow";
  wall.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,wall))
{
 movingRect.shapeColor = "red";
 wall.shapeColor = "red";
 //text("touching!!!",100,100);

}
else{
 movingRect.shapeColor = "green";
 wall.shapeColor = "yellow";

}
if(isTouching(movingRect,car))
{
 movingRect.shapeColor = "red";
 car.shapeColor = "red";
 //text("touching!!!",100,100);

}
else{
 movingRect.shapeColor = "green";
 car.shapeColor = "green";

}
  drawSprites();
}
// passing arguments and parameters
function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2) {
//For adding BOOLEAN Values.
  return true;
}
else {
// movingRect.shapeColor = "green";
// fixedRect.shapeColor = "green";
 return false;
}
  
}


