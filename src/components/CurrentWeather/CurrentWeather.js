import React from 'react';

import './CurrentWeather.css';

const CurrentWeather = (props) => {
  const { city, icon, iconUrl, temperature, weather, high, low, description } = props.currentWeather;

  return (
    <section className="current-weather">
      <h2 className="current-weather__title">{city}</h2>
      <p className="current-weather__weather">{weather}</p>
      <p className="current-weather__temperature">{temperature}</p>
      <i className={`forecast-list-item__image wi wi-wu-${icon}`} alt={icon}/>
      <div className="current-weather-high-low">
        {high && <p className="current-weather__high">{high}&#176; &uarr; High </p>}
        {low && <p className="current-weather__low">{low}&#176; &darr; Low</p>}
      </div>
      {description && <p className="current-weather__description">{description}</p>}
    </section>
  );
};

export default CurrentWeather;
