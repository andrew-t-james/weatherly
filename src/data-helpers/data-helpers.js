export const locationForecast = (weatherData) =>{
  const location = {
    city: weatherData.current_observation.display_location.city,
    weather: weatherData.current_observation.weather,
    icon: weatherData.current_observation.icon,
    iconUrl: weatherData.current_observation.icon_url,
    temperature: weatherData.current_observation.temp_f,
    high: weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    description: weatherData.forecast.txt_forecast.forecastday[0].fcttext
  };

  return location;
};

export const hourlyForecast = (weatherData) => weatherData.hourly_forecast;

export const dailyForecast = (weatherData) => {
  const originalForecastArray =  weatherData.forecast.simpleforecast.forecastday;
  const tenDayForecast = [];

  originalForecastArray.forEach((day) => {
    const dailyForecast = {
      day: day.date.weekday,
      conditions: day.conditions,
      iconUrl: day.icon_url,
      iconTitle: day.icon,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit,
    };

    tenDayForecast.push(dailyForecast);
  });
  return tenDayForecast;
};