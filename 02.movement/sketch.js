function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  stroke(180);
  line(300, 0, 300, 600);

  circle(300, 150, 50)

  push();
    translate(600, 0); //move the horizontal origin to the far right side of the canvas
    scale(-1, 1); //flip in the horizontal direction


  pop();

}
