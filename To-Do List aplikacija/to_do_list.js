//Selektori
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".todos-filter");

//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
document.addEventListener("DOMContentLoaded", getTodos);

//FUNCTION
//Funkcija addTodo ce se izvrsavati pritiskom na plus
//ADDTODO() dodaje novi to-do zadatak
function addTodo(event) {
  //Prevent form from submiting
  event.preventDefault();
  //Stvaramo novi div unutar kojeg ce se nalaziti
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); //ovako zadajemo KLASU novom elementu
  //Stvaramo listu
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  /////SAVE LOCAL TODOS in LOCAL STORAGE
  /////POgledaj funkciju na kraju
  saveLocalTodos(todoInput.value);

  //Appendamo nowTodo listu todoDivu
  todoDiv.appendChild(newTodo);

  //Stvaramo CHECK BUTTON
  const checkedButton = document.createElement("button");
  checkedButton.innerHTML = `<i class="fas fa-check"></i>`;
  checkedButton.classList.add("checked-btn");
  todoDiv.appendChild(checkedButton);

  //Stvaramo delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //APPENDAMO todoDIV na UL listu u nasem HTMLU
  //time smo dobili sve elemente za stvaranje nove todo liste
  todoList.appendChild(todoDiv);

  //MICEMO INPUT VALUE koji ostaje nakon svakog unosa... stavljamo prazan string
  todoInput.value = "";
}

function deleteCheck(e) {
  //DELETE BUTTON
  console.log(e.target); //provjeravamo na sto klikamo i u konzoli se ispise
  const item = e.target; //Spremamo ono sto target dohvaca u varijablu... dakle sve sto je unutar DIVA(listu, checked button i deletebutton)
  if (item.classList[0] === "delete-btn") {
    //Ovime dohvacamo DELETE BUTTON
    const todo = item.parentElement; //Dohvacamo parent element dakle div kontejner koji cemo izbrisati
    todo.classList.add("todo-effect");
    removeLocalTodos(todo);
    setTimeout(function () {
      todo.remove();
    }, 1000);
  }
  //CHECKED BUTTON
  if (item.classList[0] === "checked-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//FUNKCIJA ZA SELECT FILTER
function filterTodo(e) {
  //Ovdje ima puno sintakse koju treba pogledati VAZNO POGLEDATI OBJASNJENJE
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
  console.log(todos);
}

//FUNKCIJA ZA SPREMANJE TO-DO LISTE U LOCAL STORAGE{
function saveLocalTodos(todo) {
  //CHECK if I already have todos
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Stvaramo novi div unutar kojeg ce se nalaziti
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); //ovako zadajemo KLASU novom elementu
    //Stvaramo listu
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");

    //Appendamo nowTodo listu todoDivu
    todoDiv.appendChild(newTodo);

    //Stvaramo CHECK BUTTON
    const checkedButton = document.createElement("button");
    checkedButton.innerHTML = `<i class="fas fa-check"></i>`;
    checkedButton.classList.add("checked-btn");
    todoDiv.appendChild(checkedButton);

    //Stvaramo delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //APPENDAMO todoDIV na UL listu u nasem HTMLU
    //time smo dobili sve elemente za stvaranje nove todo liste
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerHTML;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
