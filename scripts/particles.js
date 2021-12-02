class Particle {

	constructor(x, y, r) {

	}

	distance () {
		// let d = distance(this.x, this.y, other.x, other.y);
		// if (d < 200) {
		// 	return true;
		// }
		// else return false;
	}
}

class Agent {
	constructor () {
		this.x = random(displayWidth);
		this.y = random(displayHeight);
		this.velx = random(-1, 1);
		this.vely = random(-1, 1); 
		this.r = random(4, 18);
	}
	
	display () {
		this.x = this.x + this.velx;
		this.y = this.y + this.vely;
		stroke(255);
		strokeWeight(5);
		ellipse(this.x, this.y, this.r);
		
		strokeWeight(1);
		for (let i = 0; i < agents.length; i++) {
    		const agent = agents[i];

    		for (let j = i + 1; j < agents.length; j++) {
      			const other = agents[j];

      			if (dist(this.x, this.y, other.x, other.y) < displayWidth*0.1) {
      				line(this.x, this.y, other.x, other.y);
      			}
    		}
  		}
	}
}