var bg;
var iss;
var spaceCraft;
var hasDocked = false;

function preload(){
  bg = loadImage("Docking-undocking/spacebg.jpg");
  issImg = loadImage("Docking-undocking/iss.png");
  scImg = loadImage("Docking-undocking/spacecraft1.png");
  scImg1 = loadImage("Docking-undocking/spacecraft2.png");
  scImg2 = loadImage("Docking-undocking/spacecraft3.png");
  scImg3 = loadImage("Docking-undocking/spacecraft4.png");
}



function setup() {
  
  createCanvas(800,400);
  iss = createSprite(330, 130);
  iss.addImage(issImg);
  iss.scale = 0.3;

  spaceCraft = createSprite(280,240 );
  spaceCraft.addImage(scImg);
  spaceCraft.scale = 0.15;
}

function draw() {

  background(bg); 

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);

    if(keyDown(UP_ARROW)){
      spaceCraft.y = spaceCraft.y-2;
    }
    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(scImg2);
      spaceCraft.x = spaceCraft.x-1;
      
    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.x = spaceCraft.x+1;
      spaceCraft.addImage(scImg3);
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(scImg1);
    }
  } 
if(spaceCraft.y <=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
   hasDocked = true;
   text("Docking Succesful",200,300);
}


  drawSprites();
}