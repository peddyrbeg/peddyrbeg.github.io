let cnv;

let loading = true;
let loadTime = 0;
let timeToLoad = 500;
let loadFade = 0;
let circleSize = 0;
let itemsNo = 25;
let itemCounter = 0;
let agents = [];

let particle1;

let item;

var anschutzTachyscopeImg;
var attackRobotImg;
var boxfootImg;
var drWhoSpaceshipImg;
var infantDollImg;
var kitImg;
var microscopeImg;
var phenakistoscopeImg;
var robotImg;
var starTrekCommImg;
var tankardImg;
var teddyImg;
var thomasTankImg;
var worldTechniqueImg;
var zenoR25Img;

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

var robotIcon;
var materialsIcon;

var bkgr;
var smLogo;
var profile;
var zoomImg;
var filterIcon;

var galleryIcon;
var myGallerImg;
var galleryBarClosed;
let myGallerBut;
let galleryBarState = false;
let myGallery;
let mediaBar;

var gameBar;
var gameBarClosed;
let gameBarToggle;
let gameBarState = false;

let adj = 1920;

let butPos1;
let butPos2;
let colT;
let colT2;
let colT3;

let smgSans;
var world;
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

let gameOn;
let gameAct;
let galleryOpen;

// let mediaButton;

let timeOn = false;
let drawn = false;
let startLine = false;
let stories = false;
let catFilt = false;

var sarah;
var mike;
var catriona;

let searchbar;

function loadItems (jalloo, filename, type) {
  if (type == 'font') jalloo = loadFont(filename, imageLoaded);
  else jalloo = loadImage(filename, imageLoaded);
  function imageLoaded (image) {
    jalloo = image;
    itemCounter++;
  }
  return jalloo;
}


function setup() {
  for (let i = 0; i < 30; i++) {
    agents.push(new Agent());
  }

  anschutzTachyscopeImg = loadItems(anschutzTachyscopeImg, anschutzTachyscopeObj.img);
  attackRobotImg = loadItems(attackRobotImg, attackRobotObj.img);
  boxfootImg = loadItems(boxfootImg, boxfootObj.img);
  drWhoSpaceshipImg = loadItems(drWhoSpaceshipImg, drWhoSpaceshipObj.img);
  infantDollImg = loadItems(infantDollImg, infantDollObj.img);
  kitImg = loadItems(kitImg, kitObj.img);
  microscopeImg = loadItems(microscopeImg, microscopeObj.img);
  phenakistoscopeImg = loadItems(phenakistoscopeImg, phenakistoscopeObj.img);
  robotImg = loadItems(robotImg, robotObj.img);
  starTrekCommImg = loadItems(starTrekCommImg, starTrekCommObj.img);
  tankardImg = loadItems(tankardImg, tankardObj.img);
  teddyImg = loadItems(teddyImg, teddyObj.img);
  thomasTankImg = loadItems(thomasTankImg, thomasTankObj.img);
  worldTechniqueImg = loadItems(worldTechniqueImg, worldTechniqueObj.img);
  zenoR25Img = loadItems(zenoR25Img, zenoR25Obj.img);

  robotIcon = loadItems(robotIcon, 'assets/robotIcon.png');
  materialsIcon = loadItems(materialsIcon, 'assets/materialsIcon.png')

  bkgr = loadItems(bkgr, 'assets/bkgr.png')
  smLogo = loadItems(smLogo, 'assets/logo_alpha.png');
  profile = loadItems(profile, 'assets/profile.png');
  zoomImg = loadItems(zoomImg, 'assets/zoomImg.png');
  filterIcon = loadItems(filterIcon, 'assets/filterIcon.png');

  galleryIcon = loadItems(galleryIcon, 'assets/myGallery.png');
  myGallerImg = loadItems(myGallerImg, 'assets/myGalleryImg.png');
  galleryBarClosed = loadItems(galleryBarClosed, 'assets/galleryBarClosed.png');
  gameBar = loadItems(gameBar, 'assets/gameBar.png')
  gameBarClosed = loadItems(gameBarClosed, 'assets/gameBarClosed.png');
  mediaBar = loadItems(mediaBar, 'assets/mediaBar.png');

  sarah = loadItems(sarah, 'assets/sarah.png');
  mike = loadItems(mike, 'assets/mike.png');
  catriona = loadItems(catriona, 'assets/catriona.png');

  smgSans = loadItems(smgSans, "assets/SMGSans-Regular.woff", 'font');
}

