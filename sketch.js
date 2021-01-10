const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var plinkos = []
var divisions = []

var divisionHeght=300;
function setup() {
createCanvas(480,800);
engine= Engine.create();
world= engine.world;

 division1 = new Divisions (475,400,9,5000);
 division2 = new Divisions (5,800,9,5000);
 ground1 = new Ground (240,795,500000,9);
 div1 = new Divisions (70,691,9,200);
 div2 = new Divisions (150,691,9,200);
 div3 = new Divisions (230,691,9,200);
 div4 = new Divisions (310,691,9,200);
 div5 = new Divisions (390,691,9,200);
 plinko1 = new Plinko (240,400,100);
}

function draw() {
  background("black");  
  
Engine.update(engine);

ground1.display ();
division1.display();
division2.display();
div1.display();
div2.display();
div3.display();
div4.display();
div5.display();
plinko1.display();
  drawSprites();
}