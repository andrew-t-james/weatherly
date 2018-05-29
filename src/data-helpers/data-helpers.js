export const locationForecast = (weatherData) =>{
  const location = {
    city: weatherData.current_observation.display_location.city,
    weather: weatherData.current_observation.weather,
    icon: weatherData.current_observation.icon,
    iconUrl: weatherData.current_observation.icon_url,
    temperature: weatherData.current_observation.temp_f,
    high: weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    description: weatherData.forecast.txt_forecast.forecastday[0].fcttext,
    weekDay: weatherData.forecast.simpleforecast.forecastday[0].date.weekday
  };

  return location;
};


export const dailyForecast = (weatherData) => {
  const originalForecastArray =  weatherData.forecast.simpleforecast.forecastday;

  return originalForecastArray.map((day) => {
    return {
      day: day.date.weekday,
      // conditions: day.conditions,
      iconUrl: day.icon_url,
      iconTitle: day.icon,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit,
    };
  });
};

export const hourlyForecast = (weatherData) => {
  const originalHourlyForecast =  weatherData.hourly_forecast.slice(0, 7);

  return originalHourlyForecast.map(hour => {
    return {
      hour: Number(hour.FCTTIME.hour_padded),
      conditions: Number(hour.temp.english),
      iconUrl: hour.icon_url,
      iconTitle: hour.icon,
    };
  });
};
