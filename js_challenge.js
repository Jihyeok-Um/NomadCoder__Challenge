const christmasTimerHtml = document.querySelector(".js_christmasTimer");
const hourMinuteCount = 60;
const dayCount = 24;

var _second = 1000;
var _minute = _second * 60; 
var _hour = _minute * 60; 
var _day = _hour * 24; 

const months = [
    jan = 31,feb = 28, mar = 31,apr = 30,may = 31,jun = 30, jul = 31, aug = 31,sep = 30,oct = 31,nov = 30,dec = 31,
]

function monthsToDays(num) {
    let month = 0;
    for(let i = 0; i < num; i++){
        month += months[i];
    }
    return month;
}

function timeToSeconds(months, days, hours, minutes) {
    let seconds = 0;
    seconds += months*dayCount*hourMinuteCount*hourMinuteCount;
    seconds += (days-1)*dayCount*hourMinuteCount*hourMinuteCount;
    seconds += (hours)*hourMinuteCount;
    seconds += (minutes)*hourMinuteCount*hourMinuteCount;
    return seconds;
}

function christmasTimer() {
    const date = new Date();
    const nowSeconds = date.getSeconds();
    const currentMonth = monthsToDays(date.getMonth());
    const targetMonth = monthsToDays(11);

    const now = nowSeconds + timeToSeconds(currentMonth,date.getDate(),date.getHours(),date.getMinutes());
    const christmas = timeToSeconds(targetMonth,24,0,0);
    const timer = christmas - now;

    var days = Math.floor(timer / _day); 
    var hours = Math.floor((timer % _day) / _hour); 
    var minutes = Math.floor((timer % _hour) / _minute); 
    var seconds = Math.floor((timer % _minute) / _second);
    
    christmasTimerHtml.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function init() {
    christmasTimer();
    setInterval(christmasTimer, 1000);
}
init();