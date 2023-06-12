import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';


const BookingConfirmation = ({route,navigation}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [chosenDate, setChosenDate] = useState(null);

    const{title1}=route.params;

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
          title:title1,
            bookingDate: formattedDate,
            
          };
      
          // Convert bookingData to JSON and send it to the backend
          const jsonData = JSON.stringify(bookingData);
      
          fetch('https://63a9-2405-201-8006-5009-955-5325-4924-1a7b.ngrok-free.app/adding', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: jsonData,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              navigation.navigate('Successful',{date: moment(chosenDate).format('YYYY-MM-DD')})
              
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
                <Text style={styles.text}>Booking Confirmation</Text>
            </View>

            <Image
                style={styles.image}
                source={require("../../assets/hall.png")} />

            <View style={styles.container_subheading}>
                <Text style={styles.subheading1}>Venue:   {title1}</Text>
                {/*<Text style={styles.subheading2}>Capacity:</Text>*/}
                {/*<Text style={styles.subheading3}>Features:</Text>*/}
            </View>


            <TouchableOpacity style={styles.container_card}
                onPress={() => {
                    showDatePicker();
                }}>
                <Text style={styles.title_card}>Date</Text>
                <Image
                    source={require("../../assets/calendar.png")}
                    style={styles.image_card}

                />
            </TouchableOpacity>


            <TouchableOpacity style={styles.container_card}
                onPress={() => {
                    showTimePicker();
                }}>
                <Text style={styles.title_card}>Time</Text>
                <Image
                    source={require("../../assets/clock.png")}
                    style={styles.image_card}

                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
            onPress={handleGoButton}>
                <Text style={styles.btnTxt}>BOOK</Text>

            </TouchableOpacity>
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
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",

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
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        marginLeft: 30,
        width: 350,
        height: 230


    },
    container_subheading: {
        marginTop: 35,
        marginLeft: 30,
        marginBottom: 15
    },
    subheading1: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    subheading2: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    subheading3: {
        fontSize: 25,
        fontWeight: "bold",
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
        marginLeft: 30,
        width: "80%",
        marginTop: 13,
        marginBottom: 13,
    },
    image_card: {
        marginLeft: 250
    },
    title_card: {
        fontSize: 20,
        paddingLeft: 6
    },
    btn: {
        backgroundColor: "#5F626B",
        width: 125,
        borderRadius: 5,
        alignItems: "center",
        marginLeft: 148,
        marginTop: 28,
        padding: 8
    },
    btnTxt: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "white"



    }
})

export default BookingConfirmation