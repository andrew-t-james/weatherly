import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard.js';

const SevenHour = (props) => {
  const { hourly } = props;

  // console.log(hourly);
  return (
    <div className="forecast">
      <h1 className="forecast-title">Seven Hour</h1>
      <ul className="forecast-list">
        {/* {
          hourly.map((hour, index) =>
            <ForecastCard
              key={index}
              hour={hour}/>
          )
        } */}
      </ul>
    </div>
  );
};

export default SevenHour;