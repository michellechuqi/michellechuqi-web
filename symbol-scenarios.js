var lat;
var latNum;
var latCaption;
var latRangeText;

var long;
var longNum;
var longCaption;
var longRangeText;

var dataValue;
var dataValueLabelPrefix;
var dataValueLabelUnits;



function setup() {
  
  createCanvas(600, 420); 

  lat = createInput('0', 'number').size(50, 20);
  lat.attribute('min', '-90');
  lat.attribute('max', '90');
  lat.position(160, 80);
  latCaption = createElement('p', 'Latitude:');
  latCaption.position(80, 80);
  latRangeText = createElement('p', 'In range [-90, 90]');
  latRangeText.position(80, 100); 

  long = createInput('0', 'number').size(60, 20);
  long.attribute('min', '-180');
  long.attribute('max', '180');
  long.position(160, 250);
  longCaption = createElement('p', 'Longitude:');
  longCaption.position(80, 250);
  longRangeText = createElement('p', 'In range [-180, 180]');
  longRangeText.position(80, 270);

  dataValue = createInput("100","number").size(60, 20);
  dataValue.position(155, 350);

  dataValueLabelPrefix = createElement('p', 'Magnitude:');
  dataValueLabelPrefix.position(80, 350);

}

function draw() {

  background(220);

  latNum = Number(lat.value());
  longNum = Number(long.value());

  // WHERE to plot circle: transform lat-lon values to plate carrée (PC)
  var x_longPC = longNum + 180;
  var y_latPC = 90 - latNum;  

  var magnitude;

  magnitude = Number(dataValue.value());

  fill(0, 0, 0);
  text('We currently are seeing a magnitude of:' + magnitude, 340, 400);

  // only draw symbol if lat AND long entries are in range:
  if (latNum >= -90 && latNum <= 90 &&
      longNum >= -180 && longNum <= 180) {

        if (magnitude < 0) {
          // Negative value: draw a small red X
          stroke(255, 0, 0);
          strokeWeight(2);
          line(245, 120, 255, 130);
          line(255, 120, 245, 130);

        } else if (magnitude <= 100) {
        // 0–100 inclusive: black circle, width 5
          fill(0);
          noStroke();
          circle(x_longPC, y_latPC, 5);

        } else if (magnitude <= 200) {
          // between 100 and up to 200 inclusive, black and width 10
          fill(0);
          noStroke();
          circle(x_longPC, y_latPC, 10);

        } else {
          // Greater than 200: black circle, width 15
          fill(0);
          noStroke();
          circle(x_longPC, y_latPC, 15);
        }
      }
}

