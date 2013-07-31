App.SketchSettings = {
    backgroundColor: 0xFF080808,
    strokeColor: 0xFF604848
}

App.Sketch = function($p) {

    var w = 900,
        h = 400;

    var system;
    var maxNumberOfParticles = 1000;

    function setup() {
        $p.size(w, h);
        $p.strokeWeight(2);

        system = new App.ParticleSystem();
        var center = new App.Point(w/2.0, h/2.0);
        system.init(10, center);
       
    }

    function initBackground(){
        $p.background(App.SketchSettings.backgroundColor);
        $p.stroke(App.SketchSettings.strokeColor);
    }

  
    function run() {
        initBackground();
        system.run($p);
        if(system.size() < maxNumberOfParticles){
            system.addParticle();
        }
    }
    
    $p.setup = setup;
    $p.draw = run;
    $p.mousePressed = function(){
        system.init(10,new App.Point($p.mouseX,$p.mouseY));
    }
};