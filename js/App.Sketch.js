App.SketchSettings = {
    backgroundColor: 0xFF080808,
    strokeColor: 0xFF604848
}

App.Sketch = function($p) {

    var w = document.getElementById('container').offsetWidth,
        h = 400;

    var system;
    
    function setup() {
        $p.size(w, h);
        $p.strokeWeight(2);
        $p.frameRate(100);

        system = new App.ParticleSystem();
        system.setMediumDensity();
        refreshSystem();
       
    }

    function initBackground(){
        $p.background(App.SketchSettings.backgroundColor);
        $p.stroke(App.SketchSettings.strokeColor);
    }

  
    function run() {
        initBackground();
        system.run($p);
        system.addParticle();
    }
    
    $p.setup = setup;
    $p.draw = run;
    $p.mousePressed = function(){
        system.init(10,new App.Point($p.mouseX,$p.mouseY));
    }

   

    document.getElementById('comet').addEventListener('click', function(){
        setValue('minX', 3);
        setValue('maxX', 6);
        setValue('minY', -1);
        setValue('maxY', 1);
        refreshSystem();
    });

     document.getElementById('manneken').addEventListener('click', function(){
        setValue('minX', -1);
        setValue('maxX', -1);
        setValue('minY', -1);
        setValue('maxY', -1);
        refreshSystem();
    });

    document.getElementById('fountain').addEventListener('click', function(){
        setValue('minX', -1);
        setValue('maxX', 1);
        setValue('minY', -4);
        setValue('maxY', 0);
        refreshSystem();
    });

    document.getElementById('confetti').addEventListener('click', function(){
        setValue('minX', -4);
        setValue('maxX', 4);
        setValue('minY', -4);
        setValue('maxY', 4);
        refreshSystem();
    });

    document.getElementById('left').addEventListener('click', function(){
        setValue('minX', -4);
        setValue('maxX', 0);
        setValue('minY', -4);
        setValue('maxY', 0);
        refreshSystem();
    });

    document.getElementById('refresh').addEventListener('click', function(){
        refreshSystem();
    });

    var refreshSystem = function(){
        var minX = parseInt(document.getElementById('minX').value || -4);
        var maxX = parseInt(document.getElementById('maxX').value || 4);
        var minY = parseInt(document.getElementById('minY').value || -4);
        var maxY = parseInt(document.getElementById('maxY').value || 4);
        
        system.changeSpeedXRange(minX,maxX);
        system.changeSpeedYRange(minY,maxY);
        
        if(document.getElementById('option-one').checked) system.setLightDensity();
        if(document.getElementById('option-two').checked) system.setMediumDensity();
        if(document.getElementById('option-three').checked) system.setHighDensity();

        var center = new App.Point(w/2.0, h/2.0);
        system.init(10, center);
    }

     var setValue = function(fieldId, value){
        document.getElementById(fieldId).value = value;
    }
};