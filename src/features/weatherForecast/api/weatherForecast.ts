import { LatLng } from 'react-native-maps';
import { weatherInstance } from './weatherAxios';
import { WeatherResponse } from './types';
import { formatDate } from '../lib/date';

export const fetchWeatherByLatLong = ({ latitude, longitude }: LatLng) => {
  return weatherInstance.get<WeatherResponse>(
    `${latitude},${longitude}/${formatDate(new Date())}`,
  );
};

export const fetchWeeklyWeather = (location: string) => {
  const from = formatDate(new Date());
  const dayTo = new Date();
  dayTo.setDate(dayTo.getDate() + 6);
  const to = formatDate(dayTo);
  return weatherInstance.get<WeatherResponse>(`${location}/${from}/${to}`);
};
