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

App.ParticleSystem.prototype.run = function($p){
	for(var i = this.particles.length -1; i>=0; i--){
		this.particles[i].draw($p);
		this.particles[i].update();
		if(this.particles[i].isDead()) this.particles.removeAt(i);
	}
}
