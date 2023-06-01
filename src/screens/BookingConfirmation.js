import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'




const BookingConfirmation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container_heading}>
                <Text style={styles.text}>Booking Confirmation</Text>
            </View>

            <Image
                style={styles.image}
                source={require("../../assets/hall.png")} />

            <View style={styles.container_subheading}>
                <Text style={styles.subheading1}>Venue:</Text>
                <Text style={styles.subheading2}>Capacity:</Text>
                <Text style={styles.subheading3}>Features:</Text>
            </View>


            <View style={styles.container_card}>
                <Text style={styles.title_card}>Date</Text>
                <Image
                    source={require("../../assets/calendar.png")}
                    style={styles.image_card} />
            </View>


            <View style={styles.container_card}>
                <Text style={styles.title_card}>Time</Text>
                <Image
                    source={require("../../assets/clock.png")}
                    style={styles.image_card} />
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>BOOK</Text>

            </TouchableOpacity>
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
        marginBottom:15
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