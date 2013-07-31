App.SketchSettings = {
    backgroundColor: 0xFF080808,
    strokeColor: 0xFF604848
}

App.Sketch = function($p) {

    var w = 600,
        h = 400,
        timer = 100.0;

    var system;

    function setup() {
        $p.size(w, h);
        $p.strokeWeight(2);

        var origin = new App.Point();
        origin.x = w / 2.0;
        origin.y = h / 2.0;
        system = new App.ParticleSystem();
        system.init(10, origin);
       
    }

    function initBackground(){
        $p.background(App.SketchSettings.backgroundColor);
        $p.stroke(App.SketchSettings.strokeColor);
    }

  
    function run() {
        initBackground();
        system.run($p);
    }
    
    $p.setup = setup;
    $p.draw = run;
};