import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard.js';

const SevenHour = (props) => {
  const { hourlyForecast } = props;

  return (
    <section className="forecast">
      <h1 className="forecast-title">Seven Hour</h1>
      <ul className="forecast-list">
        {
          hourlyForecast.map((hour, index) =>
            <ForecastCard
              key={index}
              forecast={hour}/>
          )
        }
      </ul>
    </section>
  );
};

export default SevenHour;