let lineStX = 200;
let lineY = 1000;
let lineLen = 600;
let lineEnd = lineStX + lineLen;
let lineDiv = lineLen / 7;
let textSt = lineStX - 10;
let textY = lineY + 15;
let lastMX = lineStX;
let mouseMoved = false;
let dynX;
let overSl = false;
let slideSens = 30;

function timeline() {
	strokeWeight(2);
	timeOn ? stroke(0) : stroke(150);
	line(lineStX, lineY, lineEnd, lineY);

	strokeWeight(0);
	timeOn ? fill(0) : fill(150);
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
	if (timeOn){
	dynanicX();
	rectMode(CENTER);
	strokeWeight(0);
	if (mouseMoved == false) {
		timeOn ? fill(100) : fill(150);
		rect(lineStX, lineY, 10, 30);
	}
	if (mouseIsPressed && overSl) {
		mouseMoved = true;
		initiate();
		fill(100);
		if (mouseX > lineStX && mouseX < lineEnd) {
			rect(dynX, lineY, 10, 30);
			lastMX = mouseX;
			overSlider();
			trackYear();
		}
		else if (mouseX > lineEnd) {
			rect(lineEnd, lineY, 10, 30);
		}
		else if (mouseX < lineStX) {
			rect(lineStX, lineY, 10, 30);
		}
	}
	else if (mouseIsPressed == false && mouseMoved == true) {
		initiate();
		fill(100);
		rect(lastMX, 1000, 10, 30);
		overSlider();
	}
	overSlider();
}
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
	// else dynX = lastMx;
}

function overSlider() {
	fill(150);
	if (mouseMoved == false) {
		if (dist(mouseX, mouseY, lineStX, lineY) < slideSens) {
			overSl = true;
			fill(150);
			rect(lineStX, lineY, 10, 30);
		}
		else overSl = false;
	}
	else if (mouseMoved) {
		if (dist(mouseX, mouseY, lastMX, lineY) < slideSens) {
			overSl = true;
			fill(150);
			rect(lastMX, lineY, 10, 30);
		}
		else overSl = false;
	}
}

function trackYear () {
	year = 1950 + ((lastMX - lineStX)*(1/(lineLen / 70)));
}