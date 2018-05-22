import React, { Component } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenDayForecast from '../SevenDayForecast/SevenDayForecast.js';

import data from '../mock-data/mock-data.js';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Weathrly App</h1>
        <CurrentWeather
        currentWeather={data.current_observation} />
        <SevenDayForecast
          weather={data.forecast.simpleforecast} />
      </div>
    );
  }
}

export default App;