function postLoadSetup () {
  initiate();

  anschutzTachyscope = new Point(anschutzTachyscopeObj.made[0], anschutzTachyscopeObj.made[1], "anschutzTachyscopeObj", "anschutzTachyscopeImg", "cinematography");
  attackRobot = new Point(attackRobotObj.made[0], attackRobotObj.made[1], "attackRobotObj", "attackRobotImg", "robot");
  boxfoot = new Point(boxfootObj.made[0], boxfootObj.made[1], "boxfootObj", "boxfootImg", "microscopy");
  drWhoSpaceship = new Point(drWhoSpaceshipObj.made[0], drWhoSpaceshipObj.made[1], "drWhoSpaceshipObj", "drWhoSpaceshipImg", "space");
  infantDoll = new Point(infantDollObj.made[0], infantDollObj.made[1], "infantDollObj", "infantDollImg", "psychology");
  kit = new Point(kitObj.made[0], kitObj.made[1], "kitObj", "kitImg", "local");
  microscope = new Point(microscopeObj.made[0], microscopeObj.made[1], "microscopeObj", "microscopeImg", "microscopy");
  phenakistoscope = new Point(phenakistoscopeObj.made[0], phenakistoscopeObj.made[1], "phenakistoscopeObj", "phenakistoscopeImg", "cinematography");
  robot = new Point(robotObj.made[0], robotObj.made[1], "robotObj", "robotImg", "robot");
  starTrekComm = new Point(starTrekCommObj.made[0], starTrekCommObj.made[1], "starTrekCommObj", "starTrekCommImg", "space");
  tankard = new Point(tankardObj.made[0], tankardObj.made[1], "tankardObj", "tankardImg", "local");
  teddy = new Point(teddyObj.made[0], teddyObj.made[1], "teddyObj", "teddyImg", "materials");
  thomasTank = new Point(thomasTankObj.made[0], thomasTankObj.made[1], "thomasTankObj", "thomasTankImg", "materials");
  worldTechnique = new Point(worldTechniqueObj.made[0], worldTechniqueObj.made[1], "worldTechniqueObj", "worldTechniqueImg", "psychology");
  zenoR25 = new Point(zenoR25Obj.made[0], zenoR25Obj.made[1], "zenoR25Obj", "zenoR25Img", "robot");

  timeSpec = createButton('FILTER BY YEAR');
  timeSpec.size(cnv.width * 0.078, cnv.width * 0.021);
  timeSpec.position(cnv.width/2 - timeSpec.width/2, cnv.height * 0.77);
  timeSpec.style('background-color', 'black');
  timeSpec.style('border', 'transparent');
  timeSpec.style('color', 'white');
  timeSpec.style('font-size', cnv.width*0.008 + 'px');
  timeSpec.mouseOver(timeColourOver);
  timeSpec.mouseOut(timeColourOut);
  timeSpec.mousePressed(timeSwitch);

  randomObj = createButton('SEE RANDOM OBJECT');
  randomObj.size(cnv.width * 0.104, cnv.width * 0.021);
  butPos2 = [cnv.width/2 - randomObj.width/2, cnv.height * 0.698];
  randomObj.position(cnv.width - randomObj.width, cnv.width * 0.1);
  randomObj.style('background-color', 'black');
  randomObj.style('border', 'transparent');
  randomObj.style('color', 'white');
  randomObj.style('font-size', cnv.width*0.007 + 'px');
  randomObj.mouseOver(buttonColourOver);
  randomObj.mouseOut(buttonColourOut);
  randomObj.mousePressed(chooseRandomObj);

  myGalleryBut = createButton('');
  myGalleryBut.position(0, cnv.height * 0.131);
  myGalleryBut.size(cnv.width*0.017, cnv.width*0.105);
  myGalleryBut.style('background-color', 'transparent');
  myGalleryBut.style('border', 'transparent');
  myGalleryBut.mouseOver(gameColourOver);
  myGalleryBut.mouseOut(gameColourOut);
  myGalleryBut.mousePressed(openGalleryBar);

  myGallery = createButton('');
  myGallery.position(cnv.width*0.017, cnv.height * 0.131);
  myGallery.size(cnv.width*0.087, cnv.width*0.104);
  myGallery.style('background-color', 'transparent');
  myGallery.style('border', 'transparent');
  myGallery.style('display', 'none');
  myGallery.mouseOver(gameColourOver);
  myGallery.mouseOut(gameColourOut);
  myGallery.mousePressed(openGallery);

  gameBarToggle = createButton('');
  gameBarToggle.position(0, cnv.height * 0.38);
  gameBarToggle.size(cnv.width*0.017, cnv.width*0.144);
  gameBarToggle.style('background-color', 'transparent');
  gameBarToggle.style('border', 'transparent');
  gameBarToggle.mouseOver(gameColourOver);
  gameBarToggle.mouseOut(gameColourOut);
  gameBarToggle.mousePressed(openGamebar);

  gameOn = createButton('');
  gameOn.size(cnv.width * 0.104 * 0.33, cnv.width * 0.104 * 0.33);
  gameOn.position(cnv.width*0.025, cnv.height * 0.437);
  let gameBC = color(0,0,0,0);
  gameOn.style('background-color', gameBC);
  gameOn.style('border', 'transparent');
  gameOn.style('font-size', cnv.width*0.012 + 'px');
  gameOn.mouseOver(gameColourOver);
  gameOn.mouseOut(gameColourOut);
  gameOn.attribute("title", "Tile Game");
  gameOn.mousePressed(activateGame);

  // mediaButton = createButton('');
  // mediaButton.position(cnv.width*0.7, cnv.height*0.1);
  // mediaButton.size(cnv.width*0.1, cnv.height*0.1);
  // mediaButton.style('display', 'none');

  searchbar = createInput('search');
  searchbar.position(cnv.width*0.5-(searchbar.width*0.5), cnv.height*0.03);

  timeline();

  activeObj = robotObj;
}

