let lineLen;
let lineStX;
let lineY;
let lineEnd;
let lineDiv;
let textSt;
let textY;
let lastMX;
let mouseMoved = false;
let overSl = false;
let slideSens;
let over;
let timelineOn = false;

function timeline() {
	lineLen = cnv.width * 0.3125;
	lineStX = cnv.width/2 - lineLen/2;
	lineY = cnv.width * 0.4;
	lineEnd = lineStX + lineLen;
	lineDiv = lineLen / 7;
	textSt = lineStX - 10;
	textY = lineY + 15;
	slideSens = cnv.width * 0.015;

	strokeWeight(cnv.width * 0.001);
	timeOn ? stroke('#EC6408') : stroke(0);
	line(lineStX, lineY, lineEnd, lineY);

	strokeWeight(0);
	textSize(cnv.width*0.006);
	textAlign(LEFT);
	timeOn ? fill('#EC6408') : fill(0);
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

	rectMode(CENTER);
	strokeWeight(0);
	if (mouseMoved == false) {
		timeOn ? fill('#EC6408') : fill(0);
		rect(lineStX, lineY, cnv.width * 0.005, cnv.width * 0.016);
	}
	if (timeOn) {
	if (mouseIsPressed && overSl) {
		mouseMoved = true;
		if (mouseX >= lineStX && mouseX <= lineEnd) {
			cleanLine();
			rect(mouseX, lineY, cnv.width * 0.005, cnv.width * 0.016);
			lastMX = mouseX;
			overSlider();
			trackYear();
		}
		else if (mouseX >= lineEnd) {
			rect(lineEnd, lineY, cnv.width * 0.005, cnv.width * 0.016);
		}
		else if (mouseX <= lineStX) {;
			rect(lineStX, lineY, cnv.width * 0.005, cnv.width * 0.016);
		}
	}
	else if (mouseIsPressed == false && mouseMoved == true) {
		cleanLine();
		overSlider();
	}
	else if (!mouseIsPressed) {
		rect(lineStX, lineY, cnv.width * 0.005, cnv.width * 0.016);
	}
}
	overSlider();
}

function overSlider() {
	if (mouseMoved == false) {
		if (dist(mouseX, mouseY, lineStX, lineY) < slideSens && timeOn) {
			overSl = true;
			fill('#F2995C');
			rect(lineStX, lineY, cnv.width * 0.005, cnv.width * 0.016);
		}
		else {
			overSl = false;
		}
	}
	else if (mouseMoved) {
		if (dist(mouseX, mouseY, lastMX, lineY) < slideSens && timeOn) {
			overSl = true;
			fill('#F2995C');
			rect(lastMX, lineY, cnv.width * 0.005, cnv.width * 0.016);
		}
		else {
			timeOn ? fill('#EC6408') : fill(0);
			rect(lastMX, lineY, cnv.width * 0.005, cnv.width * 0.016)
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