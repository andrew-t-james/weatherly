import React from 'react';
import './ForecastCard.css';

const ForecastCard = (props) => {
  const { forecast } = props;

  return (
    <li className="forecast-list-item">
      <h2>{forecast.date.weekday_short}</h2>
      <img src={forecast.icon_url} alt={forecast.icon}/>
      <p className="forecast-conditions">{forecast.conditions}</p>
      <div className="high-low">
        <p>{forecast.high.fahrenheit} &uarr;</p>
        <p>{forecast.low.fahrenheit} &darr;</p>
      </div>
    </li>
  );
};

export default ForecastCard;