function initiate() {  
  cnv = createCanvas(displayWidth, displayHeight);
  cnv.position(0, 0);
  background(0);
  redrawGradient();
  imageMode(CORNER);
  image(bkgr, 0, 0, cnv.width, cnv.height);
  textFont(smgSans);
  image(smLogo, 0, 0, smLogo.width * cnv.width * 0.00005, smLogo.height * cnv.width * 0.00005);
  image(profile, cnv.width*0.965, cnv.height*0.015, profile.width * cnv.width*0.0006, profile.height*cnv.width*0.0006);
  image(zoomImg, cnv.width*0.93, cnv.height*0.7, zoomImg.width * cnv.width*0.0006, zoomImg.height * cnv.width*0.0006);
}

function draw() {
if (loading) {
  if (loadTime < 100) loadTime++;
  else if (loadTime >= 100 && loadTime < 120) loadTime = loadTime + 0.5;
  else if (loadTime >= 120 && loadTime < 350) loadTime++;
  else if (loadTime >= 350 && loadTime < 353) loadTime = loadTime + 0.2;
  else loadTime++;
  circleSize++;

  let loadCnv = createCanvas(displayWidth,displayHeight);
  background(0);
  drawGradient();
  agents.forEach(element => {
    element.display()
  });

  fill(255);
  stroke(255);
  strokeWeight(10);
  rect(displayWidth*0.5-(displayWidth*0.2)*0.5, displayHeight*0.7, displayWidth*0.2, displayWidth*0.01);

  fill(0);
  strokeWeight(circleSize*0.025);
  textAlign(CENTER);
  textSize(loadCnv.width*0.03);

  textAlign(CENTER);
  fill(255,255,255,circleSize);
  noStroke();
  text('SCIENCE MUSEUM', displayWidth*0.5, displayHeight*0.35);
  text('CONNECTIONS', displayWidth*0.5, displayHeight*0.42);

  fill(0);
  noStroke();
  rect(displayWidth*0.5-(displayWidth*0.2)*0.5, displayHeight*0.7, loadTime * ((displayWidth*0.2)/timeToLoad), displayWidth*0.01);

  fill(255);
  textSize(loadCnv.width*0.009);
  textAlign(LEFT);
  text('LOADING ' + Math.floor(loadTime/5) + '%', displayWidth*0.475, displayHeight*0.75);

  if (loadTime > timeToLoad-200 && loadTime < timeToLoad) {
      loadFade++;
      fill(0, 0, 0, loadFade);
      rect(0, 0, loadCnv.width, loadCnv.height);
  }
  else if (loadTime > timeToLoad) {
      loading = false;
      postLoadSetup();
  }
}
else {
if (galleryOpen) image(myGallerImg, 0, 0, myGallerImg.width * cnv.width * 0.00055, myGallerImg.height * cnv.width * 0.00055);
if (!gameAct && !galleryOpen) {
  slider();
  box == true ? drawConnections() : null;

  noFill();
  stroke(0);
  strokeWeight(2);
  if (!stories) rect(cnv.width*0.15, cnv.height*0.7, cnv.width*0.104, cnv.width*0.104);

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

  if (stories) {
    storyBar();
    gameOn.style('display', 'none');
  }
  else {
    gameOn.style('display', 'block');
    gamesBar();
    galleryBar();
  }
  categories();
  chooseRando ? chooseRandomObj() : null;
}
  else if (gameAct && !galleryOpen) gameDraw ();
}

function drawBox() {
  boxAlphaSw ? null : boxAlpha = 0;
  boxAlphaSw = true;
  boxAlpha < 255 ? boxAlpha = boxAlpha + 5 : null;
  fill(0, 0, 0, boxAlpha);
  strokeWeight(0);
  rectMode(CENTER);
  imageMode(CORNER);
  boxDrawn == false ? boxWidth = 0 : null;
  boxDrawn == false ? boxHeight = 0 : null;
  boxDrawn = true;
  boxWidth = cnv.width*0.53;
  boxHeight < cnv.height/2 ? boxHeight = boxHeight + cnv.width * 0.01 : null;
  
  let boxX = cnv.width * 0.55;
  rect(boxX, cnv.height/3, boxWidth, boxHeight);
  if (bWidth > cnv.width * 0.26) {
    image(mediaBar, cnv.width*0.285, cnv.height*0.55);
    image(activeImg, boxX - boxWidth/2 + (cnv.width * 0.018),  cnv.height/9, activeImg.width*cnv.width * 0.00025, activeImg.height*cnv.width*0.00025);
    noFill();
    fill(255,255,255);
    rectMode(CORNER);
    textAlign(LEFT);
    textSize(cnv.width * 0.01);
    let tX = boxX - boxWidth/2 + (activeImg.width*cnv.width * 0.00025) + cnv.width * 0.031;
    text(eval(activeObj).title + " (" + eval(activeObj).year + ")", tX, cnv.height/9, cnv.width * 0.25, cnv.width * 0.156);
    textWrap(WORD);
    text(eval(activeObj).des, tX, cnv.height/9 + cnv.width*0.016, cnv.width*0.25, cnv.width*0.24);
    // mediaButton.style('display', 'block');
  }
}
}

