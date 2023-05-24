import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Successful = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_heading}>
        <Text style={styles.text}>Book by date</Text>
      </View>

      <Image
        style={styles.image}
        source={require("../../assets/bookingsucMascot.png")}
      />

      <View style={styles.heading}>
        <Text style={styles.text1}>Congratulations</Text>
        <View style={styles.subheading}>
          <Text style={styles.text2}>You’ve booked DY hall</Text>
          <Text style={styles.text3}>for 23rd May</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FCE1CE",
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
    backgroundColor: "#79BF20",
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
    width: 300,
    height: 380,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    alignContent: "center",
    paddingLeft: 100,
    position: "absolute",
    //bottom: 0,
    alignSelf: "center",
  },
  heading: {
    paddingTop: 490,
  },
  text1: {
    fontSize: 34,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    color: "#1B2F4D",
  },

  subheading: {
    paddingTop: 35,
  },
  text2: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    color: "#1B2F4D",
  },
  text3: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    color: "#1B2F4D",
  },
});

export default Successful;
