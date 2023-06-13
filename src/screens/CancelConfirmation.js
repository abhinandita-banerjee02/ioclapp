import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";

const CancelConfirmation = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <DatePicker
        style={styles.datePicker}
        date={selectedDate}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: styles.dateInput,
          dateText: styles.dateText,
          placeholderText: styles.placeholderText,
        }}
        onDateChange={handleDateChange}
      />
      <TextInput
        style={styles.textInput}
        value={selectedDate}
        onChangeText={handleDateChange}
        placeholder="Selected date"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  datePicker: {
    width: 200,
    marginBottom: 20,
  },
  dateInput: {
    borderWidth: 0,
    alignItems: "flex-start",
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
  placeholderText: {
    fontSize: 16,
    color: "#999",
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
});

export default CancelConfirmation;
