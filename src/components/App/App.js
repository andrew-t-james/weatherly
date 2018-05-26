import React, { Component } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDayForecast from '../TenDayForecast/TenDayForecast.js';

import { data } from '../../mock-data/mock-data.js';
import { locationForecast, dailyForecast, hourlyForecast } from '../../data-helpers/data-helpers.js';

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
        currentLocation: locationForecast(data),
        sevenHour: hourlyForecast(data),
        tenDayForecast: dailyForecast(data)
      });
    }, 100);
    // fetch('http://api.wunderground.com/api/b6ad6560d07587c6/forecast/forecast10day/conditions/hourly/q/CO/Denver.json')
    //   .then(response => response.json())
    //   .then(response => {
    //     this.setState({
    //       currentLocation: locationForecast(response),
    //       sevenHour: hourlyForecast(response),
    //       tenDayForecast: dailyForecast(response)
    //     });
    //   })
    //   .catch(error => console.error(error));
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