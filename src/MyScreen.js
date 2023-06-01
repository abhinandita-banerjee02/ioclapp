import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from './components/Carousel';

const MyScreen = () => {
  return (
    <View style={styles.container}>
      <Carousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default MyScreen;
