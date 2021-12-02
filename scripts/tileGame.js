var cnvGame;

let amount = 3;
let state = [[],[]];
let r = [false, false, false, false, false, false, false, false, false];
let overR = [false, false, false, false, false, false, false, false, false];
let loc = [];
let img;
let points = 9;
let score = 0;
let highlightOn = false;
let ranPosX = [];
let ranPosY = [];
let ranPos = [];
let xFin = [];
let yFin = [];
let hn = 0;
let hrun1;
let hrun2;
let hrun3;
let speed = 200;
let f = 1;
let fn = 0;
let ft = -1;

let reveal;
let ans;
let ans1;
let ans2;
let ans3;
let ansNo = 0;
let close;

let green;
let darkGreen;

let correct = false;
let incorrect = false;

let imgSeq = [];
let chooseImg = false;
let imgNo = -1;

let ansPos = [];
let answers = [];
let wrAns1 = [];
let wrAns2 = [];
let wrAns3 = [];

function gameSetup () {
	cnvGame = createCanvas(displayWidth, displayWidth);
	setAns();
	imgSelect();
	currentImg();
	ans = answers[0];

	img.resize(0, cnvGame.height*.666*0.45);

	loc = [img.width*0.333, img.height*0.333];

	reveal = createButton('Reveal Square');
	reveal.size(cnvGame.width*0.33*0.5, cnvGame.width*0.08*0.5);
	reveal.position(cnvGame.width*.835*0.5, cnvGame.height*0.425);
	reveal.style('font-size', cnvGame.width * 0.0135 + 'px');
	reveal.style('background', 'black');
	reveal.style('color', 'white');
	reveal.style('border', 'transparent');
	reveal.mouseOver(revealOver);
	reveal.mouseOut(revealOut);
	reveal.mousePressed(highlightSwitch);

	green = color('#95C11F');
	darkGreen = color('#579204');

	if (ansPos[0] == 0) {
		ans1 = createButton(answers[0]);
	}
	else ans1 = createButton(wrAns1[0]);
	ans1.size(cnvGame.width * 0.333*0.5, cnvGame.width*0.166*0.5);
	ans1.position(cnvGame.width*0.245, cnvGame.height*0.72*0.455);
	ans1.style('font-size', cnvGame.width * 0.015 + 'px');
	ans1.style('text-align', 'center')
	ans1.style('padding', cnvGame.width * 0.02 + 'px');
	ans1.mouseOver(ansOver);
	ans1.mouseOut(ansOut);
	ans1.style('background', green);
	ans1.style('border', 'transparent');
	ans1.mousePressed(checkAns);

	if (ansPos[0] == 1) {
		ans2 = createButton(answers[0]);
	}
	else ans2 = createButton(wrAns2[0]);
	ans2.size(cnvGame.width * 0.333*0.5, cnvGame.width*0.166*0.5);
	ans2.position(cnvGame.width*0.4165, cnvGame.height*0.72*0.455);
	ans2.style('font-size', cnvGame.width * 0.015 + 'px');
	ans2.style('text-align', 'center')
	ans2.style('padding', cnvGame.width * 0.02 + 'px');
	ans2.mouseOver(ansOver);
	ans2.mouseOut(ansOut);
	ans2.style('background', green);
	ans2.style('border', 'transparent');
	ans2.mousePressed(checkAns);

	if (ansPos[0] == 2) {
		ans3 = createButton(answers[0]);
	}
	else ans3 = createButton(wrAns3[0]);
	ans3.size(cnvGame.width * 0.333*0.5, cnvGame.width*0.166*0.5);
	ans3.position(cnvGame.width*0.588, cnvGame.height*0.72*0.455);
	ans3.style('font-size', cnvGame.width * 0.015 + 'px');
	ans3.style('text-align', 'center')
	ans3.style('padding', cnvGame.width * 0.02 + 'px');
	ans3.mouseOver(ansOver);
	ans3.mouseOut(ansOut);
	ans3.style('background', green);
	ans3.style('border', 'transparent');
	ans3.mousePressed(checkAns);

	close = createButton('X');
	close.size(cnvGame.width*.05*0.5, cnvGame.width*.05*0.5);
	close.position(cnvGame.width*1.5*0.5, 0);
	close.style('font-size', cnvGame.width * 0.03 + 'px');
	close.style('text-align', 'center')
	close.style('display', 'none');
	close.mousePressed(closeGame);

	let ranSq = Math.floor(random(0, 9));
	r[ranSq] = true;
}

