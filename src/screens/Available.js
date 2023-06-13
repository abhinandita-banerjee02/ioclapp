import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import axios from 'axios';

const Available = ({ route, navigation }) => {
  const { date } = route.params;
  const [availableTitles, setAvailableTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsResponse = await axios.get('https://63a9-2405-201-8006-5009-955-5325-4924-1a7b.ngrok-free.app/items');
        const bookingsResponse = await axios.get('https://63a9-2405-201-8006-5009-955-5325-4924-1a7b.ngrok-free.app/booked');

        const filteredItems = itemsResponse.data.filter((item) => {
          const booking = bookingsResponse.data.find(
            (booking) => booking.title === item.title && booking.bookingDate === date
          );
          return !booking;
        });

        setAvailableTitles(filteredItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [date]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>20th May</Text>
      <Text style={styles.subheading}>Venues Available</Text>

      <ScrollView style={styles.container_scroll}>
        {availableTitles.map((item, index) => (
          <View style={styles.container_card} key={index}>
            <Image
              source={require("../../assets/card1.png")}
              style={styles.image_card}
            />
            <View>
              <Text style={styles.title_card}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.description}>Capacity : {item.capacity}</Text>
            </View>
            <TouchableOpacity
              style={styles.button_card}
              onPress={() => navigation.navigate("BookingConfirmation", { title1: item.title,venue1: item.description,capacity1: item.capacity})}
            >
              <Text style={styles.buttonText_card}>Det</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCE1CE",
  },
  heading: {
    fontSize: 33,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    color: "#325D9C",
    paddingBottom: 20,
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  subheading: {
    fontSize: 19,
    fontWeight: "bold",
    paddingBottom: 34,
    paddingTop: 10,
    paddingLeft: 30,
  },
  container_card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAC5B5",
    borderRadius: 7,
    paddingBottom: 15,
    paddingTop: 15,
    marginRight: 5,
    marginLeft: 5,
    width: "100%",
    marginTop: 13,
    marginBottom: 13,
  },
  image_card: {
    width: 65,
    height: 75,
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 16,
    marginLeft: 13,
    paddingBottom: 40,
  },
  title_card: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingRight: 85,
  },
  button_card: {
    backgroundColor: "#5D6B80",
    padding: 1,
    width: 40,
    borderRadius: 5,
    alignItems: "center",
    //paddingRight:5
    //marginVertical: 10,
  },
  buttonText_card: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: 'wrap'

  },
  description: {
    paddingLeft: 30,
    paddingRight: 85,
    fontSize: 14,
    color: "#555555",
  },
  container_scroll: {
    //flex: 1,
    marginBottom: 200
  },
});
export default Available;

