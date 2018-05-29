import React, { Component } from 'react';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDayForecast from '../TenDayForecast/TenDayForecast.js';
import Modal from '../Modal/Modal.js';

import { API_KEY } from '../../API_KEY.js';
import { locationForecast, dailyForecast, hourlyForecast } from '../../data-helpers/data-helpers.js';
import mockJSONResponse from '../../mock-data/mock-data.json';

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
      hasError: false
    };

    this.updateLocation = this.updateLocation.bind(this);
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        currentLocation: locationForecast(mockJSONResponse),
        sevenHourForecast: hourlyForecast(mockJSONResponse),
        tenDayForecast: dailyForecast(mockJSONResponse)
      });
    }, 100);
    // this.updateLocation('Louisville');
  }

  updateLocation(city) {
    const apiEndPoint = `http://api.wunderground.com/api/${API_KEY}/forecast/forecast10day/conditions/hourly/q/KY/${city}.json`;

    fetch(apiEndPoint)
      .then(response => response.json())
      .then(response => {
        this.setState({
          currentLocation: locationForecast(response),
          sevenHourForecast: hourlyForecast(response),
          tenDayForecast: dailyForecast(response)
        });
      })
      .catch(() => {
        this.setState({ hasError: true });
      });
  }

  render() {
    const { tenDayForecast, currentLocation, sevenHourForecast, hasError } = this.state;

    if (hasError) {
      return <Modal />;
    }

    return (
      <main className="container">
        <Search
          updateLocation={this.updateLocation} />
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