var start = document.querySelector('.start');
var pause = document.querySelector('.pause');
var reset = document.querySelector('.reset');

var minRef = document.querySelector('.min');
var secRef = document.querySelector('.sec');

var state = {
    min: 0,
    sec: 0
};
var id;

setTime(state);

function computeNextTime(state) {
    var min = state.min;
    var sec = state.sec;

    if (sec === 59) {
        sec = 0;
        min++;
    }
    else {
        sec++;
    }

    return {
        min: min,
        sec: sec
    };
}

function setTime(state) {
    var min = state.min;
    var sec = state.sec;
    minRef.textContent = min;
    secRef.textContent = sec;
}

function handleStart() {

    if(id == undefined){
        id=setInterval(function () {
            var newState = computeNextTime(state);
            state = newState;
            setTime(state);
        }, 1000);
    }

}

function handlePause() {

    if(id==undefined){
        return;
    }

    clearInterval(id);
    id = undefined;

}


function handleReset() {

    clearInterval(id);
    state={
        min:0,
        sec:0,
    };
    setTime(state);
    id=undefined;
}

start.addEventListener('click', handleStart);
pause.addEventListener('click', handlePause);
reset.addEventListener('click', handleReset);