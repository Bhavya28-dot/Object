img="";
status="";
function preload(){
    img=loadImage("flower.webp");
}
function back(){
    window.location="main_page.html";
}
function setup(){
    canvas=createCanvas(600,445);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Flower Vase detected";
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("Flower Vase",45,75);
    noFill();
    stroke("red");
    rect(10,10,550,400);
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
}