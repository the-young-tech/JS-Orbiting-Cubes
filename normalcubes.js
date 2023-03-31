function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    normalMaterial();
}

function draw() {
    background(0);
    rotateX(frameCount * 0.020);
    rotateY(frameCount * 0.020);

    // Box 1
    push();
    translate(-250, 250, 250);
    box(150);
    pop();

    // Box 2
    push();
    translate(250, -250, 250);
    box(150);
    pop();
    // Box 3
    push();
    translate(250, 250, -250);
    box(150);
    pop();

    // Box 4
    push();
    translate(-250, -250, -250);
    box(150);
    pop();
}
