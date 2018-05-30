import React from 'react';
import PropTypes from 'prop-types';
import ForecastCard from '../ForecastCard/ForecastCard.js';

import './TenDayForecast.css';


const TenDayForecast = props => {
  const { tenDayForecast } = props;

  return (
    <section className="forecast">
      <h1
        tabIndex="0"
        aria-label="Daily forecast for the next 10 days"
        className="forecast-title">
      Daily
      </h1>
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

TenDayForecast.propTypes = {
  tenDayForecast: PropTypes.array
};

export default TenDayForecast;