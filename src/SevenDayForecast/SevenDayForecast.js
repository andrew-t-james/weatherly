import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard.js';


const SevenDayForecast = (props) => {
  const { tenDayForecast } = props.dailyForecast;
  const sevenDayForecast = tenDayForecast.slice(0, 7);

  return (
    <div className="seven-day-forecast">
      <h1 className="seven-day-forecast-title">SevenDay Forecast</h1>
      <ul className="seven-day-forecast-list">
        {
          sevenDayForecast.map((forecast, index) =>
            <ForecastCard
              key={index}
              forecast={forecast}/>
          )
        }
      </ul>
    </div>
  );
};

export default SevenDayForecast;