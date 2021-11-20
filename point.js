let diam = 20;

class Point {
	constructor(x, y, name, tag) {
		this.x = x;
		this.y = y;
		this.name = name;
		this.tag = tag;
	}

	display() {
		fill(255, 0, 0);
		strokeWeight(0);
		let circle = ellipse(this.x, this.y, diam);
		if (dist(this.x, this.y, mouseX, mouseY) < diam) {
			fill(255, 200, 200);
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
				initiate();
				eval(this.name).hover = false;
				fill(255, 0, 0);
				info = false;
				box = false;
				initiate();
			}
		}
	}
}
