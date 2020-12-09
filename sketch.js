var gameState = "intro";
var c = [];


function preload() {
  c = loadImage("Cheese.png");
  m = loadAnimation("Mouse1.png", "Mouse2.png");
  i = loadImage("Starting.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  mouse = createSprite(915, 65, 30, 30);
  mouse.addAnimation("running", m);


  for (var i = 0; i < 100; i++) {
    var randX = Math.round(random(0, windowWidth))
    var randY = Math.round(random(0, windowHeight))
    c[i] = createSprite(randX, randY, 30, 30);
    c[i].addImage(c);
    c[i].scale = 0.1;
    drawSprites();
  }


}

function draw() {
  background(0);

  text(mouseX + ',' + mouseY, mouseX, mouseY);

  if (gameState === "intro") {
    for (var i = 0; i < 100; i++) {
      c[i].visible = false;
    }
    mouse.visible = false;
    introLevel();
  }

  if (gameState === "level1") {
    for (var i = 0; i < 100; i++) {
      c[i].visible = true;

    }
    mouse.visible = true;
    level1();
  }

  drawSprites();
}

function introLevel() {
  image(i, 100, 100);

  textSize(20);
  stroke("yellow");

  strokeWeight(5);
  text("Help the Mouse eat as much cheese as possible", 350, 50);
  text("Press Space to Start", 450, 250);

  if (keyDown("space")) {
    gameState = "level1";
  }
}

function level1() {


}