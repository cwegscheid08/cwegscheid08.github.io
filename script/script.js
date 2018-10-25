// RIGHT NOW, YOU CAN CALL THE CLICK FUNCTION MORE THAN ONCE.  THIS CAUSES
// THE TIMER TO RUN AT THE RATE OF THE AMOUNT OF CLICK PUT ON IT.
// THIS CAN ALSO CAUSE IT TO PASS OVER THE ZERO STOP CATCH.


var container = document.querySelector("container");
var display = document.querySelector("#timerDisplay");
var backupDisplay = document.querySelector("#waitingTimer");
var backupTimerTitle = document.querySelector(".backupTimerTitle");
var playButton = document.querySelector(".playButton").onclick = startTimer;
var pauseButton = document.querySelector(".pauseButton").onclick = pause;
var resetButton = document.querySelector(".resetButton").onclick = reset;
var stopButton = document.querySelector(".stopButton").onclick = stopTimer;
var typeSwitch = document.querySelector("input").onclick = function() {switchTimers(), changeString()};
var switchTitle = document.querySelector(".switchTitle");
var isRunning;
var lastWork;
var lastRest;

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
	isWork == true ? clock = Object.assign({}, lastRest) : clock = Object.assign({}, lastWork);
	backupDisplay.innerHTML = makeClockFormat();
	isWork == true ? clock = Object.assign({}, lastWork) : clock = Object.assign({}, lastRest);
	display.innerHTML = makeClockFormat();
// 	backupDisplay.innerHTML = "5:00";
}

function updateDisplay() {
	
	for(let key in inputSeconds) {
		inputHour[key].selected == true ? clock.hr = parseInt(inputHour[key].value) : "";
		inputMinute[key].selected == true ? clock.min = parseInt(inputMinute[key].value) : "";
		inputSeconds[key].selected == true ? clock.sec = parseInt(inputSeconds[key].value) : "";

	}
	display.innerHTML = makeClockFormat();
}

function setWorkTime() {
	initWork == true ? (firstWork = Object.assign({}, clock), (lastWork = Object.assign({}, firstWork))): ""; 
	initWork == true ? (initWork = false) : (inputHour[lastWork.hr].selected = true, inputMinute[lastWork.min/5].selected = true, inputSeconds[lastWork.sec/5].selected = true, updateDisplay());
	lastWork = Object.assign({}, clock);
}

function setRestTime() {
	initRest == true ? (firstRest = Object.assign({}, clock), (lastRest = Object.assign({}, firstRest))) : "";
	initRest == true ? (initRest = false) : (inputHour[lastRest.hr].selected = true, inputMinute[lastRest.min/5].selected = true, inputSeconds[lastRest.sec/5].selected = true, updateDisplay());
// 	firstRest = Object.assign({}, clock);
	lastRest = Object.assign({}, clock);
}

function timer() {
// 	isWork == true ? setWorkTime() : setRestTime();
	isWork == true ? (lastWork.sec--, displayTimer()) : (lastWork.sec--, runOtherTimer());
	isWork == true ? setWorkTime() : setRestTime();
// 	displayTimer();
// 	runOtherTimer();
}

function startTimer() {
// 	isWork = true;
// 	updateDisplay();
	isRunning = true;
	setWorkTime();
	myTimer = setInterval(function() {isClockLength(), timer()}, 1000);
}

function pause() {
	clearInterval(myTimer);
	isRunning = false;
}

function reset() {
	isRunning = false;
	pause();
	updateDisplay();
	displayTimer();
}

function stopTimer() {
	isRunning = false;
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
// 	updateDisplay();
	displayTimer();
}

function isClockLength() {
	totalSeconds = getTotalSeconds();
	totalSeconds < 0 ? (clearInterval(myTimer), switchTimers(), startTimer()) : "";
}

function changeString() {
	switchTitle.textContent == "Get Rest Timer" ? (switchTitle.textContent = "Get Work Timer", backupTimerTitle.textContent = "Work Timer") : (switchTitle.textContent = "Get Rest Timer", backupTimerTitle.textContent = "Rest Timer");
	runOtherTimer();
}

function runOtherTimer() {
	isWork == true ? (clock = Object.assign({}, lastRest), backupDisplay.innerHTML = makeClockFormat()) : (clock = Object.assign({}, lastWork), backupDisplay.innerHTML = makeClockFormat());
	isWork == true ? (clock = Object.assign({}, lastWork), displayTimer()) : (clock = Object.assign({}, lastRest), displayTimer());
}

function initialize() {
	isWork = true;
	initWork = true;
	initRest = true;
	inputHour[0].selected = true;
	inputMinute[1].selected = true;
	inputSeconds[0].selected = true;
	updateDisplay();
	setRestTime();
	
	inputHour[0].selected = true;
	inputMinute[5].selected = true;
	inputSeconds[0].selected = true;
	updateDisplay();
	setWorkTime();



	runOtherTimer();
}

initialize();