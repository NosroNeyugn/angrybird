const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(680,360,50,50);
    box2 = new Box(820,360,50,50);
    box3 = new Box(680,320,50,50);
    box4 = new Box(820,320,50,50);
    box5 = new Box(750,240,50,50);
    ground = new Ground(400,height,1600,20);
    pig1 = new Pig(750,360);
    pig2 = new Pig(750,330);
    log1 = new Log(750,340,200,PI/2);  
    log2 = new Log(750,260,200,PI/2);
    log3 = new Log(695,240,100,PI/7);
    log4 = new Log(805,240,100,-PI/7);
    bird1 = new Bird(200,200);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}