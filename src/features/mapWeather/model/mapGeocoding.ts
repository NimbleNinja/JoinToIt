import { LatLng } from 'react-native-maps';
import { geocodingInstance } from '../lib/geocodingAxios';

type Location = {
  name: string;
};

export const fetchLocation = async ({ latitude, longitude }: LatLng) => {
  return geocodingInstance.get<Location[]>('reverse', {
    params: { lat: latitude, lon: longitude },
  });
};
