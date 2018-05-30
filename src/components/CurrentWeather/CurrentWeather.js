import React from 'react';
import PropTypes from 'prop-types';
import './CurrentWeather.css';

const CurrentWeather = props => {
  const { city, icon, temperature, weather, high, low, description } = props.currentWeather;

  return (
    <section className="current-weather">
      <h2
        tabIndex="0"
        className="current-weather__title"
        aria-label={city}>
        {city}
      </h2>
      <p
        tabIndex="0"
        className="current-weather__weather"
        aria-label={weather}>
        {weather}
      </p>
      <p
        tabIndex="0"
        className="current-weather__temperature"
        aria-label={temperature}
      >{temperature} &#176;
      </p>
      <i
        tabIndex="0"
        className={`current-weather__icon wi wi-wu-${icon}`}
        aria-label={icon}
        alt={icon}/>
      {
        high &&
        <p
          tabIndex="0"
          aria-label={`The high will be ${high} today`}
          className="current-weather__high">
          {high}&#176; &uarr;
        </p>
      }
      {
        low &&
        <p
          tabIndex="0"
          aria-label={`The Low will be ${low} today`}
          className="current-weather__low">
          {low}&#176; &darr;
        </p>
      }
      {
        description &&
        <p
          tabIndex="0"
          aria-label={description}
          className="current-weather__description">
          {description}
        </p>
      }
    </section>
  );
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object,
  city: PropTypes.string,
  temperature: PropTypes.number,
  high: PropTypes.string,
  low: PropTypes.string,
  icon: PropTypes.string,
  weather: PropTypes.string,
  description: PropTypes.string
};

export default CurrentWeather;
