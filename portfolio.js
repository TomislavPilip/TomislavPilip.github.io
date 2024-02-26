///////////////////////////HAMBURGER JQuery/////////////////////////
const hamburgerButton = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".side-bar-menu");

$(document).ready(function () {
  $(".hamburger-icon").click(function () {
    $(".side-bar-menu").toggle(1000);
  });
});
