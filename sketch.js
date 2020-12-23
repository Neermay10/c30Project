const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16;
var hexagon;

function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    //SET1
    ground1 = new Ground(700,450,300,10);

    //level One
    block1 = new Box(610,410,40,50);
    block2 = new Box(670,410,40,50);
    block3 = new Box(730,410,40,50);
    block4 = new Box(790,410,40,50);

    //level Two
    block5 = new Box(640,370,40,50);
    block6 = new Box(700,370,40,50);
    block7 = new Box(760,370,40,50);

    //level Three
    block8 = new Box(670,330,40,50);
    block9 = new Box(730,330,40,50);

    //level Four
    block10 = new Box(700,290,40,50);



    //SET2
    ground2 = new Ground(500,200,200,10);

    //level One
    block11 = new Box(440,160,40,50);
    block12 = new Box(500,160,40,50);
    block13 = new Box(560,160,40,50);

    //level Two
    block14 = new Box(470,120,40,50);
    block15 = new Box(530,120,40,50);

    //level Three
    block16 = new Box(500,80,40,50);


    hexagon = new Hexagon(100,250,30);
    sling = new Slingshot(hexagon.body, {x:100, y:250})

}

function draw(){
    background(0);
    Engine.update(engine);

    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    ground2.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    hexagon.display();
    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(hexagon.body);
    }
}