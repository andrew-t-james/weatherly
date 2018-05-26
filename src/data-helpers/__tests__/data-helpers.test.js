import { data } from '../../mock-data/mock-data';
import { dailyForecast, hourlyForecast, locationForecast, apiFetch, baseUrl } from '../data-helpers.js';

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

    const actual = locationForecast(data);

    expect(actual).toEqual(expected);
  });

  test('returns daily for 10 days', () => {
    const expected =  [
      {
        conditions: "Partly Cloudy",
        day: "Wednesday",
        high: "51",
        iconTitle: "partlycloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        low: "32"
      },
      {
        conditions: "Clear",
        day: "Thursday",
        high: "55",
        iconTitle: "clear",
        iconUrl: "http://icons.wxug.com/i/c/k/clear.gif",
        low: "51"
      },
      {
        conditions: "Chance of Rain",
        day: "Friday",
        high: "57",
        iconTitle: "chancerain",
        iconUrl: "http://icons.wxug.com/i/c/k/chancerain.gif",
        low: "44"
      },
      {
        conditions: "Rain",
        day: "Saturday",
        high: "47",
        iconTitle: "rain",
        iconUrl: "http://icons.wxug.com/i/c/k/rain.gif",
        low: "30"
      },
      {
        conditions: "Overcast",
        day: "Sunday",
        high: "37",
        iconTitle: "cloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/cloudy.gif",
        low: "22"
      },
      {
        conditions: "Clear",
        day: "Monday",
        high: "35",
        iconTitle: "clear",
        iconUrl: "http://icons.wxug.com/i/c/k/clear.gif",
        low: "19"
      },
      {
        conditions: "Partly Cloudy",
        day: "Tuesday",
        high: "32",
        iconTitle: "partlycloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        low: "20"
      },
      {
        conditions: "Partly Cloudy",
        day: "Wednesday",
        high: "33",
        iconTitle: "partlycloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        low: "26"
      },
      {
        conditions: "Snow Showers",
        day: "Thursday",
        high: "35",
        iconTitle: "snow",
        iconUrl: "http://icons.wxug.com/i/c/k/snow.gif",
        low: "23"
      },
      {
        conditions: "Partly Cloudy",
        day: "Friday",
        high: "31",
        iconTitle: "partlycloudy",
        iconUrl: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        low: "18"
      }
    ];

    const actual = dailyForecast(data);

    expect(actual).toEqual(expected);
  });

  test('returns hourly weather', () => {
    const expected = [
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

    const actual = hourlyForecast(data);

    expect(actual).toEqual(expected);
  });
});
