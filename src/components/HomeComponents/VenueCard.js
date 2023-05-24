import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const VenueCard = () => {
  return (
    <View style={styles.outterContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/card1.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>DY Hall</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("venue card pressed")}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Just repeated it twice for testing */}
      <View style={styles.container}>
        <Image
          source={require("../../../assets/card1.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>DY Hall</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("venue card pressed")}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  outterContainer:{
    marginTop: 40,
  }, 
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#B93B22",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  btnText: {
    color: "white",
  },
});

export default VenueCard;
