import {View, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Carousel2 = () => {

    const data = [
        { id: "1", imageSource: require("./../assets/Logos/hall.png") },
        { id: "2", imageSource: require("../../assets/Logos/hall.png") },
        { id: "3", imageSource: require("../../assets/Logos/hall.png") },
      ];
    
  return (
    <View style={styles.container}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map((element) => (
        <Image
          source={element.imageSource}
          style={styles.image}
          key={element.id}
        />
      ))}
    </ScrollView>
  </View>
  )
}
const styles = StyleSheet.create({
    image:{
      marginRight: 8
    }
  });
export default Carousel2