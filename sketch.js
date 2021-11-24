let cnv;

let anschutzTachyscope;
let attackRobot;
let boxfoot;
let drWhoSpaceship;
let infantDoll;
let kit;
let microscope;
let phenakistoscope;
let robot;
let starTrekComm;
let tankard;
let teddy;
let thomasTank;
let worldTechnique;
let zenoR25;

let smLogo;
let galleryIcon;

let butPos1;
let butPos2;
let colT;
let colT2;
let colT3;

let font;
let map;
let activeImg;
let activeObj;
let inActiveObj;

let box = false;
let boxWidth;
let boxHeight;
let boxAlpha;
let boxAlphaSw = false;

let boxDrawn = false;
let info = false;
let relObj = [];
let year = 1950;

let timeSpec;
let randomObj;
let randomNo;
let chooseRando = false;
let randoIt = 0;

let timeOn = false;
let drawn = false;
let startLine = false;
let stories = false;
let catFilt = false;

let sarah;
let mike;
let catriona;

function preload() {
  map = loadImage('assets/world.png');
  anschutzTachyscopeImg = loadImage(anschutzTachyscopeObj.img);
  attackRobotImg = loadImage(attackRobotObj.img);
  boxfootImg = loadImage(boxfootObj.img);
  drWhoSpaceshipImg = loadImage(drWhoSpaceshipObj.img);
  infantDollImg = loadImage(infantDollObj.img);
  kitImg = loadImage(kitObj.img);
  microscopeImg = loadImage(microscopeObj.img);
  phenakistoscopeImg = loadImage(phenakistoscopeObj.img);
  robotImg = loadImage(robotObj.img);
  starTrekCommImg = loadImage(starTrekCommObj.img);
  tankardImg = loadImage(tankardObj.img);
  teddyImg = loadImage(teddyObj.img);
  thomasTankImg = loadImage(thomasTankObj.img);
  worldTechniqueImg = loadImage(worldTechniqueObj.img);
  zenoR25Img = loadImage(zenoR25Obj.img);

  smLogo = loadImage('assets/smLogo.png');
  galleryIcon = loadImage('assets/galleryIcon.png');

  sarah = loadImage('assets/sarah.png');
  mike = loadImage('assets/mike.png');
  catriona = loadImage('assets/catriona.png');

  font = loadFont("assets/arial.ttf");
}

function setup() {
  initiate();

  anschutzTachyscope = new Point(anschutzTachyscopeObj.made[0], anschutzTachyscopeObj.made[1], "anschutzTachyscopeObj", "anschutzTachyscopeImg");
  attackRobot = new Point(attackRobotObj.made[0], attackRobotObj.made[1], "attackRobotObj", "attackRobotImg");
  boxfoot = new Point(boxfootObj.made[0], boxfootObj.made[1], "boxfootObj", "boxfootImg");
  drWhoSpaceship = new Point(drWhoSpaceshipObj.made[0], drWhoSpaceshipObj.made[1], "drWhoSpaceshipObj", "drWhoSpaceshipImg");
  infantDoll = new Point(infantDollObj.made[0], infantDollObj.made[1], "infantDollObj", "infantDollImg");
  kit = new Point(kitObj.made[0], kitObj.made[1], "kitObj", "kitImg");
  microscope = new Point(microscopeObj.made[0], microscopeObj.made[1], "microscopeObj", "microscopeImg");
  phenakistoscope = new Point(phenakistoscopeObj.made[0], phenakistoscopeObj.made[1], "phenakistoscopeObj", "phenakistoscopeImg");
  robot = new Point(robotObj.made[0], robotObj.made[1], "robotObj", "robotImg");
  starTrekComm = new Point(starTrekCommObj.made[0], starTrekCommObj.made[1], "starTrekCommObj", "starTrekCommImg");
  tankard = new Point(tankardObj.made[0], tankardObj.made[1], "tankardObj", "tankardImg");
  teddy = new Point(teddyObj.made[0], teddyObj.made[1], "teddyObj", "teddyImg");
  thomasTank = new Point(thomasTankObj.made[0], thomasTankObj.made[1], "thomasTankObj", "thomasTankImg");
  worldTechnique = new Point(worldTechniqueObj.made[0], worldTechniqueObj.made[1], "worldTechniqueObj", "worldTechniqueImg");
  zenoR25 = new Point(zenoR25Obj.made[0], zenoR25Obj.made[1], "zenoR25Obj", "zenoR25Img");

  timeSpec = createButton('FILTER BY YEAR');
  timeSpec.size(150, 40);
  butPos1 = [(lineLen/2) + lineStX - timeSpec.width/2, lineY + 50];
  timeSpec.position(butPos1[0], butPos1[1]);
  colT = color(236, 100, 8);
  colT2 = color(255);
  colT3 = color(218, 39, 0);
  timeSpec.style('background-color', colT);
  timeSpec.style('border', colT);
  timeSpec.style('color', colT2);
  timeSpec.mouseOver(buttonColourOver);
  timeSpec.mouseOut(buttonColourOut);
  timeSpec.mousePressed(timeSwitch);

  randomObj = createButton('SEE RANDOM OBJECT');
  randomObj.size(200, 40);
  butPos2 = [(lineLen/2) + lineStX - randomObj.width/2, lineY + 50];
  randomObj.position(butPos2[0], butPos2[1] + 60);
  randomObj.style('background-color', colT);
  randomObj.style('border', colT);
  randomObj.style('color', colT2);
  randomObj.mouseOver(buttonColourOver);
  randomObj.mouseOut(buttonColourOut);
  randomObj.mousePressed(chooseRandomObj);

  timeline();

  activeObj = robotObj;
}

