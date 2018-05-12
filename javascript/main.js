var btnLeft = document.getElementById('btnLeft');
var btnLeft2 = document.getElementById('btnLeft2');
var btnRight = document.getElementById('btnRight');
var btnRight2 = document.getElementById('btnRight2');

var chronometer = new Chronometer({
  minDec: document.getElementById('minDec'),
  minUni: document.getElementById('minUni'),
  secDec: document.getElementById('secDec'),
  secUni: document.getElementById('secUni'),
  hunDec: document.getElementById('hunDec'),
  hunUni: document.getElementById('hunUni'),
  splitList: document.getElementById('splits')
});

var chronometer2 = new Chronometer({
  minDec: document.getElementById('minDec2'),
  minUni: document.getElementById('minUni2'),
  secDec: document.getElementById('secDec2'),
  secUni: document.getElementById('secUni2'),
  hunDec: document.getElementById('hunDec2'),
  hunUni: document.getElementById('hunUni2'),
  splitList: document.getElementById('splits2')
}); 

// Start/Stop Button
var firstBtnFunc = function(t, chronometer, btnRight) {
  
  chronometer.state = !chronometer.state;
  if (chronometer.state) {
    //console.log(e.target);
    // console.log(e.currentTarget);
    
    t.classList.remove('start');
    t.classList.add('stop');
    t.innerText = "Stop";
    
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerText = "Split";
    chronometer.startClick();
  } else {
    t.classList.remove('stop');
    t.classList.add('start');
    t.innerText = "Start";
    
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerText = "Reset";
    chronometer.stopClick();
  }
};

btnLeft.onclick  = function() { firstBtnFunc(this, chronometer, btnRight); };
btnLeft2.onclick  = function() { firstBtnFunc(this, chronometer2, btnRight2);};


// Reset/Split Button
var secondeBtnFunc = function(chronometer) {
  if (chronometer.state) {
    chronometer.splitClick();
  } else {
    chronometer.resetClick();
  }
};

btnRight.onclick = function(){secondeBtnFunc(chronometer); };
btnRight2.onclick = function(){ secondeBtnFunc(chronometer2);};
