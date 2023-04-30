const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

toDoForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", onDeleteBtnClicked)

  li.appendChild(span);
  li.appendChild(deleteBtn);
  
  toDoList.appendChild(li);
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function onDeleteBtnClicked(event) {
  const li = event.composedPath()[1];
  toDoList.removeChild(li);
  toDos = toDos.filter((item) => { return String(item.id) !== li.id})
  saveTodos();
}


const savedToDos = localStorage.getItem(TODOS_KEY); 

if (savedToDos) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintTodo);
}