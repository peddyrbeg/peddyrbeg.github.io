let diam = 10;
let lockC1 = false;
let lockC2 = false;
let lockC3 = false;
let lockC4 = false;
let lockC5 = false;
let lockC6 = false;
let lockC7 = false;
let catSel = ["","","","","","","",];
let locksOn = ["cinematography","robotics","local","microscopy","materials","psychology","space"];
let locksCount = 0;

class Point {
	constructor(x, y, name, tag) {
		this.x = x;
		this.y = y;
		this.name = name;
		this.tag = tag;
	}

	display() {
		fill(200);
		strokeWeight(0);
		let circle = ellipse(this.x, this.y, diam);
		if (dist(this.x, this.y, mouseX, mouseY) < diam && box == false) {
			fill(0, 100, 100, 100);
			ellipse(this.x, this.y, diam);
			activeObj = this.name;
			activeImg = window[this.tag];
			eval(activeObj).hover = true;
			relObj = [];
			for (let i = 0; relObj.length < eval(activeObj).related.length; i++) {
				eval(activeObj).related.forEach(element => relObj.push(element));
			}
			drawConnections();
		}
		else {
			if (eval(this.name).hover) {
				eval(this.name).hover = false;
				startLine = false;
				resetAnim();
				box == false ? initiate() : null;
			}
		}
		if (escape == true) {
			information();
		}
		timeline();
		chooseRando ? this.randoSize() : null;
	}

	fade () {
		let thisYear = eval(this.name).year;
		if ((year > thisYear - 10 && year < thisYear - 3) || (year < thisYear + 10 && year > thisYear + 3)) {
			let bright1 = (thisYear-(year-10))*25.5;
			let bright2 = (thisYear-(year+10))*25.5;
		
			year > thisYear ? fill(200, 200, 200, bright1) : fill(200, 200, 200, -bright2);
		
			let size1 = (thisYear-(year-10))*2;
			let size2 = (thisYear-(year+10))*2;
			year > thisYear ? ellipse(this.x, this.y, size1) : ellipse(this.x, this.y, size2);
		}
		else if (year > thisYear - 3 && year < thisYear + 3) {
			this.display();
		}
	}

	categoryFilter () {
		lockC1 ? catSel[0] = locksOn[0] : null;
		lockC2 ? catSel[1] = locksOn[1] : null;
		lockC3 ? catSel[2] = locksOn[2] : null;
		lockC4 ? catSel[3] = locksOn[3] : null;
		lockC5 ? catSel[4] = locksOn[4] : null;
		lockC6 ? catSel[5] = locksOn[5] : null;
		lockC7 ? catSel[6] = locksOn[6] : null;

		for (let k = 0; k < catSel.length; k++) {
			if (eval(this.name).category == catSel[k]) {
				this.display();
			}
			else {
				strokeWeight(0);
				fill(0, 0, 0, 0);
				ellipse(this.x, this.y, diam);
			}
		}
	}

	randoSize() {
		if (eval(this.name).index == randomNo) {
			fill(75, 190, 207, 255);
			ellipse(this.x, this.y, diam*2.5);
			randoIt % 20 ? null : initiate();
		}
		if (randoIt == 100 && randomNo == eval(this.name).index) {
			activeObj = this.name;
			activeImg = window[this.tag];
			eval(activeObj).hover = true;
			relObj = [];
			for (let i = 0; relObj.length < eval(activeObj).related.length; i++) {
				eval(activeObj).related.forEach(element => relObj.push(element));
			information();
			}
		}
	}
}
