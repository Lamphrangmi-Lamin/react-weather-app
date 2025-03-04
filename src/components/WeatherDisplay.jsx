import React from "react";
import "./WeatherDisplay.css";
import humidityIcon from "../assets/humidity.png";
import windspeedIcon from "../assets/air.png";
import temperatureIcon from "../assets/temperature.png";
import feelsLikeIcon from "../assets/temperature-feels-like.svg";

function WeatherDisplay({weatherData}) {
    if (!weatherData) {
        return <p>No weather data available</p>;
    }
    // extract data from the API
    const location = weatherData.location.name;
    const temp_c = weatherData.current.temp_c;
    const feelslike_c = weatherData.current.feelslike_c;
    const humidity = weatherData.current.humidity;
    const wind_kph = weatherData.current.wind_kph;
    const description = weatherData.current.condition.text;
    const icon = weatherData.current.condition.icon;

    return (
        <div className="container">
            {/* display data from api in jsx */}
            <h1 className="location">{location}</h1>
            <div className="weather-display">
                <img src={icon}/>
                <p>{description}</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={temperatureIcon} />
                    <p>Temperature: {temp_c}C</p>
                </div>
                <div className="card">
                    <img src={feelsLikeIcon} />
                    <p>Feels Like: {feelslike_c}C</p>
                </div>
                <div className="card">
                    <img src={humidityIcon} />
                    <p>Humidity: {humidity}</p>
                </div>
                <div className="card">
                    <img src={windspeedIcon} />
                    <p>Wind speed: {wind_kph}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay;