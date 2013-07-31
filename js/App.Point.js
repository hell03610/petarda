App.Point = function(x,y,z){
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
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