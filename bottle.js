current_status = "";

img = "";
objects = "";

function preload(){
    img = loadImage("bottle.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects...";

}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#00009b");
    strokeWeight(1);
    text("Bottle", 248, 17);
    noFill();
    stroke("#00009b");
    strokeWeight(4);
    rect(240, 3, 200, 415);
}

function modelLoaded(){
    console.log("The model 'CocoSSD' is succesfully initialized.");
    current_status = true;
    object_Detector.detect(img, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error();
        document.getElementById("recogniser").innerHTML = "Error_Code:2271. Check console for details.";
    }else{
        console.log(results);
        document.getElementById("recogniser").innerHTML = "Recognising complete. Detector powering up...";
    }
}