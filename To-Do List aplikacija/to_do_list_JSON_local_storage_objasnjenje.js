//Dohvacamo sve potrebne elemente i spremamo ih u varijable
const todoContainer = document.getElementById("todo-container");
const todoItems = document.getElementById("template");
const addItemsButton = document.getElementById("add-item");

//UVOD U LOCAL STORAGE; JSON; PARSE; STRINGIFY
//LOCAL STORAGE stores data as strings na principu localStorage.setItem("color", "red") = ("keyName", "value")
//To je princip JSON (JavaScript Object Notation);

//JSON.parse() metoda u JS koja pretvara JSON string u JavaScript object; primjer: ovdje VSCcode ne prihvaca "name"
const jsonString = { name: "Tomislav" };
console.log(jsonString);

//JSON.stringify() metoda koja pretvara JavaScript object u JSON string
jsonStringify = JSON.stringify(jsonString);
console.log(jsonStringify);

//SPREMAMO FUNKCIJU PRAZNOG ARRAYA u VARIJABLU
let items = getItemStorage();

//FUNKCIJA ZA DOHVACANJE iz LOCALSTORAGEA POSTAVLJANJE PRAZNOG ARRAYA
function getItemStorage() {
  const getItems = localStorage.getItem("todoList") || "[]";
  //OVAKO U STORAGEU STVARAMO EMPTY ARRAY U KOJI CEMO UPISIVATI NASU TODO LISTU
  //U prijevodu ili bismo mogli ovako napisati:
  //If(localStorage.getItems !== null){
  //return JSON.parse(getItems)
  //} else {
  //return []
  //}
  return JSON.parse(getItems);
}
getItemStorage();
console.log(getItemStorage());

//FUNKCIJA ZA SPREMANJE U LOCALSTORAGE
function setItems(items) {
  const itemsJson = JSON.stringify(items);
  localStorage.setItem("todoList", itemsJson);
}

function addItem() {
  items.unshift({
    description: "",
    completed: false,
  });

  setItems(items);
  function refreshList() {
    //TODO sort items
    todoContainer.innerHTML = "";
    for (const item of items) {
    }
  }
}