function drawConnections() {
  strokeWeight(cnv.width * 0.002);
  stroke(75, 190, 207, 10);
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
    initiate();
  }
  else {
    escape = false;
  }

  if (gameAct && keyCode === ESCAPE) {
    gameAct = false;
    chooseImg = false;
    ansPos = [];
    answers = [];
    imgSeq = [];
    imgNo = -1;
    points = 9;
    score = 0;
    ft = -1;
    r = [false, false, false, false, false, false, false, false, false];
    reveal.style('display', 'none');
    ans1.style('display', 'none');
    ans2.style('display', 'none');
    ans3.style('display', 'none');
    close.style('display', 'none');
    timeSpec.style('display', 'block');
    randomObj.style('display', 'block');
    searchbar.style('display', 'block');
    gameBarToggle.style('display', 'block');
    myGalleryBut.style('display', 'block');
    initiate();
  }
  if (galleryOpen && keyCode === ESCAPE) {
    galleryOpen = false;
    timeSpec.style('display', 'block');
    randomObj.style('display', 'block');
    searchbar.style('display', 'block');
    gameBarToggle.style('display', 'block');
    myGalleryBut.style('display', 'block');
    myGallery.style('display', 'block');
    initiate();
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
    // mediaButton.style('display', 'none');
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
  strokeWeight(cnv.width * 0.002);
  stroke(75, 190, 207, 10);
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
  this.style('background-color', '#EC6408');
}

