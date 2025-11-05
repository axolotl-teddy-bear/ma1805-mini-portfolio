let img1;
let texts = [
  'You are on a beach.',
  'the sand smells like...',
  'sea-salt and sweat',
  'its cloudy.',
  'And the air is....',
  'comfortable.',
  'what do you do?'
];
let text_num = 0;

function preload(){
  img1 = loadImage("Images/beach.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img1, 0, 0, width, height);
  strokeWeight(0);
  fill(0, 0, 0, 127);
  ellipse(200, 200, 200, 100);
  
  textSize(15);
  textAlign(CENTER);
  fill(255);
  text(texts[text_num], 200, 203);
  
  if (text_num === texts.length - 1) {
    fill(0, 0, 0, 160);
    ellipse(90, 290, 100, 50);
    ellipse(310, 290, 100, 50)
    fill(255);
    textSize(18);
    text('play', 90, 295);
    text('explore', 310, 295)
  }
  
  if (90 < mouseX < 190) {
    
  }
  
  let i = sin(frameCount * 0.05) * 2; 
  filter(BLUR, i);
}

function mousePressed() {
  if (text_num < texts.length - 1) {
  text_num++;
    //else if (mouseX)
  }
}