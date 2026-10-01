/* Create an animation where two rectangles that are initially offscreen are
animated to enter the screen from the left-hand side. They should be
moving at different speeds, and they should come to a stop just before
exiting the screen. */

var frame_count = 0;
function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(138, 214, 142);
    frame_count = frame_count + 1;

    var x1 = -40 + frame_count;
    var x2 = (-40 + frame_count)*2;

    if (x1 < 780) {
        // rect1
        fill(255);
        rect(x1, 60, 20, 10);  
    } else {
        fill(255);
        rect(780, 60, 20, 10);
    }
    if (x2 < 780) {
        //rect2
        fill(255);
        rect(x2, 250, 20, 10);   
    } else {
        fill(255);
        rect(780, 250, 20, 10);
    }
}