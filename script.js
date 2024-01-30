//xPos, yPos, xMomentum, yMomentum, scale, name
let player = [100, 100, 0, 0, 20, "Player"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 40, 60);
  circle(player[0], player[1], player[4]);
}

function draw() {

  if(keyIsDown(LEFT_ARROW)){
    player[2] = player[2] - 1
  }else if(keyIsDown(RIGHT_ARROW)){
    x+=xa
    if (xa < 10){xa+=0.1}
  }else{
    if (xa > 1.1){xa-=0.4}
  }
  
  if(keyIsDown(UP_ARROW)){
    y-=ya
    if (ya < 10){ya+=0.1}
  }
  else if(keyIsDown(DOWN_ARROW)){
    y+=ya
    if (ya < 10){ya+=0.1}
  }else{
    if (ya > 1.1){ya-=0.4}
  }

  clear()
  background(0, 40, 60);
  x+=player[2]
  circle(player[0], player[1], player[4]);

}