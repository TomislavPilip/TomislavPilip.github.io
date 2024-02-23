//TIMER

//ODREDUJEMO DATUM OD KOJEG ODBROJAVAMO
var timeStarting = new Date("Feb 22, 2024 00:00:00").getTime();
console.log(timeStarting);

//Ovdje smo postavili interval
var x = setInterval(function () {
  var now = new Date().getTime(); //Hvatamo sadasnje vrijeme u milisekundama
  console.log(now);

  var distance = timeStarting - now; // Odnos izmedu postavljenog i sadasnjeg vremena ovom formulom je u milisekundama

  //Ovo su formule za pretvaranje milisekunda u redom: dane, sate, minute i sekunde
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
