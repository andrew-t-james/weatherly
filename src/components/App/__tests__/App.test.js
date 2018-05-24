import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.js';
import TenDayForecast from '../../TenDayForecast/TenDayForecast.js';
import CurrentWeather from '../../CurrentWeather/CurrentWeather.js';

import { currentLocation, dailyForecast } from '../../../mock-data/mock-data.js';

describe('App unit tests', () => {
  let app;

  beforeEach(() => app = shallow(<App />));

  test('It should have a default values of null for currentLocations values', () => {
    const expected = {
      display_location: {
        city: null
      },
      currentWeather: null,
      local_time_rfc822: null,
      temperature_string: null,
      wind_string: null,
      icon_url: null
    };

    const actual = app.state('currentLocation');

    expect(actual).toEqual(expected);
  });

  test('It should have a default state of [] for tenDayForecast', () => {
    const expected = [];

    const actual = app.state('tenDayForecast');

    expect(actual).toEqual(expected);
  });

  test('It should have a default values of null for currentLocations values', () => {
    const expected = {
      display_location: {
        city: null
      },
      currentWeather: null,
      local_time_rfc822: null,
      temperature_string: null,
      wind_string: null,
      icon_url: null
    };

    const actual = app.state('currentLocation');

    expect(actual).toEqual(expected);
  });

  test('It should update state after update state', () => {
    const expected = {
      currentLocation: {
        image: {
          url: 'http://icons.wxug.com/graphics/wu2/logo_130x80.png',
          title: 'Weather Underground',
          link: 'http://www.wunderground.com'
        },
        display_location: {
          full: 'Louisville, KY',
          city: 'Louisville',
          state: 'KY',
          state_name: 'Kentucky',
          country: 'US',
          country_iso3166: 'US',
          zip: '40201',
          magic: '1',
          wmo: '99999',
          latitude: '38.25000000',
          longitude: '-85.76000214',
          elevation: '128.0'
        },
        observation_location: {
          full:
            'WAVE 3 News Weather Garden / 811 Call Before You Dig, Louisville, Kentucky',
          city: 'WAVE 3 News Weather Garden / 811 Call Before You Dig, Louisville',
          state: 'Kentucky',
          country: 'US',
          country_iso3166: 'US',
          latitude: '38.242832',
          longitude: '-85.749374',
          elevation: '459 ft'
        },
        estimated: {},
        station_id: 'KKYLOUIS193',
        observation_time: 'Last Updated on December 20, 11:27 AM EST',
        observation_time_rfc822: 'Wed, 20 Dec 2017 11:27:19 -0500',
        observation_epoch: '1513787239',
        local_time_rfc822: 'Wed, 20 Dec 2017 11:27:36 -0500',
        local_epoch: '1513787256',
        local_tz_short: 'EST',
        local_tz_long: 'America/New_York',
        local_tz_offset: '-0500',
        weather: 'Mostly Cloudy',
        temperature_string: '46.0 F (7.8 C)',
        temp_f: 46.0,
        temp_c: 7.8,
        relative_humidity: '65%',
        wind_string: 'From the NE at 1.0 MPH Gusting to 8.0 MPH',
        wind_dir: 'NE',
        wind_degrees: 51,
        wind_mph: 1.0,
        wind_gust_mph: '8.0',
        wind_kph: 1.6,
        wind_gust_kph: '12.9',
        pressure_mb: '1018',
        pressure_in: '30.06',
        pressure_trend: '-',
        dewpoint_string: '35 F (2 C)',
        dewpoint_f: 35,
        dewpoint_c: 2,
        heat_index_string: 'NA',
        heat_index_f: 'NA',
        heat_index_c: 'NA',
        windchill_string: '46 F (8 C)',
        windchill_f: '46',
        windchill_c: '8',
        feelslike_string: '46 F (8 C)',
        feelslike_f: '46',
        feelslike_c: '8',
        visibility_mi: '10.0',
        visibility_km: '16.1',
        solarradiation: '--',
        UV: '2',
        precip_1hr_string: '0.00 in ( 0 mm)',
        precip_1hr_in: '0.00',
        precip_1hr_metric: ' 0',
        precip_today_string: '0.00 in (0 mm)',
        precip_today_in: '0.00',
        precip_today_metric: '0',
        icon: 'mostlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
        forecast_url: 'http://www.wunderground.com/US/KY/Louisville.html',
        history_url:
          'http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KKYLOUIS193',
        ob_url:
          'http://www.wunderground.com/cgi-bin/findweather/getForecast?query=38.242832,-85.749374',
        nowcast: ''
      },
      tenDayForecast: [
        {
          date: {
            epoch: '1513814400',
            pretty: '7:00 PM EST on December 20, 2017',
            day: 20,
            month: 12,
            year: 2017,
            yday: 353,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Wed',
            weekday: 'Wednesday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 1,
          high: {
            fahrenheit: '51',
            celsius: '11'
          },
          low: {
            fahrenheit: '32',
            celsius: '0'
          },
          conditions: 'Partly Cloudy',
          icon: 'partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          skyicon: '',
          pop: 0,
          qpf_allday: {
            in: 0.0,
            mm: 0
          },
          qpf_day: {
            in: 0.0,
            mm: 0
          },
          qpf_night: {
            in: 0.0,
            mm: 0
          },
          snow_allday: {
            in: 0.0,
            cm: 0.0
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 0.0,
            cm: 0.0
          },
          maxwind: {
            mph: 15,
            kph: 24,
            dir: 'NE',
            degrees: 42
          },
          avewind: {
            mph: 11,
            kph: 18,
            dir: 'NE',
            degrees: 42
          },
          avehumidity: 48,
          maxhumidity: 62,
          minhumidity: 36
        },
        {
          date: {
            epoch: '1513900800',
            pretty: '7:00 PM EST on December 21, 2017',
            day: 21,
            month: 12,
            year: 2017,
            yday: 354,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Thu',
            weekday: 'Thursday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 2,
          high: {
            fahrenheit: '55',
            celsius: '13'
          },
          low: {
            fahrenheit: '51',
            celsius: '11'
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          skyicon: '',
          pop: 10,
          qpf_allday: {
            in: 0.02,
            mm: 1
          },
          qpf_day: {
            in: 0.0,
            mm: 0
          },
          qpf_night: {
            in: 0.02,
            mm: 1
          },
          snow_allday: {
            in: 0.0,
            cm: 0.0
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 0.0,
            cm: 0.0
          },
          maxwind: {
            mph: 10,
            kph: 16,
            dir: 'SE',
            degrees: 146
          },
          avewind: {
            mph: 7,
            kph: 11,
            dir: 'SE',
            degrees: 146
          },
          avehumidity: 65,
          maxhumidity: 76,
          minhumidity: 54
        },
        {
          date: {
            epoch: '1513987200',
            pretty: '7:00 PM EST on December 22, 2017',
            day: 22,
            month: 12,
            year: 2017,
            yday: 355,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Fri',
            weekday: 'Friday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 3,
          high: {
            fahrenheit: '57',
            celsius: '14'
          },
          low: {
            fahrenheit: '44',
            celsius: '7'
          },
          conditions: 'Chance of Rain',
          icon: 'chancerain',
          icon_url: 'http://icons.wxug.com/i/c/k/chancerain.gif',
          skyicon: '',
          pop: 80,
          qpf_allday: {
            in: 0.91,
            mm: 23
          },
          qpf_day: {
            in: 0.07,
            mm: 2
          },
          qpf_night: {
            in: 0.84,
            mm: 21
          },
          snow_allday: {
            in: 0.0,
            cm: 0.0
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 0.0,
            cm: 0.0
          },
          maxwind: {
            mph: 10,
            kph: 16,
            dir: 'SSW',
            degrees: 202
          },
          avewind: {
            mph: 9,
            kph: 14,
            dir: 'SSW',
            degrees: 202
          },
          avehumidity: 84,
          maxhumidity: 89,
          minhumidity: 78
        },
        {
          date: {
            epoch: '1514073600',
            pretty: '7:00 PM EST on December 23, 2017',
            day: 23,
            month: 12,
            year: 2017,
            yday: 356,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Sat',
            weekday: 'Saturday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 4,
          high: {
            fahrenheit: '47',
            celsius: '8'
          },
          low: {
            fahrenheit: '30',
            celsius: '-1'
          },
          conditions: 'Rain',
          icon: 'rain',
          icon_url: 'http://icons.wxug.com/i/c/k/rain.gif',
          skyicon: '',
          pop: 90,
          qpf_allday: {
            in: 0.37,
            mm: 9
          },
          qpf_day: {
            in: 0.37,
            mm: 9
          },
          qpf_night: {
            in: 0.0,
            mm: 0
          },
          snow_allday: {
            in: 0.0,
            cm: 0.0
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 0.0,
            cm: 0.0
          },
          maxwind: {
            mph: 15,
            kph: 24,
            dir: 'NNW',
            degrees: 345
          },
          avewind: {
            mph: 11,
            kph: 18,
            dir: 'NNW',
            degrees: 345
          },
          avehumidity: 81,
          maxhumidity: 90,
          minhumidity: 75
        },
        {
          date: {
            epoch: '1514160000',
            pretty: '7:00 PM EST on December 24, 2017',
            day: 24,
            month: 12,
            year: 2017,
            yday: 357,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Sun',
            weekday: 'Sunday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 5,
          high: {
            fahrenheit: '37',
            celsius: '3'
          },
          low: {
            fahrenheit: '22',
            celsius: '-6'
          },
          conditions: 'Overcast',
          icon: 'cloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
          skyicon: '',
          pop: 20,
          qpf_allday: {
            in: 0.0,
            mm: 0
          },
          qpf_day: {
            in: 0.0,
            mm: 0
          },
          qpf_night: {
            in: 0.0,
            mm: 0
          },
          snow_allday: {
            in: 0.0,
            cm: 0.0
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 0.0,
            cm: 0.0
          },
          maxwind: {
            mph: 10,
            kph: 16,
            dir: 'NNW',
            degrees: 333
          },
          avewind: {
            mph: 9,
            kph: 14,
            dir: 'NNW',
            degrees: 333
          },
          avehumidity: 64,
          maxhumidity: 77,
          minhumidity: 54
        },
        {
          date: {
            epoch: '1514246400',
            pretty: '7:00 PM EST on December 25, 2017',
            day: 25,
            month: 12,
            year: 2017,
            yday: 358,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Mon',
            weekday: 'Monday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 6,
          high: {
            fahrenheit: '35',
            celsius: '2'
          },
          low: {
            fahrenheit: '19',
            celsius: '-7'
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          skyicon: '',
          pop: 0,
          qpf_allday: {
            in: 0.0,
            mm: 0
          },
          qpf_day: {
            in: 0.0,
            mm: 0
          },
          qpf_night: {
            in: 0.0,
            mm: 0
          },
          snow_allday: {
            in: 0.0,
            cm: 0.0
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 0.0,
            cm: 0.0
          },
          maxwind: {
            mph: 20,
            kph: 32,
            dir: 'WSW',
            degrees: 252
          },
          avewind: {
            mph: 13,
            kph: 21,
            dir: 'WSW',
            degrees: 252
          },
          avehumidity: 43,
          maxhumidity: 61,
          minhumidity: 30
        },
        {
          date: {
            epoch: '1514332800',
            pretty: '7:00 PM EST on December 26, 2017',
            day: 26,
            month: 12,
            year: 2017,
            yday: 359,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Tue',
            weekday: 'Tuesday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 7,
          high: {
            fahrenheit: '32',
            celsius: '0'
          },
          low: {
            fahrenheit: '20',
            celsius: '-7'
          },
          conditions: 'Partly Cloudy',
          icon: 'partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          skyicon: '',
          pop: 0,
          qpf_allday: {
            in: 0.0,
            mm: 0
          },
          qpf_day: {
            in: 0.0,
            mm: 0
          },
          qpf_night: {
            in: 0.0,
            mm: 0
          },
          snow_allday: {
            in: 0.0,
            cm: 0.0
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 0.0,
            cm: 0.0
          },
          maxwind: {
            mph: 10,
            kph: 16,
            dir: 'WNW',
            degrees: 285
          },
          avewind: {
            mph: 6,
            kph: 10,
            dir: 'WNW',
            degrees: 285
          },
          avehumidity: 41,
          maxhumidity: 56,
          minhumidity: 31
        },
        {
          date: {
            epoch: '1514419200',
            pretty: '7:00 PM EST on December 27, 2017',
            day: 27,
            month: 12,
            year: 2017,
            yday: 360,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Wed',
            weekday: 'Wednesday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 8,
          high: {
            fahrenheit: '33',
            celsius: '1'
          },
          low: {
            fahrenheit: '26',
            celsius: '-3'
          },
          conditions: 'Partly Cloudy',
          icon: 'partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          skyicon: '',
          pop: 10,
          qpf_allday: {
            in: 0.11,
            mm: 3
          },
          qpf_day: {
            in: 0.0,
            mm: 0
          },
          qpf_night: {
            in: 0.11,
            mm: 3
          },
          snow_allday: {
            in: 1.1,
            cm: 2.8
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 1.1,
            cm: 2.8
          },
          maxwind: {
            mph: 10,
            kph: 16,
            dir: 'ENE',
            degrees: 76
          },
          avewind: {
            mph: 5,
            kph: 8,
            dir: 'ENE',
            degrees: 76
          },
          avehumidity: 35,
          maxhumidity: 42,
          minhumidity: 27
        },
        {
          date: {
            epoch: '1514505600',
            pretty: '7:00 PM EST on December 28, 2017',
            day: 28,
            month: 12,
            year: 2017,
            yday: 361,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Thu',
            weekday: 'Thursday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 9,
          high: {
            fahrenheit: '35',
            celsius: '2'
          },
          low: {
            fahrenheit: '23',
            celsius: '-5'
          },
          conditions: 'Snow Showers',
          icon: 'snow',
          icon_url: 'http://icons.wxug.com/i/c/k/snow.gif',
          skyicon: '',
          pop: 40,
          qpf_allday: {
            in: 0.09,
            mm: 2
          },
          qpf_day: {
            in: 0.09,
            mm: 2
          },
          qpf_night: {
            in: 0.0,
            mm: 0
          },
          snow_allday: {
            in: 0.9,
            cm: 2.3
          },
          snow_day: {
            in: 0.9,
            cm: 2.3
          },
          snow_night: {
            in: 0.0,
            cm: 0.0
          },
          maxwind: {
            mph: 10,
            kph: 16,
            dir: 'NNE',
            degrees: 27
          },
          avewind: {
            mph: 6,
            kph: 10,
            dir: 'NNE',
            degrees: 27
          },
          avehumidity: 50,
          maxhumidity: 60,
          minhumidity: 41
        },
        {
          date: {
            epoch: '1514592000',
            pretty: '7:00 PM EST on December 29, 2017',
            day: 29,
            month: 12,
            year: 2017,
            yday: 362,
            hour: 19,
            min: '00',
            sec: 0,
            isdst: '0',
            monthname: 'December',
            monthname_short: 'Dec',
            weekday_short: 'Fri',
            weekday: 'Friday',
            ampm: 'PM',
            tz_short: 'EST',
            tz_long: 'America/New_York'
          },
          period: 10,
          high: {
            fahrenheit: '31',
            celsius: '-1'
          },
          low: {
            fahrenheit: '18',
            celsius: '-8'
          },
          conditions: 'Partly Cloudy',
          icon: 'partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          skyicon: '',
          pop: 20,
          qpf_allday: {
            in: 0.07,
            mm: 2
          },
          qpf_day: {
            in: 0.0,
            mm: 0
          },
          qpf_night: {
            in: 0.07,
            mm: 2
          },
          snow_allday: {
            in: 0.9,
            cm: 2.3
          },
          snow_day: {
            in: 0.0,
            cm: 0.0
          },
          snow_night: {
            in: 0.9,
            cm: 2.3
          },
          maxwind: {
            mph: 10,
            kph: 16,
            dir: 'W',
            degrees: 274
          },
          avewind: {
            mph: 7,
            kph: 11,
            dir: 'W',
            degrees: 274
          },
          avehumidity: 64,
          maxhumidity: 87,
          minhumidity: 51
        }
      ]
    };

    app.setState({
      currentLocation: currentLocation(),
      tenDayForecast: dailyForecast()
    });

    const actual = app.state();

    expect(actual).toEqual(expected);
  });

  test('App should render a single CurrentWeather component', () => {
    const expected = 1;
    const actual = app.find(CurrentWeather).length;

    expect(actual).toBe(expected);
  });

  test('App should render a single TenDayForecast component', () => {
    const expected = 1;
    const actual = app.find(TenDayForecast).length;

    expect(actual).toBe(expected);
  });
});