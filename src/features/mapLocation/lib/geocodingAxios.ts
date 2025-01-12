import axios from 'axios';
import { ENV } from 'shared/config';

export const geocodingInstance = axios.create({
  baseURL: ENV.GEOCODING_API_BASE_URL,
  params: {
    appid: ENV.GEOCODING_API_KEY,
  },
});
