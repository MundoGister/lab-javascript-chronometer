function Chronometer(opts) {
  this.minDec = opts.minDec;
  this.minUni = opts.minUni;
  this.secDec = opts.secDec;
  this.secUni = opts.secUni;
  this.hunDec = opts.hunDec;
  this.hunUni = opts.hunUni;
  this.splitList = opts.splitList;
  
  this.intervalId = null;
  this.currentTime = 0;
  this.state = false;
}

Chronometer.prototype.CLICK_STEP = 10;

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    this.currentTime ++;
    this.drawTime();
    
  }.bind(this), this.CLICK_STEP);
};

Chronometer.prototype.getMinutes = function () {
  return Math.floor(this.currentTime / 100 / 60);
};

Chronometer.prototype.getSeconds = function () {
  return Math.floor(this.currentTime / 100 % 60);
};

Chronometer.prototype.getHundredthSeconds = function () {
  return Math.floor(this.currentTime % 100);
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  return num < 10 ? '0' + num : num.toString();
};

Chronometer.prototype.drawTime = function () {
  this.drawMinutes();
  this.drawSeconds();
  this.drawHundredthSeconds();
};

Chronometer.prototype.drawMinutes = function () {
  var minutes =  this.twoDigitsNumber(this.getMinutes());
  this.minDec.innerText = minutes[0];
  this.minUni.innerText = minutes[1];
};

Chronometer.prototype.drawSeconds = function () {
  var seconds =  this.twoDigitsNumber(this.getSeconds());
  this.secDec.innerText = seconds[0];
  this.secUni.innerText = seconds[1];
};

Chronometer.prototype.drawHundredthSeconds = function () {
  var hundredSec =  this.twoDigitsNumber(this.getHundredthSeconds());
  this.hunDec.innerText = hundredSec[0];
  this.hunUni.innerText = hundredSec[1];
};

Chronometer.prototype.stopClick = function () {  
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.drawTime();
  this.splitList.innerHTML = "";
};

Chronometer.prototype.splitClick = function () {
  var li = document.createElement("li");
  li.innerText = this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getHundredthSeconds());
  this.splitList.appendChild(li);
};
