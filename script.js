//Hi Mr. Collins, this is Silas Moore. I would like to inform you that Dean Owen Dorner still smells and is a dork. Have a good day.

//           xPos, yPos, xMomentum, yMomentum, rotation, scale, name
let player = [-1, -1,  0,          0,        0,         60,    "Player"]

let bots =   [
//xPos, yPos, xMomentum, yMomentum, rotation, scale, alive, name
  [0,   0,    0,         0,         0,        20,    false, "Bot0"],
  [0,   0,    0,         0,         0,        20,    false, "Bot1"],
  [0,   0,    0,         0,         0,        20,    false, "Bot2"],
  [0,   0,    0,         0,         0,        20,    false, "Bot3"],
  [0,   0,    0,         0,         0,        20,    false, "Bot4"],
]

closestBot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() { 

  findNearestBot();
  movePlayer();
  //movebots
  resetPlayer();
  resetBots();

  clear()
  buildMap();
  buildBots();
  buildPlayer();

}

//My functions

function findDistance(x1, y1, x2, y2){

  let xdist = (x2 - x1);
  let ydist = (y2 - y1);

  return Math.sqrt(Math.abs(xdist) + Math.abs(ydist));
  
}

function buildMap() {
  
  background(100 ,120, 110);
  fill(
    0, 40, 60)
  rect(20, 20, windowWidth - 40, windowHeight - 40)
  
}

//Bots

function resetBots(){

  for(let i = 0; i < bots.length; i++){
    
    if(!bots[i][6]){

      bots[i][0] = Math.random() * windowWidth;
      bots[i][1] = Math.random() * windowHeight;
      bots[i][6] = true;
      
    }

    if(bots[i][0] > windowWidth || bots[i][1] > windowHeight){
      bots[i][6] = false;
    }
    
  }
  
}

function findNearestBot() {

  let minDistance = Infinity;

  for (let i = 0; i < bots.length; i++){

    distance = findDistance(player[0], player[1], bots[i][0], bots[i][1]);

    if(distance < minDistance){
      minDistance = distance;
      closestBot = i;
    }

  }

}

function buildBots() {

  for (var i = 0; i < bots.length; i++){

    fill(200, 20, 20);
    circle(bots[i][0], bots[i][1], bots[i][5]);

  }

}

//Player

function resetPlayer(){

  if (player[2] < 0.1 && player[2] > -0.1){
    player[2] = 0;
  }
  if (player[3] < 0.1 && player[3] > -0.1){
    player[3] = 0;
  }

  if(player[0] > windowWidth || player[0] < 0 || player[1] > windowHeight || player[1] < 0){
    player[0] = windowWidth / 2;
    player[1] = windowHeight / 2;
  }
  
}

function movePlayer(){

  //Location

  player[0]+=player[2]
  player[1]+=player[3]

  if (player[0] <= (20 + (player[5] / 2))){
    player[2] = player[2] * -0.8 + 0.6;
  }
  if (player[1] <= (20 + (player[5] / 2))){
    player[3] = player[3] * -0.8 + 0.6;
  }
  if (player[0] >= (windowWidth - 20 - (player[5] / 2))){
    player[2] = player[2] * -0.8 - 0.6;
  }
  if (player[1] >= (windowHeight - 20 - (player[5] / 2))){
    player[3] = player[3] * -0.8 - 0.6;
  }
  
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

  //Rotation
  let xdist = (player[0] - bots[closestBot][0]);
  let ydist = (player[1] - bots[closestBot][1]);

  player[4] = (xdist > 0) ? (Math.atan(ydist / xdist)) + PI : Math.atan(ydist / xdist);
  
}

function buildPlayer() {
  translate(player[0], player[1]);
  fill(20, 255, 0);
  circle(0, 0, player[5]);
  fill(100, 255, 200);
  circle(0, 0, player[5] * 0.7);
  fill(200, 50, 50);
  rectMode(CORNER);
  rotate(player[4] - (PI * 0.5));
  rect(0 - (player[5] / 6), player[5] / 12, player[5] / 3, player[5] * 0.6, 5);
}
