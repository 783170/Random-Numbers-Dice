let di = [];
let dots;
let shift;
let dotWidth;
let count;
let scaler;
let up = 1;
let down = -1;

function setup() {
  if (windowWidth>windowHeight)
    createCanvas(windowHeight, windowHeight);
  else
    createCanvas(windowWidth, windowWidth);
  
  noLoop();
  rectMode(CENTER);
  
  count = 1;
  diceWidth = width/1.25/count;
  shift     = diceWidth*0.25;
  dotWidth  = diceWidth*0.2;
  diceCurve = diceWidth*0.1667;
  diceStart = diceWidth*0.625;
  diceDist  = diceWidth*1.25;
  
  for (let i = diceStart; i < width; i += diceDist) {
    di[(i-diceStart)/diceDist] = [];
    for (let j = diceStart; j < width; j += diceDist) {
      di[(i-diceStart)/diceDist][(j-diceStart)/diceDist] = new Dice (i,j,int(random(1, 7)));
    }
  }
  
}

function draw() {
  background(156,175,136);

  for (let i = diceStart; i < width; i += diceDist) {
    for (let j = diceStart; j < width; j += diceDist) {
      di[(i-diceStart)/diceDist][(j-diceStart)/diceDist].drawDice(); 
    }
  }
}

class Dice {
  constructor (x, y, size) {
    this.x    = x;
    this.y    = y;
    this.size = size;
  }
  drawDice () {
    noStroke();
    fill(255);
    rect(this.x,this.y, diceWidth,diceWidth, diceCurve);
    eval ("draw" + this.size + "(" + this.x + "," + this.y + ")");
  }
}

function draw1 (x, y) {
  fill(74, 27, 31);
  ellipse(x      ,y      ,dotWidth,dotWidth);
}
function draw2 (x, y) {
  fill(111, 41, 36);
  ellipse(x+shift,y+shift,dotWidth,dotWidth);
  ellipse(x-shift,y-shift,dotWidth,dotWidth);
}
function draw3 (x, y) {
  fill(140, 87, 58);
  ellipse(x+shift,y+shift,dotWidth,dotWidth);
  ellipse(x      ,y      ,dotWidth,dotWidth);
  ellipse(x-shift,y-shift,dotWidth,dotWidth);
}
function draw4(x, y) {
  fill(167, 136, 81);
  ellipse(x+shift,y+shift,dotWidth,dotWidth);
  ellipse(x-shift,y-shift,dotWidth,dotWidth);
  ellipse(x-shift,y+shift,dotWidth,dotWidth);
  ellipse(x+shift,y-shift,dotWidth,dotWidth);
}
function draw5 (x, y) {
  fill(64, 76, 36);
  ellipse(x      ,y      ,dotWidth,dotWidth);
  ellipse(x+shift,y+shift,dotWidth,dotWidth);
  ellipse(x-shift,y-shift,dotWidth,dotWidth);
  ellipse(x-shift,y+shift,dotWidth,dotWidth);
  ellipse(x+shift,y-shift,dotWidth,dotWidth);
}
function draw6(x, y) {
  fill(157, 193, 131);
  ellipse(x+shift,y+shift,dotWidth,dotWidth);
  ellipse(x-shift,y-shift,dotWidth,dotWidth);
  ellipse(x-shift,y+shift,dotWidth,dotWidth);
  ellipse(x+shift,y-shift,dotWidth,dotWidth);
  ellipse(x-shift,y      ,dotWidth,dotWidth);
  ellipse(x+shift,y      ,dotWidth,dotWidth);
}
function mousePressed() {
  if (count == 28)
    scaler = down;
  if (count == 1)
    scaler = up;
  count+=scaler;
  
  if (count%3 == 1)
    grow();
  for (let i = diceStart; i < width; i += diceDist) {
    di[(i-diceStart)/diceDist] = [];
    for (let j = diceStart; j < width; j += diceDist) {
      di[(i-diceStart)/diceDist][(j-diceStart)/diceDist] = new Dice (i,j,int(random(1, 7)));
    }
  }
  draw();
}
function grow () {
  diceWidth = width/(1.25*(count+2)/3);
  shift     = diceWidth*0.25;
  dotWidth  = diceWidth*0.2;
  diceCurve = diceWidth*0.1667;
  diceStart = diceWidth*0.625;
  diceDist  = diceWidth*1.25;
}
