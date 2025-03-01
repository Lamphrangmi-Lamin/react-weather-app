import { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import "./App.css";
import WeatherDisplay from './components/WeatherDisplay';

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
    const apiKey = "a409cd74d21e4878b8e30436250103";
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) throw new Error("Network error");
        const json = await response.json();
        setWeatherData(json);
        setIsLoading(false);
        console.log(json);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    // call fetchWeatherData
    fetchWeatherData();

  }, [city]) //run useEffect when city changes


  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        
      />
      {/* <WeatherDisplay/> */}
      {/* <h3>Searching for city: {city}</h3> */}

      {/* conditional rendering */}
      {isLoading && <p>Loading...</p>}
      {error && <p>City not found</p>}
      {weatherData &&
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
      }
    </div>
  )
}

export default App
