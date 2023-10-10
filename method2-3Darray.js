let di = [];
let diceWidth;
let dotColor = [];
let dotPos;
let count;
let scaler;
let up = 1;
let down = -1;
let diceVals;

function setup() {
  if (windowWidth > windowHeight) createCanvas(windowHeight, windowHeight);
  else createCanvas(windowWidth, windowWidth);

  noLoop();
  rectMode(CENTER);

  count = 1;
  diceWidth = width / 1.25 / count;
  diceVals = [diceWidth * 0.25,diceWidth * 0.2,diceWidth * 0.1667,diceWidth * 0.625,diceWidth * 1.25,];

  for (let i = diceVals[3]; i < width; i += diceVals[4]) {
    di[(i - diceVals[3]) / diceVals[4]] = [];
    for (let j = diceVals[3]; j < width; j += diceVals[4]) {
      di[(i - diceVals[3]) / diceVals[4]][(j - diceVals[3]) / diceVals[4]] = new Dice(i, j, int(random(1, 7)));
    }
  }

  dotColor[1-1] = [[74 , 27 , 31 ,1],[255, 255, 255,0],[255, 255, 255,0],[255, 255, 255,0],[255, 255, 255,0],[255, 255, 255,0],[255, 255, 255,0]];
  dotColor[2-1] = [[255, 255, 255,0],[111, 41 , 36 ,1],[111, 41 , 36 ,1],[255, 255, 255,0],[255, 255, 255,0],[255, 255, 255,0],[255, 255, 255,0]];
  dotColor[3-1] = [[140, 87 , 58 ,1],[140, 87 , 58 ,1],[140, 87 , 58 ,1],[255, 255, 255,0],[255, 255, 255,0],[255, 255, 255,0],[255, 255, 255,0]];
  dotColor[4-1] = [[255, 255, 255,0],[167, 136, 81 ,1],[167, 136, 81 ,1],[167, 136, 81 ,1],[167, 136, 81 ,1],[255, 255, 255,0],[255, 255, 255,0]];
  dotColor[5-1] = [[64 , 76 , 36 ,1],[64 , 76 , 36 ,1],[64 , 76 , 36 ,1],[64 , 76 , 36 ,1],[64 , 76 , 36 ,1],[255, 255, 255,0],[255, 255, 255,0]];
  dotColor[6-1] = [[255, 255, 255,0],[157, 193, 131,1],[157, 193, 131,1],[157, 193, 131,1],[157, 193, 131,1],[157, 193, 131,1],[157, 193, 131,1]];
  dotPos        = [[0,0],            [1,1],            [-1,-1],          [-1,1],           [1,-1],           [-1,0],           [1,0]];

}

function draw() {
  background(156, 175, 136);

  for (let i = diceVals[3]; i < width; i += diceVals[4]) {
    for (let j = diceVals[3]; j < width; j += diceVals[4]) {
      di[(i - diceVals[3]) / diceVals[4]][(j - diceVals[3]) / diceVals[4]].drawDice();
    }
  }
}

class Dice {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  pip(x, y, size) {
    for (let i = 0; i < 7; i++) {
      fill("rgba(" +dotColor[size - 1][i][0] + "," + dotColor[size - 1][i][1] + "," + dotColor[size - 1][i][2] + "," + dotColor[size - 1][i][3] + ")");
      ellipse(x + dotPos[i][0] * diceVals[0], y + dotPos[i][1] * diceVals[0], diceVals[1], diceVals[1]);
    }
  }
  drawDice() {
    noStroke();
    fill(255);
    rect(this.x, this.y, diceWidth, diceWidth, diceVals[2]);
    this.pip(this.x, this.y, this.size);
  }
}

function mousePressed() {
  if (count == 28) scaler = down;
  if (count == 1) scaler = up;
  count += scaler;

  if (count % 3 == 1) grow();
  for (let i = diceVals[3]; i < width; i += diceVals[4]) {
    di[(i - diceVals[3]) / diceVals[4]] = [];
    for (let j = diceVals[3]; j < width; j += diceVals[4]) {
      di[(i - diceVals[3]) / diceVals[4]][(j - diceVals[3]) / diceVals[4]] = new Dice(i, j, int(random(1, 7)));
    }
  }
  draw();
}
function grow() {
  diceWidth = width / ((1.25 * (count + 2)) / 3);
  diceVals = [diceWidth * 0.25, diceWidth * 0.2, diceWidth * 0.1667, diceWidth * 0.625, diceWidth * 1.25];
}
