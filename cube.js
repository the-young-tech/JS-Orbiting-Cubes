let colors = ['#FF4136', '#FFDC00', '#2ECC40', '#0074D9', '#FF851B', '#fffff', '#7FDBFF', '#01FF70'];
let cubeState = {
    front: [['r', 'r', 'g'], ['y', 'g', 'y'], ['b', 'w', 'w']],
    back: [['w', 'o', 'o'], ['o', 'b', 'b'], ['g', 'r', 'r']],
    left: [['o', 'r', 'r'], ['y', 'o', 'o'], ['g', 'y', 'w']],
    right: [['g', 'g', 'b'], ['r', 'w', 'w'], ['y', 'b', 'y']],
    top: [['b', 'w', 'o'], ['o', 'y', 'g'], ['r', 'g', 'b']],
    bottom: [['w', 'y', 'y'], ['b', 'w', 'r'], ['o', 'g', 'r']]
};

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);
    rotateX(frameCount * 0.015);
    rotateY(frameCount * 0.015);

    let boxSize = 50;
    let gap = 0;
    
    push();
    translate(-400, 0, 0);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                push();
                translate((i - 1) * (boxSize + gap), (j - 1) * (boxSize + gap), (k - 1) * (boxSize + gap));
                let colorIndex = getColorIndex(i, j, k);
                fill(colors[colorIndex]);
                box(boxSize);
                pop();
            }
        }
    }
    pop();

    push();
    translate(400, 0, 0); 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                push();
                translate((i - 1) * (boxSize + gap), (j - 1) * (boxSize + gap), (k - 1) * (boxSize + gap));
                let colorIndex = getColorIndex(i, j, k);
                fill(colors[colorIndex]);
                box(boxSize);
                pop();
            }
        }
    }
    pop();

    push();
    translate(0, 400, 0);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                push();
                translate((i - 1) * (boxSize + gap), (j - 1) * (boxSize + gap), (k - 1) * (boxSize + gap));
                let colorIndex = getColorIndex(i, j, k);
                fill(colors[colorIndex]);
                box(boxSize);
                pop();
            }
        }
    }
    pop();

    push();
    translate(0, 0, 400);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                push();
                translate((i - 1) * (boxSize + gap), (j - 1) * (boxSize + gap), (k - 1) * (boxSize + gap));
                let colorIndex = getColorIndex(i, j, k);
                fill(colors[colorIndex]);
                box(boxSize);
                pop();
            }
        }
    }
    pop();

    push();
    translate(0, 0, -400);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                push();
                translate((i - 1) * (boxSize + gap), (j - 1) * (boxSize + gap), (k - 1) * (boxSize + gap));
                let colorIndex = getColorIndex(i, j, k);
                fill(colors[colorIndex]);
                box(boxSize);
                pop();
            }
        }
    }
    pop();

    push();
    translate(0, -400, 0);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                push();
                translate((i - 1) * (boxSize + gap), (j - 1) * (boxSize + gap), (k - 1) * (boxSize + gap));
                let colorIndex = getColorIndex(i, j, k);
                fill(colors[colorIndex]);
                box(boxSize);
                pop();
            }
        }
    }
    pop();
}

function getColorIndex(i, j, k) {
    let face, row, col;
    if (i == 0) {
        face = 'left';
        row = j;
        col = k;
    } else if (i == 2) {
        face = 'right';
        row = j;
        col = k;
    } else if (j == 0) {
        face = 'front';
        row = k;
        col = i;
    } else if (j == 2) {
        face = 'back';
        row = k;
        col = i;
    } else if (k == 0) {
        face = 'bottom';
        row = i;
        col = j;
    } else {
        face = 'top';
        row = i;
        col = j;
    }
    let colorCode = cubeState[face][row][col];
    return 'wrgyob'.indexOf(colorCode);
}
