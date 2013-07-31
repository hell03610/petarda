App.SketchSettings = {
    backgroundColor: 0xFF080808,
    strokeColor: 0xFF604848
}

App.Sketch = function($p) {

    var w = 600,
        h = 400;
    var particle,
        system;

    function setup() {
        $p.size(w, h);
        $p.strokeWeight(2);
        particle = new App.Particle();

        var origin = new App.Point();
        origin.x = 50;
        origin.y = 50;
        system = new App.ParticleSystem();
        system.init(10, origin);
       
    }

    function initBackground(){
        $p.background(App.SketchSettings.backgroundColor);
        $p.stroke(App.SketchSettings.strokeColor);
    }

  
    function draw() {
        initBackground();
        particle.draw($p);
        system.update();
        system.draw($p);
    }
    
    $p.setup = setup;
    $p.draw = draw;
};