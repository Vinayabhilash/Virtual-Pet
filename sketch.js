var dog, dogImg, happyDog, database, foodS, foodStock;

function preload()
{
  dogImg = loadImage("Dog(1).png");
happyDog = loadImage("happydog(1).png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(500, 500);
  dog.addImage(dogImg);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
}


function draw() {  

  drawSprites();
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



