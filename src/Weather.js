import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState(null);

  function showTemperature(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Seach" />
      </form>
      {weather ? (
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C </li>
          <li>Description: {weather.description} </li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h </li>
          <li>
            {" "}
            <img src={weather.icon} alt="icon" />{" "}
          </li>
        </ul>
      ) : null}
      <footer>
        <a
          href="https://github.com/anna-bs/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Anna Bilousova
      </footer>
    </div>
  );
}
