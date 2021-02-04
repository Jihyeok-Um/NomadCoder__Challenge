const clock = document.querySelector(".js-clock");

function printClock() {
    const current = new Date();
    clock.innerText = 
    `${current.getHours() < 10 ? `0${current.getHours()}` : current.getHours()}:${current.getMinutes() < 10 ? `0${current.getMinutes()}` : current.getMinutes()}:${current.getSeconds() < 10 ? `0${current.getSeconds()}` : current.getSeconds()}`
}

function init() {
    printClock();
    setInterval(printClock, 1000);
}
init();