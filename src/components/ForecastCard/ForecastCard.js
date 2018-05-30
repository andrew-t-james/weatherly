import React from 'react';
import PropTypes from 'prop-types';
import './ForecastCard.css';

const ForecastCard = (props) => {
  const { iconTitle, high, low, conditions, day } = props.forecast;
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
      <i className={`forecast-list-item__icon wi wi-wu-${iconTitle}`}  alt={iconTitle}/>
      {conditions && <p className="forecast-conditions">{conditions}&#176;</p>}
      {high && <p className="forecast-high">{high} &#176; &uarr;</p>}
      {low &&  <p className="forecast-low">{low} &#176; &darr;</p>}
    </li>
  );
};

ForecastCard.propTypes = {
  forecast: PropTypes.object,
  iconTitle: PropTypes.string,
  low: PropTypes.string,
  day: PropTypes.string,
  conditions: PropTypes.number,
  hour: PropTypes.number
};

export default ForecastCard;