App.SketchSettings = {
    backgroundColor: 0xFFF0F0D8,
    strokeColor: 0xFF604848
}

App.Sketch = function($p) {

    var w = 600,
        h = 400;
    var particle;

    function setup() {
        $p.size(w, h);
        $p.strokeWeight(2);
        particle = Object.create(App.Particle);
    }

    function initBackground(){
        $p.background(App.SketchSettings.backgroundColor);
        $p.stroke(App.SketchSettings.strokeColor);
    }

  
    function draw() {
        initBackground();
        particle.draw($p);
    }
    
    $p.setup = setup;
    $p.draw = draw;
};