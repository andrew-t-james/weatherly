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
      sevenHour: [],
      tenDayForecast: [],
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        currentLocation: locationForecast(mockData),
        sevenHour: hourlyForecast(mockData),
        tenDayForecast: dailyForecast(mockData)
      });
    }, 100);
    // this.updateLocation();
  }

  updateLocation(url = baseUrl) {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          currentLocation: locationForecast(response),
          sevenHour: hourlyForecast(response),
          tenDayForecast: dailyForecast(response)
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { tenDayForecast, currentLocation, sevenHour } = this.state;

    return (
      <div>
        <h1>Weathrly App</h1>
        <CurrentWeather
          currentWeather={currentLocation} />
        <SevenHour
          hourly={sevenHour} />
        <TenDayForecast
          tenDayForecast={tenDayForecast} />
      </div>
    );
  }
}

export default App;