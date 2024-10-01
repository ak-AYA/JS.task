"use strict"

let apikey = "a03d01a479e9e324ee9ed73e56a0028b";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weatherIcon = document.querySelector(".weather-icon");
let searchBox = document.querySelector(".search input");
let searchBTN = document.querySelector(".search button");

async function checkWeather(city) {
    let response = await fetch(apiURL + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBTN.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather();
