import axios from 'axios';

const WEATHER_API_BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const WEATHER_API_KEY = 'ZYZ6Z4JNRMQXZPPYC2PCTFWM8';

export const weatherInstance = axios.create({
  baseURL: WEATHER_API_BASE_URL,
});

weatherInstance.interceptors.request.use(request => {
  const urlParams = new URLSearchParams();
  urlParams.append('unitGroup', 'metric');
  urlParams.append('include', 'days');
  urlParams.append('key', WEATHER_API_KEY);
  return {
    ...request,
    params: urlParams.toString(),
  };
});
