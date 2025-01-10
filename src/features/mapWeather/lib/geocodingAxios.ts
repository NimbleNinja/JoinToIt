import axios from 'axios';

const GEOCODING_API_BASE_URL = 'http://api.openweathermap.org/geo/1.0/';
const GEOCODING_API_KEY = '2af904de33a33c7067d7f1cabff2620d';

export const geocodingInstance = axios.create({
  baseURL: GEOCODING_API_BASE_URL,
  params: {
    appid: GEOCODING_API_KEY,
  },
});
