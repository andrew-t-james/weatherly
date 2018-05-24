import React from 'react';

import './CurrentWeather.css';

const CurrentWeather = (props) => {
  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>{props.currentWeather.display_location.city}</p>
      <p>{props.currentWeather.weather}</p>
      <p>{props.currentWeather.local_time_rfc822}</p>
      <p>{props.currentWeather.temperature_string}</p>
      <p>{props.currentWeather.wind_string}</p>
    </div>
  );
};

export default CurrentWeather;
