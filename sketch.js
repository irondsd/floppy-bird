var bird;
var pipes = [];
var score = 0;
var passedPipes = [];
var birdImg;
var pipe_headImg;
var pipe_bodyImg;

function setup() {
  if (this.lost) {
    return;
  }
  createCanvas(1200, 600);
  bird = new Bird();
  this.level = 1;
  this.lost = false;

  bird_img = loadImage('https://i.imgur.com/DXi2y95.png')
  pipe_headImg = loadImage('https://i.imgur.com/BjvxJCE.png')
  pipe_bodyImg = loadImage('https://i.imgur.com/8wE6HFy.png')
}

function draw() {
  if (lost) { return; }
  background(80, 50, 20);

  // fill(255);
  // x = rect(10, 10, 120, 40);


  if (frameCount % 70 == 0) {
    pipes.push(new Pipe(3 + this.level));
  }

  if (frameCount % 600 == 0) {
    this.level += 1;

    for (var i = 0; i < pipes.length; i++) {
      pipes[i].speed = 3 + this.level;
      pipes[i].update();
    }

    console.log("Level: " + this.level);
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show(pipe_headImg, pipe_bodyImg);
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      this.lost = true;
    }

    if (pipes[i].passed(bird) && !passedPipes.includes(pipes[i])) {
      score += 1;
      console.log("Score: ", score);
      passedPipes.push(pipes[i]);
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.show(bird_img);
  bird.update();

  if (bird.y === 600) {
    this.lost = true
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}