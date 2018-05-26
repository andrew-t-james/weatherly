import React from 'react';
import './ForecastCard.css';

const ForecastCard = (props) => {
  const { iconUrl, iconTitle, high, low, conditions, hour } = props.forecast;
  let { day } = props.forecast;

  if (day > 12) {
    day = day - 12;
  }

  return (
    <li className="forecast-list-item">
      {hour ? <h2 className="forecast-list-item__title">{`${hour}:00`}</h2> :
        <h2 className="forecast-list-item__title">{day}</h2>}
      <img className="forecast-list-item__image" src={iconUrl} alt={iconTitle}/>
      {Number(conditions) ? <p className="forecast-conditions">{conditions}&#176;</p>
        : <p className="forecast-conditions">{conditions}</p>}
      <div className="high-low">
        {high && <p className="forecast-high">&uarr; {high} &#176;</p>}
        {low &&  <p className="forecast-low">{low} &#176; &darr;</p>}
      </div>
    </li>
  );
};

export default ForecastCard;