function initiate() {  
  cnv = createCanvas(displayWidth, displayHeight);
  background(0);
  textFont(font);
  imageMode(CENTER);
  image(map, cnv.width/2, cnv.height/3, map.width/(cnv.width * 0.001), map.height/(cnv.width * 0.001));
  imageMode(CORNER);
  image(smLogo, 0, 0, smLogo.width/15, smLogo.height/15);
}

function draw() {
  slider();
  box == true ? drawConnections() : null;
  
  if (timeOn) {
    timeFilter();
  }
  else if (catFilt) {
    anschutzTachyscope.categoryFilter();
    attackRobot.categoryFilter();
    boxfoot.categoryFilter();
    drWhoSpaceship.categoryFilter();
    infantDoll.categoryFilter();
    kit.categoryFilter();
    microscope.categoryFilter();
    phenakistoscope.categoryFilter();
    robot.categoryFilter();
    tankard.categoryFilter();
    teddy.categoryFilter();
    thomasTank.categoryFilter();
    starTrekComm.categoryFilter();
    worldTechnique.categoryFilter();
    zenoR25.categoryFilter();
  }
  else {
    anschutzTachyscope.display();
    attackRobot.display();
    boxfoot.display();
    drWhoSpaceship.display();
    infantDoll.display();
    kit.display();
    microscope.display();
    phenakistoscope.display();
    robot.display();
    tankard.display();
    teddy.display();
    thomasTank.display();
    starTrekComm.display();
    worldTechnique.display();
    zenoR25.display();
  }

  box == true ? drawBox() : null;

  stories ? storyBar() : null;
  categories();
  myGallery();
  chooseRando ? chooseRandomObj() : null;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawBox() {
  boxAlphaSw ? null : boxAlpha = 0;
  boxAlphaSw = true;
  boxAlpha < 255 ? boxAlpha = boxAlpha + 5 : null;
  fill(175, 18, 128, boxAlpha);
  strokeWeight(0);
  rectMode(CENTER);
  imageMode(CORNER);
  boxDrawn == false ? boxWidth = 0 : null;
  boxDrawn == false ? boxHeight = 0 : null;
  boxDrawn = true;
  boxWidth = cnv.width/2;
  boxHeight < cnv.height/2 ? boxHeight = boxHeight + 20 : null;
  
  let boxX = cnv.width * 0.55;
  rect(boxX, cnv.height/3, boxWidth, boxHeight);
  if (boxWidth == cnv.width/2 && bWidth == 500) {
    image(activeImg, boxX - boxWidth/2 + 35,  cnv.height/9, activeImg.width/2, activeImg.height/2);
    noFill();
    fill(255,255,255);
    rectMode(CORNER);
    textAlign(LEFT);
    textSize(16);
    let tX = boxX - boxWidth/2 + activeImg.width/2 + 60;
    text(eval(activeObj).title, tX, cnv.height/9, 220, 300);
    textWrap(WORD);
    text(eval(activeObj).des, tX, cnv.height/9 + 30, 220, 300);
  }
}

function drawConnections() {
  strokeWeight(5);
  stroke(75, 190, 207, 50);
  if (startLine == false && box == false) { lineAnim(); }
  else {
    for (let j = 0; j < relObj.length; j++) {
      line(eval(activeObj).made[0], eval(activeObj).made[1], relObj[j].made[0], relObj[j].made[1]);  
    }
  }
}

function mouseReleased() {
  information();

if (c1 || c2 || c3 || c4 || c5 || c6 || c7) {
  if (c1) { 
    if (lockC1) { 
      initiate();
      lockC1 = false;
      locksCount == 1 ? catFilt = false : null;
      catSel[0] = "";
      locksCount--;
    }
    else {
      initiate();
      lockC1 = true;
      catFilt = true;
      locksCount++;
    }
  }

  if (c2) { 
    if (lockC2) { 
      initiate();
      lockC2 = false;
      locksCount == 1 ? catFilt = false : null;
      catSel[1] = "";
      locksCount--;
    }
    else {
      initiate();
      lockC2 = true;
      catFilt = true;
      locksCount++;
    }
  }

  if (c3) { 
    if (lockC3) { 
      initiate();
      lockC3 = false;
      locksCount == 1 ? catFilt = false : null;
      catSel[2] = "";
      locksCount--;
    }
    else {
      initiate();
      lockC3 = true;
      catFilt = true;
      locksCount++;
    }
  }

  if (c4) { 
    if (lockC4) { 
      initiate();
      lockC4 = false;
      locksCount == 1 ? catFilt = false : null;
      catSel[3] = "";
      locksCount--;
    }
    else {
      initiate();
      lockC4 = true;
      catFilt = true;
      locksCount++;
    }
  }

  if (c5) { 
    if (lockC5) { 
      initiate();
      lockC5 = false;
      locksCount == 1 ? catFilt = false : null;
      catSel[4] = "";
      locksCount--;
    }
    else {
      initiate();
      lockC5 = true;
      catFilt = true;
      locksCount++;
    }
  }
  
  if (c6) { 
    initiate();
    if (lockC6) { 
      lockC6 = false;
      locksCount == 1 ? catFilt = false : null;
      catSel[5] = "";
      locksCount--;
    }
    else {
      initiate();
      lockC6 = true;
      catFilt = true;
      locksCount++;
    }
  }
  
  if (c7) { 
    if (lockC7) { 
      initiate();
      lockC7 = false;
      locksCount == 1 ? catFilt = false : null;
      catSel[6] = "";
      locksCount--;
    }
  else {
      initiate();
      lockC7 = true;
      catFilt = true;
      locksCount++;
    }
  }
}
  // prevent default on mouse release
  return false;
}

function keyPressed() {
  if (box == true && keyCode === ESCAPE) {
    escape = true;
  }
  else {
    escape = false;
  }
}

function information () {  
  if (eval(activeObj).hover == true && info == false) {
    stories = true;
    info = true;
    box = true;
  }
  else if (info == true) {
    startLine = false;
    bWidth = 0;
    stories = false;
    boxDrawn = false;
    widthCh = false;
    escape = false;
    info = false;
    box = false;
    boxHeight = 0;
    initiate();
  }
}

function timeFilter () {
  if (year < anschutzTachyscopeObj.year + 10 && year > anschutzTachyscopeObj.year - 10) {anschutzTachyscope.fade()};
  if (year < attackRobotObj.year + 10 && year > attackRobotObj.year - 10) {attackRobot.fade()};
  if (year < boxfootObj.year + 10 && year > boxfootObjo.year - 10) {boxfoot.fade()};
  if (year < drWhoSpaceshipObj.year + 10 && year > drWhoSpaceshipObj.year - 10) {drWhoSpaceship.fade()};
  if (year < infantDollObj.year + 10 && year > infantDollObj.year - 10) {infantDoll.fade()};
  if (year < kitObj.year + 10 && year > kitObj.year - 10) {kit.fade()};
  if (year < microscopeObj.year + 10 && year > microscopeObj.year - 10) {microscope.fade()};
  if (year < phenakistoscopeObj.year + 10 && year > phenakistoscopeObj.year - 10) {phenakistoscope.fade()};
  if (year < robotObj.year + 10 && year > robotObj.year - 10) {robot.fade()};
  if (year < starTrekCommObj.year + 10 && year > starTrekCommObj.year - 10) {starTrekComm.fade()};
  if (year < tankardObj.year + 10 && year > tankardObj.year - 10) {tankard.fade()};
  if (year < teddyObj.year + 10 && year > teddyObj.year - 10) {teddy.fade()};
  if (year < thomasTankObj.year + 10 && year > thomasTankObj.year - 10) {thomasTank.fade()};
  if (year < worldTechniqueObj.year + 10 && year > worldTechniqueObj.year - 10) {worldTechnique.fade()};
  if (year < zenoR25Obj.year + 10 && year > zenoR25Obj.year - 10) {zenoR25.fade()};
}

function lineAnim() {
  strokeWeight(5);
  stroke(75, 190, 207, 50);
  for (i = 0; i < relObj.length; i++) {
    relObj[i].anim[0] == 0 ? relObj[i].anim[0] = eval(activeObj).made[0] : null;
    relObj[i].anim[1] == 0 ? relObj[i].anim[1] = eval(activeObj).made[1] : null;
    let distanceX = relObj[i].anim[0] - relObj[i].made[0];
    let distanceY = relObj[i].anim[1] - relObj[i].made[1];
    if (!(Math.sqrt(distanceX*distanceX) < 0.5) || !(Math.sqrt(distanceY*distanceY) < 0.5)) {
      relObj[i].anim[0] = relObj[i].anim[0] + ((relObj[i].made[0]) - eval(activeObj).made[0])/30;
      relObj[i].anim[1] = relObj[i].anim[1] + ((relObj[i].made[1]) - eval(activeObj).made[1])/30;
      line(eval(activeObj).made[0], eval(activeObj).made[1], relObj[i].anim[0], relObj[i].anim[1]);
    }
    else {
      initiate();
      startLine = true;
    }
  }
}

function resetAnim () {
  for (let i = 0; i < relObj.length; i++) {
    relObj[i].anim[0]  = 0;
    relObj[i].anim[1]  = 0;
  }
}

function chooseRandomObj () {
  if (randoIt <= 100) {
    chooseRando = true
    randoIt++;
    randoIt % 10 ? null : randomNo = Math.floor(random(16));
  }
  else {
    chooseRando = false;
    randoIt = 0;
  }
}

function buttonColourOver () {
  this.style('background-color', colT3);
}

function buttonColourOut () {
  this.style('background-color', colT);
}
