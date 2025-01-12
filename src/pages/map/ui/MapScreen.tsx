import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { fetchLocation } from 'features/mapLocation/api/mapGeocoding';
import { fetchWeatherByLatLong } from 'features/weatherForecast';

const initialRegion = {
  latitude: 50.4501,
  longitude: 30.5234,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const MapScreen = () => {
  const [latLong, setLatlong] = useState<LatLng | null>(null);
  const [markerText, setMarkerText] = useState('');

  const locationHandler = async (params: LatLng) => {
    setMarkerText('Loading...');

    try {
      const locationRequest = fetchLocation(params);
      const weatherRequest = fetchWeatherByLatLong(params);
      const [locationResponse, weatherResponse] = await Promise.all([
        locationRequest,
        weatherRequest,
      ]);

      setMarkerText(
        `${locationResponse.data[0]?.name || 'Location not found'}${
          weatherResponse.data.days.length
            ? ` ${Math.round(weatherResponse.data.days[0].temp)}°`
            : ''
        }`,
      );
    } catch (error) {
      setMarkerText('Location error');
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onLongPress={({ nativeEvent: { coordinate } }) => {
          setMarkerText('');
          setLatlong(coordinate);
        }}>
        {latLong && (
          <Marker
            coordinate={latLong}
            title={markerText}
            onPress={({ nativeEvent: { coordinate } }) =>
              locationHandler(coordinate)
            }
          />
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
