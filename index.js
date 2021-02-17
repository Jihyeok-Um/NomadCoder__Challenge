const submitBtn = document.querySelector(".submitBtn");
const numberBar = document.querySelector(".numberBar");
const numberVers = document.querySelector(".numberVers");
const selectedRange = document.querySelector(".selectedRange");
const inputNumber = document.querySelector(".inputNumber");
const result = document.querySelector(".result");

function handledrag(event) {
    selectedRange.innerText = `Generate a number between 0 and ${numberBar.value}`;
}

function handleSubmit(event) {
    event.preventDefault();
    paintResult();
}
function paintResult() {
    numberVers.classList.remove("hidden");
    result.classList.remove("hidden");
    const RAMDOM_RANGE = numberBar.value;
    const myNum = inputNumber.value;
    const machineNum = genRandNumber(RAMDOM_RANGE);
    numberVers.innerText = `You chose: ${myNum}, the machine chose: ${machineNum}.`
    console.log(myNum, machineNum);
    if(parseInt(myNum) === parseInt(machineNum)) {
        result.innerText = "You Won!"
    } else {
        result.innerText = "You lost!"
    }
}

function genRandNumber(RAMDOM_RANGE) {
    const num = Math.floor(Math.random() * RAMDOM_RANGE);
    return num;
}

function init() {
    selectedRange.innerText = `Generate a number between 0 and ${numberBar.value}`;
    submitBtn.addEventListener("click", handleSubmit);
    numberBar.addEventListener("input", handledrag);
}
init();