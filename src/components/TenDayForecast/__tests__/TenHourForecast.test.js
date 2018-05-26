import React from 'react';
import { shallow } from 'enzyme';
import TenDayForecast from '../TenDayForecast.js';
import ForecastCard from '../../ForecastCard/ForecastCard.js';

describe('Forecast Card', () => {

  const twoDayForecast = [
    {
      conditions: 47,
      day: 12,
      high: null,
      iconTitle: "partlycloudy",
      iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      low: null
    },
    {
      conditions: 49,
      day: 13,
      high: null,
      iconTitle: "partlycloudy",
      iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      low: null
    }
  ];

  let foreCastCard = shallow(<TenDayForecast tenDayForecast={twoDayForecast}/>);

  test('it should render multiple Cards components', () => {
    const expected = 2;
    const actual = foreCastCard.find(ForecastCard).length;

    expect(actual).toEqual(expected);
  });
});