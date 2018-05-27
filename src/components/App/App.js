import React, { Component } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDayForecast from '../TenDayForecast/TenDayForecast.js';

import fetch from 'isomorphic-fetch';
import { mockData } from '../../mock-data/mock-data.js';
import { locationForecast, dailyForecast, hourlyForecast, baseUrl } from '../../data-helpers/data-helpers.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: {
        city: null,
        weather: null,
        icon: null,
        iconUrl: null,
        temperature: null,
        high: null,
        low: null,
        description: null
      },
      sevenHourForecast: [],
      tenDayForecast: [],
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        currentLocation: locationForecast(mockData),
        sevenHourForecast: hourlyForecast(mockData),
        tenDayForecast: dailyForecast(mockData)
      });
    }, 100);
    // this.updateLocation(baseUrl);
  }

  updateLocation(url) {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          currentLocation: locationForecast(response),
          sevenHourForecast: hourlyForecast(response),
          tenDayForecast: dailyForecast(response)
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { tenDayForecast, currentLocation, sevenHourForecast } = this.state;

    return (
      <div>
        <h1>Weathrly App</h1>
        <CurrentWeather
          currentWeather={currentLocation} />
        <SevenHour
          hourlyForecast={sevenHourForecast} />
        <TenDayForecast
          tenDayForecast={tenDayForecast} />
      </div>
    );
  }
}

export default App;