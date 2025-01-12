import { LatLng } from 'react-native-maps';
import { geocodingInstance } from './geocodingAxios';
import { Location } from './types';

export const fetchLocation = async ({ latitude, longitude }: LatLng) => {
  return geocodingInstance.get<Location[]>('reverse', {
    params: { lat: latitude, lon: longitude },
  });
};
