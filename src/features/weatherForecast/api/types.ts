import { DayWeather } from 'shared/api/types';

export type WeatherResponse = {
  days: DayWeather[];
  resolvedAddress: string;
};
