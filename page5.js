function back(){
    window.location='main_page.html';
}
img="";
status="";
objects=[];
function preload(){
    img=loadImage("teddy bear.webp");
}
function setup(){
    canvas=createCanvas(600,445);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Teddy Bear detected";
}
function draw(){
    function draw() {
        image(img, 0, 0, 640, 420);
        if (status != "") {
            for (i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status- Detected Objects";
                fill("red");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("red");
                rect(objects[i].x, objects[i].y, objects[i].height, objects[i].width);
            }
        }
    } 
}

function modelLoaded(){
    console.log("Model is Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    } console.log(result);
    objects=result;
}
