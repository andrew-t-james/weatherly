import { data, dailyForecast } from './mock-data.js';

describe('Mock data unit tests', () => {
  test('returns daily for 10 days', () => {
    const actual = dailyForecast();

    const expected =  {
      tenDayForecast: data.forecast.simpleforecast.forecastday
    };

    expect(actual).toEqual(expected);
  });
});
