document.addEventListener('DOMContentLoaded', function() {
    var cityInput = document.getElementById('textInput');
    var city = cityInput.value
    var dayOfWeek = document.getElementById('dayOfWeek');
    dayOfWeek.textContent =  cityInput + dayjs().format('(MM/DD/YYYY)');
    console.log('Page loaded');
  });

 $(document).ready(function () {
    $('#submitButton').click(function () {
        var textValue = $('#textInput').val();
    });
}); 

function fetchWeather() {
    var APIKey = "aa6d7ef470b15e223a5fd51d8251411e";
    var city = "";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + '}&appid=' + APIKey;
    fetch(queryURL)
    var cityInput = document.getElementById('cityInput');
    var city = cityInput.value

    then(function (response) {
    })
        .catch(function (error) {
        });
};


















var Denver = "Denver";
var Seattle = "Seattle";
var SanFrancisco = "San Francisco";
var Orlando = "Orlando";
var NewYork = "New York";
var Chicago = "Chicago";
var Austin = "Austin";