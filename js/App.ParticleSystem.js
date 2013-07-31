App.ParticleSystem = function(){
	this.particles = [];
	this.origin = new App.Point();
};

App.ParticleSystem.prototype.init = function(numberOfParticles, suggestedOrigin){
		this.origin = suggestedOrigin.copy();
		for(var i=0;i<numberOfParticles;i++){
			var particle = new App.Particle();
			particle.setPosition(suggestedOrigin);
			this.particles.push(particle);
		}
};

App.ParticleSystem.prototype.draw = function($p){
		for(var i=0; i<this.particles.length; i++){
			this.particles[i].draw($p);
		}
};

App.ParticleSystem.prototype.update = function($p){
		for(var i=0; i<this.particles.length; i++){
			this.particles[i].update();
		}
};
