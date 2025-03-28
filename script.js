const btn = document.querySelector("button");
const apiKey = "4bb7ca69965c7055eacecc234a4a1929";
let city = "Pune";
async function getWeather() {
  const cityName = document.querySelector("#city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  if (!cityName) {
    alert("Please select a cityName");
    return;
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod !== 200) {
      document.querySelector(
        "#weather-info"
      ).innerHTML = `<p>${data.message}</p>`;
      return;
    }

    document.querySelector(".weather-info").innerHTML = `
    <h3>${data.name},${data.sys.country}</h3>
    <p>🌡Temperature: ${data.main.temp} ° c</p>
    <p>☁️ Weather: ${data.weather[0].description}</p>
    <p>💧Humidity: ${data.main.humidity}</p>
    <p>🌬 Wind Speed: ${data.wind.speed}</p>
    <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
`;
  } catch (error) {
    console.log(error);
    document.querySelector(
      "#weather-info"
    ).innerHTML = `<p>Error fetching weather data</p>`;
  }
}
btn.addEventListener("click", getWeather);
getWeather();