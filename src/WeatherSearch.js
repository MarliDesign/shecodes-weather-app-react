import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState("");

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "ebef9ca4a8de66ed586fac628fade056";
    let units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showResult);
  }

  function showResult(response) {
    setLoaded(true);
    const data = response.data;
    setResult({
      temp: Math.round(data.main.temp),
      humidity: data.main.humidity,
      description: data.weather[0].description,
      wind: Math.round(data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="enter a city"
        autoFocus={true}
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  let weather = (
    <div className="WeatherSearch">
      <ul>
        <li>Temperature: {result.temp}°C</li>
        <li>Humidity: {result.humidity}%</li>
        <li>{result.description}</li>
        <li>Wind Speed: {result.wind} km/h</li>
        <li>
          <img
            src={result.icon}
            alt="weather icon"
          />
        </li>
      </ul>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        {weather}
      </div>
    );
  } else {
    return form;
  }
}
