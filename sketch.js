
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var paper1;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;
var launcher;

function preload()
{
	dust=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 650);
	engine = Engine.create();
	world = engine.world;
	
	paper1 = new Paper(100,100);
	ground = new Ground(600,600,1200,20);
	dustbin1 = new Dustbin(945,580,200,20);
	dustbin2 = new Dustbin(850,502,10,190);
   dustbin3 = new Dustbin(1050,502,10,190);
   launcher = new Launcher(paper1.body,{x:200,y:90});
}


function draw() {
	background('white');
	Engine.update(engine);
	
	paper1.display();
	image(dust,850,360,200,220);
    ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	launcher.display();
}
function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-75});
	}
}

function mouseDragged()
{
Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
    
}


