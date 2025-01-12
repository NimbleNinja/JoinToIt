import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Callout } from 'react-native-maps';

type Props = {
  location: string;
};

export const MapCallout: React.FC<Props> = ({ location }) => {
  return (
    <Callout style={styles.callout}>
      <View>
        <Text numberOfLines={2} style={styles.calloutTitle}>
          {location}
        </Text>
      </View>
    </Callout>
  );
};

const styles = StyleSheet.create({
  callout: {
    //width: 150,
    //height: 100,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
