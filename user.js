const user = document.querySelector(".currentUser__container");
const user_input = user.querySelector(".currentUser__input");
const user_greeting = document.querySelector(".currentUser__greeting");
const USER_LS = "currentUser";

function handleSubmit() {
    user.addEventListener("submit", setCurrentUser, false);
}

function setCurrentUser(event) {
    currentUser = user_input.value;
    event.preventDefault();
    saveCurrentUser(currentUser);
    printCurrentUser(currentUser);
}  

function saveCurrentUser(text) {
    localStorage.setItem(USER_LS, text);
}

function printCurrentUser(text) {
    user.classList.add("hidden");
    user_greeting.classList.remove("hidden");
    user_greeting.innerText = `hello, ${text}!`;
}

function init(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        handleSubmit();
    }
    else{
        printCurrentUser(currentUser);;
    }
}
init();