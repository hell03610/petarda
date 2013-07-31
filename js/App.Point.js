App.Point = {
	x:0,
	y:0,
	z:0,
	add: function(point){
		x += point.x;
		y += point.y;
		z += point.z;
	},
	copy: function(){
		var copycat = Object.create(App.Point);
		copycat.x = this.x;
		copycat.y = this.y;
		copycat.z = this.z;
		return copycat;
	}
}