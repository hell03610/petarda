App.Particle = function(){
	
	
	this.position = null;
	this.radius = 10;
	this.gravity = new App.Point(0,0.05);
	this.lifeSpan = 0;
	this.color = App.Helper.createRandomColor();
	this.speedMinX = 0;
	this.speedMaxX = 0;
	this.speedMinY = 0;
	this.speedMaxY = 0;


	this.randomSpeed = function(){
		var speed = new App.Point();
		speed.x = App.Helper.randomRange(this.speedMinX,this.speedMaxX);
		speed.y = App.Helper.randomRange(this.speedMinY,this.speedMaxY);
		return speed;
	};

	this.draw = function($p){
			if(this.position === null) return;
			$p.noStroke();
			$p.fill(this.color.r,this.color.g,this.color.b);
			$p.ellipse(this.position.x,this.position.y,this.radius,this.radius);
	};


	this.update = function(){
		this.speed.add(this.gravity);
		this.position.add(this.speed);
		this.lifeSpan -= 1;
	};

	this.setPosition = function(point){
		this.position = point.copy();
	};

	this.setLifeSpan = function(lifeSpan){
		this.lifeSpan = lifeSpan;
	};

	this.changeSpeedXRange = function(min, max){
		this.speedMinX = min;
		this.speedMaxX = max;
		this.speed = this.randomSpeed();
	};

	this.changeSpeedYRange = function(min, max){
		this.speedMinY = min;
		this.speedMaxY = max;
		this.speed = this.randomSpeed();
	};

	this.isDead = function(){
		return this.lifeSpan < 0.0;
	};

	this.speed = this.randomSpeed();
};


	
