var App = {};

App.SketchSettings = {
    backgroundColor: 0xFF080808,
    strokeColor: 0xFF604848
};

App.Sketch = function($p) {

    var w = document.getElementById('container').offsetWidth,
        h = 400;

    var system;
    
    $p.setup = function() {
        $p.size(w, h);
        $p.strokeWeight(2);
        $p.frameRate(100);

        system = new App.ParticleSystem();
        system.setConfettiMode();
        system.setMediumDensity();
        updateValueControlsFromSystem();
        refreshSystem();   
    }

    function initBackground(){
        $p.background(App.SketchSettings.backgroundColor);
        $p.stroke(App.SketchSettings.strokeColor);
    }

  
    $p.draw = function() {
        initBackground();
        system.run($p);
        system.addParticle();
    }
    
    $p.mousePressed = function(){
        system.init(10,new App.Point($p.mouseX,$p.mouseY));
    }

    document.getElementById('comet').addEventListener('click', function(){
        system.setCometMode();
        updateValueControlsFromSystem();
        refreshSystem();
    });

     document.getElementById('manneken').addEventListener('click', function(){
        system.setMannekenMode();
        updateValueControlsFromSystem();
        refreshSystem();
    });

    document.getElementById('fountain').addEventListener('click', function(){
        system.setFountainMode();
        updateValueControlsFromSystem();
        refreshSystem();
    });

    document.getElementById('confetti').addEventListener('click', function(){
        system.setConfettiMode();
        updateValueControlsFromSystem();
        refreshSystem();
    });

    document.getElementById('left').addEventListener('click', function(){
        system.setThrowLeftMode();
        updateValueControlsFromSystem();
        refreshSystem();
    });

    document.getElementById('refresh').addEventListener('click', function(){
        refreshSystem();
    });

    var updateValueControlsFromSystem = function(){
        setValue('minX', system.minX);
        setValue('maxX', system.maxX);
        setValue('minY', system.minY);
        setValue('maxY', system.maxY);
    }

    var refreshSystem = function(){        
        system.changeSpeedXRange(getValue('minX'),getValue('maxX'));
        system.changeSpeedYRange(getValue('minY'),getValue('maxY'));
        
        if(document.getElementById('option-one').checked) system.setLightDensity();
        if(document.getElementById('option-two').checked) system.setMediumDensity();
        if(document.getElementById('option-three').checked) system.setHighDensity();

        system.init(10, getCentralPoint());
    }

    var setValue = function(fieldId, value){
        document.getElementById(fieldId).value = value;
    }

    var getValue = function(fieldId){
        return parseInt(document.getElementById(fieldId).value || 0);
    }

    var getCentralPoint = function(){
        return new App.Point(w / 2.0, h / 2.0);
    }

};