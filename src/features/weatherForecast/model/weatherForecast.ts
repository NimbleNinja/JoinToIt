import { LatLng } from 'react-native-maps';
import { weatherInstance } from '../lib/weatherAxios';

export const fetchWeatherByLatLong = ({ latitude, longitude }: LatLng) => {
  return weatherInstance.get(`${latitude},${longitude}`);
};
