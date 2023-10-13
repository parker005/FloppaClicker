var aList = ['🏆200 Clicker', '🏆300 Clicker', '🏆500 Clicker', '🏆1000 Clicker', '🏆2500 Clicker', '🏆5000 Clicker'];

var uList = [];
var currentInc = 100;

var clickTimer = 2000;
var acInc = 0;

var AcurrentPrice = 250;
var BcurrentPrice = 150;
var CcurrentPrice = 100;

//update all needed text

var count = 0;
var clickValue = 1;

var startTime = new Date();

var time = startTime.getTime();


function updateCounts(count, currentInc){
    let currentCount = document.getElementById("counter");
    currentCount.innerHTML = count;
    //setText('label9', "Current Balance: "+count);
    //setText("button3", '+'+currentInc);
    //setText("label2", count);
    //setText("label13", "Current: +" + currentInc);
    //setText("label14", "Current: +" + clickValue);
    //setText("label16", "Current: +" + acInc);
}


//uptime log
function upTime(){
    //setText("label7", 'Runtime: ' + ((getTime()-time)/1000)+' seconds');
}

//give user reward
function rewardAch(number, achID){
    //console.log("new achievement");
    number = number.toString();
    var msg = number + " CLICKER!!!";
    let rewardText = document.getElementById('reward');
    rewardText.innerHTML= msg;
    uList.push(aList[achID]); 
    let achList = uList.toString();

    for (var i=0; i<=achList.split(',').length; i++){
        achList = achList.replace(",", "<br>");
    };

    let achElement = document.getElementById('achievements');
    
    achElement.innerHTML = achList;
}

//init conditions for reward status
var notR200 = true;
var notR300 = true;
var notR500 = true;
var notR1000 = true;
var notR2500 = true;
var notR5000 = true;

//check if time for reward
function countCheck(count){
    if (count>=200 && notR200){
      rewardAch(200, 0);
      notR200 = false;
    }
    
    if (count>=300 && notR300) {
      rewardAch(300, 1);
      notR300 = false;
    }
    
    if (count>=500 && notR500){
      rewardAch(500, 2);
      notR500 = false;
    }
    
    if (count>=1000 && notR1000){
      rewardAch(1000, 3);
      notR1000 = false;
    }
    
    if (count>=2500 && notR2500){
      rewardAch(2500, 4);
      notR2500 = false;
    }
    
    if (count>=5000 && notR5000){
      rewardAch(5000, 5);
      notR5000 = false;
    }
    
    var uListStr = uList.toString();
    
    //replace all commas with \n
    for (var o=0; o<=uListStr.split(',').length; o++){
      uListStr = uListStr.replace(",", "\n");
    }
    
    //setText("label6", uListStr);
};

function incClicker(inc){
    for (var i=0; i<inc; i++){
        count = count+1;
        //setText("label2", count);
        countCheck(count);
        updateCounts(count, currentInc);
    }    
}

//increment clicker
function autoClicker(){
    count = count+acInc;
    updateCounts(count,currentInc);
}


//main button 
document.getElementById('mainClicker').addEventListener("click", function(){
    count = count + clickValue;
    countCheck(count);
    setInterval(upTime, 100);
    updateCounts(count, currentInc);
});

var myTimer;

function stopTimer(){
    clearInterval(myTimer);
}

var buttonTime;

let buttonPressed = false;
let canClick = false;
//increment button click timer
function timer(){
    let timerText = document.getElementById('incTimer');
    let now = new Date();
    let currentTimeMS = now.getTime();
    console.log(currentTimeMS);
    let timeDiff = Math.round((10000-(currentTimeMS-buttonTime))/1000);
    console.log(timeDiff)

    if (timeDiff>0){
        timerText.innerHTML = timeDiff;
    } else {
        timerText.innerHTML = '!!!';
        canClick = true;
    }
}


function resetTime(){
    if (!buttonPressed){
        let buttonDate = new Date();
        buttonTime = buttonDate.getTime();
        buttonPressed = true;
        console.log('time reset');
    }
}

myTimer = setInterval(timer, 1000);

//inc clicker
document.getElementById('incClicker').addEventListener("click", function(){  
    if (canClick){
        count = count + currentInc;
        updateCounts(count);
        stopTimer();
        resetTime();
        canClick = false;
        buttonPressed = false;
        myTimer = setInterval(timer, 1000);
    }
});




