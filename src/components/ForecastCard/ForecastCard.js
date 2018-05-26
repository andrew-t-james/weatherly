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
      {typeof day === 'number' ? <h2 className="forecast-list-item__title">{`${day}:00`}</h2> :
        <h2 className="forecast-list-item__title">{day}</h2>}
      <img className="forecast-list-item__image" src={iconUrl} alt={iconTitle}/>
      {typeof conditions === 'number' ? <p className="forecast-conditions">{conditions}&#176;</p>
        : <p className="forecast-conditions">{conditions}</p>}
      <div className="high-low">
        {high ? <p className="forecast-high">&uarr; {high} &#176;</p> : null}
        {low ? <p className="forecast-low">{low} &#176; &darr;</p> : null}
      </div>
    </li>
  );
};

export default ForecastCard;