import React, { Component } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import TenDayForecast from '../TenDayForecast/TenDayForecast.js';

import { currentLocation, dailyForecast } from '../../mock-data/mock-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: {
        display_location: {
          city: null
        },
        currentWeather: null,
        local_time_rfc822: null,
        temperature_string: null,
        wind_string: null,
        icon_url: null
      },
      tenDayForecast: []
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        currentLocation: currentLocation(),
        tenDayForecast: dailyForecast()
      });
    }, 2000);
  }

  render() {
    const { tenDayForecast, currentLocation } = this.state;

    return (
      <div>
        <h1>Weathrly App</h1>
        <CurrentWeather
          currentWeather={currentLocation} />
        <TenDayForecast
          tenDayForecast={tenDayForecast} />
      </div>
    );
  }
}

export default App;