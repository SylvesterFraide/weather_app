import React from "react";
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
