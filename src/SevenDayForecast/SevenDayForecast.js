import React from 'react';

const SevenDayForecast = (props) => {
  console.log(props);
  return (
    <div>
      <h1>SevenDay</h1>
  <ul>{props.weather.forecastday.map((forecast, index) => <li>day {index + 1} {forecast.conditions}</li>)}</ul>
    </div>
  );
};

export default SevenDayForecast;