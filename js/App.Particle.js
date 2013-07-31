App.Particle = function(){
	this.position= null;
	this.radius= 10;
};
App.Particle.prototype.draw = function($p){
		if(this.position === null) return;
		$p.noStroke();
		$p.fill(255);
		$p.ellipse(this.position.x,this.position.y,this.radius,this.radius);
	};
App.Particle.prototype.setPosition = function(point){
		this.position = point.copy();
};
	
