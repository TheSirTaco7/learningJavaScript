//Hi Mr. Collins, this is Silas Moore. I would like to inform you that Dean Owen Dorner still smells and is a dork. Have a good day.

//           xPos,yPos, xMomentum, yMomentum, rotation, scale, alive
let player = [-100, -100,   0,         0,         0,        60, true]

let bots = new Array(5);
for (let i = 0; i < bots.length; i++){
  bots[i] = [-1,   -1,    0,         0,         0,        30,    false];
}

let shots = [];

closestBot = 0;

shotTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() { 

  if (player[6]){
    
    findNearestBot();
    movePlayer();
    moveBots();
    moveShots();
    createShots();
    checkForHits()
    resetPlayer();
    resetBots();
    resetShots();
  
  }

  clear()
  buildMap();
  buildShots();
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
  fill(0, 40, 60)
  rect(20, 20, windowWidth - 40, windowHeight - 40)
  
}  

//Bots

function resetBots() {

  for(let i = 0; i < bots.length; i++){

    let touchingPlayer = true;

    while (touchingPlayer){
    
    if(!bots[i][6]){

      bots[i][0] = Math.random() * windowWidth;
      bots[i][1] = Math.random() * windowHeight;
      bots[i][6] = true;
      
    }

      if (findDistance(player[0], player[1], bots[i][0], bots[i][1]) > 9){
        touchingPlayer = false;
      }
      
    }
    
    if (findDistance(player[0], player[1], bots[i][0], bots[i][1]) < 7)

    if(bots[i][0] < 0 || bots[i][0] > windowWidth || bots[i][1] < 0 || bots[i][1] > windowHeight){
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

function moveBots() {

  for (let i = 0; i < bots.length; i++){

    xdist = bots[i][0] - player[0];
    ydist = bots[i][1] - player[1];
    distance = findDistance(player[0], player[1], bots[i][0], bots[i][1]);
    
    bots[i][2] += xdist * -0.01;
    bots[i][3] += ydist * -0.01;

    if (distance < 16){
      
      xdist = 140;
      ydist = 140;
                        
    }

    if (distance > 26){

      xdist = 140;
      ydist = 140;

    }

    if (bots[i][2] > xdist / 100){
      bots[i][2] = xdist / 100;
    }
    if (bots[i][2] < xdist / -100){
      bots[i][2] = xdist / -100;
    }
    if (bots[i][3] > ydist / 100){
      bots[i][3] = ydist / 100;
    }
    if (bots[i][3] < ydist / -100){
      bots[i][3] = ydist / -100;
    }

    bots[i][0]+=bots[i][2] + ((Math.random() - 0.5) * 5);
    bots[i][1]+=bots[i][3] + ((Math.random() - 0.5) * 5);
    
  }
  
  
}

function buildBots() {

  for (var i = 0; i < bots.length; i++){

    fill(200, 20, 20);
    circle(bots[i][0], bots[i][1], bots[i][5]);

  }

}

function checkForHits() {

  for (let i = 0; i < bots.length; i++){

    for (let j = 0; j < shots.length; j++){

      if (shots[j][6]){
        
        if (findDistance(bots[i][0], bots[i][1], shots[j][0], shots[j][1]) < 5){
          bots[i][6] = false;
        }
        
      }

    }
  
    console.log(findDistance(player[0], player[1], bots[i][0], bots[i][1]));
    
    if (findDistance(player[0], player[1], bots[i][0], bots[i][1]) < 7){
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
      player[0] = -100
      player[1] = -100
      player[6] = false
    }
      
    
    
  }
  
}

//Player

function resetPlayer()  {

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

function movePlayer() {

  //Location

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
  
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    if(player[2] > -8){player[2]-=0.5}
  }else if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
    if(player[2] < 8){player[2]+=0.5}
  }else{
    if (player[2] > 0){player[2]-=0.25}else if(player[2] < 0){player[2]+=0.25}
  }

  if(keyIsDown(UP_ARROW) || keyIsDown(87)){
    if(player[3] > -8){player[3]-=0.5}
  }else if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    if(player[3] < 8){player[3]+=0.5}
  }else{
    if (player[3] > 0){player[3]-=0.25}else if(player[3] < 0){player[3]+=0.25}
  }
  
  player[0]+=player[2]
  player[1]+=player[3]

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

//Shots

function resetShots() {

  for(let i = 0; i < shots.length; i++){

    if(shots[i][0] < 0 || shots[i][0] > windowWidth || shots[i][1] < 0 || shots[i][1] > windowHeight){
      shots[i][6] = false;
    }
  }
}

function createShots() {

  if(keyIsDown(32)){

    if (shotTime <= 0){

      xdist = (Math.cos(player[4]) * player[5]) + player[0];
      ydist = (Math.sin(player[4] ) * player[5]) + player[1];
      
      //         xPos      yPos,     xMomentum, yMomentum, rotation,         scale, alive
      shots.push([xdist ,   ydist,    0,         0,         player[4],        20,    true]);
      shotTime = 20;

    }
 
  }
  
    shotTime --;
  
}

function moveShots() {

  for (let i = 0; i < shots.length; i++){

    shots[i][2] = Math.cos(shots[i][4]) * 10;
    shots[i][3] = Math.sin(shots[i][4]) * 10;

    shots[i][0] += shots[i][2];
    shots[i][1] += shots[i][3];
    
  }
  
}

function buildShots() {

  for (var i = 0; i < shots.length; i++){

    if (shots[i][6]){

      fill(80, 100, 90);
      circle(shots[i][0], shots[i][1], shots[i][5]);

    }

  }

}