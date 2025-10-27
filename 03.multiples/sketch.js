let countdown = 0; 
let rect_pos = [];

function preload(){
  img1 = loadImage("Images/Desktop.png")
  img2 = loadImage("Images/BG.jpeg")
  img3 = loadImage("Images/Windows.jpeg")
  img4 = loadImage("Images/Hand.png")
  img5 = loadImage("Images/Mouse.png")
  img6 = loadImage("Images/Cursor.png")
  gif1 = loadImage("GIF/IMG_5992.gif")
  gif2 = loadImage("GIF/IMG_5990.gif")
  gif3 = loadImage("GIF/IMG_5981.gif")
  gif4 = loadImage("GIF/IMG_5982.gif")
  gif5 = loadImage("GIF/IMG_5988.gif")

}

function setup() {
  //frameRate(200)
  createCanvas(700, 600);
}

function draw() {
  background(220);
  image(img2, 0, 0, 700, 600);
  image(img1, 35, 35, 630, 530);
  image(img3, 125, 85, 430, 270);
  image(img5, 35 + mouseX/12, 35 + mouseY/12, 630, 530);
  image(img4, 540 + mouseX/12, 490 + mouseY/12, width/5, height/5)
  //image(gif1, 0, 0, width/7, height/7)
  
  let waittime = random(10, 5000)
  if (millis() - countdown >= waittime) {
    let x_pos = random(135, 380);
    let y_pos = random(95, 180);
    let ad_num = floor(random(1, 6));
    rect_pos.push({ x: x_pos, y: y_pos, ad_type: ad_num}); 
    countdown = millis();
  }
  
  for (let rect_draw of rect_pos) {
    strokeWeight(0);
    fill(240, 245, 255, 150);
    if (rect_draw.ad_type === 1) {
    rect(rect_draw.x, rect_draw.y, 110, 110);
    image(gif1, rect_draw.x + 5, rect_draw.y + 13, 100, 90);
  } else if (rect_draw.ad_type === 2) { 
    rect(rect_draw.x, rect_draw.y, 110, 170);
    image(gif2, rect_draw.x + 5, rect_draw.y + 14, 100, 150);
  }
    else if (rect_draw.ad_type === 3) {
      rect(rect_draw.x, rect_draw.y, 110, 90);
    image(gif3, rect_draw.x + 5, rect_draw.y + 13, 100, 70);
    }
    else if (rect_draw.ad_type === 4) {
      rect(rect_draw.x, rect_draw.y, 170, 120);
    image(gif4, rect_draw.x + 5, rect_draw.y + 13, 160, 100);
    }
    else if (rect_draw.ad_type === 5) {
      rect(rect_draw.x, rect_draw.y, 150, 120);
    image(gif5, rect_draw.x + 5, rect_draw.y + 13, 140, 100);
    }
    
    fill(255, 0, 0);
    rect(rect_draw.x + 2, rect_draw.y + 2, 13, 6)
  }
  
  if (mouseX >= 125 && mouseX <= 555 && mouseY >= 85 && mouseY <=355) {
    image(img6, mouseX, mouseY, 10, 10);
  }
  
  /*function mousePressed() {
    for (let i = rect_pos.length - 1; i >= 0; i--) {
    let rect_draw = rect_pos[i];
      if (dist(mouseX, mouseY, rect_draw.x + 2, rect_draw.y + 2) < 5) {
        rect_pos.splice(i, 1)
      }
    }
  }
  */

}