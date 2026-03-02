
/*******************************************************/
// setup()
/*******************************************************/
let C4;
let Csharp;
let D4;
let Dsharp;
let E4;
let F4;
let Fshard;
let G4;
let Gsharp;
let A4;
let Asharp;
let B4;
let C5;
function preload() {
C4 = loadSound("mp3Files/C.mp3");
Csharp = loadSound("mp3Files/Csharp.mp3");
D4 = loadSound("mp3Files/D.mp3");
Dsharp = loadSound("mp3Files/Dsharp.mp3");
E4 = loadSound("mp3Files/E.mp3");
F4 = loadSound("mp3Files/F.mp3");
Fsharp = loadSound("mp3Files/Fsharp.mp3");
G4 = loadSound("mp3Files/G.mp3");
Gsharp = loadSound("mp3Files/Gsharp.mp3");
A4 = loadSound("mp3Files/A.mp3");
Asharp = loadSound("mp3Files/Asharp.mp3");
B4 = loadSound("mp3Files/B.mp3");
C5 = loadSound("mp3Files/HighC.mp3");
}

function setup() {
	console.log("setup: ");
cnv = new Canvas(1920, 941);
Rect = new Sprite(500, 200, 100, 300);
Rect.color = 'white';
}

function keyPressed() {
  //natural notes
    if (key === 'q') {
    C4.play();
  }
   if (key === 'w') {
    D4.play();
  }
    if (key === 'e') {
    E4.play();
  }
  if (key === 'r') {
    F4.play();
  }
   if (key === 't') {
    G4.play();
  }
 if (key === 'y') {
    A4.play();
  }
    if (key === 'u') {
    B4.play();
  }
 if (key === 'i') {
    C5.play();
  }

  //Sharps
  if (key === '2') {
    Csharp.play();
  } 
  if (key === '3') {
    Dsharp.play();
  }
  if (key === '5') {
    Fsharp.play();
  }
  if (key === '6') {
    Gsharp.play();
  }
  if (key === '7') {
    Asharp.play();
  }
  
 
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background ('pink')
if (kb.pressing('q')) {
Rect.color = 'grey';
}
if (kb.released('q')) {
Rect.color = 'white';
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/