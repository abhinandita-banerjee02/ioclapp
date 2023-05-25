import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import VenueCard from "../components/HomeComponents/VenueCard";
import Carousel from "../components/Carousel2";
import Carousel2 from "../components/HomeComponents/Carousel2";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchFlex}>
        <View style={styles.inputOutterBox}>
          <AntDesign name="search1" size={24} color="#B93B22" />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={setSearchText}
            value={searchText}
          />
        </View>
        

        <TouchableOpacity onPress={handleSearch} style={styles.searchBtn}>
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
      {/* Search bar */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <View>
            <Text style={styles.heading}>Best Venues</Text>
          </View>
          <View>
            <Carousel2 />
          </View>
        </View>
        {/* Carousel */}
        {/* Venue details */}
        <VenueCard />
        {/* Venue details */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
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
});

export default Home;
