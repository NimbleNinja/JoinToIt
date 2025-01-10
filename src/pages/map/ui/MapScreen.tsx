import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, LatLng, Marker, Point } from 'react-native-maps';
import { fetchLocation } from '../../../features/mapWeather/model/mapGeocoding';

const initialRegion = {
  latitude: 50.4501,
  longitude: 30.5234,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

type MapMarker = {
  coordinate: LatLng;
  position: Point;
};

export const MapScreen = () => {
  const [location, setLocation] = useState('');
  const [marker, setMarker] = useState<MapMarker | null>(null);

  const locationHandler = async (params: LatLng) => {
    try {
      const response = await fetchLocation(params);
      console.log(response.data);
      if (!response.data.length) {
        setLocation('');
      }
      setLocation(response.data[0].name);
    } catch (error) {
      console.log(error);
      setLocation('');
    }
  };

  useEffect(() => {
    locationHandler(initialRegion);
  }, []);

  console.log(location);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onLongPress={({ nativeEvent: { coordinate, position } }) => {
          setMarker({ coordinate, position });
          locationHandler(coordinate);
        }}>
        {marker && (
          <Marker
            coordinate={{
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude,
            }}>
            {location && (
              <Callout style={styles.callout}>
                <View>
                  <Text numberOfLines={2} style={styles.calloutTitle}>
                    {location}
                  </Text>
                </View>
              </Callout>
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
  callout: {
    width: 150,
    height: 100,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
