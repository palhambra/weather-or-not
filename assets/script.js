// When pressing search button, will make button of city and push to a list and be a link. City & info set to local storage.
// History city button will pull from local storage



var searchHistory = [];
var cityValue
var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&appid=8797da62fb3f32e8d04f561117825f15";
var currentDay = document.getElementById("currentDay");
var conditions
var icon = document.getElementById("icon");
// When search button is pressed, will make one big div of current day. And 5 smaller divs/cards of next 5 days


// Function that grabs input from text when button is clicked

document.getElementById("searchCity").addEventListener("click", function(){
  
  var city = document.getElementById("city");
  var cityValue = city.value;
console.log(cityValue);

// Add api link for weather
var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&appid=8797da62fb3f32e8d04f561117825f15";
console.log(cityUrl);

fetch(cityUrl)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (data) {
    console.log(data);
    console.log(data.city.name)
    
    for (var i = 0; i < data.list.length; i++) {
      
       if (i === 0) {
         console.log(i);
         console.log(data.list[i].dt_txt);
         h2Text = document.querySelector("h2");
         h2Text.textContent = data.city.name + " " + data.list[0].dt_txt;
         tempText = document.getElementById("temp");
         windText = document.getElementById("wind");
         humidityText = document.getElementById("humidity");
         tempText.textContent = 'Temp: ' + data.list[i].main.temp + ' \u00B0F';
         windText.textContent = 'Wind: ' + data.list[i].wind.speed + ' mph';
         humidityText.textContent = 'Humidity: ' + data.list[i].main.humidity + ' %'
         icon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
         console.log(`http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`)
         console.log('https://openweathermap.org/img/wn/04d@2x.png')
         console.log('Temp: ' + data.list[i].main.temp + ' \u00B0F');
         console.log('Wind: ' + data.list[i].wind.speed + ' mph');
         console.log('Humidity: ' + data.list[i].main.humidity + ' %');

       } else if (i === 8 || i === 16 || i === 24 || i === 32){
        
          
          h5Text = document.getElementById("day"+(i/8))
          h5Text.textContent = data.list[i].dt_txt;
          tempText = document.getElementById("temp"+(i/8));
          windText = document.getElementById("wind"+(i/8));
          humidityText = document.getElementById("humidity"+(i/8));
          tempText.textContent = 'Temp: ' + data.list[i].main.temp + ' \u00B0F';
          windText.textContent = 'Wind: ' + data.list[i].wind.speed + ' mph';
          humidityText.textContent = 'Humidity: ' + data.list[i].main.humidity + ' %'
          icon = document.getElementById("icon"+(i/8));
          icon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
          console.log(h5Text);
        console.log(i);
        console.log(data.list[i].dt_txt);
        console.log('icon ' + data.list[i].weather[0].icon);
        console.log('Temp: ' + data.list[i].main.temp + ' \u00B0F');
        console.log('Wind: ' + data.list[i].wind.speed + ' mph');
        console.log('Humidity: ' + data.list[i].main.humidity + ' %');
        
       }
    }
  });

});



// When search button is pressed, take text input, parse JSON, and set response to local storage
// function getWeather(city) {
//   city = cityValue;
// fetch(cityUrl)
// .then(function(response) {
//   return response.json();
// })
// .then(function (data){
//   console.log('Temp is')
//   for (var i = 0; i < data.length; i++){
//     console.log(data[i].temp)
//     console.log('yes')
//   }
// });

// }

// var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=8797da62fb3f32e8d04f561117825f15";

// fetch(cityUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   // .then parse(data)
//   .then(function (data) {
//     console.log(data);
//     console.log(data.city.name)
    
//     for (var i = 0; i < 6; i++) {
//       console.log(data.list[i].main.temp + ' degrees');
//       console.log(data.list[i].wind.speed + ' mph');
//     }
//   });
