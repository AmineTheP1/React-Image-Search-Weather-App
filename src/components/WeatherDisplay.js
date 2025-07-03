import React, { useState } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API_KEY&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="weather-container">
      <form onSubmit={searchWeather} className="search-form">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div className="loading">Loading...</div>}
      
      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p className="temperature">{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].description}</p>
          <div className="weather-details">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
