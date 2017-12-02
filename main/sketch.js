var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine
var world
var boxes = [];

var ground;

// var groundWidth = ;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.994);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
	var groundHeight = height / 2;
  var options = {
  	isStatic: true
  }
  ground = Bodies.rectangle(width / 2, height + (groundHeight / 2) - 1, width, groundHeight, options);
  World.add(world, ground);
}

function mousePressed() {
	boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(51);
  for (var i = 0; i < boxes.length; i++) {
  	boxes[i].show();
  }
  // noStroke(255);
  // fill(170);
  // strokeWeight(4);
  // rectMode(CENTER);
  // rect(ground.position.x, ground.position.y, width, ground.groundHeight / 20);
}