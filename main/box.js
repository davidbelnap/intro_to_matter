function Box(x, y, w, h) {
	var options = {
		friction: 0.5,
		restitution: 0.6,
	}
	this.body = Bodies.rectangle(x, y, w, h, options);
	this.w = w;
	this.h = h;
  World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		var r = random(0, 255);
		var g = random(0, 255);
		var b = random(0, 255);
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(1);
		stroke(255);
		fill(r, g, b);
		rect(0, 0, this.w, this.h);
		pop();
	}	
}