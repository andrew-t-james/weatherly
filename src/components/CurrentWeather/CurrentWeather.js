import React from 'react';

import './CurrentWeather.css';

const CurrentWeather = (props) => {
  const { display_location: { city }, local_time_rfc822, temperature_string, wind_string, icon_url, icon, weather  } = props.currentWeather;

  return (
    <div className="current-weather">
      <h2>{city}</h2>
      <p>{weather}</p>
      <p>{local_time_rfc822}</p>
      <p>{temperature_string}</p>
      <p>{wind_string}</p>
      <img src={icon_url} alt={icon}/>
    </div>
  );
};

export default CurrentWeather;
