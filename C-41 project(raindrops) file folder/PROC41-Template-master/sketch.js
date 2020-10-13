
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var engine,world,img1;
var height = 570;
var maxDrops = 975;
var drop = [];
var thunder,rand;
var thunder1, thunder2,thunder3,thunder4;

function preload(){
    img1 = loadImage("images/walking_1.png");
    thunder1 = loadImage("images/1.png")
    thunder2 = loadImage("images/2.png")
    thunder3 = loadImage("images/3.png")
    thunder4 = loadImage("images/4.png")
    
}

function setup(){
   createCanvas(350,570) 
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(165,430,20,20);
    
   
   
   Engine.run(engine);

   
  
}

function draw(){
    background(0)
  
    
  if(frameCount%80===0){
   
    var rand = Math.round(random(1,3));
   thunder = createSprite(random(10,340),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     default : break;
   }
  }
    
    
   if(frameCount%20 === 0){
    for(var i = 0;i < 100;i++){
     drop.push(new Drops(random(0,400),random(-400,0)))
    }
 }

    for(var j = 0;j < drop.length;j++){
        drop[j].display();
    }

    umbrella.display(); 

    
    
}   
