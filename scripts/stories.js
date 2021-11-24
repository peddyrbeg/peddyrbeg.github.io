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
	bWidth < (cnv.width * 0.26) ? bWidth = bWidth + (cnv.width * 0.01) : null;
	balpha < 255 ? balpha++ : null;

 	fill(75, 190, 207, balpha);
	rectMode(CORNER);
	rect(0, 0, bWidth, cnv.height*2);

	if (bWidth >= 255) {
		fill(0);
		textSize(40);
		textAlign(CENTER);
		text("STORIES", 0, cnv.width * 0.005, bWidth, cnv.width * 0.031);

		textSize(16);
		text("Tell us what this object means to you.", 0, cnv.width*0.034, bWidth, cnv.width*0.016);

		strokeWeight(2);
		stroke(0);
		line(0, cnv.width * 0.052, bWidth, cnv.width * 0.052);

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
	image(sarah, cnv.width * 0.005, cnv.width*0.063, sarah.width * cnv.width * 0.000013, sarah.height * cnv.width * 0.000013);
	
	text(sarahN, cnv.width * 0.047, cnv.width * 0.063, sarahN.length, cnv.width * 0.016);
	
	textWrap(WORD);
	text(sarahTx, cnv.width * 0.047, cnv.width * 0.076, cnv.width * 0.203, cnv.width * 0.052);

	fill(20);
	text("4d    Reply", cnv.width * 0.047, cnv.width * 0.138);
}

function mikeC () {
	fill(0);
	stroke(255);
	strokeWeight(0);
	image(mike, cnv.width * 0.047, cnv.width * 0.153, sarah.width * cnv.width * 0.000008, sarah.height * cnv.width * 0.000008);
	
	text(mikeN, cnv.width * 0.073, cnv.width * 0.151, sarahN.length, cnv.width * 0.016);
	
	textWrap(WORD);
	text(mikeTx, cnv.width * 0.073, cnv.width * 0.164, cnv.width * 0.161, cnv.width * 0.052);

	fill(20);
	text("4d    Reply", cnv.width * 0.073, cnv.width * 0.206);
}

function caitriona () {
	fill(0);
	stroke(255);
	strokeWeight(0);
	image(catriona, cnv.width * 0.005, cnv.width * 0.219, catriona.width * cnv.width * 0.000013, catriona.height * cnv.width * 0.000013);
	
	text(catrionaN, cnv.width * 0.047, cnv.width * 0.219, sarahN.length, cnv.width * 0.016);
	
	textWrap(WORD);
	text(catrionaTx, cnv.width * 0.047, cnv.width * 0.232, cnv.width * 0.203, cnv.width * 0.052);

	fill(20);
	text("4d    Reply", cnv.width * 0.047, cnv.width * 0.273);
}