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


  test.skip('should have been called with correct', async () => {
    const expected = [
      {
        conditions: 47,
        hour: 12,
        iconTitle: 'partlycloudy',
        iconUrl: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
      },
      {
        conditions: 49,
        hour: 13,
        iconTitle: 'partlycloudy',
        iconUrl: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
      },
      {
        conditions: 49,
        hour: 14,
        iconTitle: 'partlycloudy',
        iconUrl: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
      },
      {
        conditions: 51,
        hour: 15,
        iconTitle: 'clear',
        iconUrl: 'http://icons.wxug.com/i/c/k/clear.gif'
      },
      {
        conditions: 50,
        hour: 16,
        iconTitle: 'clear',
        iconUrl: 'http://icons.wxug.com/i/c/k/clear.gif'
      },
      {
        conditions: 48,
        hour: 17,
        iconTitle: 'clear',
        iconUrl: 'http://icons.wxug.com/i/c/k/clear.gif'
      },
      {
        conditions: 45,
        hour: 18,
        iconTitle: 'clear',
        iconUrl: 'http://icons.wxug.com/i/c/k/nt_clear.gif'
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(expected)}) );

    const actual = await apiFetch(baseUrl);

    expect(window.fetch).toHaveBeenCalledWith(baseUrl);
  });
});