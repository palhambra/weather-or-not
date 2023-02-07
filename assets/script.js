// When pressing search button, will make button of city and push to a list and be a link. City & info set to local storage.
// History city button will pull from local storage



var searchHistory = localStorage.getItem("weatherData");
var city = document.getElementById("city");
var cityValue = city.value;
var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&appid=8797da62fb3f32e8d04f561117825f15";
var currentDay = document.getElementById("currentDay");
var conditions
var icon = document.getElementById("icon");


// When search button is pressed, will make one big div of current day. And 5 smaller divs/cards of next 5 days


// Function that grabs input from text when button is clicked

document.getElementById("searchCity").addEventListener("click", function () {


  var cityValue = city.value;

  var btn = document.createElement("button");
  btn.textContent = cityValue;
  var cityList = document.getElementById("cityList");
  var item = document.createElement("li");

  cityList.appendChild(item);
  item.appendChild(btn);
  btn.classList.add("list-group-item", "list-group-item-action")
  // Add api link for weather
  var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&appid=8797da62fb3f32e8d04f561117825f15";
  console.log(cityUrl);
  fetchWeather();
});

function fetchWeather() {
  var city = document.getElementById("city");
  var cityValue = city.value;
  var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&appid=8797da62fb3f32e8d04f561117825f15";


  fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {

      localStorage.setItem("weatherData", JSON.stringify(data));

      for (var i = 0; i < data.list.length; i++) {
        // Current day main card
        if (i === 0) {

          h2Text = document.querySelector("h2");
          h2Text.textContent = data.city.name + " " + data.list[0].dt_txt;
          tempText = document.getElementById("temp");
          windText = document.getElementById("wind");
          humidityText = document.getElementById("humidity");
          tempText.textContent = 'Temp: ' + data.list[i].main.temp + ' \u00B0F';
          windText.textContent = 'Wind: ' + data.list[i].wind.speed + ' mph';
          humidityText.textContent = 'Humidity: ' + data.list[i].main.humidity + ' %'
          icon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;


        } else if (i === 8 || i === 16 || i === 24 || i === 32) {
          // Next 4 days

          h5Text = document.getElementById("day" + (i / 8))
          h5Text.textContent = data.list[i].dt_txt;
          tempText = document.getElementById("temp" + (i / 8));
          windText = document.getElementById("wind" + (i / 8));
          humidityText = document.getElementById("humidity" + (i / 8));
          tempText.textContent = 'Temp: ' + data.list[i].main.temp + ' \u00B0F';
          windText.textContent = 'Wind: ' + data.list[i].wind.speed + ' mph';
          humidityText.textContent = 'Humidity: ' + data.list[i].main.humidity + ' %'
          icon = document.getElementById("icon" + (i / 8));
          icon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;


        }
      }
    });

};

// When button on city history is clicked, will bring back old city
cityList.addEventListener("click", function (event) {
  var butn = event.target;
  if (butn.nodeName === "BUTTON") {
    city.value = butn.textContent;
    fetchWeather();
  }
});

 