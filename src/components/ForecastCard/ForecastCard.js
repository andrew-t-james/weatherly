import React from 'react';
import './ForecastCard.css';

const ForecastCard = (props) => {
  const { day, iconUrl, iconTitle, high, low, conditions } = props.forecast;

  return (
    <li className="forecast-list-item">
      <h2>{day}</h2>
      <img src={iconUrl} alt={iconTitle}/>
      <p className="forecast-conditions">{conditions}</p>
      <div className="high-low">
        <p>{high} &uarr;</p>
        <p>{low} &darr;</p>
      </div>
    </li>
  );
};

export default ForecastCard;