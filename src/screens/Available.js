import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  onPress,
  ScrollView,
  FlatList
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
const Available = ({route,navigation}) => {




  const [items, setItems] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [availableTitles, setAvailableTitles] = useState([]);
  const { date } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsResponse = await axios.get('https://63a9-2405-201-8006-5009-955-5325-4924-1a7b.ngrok-free.app/items');
        setItems(itemsResponse.data);

        const bookingsResponse = await axios.get('https://63a9-2405-201-8006-5009-955-5325-4924-1a7b.ngrok-free.app/booked');
        setBookings(bookingsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterAvailableTitles = () => {
      const filteredItems = items.filter((item) => {
        const booking = bookings.find(
          (booking) => booking.title === item.title && booking.bookingDate === date
        );
        return !booking;
      });

      const availableTitles = filteredItems.map((item) => item.title);
      setAvailableTitles(availableTitles);
    };

    filterAvailableTitles();
  }, [items, bookings, date]);

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>20th May</Text>
    <Text style={styles.subheading}>Venues Available</Text>

    <ScrollView style={styles.container_scroll}>
      {availableTitles.map((title, index) => (
        <View style={styles.container_card} key={index}>
          <Image
            source={require("../../assets/card1.png")}
            style={styles.image_card}
          />
          <Text style={styles.title_card}>{title}</Text>
          <TouchableOpacity
            style={styles.button_card}
            onPress={() => navigation.navigate("BookingConfirmation",{title1:title})}
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
  heading: {
    fontSize: 33,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    color: "#325D9C",
    paddingBottom: 20,
    paddingTop: 25,
  },

  subheading: {
    fontSize: 19,
    fontWeight: "bold",
    paddingBottom: 34,
    paddingTop: 10,
  },

  container_card: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "left",
    backgroundColor: "#EAC5B5",
    borderRadius: 7,
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 5,
    paddingLeft: 0,
    with: "100%",
    marginTop: 13,
    marginBottom: 13,
  },
  image_card: {
    width: 65,
    height: 75,
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 16,
    //alignSelf: 'flex-start',
    marginLeft: 13,
    paddingBottom: 40,
  },
  title_card: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingRight: 125,
  },
  button_card: {
    backgroundColor: "#5D6B80",
    padding: 10,
    width: 78,
    borderRadius: 5,
    alignItems: "center",
    //marginVertical: 10,
  },
  buttonText_card: {
    color: "white",
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  container_scroll: {
    //flex: 1,
  },
});
export default Available;