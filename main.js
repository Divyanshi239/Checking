var nose_x, nose_y;
var rightEye_x, rightEye_y;
function preload() {
    mustache = loadImage("https://i.postimg.cc/66vvKj9q/Mustache.png");
    lips = loadImage("https://i.postimg.cc/J04vND7d/Lips.png");
    specs = loadImage("https://i.postimg.cc/bvfzQT7C/themehouseparty-party-specs-cool-shape-funky-party-wear-glasses-original-imafp7dyxsmh4uwj-removebg-p.png");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function draw() {
    image(video, 5, 5, 390, 390);
    fill("red");
    //circle(nose_x, nose_y, 30);
    image(mustache, nose_x-26, nose_y, 70, 30);
    image(lips, nose_x-24, nose_y+24, 55, 22);
    image(specs, rightEye_x-40, rightEye_y-20, 160, 120);
}

function take_snapshot() {
    save("ClownNoseFilter.png");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
        console.log("Eye x = " + results[0].pose.leftEye.x);
        //console.log("Right Wrist x = " + results[0].pose.rightWrist.x);
        //console.log("Right Wrist y = " + results[0].pose.rightWrist.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        rightEye_x = results[0].pose.rightEye.x;
        rightEye_y = results[0].pose.rightEye.y;
    }
}