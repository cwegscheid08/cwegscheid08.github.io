// RIGHT NOW, YOU CAN CALL THE CLICK FUNCTION MORE THAN ONCE.  THIS CAUSES
// THE TIMER TO RUN AT THE RATE OF THE AMOUNT OF CLICK PUT ON IT.
// THIS CAN ALSO CAUSE IT TO PASS OVER THE ZERO STOP CATCH.


var container = document.querySelector("container");
var display = document.querySelector("#timerDisplay");
var backupDisplay = document.querySelector("#waitingTimer");
var backupTimerTitle = document.querySelector(".backupTimerTitle");
// var addTimeButton = document.querySelector(".addTimeButton").onclick = addMinute;
// var subtractTimeButton = document.querySelector(".subtractTimeButton").onclick = subtractMinute;
var playButton = document.querySelector(".playButton").onclick = startTimer;
var pauseButton = document.querySelector(".pauseButton").onclick = pause;
var resetButton = document.querySelector(".resetButton").onclick = reset;
var stopButton = document.querySelector(".stopButton").onclick = stopTimer;
var typeSwitch = document.querySelector("input").onclick = function() {switchTimers(), changeString()};
var switchTitle = document.querySelector(".switchTitle");

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
	isWork == true ? firstWork = Object.assign({}, clock) : firstRest = Object.assign({}, clock);
	displayTimer();
	
	pause();
}

function setWorkTime() {
	initWork == true ? (updateDisplay(), initWork = false) : (inputHour[firstWork.hr/5].selected = true, inputMinute[firstWork.min/5].selected = true, inputSeconds[firstWork.sec/5].selected = true, updateDisplay());
	firstWork = Object.assign({}, clock);
}

function setRestTime() {
	initRest == true ? (updateDisplay(), initRest = false) : (inputHour[firstRest.hr/5].selected = true, inputMinute[firstRest.min/5].selected = true, inputSeconds[firstRest.sec/5].selected = true, updateDisplay());
	firstRest = Object.assign({}, clock);
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

function changeString() {
	switchTitle.textContent == "Set Rest Time" ? (switchTitle.textContent = "Set Work Time", backupTimerTitle.textContent = "Rest Timer") : (switchTitle.textContent = "Set Rest Time", backupTimerTitle.textContent = "Work Timer");
	isWork == true ? (clock = Object.assign({}, firstRest), backupDisplay.innerHTML = makeClockFormat()) : (clock = Object.assign({}, firstWork), backupDisplay.innerHTML = makeClockFormat());
	isWork == true ? (clock = Object.assign({}, firstWork)) : (clock = Object.assign({}, firstRest));
}

function initialize() {
	isWork = true;
	initRest = true;
	inputHour[0].selected = true;
	inputMinute[1].selected = true;
	inputSeconds[0].selected = true;
	setRestTime();
	
	initWork = true;
	inputHour[0].selected = true;
	inputMinute[5].selected = true;
	inputSeconds[0].selected = true;
	setWorkTime();

	changeString();
}

initialize();