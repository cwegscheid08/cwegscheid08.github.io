var container = document.querySelector("container");
var display = document.querySelector("h1");
var addTimeButton = document.querySelector(".addTimeButton").onclick = addSecond;
var subtractTimeButton = document.querySelector(".subtractTimeButton").onclick = subtractSecond;
var playButton = document.querySelector(".playButton").onclick = startTimer;
var pauseButton = document.querySelector(".pauseButton").onclick = pause;
var resetButton = document.querySelector(".resetButton").onclick = reset;
var stopButton = document.querySelector(".stopButton").onclick = stopTimer;
var seconds = display.innerHTML;


var myTimer = startTimer;
var hr = 0;
var min = 0;
var sec = 5;

function displayTimer() {
	if(hr === 0 || hr === "00") {
		display.innerHTML = min + ":" + sec;
	} else {
		display.innerHTML = hr + ":" + min + ":" + sec;
	}
}

function setWorkTime(workTimeInput) {
	convertSeconds(workTimeInput);
	displayTimer();
}

function setRestTime(restTimeInput) {
	convertSeconds(restTimeInput);
	displayTimer();
}

function convertSeconds(seconds) {
	hr = Math.floor(seconds/3600);
	min = Math.floor((seconds - (hr * 3600))/60);
	sec = seconds - ((hr * 3600) + (min*60));

	hr >= 10 ? hr : hr = "0" + hr;
	min >= 10 ? min : min = "0" + min;
	sec >= 10 ? sec : sec = "0" + sec;
}

function timer() {
	displayTimer();
	sec--;
	stopTimer();
}

function startTimer() {
	setInterval(timer, 1000);	
}

function stopTimer() {
	if(sec === 0) {
		clearInterval(myTimer);
	}
}

function addSecond() {
	++sec;
	displayTimer();
}

function subtractSecond() {
	sec--; 
	displayTimer();
}

function pause() {}

function reset() {}

function stop() {}