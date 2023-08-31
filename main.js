let capture;
let photoFrame;
let takePhotoButton;

function setup() {
    const canvas = createCanvas(640, 480);
    canvas.parent("sketch-container");

    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();

    photoFrame = loadImage("Google-Logo-2.webp"); 
    takePhotoButton = createButton("Take Photo");
    takePhotoButton.mousePressed(takePhoto);
    takePhotoButton.parent("sketch-container");
}

function draw() {
    background(255);
    image(capture, 0, 0, width, height);
    image(photoFrame, 0, 0, width, height);
}

function takePhoto() {
    saveCanvas("myPhoto", "png"); 
}
