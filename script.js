let x = 200;
let xa = 1;
let y = 200;
let ya = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 40, 60);
  rect(x, y, 60, 60)
}

function draw() {
  /*circle(mouseX, mouseY, 10);
  circle(mouseY, mouseX, 10);

  circle(windowWidth - mouseX, mouseY, 10);
  circle(windowWidth - mouseY, mouseX, 10);

  circle(mouseX, windowHeight - mouseY, 10);
  circle(mouseY, windowHeight - mouseX, 10);

  circle(windowWidth - mouseX, windowHeight - mouseY, 10);
  circle(windowWidth - mouseY, windowHeight - mouseX, 10);*/

  if(keyIsDown(LEFT_ARROW)){
    x-=xa
    if (xa < 10){xa+=0.1}
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
  rect(x, y, 200, 200);

}