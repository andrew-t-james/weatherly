import React from 'react';

const CurrentWeather = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Current Weather</h2>
      <h3>{props.currentWeather.display_location.city}</h3>
      <h3>{props.currentWeather.weather}</h3>
      <h3>{props.currentWeather.local_time_rfc822}</h3>
      <h3>{props.currentWeather.temperature_string}</h3>
      <h3>{props.currentWeather.wind_string}</h3>
    </div>
  );
};

export default CurrentWeather;
