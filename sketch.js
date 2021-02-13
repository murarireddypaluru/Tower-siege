const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Ball(200, 200, 65, 65)
    ground = new Gd(775, 400, 520, 10)
    box1 = new Bx(700, 310, 50, 50)
    box2 = new Bx(750, 310, 50, 50)
    box3 = new Bx(800, 310, 50, 50)
    box4 = new Bx(850, 310, 50, 50)
    box5 = new Bx(900, 310, 50, 50)
    box6 = new Bx(950, 310, 50, 50)
    box7 = new Bx(725, 260, 50, 50)
    box8 = new Bx(775, 260, 50, 50)
    box9 = new Bx(825, 260, 50, 50)
    box10 = new Bx(875, 260, 50, 50)
    box11 = new Bx(925, 260, 50, 50)
    box12 = new Bx(750, 210, 50, 50)
    box13 = new Bx(800, 210, 50, 50)
    box14 = new Bx(850, 210, 50, 50)
    box15 = new Bx(900, 210, 50, 50)
    box16 = new Bx(775, 160, 50, 50)
    box17 = new Bx(825, 160, 50, 50)
    box18 = new Bx(875, 160, 50, 50)
    box19 = new Bx(800, 110, 50, 50)
    box20 = new Bx(850, 110, 50, 50)
    box21 = new Bx(825, 60, 50, 50)
    slingShot = new Sl(polygon.body,{x:200, y:200})
}


function draw(){
    background(255)
    Engine.update(engine)
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    ground.display()
    polygon.display()
    slingShot.display()
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}