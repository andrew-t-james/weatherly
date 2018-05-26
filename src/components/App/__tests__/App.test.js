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