// ONLINE CALCULATOR

//Display
const display = document.getElementById("display");
let maxDisplayLength = 8;

//FUNKCIJA appendToDisplay
function appendToDisplay(input) {
  if (display.value.length <= maxDisplayLength) {
    display.value += input;
  }
}

//FUNKCIJA BRISANJA UNOSA clear()
function clearAll() {
  display.value = "";
}

//FUNKCIJA BRISANJA POJEDINACNOG UNOSA
function clearString() {
  display.value = display.value.toString().slice(0, -1);
}

//FUNKCIJA IZRACUNA
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
