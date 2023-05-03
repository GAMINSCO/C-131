var img = "";
var theStatus = '';


function preload() {
   img = loadImage("bedroom1.jpg");
}

function setup() {
   canvas = createCanvas(500, 500);
   canvas.position(440, 140);
   
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);

   document.getElementById("status").innerHTML = "Detecting Objects...";
}

function modelLoaded() {
   console.log("model Loaded!");
   theStatus = true;
   objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {

   if ( error ) {
      console.error(error);
   } else {
      console.log(result);
   }
}

function draw() {
   image(img, 0, 0, 500, 500)
}