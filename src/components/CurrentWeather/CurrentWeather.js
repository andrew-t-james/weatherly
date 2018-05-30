import React from 'react';
import PropTypes from 'prop-types';
import './CurrentWeather.css';

const CurrentWeather = props => {
  const { city, icon, temperature, weather, high, low, description } = props.currentWeather;

  return (
    <section className="current-weather">
      <h2 className="current-weather__title">{city}</h2>
      <p className="current-weather__weather">{weather}</p>
      <p className="current-weather__temperature">{temperature} &#176;</p>
      <i className={`current-weather__icon wi wi-wu-${icon}`} alt={icon}/>
      {high && <p className="current-weather__high">{high}&#176; &uarr;</p>}
      {low && <p className="current-weather__low">{low}&#176; &darr;</p>}
      {description && <p className="current-weather__description">{description}</p>}
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
