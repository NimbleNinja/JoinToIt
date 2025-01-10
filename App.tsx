import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Navigation} from './src/app/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
