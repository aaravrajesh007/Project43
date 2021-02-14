
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0,0,0); 
  var h=hour();
var m=minute();
var s=second();
 
  angleMode(DEGREES);
  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h,0,60,0,360);
  translate(200,200)
  rotate(-90);
  push();
  rotate(sAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mAngle)
  stroke("yellow");
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  push();
  rotate(hAngle)
  stroke(0,0,255);
  strokeWeight(10);
  line(0,0,100,0);
  pop();
  noFill();
  stroke("green")
  strokeWeight(10)
  point(0,0)
  //seconds
  stroke("red")
  arc(0,0,300,300,0,sAngle)

  stroke("yellow")
  arc(0,0,280,280,0,mAngle)

  stroke("blue")
  arc(0,0,260,260,0,hAngle)

}