import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ForecastCard from '../ForecastCard.js';

describe('ForecastCard Unit tests', () => {
  const oneHour = {
    conditions: 47,
    hour: 12,
    iconTitle: "partlycloudy",
    iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
  };

  const oneDayForecast = {
    day: "Wednesday",
    high: "51",
    iconTitle: "partlycloudy",
    iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    low: "32"
  };

  test('it should render one hour forecast data', () => {
    const card = shallow(<ForecastCard forecast={oneHour}/>);
    const expectedTitle = '12:00';
    const actualTitle = card.find('.forecast-list-item__hour').text();

    const expectedImage = 1;
    const actualImage = card.find('i').length;

    const expectedConditions = '47°';
    const actualConditions = card.find('.forecast-conditions').text();

    expect(actualTitle).toEqual(expectedTitle);
    expect(actualImage).toEqual(expectedImage);
    expect(actualConditions).toEqual(expectedConditions);
  });

  test('it should render one day forecast data', () => {
    const card = shallow(<ForecastCard forecast={oneDayForecast}/>);
    const expectedTitle = 'Wednesday';
    const actualTitle = card.find('.forecast-list-item__title').text();

    const expectedImage = 1;
    const actualImage = card.find('i').length;

    const expectedHigh = '51 ° ↑';
    const actualHigh = card.find('.forecast-high').text();

    const expectedLow = '32 ° ↓';
    const actualLow = card.find('.forecast-low').text();

    expect(actualTitle).toBe(expectedTitle);
    expect(actualImage).toBe(expectedImage);
    expect(actualHigh).toBe(expectedHigh);
    expect(actualLow).toBe(expectedLow);
  });

  test('it should render correct time if time is midnight', () => {
    const midnight = {
      conditions: 47,
      hour: 0,
      high: null,
      iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      low: null
    };

    const card = shallow(<ForecastCard forecast={midnight}/>);
    const expectedTitle = '00:00';
    const actualTitle = card.find('.forecast-list-item__hour').text();

    expect(actualTitle).toBe(expectedTitle);
  });

  test('it should match snapshot with hour forecast', () => {
    const card = renderer
      .create(<ForecastCard forecast={oneHour} />)
      .toJSON();

    expect(card).toMatchSnapshot();
  });

  test('it should match snapshot with daily forecast', () => {
    const card = renderer
      .create(<ForecastCard forecast={oneDayForecast} />)
      .toJSON();

    expect(card).toMatchSnapshot();
  });
});