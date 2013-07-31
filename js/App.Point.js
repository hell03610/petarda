App.Point = function(){
	this.x = 0;
	this.y = 0;
	this.z =0;
}
App.Point.prototype.add = function(point){
		this.x += point.x;
		this.y += point.y;
		this.z += point.z;
	};
App.Point.prototype.copy = function(){
		var copycat = new App.Point();
		copycat.x = this.x;
		copycat.y = this.y;
		copycat.z = this.z;
		return copycat;
}