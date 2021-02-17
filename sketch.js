var cat
var mouse
var PLAY = 1;
var END = 0;
var catI2
var catI
var garden
var mouseI

function preload() {
    garden = loadImage("images/garden.png");
    mouseI = loadAnimation("images/mouse2.png","images/mouse3.png");
    catI = loadAnimation("images/cat2.png","images/cat3.png");
    catI2 = loadAnimation("images/cat4.png");
    mouseI2 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
cat = createSprite(1000,700,400,200);
mouse = createSprite(200,700,150,100);
mouse.setCollider("rectangle",-200,0,0,850);
mouse.addAnimation("running", mouseI);
cat.scale = .2;
gameState = PLAY;
cat.addAnimation("running",catI);
cat.addAnimation("bruhno",catI2);
mouse.addAnimation("bruhyea",mouseI2);

}

function draw() {
    background(garden);
    //Write condition here to evalute if tom and jerry collide
    
    mouse.scale = .2
    mouse.debug = true;
    if (gameState === PLAY){
        if (mouse.x < cat.x){
            cat.velocityX = -1 - frameCount/10;
        }
        if (mouse.x > cat.x){
            cat.velocityX = 1 + frameCount/10;
        }
        if (mouse.y > cat.y){
            cat.velocityY = 1 + frameCount/10;
        }
        if (mouse.y < cat.y){
            cat.velocityY = -1 - frameCount/10;
        }
        if (mouse.isTouching(cat)){
            gameState = END;
            cat.velocityX = 0;
            cat.x=400;
            
        }
        if (gameState === END){
            cat.changeAnimation("bruhno",catI2);
            mouse.changeAnimation("bruhyea",mouseI2);
        }
    }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
