// RIGHT NOW, YOU CAN CALL THE CLICK FUNCTION MORE THAN ONCE.  THIS CAUSES
// THE TIMER TO RUN AT THE RATE OF THE AMOUNT OF CLICK PUT ON IT.
// THIS CAN ALSO CAUSE IT TO PASS OVER THE ZERO STOP CATCH.


var container = document.querySelector("container");
var display = document.querySelector("h1");
// var addTimeButton = document.querySelector(".addTimeButton").onclick = addMinute;
// var subtractTimeButton = document.querySelector(".subtractTimeButton").onclick = subtractMinute;
var playButton = document.querySelector(".playButton").onclick = startTimer;
var pauseButton = document.querySelector(".pauseButton").onclick = pause;
var resetButton = document.querySelector(".resetButton").onclick = reset;
var stopButton = document.querySelector(".stopButton").onclick = stopTimer;
var typeSwitch = document.querySelector("input").onclick = switchTimers;

var userHour = document.getElementById("hours");
var userMinute = document.getElementById("minutes");
var userSeconds = document.getElementById("seconds");
var inputHour = userHour.querySelectorAll("option");
var inputMinute = userMinute.querySelectorAll("option");
var inputSeconds = userSeconds.querySelectorAll("option");
var isWork;
userHour.addEventListener("input", updateDisplay);
userMinute.addEventListener("input", updateDisplay);
userSeconds.addEventListener("input", updateDisplay);


var myTimer;



var clock = {hr:0, min:0, sec:0};
var firstWork;
var firstRest;
var initWork;
var initRest;

function displayTimer() {
	let time = makeClockFormat();
	display.innerHTML = time;
}

function updateDisplay() {
	for(let key in inputSeconds) {
		inputHour[key].selected == true ? clock.hr = parseInt(inputHour[key].value) : "";
		inputMinute[key].selected == true ? clock.min = parseInt(inputMinute[key].value) : "";
		inputSeconds[key].selected == true ? clock.sec = parseInt(inputSeconds[key].value) : "";

	}
	displayTimer();
	isWork == true ? firstWork = clock.min : firstRest = clock.min;
	pause();
}

function setWorkTime() {
	initWork == true ? (updateDisplay(), initWork = false) : (inputMinute[firstWork/5].selected = true, updateDisplay());
	firstWork = clock.min;
}

function setRestTime() {
	initRest == true ? (updateDisplay(), initRest = false) : (inputMinute[firstRest/5].selected = true, updateDisplay());
	firstRest = clock.min;
}

function timer() {
	clock.sec--;
	displayTimer();
}

function startTimer() {
	updateDisplay();
	myTimer = setInterval(function() {isClockLength(), timer()}, 1000);
}

function pause() {
// 	updateDisplay();
	clearInterval(myTimer);
}

function reset() {
	pause();
	updateDisplay();
	displayTimer();
}

function stopTimer() {
	clock.sec = 0;
	clock.min = 0;
	clock.hr = 0;
	displayTimer();
}

function makeClockFormat() {
	let seconds = getTotalSeconds();
	clock.hr = Math.floor(seconds/3600);
	clock.min = Math.floor((seconds - (clock.hr * 3600))/60);
	clock.sec = seconds - ((clock.hr * 3600) + (clock.min * 60));
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

function switchTimers() {
	isWork == true ? isWork = false : isWork = true;
	isWork == true ? setWorkTime() : setRestTime();
}

function isClockLength() {
	totalSeconds = getTotalSeconds();
	totalSeconds < 0 ? (clearInterval(myTimer), switchTimers(), startTimer()) : "";
}

function initialize() {
	isWork = true;
	initRest = true;
	inputMinute[1].selected = true;
	setRestTime();
	
	initWork = true;
	inputMinute[5].selected = true;
	setWorkTime();
}

initialize();