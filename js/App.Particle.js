App.Particle = function(){
	
	var randomSpeed = function(){
		var speed = new App.Point();
		speed.x = App.Helper.randomRange(-1,1);
		speed.y = App.Helper.randomRange(-2,0);
		return speed;
	}

	this.position = null;
	this.radius = 10;
	this.speed = randomSpeed();
	this.gravity = new App.Point(0,0.05);

};

App.Particle.prototype.draw = function($p){
		if(this.position === null) return;
		$p.noStroke();
		$p.fill(255);
		$p.ellipse(this.position.x,this.position.y,this.radius,this.radius);
};

App.Particle.prototype.update = function(){
	this.speed.add(this.gravity);
	this.position.add(this.speed);
	this.timer -= 1;
};

App.Particle.prototype.setPosition = function(point){
		this.position = point.copy();
};

App.Particle.prototype.isDead = function(){
	return this.timer < 0.0;
}
	
