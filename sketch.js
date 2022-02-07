//var img;
var f1, f1book, f1monitor, f1drawer, t1a;
var t1f, t1f1, t1f2, t1f3, t1f4, t1f5, t1b;
var textFiller, textHeader;

function preload() {
  //img = loadImage('assets/bee.jpg');
  t1b = loadImage('assets/t1b.png');
  t1a = loadImage('assets/t1a.jpg');
  f1 = loadImage('assets/f1.png');
  f1book = loadImage('assets/f1book.png');
  f1monitor = loadImage('assets/f1monitor.png');
  f1drawer = loadImage('assets/f1drawer.png');

  t1f = loadImage('assets/t1f.png');
  t1f1 = loadImage('assets/t1f1.png');
  t1f2 = loadImage('assets/t1f2.png');
  t1f3 = loadImage('assets/t1f3.png');
  t1f4 = loadImage('assets/t1f4.png');
  t1f5 = loadImage('assets/t1f5.png');

  textFiller = "";
  textHeader = "";
}

function setup() {
  createCanvas(1200,900);

}

function draw() {
  // if(mouseX >=275 && mouseX <=575 && mouseY >= 50 && mouseY <=250){
  //   image(f1book, 0,0);
  //   textFiller = "book";
  // } else
  // if(mouseX >=325 && mouseX <=725 && mouseY >= 300 && mouseY <=550){
  //   image(f1monitor, 0,0);
  //   textFiller = "monitor";
  // } else
  // if(mouseX >=775 && mouseX <=975 && mouseY >= 575 && mouseY <=875){
  //   image(f1drawer, 0,0);
  //   textFiller = "drawers";
  // } else {
  //   image(t1a,0,0, 1200, 900);
  //   textFiller = "";
  // };

  if(mouseX >=100 && mouseX <=300 && mouseY >= 10 && mouseY <=160){
    image(t1f1, 0,0);
    textHeader = "sun";
    textFiller = "sun Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  } else
  if(mouseX >=600 && mouseX <=800 && mouseY >= 50 && mouseY <=200){
    image(t1f2, 0,0);
    textHeader = "books";
    textFiller = "books Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  } else
  if(mouseX >=425 && mouseX <=945 && mouseY >= 200 && mouseY <=530){
    image(t1f3, 0,0);
    textHeader = "monitor";
    textFiller = "monitor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  } else
  if(mouseX >=1050 && mouseX <=1200 && mouseY >= 440 && mouseY <=690){
    image(t1f4, 0,0);
    textHeader = "storage";
    textFiller = "storage Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  } else
  if(mouseX >=200 && mouseX <=1050 && mouseY >= 700 && mouseY <=850){
    image(t1f5, 0,0);
    textHeader = "worship";
    textFiller = "worship Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  } else {
    image(t1f,0,0, 1200, 900);
    textHeader = "";
    textFiller = "";
  };
  //background(128);
text(textHeader, 50, 350);
  text(textFiller, 50, 400, 250, 300);

  //image(img,mouseX-25,mouseY-25,50,50);

//noCursor();
}
