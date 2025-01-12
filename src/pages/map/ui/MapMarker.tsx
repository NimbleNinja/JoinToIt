import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Callout, LatLng, Marker } from 'react-native-maps';

type Props = {
  coordinate: LatLng;
  text: string;
  onPress?: () => void;
};

export const MapMarker: React.FC<Props> = ({ coordinate, text, onPress }) => {
  return (
    <Marker
      coordinate={coordinate}
      onPress={onPress}
      title={text}
      style={{ maxWidth: 100 }}
    />
  );
};

const styles = StyleSheet.create({
  callout: {
    padding: 8,
  },
  calloutTitle: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
});
