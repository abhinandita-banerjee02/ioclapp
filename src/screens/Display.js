import { View, Text,StyleSheet,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const Display = () => {
    const handleButtonPress = () => {
        console.log('Button pressed!');
      };
  return (
   
<View style={styles.container}>
      <Text style={styles.heading}>Heading</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
   
  )
}
const styles = StyleSheet.create({
    ccontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      },
      heading: {
        position: 'absolute',
        top: 20,
        left: 20,
        fontSize: 24,
        fontWeight: 'bold',
      },
      button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });

export default Display