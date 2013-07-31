App.ParticleSystem = function(){
	this.particles = [];
	this.origin = new App.Point();
	this.$numberOfParticles = null;
	this.minX = -1;
	this.maxX = -1;
	this.minY = -1;
	this.maxY = -1;
	this.lifeSpan = 0;


	this.init = function(numberOfParticles, suggestedOrigin){
		this.origin = suggestedOrigin.copy();
		this.particles = [];
		for(var i=0;i<numberOfParticles;i++){
			this.addParticle(suggestedOrigin);
		}
		this.numberOfParticles = document.getElementById('numberOfParticles');
	};

	this.run = function($p){
		for(var i = this.particles.length -1; i>=0; i--){
			this.particles[i].update();
			this.particles[i].draw($p);
			if(this.particles[i].isDead()) {
				this.particles.splice(i,1);
			}
		}
		this.numberOfParticles.innerText = this.particles.length;
	};

	this.addParticle = function(suggestedOrigin){
		var particle = new App.Particle();
		var origin = suggestedOrigin || this.origin;
		particle.setPosition(origin);
		particle.changeSpeedXRange(this.minX,this.maxX);
		particle.changeSpeedYRange(this.minY,this.maxY);
		particle.setLifeSpan(this.lifeSpan);
		this.particles.push(particle);
	}

	this.setMediumDensity = function(){
		this.lifeSpan = 100;
	};

	this.setLightDensity = function(){
		this.lifeSpan = 30;
	};

	this.setHighDensity = function(){
		this.lifeSpan = 200;
	};
	this.setThrowLeftMode = function(){
		this.minX = -4;
        this.maxX = 0;
        this.minY = -4;
        this.maxY = -0;

	};
	this.setFountainMode = function(){
		this.minX = -1;
        this.maxX = 1;
        this.minY = -4;
        this.maxY = -0;
	};
	this.setCometMode = function(){
		this.minX = 3;
        this.maxX = 6;
        this.minY = -1;
        this.maxY = 1;
	};
	this.setConfettiMode = function(){
		this.minX = -4;
        this.maxX = 4;
        this.minY = -4;
        this.maxY = 4;
	};
	this.setMannekenMode = function(){
		this.minX = -1;
        this.maxX = -1;
        this.minY = -1;
        this.maxY = -1;
	}

	this.changeSpeedXRange = function(minX, maxX){
		this.minX = minX;
		this.maxX = maxX;
	};

	this.changeSpeedYRange = function(minY, maxY){
		this.minY = minY;
		this.maxY = maxY;
	};

	this.size = function(){
		return this.particles.length;
	};

};





