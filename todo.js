const todo = document.querySelector(".todo__container");
const todoInput = todo.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const TODO_LS = "todo";
let toDos = [];

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
        toDosNumber = toDos[toDos.length-1].toDosValue + 1;
        console.log(toDos[toDos.length-1].toDosValue);
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
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = todoInput.value;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = toDos[toDos.length-1].toDosValue + 1;
    todoList.appendChild(li);
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodos(toDos);
  }

function init() {
    toDos = localStorage.getItem(TODO_LS);
    handleSubmitTodos();
}
init();