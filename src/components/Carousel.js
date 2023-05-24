import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const Carousel = () => {
  const data = [
    { id: '1', imageSource: require('../../assets/hall.png') },
    { id: '2', imageSource: require('../../assets/hall.png') },
    { id: '3', imageSource: require('../../assets/hall.png') },
    // Add more images here
  ];

  const renderItem = ({ item }) => (
    <Image source={item.imageSource} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containercarousel1: {
    height: 200,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginRight: 10,
  },
});

export default Carousel;
