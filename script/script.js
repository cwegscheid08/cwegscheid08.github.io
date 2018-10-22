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
	hr:"0",
	min:"25",
	sec:"30",
};

function displayTimer() {
	makeClockFormat();
	if(clock.hr=== 0 || clock.hr=== "00") {
		display.innerHTML = clock.min + ":" + clock.sec;
	} else {
		display.innerHTML = clock.hr+ ":" + clock.min + ":" + clock.sec;
	}
}

function setWorkTime() {
	displayTimer();
	convertSeconds();
}

function setRestTime() {
	convertSeconds();
	displayTimer();
}

function convertSeconds() {
	clock.hr !== "00" ? clock.hr = parseInt(clock.hr) : "";
	clock.min !== "00" ? clock.min = parseInt(clock.min) : "";
	clock.sec !== "00" ? clock.sec = parseInt(clock.sec) : "";
	console.log(clock.hr, clock.min, clock.sec);

	// clock.hr= Math.floor(seconds/3600);
	// clock.min = Math.floor((seconds - (clock.hr* 3600))/60);
	// clock.sec= seconds - ((clock.hr* 3600) + (clock.min*60));
}

function timer() {
	displayTimer();
	clock.sec--;
	console.log(clock.hr, clock.min, clock.sec);
}

function startTimer() {
	myTimer = setInterval(function() { clock.sec === 0 ? clearInterval(myTimer) : "", timer()}, 1000);
}

function pause() {
	clearInterval(myTimer);
}

function reset() {
	pause();
	clock.hr = "0";
	clock.min = "25";
	clock.sec = "30";
	displayTimer();
}

function stopTimer() {
	clock.sec = "0";
	clock.min = "0";
	clock.hr = "0";
	displayTimer();
}

function addMinute() {clock.min++, setWorkTime()};

function subtractMinute() {clock.min--, setWorkTime()};


function makeClockFormat() {
	clock.hr.length < 2 ? clock.hr = "0" + clock.hr : clock.hr;
	clock.min.length < 2 ? clock.min = "0" + clock.min : clock.min;
	clock.sec.length < 2 ? clock.sec= "0" + clock.sec : clock.sec; 
}

displayTimer();