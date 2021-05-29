var ghost,ghostImage;
var tower,towerImage;

function preload(){
  ghostImage=loadImage("ghost-standing.png");
  towerImage=loadImage("tower.png")}


function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300,100,100);
  tower.addImage(towerImage)
  tower.scale=1;
  ghost = createSprite(300,300,20,20);
  ghost.addImage(ghostImage)
  
}
  

function draw(){
  background(0);
  drawSprites();
}
