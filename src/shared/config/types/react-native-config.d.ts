declare module 'react-native-config' {
  export interface NativeConfig {
    GEOCODING_API_BASE_URL: string;
    GEOCODING_API_KEY: string;
    WEATHER_API_BASE_URL: string;
    WEATHER_API_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
