function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(100,100);
    canvas=createCanvas(550,500);
    canvas.position(900,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
background("black");
}

function modelLoaded()
{
    console.log('What is this...?')
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("rightWristofx=" + rightWristX + "leftWristofy=" + leftWristY + "different" + difference);
    }
}

function draw()
{
    background("black");
    document.getElementById("square_side").innerHTML="Just look in the console. It is right there." + difference + " it is";
    fill("greenyellow");
    text(o,10 ,10)
    textSize(difference);
}