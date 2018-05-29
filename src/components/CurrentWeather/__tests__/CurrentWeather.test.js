import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CurrentWeather from '../CurrentWeather.js';


describe('Current Weather unit tests', () => {
  let currentWeather;

  const currentLocation = {
    city: 'Louisville',
    description: 'Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.',
    high: '51',
    icon: 'mostlycloudy',
    iconUrl: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
    low: '32',
    temperature: 46,
    weather: 'Mostly Cloudy',
    weekDay: 'Wednesday'
  };

  beforeEach(() => currentWeather = shallow(<CurrentWeather currentWeather={currentLocation}/>));

  test('It should display data correctly', () => {
    const expectedTitle = 'Louisville';
    const actualTitle = currentWeather.find('h2').text();

    const expectedWeather = 'Mostly Cloudy';
    const actualWeather = currentWeather.find('.current-weather__weather').text();

    const expectedTemperature = '46';
    const actualTemperature = currentWeather.find('.current-weather__temperature').text();

    const expectedHigh = '51° ↑ High ';
    const actualHigh = currentWeather.find('.current-weather__high').text();

    const expectedLow = '32° ↓ Low';
    const actualLow = currentWeather.find('.current-weather__low').text();

    const expectedDescription = 'Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.';
    const actualDescription = currentWeather.find('.current-weather__description').text();

    expect(actualTitle).toBe(expectedTitle);
    expect(expectedWeather).toBe(actualWeather);
    expect(actualTemperature).toBe(expectedTemperature);
    expect(actualHigh).toBe(expectedHigh);
    expect(actualLow).toBe(expectedLow);
    expect(actualDescription).toBe(expectedDescription);
  });

  test('it should match snapshot', () => {
    const currWeather = renderer
      .create(<CurrentWeather currentWeather={currentLocation} />)
      .toJSON();

    expect(currWeather).toMatchSnapshot();
  });
});