var movingRect, fixedRect;

function setup() {
  createCanvas(400, 400);
  
  fixedRect = createSprite(200,200,100,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(200,200,50,100);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(188, 200, 214);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  console.log(movingRect.x);
  console.log(fixedRect.x);
  
  console.log(movingRect.width/2);
  console.log(fixedRect.width/2);
  
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}
  
  drawSprites();
}