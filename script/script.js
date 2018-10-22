// RIGHT NOW, YOU CAN CALL THE CLICK FUNCTION MORE THAN ONCE.  THIS CAUSES
// THE TIMER TO RUN AT THE RATE OF THE AMOUNT OF CLICK PUT ON IT.
// THIS CAN ALSO CAUSE IT TO PASS OVER THE ZERO STOP CATCH.


var container = document.querySelector("container");
var display = document.querySelector("h1");
var addTimeButton = document.querySelector(".addTimeButton").onclick = addMinute;
var subtractTimeButton = document.querySelector(".subtractTimeButton").onclick = subtractMinute;
var playButton = document.querySelector(".playButton").onclick = startTimer;
var pauseButton = document.querySelector(".pauseButton").onclick = pause;
var resetButton = document.querySelector(".resetButton").onclick = reset;
var stopButton = document.querySelector(".stopButton").onclick = stopTimer;
var myTimer;


var clock = {
	hr:0,
	min:25,
	sec:0,
};

function displayTimer() {
	let time = makeClockFormat();
	display.innerHTML = time;
}

function setWorkTime() {
	displayTimer();
}

function setRestTime() {
	displayTimer();
}

function timer() {
	displayTimer();
	clock.sec--;
}

function startTimer() {
	myTimer = setInterval(function() {isClockLength(), timer()}, 1000);
}

function pause() {
	clearInterval(myTimer);
}

function reset() {
	pause();
	clock.hr = 0;
	clock.min = 25;
	clock.sec = 0;
	displayTimer();
}

function stopTimer() {
	clock.sec = 0;
	clock.min = 0;
	clock.hr = 0;
	displayTimer();
}

function addMinute() {clock.min++, setWorkTime()};

function subtractMinute() {clock.min--, setWorkTime()};


function makeClockFormat() {
	let seconds = getTotalSeconds();
	clock.hr = Math.floor(seconds/3600);
	clock.min = Math.floor((seconds - (clock.hr * 3600))/60);
	clock.sec = seconds - ((clock.hr * 3600) + (clock.min * 60));
	console.log(clock);
	let time = [];
	 for(var key in clock) {
	 	clock[key] < 10 ? time.push("0" + clock[key]) : time.push(clock[key]);
	 };
	 time[0] === "00" ? time.shift() : "";
	 return time.join(":");
}

function getTotalSeconds() {
	let seconds = clock.sec + (clock.min * 60) + (clock.hr * 3600);
	return seconds;
}

function isClockLength() {
	totalSeconds = getTotalSeconds();
	totalSeconds <= 0 ? clearInterval(myTimer) : "";
}

displayTimer();