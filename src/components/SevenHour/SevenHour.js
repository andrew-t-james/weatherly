import React from 'react';
import PropTypes from 'prop-types';
import ForecastCard from '../ForecastCard/ForecastCard.js';

const SevenHour = props => {
  const { hourlyForecast } = props;

  return (
    <section className="forecast">
      <h1
        tabIndex="0"
        aria-label="Hourly Forecast for the next 7 hours"
        className="forecast-title">
      Hourly
      </h1>
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

SevenHour.propTypes = {
  hourlyForecast: PropTypes.array
};

export default SevenHour;