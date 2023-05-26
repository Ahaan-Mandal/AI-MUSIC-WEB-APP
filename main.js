song_1="";
song_2="";
leftWristX=0;
rightWristY=0;
rightWristX=0
leftWristY=0;
scoreLeftWrist=0;

function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("music2.mp3");
    
}

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

} 

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotPoses(results){
    if (results > 0) {
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
       
    }

}