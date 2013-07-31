App.Helper = {};
App.Helper.randomRange = function(min, max){
	return Math.random() * (max - min) + min;
}

App.Helper.randomColor = function(){
	return randomRange(0,255);
}

App.Helper.createRandomColor = function(){
	var r = App.Helper.randomRange(0,255);
	var g = App.Helper.randomRange(0,255);
	var b = App.Helper.randomRange(0,255);

	return {r:r,g:g,b:b};
}