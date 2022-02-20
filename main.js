nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
canvas=createCanvas(515,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,400);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
 background("Blue");
 fill("green");
 stroke("black");
 textSize(difference);
 text("Mohamed & Saida",nosex,nosey);
 }


 function modelLoaded(){
 console.log("posenet is working!");
 }

 function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);
 }}