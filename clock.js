const date = new Date();
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();
let Time = (hours >= 12 ? "PM" : "AM");

function getTime(){
    console.log((hours/10 < 1 ? ("0" + hours) : (hours)) + ":" + (minutes/10 < 1 ? ("0" + minutes) : (minutes)) + ":" + (seconds/10 < 1 ? 
    ("0" + seconds) : (seconds)) + " " + Time);
    if(seconds == 59){
        if(minutes == 59){
            if(hours == 23){
                hours = 0;
                minutes = 0;
                seconds = 0;
                Time = "AM";
            }
            else{
                hours++;
                if(hours >= 12){
                    time = "PM";
                }
                minutes = 0;
                seconds = 0;
            }
        }
        else{
            minutes++;
            seconds = 0;
        }
    }
    else{
        seconds++;
    }
}

const timer = setInterval(getTime,1000);