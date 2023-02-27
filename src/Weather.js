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
      <div className="container">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Seach"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        {weather ? (
          <ul className="weatherDetails">
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
        <div className="row justify-content-center text-center">
          <div className="col-4 mb-5">
            <div className="city-date border-bottom">
              <h1 className="mb-0">
                <small className="text-muted">Berlin</small>
              </h1>
              <ul className="date mb-2">
                <small className="text-muted currentDate">
                  <li>11:27</li>
                  <li>Thursday</li>
                  <li>30 Jun 22</li>
                </small>
              </ul>
            </div>
            <h2 className="mb-0">
              <div className="d-flex justify-content-start weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="weather"
                  id="icon"
                />
                <span className="currentTemp">23</span>°
              </div>
            </h2>
            <span className="d-flex justify-content-start units text-muted">
              <a href="#">°C</a> |<a href="#">°F</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
