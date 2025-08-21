import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
// import search_icon from "../assets/search.jpg";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.jpg";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.jpg";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.jpg";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const Weather = (props) => {
  const inputRef = useRef();
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
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear;
      setWeatherData({
        temperature: Math.floor(data.main.temp),
        location: data.name,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: icon,
      });

      console.log(data);
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data");
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search..." />
        <SearchTwoToneIcon
          className="search-icon"
          onClick={() => search(inputRef.current.value)}
        />
        {/* <img src={search_icon} alt="" /> */}
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity} alt="" />

              <div>
                <p>{weatherData.humidity}%</p>
                <span>{props.Humidity}</span>
              </div>
            </div>

            <div className="col">
              <img src={wind} alt="" />

              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>{props.WindSpeed}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
