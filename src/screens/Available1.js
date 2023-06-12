import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const MyComponent = ({ route }) => {
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
      <Text style={styles.titlesText}>
        Available Titles:
        {availableTitles.map((title, index) => (
          <Text key={index}> {title}</Text>
        ))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlesText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyComponent;
