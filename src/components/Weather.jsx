import React from 'react';
import './Weather.css';
import search_icon from '../assets/images/search.jpg';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder='Search...' />
        <SearchTwoToneIcon className="search-icon" />
        {/* <img src={search_icon} alt="" /> */}
      </div>
    </div>
  );
}

export default Weather;