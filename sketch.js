let flowers = [];
let f1, f2, f3;
let slider;
let theInput;

function preload() { 
  
  f1 = loadImage("flowers/blueflower.png", () => console.log("blueflower loaded"), () => console.error("blueflower failed"));
  f2 = loadImage("flowers/pinkflower.png", () => console.log("pinkflower loaded"), () => console.error("pinkflower failed"));
  f3 = loadImage("flowers/purpleflower.png", () => console.log("purpleflower loaded"), () => console.error("purpleflower failed"));
}

function setup() { 
  createCanvas(400, 400);
  background(220);

  
  flowers.push(f1);
  flowers.push(f2);
  flowers.push(f3);

  
  slider = createSlider(0, 255, 127); 
  slider.position(100, 350); 
  slider.size(200); 

 
  theInput = createInput(''); 
  theInput.position(100, 300); 
  theInput.size(200);
}

function draw() {
  
  let val = slider.value(); 
  background(255, val * 0.5, val * 0.6);

  
  let words = theInput.value();
  fill(0);
  textSize(24);
  text(words, 20, 50);
}

function mousePressed() {
  let randomFlower = random(flowers);
  if (randomFlower) {
    image(randomFlower, mouseX - 25, mouseY - 25, 50, 50); // Draw flower at mouse position
  }
}
