var container = document.querySelector("container");
var display = document.querySelector("h1");
var hr = 0;
var min = 0;
var sec = 0;

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
	let secondCount = (new Date().getSeconds());
	let backwardsSecondsCount = ((secondCount - 60) * -1);
	sec = backwardsSecondsCount;
	displayTimer();
	runTimer();
}

function runTimer() {
	sec > 1 ? timer() : sec = 0;
}

timer();
runTimer();
