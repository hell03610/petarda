App.Helper = {};
App.Helper.randomRange = function(min, max){
	return Math.random() * (max - min) + min;
}

App.Helper.randomColor = function(){
	return randomRange(0,255);
}