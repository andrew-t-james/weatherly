import React from 'react';
import './ForecastCard.css';

const ForecastCard = (props) => {
  const { iconUrl, iconTitle, high, low, conditions, day } = props.forecast;
  let { hour } = props.forecast;

  if (hour > 12) {
    hour = hour - 12;
  } else if (hour < 1) {
    hour = '00';
  }

  return (
    <li className="forecast-list-item">
      {
        hour ?
          <h2 className="forecast-list-item__hour">{`${hour}:00`}</h2> :
          <h2 className="forecast-list-item__title">{day}</h2>
      }
      <img className="forecast-list-item__image" src={iconUrl} alt={iconTitle}/>
      {conditions && <p className="forecast-conditions">{conditions}&#176;</p>}
      <div className="high-low">
        {high && <p className="forecast-high">&uarr; {high} &#176;</p>}
        {low &&  <p className="forecast-low">{low} &#176; &darr;</p>}
      </div>
    </li>
  );
};

export default ForecastCard;