import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.js';
import Search from '../../Search/Search.js';
import TenDayForecast from '../../TenDayForecast/TenDayForecast.js';
import CurrentWeather from '../../CurrentWeather/CurrentWeather.js';
import SevenHour from '../../SevenHour/SevenHour.js';
import ErrorModal from '../../ErrorModal/ErrorModal.js';
import { API_KEY } from '../../../API_KEY.js';
import mockJSON from '../../../mock-data/mock-data.json';

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

  test('It should have a default state of [] for sevenHourForecast', () => {
    const expected = [];

    const actual = app.state('sevenHourForecast');

    expect(actual).toEqual(expected);
  });

  test('It should have a default state of [] for tenDayForecast', () => {
    const expected = [];

    const actual = app.state('tenDayForecast');

    expect(actual).toEqual(expected);
  });

  test('App should render a single TenDayForecast component', () => {
    const expected = 1;
    const actual = app.find(Search).length;

    expect(actual).toBe(expected);
  });

  test('App should render a single CurrentWeather component', () => {
    const expected = 1;
    const actual = app.find(CurrentWeather).length;

    expect(actual).toBe(expected);
  });

  test('App should render a single SevenHour component', () => {
    const expected = 1;
    const actual = app.find(SevenHour).length;

    expect(actual).toBe(expected);
  });

  test('App should render a single TenDayForecast component', () => {
    const expected = 1;
    const actual = app.find(TenDayForecast).length;

    expect(actual).toBe(expected);
  });

  test('should display an errorModal if hasError is true', async () => {
    const expected = 1;

    app.setState({
      hasError: true
    });

    const actual = app.find(ErrorModal).length;

    expect(actual).toBe(expected);
  });

  describe('API Unit tests', () => {
    test('should have been called with correct url', async () => {
      const apiEndPoint = `http://api.wunderground.com/api/${API_KEY}/forecast/forecast10day/conditions/hourly/q/KY/Louisville.json`;

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockJSON)
        }));

      await app.instance().updateLocation('Louisville');

      expect(window.fetch).toHaveBeenCalledWith(apiEndPoint);
    });
  });
});