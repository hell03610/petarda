App.Point = function(x,y){
	this.x = x || 0;
	this.y = y || 0;

	this.add = function(point){
			this.x += point.x;
			this.y += point.y;
	};

	this.copy = function(){
		var copycat = new App.Point();
		copycat.x = this.x;
		copycat.y = this.y;
		return copycat;
	};

};

