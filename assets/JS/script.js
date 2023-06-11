document.addEventListener('DOMContentLoaded', function() {
  var dayOfWeek1 = document.getElementById('dayOfWeek1');
  var dayOfWeek2 = document.getElementById('dayOfWeek2');
  var dayOfWeek3 = document.getElementById('dayOfWeek3');
  var dayOfWeek4 = document.getElementById('dayOfWeek4');
  var dayOfWeek5 = document.getElementById('dayOfWeek5');
  dayOfWeek1.textContent = dayjs().add(1, 'day').format('(M/DD/YYYY)');
  dayOfWeek2.textContent = dayjs().add(2, 'day').format('(M/DD/YYYY)');
  dayOfWeek3.textContent = dayjs().add(3, 'day').format('(M/DD/YYYY)');
  dayOfWeek4.textContent = dayjs().add(4, 'day').format('(M/DD/YYYY)');
  dayOfWeek5.textContent = dayjs().add(5, 'day').format('(M/DD/YYYY)');
  console.log('Page loaded');

  var submitButton = document.getElementById('submitButtonID');
  submitButton.addEventListener('click', function() {
    fetchWeather();
  });

  var locationButtons = document.querySelectorAll('.buttonAtlanta, .buttonDenver, .buttonSeattle, .buttonSanFrancisco, .buttonOrlando, .buttonNewYork, .buttonChicago, .buttonAustin');
  locationButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var city = button.textContent;
      var cityInput = document.getElementById('textInput');
      cityInput.value = city;
      fetchWeather();
    });
  });

  function fetchWeather() {
    var cityInput = document.getElementById('textInput');
    var city = cityInput.value;
    var APIKey = "aa6d7ef470b15e223a5fd51d8251411e";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(queryURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        updateWeather(data, city);
        console.log(data);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }

  function updateWeather(data, city) {
    var dayOfWeek = document.getElementById('dayOfWeek');
    dayOfWeek.textContent = city + " " + dayjs().format('(M/DD/YYYY)');

    var tempElement = document.getElementById('temp');
    tempElement.textContent = "Temp: " + data.list[0].main.temp + "°F";

    var windElement = document.getElementById('wind');
    windElement.textContent = "Wind: " + data.list[0].wind.speed;

    var humidityElement = document.getElementById('humidity');
    humidityElement.textContent = "Humidity: " + data.list[0].main.humidity;

    for (let i = 0; i < 5; i++) {
      const forecastData = data.list[(i + 1) * 8]; 
      const forecastBox = document.getElementById(`dayOfWeek${i + 1}`).parentNode;

      
      const previousWeatherIcon = forecastBox.querySelector('.weather-icon');
      if (previousWeatherIcon) {
        forecastBox.removeChild(previousWeatherIcon);
      }

      const tempForecastElement = document.getElementById(`temp${i + 1}`);
      tempForecastElement.textContent = `Temp: ${forecastData.main.temp}°F`;

      const windForecastElement = document.getElementById(`wind${i + 1}`);
      windForecastElement.textContent = `Wind: ${forecastData.wind.speed}`;

      const humidityForecastElement = document.getElementById(`humidity${i + 1}`);
      humidityForecastElement.textContent = `Humidity: ${forecastData.main.humidity}`;

      const weatherIconElement = document.createElement('img');
      weatherIconElement.src = `http://openweathermap.org/img/w/${forecastData.weather[0].icon}.png`;
      weatherIconElement.alt = forecastData.weather[0].description;
      weatherIconElement.classList.add('weather-icon');
      forecastBox.appendChild(weatherIconElement);
    }

    const forecastData5thDay = data.list[4 * 8];
    const forecastBox5thDay = document.getElementById('dayOfWeek5').parentNode;

    
    const previousWeatherIcon5thDay = forecastBox5thDay.querySelector('.weather-icon');
    if (previousWeatherIcon5thDay) {
      forecastBox5thDay.removeChild(previousWeatherIcon5thDay);
    }

    const tempForecastElement5thDay = document.getElementById('temp5');
    tempForecastElement5thDay.textContent = `Temp: ${forecastData5thDay.main.temp}°F`;

    const windForecastElement5thDay = document.getElementById('wind5');
    windForecastElement5thDay.textContent = `Wind: ${forecastData5thDay.wind.speed}`;

    const humidityForecastElement5thDay = document.getElementById('humidity5');
    humidityForecastElement5thDay.textContent = `Humidity: ${forecastData5thDay.main.humidity}`;

    const weatherIconElement5thDay = document.createElement('img');
    weatherIconElement5thDay.src = `http://openweathermap.org/img/w/${forecastData5thDay.weather[0].icon}.png`;
    weatherIconElement5thDay.alt = forecastData5thDay.weather[0].description;
    weatherIconElement5thDay.classList.add('weather-icon');
    forecastBox5thDay.appendChild(weatherIconElement5thDay);
  }
});



  



















var Denver = "Denver";
var Seattle = "Seattle";
var SanFrancisco = "San Francisco";
var Orlando = "Orlando";
var NewYork = "New York";
var Chicago = "Chicago";
var Austin = "Austin";