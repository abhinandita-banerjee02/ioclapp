
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import moment from 'moment';


import DateTimePickerModal from "react-native-modal-datetime-picker";

const BookByDate = ({ navigation }) => {
  /*Date and Time Picker*/


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [chosenDate, setChosenDate] = useState(null);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setChosenDate(date);
    hideDatePicker();
  };


  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideTimePicker();
  };

  const handleGoButton = () => {
    if (chosenDate) {
      const formattedDate = moment(chosenDate).format('YYYY-MM-DD');
      const bookingData = {
        bookingDate: formattedDate,
      };
  
      // Convert bookingData to JSON and send it to the backend
      const jsonData = JSON.stringify(bookingData);
  
      fetch('https://63a9-2405-201-8006-5009-955-5325-4924-1a7b.ngrok-free.app/reservation_date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigation.navigate('Available1', { date: moment(chosenDate).format('YYYY-MM-DD') });
          // Handle the response from the backend
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.warn('Please select a date before proceeding.');
    }
  };
  



  return (
    <View style={styles.container}>
      <View style={styles.container_heading}>
        <Text style={styles.text}>Book by date</Text>
      </View>
      {/*DATE PICKER*/}
      <View style={styles.container_btn1}>
        <TouchableOpacity style={styles.button1}
          onPress={() => {
            showDatePicker();
          }}>
          <Text style={styles.buttonText}>Select Date</Text>
        </TouchableOpacity>
        {/*TIME PICKER*/}
        <TouchableOpacity style={styles.button2}
          onPress={() => {
            showTimePicker();
          }}>
          <Text style={styles.buttonText}>Select Time</Text>
        </TouchableOpacity>
        {/*go*/}

        <TouchableOpacity style={styles.button3}
          onPress={handleGoButton}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>
      </View>

      {/*MASCOT*/}
      <Image
        style={styles.image}
        source={require("../../assets/bookdateMascot.png")}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="date"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //right:0,

    width: "100%",
    // backgroundColor: "#FCE1CE"
  },
  container_heading: {

    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: 50,
    width: "80%",
    backgroundColor: "#FCE1CE",
  },
  text: {
    backgroundColor: "#1B2F4D",
    color: "white",
    paddingLeft: 100,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5,
    paddingRight: 30,
    fontSize: 18,
    fontWeight: "bold",

  },
  container_btn1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 150,
  },
  button1: {
    backgroundColor: "#5D6B80",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  container_btn2: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#5D6B80",
    padding: 10,
    borderRadius: 5,
  },
  button3: {
    backgroundColor: "#5D6B80",
    marginTop: 30,
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 380,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    alignContent: "center",
    paddingLeft: 100,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
});
export default BookByDate;
