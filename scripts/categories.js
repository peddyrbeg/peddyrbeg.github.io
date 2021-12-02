let gap;
let listSt;
let barWidth;
let textSpacer;

let c1 = false;
let c2 = false;
let c3 = false;
let c4 = false;
let c5 = false;
let c6 = false;
let c7 = false;

function categories () {
	gap = cnv.width * 0.02;
	listSt = cnv.width * 0.18;
	barWidth = cnv.width * 0.104;
	textSpacer = cnv.width * 0.013;

	fill(255);
	rectMode(CORNER);
	noStroke();
	rect(cnv.width, listSt-textSpacer-1.25*gap, -barWidth, gap*1.25);
	image(filterIcon, cnv.width*0.905, cnv.height*0.265, filterIcon.width*cnv.width*0.0003, filterIcon.height*cnv.width*0.0003);
//1	
	if ((mouseX > cnv.width-barWidth) && (mouseX < cnv.width) &&
    	(mouseY > listSt-textSpacer) && (mouseY < listSt-textSpacer + gap)) {
		c1 = true;
	}
	else c1 = false;

	if (c1 || lockC1) {
		fill(0,0,0);
		rect(cnv.width, listSt-textSpacer, -barWidth, gap);
		fill('#EC6408');
		rect(cnv.width, listSt-textSpacer, -barWidth + textSpacer, gap);
	}
	else {
		fill(0);
		rect(cnv.width, listSt-textSpacer, -barWidth, gap);
	}
//2
	if ((mouseX > cnv.width-barWidth) && (mouseX < cnv.width) &&
    	(mouseY > listSt-textSpacer + gap) && (mouseY < listSt-textSpacer + gap * 2)) {
		c2 = true;
	}
	else c2 = false;

    if (c2 || lockC2) {
		fill(0,0,0);
		rect(cnv.width, listSt-textSpacer+gap, -barWidth, gap);
		fill('#EC6408');
		rect(cnv.width, listSt-textSpacer+gap, -barWidth + textSpacer, gap);;
	}
	else {
		fill(0);
		rect(cnv.width, listSt-textSpacer+gap, -barWidth, gap);;
	}
//3	
	if ((mouseX > cnv.width-barWidth) && (mouseX < cnv.width) &&
    	(mouseY > listSt-textSpacer + gap * 2) && (mouseY < listSt-textSpacer + gap * 3)) {
		c3 = true;
	}
	else c3 = false;

    if (c3 || lockC3) {
		fill(0,0,0);
		rect(cnv.width, listSt-textSpacer+gap*2, -barWidth, gap);
		fill('#EC6408');
		rect(cnv.width, listSt-textSpacer+gap*2, -barWidth + textSpacer, gap);
	}
	else {
		fill(0);
		rect(cnv.width, listSt-textSpacer+gap*2, -barWidth, gap);
	}
//4
	if ((mouseX > cnv.width-barWidth) && (mouseX < cnv.width) &&
    	(mouseY > listSt-textSpacer + gap  * 3) && (mouseY < listSt-textSpacer + gap * 4)) {
		c4 = true;
	}
	else c4 = false;

    if (c4 || lockC4) {
		fill(0,0,0);
		rect(cnv.width, listSt-textSpacer+gap*3, -barWidth, gap);
		fill('#EC6408');
		rect(cnv.width, listSt-textSpacer+gap*3, -barWidth + textSpacer, gap);
	}
	else {
		fill(0);
		rect(cnv.width, listSt-textSpacer+gap*3, -barWidth, gap);
	}
//5
	if ((mouseX > cnv.width-barWidth) && (mouseX < cnv.width) &&
    	(mouseY > listSt-textSpacer + gap * 4) && (mouseY < listSt-textSpacer + gap * 5)) {
		c5 = true;
	}
	else c5 = false;
    
    if (c5 || lockC5) {
		fill(0,0,0);
		rect(cnv.width, listSt-textSpacer+gap*4, -barWidth, gap);
		fill('#EC6408');
		rect(cnv.width, listSt-textSpacer+gap*4, -barWidth + textSpacer, gap);
	}
	else {
		fill(0);
		rect(cnv.width, listSt-textSpacer+gap*4, -barWidth, gap);
	}
//6
	if ((mouseX > cnv.width-barWidth) && (mouseX < cnv.width) &&
    	(mouseY > listSt-textSpacer + gap * 5) && (mouseY < listSt-textSpacer + gap * 6)) {
		c6 = true;
	}
	else c6 = false;

    if (c6 || lockC6) {
		fill(0,0,0);
		rect(cnv.width, listSt-textSpacer+gap*5, -barWidth, gap);
		fill('#EC6408');
		rect(cnv.width, listSt-textSpacer+gap*5, -barWidth + textSpacer, gap);
	}
	else {
		fill(0);
		rect(cnv.width, listSt-textSpacer+gap*5, -barWidth, gap);
	}
//7	
	if ((mouseX > cnv.width-barWidth) && (mouseX < cnv.width) &&
    	(mouseY > listSt-textSpacer + gap * 6) && (mouseY < listSt-textSpacer + gap * 7)) {
		c7 = true;
	}
	else c7 = false;

    if (c7 || lockC7) {
		fill(0,0,0);
		rect(cnv.width, listSt-textSpacer+gap*6, -barWidth, gap);
		fill('#EC6408');
		rect(cnv.width, listSt-textSpacer+gap*6, -barWidth + textSpacer, gap);
	}
	else {
		fill(0);
		rect(cnv.width, listSt-textSpacer+gap*6, -barWidth, gap);
	}

	strokeWeight(0);
	textSize(cnv.width * 0.008);
	textAlign(CENTER);
	fill(0);
	text("CATEGORIES", cnv.width - (cnv.width * 0.055), listSt - (cnv.width * 0.022));
	fill(255);
	textAlign(LEFT);
	c1 || lockC1 ? text("Cinematography", cnv.width - (cnv.width*0.083), listSt) : text("Cinematography", cnv.width - (cnv.width * 0.094), listSt);
	c2 || lockC2 ? text("Human Robotics", cnv.width - (cnv.width*0.083), listSt + gap) : text("Human Robotics", cnv.width - (cnv.width * 0.094), listSt + gap);
	c3 || lockC3 ? text("Local History", cnv.width - (cnv.width*0.083), listSt + gap * 2) : text("Local History", cnv.width - (cnv.width * 0.094), listSt + gap * 2);
	c4 || lockC4 ? text("Microscopy", cnv.width - (cnv.width*0.083), listSt + gap * 3) : text("Microscopy", cnv.width - (cnv.width * 0.094), listSt + gap * 3);
	c5 || lockC5 ? text("Material Sciences", cnv.width - (cnv.width*0.083), listSt + gap * 4) : text("Material Sciences", cnv.width - (cnv.width * 0.094), listSt + gap * 4);
	c6 || lockC6 ? text("Psychology", cnv.width - (cnv.width*0.083), listSt + gap * 5) : text("Psychology", cnv.width - (cnv.width * 0.094), listSt + gap * 5);
	c7 || lockC7 ? text("Space Technology", cnv.width - (cnv.width*0.083), listSt + gap * 6) : text("Space Technology", cnv.width - (cnv.width * 0.094), listSt + gap * 6);
}