import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, ActivityIndicator, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "./Carousel";
import filter from "lodash.filter";

import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import VenueCard from "../components/HomeComponents/VenueCard";

const Home = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([])
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState("")
  const [oldData, setOldData] = useState([])
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef(null);
  const api = 'https://63a9-2405-201-8006-5009-955-5325-4924-1a7b.ngrok-free.app/items'
  /*useEffect(() => {
    setIsLoading(true);
    fetchData(api);
  }, []); */

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setData(response);
        setOldData(json.response)
        setIsLoading(false)
        //setFullData(json.response)

      });
  }, [])

  /*const fetchData = async(url) =>{

    try{
      const response=await fetch(url);
      //console.log('Response status:', response.status);
      const json = await response.json();
      setData(json.results);
      console.log(json.results);
    }catch(error){

      setError(error);
      console.log(error);

    }
  }*/
  const handleSearch = (text) => {
    /*if (text == '') {
      setData(oldData);

    }
    else{
      let tempList =data.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      })
      setData(tempList)
    }
    setSearchText(text);*/
    setSearchText(text);
    const formattedText = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedText)
    })
    setData(filteredData)
  };
  const handleCancel = () => {
    navigation.navigate('CancelConfirmation');
  };
  const contains = ({ title1 }, query) => {


    const { title } = title1

    if (title.includes(query)) {
      return true;
    }
    return false

  }


  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchFlex}>
        <View style={styles.inputOutterBox}>
          <AntDesign name="search1" size={24} color="#B93B22" />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={searchText}
            onChangeText={(text) => {
              handleSearch(text)

            }
            }
          />
        </View>
        {/*{searchText == '' ? null : (*/}
        <TouchableOpacity onPress={() => {
          //searchRef.current.clear();
          //handleSearch();
          /*searchText('')*/
}}
          style={styles.searchBtn}>
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>

      </View>
      {/* Search bar */}

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <View>
            <Text style={styles.heading}>Best Venues</Text>
          </View>
          <View>
            <Carousel />
          </View>
        </View>
        {/* Carousel */}

        <TouchableOpacity onPress={handleCancel} >
          <Text style={styles.btnCan}>Press here to cancel previous booking</Text>
        </TouchableOpacity>
        {/* Venue details */}

        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.outterContainer}>
              <View style={styles.containerv}>
                <Image source={require('../../assets/card1.png')} style={styles.imagev} />
                <View>
                  <Text style={styles.titlev}>{item.title}</Text>
                  <TouchableOpacity
                    style={styles.buttonv}
                    onPress={() => navigation.navigate("BookByDate")}
                  >

                    <Text style={styles.btnTextv}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Just repeated it twice for testing */}
            </View>
          )}
        />
        {/* Venue details */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll:{

    marginBottom:100

  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor:"#FCE1CE"
  },
  searchFlex: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputOutterBox: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#B93B22",
  },
  input: {
    marginLeft: 10,
  },
  searchBtn: {
    width: "100%",
    marginVertical: 20,
    backgroundColor: "#B93B22",
    padding: 8,
    borderRadius: 5,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  containerv: {
    marginTop: 20,
  },
  imagev: {
    height: 100,
    width: 100,
  },
  outterContainer: {
    marginTop: 40,
  },
  containerv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
  },
  buttonv: {
    backgroundColor: "#B93B22",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  btnTextv: {
    color: "white",
  },
});

export default Home;
