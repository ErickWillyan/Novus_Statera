import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({ placeholderText, valorInput, textChange }) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={valorInput}
          onChangeText={textChange}
          placeholder={placeholderText}
          placeholderTextColor="#008100"
          underlineColorAndroid="transparent"
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
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "#FF8108",
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    width: 300,
    height: 52,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "black",
    fontSize: 20,
    fontStyle: "normal",
    lineHeight: 24,
  },
});

export default CustomTextInput;
