let now = new Date();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let h6 = document.querySelector("h6");
h6.innerHTML = `It is currently ${hour}:${minutes} on ${day}, ${month} ${date}, ${year}`;

function cityWeather(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;

  document.querySelector("#numTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function citySearch(searching) {
  let apiKey = "017d56650cd168d68067850318775d43";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searching}&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(cityWeather);
}

function searching(event) {
  event.preventDefault();
  let searching = document.querySelector("#searchbar-input").value;
  citySearch(searching);
}

let searchbar = document.querySelector("#search-form");
searchbar.addEventListener("submit", searching);

//
