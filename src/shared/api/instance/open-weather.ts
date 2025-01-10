import axios from 'axios';

const OPEN_WEATHER_API_BASE_URL =
  'http://api.openweathermap.org/geo/1.0/reverse';

const OPEN_WEATHER_API_KEY = 'ZYZ6Z4JNRMQXZPPYC2PCTFWM8';

export const openWeatherInstance = axios.create({
  baseURL: OPEN_WEATHER_API_BASE_URL,
});

openWeatherInstance.interceptors.request.use(request => {
  const urlParams = new URLSearchParams(request.params);
  urlParams.append('appid', OPEN_WEATHER_API_KEY);
  return {
    ...request,
    params: urlParams.toString(),
  };
});
