import React from 'react';
import { shallow } from 'enzyme';
import ForecastCard from '../ForecastCard.js';

describe('ForecastCard Unit tests', () => {
  const oneHour = {
    conditions: 47,
    day: 12,
    high: null,
    iconTitle: "partlycloudy",
    iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    low: null
  };

  const oneDayForecast = {
    conditions: "Partly Cloudy",
    day: "Wednesday",
    high: "51",
    iconTitle: "partlycloudy",
    iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    low: "32"
  };


  test('it should render one hour forecast data', () => {
    const card = shallow(<ForecastCard forecast={oneHour}/>);
    const expectedTitle = '12:00';
    const actualTitle = card.find('.forecast-list-item__title').text();

    const expectedImage = 1;
    const actualImage = card.find('img').length;

    const expectedConditions = '47°';
    const actualConditions = card.find('.forecast-conditions').text();

    const expectedHigh = 1;
    const actualHigh = card.find('.high-low').length;

    expect(actualTitle).toEqual(expectedTitle);
    expect(actualImage).toEqual(expectedImage);
    expect(actualConditions).toEqual(expectedConditions);
    expect(actualHigh).toEqual(expectedHigh);
  });

  test('it should render one day forecast data', () => {
    const card = shallow(<ForecastCard forecast={oneDayForecast}/>);
    const expectedTitle = 'Wednesday';
    const actualTitle = card.find('.forecast-list-item__title').text();

    const expectedImage = 1;
    const actualImage = card.find('img').length;

    const expectedConditions = 'Partly Cloudy';
    const actualConditions = card.find('.forecast-conditions').text();

    const expectedHigh = '↑ 51 °';
    const actualHigh = card.find('.forecast-high').text();

    const expectedLow = '32 ° ↓';
    const actualLow = card.find('.forecast-low').text();

    expect(actualTitle).toBe(expectedTitle);
    expect(actualImage).toBe(expectedImage);
    expect(actualConditions).toBe(expectedConditions);
    expect(actualHigh).toBe(expectedHigh);
    expect(actualLow).toBe(expectedLow);
  });
});