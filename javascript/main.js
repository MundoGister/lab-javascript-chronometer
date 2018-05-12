var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');

var chronometer = new Chronometer({
  minDec: document.getElementById('minDec'),
  minUni: document.getElementById('minUni'),
  secDec: document.getElementById('secDec'),
  secUni: document.getElementById('secUni'),
  hunDec: document.getElementById('hunDec'),
  hunUni: document.getElementById('hunUni'),
  splitList: document.getElementById('splits')
});

// Start/Stop Button
btnLeft.onclick = function() {
  chronometer.state = !chronometer.state;
  if (chronometer.state) {
      this.classList.remove('start');
      this.classList.add('stop');
      this.innerText = "Stop";
     
      btnRight.classList.remove('reset');
      btnRight.classList.add('split');
      btnRight.innerText = "Split";

      chronometer.startClick();


  } else {
    this.classList.remove('stop');
      this.classList.add('start');
      this.innerText = "Start";

      btnRight.classList.remove('split');
      btnRight.classList.add('reset');
      btnRight.innerText = "Reset";
      chronometer.stopClick();

  }
  
  
  // TODO
};

// Reset/Split Button
btnRight.onclick = function() {
  if (chronometer.state) {
    chronometer.splitClick ();
  } else {
    chronometer.resetClick();
  }
  // TODO
};
