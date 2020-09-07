var fixedRect
var movingRect
var gameObject1, gameObject2, gameObject3, gameObject4; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "blue"
  movingRect = createSprite(200,200,80,50);
  movingRect.shapeColor = "green"
  movingRect.debug = true;  
  fixedRect.debug = true;

  gameObject1 = createSprite(200,200,50,80);
  gameObject1.shapeColor = "white"
  gameObject2 = createSprite(100,100,50,60);
  gameObject2.shapeColor = "black"
}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(isTouching(movingRect,gameObject2))
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green"
   gameObject2.shapeColor = "blue"
  }

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x <= object2.width/2 + object1.width/2
  && object2.x - object1.x <= object2.width/2 + object1.width/2
  && object1.y - object2.y <= object2.height/2 + object1.height/2
  && object2.y - object1.y <= object2.height/2 + object1.height/2) {
   return true;
}
else {
  return false;
}
 
}

