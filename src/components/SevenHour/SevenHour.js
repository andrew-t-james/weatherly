import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard.js';

const SevenHour = (props) => {
  const { hourly } = props;

  return (
    <div className="forecast">
      <h1 className="forecast-title">Seven Hour</h1>
      <ul className="forecast-list">
        {
          hourly.map((hour, index) =>
            <ForecastCard
              key={index}
              forecast={hour}/>
          )
        }
      </ul>
    </div>
  );
};

export default SevenHour;