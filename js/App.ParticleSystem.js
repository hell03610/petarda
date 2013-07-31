App.ParticleSystem = function(){
	this.particles = [];
	this.origin = new App.Point();
	this.$numberOfParticles = null;
};

App.ParticleSystem.prototype.init = function(numberOfParticles, suggestedOrigin){
		this.origin = suggestedOrigin.copy();
		this.particles = [];
		for(var i=0;i<numberOfParticles;i++){
			this.addParticle(suggestedOrigin);
		}
		this.numberOfParticles = document.getElementById('numberOfParticles');
};

App.ParticleSystem.prototype.run = function($p){
	for(var i = this.particles.length -1; i>=0; i--){
		this.particles[i].update();
		this.particles[i].draw($p);
		if(this.particles[i].isDead()) {
			this.particles.splice(i,1);
		}
	}
	this.numberOfParticles.innerText = this.particles.length;
}

App.ParticleSystem.prototype.addParticle = function(suggestedOrigin){
		var particle = new App.Particle();
		var origin = suggestedOrigin || this.origin;
		particle.setPosition(origin);
		this.particles.push(particle);
}

App.ParticleSystem.prototype.isDead = function() {
    return (particles.length == 0)
}


App.ParticleSystem.prototype.size = function(){
	return this.particles.length;
}