function gameDraw () {
	if (!highlightOn) {
		gameGradient();
		noFill();
		stroke(0);
		strokeWeight(2);
		rect(cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, img.width, img.height);
	}
	imageMode(CORNER);

	r[0] ? copy(img, 0, 0, loc[0], loc[1], cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;
	r[1] ? copy(img, loc[0], 0, loc[0], loc[1], loc[0] + cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;
	r[2] ? copy(img, loc[0]*2, 0, loc[0], loc[1], loc[0]*2 + cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;

	r[3] ? copy(img, 0, loc[1], loc[0], loc[1], cnvGame.width*0.5 - (img.width*0.5), loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;
	r[4] ? copy(img, loc[0], loc[1], loc[0], loc[1], loc[0] + cnvGame.width*0.5 - (img.width*0.5), loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;
	r[5] ? copy(img, loc[0]*2, loc[1], loc[0], loc[1], loc[0]*2 + cnvGame.width*0.5 - (img.width*0.5), loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;

	r[6] ? copy(img, 0, loc[1]*2, loc[0], loc[1], cnvGame.width*0.5 - (img.width*0.5), loc[1]*2+cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;
	r[7] ? copy(img, loc[0], loc[1]*2, loc[0], loc[1], loc[0] + cnvGame.width*0.5 - (img.width*0.5), loc[1]*2+cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;
	r[8] ? copy(img, loc[0]*2, loc[1]*2, loc[0], loc[1], loc[0]*2 + cnvGame.width*0.5 - (img.width*0.5), loc[1]*2+cnvGame.height*0.03*0.45, loc[0], loc[1]) : null;

	layout();

	if (correct) {
		gameGradient();
		noFill();
		stroke(0);
		strokeWeight(2);
rect(cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, img.width, img.height);
		layout();
		
		imageMode(CENTER)

		copy(img, 0, 0, loc[0], loc[1], cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, loc[0], loc[1]);
		copy(img, loc[0], 0, loc[0], loc[1], loc[0]+cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, loc[0], loc[1]);
		copy(img, loc[0]*2, 0, loc[0], loc[1], loc[0]*2+cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, loc[0], loc[1]);

		copy(img, 0, loc[1], loc[0], loc[1], cnvGame.width*0.5 - (img.width*0.5), loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]);
		copy(img, loc[0], loc[1], loc[0], loc[1], loc[0]+cnvGame.width*0.5 - (img.width*0.5), loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]);
		copy(img, loc[0]*2, loc[1], loc[0], loc[1], loc[0]*2+cnvGame.width*0.5 - (img.width*0.5), loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]);

		copy(img, 0, loc[1]*2, loc[0], loc[1], cnvGame.width*0.5 - (img.width*0.5), loc[1]*2+cnvGame.height*0.03*0.45, loc[0], loc[1]);
		copy(img, loc[0], loc[1]*2, loc[0], loc[1], loc[0]+cnvGame.width*0.5 - (img.width*0.5), loc[1]*2+cnvGame.height*0.03*0.45, loc[0], loc[1]);
		copy(img, loc[0]*2, loc[1]*2, loc[0], loc[1], loc[0]*2+cnvGame.width*0.5 - (img.width*0.5), loc[1]*2+cnvGame.height*0.03*0.45, loc[0], loc[1]);
	
		fill('#4BBECF');
		textSize(cnvGame.width*0.06*0.5);
		text("CORRECT!", cnvGame.width*0.43, loc[1]*1.25, loc[0], loc[1]);
	}

	if (incorrect) {
		gameGradient();
				noFill();
		stroke(0);
		strokeWeight(2);
		rect(cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, img.width, img.height);
		layout();
		fill(255);
		textSize(cnvGame.width*0.03);
		text("INCORRECT!", cnvGame.width*.42, loc[1]*1.25, loc[0], loc[1]);
	}
}

function layout () {
	fill(230);
	noStroke();
	textSize(cnvGame.width * 0.013);
	textAlign(LEFT);
	text("Remaining points: " + points, cnvGame.width*0.27, cnvGame.height*0.44, cnvGame.width*0.7*0.55, cnvGame.width*0.2*0.55);
	text("Score: "+ score, cnvGame.width * 0.64, cnvGame.height*0.44, cnvGame.width*0.1, cnvGame.width*0.2*0.55);
}

function setAns () {
	while (ansPos.length < 15) {
		let r = Math.floor(random(0, 3));
		ansPos.push(r);
	}
}

function imgSelect () {
	while (imgSeq.length < 15) {
		let r = Math.floor(random(0, 15));
		if (imgSeq.indexOf(r) === -1) imgSeq.push(r);
	}
	imgSet();
}

function imgSet () {
	for (let i = 0; i < imgSeq.length; i++) {
		if (imgSeq[i] == anschutzTachyscopeObj.index) {
			imgSeq[i] = "anschutzTachyscopeImg";
			answers.push("Anschutz Tachyscope");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == attackRobotObj.index) {
			imgSeq[i] = "attackRobotImg";
			answers.push("Attack Robot");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("Dr Who Spaceship");
		}
		if (imgSeq[i] == boxfootObj.index) {
			imgSeq[i] = "boxfootImg";
			answers.push("Boxfoot Microscope");
			wrAns1.push("Infant Doll");
			wrAns2.push("Clay Toy Tankard");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == drWhoSpaceshipObj.index) {
			imgSeq[i] = "drWhoSpaceshipImg";
			answers.push("Dr Who Spaceship");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == infantDollObj.index) {
			imgSeq[i] = "infantDollImg";
			answers.push("Infant Doll");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == kitObj.index) {
			imgSeq[i] = "kitImg";
			answers.push("Kit the Kat");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == microscopeObj.index) {
			imgSeq[i] = "microscopeImg";
			answers.push("French Toy Microscope");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("Kit the Kat");
		}
		if (imgSeq[i] == phenakistoscopeObj.index) {
			imgSeq[i] = "phenakistoscopeImg";
			answers.push("Phenakistoscope");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Television Spaceman Robot");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == robotObj.index) {
			imgSeq[i] = "robotImg";
			answers.push("Television Spaceman Robot");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == starTrekCommObj.index) {
			imgSeq[i] = "starTrekCommImg";
			answers.push("Star Trek Communicator");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == tankardObj.index) {
			imgSeq[i] = "tankardImg";
			answers.push("Clay Toy Tankard");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == teddyObj.index) {
			imgSeq[i] = "teddyImg";
			answers.push("Steiff Teddy Bear");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == thomasTankObj.index) {
			imgSeq[i] = "thomasTankImg";
			answers.push("Thomas the tank Engine");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == worldTechniqueObj.index) {
			imgSeq[i] = "worldTechniqueImg";
			answers.push("Lowenfeld's Toys");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
		if (imgSeq[i] == zenoR25Obj.index) {
			imgSeq[i] = "zenoR25Img";
			answers.push("Zeno R25");
			wrAns1.push("Boxfoot Microscope");
			wrAns2.push("Phenakistoscope");
			wrAns3.push("French Toy Microscope");
		}
	}
}

function currentImg () {
	imgNo++;
	img = eval(imgSeq[imgNo]);
	img.resize(0, cnvGame.height*.666*0.45);
	loc = [img.width*0.333, img.height*0.333];
}

function highlightSwitch () {
	!highlightOn && ft < 8 ? intervalHighlight() : null;
}

function intervalHighlight () {
	highlightOn = true;
	points--;
	if (ft < 7) {
		while (ranPos.length < 13) {
		let ran = Math.floor(random(0, 9));
		if (r[0] && ran == 0) {
			ranPos = ranPos;
		}
		else if (r[1] && ran == 1) {
			ranPos = ranPos;
		}
		else if (r[2] && ran == 2) {
			ranPos = ranPos;
		}
		else if (r[3] && ran == 3) {
			ranPos = ranPos;
		}
		else if (r[4] && ran == 4) {
			ranPos = ranPos;
		}
		else if (r[5] && ran == 5) {
			ranPos = ranPos;
		}
		else if (r[6] && ran == 6) {
			ranPos = ranPos;
		}
		else if (r[7] && ran == 7) {
			ranPos = ranPos;
		}
		else if (r[8] && ran == 8) {
			ranPos = ranPos;
		}
		else {
			if (ran != ranPos[ranPos.length-1]) ranPos.push(ran);
		}
		}
	}
	else {
		while (ranPos.length < 13) {
		let ran = Math.floor(random(0, 9));
			if (r[0] && ran == 0) {
				ranPos = ranPos;
			}
			else if (r[1] && ran == 1) {
				ranPos = ranPos;
			}
			else if (r[2] && ran == 2) {
				ranPos = ranPos;
			}
			else if (r[3] && ran == 3) {
				ranPos = ranPos;
			}
			else if (r[4] && ran == 4) {
				ranPos = ranPos;
			}
			else if (r[5] && ran == 5) {
				ranPos = ranPos;
			}
			else if (r[6] && ran == 6) {
				ranPos = ranPos;
			}
			else if (r[7] && ran == 7) {
				ranPos = ranPos;
			}
			else if (r[8] && ran == 8) {
				ranPos = ranPos;
			}
			else {
				ranPos.push(ran);
			}
		}
		}
	for (let j = 0; j < ranPos.length; j++) {
		ranPos[j] == 0 ? ranPos[j] = [0, 0] : null;
		ranPos[j] == 1 ? ranPos[j] = [1, 0] : null;
		ranPos[j] == 2 ? ranPos[j] = [2, 0] : null;
		ranPos[j] == 3 ? ranPos[j] = [0, 1] : null;
		ranPos[j] == 4 ? ranPos[j] = [1, 1] : null;
		ranPos[j] == 5 ? ranPos[j] = [2, 1] : null;
		ranPos[j] == 6 ? ranPos[j] = [0, 2] : null;
		ranPos[j] == 7 ? ranPos[j] = [1, 2] : null;
		ranPos[j] == 8 ? ranPos[j] = [2, 2] : null;
	}

	while (xFin.length < 9) {
		let ranFin = Math.floor(random(0, 9));
		if (xFin.indexOf(ranFin) === -1) xFin.push(ranFin);
	}
	for (let i = 0; i < xFin.length; i++) {
		xFin[i] == 0 ? xFin[i] = [0, 0] : null;
		xFin[i] == 1 ? xFin[i] = [1, 0] : null;
		xFin[i] == 2 ? xFin[i] = [2, 0] : null;
		xFin[i] == 3 ? xFin[i] = [0, 1] : null;
		xFin[i] == 4 ? xFin[i] = [1, 1] : null;
		xFin[i] == 5 ? xFin[i] = [2, 1] : null;
		xFin[i] == 6 ? xFin[i] = [0, 2] : null;
		xFin[i] == 7 ? xFin[i] = [1, 2] : null;
		xFin[i] == 8 ? xFin[i] = [2, 2] : null;
	}
	hrun1 = setInterval(runHighlightFast, 100);
	ft++;
}

function runHighlightFast () {
	if (hn < 12) {
		gameGradient();
		noFill();
		stroke(0);
		strokeWeight(2);
		rect(cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, img.width, img.height);
		fill(255);
		noStroke();
		rect(ranPos[hn][0]*loc[0] + cnvGame.width * 0.5 - (img.width*0.5), ranPos[hn][1]*loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]);
		hn++;
	}
	else {
		clearInterval(hrun1);
		hrun2 = setInterval(runHighlightMedium, 1000);
	}
}

function runHighlightMedium () {
		if (hn < 13) {
		gameGradient();
		noFill();
		stroke(0);
		strokeWeight(2);
		rect(cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, img.width, img.height);
		fill(255);
		noStroke();
		rect(ranPos[hn][0]*loc[0] + cnvGame.width * 0.5 - (img.width*0.5), ranPos[hn][1]*loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]);
		hn++;
	}
	else {
		clearInterval(hrun2);
		hrun3 = setInterval(runHighlightSlow, 200);
	}
}

function runHighlightSlow () {
	if (fn < 6) {
		gameGradient();
		noFill();
		stroke(0);
		strokeWeight(2);
		rect(cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, img.width, img.height);
		if (f == 0) {
			fill(255);
			f = 1;
		}
		else {
			fill(0, 0, 0, 0);
			f = 0;
		}
		noStroke();
		rect(xFin[ft][0]*loc[0] + cnvGame.width * 0.5 - (img.width*0.5), xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45, loc[0], loc[1]);
		fn++;
	}
	else {
		clearInterval(hrun3);
		gameGradient();
		noFill();
		stroke(0);
		strokeWeight(2);
		rect(cnvGame.width*0.5 - (img.width*0.5), cnvGame.height*0.03*0.45, img.width, img.height);

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5)  == cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == cnvGame.height*0.03*0.45) {
			r[0] = true;
		}

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) == loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == cnvGame.height*0.03*0.45) {
			r[1] = true;
		}

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) == loc[0]*2+ cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == cnvGame.height*0.03*0.45) {
			r[2] = true;
		}

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) == cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == loc[1]+cnvGame.height*0.03*0.45) {
			r[3] = true;
		}

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) == loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == loc[1]+cnvGame.height*0.03*0.45) {
			r[4] = true;
		}

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) == loc[0]*2+ cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == loc[1]+cnvGame.height*0.03*0.45) {
			r[5] = true;
		}

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) == cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == loc[1]*2+cnvGame.height*0.03*0.45) {
			r[6] = true;
		}

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) == loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == loc[1]*2+cnvGame.height*0.03*0.45) {
			r[7] = true;
		}

		if (xFin[ft][0]*loc[0]+ cnvGame.width * 0.5 - (img.width*0.5) == loc[0]*2+ cnvGame.width * 0.5 - (img.width*0.5) && xFin[ft][1]*loc[1]+cnvGame.height*0.03*0.45 == loc[1]*2+cnvGame.height*0.03*0.45) {
			r[8] = true;
		}
		ranPos = [];
		hn = 0;
		fn = 0;
		highlightOn = false;
	}
}

