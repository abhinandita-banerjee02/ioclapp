import {View, Image, Text, StyleSheet} from 'react-native'
import React from 'react'

const Screen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/card1.png")} style={styles.image} />
      <Text style={styles.title}>DY Hall</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent:'left',
      //flex:
      
      
      
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      borderRadius: 8,
      marginRight: 16,
      alignSelf:'flex-start'
      
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default Screen