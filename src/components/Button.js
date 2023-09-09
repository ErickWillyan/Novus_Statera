import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#5FB05F",
    backgroundColor: "#F2F2F2",
    padding: 10,
    width: 338,
    height: 52,
  },
  buttonText: {
    color: "#008100", // Cor do texto
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "center",
  },
});

export default CustomButton;