function revealOver () {
	this.style('background-color', '#EC6408');
}

function revealOut () {
	this.style('background', 'black');
}

function ansOver () {
  this.style('background-color', darkGreen);
}

function ansOut () {
  this.style('background-color', green);
}

function checkAns () {
	if (this.elt.outerText == ans) {
		if (!correct) {
			correct = true;
			score = score + points;
			ansNo++;
   		ans = answers[ansNo];
   		ft = -1;
			setTimeout(function() {
				currentImg();
				buttonChange();
				points = 9;
   		 	correct = false;
   		 	r = [false, false, false, false, false, false, false, false, false];
   		 	let ranSq = Math.floor(random(0, 9));
				r[ranSq] = true;
			}, 1000);
		}
		else correct = false;
	}
	else if (this.elt.outerText != ans && !correct) {
		incorrect = true;
		setTimeout(function() {
			points = points - 3;
   		 	incorrect = false;
   		 	//load new image
		}, 1000);
	}
}

function buttonChange () {
	ans1.remove();
	if (ansPos[imgNo] == 0) {
		ans1 = createButton(answers[imgNo]);
	}
	else ans1 = createButton(wrAns1[imgNo]);
	ans1.size(cnvGame.width * 0.333*0.5, cnvGame.width*0.166*0.5);
	ans1.position(cnvGame.width*0.5*0.5, cnvGame.height*0.72*0.455);
	ans1.style('font-size', cnvGame.width * 0.015 + 'px');
	ans1.style('text-align', 'center')
	ans1.style('padding', cnvGame.width * 0.02 + 'px');
	ans1.mouseOver(ansOver);
	ans1.mouseOut(ansOut);
	ans1.style('background', green);
	ans1.style('border', 'transparent');
	ans1.mousePressed(checkAns);


	ans2.remove();
	if (ansPos[imgNo] == 1) {
		ans2 = createButton(answers[imgNo]);
	}
	else ans2 = createButton(wrAns2[imgNo]);
	ans2.size(cnvGame.width * 0.333*0.5, cnvGame.width*0.166*0.5);
	ans2.position(cnvGame.width*0.833*0.5, cnvGame.height*0.72*0.455);
	ans2.style('font-size', cnvGame.width * 0.015 + 'px');
	ans2.style('text-align', 'center')
	ans2.style('padding', cnvGame.width * 0.02 + 'px');
	ans2.mouseOver(ansOver);
	ans2.mouseOut(ansOut);
	ans2.style('background', green);
	ans2.style('border', 'transparent');
	ans2.mousePressed(checkAns);

	ans3.remove();
	if (ansPos[imgNo] == 2) {
		ans3 = createButton(answers[imgNo]);
	}
	else ans3 = createButton(wrAns3[imgNo]);
	ans3.size(cnvGame.width * 0.333*0.5, cnvGame.width*0.166*0.5);
	ans3.position(cnvGame.width*1.166*0.5, cnvGame.height*0.72*0.455);
	ans3.style('font-size', cnvGame.width * 0.015 + 'px');
	ans3.style('text-align', 'center')
	ans3.style('padding', cnvGame.width * 0.02 + 'px');
	ans3.mouseOver(ansOver);
	ans3.mouseOut(ansOut);
	ans3.style('background', green);
	ans3.style('border', 'transparent');
	ans3.mousePressed(checkAns);
}

function closeGame () {
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
    myGallery.style('display', 'block');
    initiate();
}