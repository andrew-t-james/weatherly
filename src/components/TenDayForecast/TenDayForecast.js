import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard.js';

import './TenDayForecast.css';


const TenDayForecast = (props) => {
  const { tenDayForecast } = props;

  return (
    <section className="forecast">
      <h1 className="forecast-title">Ten Day Forecast</h1>
      <ul className="forecast-list">
        {
          tenDayForecast.map((forecast, index) =>
            <ForecastCard
              key={index}
              forecast={forecast} />
          )
        }
      </ul>
    </section>
  );
};

export default TenDayForecast;