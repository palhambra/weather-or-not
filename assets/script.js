// When pressing search button, will make button of city and push to a list and be a link. City & info set to local storage.
// History city button will pull from local storage


// When search button is pressed, take text input, parse JSON, and set response to local storage
var searchHistory = [];
var cityValue;

// When search button is pressed, will make one big div of current day. And 5 smaller divs/cards of next 5 days


// Function that grabs input from text when button is clicked

document.getElementById("searchCity").addEventListener("click", function(){
  var city = document.getElementById("city");
  var cityValue = city.value;
console.log(cityValue)
// Add api link for weather
var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&appid=8797da62fb3f32e8d04f561117825f15"
console.log(cityUrl)
})





