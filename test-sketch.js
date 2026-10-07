// make a grid of filled squares where:
// the upper left corner is black,
// the upper right corner is pure red,
// the lower left corner is pure blue,
// the lower right corner is red and blue mixed,
// and there are at least several shades in between.

function setup() {
  createCanvas(250, 250);
  background(255);
}
// i controls x; controls redness
// j controls y; controls blueness
function draw() {
  var nsw = 5; // Number of Squares desired across the Width of canvas
  for (var i = 0; i < nsw; i = i + 1) {
    for (var j = 0; j < nsw; j = j + 1) {
      fill(0 + i*255/nsw, 0, 0, 255/2) // increasing redness as moves right
      rect(0 + i*width/nsw, 0 + j*width/nsw, width/nsw, width/nsw);

      fill(0, 0, 0 + j*255/nsw, 255/2); // increasing blueness as moves down
      rect(0 + i*width/nsw, 0 + j*width/nsw, width/nsw, width/nsw);
    }
  }
}