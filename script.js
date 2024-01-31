//Hi Mr. Collins, this is Silas Moore. I would like to inform you that Dean Owen Dorner still smells and is a dork. Have a good day.

//           xPos, yPos, xMomentum, yMomentum, rotation, scale, name
let player = [100, 100,  0,          0,        0,         60,    "Player"]
let bots =   [
//xPos, yPos, xMomentum, yMomentum, rotation, scale, color,        name
  [10,  10,   0,          0,        0,         20,   (30, 50, 90), "Bot0"],

]

const PI = 3.1415926535897932384626433;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 40, 60);
  placePlayer(player);
}

function draw() { 

  movePlayer();

  clear()
  placePlayer(player);

}

function buildMap(params) {
  
  background(0, 40, 60);
  
}

function movePlayer(){
  if(keyIsDown(LEFT_ARROW)){
    if(player[2] > -8){player[2]-=0.5}
  }else if(keyIsDown(RIGHT_ARROW)){
    if(player[2] < 8){player[2]+=0.5}
  }else{
    if (player[2] > 0){player[2]-=0.25}else if(player[2] < 0){player[2]+=0.25}
  }

  if(keyIsDown(UP_ARROW)){
    if(player[3] > -8){player[3]-=0.5}
  }else if(keyIsDown(DOWN_ARROW)){
    if(player[3] < 8){player[3]+=0.5}
  }else{
    if (player[3] > 0){player[3]-=0.25}else if(player[3] < 0){player[3]+=0.25}
  }

  /*var cosOfPlayer = (Math.atan((player[3] * -1)/player[2]))
  var correctedCosOfPlayer = (player[2] < 0 || player[3] < 0) ? cosOfPlayer : (cosOfPlayer + PI);
  player[4]= (player[2] != 0 || player[3] != 0) ? correctedCosOfPlayer : player[4];*/
  player[4] = player[4] + 0.1
  
  
}

function placePlayer(player) {
  player[0]+=player[2]
  player[1]+=player[3]
  translate(player[0], player[1]);
  fill(20, 255, 0);
  circle(0, 0, player[5]);
  fill(100, 255, 200);
  circle(0, 0, player[5] * 0.7);
  fill(200, 50, 50);
  rectMode(CORNER);
  rotate(player[4] + (PI * 0.5));
  rect(0 - (player[5] / 6), 5, player[5] / 3, player[5] * 0.6, 5);
}