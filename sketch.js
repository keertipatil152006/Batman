
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var thunder,thunder1,thunder2,thunder3,thunder4
var thunderFrame=0;
var walk1,walk2,walk3,walk4,walk5,walk6,walk7,walk8


var maxDrops=100;
var drops=[];
function preload(){
   
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
    
    walk1.loadImage("images/Walking Frame/walking_1.png")
    walk2.loadImage("images/Walking Frame/walking_2.png")
    walk3.loadImage("images/Walking Frame/walking_3.png")
    walk4.loadImage("images/Walking Frame/walking_4.png")
    walk5.loadImage("images/Walking Frame/walking_5.png")
    walk6.loadImage("images/Walking Frame/walking_6.png")
    walk7.loadImage("images/Walking Frame/walking_7.png")
    walk8.loadImage("images/Walking Frame/walking_8.png")
}

function setup(){
createCanvas(500,650);
engine = Engine.create();
world = engine.world;   

umbrella=new Umbrella(100,450);

if(frameCount%10===0){
for(var i=0; i<maxDrops; i++){
drops.push(new Drop(random(0,500),random(0,500)))
}
}

}

function draw(){
    Engine.update(engine);
    background(0);

var rand=Math.round(random(1,4));
if(frameCount%80==0){
thunderFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10);
switch(rand){
case 1:thunder.addImage(thunder1);
break;
case 2:thunder.addImage(thunder2);
break;
case 3:thunder.addImage(thunder3);
break;
case 4:thunder.addImage(thunder4);
break;
default:break;
}
thunder.scale=random(0.3,0.6);
}
if(thunderFrame+10===frameCount && thunder){
thunder.destroy();
}

for(var i=0; i<maxDrops; i++){
drops[i].showDrop();
drops[i].update();
}
umbrella.display();
drawSprites();

}