function buttonColourOut () {
  this.style('background-color', 'black');
}

function timeColourOver () {
  if (timeOn) this.style('background-color', 'black');
  else this.style('background-color', '#EC6408');
}

function timeColourOut () {
  if (timeOn) this.style('background-color', '#EC6408');
  else this.style('background-color', 'black');
}

function activateGame () {
  this.style('display', 'none');
  timeSpec.style('display', 'none');
  randomObj.style('display', 'none');
  searchbar.style('display', 'none');
  gameBarToggle.style('display', 'none');
  myGalleryBut.style('display', 'none');
  gameSetup();
  gameAct = true;
}

function gameColourOver () {
  let gameAlpha = color(236,100,8,150);
  this.style('background-color', gameAlpha);
}

function gameColourOut () {
  let gameBC = color(0,0,0,0);
  this.style('background-color', gameBC);
}

function galleryBar () {
  if (galleryBarState) {
      imageMode(CORNER);
      image(galleryIcon, 0, cnv.width * 0.073, cnv.width*0.104, cnv.width*0.104);
  }
  else if (!galleryBarState) {
      imageMode(CORNER);
      image(galleryBarClosed, 0, cnv.width * 0.073, cnv.width*0.017);
  }
}

function gamesBar() {
  if (gameBarState) {
    imageMode(CORNER);
    image(gameBar, 0, cnv.height * 0.38, cnv.width*0.104);
  }
  else if (!gameBarState) {
    imageMode(CORNER);
    image(gameBarClosed, 0, cnv.height * 0.38, cnv.width*0.017);
    gameOn.style('display', 'none');
  }
}

function openGallery () {
  galleryOpen = true;
  timeSpec.style('display', 'none');
  randomObj.style('display', 'none');
  searchbar.style('display', 'none');
  gameBarToggle.style('display', 'none');
  gameOn.style('display', 'none');
  myGalleryBut.style('display', 'none');
  myGallery.style('display', 'none');
}

function openGalleryBar () {
  if (galleryBarState) {
    galleryBarState = false;
    myGallery.style('display', 'none');
  }
  else {
    galleryBarState = true;
    myGallery.style('display', 'block');
  }
  initiate();
}

function openGamebar () {
  gameBarState ? gameBarState = false : gameBarState = true;
  initiate();
}