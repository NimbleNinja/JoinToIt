import React, { useState } from 'react';
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';
import { fetchWeeklyWeather } from 'features/weatherForecast';
import { DayWeather } from 'shared/api/types';

const getDayWeatherTitle = (date: string): string => {
  const dayOfWeek = new Date(date);
  return dayOfWeek.toLocaleDateString('uk-UA', { weekday: 'long' });
};

export const SearchScreen = () => {
  const [days, setDays] = useState<DayWeather[]>([]);
  const [value, setValue] = useState('');
  const [load, setLoad] = useState(false);
  const [location, setLocation] = useState('');

  const weatherForecastHandler = async () => {
    if (!value) {
      return;
    }
    setLoad(true);
    setDays([]);

    try {
      const response = await fetchWeeklyWeather(value);
      setLocation(response.data.resolvedAddress);
      setDays(response.data.days);
    } catch (error) {
      setLocation('Location not found');
      setDays([]);
    } finally {
      setLoad(false);
      setValue('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          value={value}
          onChangeText={setValue}
        />
        <Pressable
          disabled={load}
          style={styles.searchButton}
          onPress={weatherForecastHandler}>
          <Icon name="magnify" size={36} />
        </Pressable>
      </View>
      {location ? <Text style={styles.location}>{location}</Text> : null}
      {days.length ? (
        <ScrollView contentContainerStyle={styles.daysContainer}>
          {days.map(({ datetime, temp }) => {
            return (
              <View key={datetime} style={styles.day}>
                <Text style={styles.dayOfWeek}>
                  {getDayWeatherTitle(datetime)}
                </Text>
                <Text style={styles.temp}>{`${Math.round(temp)}°`}</Text>
              </View>
            );
          })}
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
  },
  location: {
    marginBottom: 12,
    fontSize: 24,
    textAlign: 'center',
  },
  searchBar: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: 'white',
    fontSize: 24,
  },
  searchButton: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 26,
  },
  daysContainer: {
    gap: 12,
  },
  day: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  dayOfWeek: {
    flex: 1,
    fontSize: 24,
    textTransform: 'capitalize',
  },
  temp: {
    fontSize: 24,
  },
});
