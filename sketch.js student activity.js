var fixedRect
var movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "blue"
  movingRect = createSprite(200,200,80,50);
  movingRect.shapeColor = "green"
  
  
}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  console.log(movingRect.x-fixedRect.x)

  if(movingRect.x - fixedRect.x === fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  } else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "blue"
  }
  drawSprites();
}