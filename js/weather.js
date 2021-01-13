// Set appId
const appId = "454d918a1ec486c8c91ed5b90b0b979c";

// getDataForCity function that fetches weather info from openweathermap api
const getDataForCity = (city) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      // get the data we need for our html from the response
      const name = data.name;
      const emoji = emojis[data.weather[0].icon];
      const temp = Math.round(data.main.temp);
      const feelsLike = Math.round(data.main.feels_like);
      const description = data.weather[0].description;

      // create the card html
      const cardHtml = createCardHtml(
        name,
        emoji,
        temp,
        feelsLike,
        description
      );

      // render!
      weatherContainer.innerHTML = cardHtml;
    })
    .catch((error) => {
      weatherContainer.innerHTML = `<em>Server returned error: "${error.message}".</em>`;
    });

// createCardHtml function used to render the weather info
const createCardHtml = (name, emoji, temp, feelsLike, description) => `
  <div id="weatherCards" role="card">
    <div class="row no-gutters align-items-center">    
      <div class="col-2 h2 pl-1 pt-1 text-center ">
        ${emoji}
      </div>
      <div class="col-10">
        <div class="card-body">
          <div class="card-title justify-content-center align-items-center">
            <h6 id="cityName" style="color: white">${name}</h6>
          </div>
          <div class="row justify-content-between align-items-center ml-1 mr-1">
            <p style="color: lightgreen">${description}</p>
            <p style="color: white">${temp}c, feels like ${feelsLike}c</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// emojis object used to find the right emoji from the icon code sent from the api
const emojis = {
  "01d": "☀️",
  "02d": "⛅️",
  "03d": "☁️",
  "04d": "☁️",
  "09d": "🌧",
  "10d": "🌦",
  "11d": "⛈",
  "13d": "❄️",
  "50d": "💨",
  "01n": "☀️",
  "02n": "⛅️",
  "03n": "☁️",
  "04n": "☁️",
  "09n": "🌧",
  "10n": "🌦",
  "11n": "⛈",
  "13n": "❄️",
  "50n": "💨",
};

// selecting all the things needed
const goButton = document.querySelector("#go-button");
const cityInput = document.querySelector("#city-input");
const weatherContainer = document.querySelector("#weather-container");

// event listener for a click event on the "Go!" button
goButton.addEventListener("click", (e) => {
  // get the city from the input field
  const city = cityInput.value;
  // get the weather data for the city
  getDataForCity(city);
});
