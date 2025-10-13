function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(200);
  rec_ax=150
  rec_bx=250
  rec_ay=380
  rec_by=550
  
  //body 
  push();
  fill(100);
  strokeWeight(0);
  rect(150, 190, 100, 230)
  triangle(150, 190, 150, 400, 130, 190)
  triangle(250, 190, 250, 400, 270, 190)
  triangle(128, 180, 110, 180, 128, 200)
  
  //cover
  rect(165, 150, 70, 30)
  triangle(165, 150, 160, 150, 165, 165)
  triangle(235, 150, 240, 150, 235, 165)
  
  fill(250)
  rect(167, 152, 65, 25)
  triangle(167, 152, 164, 152, 167, 165)
  triangle(232, 152, 236, 152, 232, 165)
  //cover
  
  fill(0)
  rect(128, 180, 144, 25)
  ellipse(200, 180, 144, 40)
  fill(250)
  rect(155, 210, 90, 150, 20, 20, 20, 20)
  
  
  //reflections
  fill(150);
  rect(150, 180, 25, 24)
  rect(225, 180, 25, 24)
  fill(200)
  rect(160, 180, 10, 24)
  rect(230, 180, 10, 24)
  pop();

  
  
  //the base of the blender
  fill(100);
  ellipse(200, rec_by, 145, 35)
  ellipse(200, rec_ay, 105, 30);
  fill(0);
  rect(150, 380, 100, 170)
  triangle(rec_ax, rec_ay, rec_ax, rec_by, rec_ax-20, rec_by)
  triangle(rec_bx, rec_ay, rec_bx, rec_by, rec_bx+20, rec_by)
  ellipse(200, rec_by, 140, 20)
  ellipse(200, rec_ay, 100, 20);
  
  //reflections
  fill(150);
  push();
  strokeWeight(0);
  push();
  //rect(rec_ax+20, rec_ay-6, 20, 184);
  translate(rec_ax+30, rec_ay+86);
  rotate(0.05);
  rect(-15, -92, 15, 184);
  //circle(0, 0, 5) //origin point
  pop();
  
  push();
  //circle(200, 466, 5) //center of base
  translate(rec_ax+85, rec_ay+86)
  rotate(-0.05)
  rect(-13, -93, 15, 184);
  //circle(0, 0, 5) //origin point 
  pop();
  
  fill(200);
  push();
  translate(rec_ax+85, rec_ay+86)
  rotate(-0.05)
  rect(-10, -93, 8, 184);
  pop();
  
  push();
  translate(rec_ax+30, rec_ay+86);
  rotate(0.05);
  rect(-11, -92, 8, 184);
  pop();
  pop();
  
  //button
  push();
  fill(100)
  strokeWeight(5)
  circle(200, 480, 50)
  pop();
  
  fill(0)
  rect(195, 455, 10, 20)
  
  fill(250)
  translate(200, 480)
  circle(0, 0, 5)
  
}

