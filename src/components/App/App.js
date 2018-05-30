import React, { Component } from 'react';
import { API_KEY } from '../../API_KEY.js';
import { dailyForecast, hourlyForecast, locationForecast } from '../../data-helpers/data-helpers.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDayForecast from '../TenDayForecast/TenDayForecast.js';
import './App.css';

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
      hasError: false,
      hasLocation: false,
    };

    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount() {
    const storedLocation = JSON.parse(localStorage.getItem('location'));

    if (storedLocation) {
      const { city, state } = storedLocation;

      this.updateLocation(city, state);
    }
  }

  updateLocation(city, state) {
    const apiEndPoint = `http://api.wunderground.com/api/${API_KEY}/forecast/forecast10day/conditions/hourly/q/${state}/${city}.json`;

    localStorage.setItem('location', JSON.stringify({city, state}));

    fetch(apiEndPoint)
      .then(response => response.json())
      .then(response => {
        this.setState({
          currentLocation: locationForecast(response),
          sevenHourForecast: hourlyForecast(response),
          tenDayForecast: dailyForecast(response),
          hasError: false,
          hasLocation: true
        });
      })
      .catch(() => {
        this.setState({
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
          hasLocation: false,
          hasError: true,
        });
      });
  }

  render() {
    const { tenDayForecast, currentLocation, sevenHourForecast, hasError, hasLocation } = this.state;

    if (hasError || !hasLocation) {
      return (
        <Welcome
          hasError={hasError}
          updateLocation={this.updateLocation}/>
      );
    }

    return (
      <main className="container">
        <Search
          updateLocation={this.updateLocation} />
        <CurrentWeather
          className="current-weather"
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