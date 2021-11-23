let lineLen = 600;
let lineStX = screen.width/2 - lineLen/2;
let lineY = 700;
let lineEnd = lineStX + lineLen;
let lineDiv = lineLen / 7;
let textSt = lineStX - 10;
let textY = lineY + 15;
let lastMX = lineStX;
let mouseMoved = false;
let dynX;
let overSl = false;
let slideSens = 30;
let over;
let timelineOn = false;

function timeline() {

	strokeWeight(2);
	timeOn ? stroke(150) : stroke(50);
	line(lineStX, lineY, lineEnd, lineY);

	strokeWeight(0);
	textSize(12);
	textAlign(LEFT);
	timeOn ? fill(150) : fill(50);
	text("1950", textSt, textY);
	text("1960", textSt + lineDiv, textY);
	text("1970", textSt + 2 * lineDiv, textY);
	text("1980", textSt + 3 * lineDiv, textY);
	text("1990", textSt + 4 * lineDiv, textY);
	text("2000", textSt + 5 * lineDiv, textY);
	text("2010", textSt + 6 * lineDiv, textY);
	text("2020", textSt + 7 * lineDiv, textY);
}

function slider() {

	dynanicX();
	rectMode(CENTER);
	strokeWeight(0);
	if (mouseMoved == false) {
		timeOn ? fill(150) : fill(50);
		rect(lineStX, lineY, 10, 30);
	}
	if (timeOn) {
	if (mouseIsPressed && overSl) {
		mouseMoved = true;
		if (mouseX >= lineStX && mouseX <= lineEnd) {
			cleanLine();
			rect(mouseX, lineY, 10, 30);
			lastMX = mouseX;
			overSlider();
			trackYear();
		}
		else if (mouseX >= lineEnd) {
			rect(lineEnd, lineY, 10, 30);
		}
		else if (mouseX <= lineStX) {;
			rect(lineStX, lineY, 10, 30);
		}
	}
	else if (mouseIsPressed == false && mouseMoved == true) {
		cleanLine();
		overSlider();
	}
}
	overSlider();
}

function dynanicX() {
	if (mouseX > lineStX && mouseX < lineEnd) {
		dynX = mouseX;
	}
	else if (mouseX > lineEnd) {
		dynX = lineEnd;
	}
	else if (mouseX < lineStX || dynX == lineStX) {
		dynX = lineStX;
	}
}

function overSlider() {
	if (mouseMoved == false) {
		if (dist(mouseX, mouseY, lineStX, lineY) < slideSens && timeOn) {
			overSl = true;
			fill(200);
			rect(lineStX, lineY, 10, 30);
		}
		else {
			overSl = false;
		}
	}
	else if (mouseMoved) {
		if (dist(mouseX, mouseY, lastMX, lineY) < slideSens && timeOn) {
			overSl = true;
			fill(200);
			rect(lastMX, lineY, 10, 30);
		}
		else {
			timeOn ? fill(150) : fill(50);
			rect(lastMX, lineY, 10, 30)
			overSl = false;
		}
	}
}

function trackYear () {
	year = 1950 + ((lastMX - lineStX)*(1/(lineLen / 70)));
}

function timeSwitch() {
	initiate();
  	timeOn ? timeOn = false : timeOn = true;
  	timeline();
}

function cleanLine () {
	initiate();
	timeline();
}