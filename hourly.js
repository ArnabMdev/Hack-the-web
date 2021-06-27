// getting weather data
let weather = {
    apiKey: "089591cfe82d462915f75705c026a906",
    fetchWeather: function (city){
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q="+city+ "&units=Metric&appid="+this.apiKey
      )
        .then((response) => response.json())
        .then((data) =>this.displayweather(data));
        },

    displayweather: function(data){
        var name  = data.city.name;
        var temp1 = data.list[0].main.temp;
        var temp2 = data.list[1].main.temp;
        var temp3 = data.list[2].main.temp;
        var temp4 = data.list[3].main.temp;
        var temp5 = data.list[4].main.temp;
        var humidity1 = data.list[0].main.humidity;
        var humidity2 = data.list[1].main.humidity;
        var humidity3 = data.list[2].main.humidity;
        var humidity4 = data.list[3].main.humidity;
        var humidity5 = data.list[4].main.humidity;
        var icon1 = data.list[0].weather[0].icon;
        var icon2 = data.list[1].weather[0].icon;
        var icon3 = data.list[2].weather[0].icon;
        var icon4 = data.list[3].weather[0].icon;
        var icon5 = data.list[4].weather[0].icon;
        var description1 = data.list[0].weather[0].description;
        var description2 = data.list[1].weather[0].description;
        var description3 = data.list[2].weather[0].description;
        var description4 = data.list[3].weather[0].description;
        var description5 = data.list[4].weather[0].description;
        var speed1 = data.list[0].wind.speed;
        var speed2 = data.list[1].wind.speed;
        var speed3 = data.list[2].wind.speed;
        var speed4 = data.list[3].wind.speed;
        var speed5 = data.list[4].wind.speed;

        console.log(name,temp1,humidity1,icon1,speed1,description1);

        document.querySelector(".city").innerText = "Weather in " + name + " for the next 15 hours";
        document.querySelector(".icon1").src =
      "https://openweathermap.org/img/wn/" + icon1 + ".png";
      document.querySelector(".icon2").src =
      "https://openweathermap.org/img/wn/" + icon2 + ".png";
      document.querySelector(".icon3").src =
      "https://openweathermap.org/img/wn/" + icon3 + ".png";
      document.querySelector(".icon4").src =
      "https://openweathermap.org/img/wn/" + icon4 + ".png";
      document.querySelector(".icon5").src =
      "https://openweathermap.org/img/wn/" + icon5 + ".png";

      document.querySelector(".description1").innerText = description1;
      document.querySelector(".description2").innerText = description2;
      document.querySelector(".description3").innerText = description3;
      document.querySelector(".description4").innerText = description4;
      document.querySelector(".description5").innerText = description5;

      document.querySelector(".temp1").innerText = temp1 + "°C";
      document.querySelector(".temp2").innerText = temp2 + "°C";
      document.querySelector(".temp3").innerText = temp3 + "°C";
      document.querySelector(".temp4").innerText = temp4 + "°C";
      document.querySelector(".temp5").innerText = temp5 + "°C";

      document.querySelector(".humidity1").innerText =
      "Humidity: " + humidity1 + "%";
      document.querySelector(".humidity2").innerText =
      "Humidity: " + humidity2 + "%";
      document.querySelector(".humidity3").innerText =
      "Humidity: " + humidity3 + "%";
      document.querySelector(".humidity4").innerText =
      "Humidity: " + humidity4 + "%";
      document.querySelector(".humidity5").innerText =
      "Humidity: " + humidity5 + "%";

      document.querySelector(".wind1").innerText =
      "Wind speed: " + speed1 + " km/h";
      document.querySelector(".wind2").innerText =
      "Wind speed: " + speed2 + " km/h";
      document.querySelector(".wind3").innerText =
      "Wind speed: " + speed3 + " km/h";
      document.querySelector(".wind4").innerText =
      "Wind speed: " + speed4 + " km/h";
      document.querySelector(".wind5").innerText =
      "Wind speed: " + speed5 + " km/h";

      document.querySelectorAll(".col")[0].classList.remove("loading");
      document.querySelectorAll(".col")[1].classList.remove("loading");
      document.querySelectorAll(".col")[2].classList.remove("loading");
      document.querySelectorAll(".col")[3].classList.remove("loading");
      document.querySelectorAll(".col")[4].classList.remove("loading");
      document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + description1 + "')";

    },
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
  
  weather.fetchWeather("Mumbai");
    
    