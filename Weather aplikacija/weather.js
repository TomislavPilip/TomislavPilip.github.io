const apiKey = "13f5bc705ffe282553659bef1df178bf"; //Ovo je api key koji dobijemo na openweathermap.org
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //Na urlu smo izbrisali grad koji cemo upisati iz searchBara

const searchBar = document.getElementById("input");
const searchBtn = document.getElementById("button");
let weatherImage = document.getElementById("weather-image");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //najprije dohvacamo  url s api kljucem formiran u dvije varijable
  var data = await response.json(); //Spremamo dohvacene podatke u data varijablu

  console.log(data); //Provjeravamo u u konzoli jesu li podaci spremljeni

  //Dohvacamo html elemnte gdje cemo upisivati sadrzaj iz json datoteke
  document.getElementById("city").innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.getElementById("temp-min").innerHTML =
    Math.round(data.main.temp_min) + "°C";
  document.getElementById("temp-max").innerHTML =
    Math.round(data.main.temp_max) + "°C";
  document.getElementById("weather").innerHTML =
    data.weather[0].main + ": " + data.weather[0].description;

  if (data.weather[0].main == "Clear") {
    weatherImage.setAttribute("src", "clear_sun.png");
  } else if (data.weather[0].main == "Clouds") {
    weatherImage.setAttribute("src", "cloudy.png");
  } else if (data.weather[0].main == "Snow") {
    weatherImage.setAttribute("src", "snow.png");
  } else if (data.weather[0].main == "Rain") {
    weatherImage.setAttribute("src", "cloudy-sun-rain.png");
  }
}
searchBtn.addEventListener("click", function () {
  checkWeather(searchBar.value);
});
