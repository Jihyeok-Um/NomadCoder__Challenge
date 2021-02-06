const todo = document.querySelector(".todo__container");
const todoInput = todo.querySelector(".todo__input");
const TODO_LS = "todo";
const toDos = [];

function handleSubmitTodos() {
    todo.addEventListener("submit", addTodoList, false);
}

function addTodoList(event) {
    let toDosValue = todoInput.value;
    let toDosNumber = 0;
    if(toDos.length === 0){
        toDosNumber = 1;
    }
    else {
        toDosNumber = toDos[toDos.length-1] + 1;
    }
    const toDosObj = {
        toDosValue: toDosNumber
    }
    toDos.push(toDosObj);
    event.preventDefault();
    saveTodos(toDos);
    printTodos(toDos);
}

function saveTodos(toDos) {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function printTodos(toDos) {
    const toDosdiv = document.createElement("div");
    const toDosSpan = document.createElement("span");
    const toDosButton = document.createElement("button");
    toDosSpan.innerText = toDos;
}

function init() {
    handleSubmitTodos();
}
init();