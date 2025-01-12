import Config from 'react-native-config';

export const ENV = {
  GEOCODING_API_BASE_URL: Config.GEOCODING_API_BASE_URL || '',
  GEOCODING_API_KEY: Config.GEOCODING_API_KEY || '',
  WEATHER_API_BASE_URL: Config.WEATHER_API_BASE_URL || '',
  WEATHER_API_KEY: Config.WEATHER_API_KEY || '',
};
