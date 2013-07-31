App.Particle = {
	position: Object.create(App.Point),
	draw: function($p){
		$p.ellipse(100,100,100,100);
	}
	
}