App.Helper = {};
App.Helper.randomRange = function(min, max){
	return Math.random() * (max - min) + min;
}