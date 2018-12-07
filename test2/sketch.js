var mrefreshinterval = 500; // update display every 500ms
var lastmousex=-1;
var lastmousey=-1;
var lastmousetime;
var mousetravel = 0;
var mousedelta = 0;
window.addEventListener('mousemove', function(e) {
  var mousex = e.pageX;
  var mousey = e.pageY;
  if (lastmousex > -1)
     mousetravel = Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
  lastmousex = mousex;
  lastmousey = mousey;
  console.log(mousetravel);
});

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background('black');
  textSize(32);
  blendMode(SCREEN);
  noCursor();
}

function mouseClicked() {
  saveCanvas('myCanvas', 'png');
  console.log("Saved");
}

function draw() {
  //blendMode(MULTIPLY);
  if (mouseIsPressed) {
    fill('#000');
  } else {
    fill('#f45042');
  }

  // Size of ellipse (diameter)
  let size = mousetravel * 1.5;

  text('FUCK', mouseX, mouseY);
  //ellipse(mouseX, mouseY, size, size);
}
