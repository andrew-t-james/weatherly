import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SevenHour from '../SevenHour.js';
import ForecastCard from '../../ForecastCard/ForecastCard.js';

describe('Seven Hour unit tests', () => {
  const sevenHourForecast = [
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

  const sevenHour = shallow(<SevenHour hourlyForecast={sevenHourForecast} />);

  test('it should render multiple Cards components', () => {
    const expected = 2;
    const actual = sevenHour.find(ForecastCard).length;

    expect(actual).toEqual(expected);
  });

  test('it should match snapshot', () => {
    const sevenHour = renderer
      .create(<SevenHour hourlyForecast={sevenHourForecast} />)
      .toJSON();

    expect(sevenHour).toMatchSnapshot();
  });
});