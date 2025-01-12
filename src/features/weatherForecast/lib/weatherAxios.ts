import axios from 'axios';
import { ENV } from 'shared/config';

export const weatherInstance = axios.create({
  baseURL: ENV.WEATHER_API_BASE_URL,
  params: {
    key: ENV.WEATHER_API_KEY,
    include: 'days',
    elements: 'tempmax,tempmin,temp',
    unitGroup: 'metric',
  },
});
