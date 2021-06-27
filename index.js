let weather = {
  apiKey: "089591cfe82d462915f75705c026a906",
  fetchWeather: function (city) {
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" +this.apiKey)
      .then((response) => {
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
//   displaying weather
  displayWeather: function (data) {
    var name  = data.name;
    var icon = data.weather[0].icon; 
    var description  = data.weather[0].description;
    var temp = data.main.temp;
    var humidity  = data.main.humidity;
    var speed  = data.wind.speed;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')";
  },
//   getting location
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
// calling initial display data 
weather.fetchWeather("Mumbai");
