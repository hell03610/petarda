App.Particle = function(){
	
	
	this.position = null;
	this.radius = 10;
	this.gravity = new App.Point(0,0.05);
	this.lifeSpan = 0;
	this.color = App.Color.createRandom();
	this.speedMinX = 0;
	this.speedMaxX = 0;
	this.speedMinY = 0;
	this.speedMaxY = 0;


	this.randomSpeed = function(){
		var speed = new App.Point();
		speed.x = App.Helper.randomRange(this.speedMinX,this.speedMaxX);
		speed.y = App.Helper.randomRange(this.speedMinY,this.speedMaxY);
		return speed;
	}


	this.speed = this.randomSpeed();
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

App.Particle.prototype.setLifeSpan = function(lifeSpan){
	this.lifeSpan = lifeSpan;
}

App.Particle.prototype.changeSpeedXRange = function(min, max){
	this.speedMinX = min;
	this.speedMaxX = max;
	this.speed = this.randomSpeed();
}

App.Particle.prototype.changeSpeedYRange = function(min, max){
	this.speedMinY = min;
	this.speedMaxY = max;
	this.speed = this.randomSpeed();
}

App.Particle.prototype.isDead = function(){
	return this.lifeSpan < 0.0;
	
	//var isOut = this.position.x < 0 || this.position.x > 900 || this.position.y < 0 || this.position.y > 400;
	//return isOut;
	//return false;
}
	
