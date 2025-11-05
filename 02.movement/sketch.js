let headcolor;
let horncolor;
let mouthcolor;
let eyecolor;
let pupilcolor;
let earcolor;
let browcolor;
let decorcolor1;
let decorcolor2;

function preload() {
  gif1 = loadImage("GIF/dragondance.gif");
}

function setup() {
  createCanvas(2000, 1080);
  headcolor = color("firebrick");
  horncolor = color("crimson");
  mouthcolor = color("firebrick");
  eyecolor = color(250);
  pupilcolor = color("darkred");
  earcolor = color("firebrick");
  browcolor = color("floralwhite");
  decorcolor1 = color("forestgreen");
  decorcolor2 = color("crimson");
}

function draw() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  image(gif1, 0, 0, 2000, 1080);

  translate(370, 100);
  scale(2);

  push();
  strokeWeight(0);

  //head
  push();
  fill(headcolor);
  ellipse(300, 250, 250, 200);
  strokeJoin(ROUND);
  strokeWeight(50);
  stroke(headcolor);
  rect(230, 250, 140, 130, 50, 50, 50, 50); // here i found out that the rounded corners do not go past 50. anything else above that would not round out the rectangle croners even more. but i still wasnt happy with how the image was looking, so i had to use stroke functions to achieve the look i wanted
  pop();

  //horn
  push();
  strokeJoin(ROUND);
  strokeWeight(20);
  stroke(horncolor);
  triangle(300, 140, 290, 170, 310, 170);
  pop();

  //mouth
  circle(240, 340, 30);
  circle(255, 355, 30);
  circle(275, 365, 30);
  circle(300, 370, 30);
  circle(325, 365, 30);
  circle(345, 355, 30);
  circle(360, 340, 30);
  fill(mouthcolor);
  circle(300, 290, 160);

  //tongue
  fill("darkred");
  ellipse(300, 320, 120, 70);

  //left eye
  fill(250);
  circle(220, 250, 120);

  fill(headcolor);
  circle(230, 250, 100);

  fill(250);
  circle(240, 250, 75);

  //left pupil
  let eyeCenterX = 250; // Center of the eyeball
  let eyeCenterY = 250;
  let eyeRadius = 25; // Half of the eyeball diameter

  let pupilX = 225 + (mouseX - 370 * 2) / 10; // Calculate the pupil position
  let pupilY = 235 + (mouseY - 100 * 2) / 10;

  pupilX = constrain(pupilX, eyeCenterX - eyeRadius, eyeCenterX + eyeRadius); // Constrain the pupil's position within the eye
  pupilY = constrain(pupilY, eyeCenterY - eyeRadius, eyeCenterY + eyeRadius);

  fill(pupilcolor);
  circle(pupilX, pupilY, 50);

  fill(255);
  circle(pupilX - 10, pupilY - 10, 20);

  //decorative ball
  fill(decorcolor1);
  circle(265, 280, 35);

  //left ear
  push();
  fill(earcolor);
  strokeJoin(ROUND);
  strokeWeight(50);
  stroke(earcolor);
  triangle(200, 170, 190, 150, 250, 170);
  pop();

  //left eyebrow
  fill(browcolor);
  push();
  translate(280, 240);
  rotate(PI / 2.2);
  ellipse(0, 0, 70, 30);
  pop();

  push();
  translate(260, 205);
  rotate(PI / 4.5);
  ellipse(0, 0, 70, 40);
  pop();

  push();
  translate(215, 180);
  rotate(PI / 36);
  ellipse(0, 0, 85, 40);
  pop();

  push();
  translate(190, 190);
  rotate((5 * PI) / 6);
  ellipse(0, 0, 70, 40);
  pop();

  //mirror
  push();
  translate(600, 0); //move the x-axis origin to the right
  scale(-1, 1);

  //right upper lip
  strokeWeight(0);
  fill(browcolor);
  push();
  translate(360, 310);
  rotate(QUARTER_PI / 2);
  ellipse(0, 0, 100, 40);
  pop();

  ellipse(210, 320, 70, 35);

  //right eye
  fill(250);
  circle(220, 250, 120);

  fill(headcolor);
  circle(230, 250, 100);
  fill(250);
  circle(240, 250, 75);

  eyeCenterX = 240; // Center of the eyeball
  eyeCenterY = 250;

  // Calculate the pupil position for the right eye
  pupilX = 260 - (mouseX - 370 * 2) / 10;

  // Constrain the pupil's position within the eye
  pupilX = constrain(pupilX, eyeCenterX - eyeRadius, eyeCenterX + eyeRadius);
  pupilY = 235 + (mouseY - 100 * 2) / 10;
  pupilY = constrain(pupilY, eyeCenterY - eyeRadius, eyeCenterY + eyeRadius);

  fill(pupilcolor);
  circle(pupilX, pupilY, 50);

  fill(255);
  circle(pupilX + 10, pupilY - 10, 20);

  //decorative ball
  fill(decorcolor1);
  circle(265, 280, 35);

  //right ear
  push();
  fill(earcolor);
  strokeJoin(ROUND);
  strokeWeight(50);
  stroke(earcolor);
  triangle(200, 170, 190, 150, 250, 170);
  pop();

  //right eyebrow
  fill(browcolor);
  push();
  translate(280, 240);
  rotate(PI / 2.2);
  ellipse(0, 0, 70, 30);
  pop();

  push();
  translate(260, 205);
  rotate(PI / 4.5);
  ellipse(0, 0, 70, 40);
  pop();

  push();
  translate(215, 180);
  rotate(PI / 36);
  ellipse(0, 0, 85, 40);
  pop();

  push();
  translate(190, 190);
  rotate((5 * PI) / 6);
  ellipse(0, 0, 70, 40);
  pop();

  pop();

  //center elements
  fill(decorcolor2);
  circle(300, 270, 60);

  //mustache
  fill(browcolor);
  ellipse(300, 300, 150, 40);
  push();
  translate(360, 310);
  rotate(QUARTER_PI / 2);
  ellipse(0, 0, 100, 40);
  pop();

  ellipse(210, 320, 70, 35);

  pop();
}

//colors change randomly when mouse is pressed
function mousePressed() {
  headcolor = color(random(255), random(255), random(255));
  horncolor = color(random(255), random(255), random(255));
  mouthcolor = color(random(255), random(255), random(255));
  eyecolor = color(random(255), random(255), random(255));
  pupilcolor = color(random(255), random(255), random(255));
  earcolor = color(random(255), random(255), random(255));
  browcolor = color(random(255), random(255), random(255));
  decorcolor1 = color(random(255), random(255), random(255));
  decorcolor2 = color(random(255), random(255), random(255));
}
