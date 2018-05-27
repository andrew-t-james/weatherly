import React, { Component } from 'react';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDayForecast from '../TenDayForecast/TenDayForecast.js';
import Error from '../Error/Error.js';

import { API_KEY } from '../../API_KEY.js';
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
      sevenHourForecast: [],
      tenDayForecast: [],
    };

    this.updateLocation = this.updateLocation.bind(this);
  }


  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     currentLocation: locationForecast(mockData),
    //     sevenHourForecast: hourlyForecast(mockData),
    //     tenDayForecast: dailyForecast(mockData)
    //   });
    // }, 100);
    // this.updateLocation(baseUrl);
  }

  updateLocation(location) {
    const baseUrl = `http://api.wunderground.com/api/${API_KEY}/forecast/forecast10day/conditions/hourly/q/CO/${location}.json`;

    fetch(baseUrl)
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
      <main>
        <Search updateLocation={this.updateLocation}/>
        <CurrentWeather
          currentWeather={currentLocation} />
        <SevenHour
          hourlyForecast={sevenHourForecast} />
        <TenDayForecast
          tenDayForecast={tenDayForecast} />
      </main>
    );
  }
}

export default App;