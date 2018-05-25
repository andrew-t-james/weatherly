import React, { Component } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDayForecast from '../TenDayForecast/TenDayForecast.js';

import { data, locationForecast, dailyForecast, hourlyForecast } from '../../mock-data/mock-data.js';

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
      tenDayForecast: []
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        currentLocation: locationForecast(data),
        tenDayForecast: dailyForecast(data)
      });
    }, 1500);
    // fetch('http://api.wunderground.com/api/b6ad6560d07587c6/forecast/forecast10day/conditions/hourly/q/CA/San_Francisco.json')
    //   .then(response => response.json())
    //   .then(location => {
    //     this.setState({
    //       currentLocation: currentLocation(location)
    //     });
    //     return location;
    //   })
    //   .then(tenDay => {
    //     this.setState({
    //       tenDayForecast: dailyForecast(tenDay)
    //     });
    //   })
    //   .catch(error => console.error(error));
  }

  render() {
    const { tenDayForecast, currentLocation } = this.state;

    return (
      <div>
        <h1>Weathrly App</h1>
        <CurrentWeather
          currentWeather={currentLocation} />
        <SevenHour
          hourly={hourlyForecast(data)} />
        <TenDayForecast
          tenDayForecast={tenDayForecast} />
      </div>
    );
  }
}

export default App;