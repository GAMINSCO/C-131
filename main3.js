var img = "";


function preload() {
   img = loadImage("bedroom2.jpg");
}

function setup() {
   canvas = createCanvas(500, 500);
   canvas.position(440, 140);
}

function draw() {
   image(img, 0, 0, 500, 500)
}