import React from 'react';

import './CurrentWeather.css';

const CurrentWeather = (props) => {
  const { city, icon, iconUrl, temperature, weather, high, low, description } = props.currentWeather;

  return (
    <div className="current-weather">
      <h2>{city}</h2>
      <p>{weather}</p>
      <p>{temperature}</p>
      <img src={iconUrl} alt={icon}/>
      <div className="high-low">
        <p>{high}  &uarr;</p>
        <p>{low} &darr;</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default CurrentWeather;
