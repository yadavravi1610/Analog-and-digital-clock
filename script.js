
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

var digitalClock = document.getElementById('digitalClock');

function setTimeClock()
{
    let day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    let hourDeg = (h*30)+(m*0.5);
    let minuteDeg = (m*6)+(s*0.1);
    let secondDeg = (s*6);

    hour.style.transform = `rotateZ(${hourDeg}deg)`;
    minute.style.transform = `rotateZ(${minuteDeg}deg)`;
    second.style.transform = `rotateZ(${secondDeg}deg)`;
    let session ="AM";
    if(h >12)
    {
        h -= 12;
        session = "PM";
    }
    let hours = h<10 ? "0"+h : h;
    
    let minutes = m<10 ? "0"+m : m;
    // let seconds = s<10 ? "0"+ s : s;


    digitalClock.innerText = hours + ":" + minutes +" "+ session ; 
}

// setTimeClock();

setInterval(setTimeClock,1000);