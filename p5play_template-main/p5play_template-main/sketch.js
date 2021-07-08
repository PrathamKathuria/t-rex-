var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30) ;
}

function draw() 
{
  background(199);
  drawSprites();
  nothing();
}

function nothing(){
   if (keyDown("Up"))
  {
    box.position.y -= 2 ;
  }
  if (keyDown("Down"))
  {
    box.position.y += 2 ;
  }
  if (keyDown("Left"))
  {
    box.position.x -= 2 ;
  }
  if (keyDown("Right"))
  {
    box.position.x += 2 ;
  }
}


