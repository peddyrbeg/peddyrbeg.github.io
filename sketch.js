let map;
let activeImg;
let diam = 50;
let newDiam = diam;
let info = false;

function preload() {
  map = loadImage('uk.png');
  activeImg = loadImage('robot.jpg')
}

function setup() {
  createCanvas(2000,2000);
  image(map, 0, 0, 1000, 1000);
}

function draw() {
  // ellipse(500,300, 50, 50);
  // ellipse(1200,1400, 50, 50)
  fill(255, 0, 0, 100);
  stroke(200, 0, 0);

  // concentric circles
  if (newDiam > 0) {
    for (let i = 255; i > 0; i -= 51) {
      noFill();
      newDiam -= 10;

      strokeWeight(2);
      ellipse(600, 500, newDiam, newDiam);
      console.log (newDiam);
    }
  }
}

function mouseReleased() {
  information();
  // prevent default
  return false;
}

function information () {
  
  if (dist(600, 500, mouseX, mouseY) < diam && info == false) {
    info = true;
    fill(100, 100, 100, 200);
    stroke(0);
    let box = rect(600, 500, 400, 200);
    image(activeImg, 605, 505, activeImg.width/5, activeImg.height/5);
    noFill();
    rect(605, 505, activeImg.width/5, activeImg.height/5);
  }
  else if (dist(600, 500, mouseX, mouseY) < diam && info == true) {
    // pg = null;
    info = false;
    setup();
    newDiam = diam;
  }
}