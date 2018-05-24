import React, { Component } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import TenDayForecast from '../TenDayForecast/TenDayForecast.js';

import { data, dailyForecast } from '../../mock-data/mock-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tenDayForecast: []
    };
  }

  render() {
    return (
      <div>
        <h1>Weathrly App</h1>
        <CurrentWeather
          currentWeather={data.current_observation} />
        <TenDayForecast
          dailyForecast={this.state.tenDayForecast} />
      </div>
    );
  }
}

export default App;