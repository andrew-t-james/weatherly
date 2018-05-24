import { data, currentLocation, dailyForecast } from '../mock-data.js';

describe('Mock data unit tests', () => {
  test('returns weather for current location', () => {
    const actual = currentLocation(data);

    const expected =   data.current_observation;

    expect(actual).toEqual(expected);
  });

  test('returns daily for 10 days', () => {
    const actual = dailyForecast(data);

    const expected =   data.forecast.simpleforecast.forecastday;

    expect(actual).toEqual(expected);
  });
});
