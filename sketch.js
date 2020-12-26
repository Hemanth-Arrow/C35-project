//Create variables here
var dog,dogImage,happydogImage,happydog,foodS,foodstack;
var database;
function preload()
{
  //load images here
 dogImage = loadImage("images/dogimg1.png");
  happydog = loadImage("images/dogimg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStack = database.ref("Food")
  foodStack.on("value",readStock)
  dog = createSprite(280,200,10,10)
  dog.scale = 0.5;
  dog.addImage(dogImage);
}


function draw() {  
 background(46, 139, 87);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happydog);
 }
  drawSprites();
  //add styles here

}
function readStock(data){

  foodS = data.val();
}
function writeStock(x){
database.ref("/").update({
  Food:x
})

}

