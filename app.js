// dda206e75f2f88bbc7658b1f7ea54e1c

const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempImg = document.getElementById("temp-img");
const description = document.getElementById("description");
const tempMax = document.getElementById("temp-max");
const tempMin = document.getElementById("temp-min");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getFullYear();

date.innerHTML = `${month} ${day} , ${year} `;

const app = document.getElementById("app");

const getWeather = async () => {
  try {
    const cityName=document.getElementById('search-bar-input').value;
    const fetchWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dda206e75f2f88bbc7658b1f7ea54e1c`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const weatherData = await fetchWeather.json();
    console.log(weatherData);

    city.innerHTML = `${weatherData.name}`;
    description.innerHTML = `${weatherData.weather[0].main}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
    temp.innerHTML = `<h2> ${Math.round(weatherData.main.temp) / 10}°C </h2>`;
    tempMax.innerHTML = `${Math.round(weatherData.main.temp_max) / 10}`;
    tempMin.innerHTML = `${Math.round(weatherData.main.temp_min) / 10}`;
  } catch (err) {
    console.log(err);
  }
};

// getWeather();
