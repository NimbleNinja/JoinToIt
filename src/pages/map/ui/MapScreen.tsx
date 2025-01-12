import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { fetchLocation } from 'features/mapLocation/model/mapGeocoding';
import { MapCallout } from './MapCallout';

const initialRegion = {
  latitude: 50.4501,
  longitude: 30.5234,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

type MapMarker = LatLng & {
  locationName: string | null;
};

export const MapScreen = () => {
  const [marker, setMarker] = useState<MapMarker | null>(null);

  const locationHandler = async (params: LatLng) => {
    if (marker) {
      setMarker(null);
    }

    try {
      const response = await fetchLocation(params);
      setMarker({
        locationName: response.data[0]?.name || 'Not found',
        latitude: params.latitude,
        longitude: params.longitude,
      });
    } catch (error) {
      setMarker({
        locationName: 'Fetch error',
        latitude: params.latitude,
        longitude: params.longitude,
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onLongPress={({ nativeEvent: { coordinate } }) =>
          locationHandler(coordinate)
        }>
        {marker && (
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}>
            {marker.locationName && (
              <MapCallout location={marker.locationName} />
            )}
          </Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: StyleSheet.absoluteFillObject,
  location: {
    marginTop: 24,
    padding: 8,
    borderRadius: 16,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
});
