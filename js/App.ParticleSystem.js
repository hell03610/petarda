App.ParticleSystem = function(){
	this.particles = [];
	this.origin = new App.Point();
	this.$numberOfParticles = null;
	this.minX = -1;
	this.maxX = -1;
	this.minY = -1;
	this.maxY = -1;
	this.lifeSpan = 0;

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
		particle.changeSpeedXRange(this.minX,this.maxX);
		particle.changeSpeedYRange(this.minY,this.maxY);
		particle.setLifeSpan(this.lifeSpan);
		this.particles.push(particle);
}

App.ParticleSystem.prototype.setMediumDensity = function(){
	this.lifeSpan = 100;
}

App.ParticleSystem.prototype.setLightDensity = function(){
	this.lifeSpan = 30;
}

App.ParticleSystem.prototype.setHighDensity = function(){
	this.lifeSpan = 200;
}


App.ParticleSystem.prototype.changeSpeedXRange = function(minX, maxX){
	this.minX = minX;
	this.maxX = maxX;
}

App.ParticleSystem.prototype.changeSpeedYRange = function(minY, maxY){
	this.minY = minY;
	this.maxY = maxY;
}

App.ParticleSystem.prototype.size = function(){
	return this.particles.length;
}
