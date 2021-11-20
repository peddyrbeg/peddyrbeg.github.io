let robot;
let attackRobot;
let zenoR25;
let font;
let map;
let activeImg;
let activeObj;
let inActiveObj;
let box;
let info = false;
let relObj = [];
let year = 1950;
let timeSpec;
let timeOn = false;

function preload() {
  map = loadImage('uk.png');
  robotImg = loadImage(robotObj.img);
  attackRobotImg = loadImage(attackRobotObj.img);
  zenoR25Img = loadImage(zenoR25Obj.img);
  font = loadFont("arial.ttf");
}

function setup() {
  initiate();
  robot = new Point(robotObj.locX, robotObj.locY, "robotObj", "robotImg");
  attackRobot = new Point(attackRobotObj.locX, attackRobotObj.locY, "attackRobotObj", "attackRobotImg");
  zenoR25 = new Point(zenoR25Obj.locX, zenoR25Obj.locY, "zenoR25Obj", "zenoR25Img");
  timeSpec = createButton('Filter by year');
  timeSpec.position((lineLen/2) + lineStX - timeSpec.width/2, lineY + 50);
  timeSpec.mousePressed(timeSwitch);
}

function initiate() {
  createCanvas(2000,2000);
  textFont(font);
  image(map, 0, 0, 1000, 1000);
  timeline();
}

function draw() {
  slider();
  box == true ? drawConnections() : null;
  timeOn ? timeFilter() : robot.display();
  timeOn ? timeFilter() : attackRobot.display();
  timeOn ? timeFilter() : zenoR25.display();
  box == true ? drawBox() : null;
}

function drawBox() {
  fill(0, 0, 0, 200);
  stroke(0);
  rectMode(CORNER);
  rect(eval(activeObj).locX + 20, eval(activeObj).locY, 400, 260);
  image(activeImg, eval(activeObj).locX + 25,  eval(activeObj).locY + 5, activeImg.width/5, activeImg.height/5);
  noFill();
  fill(255,255,255);
  strokeWeight(0);
  text(eval(activeObj).title, eval(activeObj).locX + 170, eval(activeObj).locY + 10, 220, 300);
  text(eval(activeObj).des, eval(activeObj).locX + 170, eval(activeObj).locY + 30, 220, 300);
}

function drawConnections() {
  strokeWeight(5);
  stroke(0, 0 ,200);
  relObj.forEach(element => 
    line(eval(activeObj).locX, eval(activeObj).locY, element.locX, element.locY)
  );
}

function mouseReleased() {
  information();
  // prevent default
  return false;
}

function information () {  
  if (eval(activeObj).hover == true && info == false) {
    info = true;
    box = true;
  }
  else if (info == true) {
    info = false;
    box = false;
    initiate();
  }
}

function timeSwitch() {
  timeOn ? timeOn = false : timeOn = true;
  timeline();
}

function timeFilter () {
  if (year < robotObj.year + 10 && year > robotObj.year - 10) {robot.display()};
  if (year < attackRobotObj.year + 10 && year > attackRobotObj.year - 10) {attackRobot.display()};
  if (year < zenoR25Obj.year + 10 && year > zenoR25Obj.year - 10) {zenoR25.display()};
}