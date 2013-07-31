App.Particle = function(){
	
	var randomSpeed = function(){
		var speed = new App.Point();
		speed.x = App.Helper.randomRange(-1,0);
		speed.y = App.Helper.randomRange(-2,0);
		return speed;
	}

	this.position = null;
	this.radius = 10;
	this.speed = randomSpeed();
	this.gravity = new App.Point(0,0.05);
	this.lifeSpan = 60;
	this.color = App.Color.createRandom();
	

};

App.Particle.prototype.draw = function($p){
		if(this.position === null) return;
		$p.noStroke();
		$p.fill(this.color.r,this.color.g,this.color.b);
		$p.ellipse(this.position.x,this.position.y,this.radius,this.radius);
};

App.Particle.prototype.update = function(){
	this.speed.add(this.gravity);
	this.position.add(this.speed);
	this.lifeSpan -= 1;
};

App.Particle.prototype.setPosition = function(point){
		this.position = point.copy();
};

App.Particle.prototype.isDead = function(){
	//return this.lifeSpan < 0.0;
	var isOut = this.position.x < 0 || this.position.x > 640 || this.position.y < 0 || this.position.y > 400;
	return isOut;
	//return false;
}
	
