import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "react-native-checkbox";
const BookByFeature = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleToggleCheckBox1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleToggleCheckBox2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleToggleCheckBox3 = () => {
    setIsChecked3(!isChecked3);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_heading}>
        <Text style={styles.text}>Book by feature</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.c1}
          label="Capacity<50"
          /*checked={isChecked1}
          onChange={handleToggleCheckBox1}
          checkboxStyle={styles.checkbox}
          tintColors={{ true: 'blue', false: 'gray' }}
          onFillColor="blue"*/
        />
        <CheckBox
          label="Capacity >50"
          /*
          checked={isChecked2}
          onChange={handleToggleCheckBox2}
          checkboxStyle={styles.checkbox}
          tintColors={{ true: 'blue', false: 'gray' }}
          onFillColor="blue"*/
          style={styles.c2}
        />
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
  checkboxContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 200,
    alignItems: "flex-start",
    //marginBottom: 16,
  },
  checkbox: {
    flex: 1,
    marginRight: 8,
    //backgroundColor:'blue',
    borderColor: "blue",
  },
  c1: {
    marginRight: 5,
    paddingRight: 10,
  },
  c2: {
    paddingLeft: 10,
  },
});

export default BookByFeature;
