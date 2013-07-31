App.Particle = function(){
	
	var randomSpeed = function(){
		var speed = new App.Point();
		speed.x = App.Helper.randomRange(-1,1);
		speed.y = App.Helper.randomRange(-2,2);
		return speed;
	}

	this.position = null;
	this.radius = 10;
	this.speed = randomSpeed();

};

App.Particle.prototype.draw = function($p){
		if(this.position === null) return;
		$p.noStroke();
		$p.fill(255);
		$p.ellipse(this.position.x,this.position.y,this.radius,this.radius);
};

App.Particle.prototype.update = function(){
	this.position.x += this.speed.x;
	this.position.y += this.speed.y;
};

App.Particle.prototype.setPosition = function(point){
		this.position = point.copy();
};
	
