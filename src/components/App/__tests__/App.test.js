import React from 'react';
import { shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import App from '../App.js';
import Search from '../../Search/Search.js';
import TenDayForecast from '../../TenDayForecast/TenDayForecast.js';
import CurrentWeather from '../../CurrentWeather/CurrentWeather.js';
import SevenHour from '../../SevenHour/SevenHour.js';
import Welcome from '../../Welcome/Welcome.js';
import { API_KEY } from '../../../API_KEY.js';
import mockJSON from '../../../mock-data/mock-data.json';

describe('App unit tests', () => {
  let app;

  global.localStorage = {};
  global.localStorage.setItem = jest.fn();
  global.localStorage.getItem = jest.fn();

  beforeEach(() => app = shallow(<App />));

  test('It should have a default values of null for currentLocations values', () => {
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
      tenDayForecast: [],
      hasError: false,
      hasLocation: false,
    };

    const actual = app.state();

    expect(actual).toEqual(expected);
  });

  test('It should render a welcome Welcome if state has no location', () => {
    const expected = 1;

    const actual = app.find(Welcome).length;

    expect(actual).toEqual(expected);
  });

  test('App should render a single Search component when state hasLocation', () => {
    const expected = 1;

    app.setState({
      hasLocation: true
    });

    const actual = app.find(Search).length;

    expect(actual).toBe(expected);
  });

  test('App should render a single CurrentWeather component when state hasLocation', () => {
    const expected = 1;

    app.setState({
      hasLocation: true
    });

    const actual = app.find(CurrentWeather).length;

    expect(actual).toBe(expected);
  });

  test('App should render a single SevenHour component when state hasLocation', () => {
    const expected = 1;

    app.setState({
      hasLocation: true
    });

    const actual = app.find(SevenHour).length;

    expect(actual).toBe(expected);
  });

  test('App should render a single TenDayForecast component when state hasLocation', () => {
    const expected = 1;

    app.setState({
      hasLocation: true
    });

    const actual = app.find(TenDayForecast).length;

    expect(actual).toBe(expected);
  });

  test('should display an Welcome if hasError is true', async () => {
    const expected = 1;

    app.setState({
      hasError: true
    });

    const actual = app.find(Welcome).length;

    expect(actual).toBe(expected);
  });

  test('it should match snapshot when !hasLocation', () => {
    app.setState({
      hasLocation: false
    });

    const renderedApp = TestRenderer
      .create(<Welcome />)
      .toJSON();

    expect(renderedApp).toMatchSnapshot();
  });

  test('it should match snapshot when hasLocation', () => {
    app.setState({
      hasLocation: true
    });

    const renderedApp = TestRenderer
      .create(app)
      .toJSON();

    // console.log(app.debug());
    expect(renderedApp).toMatchSnapshot();
  });

  test('it should match snapshot when hasError', () => {
    app.setState({
      hasError: true
    });

    const renderedApp = TestRenderer
      .create(<Welcome hasError={true} hasLocation={false} />)
      .toJSON();

    expect(renderedApp).toMatchSnapshot();
  });

  describe('API Unit tests', () => {
    test('should have been called with correct url', async () => {
      const apiEndPoint = `http://api.wunderground.com/api/${API_KEY}/forecast/forecast10day/conditions/hourly/q/KY/Louisville.json`;

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockJSON)
        }));

      await app.instance().updateLocation('Louisville', 'KY');
      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(window.fetch).toHaveBeenCalledWith(apiEndPoint);
    });
  });
});