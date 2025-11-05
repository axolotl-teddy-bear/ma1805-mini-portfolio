let countdown = 0; 
let rect_pos = [];

//this is my first time importing images in my projects. it took a while for me to figure out, especially with my device since I work on ipad.

function preload(){
  img1 = loadImage("Images/desktop.png")
  img2 = loadImage("Images/bg.jpg")
  img3 = loadImage("Images/windows.png")
  img4 = loadImage("Images/hand.png")
  img5 = loadImage("Images/mouse.png")
  img6 = loadImage("Images/cursor.png")
  gif1 = loadImage("GIF/IMG_5992.gif")
  gif2 = loadImage("GIF/IMG_5990.gif")
  gif3 = loadImage("GIF/IMG_5981.gif")
  gif4 = loadImage("GIF/IMG_5982.gif")
  gif5 = loadImage("GIF/IMG_5988.gif")

}

function setup() {
  //frameRate(200) //initially I tried to use framerate to change the speed of whihc the ads were pooping up. however, this seems to slow down eveything, not just the ads. 
  createCanvas(700, 600);
}

function draw() {
  background(220);
  image(img2, 0, 0, 700, 600);
  image(img1, 35, 35, 630, 530);
  image(img3, 65, 5, 552, 426);
  image(img5, 35 + mouseX/12, 35 + mouseY/12, 630, 530);
  image(img4, 540 + mouseX/12, 490 + mouseY/12, width/5, height/5)
  
  let waittime = random(300, 5000) //waittime between each pop-up
  if (millis() - countdown >= waittime) {
    let x_pos = random(135, 380);
    let y_pos = random(95, 180);
    let ad_num = floor(random(1, 6)); 
    rect_pos.push({ x: x_pos, y: y_pos, ad_type: ad_num}); 
    countdown = millis();
  }
  
  for (let rect_draw of rect_pos) { //this generates each ad (rectangle & image) depending on which ad_type was selected 
    strokeWeight(0);
    fill(240, 245, 255, 150);
    if (rect_draw.ad_type === 1) {
      rect(rect_draw.x, rect_draw.y, 110, 110);
      image(gif1, rect_draw.x + 5, rect_draw.y + 13, 100, 90);
      
      //I think there is a better way to do this--it does not seem that effective to have all these else if statments doing mostly the same thing...
    } 
    else if (rect_draw.ad_type === 2) { 
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
  
  //I think it would really strengthen the concept of this project even more if there was audio. like a little audio clip that comes with evey ad when it pops up
  
  //for the sake of time, though, I couldnt add this element in time
  
  if (mouseX >= 125 && mouseX <= 555 && mouseY >= 85 && mouseY <=355) { //this code below adds a tiny mouse cursor image on the desktop when your mouse hovers over it. just a fun detail I wanted to add.
    image(img6, mouseX, mouseY, 10, 10);
  }
}
  

  function mousePressed() {

    //this function took me the longest to figure out. definately the biggest challange I had to overcome in this project

    //turns out, I had this function nested inside the draw function, which frustated me lots. 

    //funny how simple mistakes like this in code can cuase so many issues

    for (let i = rect_pos.length - 1; i >= 0; i--) {
      let rect_draw = rect_pos[i];
      if (dist(mouseX, mouseY, rect_draw.x + 2, rect_draw.y + 2) < 20) {
        rect_pos.splice(i, 1)
      }
    }
  }

