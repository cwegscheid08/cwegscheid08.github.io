// RIGHT NOW, YOU CAN CALL THE CLICK FUNCTION MORE THAN ONCE.  THIS CAUSES
// THE TIMER TO RUN AT THE RATE OF THE AMOUNT OF CLICK PUT ON IT.
// THIS CAN ALSO CAUSE IT TO PASS OVER THE ZERO STOP CATCH.


var container = document.querySelector("#container");
var display = document.querySelector("#timerDisplay");

var backupDisplay = document.querySelector("#waitingTimer");
var backupTimerTitle = document.querySelector(".backupTimerTitle");
var playButton = document.querySelector(".playButton").onclick = startTimer;
var pauseButton = document.querySelector(".pauseButton").onclick = pause;
var resetButton = document.querySelector(".resetButton").onclick = reset;
var stopButton = document.querySelector(".stopButton").onclick = stopTimer;
var typeSwitch = document.querySelector("input").onclick = function() {switchTimers(), changeString()};
var switchTitle = document.querySelector(".switchTitle");
var workRunning;
var isRunning = false;
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
var myOtherTimer;


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
}

function updateDisplay() {
	
	for(let key in inputSeconds) {
		inputHour[key].selected == true ? clock.hr = parseInt(inputHour[key].value) : "";
		inputMinute[key].selected == true ? clock.min = parseInt(inputMinute[key].value) : "";
		inputSeconds[key].selected == true ? clock.sec = parseInt(inputSeconds[key].value) : "";

	}
	// if (isRunning == false) {
	isWork == true ? firstWork = Object.assign({}, clock) : firstRest = Object.assign({}, clock);
	// }
	display.innerHTML = makeClockFormat();
	isWork == true ? lastWork = Object.assign({}, clock) : lastRest = Object.assign({}, clock);
}

function setWorkTime() {
	initWork == true ? (firstWork = Object.assign({}, clock), (lastWork = Object.assign({}, firstWork))): ""; 
	initWork == true ? (initWork = false) : (inputHour[lastWork.hr].selected = true, inputMinute[lastWork.min/5].selected = true, inputSeconds[(lastWork.sec/5)*-1].selected = true);
	updateDisplay();
}

function setRestTime() {
	initRest == true ? (firstRest = Object.assign({}, clock), (lastRest = Object.assign({}, firstRest))) : "";
	initRest == true ? (initRest = false) :  (inputHour[lastRest.hr].selected = true, inputMinute[lastRest.min/5].selected = true, inputSeconds[lastRest.sec/5].selected = true);
	updateDisplay();
}

function switchWorkTime () {
	updateDisplay();
}

function switchRestTime() {
	updateDisplay();
}

function timer() {
// 	isWork == true ? setWorkTime() : setRestTime();
	isWork == true ? (lastWork.sec--, displayTimer()) : (lastWork.sec--, displayTimer());
// 	isWork == true ? setWorkTime() : setRestTime();
// 	displayTimer();
// 	runOtherTimer();
}

function startTimer() {
// 	isWork = true;
	isRunning = true;
// 	updateDisplay();
	
	// workRunning == true ? setWorkTime() : setRestTime();
	myTimer = setInterval(function() {timer(), isClockLength()}, 1000);
}

function pause() {
	clearInterval(myTimer);
	clearInterval(myOtherTimer);
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
	pause();
	// displayTimer();
	display.innerHTML = makeClockFormat();
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
	workRunning == true ? clock = Object.assign({}, lastWork) : clock = Object.assign({}, lastRest);
	totalSeconds = getTotalSeconds();
	if(workRunning == true) {
		totalSeconds <= 0 ? (clearInterval(myTimer), workRunning = false, lastWork = Object.assign({}, firstWork), clock = Object.assign({}, firstRest), otherTimer(), changeString(), switchTimers()) : "";
	} else if (workRunning == false) {
		totalSeconds <= 0 ? (clearInterval(myOtherTimer), workRunning = true, lastRest = Object.assign({}, firstRest), clock = Object.assign({}, firstWork), startTimer(), changeString(), switchTimers()) : "";
	}
	// totalSeconds <= 0 ? (clearInterval(workRunning = true ? myTimer : myOtherTimer), switchTimers(), workRunning == true ? workRunning = false : workRunning = true, lastRest = Object.assign({}, firstRest) , lastWork = Object.assign({}, firstWork), workRunning == true ? otherTimer() : startTimer()) : "";
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
	workRunning = true;
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

function otherTimer() {
	myOtherTimer = setInterval(function() {backupTimer(), isClockLength()}, 1000);
}

function backupTimer() {
	workRunning == false ? (lastRest.sec--, displayTimer()) : (lastRest.sec--, displayTimer());
}

initialize();



//BACKUP TIMER AMOUNT IS TRANSFERING OVER TO THE FIRST WORK OR REST AMOUNT WHEN RUNNING TIMER IS IN BACKGROUND