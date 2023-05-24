import { View, Text,StyleSheet,TouchableOpacity,Image,onPress } from 'react-native'
import React from 'react'

const Tests = () => {
  return (
    <View style={styles.container_card}>
        <Image source={require("../../assets/card1.png")} style={styles.image_card} />
        <Text style={styles.title_card}>DY Hall</Text>
        <TouchableOpacity style={styles.button_card} onPress={onPress}>
          <Text style={styles.buttonText_card}>Det</Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
    container_card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    
      },
      image_card: {
        width: 55,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 8,
        marginRight: 16,
        //alignSelf: 'flex-start',
        marginLeft: 16
    
      },
      title_card: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingRight: 125
      },
      button_card: {
        backgroundColor: '#B93B22',
        padding: 10,
        width: 80,
        borderRadius: 5,
        alignItems: 'center',
        //marginVertical: 10,
      },
      buttonText_card: {
        color: 'white',
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center'
      },
    })
export default Tests