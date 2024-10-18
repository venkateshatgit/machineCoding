(function (){

    //select time
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");

    //select button
    const startBtn = document.querySelector(".start");
    const pauseBtn = document.querySelector(".pause");
    const resetBtn = document.querySelector(".reset");

    let myTimer = null;
    let remainingTime = null;


    // checks time values -> formats time -> decreases second value 
    function timerLogic(){
        if(remainingTime <= 0){
            onResetTimer();
            return;
        }

        const newHr = Math.floor(remainingTime/3600);
        const newMin = Math.floor((remainingTime%3600)/60);
        const newSec = remainingTime%60;

        seconds.value = String(newSec).padStart(2, '0');
        minutes.value = String(newMin).padStart(2, '0');
        hours.value = String(newHr).padStart(2, '0');  

        remainingTime-=1;
    }

    //check times -> switch start and pause button -> start Timer
    function onStartBtnClicked(){
        if(remainingTime == 0 ) return;

        //switch start and pause button
        startBtn.style.display = "none";
        pauseBtn.style.display = "initial";

        //calculating the time left
        remainingTime = Number(hours.value)*3600 + Number(minutes.value*60) + Number(seconds.value);

        //begin interval time
        myTimer = setInterval(timerLogic, 1000);
    }

    // pause timer -> switch start and pause button
    function onPauseBtnClicked(){
        clearInterval(myTimer);
        startBtn.style.display = "initial";
        pauseBtn.style.display = "none";
    }

    // pause timer -> use default time values -> switch button
    function onResetTimer(){
        clearInterval(myTimer);

        hours.value = "";
        minutes.value = "";
        seconds.value = "";

        startBtn.style.display = "initial";
        pauseBtn.style.display = "none";
    }

    startBtn.addEventListener("click", onStartBtnClicked);
    pauseBtn.addEventListener("click", onPauseBtnClicked);
    resetBtn.addEventListener("click", onResetTimer);
})()