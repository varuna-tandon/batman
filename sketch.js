const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var drops = [];
var maxlimit = 100;
var th1,th2,th3,th4;
var thundercreatedFrame = 0

function preload(){
    var th1 = loadImage("thunderbolt/1.png");
    var th2 = loadImage("thunderbolt/2.png");
    var th3 = loadImage("thunderbolt/3.png");
    var th4 = loadImage("thunderbolt/4.png");
   
}

function setup(){
   createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;


   for(var i = 0; i < maxlimit; i++){
    drops.push(new Drop(random(0,800), random(0,500)));
   }

   
   
    
}

function draw(){
    Engine.update(engine);
    background(0);

    for(var i = 0; i < drops.length; i++){
        drops[i].display();
        drops[i].updateDrops();
    }

    
    var any = Math.round(random(1,4));
    if(frameCount % 60 === 0){
        thundercreatedFrame = frameCount
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        
        switch(any){

            case 1 : thunder.addImage(th1);
            break;
            case 2 : thunder.addImage(th2);
            break;
            case 3 : thunder.addImage(th3);
            break;
            case 4 : thunder.addImage(th4);
            break;
            default : break;

        }
        thunder.scale = random(0.3,0.6)

    }
    drawSprites();
    
}   

//  Thunder image is creating an issue. can you please share me the Repo link
//repo link how to create
// , github link
//ok
//wait

