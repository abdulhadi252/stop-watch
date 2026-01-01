let timerdisplay=document.querySelector(".timerdisplay");
let stopBtn=document.getElementById("stopBtn");
let startBtn=document.getElementById("startBtn");
let resetBtn=document.getElementById("resetBtn");
 
let msec = 00;
let secs = 00;
let mins = 00;

let timerid=null;

startBtn.addEventListener('click' , function(){
    if(timerid !== null){
        clearInterval(timerid);
    } 
    timerid = setInterval(starttimer , 10);
});

stopBtn.addEventListener('click' ,function(){
    clearInterval(timerid);
});

resetBtn.addEventListener('click' ,function(){
    clearInterval(timerid);
    timerdisplay.innerHTML='00 : 00 : 00'
    msec =secs =mins = 00;
});

function starttimer(){
      msec++;
      if(msec == 100){
        msec=0;
        secs++;
        if(secs == 60){
            secs=0;
            mins++;
        }
      }
  
      let msecString = msec < 10 ? `0${msec}`: msec;
      let secsString = secs < 10 ? `0${secs}`: secs;
      let minsString = mins < 10 ? `0${mins}`: mins;

      timerdisplay.innerHTML = `${minsString}: ${secsString} : ${msecString}`;
}
