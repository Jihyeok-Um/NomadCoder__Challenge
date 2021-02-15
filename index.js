const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  finishedList = document.querySelector(".js-finishedList");

const FINISHED_LS = "finished";
const TODOS_LS = "toDos";
let toDos = [];
let finshedToDos = [];

function toFinishedToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const text = li.firstChild.innerText;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

    paintToDos(text, finishedList);
}

function toToDoList(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const text = li.firstChild.innerText;
    finishedList.removeChild(li);
    const cleanToDos = finshedToDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    finshedToDos = cleanToDos;
    saveToDos();

    paintToDos(text, toDoList);
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function deleteFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanToDos = finshedToDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    finshedToDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
      localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
      localStorage.setItem(FINISHED_LS, JSON.stringify(finshedToDos));
}

function paintToDos(text, whereAppend) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const clearBtn = document.createElement("button");
    const span = document.createElement("span");
    let newId = 0;
    if(whereAppend === toDoList) {
        if(toDos.length === 0){
            newId = 1;
        }
        else {
            newId = toDos[toDos.length-1].id + 1;
        }
    }
    else {
        if(finshedToDos.length === 0){
            newId = 1;
        }
        else {
            newId = finshedToDos[finshedToDos.length-1].id + 1;
        }
    }

    delBtn.innerText = "❌";
    if (whereAppend === toDoList) {
        clearBtn.innerText = "✔️";
    } else {
        clearBtn.innerText = "⬅️";
    }

    if (whereAppend === toDoList) {
        delBtn.addEventListener("click", deleteToDo);
    } else {
        delBtn.addEventListener("click", deleteFinished);
    }

    if (whereAppend === toDoList) {
        clearBtn.addEventListener("click", toFinishedToDo); 
    } else {
        clearBtn.addEventListener("click", toToDoList); 
    }

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(clearBtn);
    li.id = newId;
    whereAppend.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };

    if (whereAppend === toDoList) {
        toDos.push(toDoObj);
    } else {
        finshedToDos.push(toDoObj);
    }
    saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDos(currentValue, toDoList);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function something(toDo) {
        paintToDos(toDo.text, toDoList);
    });
  }

  const loadedFinshedToDos = localStorage.getItem(FINISHED_LS);
  if (loadedFinshedToDos !== null) {
      const parsedFinishedToDos = JSON.parse(loadedFinshedToDos);
      parsedFinishedToDos.forEach(function something(toDo) {
        paintToDos(toDo.text, finishedList);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
