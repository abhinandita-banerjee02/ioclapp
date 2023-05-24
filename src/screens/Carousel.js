import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";

const Carousel = () => {
  const data = [
    { id: "1", imageSource: require("../../assets/hall.png") },
    { id: "2", imageSource: require("../../assets/hall.png") },
    { id: "3", imageSource: require("../../assets/hall.png") },
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
  );
};

const styles = StyleSheet.create({
  image:{
    marginRight: 8
  }
});

export default Carousel;
