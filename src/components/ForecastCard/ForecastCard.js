import React from 'react';
import './ForecastCard.css';

const ForecastCard = (props) => {
  const { iconUrl, iconTitle, high, low, conditions } = props.forecast;
  let { day } = props.forecast;

  if (day > 12) {
    day = day - 12;
  }

  return (
    <li className="forecast-list-item">
      <h2>{typeof day === 'number' ? `${day}:00` : day}</h2>
      <img src={iconUrl} alt={iconTitle}/>
      {typeof conditions === 'number' ? <p className="forecast-conditions">{conditions}&#176;</p>
        : <p className="forecast-conditions">{conditions}</p>}
      <div className="high-low">
        {high ? <p>&uarr; {high} &#176;</p> : null}
        {low ? <p>{low} &#176; &darr;</p> : null}
      </div>
    </li>
  );
};

export default ForecastCard;