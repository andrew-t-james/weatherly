import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.js';
import TenDayForecast from '../../TenDayForecast/TenDayForecast.js';
import CurrentWeather from '../../CurrentWeather/CurrentWeather.js';


describe('App unit tests', () => {
  let app;

  beforeEach(() => app = shallow(<App />));

  test('It should have a default values of null for currentLocations values', () => {
    const expected = {
      city: null,
      weather: null,
      icon: null,
      iconUrl: null,
      temperature: null,
      high: null,
      low: null,
      description: null
    };

    const actual = app.state('currentLocation');

    expect(actual).toEqual(expected);
  });

  test('It should have a default state of [] for tenDayForecast', () => {
    const expected = [];

    const actual = app.state('tenDayForecast');

    expect(actual).toEqual(expected);
  });

  test('It should have a default state of [] for tenDayForecast', () => {
    const expected = [];

    const actual = app.state('sevenHour');

    expect(actual).toEqual(expected);
  });

  // test('It should update state after update state', async () => {
  //   const expected = {
  //     currentLocation: {
  //       city: "Louisville",
  //       description: "Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.",
  //       high: "51",
  //       icon: "mostlycloudy",
  //       iconUrl: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
  //       low: "32",
  //       temperature: 46,
  //       weather: "Mostly Cloudy"
  //     },
  //     tenDayForecast: [
  //       {
  //         conditions: "Partly Cloudy",
  //         day: "Wednesday",
  //         high: "51",
  //         iconTitle: "partlycloudy",
  //         iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
  //         low: "32"
  //       },
  //       {
  //         conditions: "Clear",
  //         day: "Thursday",
  //         high: "55",
  //         iconTitle: "clear",
  //         iconUrl: "http://icons.wxug.com/i/c/k/clear.gif",
  //         low: "51"
  //       },
  //       {
  //         conditions: "Chance of Rain",
  //         day: "Friday",
  //         high: "57",
  //         iconTitle: "chancerain",
  //         iconUrl: "http://icons.wxug.com/i/c/k/chancerain.gif",
  //         low: "44"
  //       },
  //       {
  //         conditions: "Rain",
  //         day: "Saturday",
  //         high: "47",
  //         iconTitle: "rain",
  //         iconUrl: "http://icons.wxug.com/i/c/k/rain.gif",
  //         low: "30"
  //       },
  //       {
  //         conditions: "Overcast",
  //         day: "Sunday",
  //         high: "37",
  //         iconTitle: "cloudy",
  //         iconUrl: "http://icons.wxug.com/i/c/k/cloudy.gif",
  //         low: "22"
  //       },
  //       {
  //         conditions: "Clear",
  //         day: "Monday",
  //         high: "35",
  //         iconTitle: "clear",
  //         iconUrl: "http://icons.wxug.com/i/c/k/clear.gif",
  //         low: "19"
  //       },
  //       {
  //         conditions: "Partly Cloudy",
  //         day: "Tuesday",
  //         high: "32",
  //         iconTitle: "partlycloudy",
  //         iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
  //         low: "20"
  //       },
  //       {
  //         conditions: "Partly Cloudy",
  //         day: "Wednesday",
  //         high: "33",
  //         iconTitle: "partlycloudy",
  //         iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
  //         low: "26"
  //       },
  //       {
  //         conditions: "Snow Showers",
  //         day: "Thursday",
  //         high: "35",
  //         iconTitle: "snow",
  //         iconUrl: "http://icons.wxug.com/i/c/k/snow.gif",
  //         low: "23"
  //       },
  //       {
  //         conditions: "Partly Cloudy",
  //         day: "Friday",
  //         high: "31",
  //         iconTitle: "partlycloudy",
  //         iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
  //         low: "18"
  //       }
  //     ]
  //   };

  //   const actual = app.state();

  //   expect(actual).toEqual(expected);
  // });

  test('App should render a single CurrentWeather component', () => {
    const expected = 1;
    const actual = app.find(CurrentWeather).length;

    expect(actual).toBe(expected);
  });

  test('App should render a single TenDayForecast component', () => {
    const expected = 1;
    const actual = app.find(TenDayForecast).length;

    expect(actual).toBe(expected);
  });
});