import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomSearchBar = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2E2E2",
    padding: 10,
    borderRadius: 30,
    width: 280,
    marginTop: 20,
    marginBottom:10
  },
  input: {
    backgroundColor: "#E2E2E2",
    borderRadius: 10,
    padding: 8,
  },
});

export default CustomSearchBar;