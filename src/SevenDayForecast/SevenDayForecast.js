import React from 'react';

const SevenDayForecast = (props) => {
  const { sevenDay } = props.sevenDayForecast;

  console.log(sevenDay);
  return (
    <div>
      <h1>SevenDay</h1>
      <ul>
        {
          sevenDay.slice(0, 7).map((forecast, index) =>
            <li
              key={index}>
              <h2>{forecast.date.weekday_short}</h2>
              <p>{forecast.conditions}</p>
              <img src={forecast.icon_url} alt={forecast.icon}/>
              <p>{forecast.high.fahrenheit}</p>
              <p>{forecast.low.fahrenheit}</p>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default SevenDayForecast;