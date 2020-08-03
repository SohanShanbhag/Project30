const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground2, ground3;
var ball;
var sling, box1;
var lives = 3;

function setup() {
  createCanvas(1400,600);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(700, 580, 1400, 10);
  ground2 = new Ground(1200, 200, 300, 10);
  ground3 = new Ground(700, 400, 400, 10);

  wall = new Ground(700, 5, 1400,10);
  wall2 = new Ground(1395, 300, 10, 600);
  wall3 = new Ground(5, 300, 10, 600);

  box1 = new Box(525, 365, 50, 50);
  box2 = new Box(585, 365, 50, 50);
  box3 = new Box(645, 365, 50, 50);
  box4 = new Box(705, 365, 50, 50);
  box5 = new Box(765, 365, 50, 50);
  box6 = new Box(825, 365, 50, 50);
  box7 = new Box(885, 365, 50, 50);

  box8 = new Box(555, 315, 50, 50);
  box9 = new Box(615, 315, 50, 50);
  box10 = new Box(675, 315, 50, 50);
  box11 = new Box(735, 315, 50, 50);
  box12 = new Box(795, 315, 50, 50);
  box13 = new Box(855, 315, 50, 50);

  box14 = new Box(585, 265, 50, 50);
  box15 = new Box(645, 265, 50, 50);
  box16 = new Box(705, 265, 50, 50);
  box17 = new Box(765, 265, 50, 50);
  box18 = new Box(825, 265, 50, 50);

  box19 = new Box(615, 215, 50, 50);
  box20 = new Box(675, 215, 50, 50);
  box21 = new Box(735, 215, 50, 50);
  box22 = new Box(795, 215, 50, 50);

  box23 = new Box(645, 165, 50, 50);
  box24 = new Box(705, 165, 50, 50);
  box25 = new Box(765, 165, 50, 50);

  box26 = new Box(675, 115, 50, 50);
  box27 = new Box(735, 115, 50, 50);

  box28 = new Box(705, 65, 50, 50);

  ball = new Ball(200,400,50);

  sling = new Sling(ball.body, {x: 100 , y: 400});

  Engine.run(engine);
}

function draw() {
  background(255,255,0);

  textSize(25);
  //textFont("Times New Roman");
  textStyle(BOLD);

  Engine.update(engine);
  
  ground.display();
  ground2.display();
  ground3.display();

  ball.display();

  sling.display();

  wall.display();
  wall2.display();
  wall3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  text("Lives Left : " + lives, 100, 50);

  textSize(18);
  text("Press the SPACE BAR to restart the ball. The Structure will not restart. But, you lose a life.", 300, 500)
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling.fly();  
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(ball.body);
    lives -=1;
  }
}