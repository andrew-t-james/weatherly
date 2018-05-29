import { mockData } from '../../mock-data/mock-data';
import { dailyForecast, hourlyForecast, locationForecast, } from '../data-helpers.js';

describe('Helper functions unit tests', () => {
  test('returns weather for current location', () => {
    const expected = {
      city: "Louisville",
      description: "Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.",
      high: "51",
      icon: "mostlycloudy",
      iconUrl: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      low: "32",
      temperature: 46,
      weather: "Mostly Cloudy",
      weekDay: "Wednesday"
    };

    const actual = locationForecast(mockData);

    expect(actual).toEqual(expected);
  });

  test('returns hourly forecast for 7 hours', () => {
    const expected =  [
      {
        conditions: 47,
        hour: 12,
        iconTitle: 'partlycloudy',
        iconUrl: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
      },
      {
        conditions: 49,
        hour: 13,
        iconTitle: 'partlycloudy',
        iconUrl: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
      },
      {
        conditions: 49,
        hour: 14,
        iconTitle: 'partlycloudy',
        iconUrl: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
      },
      {
        conditions: 51,
        hour: 15,
        iconTitle: 'clear',
        iconUrl: 'http://icons.wxug.com/i/c/k/clear.gif'
      },
      {
        conditions: 50,
        hour: 16,
        iconTitle: 'clear',
        iconUrl: 'http://icons.wxug.com/i/c/k/clear.gif'
      },
      {
        conditions: 48,
        hour: 17,
        iconTitle: 'clear',
        iconUrl: 'http://icons.wxug.com/i/c/k/clear.gif'
      },
      {
        conditions: 45,
        hour: 18,
        iconTitle: 'clear',
        iconUrl: 'http://icons.wxug.com/i/c/k/nt_clear.gif'
      }
    ];

    const actual = hourlyForecast(mockData);

    expect(actual).toEqual(expected);
  });

  test('returns daily forecast for 10 days', () => {
    const expected =  [
      {
        day: "Wednesday",
        high: "51",
        iconTitle: "partlycloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        low: "32"
      },
      {
        day: "Thursday",
        high: "55",
        iconTitle: "clear",
        iconUrl: "http://icons.wxug.com/i/c/k/clear.gif",
        low: "51"
      },
      {
        day: "Friday",
        high: "57",
        iconTitle: "chancerain",
        iconUrl: "http://icons.wxug.com/i/c/k/chancerain.gif",
        low: "44"
      },
      {
        day: "Saturday",
        high: "47",
        iconTitle: "rain",
        iconUrl: "http://icons.wxug.com/i/c/k/rain.gif",
        low: "30"
      },
      {
        day: "Sunday",
        high: "37",
        iconTitle: "cloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/cloudy.gif",
        low: "22"
      },
      {
        day: "Monday",
        high: "35",
        iconTitle: "clear",
        iconUrl: "http://icons.wxug.com/i/c/k/clear.gif",
        low: "19"
      },
      {
        day: "Tuesday",
        high: "32",
        iconTitle: "partlycloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        low: "20"
      },
      {
        day: "Wednesday",
        high: "33",
        iconTitle: "partlycloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        low: "26"
      },
      {
        day: "Thursday",
        high: "35",
        iconTitle: "snow",
        iconUrl: "http://icons.wxug.com/i/c/k/snow.gif",
        low: "23"
      },
      {
        day: "Friday",
        high: "31",
        iconTitle: "partlycloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        low: "18"
      }
    ];

    const actual = dailyForecast(mockData);

    expect(actual).toEqual(expected);
  });
});
