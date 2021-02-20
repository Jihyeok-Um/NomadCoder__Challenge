const numberBar = document.querySelector(".calculator__numberBar");
const button1 = document.getElementById('1');
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button0 = document.getElementById("0");
const buttonPlus = document.getElementById("+");
const buttonMinus = document.getElementById("-");
const buttonMultyfly = document.getElementById("*");
const buttonDivide = document.getElementById("/");
const buttonC = document.getElementById("c");
const buttonEqual = document.getElementById("=");
let isOperOn = null;
let savedNum = -1;
let currentNum = -1;
let count = false;
let resultNum = false;

function clickHandler(event) {
    const btn = event.target; 
    if(btn.id >= 0 && btn.id <= 9){
        if(isOperOn !== null) {
            if(count === false || numberBar.innerText === "0"){
                numberBar.innerText = btn.id;
                currentNum = numberBar.innerText;
            }
            else{
                numberBar.innerText += btn.id;
                currentNum = numberBar.innerText;
            }
            count = true;
        }else{
            if(numberBar.innerText === "0"){
                numberBar.innerText = btn.id;
                savedNum = numberBar.innerText;
            }else {
                numberBar.innerText += btn.id;
                savedNum = numberBar.innerText;
            }
        }
    }
    else if(btn.id === "c"){
        numberBar.innerText = "0";
        savedNum = -1;
        currentNum = -1;
        count = false;
        resultNum = false;
        isOperOn = null;
    }
    else if(btn.id === "+" && savedNum != -1){
        if(savedNum !== -1 && currentNum !== -1){
            bugfix();
        }
        isOperOn = '+';
        count = false;
    }
    else if(btn.id === "-" && savedNum != -1){
        if(savedNum !== -1 && currentNum !== -1){
            bugfix();
        }
        isOperOn = '-';
        count = false;
    }
    else if(btn.id === "*" && savedNum != -1){
        if(savedNum !== -1 && currentNum !== -1){
            bugfix();
        }
        isOperOn = '*';
        count = false;
    }
    else if(btn.id === "/" && savedNum != -1){
        if(savedNum !== -1 && currentNum !== -1){
            bugfix();
        }
        isOperOn = '/';
        count = false;
    }
    else {
        if(isOperOn === '+' && currentNum != -1 && resultNum !== true){
            numberBar.innerText = parseInt(savedNum) + parseInt(currentNum);
            savedNum = numberBar.innerText;
            currentNum = -1;
            count = false;
            resultNum = false;
            isOperOn = null;
        } 
        else if(isOperOn === '-' && currentNum != -1 && resultNum !== true){
            numberBar.innerText = parseInt(savedNum) - parseInt(currentNum);
            savedNum = numberBar.innerText;
            currentNum = -1;
            count = false;
            resultNum = false;
            isOperOn = null;
        }
        else if(isOperOn === '*' && currentNum != -1 && resultNum !== true){
            numberBar.innerText = parseInt(savedNum) * parseInt(currentNum);
            savedNum = numberBar.innerText;
            currentNum = -1;
            count = false;
            resultNum = false;
            isOperOn = null;
        }
        else if(isOperOn === '/' && currentNum != -1 && resultNum !== true){
            numberBar.innerText = parseInt(savedNum) / parseInt(currentNum);
            savedNum = numberBar.innerText;
            currentNum = -1;
            count = false;
            resultNum = false;
            isOperOn = null;
        }
    }
}

function bugfix() {
    if(isOperOn === '+'){
        numberBar.innerText = parseInt(savedNum) + parseInt(currentNum);
        savedNum = numberBar.innerText ;
        currentNum = -1;
        count = false;
        resultNum = false;
        isOperOn = null;
    } 
    else if(isOperOn === '-'){
        numberBar.innerText = parseInt(savedNum) - parseInt(currentNum);
        savedNum = numberBar.innerText ;
        currentNum = -1;
        count = false;
        resultNum = false;
        isOperOn = null;
    }
    else if(isOperOn === '*'){
        numberBar.innerText = parseInt(savedNum) * parseInt(currentNum);
        savedNum = numberBar.innerText ;
        currentNum = -1;
        count = false;
        resultNum = false;
        isOperOn = null;
    }
    else if(isOperOn === '/'){
        numberBar.innerText = parseInt(savedNum) / parseInt(currentNum);
        savedNum = numberBar.innerText ;
        currentNum = -1;
        count = false;
        resultNum = false;
        isOperOn = null;
    }
}

function init() {
    button0.addEventListener("click",clickHandler);
    button1.addEventListener("click",clickHandler);
    button2.addEventListener("click",clickHandler);
    button3.addEventListener("click",clickHandler);
    button4.addEventListener("click",clickHandler);
    button5.addEventListener("click",clickHandler);
    button6.addEventListener("click",clickHandler);
    button7.addEventListener("click",clickHandler);
    button8.addEventListener("click",clickHandler);
    button9.addEventListener("click",clickHandler);
    buttonC.addEventListener("click",clickHandler);
    buttonPlus.addEventListener("click",clickHandler);
    buttonMinus.addEventListener("click",clickHandler);
    buttonMultyfly.addEventListener("click",clickHandler);
    buttonDivide.addEventListener("click",clickHandler);
    buttonEqual.addEventListener("click",clickHandler);
}
init();