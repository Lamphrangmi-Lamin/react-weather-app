import { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import "./App.css";
import WeatherDisplay from './components/WeatherDisplay';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState('Guwahati');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (newCity) => {
    setCity(newCity);
    console.log(city);
  }
  
  useEffect(() => {
    // before making any new api request clear previous errors
    setError(null);
    if (!city) {
      return;
    }
    setIsLoading(true);

    // making fetch request
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) throw new Error("Network error");
        const json = await response.json();
        setWeatherData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    // call fetchWeatherData
    fetchWeatherData();
    console.log(weatherData);

  }, [city]) //run useEffect when city changes


  return (
    <div className='app'>
      <SearchBar className="search-bar" onSearch={handleSearch} />
      {/* conditional rendering */}
      {isLoading && <p>Loading...</p>}
      {error && <p>City not found</p>}
      {weatherData &&
        <WeatherDisplay className="weather-display" weatherData={weatherData} />
      }
    </div>
  )
}

export default App
