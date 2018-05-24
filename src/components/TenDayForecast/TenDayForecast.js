import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard.js';


const TenDayForecast = (props) => {
  const { tenDayForecast } = props.dailyForecast;

  return (
    <div className="seven-day-forecast">
      <h1 className="seven-day-forecast-title">Ten Day Forecast</h1>
      <ul className="seven-day-forecast-list">
        {
          tenDayForecast.map((forecast, index) =>
            <ForecastCard
              key={index}
              forecast={forecast}/>
          )
        }
      </ul>
    </div>
  );
};

export default TenDayForecast;