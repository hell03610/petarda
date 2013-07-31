App.Point = function(x,y){
	this.x = x || 0;
	this.y = y || 0;
};
App.Point.prototype.add = function(point){
		this.x += point.x;
		this.y += point.y;
};
App.Point.prototype.copy = function(){
		var copycat = new App.Point();
		copycat.x = this.x;
		copycat.y = this.y;
		return copycat;
};

App.Color = function(r,g,b){
	this.r = r || 0;
	this.g = g || 0;
	this.b = b || 0;
}

App.Color.createRandom = function(){
	var r = App.Helper.randomRange(0,255);
	var g = App.Helper.randomRange(0,255);
	var b = App.Helper.randomRange(0,255);

	return new App.Color(r,g,b);
}