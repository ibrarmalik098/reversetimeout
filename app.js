// golobal variable

var hrs = document.getElementById("hours")
var min = document.getElementById("min")
var sec = document.getElementById("sec")
var inp = document.getElementById("input")

var timehours = 00;
var timemins = inp.value;
var timesecs = 50;


function interval(){
    min.innerHTML=inp.value,":";
    console.log(timemins)
    
}



function timestart() {
    var iterval = setInterval(function timer() {
        timesecs--
        sec.innerHTML=timesecs
        if(timesecs == 1){
            inp.value--;
            min.innerHTML=inp.value;
            timesecs = 10;
            
        }
        
    }, 1000);
}

function timestop(){
    setTimeout(function () {
        
        
        clearInterval(timemins,timesecs)
        
    })
    sec.innerHTML=timesecs;
    inp.value = "";
    min.innerHTML = 00;
    
}   

function Timerreset() {
    timemin = 00;
    timemin = 00;
    
    min.innerHTML = timemin;
    sec.innerHTML = timesecs;

    setTimeout(function(){
        clearInterval(Timerreset,timestart)
    },1000)

}
