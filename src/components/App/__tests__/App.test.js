import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.js';
import TenDayForecast from '../../TenDayForecast/TenDayForecast.js';
import CurrentWeather from '../../CurrentWeather/CurrentWeather.js';
import SevenHour from '../../SevenHour/SevenHour.js';
import { baseUrl } from '../../../data-helpers/data-helpers.js';

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

    const actual = app.state('sevenHourForecast');

    expect(actual).toEqual(expected);
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

  test.skip('it should update state when the updateLocation method is invoked', async () => {
    const expected = {
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
      tenDayForecast: []
    };

    await app.instance().updateLocation(baseUrl);
    const actual = app.instance().state;

    app.update();
    console.log(app.debug());

    expect(actual).toEqual(expected);
  });

  describe.skip('API fetch tests', () => {
    test('should have been called with correct url', async () => {

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve()
        }));


      await app.instance().updateLocation(baseUrl);
      console.log(window.fetch.mock.calls);

      expect(window.fetch).toHaveBeenCalledWith(baseUrl);
    });
  });
});