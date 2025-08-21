import React, { useEffect, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.jpg";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.jpg";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.jpg";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.jpg";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      setWeatherData({
        temperature: Math.floor(data.main.temp),
        location: data.name,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
      });

      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <SearchTwoToneIcon className="search-icon" />
        {/* <img src={search_icon} alt="" /> */}
      </div>
      <img src={clear} alt="" className="weather-icon" />
      <p className="temperature">16°C</p>
      <p className="location">London</p>

      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="" />

          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind} alt="" />

          <div>
            <p>3.6 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
