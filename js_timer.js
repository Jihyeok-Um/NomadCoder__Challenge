
function getTime() {
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const secondCount = 1000;
    const minuteCount = secondCount * 60;
    const hourCount = minuteCount * 60;
    const dayCount = hourCount * 24;

    let now = new Date();
    let minusValue = xmasDay - now;

    const days = Math.floor(minusValue / dayCount);
    const hours = Math.floor((minusValue % dayCount) / hourCount);
    const minutes = Math.floor((minusValue % hourCount) / minuteCount);
    const seconds = Math.floor((minusValue % minuteCount) / secondCount);

    const jsTimer = document.querySelector("h2");
    jsTimer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
