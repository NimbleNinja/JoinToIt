import { LatLng } from 'react-native-maps';

export type MapMarker = LatLng & {
  locationName: string | null;
  temp: number | null;
};
