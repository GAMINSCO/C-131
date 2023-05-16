var img = "";
var theStatus = '';
var object = "";

function preload() {
   img = loadImage("room3.jpg");
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

   if (error) {
      console.error(error);
   } else {
      object = result;
      console.log(object);
   }
}

function draw() {
   image(img, 0, 0, 500, 500);
   strokeWeight(2);
   textSize(20);

   for (i = 0; i < object.length; i++) {
      document.getElementById("status").innerHTML = "Object detected!";

      percent = Math.floor(object[i].confidence * 100);
      fill('#8cff2e');
      text(object[i].label + "  " + percent + "%", object[i].x, object[i].y);
      noFill();
      stroke("#8cff2e");
      rect(object[i].x, object[i].y, object[i].width, object[i].height);
   }

}