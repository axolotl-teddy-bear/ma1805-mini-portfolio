
function setup() {
  createCanvas(2000, 1080);
}

function draw() {
  background(220);

  stroke(180);
  line(300, 0, 300, 600);

  translate(370, 100)
  scale(2)

  push()
    strokeWeight(0)

    //head
    push()
    fill('firebrick')
    ellipse(300, 250, 250, 200)
    strokeJoin(ROUND)
    strokeWeight(50)
    stroke('firebrick')
    rect(230, 250, 140, 130, 50, 50, 50, 50)
    pop()
    //circle(300, 250, 240)

    //horn
    push()
    fill(0)
    strokeJoin(ROUND)
    strokeWeight(20)
    stroke('crimson')
    triangle(300, 140, 290, 170, 310, 170)
    pop()

    //mouth
    fill(255)
    circle(240, 340, 30)
    circle(255, 355, 30)
    circle(275, 365, 30)
    circle(300, 370, 30)
    circle(325, 365, 30)
    circle(345, 355, 30)
    circle(360, 340, 30)
    fill('firebrick')
    circle(300, 290, 160)

    ///fill('darkred')
    //circle(300, 260, 160)

    //left eye
    fill(250)
    circle(220, 250, 130)

    fill('firebrick')
    circle(230, 250, 100)

    fill(250)
    circle(240, 250, 75)

    let eyeCenterX = 250; // Center of the eyeball
    let eyeCenterY = 250;
    let eyeRadius = 25; // Half of the eyeball diameter

    // Calculate the pupil position
    let pupilX = 225 + (mouseX - 370 * 2) / 10; 
    let pupilY = 235 + (mouseY - 100 * 2) / 10;

    // Constrain the pupil's position within the eye
    pupilX = constrain(pupilX, eyeCenterX - eyeRadius, eyeCenterX + eyeRadius);
    pupilY = constrain(pupilY, eyeCenterY - eyeRadius, eyeCenterY + eyeRadius);

    fill('darkred');
    circle(pupilX, pupilY, 50);

    fill(255)
    circle(pupilX - 10, pupilY - 10, 20);

    //decorative ball
    fill('forestgreen')
    circle(265, 280, 35)

    //left eyebrow
    push()
      fill('floralwhite')
      translate(280, 240)
      rotate(PI / 2.2)
      ellipse(0, 0, 70, 30)
    pop()

    push()
      fill('floralwhite')
      translate(260, 205)
      rotate(PI / 4.5)
      ellipse(0, 0, 70, 40)
    pop()

    push()
      fill('floralwhite')
      translate(215, 180)
      rotate(PI / 36)
      ellipse(0, 0, 85, 40)
    pop()

    push()
      fill('floralwhite')
      translate(190, 190)
      rotate(5 * PI / 6)
      ellipse(0, 0, 70, 40)
    pop()


    //mirror
    push();
      translate(600, 0); //move the horizontal origin to the far right side of the canvas
      scale(-1, 1)

      //right upper lip
      strokeWeight(0)
      fill('floralwhite')
      push()
        translate(360, 310)
        rotate(QUARTER_PI / 2)
        ellipse(0, 0, 100, 40)
      pop()

      ellipse(210, 320, 70, 35)

      //right eye
      fill(250)
      circle(220, 250, 130)

      fill('firebrick')
      circle(230, 250, 100)
      fill(250)
      circle(240, 250, 75)

      eyeCenterX = 240; // Center of the eyeball
      eyeCenterY = 250;

      // Calculate the pupil position for the right eye
      pupilX = 260 - (mouseX - 370 * 2) / 10; 

      // Constrain the pupil's position within the eye
      pupilX = constrain(pupilX, eyeCenterX - eyeRadius, eyeCenterX + eyeRadius);
      pupilY = 235 + (mouseY - 100 * 2) / 10;
      pupilY = constrain(pupilY, eyeCenterY - eyeRadius, eyeCenterY + eyeRadius);

      fill('darkred');
      circle(pupilX, pupilY, 50);

      fill(255)
      circle(pupilX + 10, pupilY - 10, 20);

      //decorative ball
      fill('forestgreen')
      circle(265, 280, 35)

      //right eyebrow
      push()
        fill('floralwhite')
        translate(280, 240)
        rotate(PI / 2.2)
        ellipse(0, 0, 70, 30)
      pop()

      push()
        fill('floralwhite')
        translate(260, 205)
        rotate(PI / 4.5)
        ellipse(0, 0, 70, 40)
      pop()

      push()
        fill('floralwhite')
        translate(215, 180)
        rotate(PI / 36)
        ellipse(0, 0, 85, 40)
      pop()

      push()
      fill('floralwhite')
      translate(190, 190)
      rotate(5 * PI / 6)
      ellipse(0, 0, 70, 40)
      pop()

    pop()

    //center elements 
    fill('crimson')
    circle(300, 270, 60)

    fill('floralwhite')
    ellipse(300, 300, 150, 40)
    push()
      translate(360, 310)
      rotate(QUARTER_PI / 2)
      ellipse(0, 0, 100, 40)
    pop()

    ellipse(210, 320, 70, 35)

  pop()

  strokeWeight(0)


}
