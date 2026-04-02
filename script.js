let timerdisplay = document.querySelector(".timerdisplay");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 0;
let secs = 0;
let mins = 0;
let hours = 0; // ✅ NEW

let timerid = null;

startBtn.addEventListener('click', function () {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(starttimer, 10);
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerid);
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerid);
    timerdisplay.innerHTML = '00 : 00 : 00 : 00'; // ✅ UPDATED
    msec = secs = mins = hours = 0; // ✅ UPDATED
});

function starttimer() {
    msec++;

    if (msec == 100) {
        msec = 0;
        secs++;

        if (secs == 60) {
            secs = 0;
            mins++;

            if (mins == 60) {
                mins = 0;
                hours++; // ✅ NEW
            }
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hoursString = hours < 10 ? `0${hours}` : hours; // ✅ NEW

    timerdisplay.innerHTML = `${hoursString} : ${minsString} : ${secsString} : ${msecString}`; // ✅ UPDATED
}