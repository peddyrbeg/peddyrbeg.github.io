let gR1 = 0; // +230 ()
let gG1 = 72; // -72
let gB1 = 153; // -57

let gR2 = 75; // -75
let gG2 = 190; // -118
let gB2 = 207; // -54

let rR1 = 230;
let rG1 = 0;
let rB1 = 96;

let rR2 = 0;
let rG2 = 72;
let rB2 = 153;

let g1, g2;

let r1Up = true;
let g1Up = true;
let b1Up = true;

let r2Up = true;
let g2Up = true;
let b2Up = true;

let gameRate = 0.125;

function drawGradient() {
  if (gR1 < rR1) gR1++;
  if (gG1 > rG1) gG1--;
  if (gB1 > rB1) gB1--;

  if (gR2 > rR2) gR2 = gR2 -10;
  if (gG2 > rG2) gG2 = gG2 -10;
  if (gB2 > rB2) gB2 = gB2 -10;

  g1 = color(gR1, gG1, gB1);
  g2 = color(gR2, gG2, gB2);
  // Background
  setGradient(0, 0, displayWidth, displayHeight, g1, g2);
}

function gameGradient() {
  if (gR1 < 0) r1Up = true;
  else if (gR1 > rR1 - 1) r1Up = false;

  if (r1Up) gR1 = gR1 + gameRate;
  else gR1 = gR1 - gameRate;

  if (gG1 < rG1 + 1) g1Up = true;
  else if (gG1 > 71) g1Up = false;

  if (!g1Up) gG1 = gG1 - gameRate;
  else gG1 = gG1 + gameRate;

  if (gB1 < rB1 + 1) b1Up = true;
  else if (gB1 > 152) b1Up = false;

  if (!b1Up) gB1 = gB1 - gameRate;
  else gB1 = gB1 + gameRate;

  if (gR2 < rR2 + 1) r2Up = true;
  else if (gR2 > 74) r2Up = false;

  if (!r2Up) gR2 = gR2 - gameRate;
  else gR2 = gR2 + gameRate;

  if (gG2 < rG2 + 1) g2Up = true;
  else if (gG2 > 189) g2Up = false;

  if (!g2Up) gG2 = gG2 - gameRate;
  else gG2 = gG2 + gameRate;

  if (gB2 < rB2 + 1) b2Up = true;
  else if (gB2 > 206) b2Up = false;

  if (!b2Up) gB2 = gB2 - gameRate;
  else gB2 = gB2 + gameRate;

  g1 = color(gR1, gG1, gB1);
  g2 = color(gR2, gG2, gB2);
  // Background
  setGradient(0, 0, displayWidth, displayHeight, g1, g2);
}

function redrawGradient() {
  g1 = color('#4BBECF');
  g2 = color('#004899');
  // Background
  setGradient(0, 0, displayWidth, displayHeight, g1, g2);
}

function setGradient(x, y, w, h, g1, g2) {
  noFill();

    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(g1, g2, inter);
      stroke(c);
      line(i, y, i, y + h);
  }
}
