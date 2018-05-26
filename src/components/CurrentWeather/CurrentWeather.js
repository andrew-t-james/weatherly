import React from 'react';

import './CurrentWeather.css';

const CurrentWeather = (props) => {
  const { city, icon, iconUrl, temperature, weather, high, low, description } = props.currentWeather;

  return (
    <div className="current-weather">
      <h2 className="current-weather__title">{city}</h2>
      <p className="current-weather__weather">{weather}</p>
      <p className="current-weather__temperature">{temperature}</p>
      <img className="current-weather__icon" src={iconUrl} alt={icon}/>
      <div className="high-low">
        <p className="current-weather__high">{high} &uarr;</p>
        <p className="current-weather__low">{low} &darr;</p>
      </div>
      <p className="current-weather__description">{description}</p>
    </div>
  );
};

export default CurrentWeather;
