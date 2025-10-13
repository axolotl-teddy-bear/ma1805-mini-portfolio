function setup() {
  createCanvas(500, 500);
  noStroke();
  background(0,0,0);
  fill(255,200,255);
}

function draw() {
  background(0,0,0,10);
  x1 = mouseX + random(-50, 50);
  x2 = mouseX + random(-50, 50);
  y1 = mouseY + random(-50, 50);
  y2 = mouseY + random(-50, 50);

  cl1 = random(0, 255);
  cl2 = random(0, 255);
  cl3 = random(0, 255);

  let value = color(cl1, cl2, cl3);
  
  //trail.push(createVector (mouseX, mouseY));
  
  fill(value);
  triangle(x1, y1, x2, y2, mouseX, mouseY);  

}
