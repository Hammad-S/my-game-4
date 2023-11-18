//TREX GAME using JS

//Declare variables for game objects and behaviour indicators(FLAGS)
var trex, trexRun, trexDead;
var ground, groundIMG, invGround;
var cloud, cloudIMG, cloudsGroup;
var cactus, cactiGroup, cactus1, cactus2, cactus3, cactus4, cactus5, cactus6;
var gameOver, resetButton, resetIconImg, gameOverImg;
var score, hiScore, displayHS;
var PLAY, END, gameState;
var jumpSound, dieSound, checkPointSound;
var score = 0;
//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
  bkIMG = loadImage("./assets/bj1.jpg");
  playerIMG = loadImage("./assets/bike.png");
  coneIMG = loadImage("./assets/cone2.png");
  spikesIMG = loadImage("./assets/spikes 1.png");
  tyresIMG = loadImage("./assets/tyres2.png");
  barrierIMG = loadImage("./assets/barrier.jpg");
  coinIMG = loadImage("./assets/goldcoin.png");
}
function setup() {
  createCanvas(1200, 700);
  bk = createSprite(600, 350, 1200, 700);
  bk.addImage(bkIMG);
  bk.scale = 1.7;
  bk.x = bk.width / 2;
  bk.velocityX = -2;
  coneGp = new Group();
  tyresGp = new Group();
  spikesGp = new Group();
  goldcoinGp = new Group();
  player = createSprite(100, 350, 10, 10);
  player.addImage(playerIMG);
  barrier = createSprite(100, 700, 2000, 20);
  barrier.addImage(barrierIMG);
  barrier.scale = 0.5;
}
function draw() {
  background("#faf796");
  if (bk.x < 100) {
    bk.x = bk.width / 2;
  }
  if (keyDown(UP_ARROW)) {
    player.y = player.y + 10;
  }
  if (keyDown(DOWN_ARROW)) {
    player.y = player.y - 10;
  }
  if (spikesGp.isTouching(player)) {
    spikesGp.destroyEach();
  }
  if (goldcoinGp.isTouching(player)) {
    goldcoinGp.destroyEach();
    score = score + 5;
  }
  if (tyresGp.isTouching(player)) {
    tyresGp.destroyEach();
  }
  if (coneGp.isTouching(player)) {
    coneGp.destroyEach();
  }

  //for (var i = 0; 1 < tyresGp.length; i++) {
  // if (player.isTouching(tyresGp.get(i))) {
  //   tyresGp.get(i).destroy();
  //  }
  // }
  spawnObstacles();
  drawSprites();
  textSize(30);
  fill("red");
  text("Score:  " + score, 100, 100);
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    cone = createSprite(1200, 250, 10, 10);
    cone.addImage(coneIMG);
    cone.y = random(50, 600);
    cone.velocityX = -5;
    cone.scale = 0.3;
    cone.lifetime = 600;
    coneGp.add(cone);
  }
  if (frameCount % 200 === 0) {
    spikes = createSprite(1200, 250, 10, 10);
    spikes.addImage(spikesIMG);
    spikes.y = random(50, 600);
    spikes.velocityX = -8;
    spikes.scale = 0.3;
    spikes.lifetime = 600;
    spikesGp.add(spikes);
  }
  if (frameCount % 150 === 0) {
    coin = createSprite(1200, 250, 10, 10);
    coin.addImage(coinIMG);
    coin.y = random(50, 600);
    coin.velocityX = -8;
    coin.scale = 0.1;
    coin.lifetime = 600;
    goldcoinGp.add(coin);
  }

  if (frameCount % 250 === 0) {
    tyres = createSprite(1200, 250, 10, 10);
    tyres.addImage(tyresIMG);
    tyres.y = random(50, 600);
    tyres.velocityX = -5;
    tyres.scale = 0.3;
    tyres.lifetime = 600;
    tyresGp.add(tyres);
  }
}
