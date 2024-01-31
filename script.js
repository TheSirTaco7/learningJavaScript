//Hi Mr. Collins, this is Silas Moore. I would like to inform you that Dean Owen Dorner still smells and is a dork. Have a good day.

//xPos, yPos, xMomentum, yMomentum, scale, name
let player = [100, 100, 0, 0, 20, "Player"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 40, 60);
  circle(player[0], player[1], player[4]);
}

function draw() {

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
  

  clear()
  background(0, 40, 60);
  player[0]+=player[2]
  player[1]+=player[3]
  circle(player[0], player[1], player[4]);

}