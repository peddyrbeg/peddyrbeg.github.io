let widthCh = false;
let bWidth;
let balpha;

let sarahN = "sarah_m"
let sarahTx = "So cool! I used to have one of these. I would take it everywhere with me. Would love to buy one again! I think I saw one on eBay the other day and it wasn't very expensive. It used to do all sorts of awesome things."

let mikeN = "mikey_mike";
let mikeTx = "Yeah, I love these! I used to take mine to the shops every Saturday. I lost it on one trip. :(";

let catrionaN = "catriona_s";
let catrionaTx = "Didn't they used to sell these in Woolworths? I remember there was a kid in my class who always brought it to school."

function storyBar() {
	if (widthCh == false) {
		bWidth = 0;
		balpha = 0;
	}
	widthCh = true;
	bWidth < 500 ? bWidth = bWidth + 20 : null;
	balpha < 255 ? balpha++ : null;

 	fill(75, 190, 207, balpha);
	rectMode(CORNER);
	rect(0, 0, bWidth, cnv.height*2);

	if (bWidth >= 255) {
		fill(0);
		textSize(40);
		textAlign(CENTER);
		text("STORIES", 0, 10, 500, 60);

		textSize(16);
		text("Tell us what this object means to you.", 0, 65, 500, 30);

		strokeWeight(2);
		stroke(0);
		line(0, 100, 500, 100);

		textAlign(LEFT);
		imageMode(CORNER);

		sarahC();
		mikeC();
		caitriona();
	}
}

function sarahC () {
	fill(0);
	stroke(255);
	strokeWeight(0);
	image(sarah, 10, 120, sarah.width/40, sarah.height/40);
	
	text(sarahN, 90, 120, sarahN.length, 30);
	
	textWrap(WORD);
	text(sarahTx, 90, 145, 390, 100);

	fill(20);
	text("4d    Reply", 90, 265);
}

function mikeC () {
	fill(0);
	stroke(255);
	strokeWeight(0);
	image(mike, 90, 290, sarah.width/70, sarah.height/70);
	
	text(mikeN, 140, 290, sarahN.length, 30);
	
	textWrap(WORD);
	text(mikeTx, 140, 315, 310, 100);

	fill(20);
	text("4d    Reply", 140, 395);
}

function caitriona () {
	fill(0);
	stroke(255);
	strokeWeight(0);
	image(catriona, 10, 420, sarah.width/40, sarah.height/40);
	
	text(catrionaN, 90, 420, sarahN.length, 30);
	
	textWrap(WORD);
	text(catrionaTx, 90, 445, 390, 100);

	fill(20);
	text("4d    Reply", 90, 525);
}