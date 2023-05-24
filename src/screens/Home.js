
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, onPress, Button, FlatList, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Carousel from '../components/Carousel';
import Tests from './Tests';


const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };




  return (
    <View style={styles.container}>



      <View style={styles.searchContainer}>
        <Image
          source={require("../../assets/search.png")}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={setSearchText}
          value={searchText}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      <View>
        <Text style={styles.heading}>Best Venues</Text>
      </View>

      <View style={styles.container_carousel}>
        <Carousel />
      </View>

      <View style={styles.container_card}>
       <Tests/>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#FCE1CE",
    width: '100%',
    //flex: 1,
    marginTop: 0,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },

  input: {
    /*height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 8,*/
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#B93B22',
    borderRadius: 4,
    paddingHorizontal: 8,

  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 30,
    paddingLeft: 16
  },


  container_carousel: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20
  },

  container_slideshow: {
    height: 200,
    paddingTop: 20
  },
  image_slideshow: {
    width: Dimensions.get('window').width, // Adjust the width as needed
    height: '100%',
    resizeMode: 'cover',

  },


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




  /*containercarousel1: {
    height: 200,
  },*/

 /* image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginRight: 10,
  },*/
});

export default Home