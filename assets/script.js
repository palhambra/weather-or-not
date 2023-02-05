// When pressing search button, will make button of city and push to a list and be a link. City & info set to local storage.
// History city button will pull from local storage



var searchHistory = [];
var cityValue
var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&appid=8797da62fb3f32e8d04f561117825f15";

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
    
    for (var i = 0; i < 6; i++) {
      console.log('Temp: ' + data.list[i].main.temp + ' degrees');
      console.log('Wind: ' + data.list[i].wind.speed + ' mph');
      console.log('Humidity: ' + data.list[i].main.humidity + ' %')
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
