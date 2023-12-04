import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button_opacity = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { opacity: 0.8 }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF8108",
    shadowColor: "black",
    borderRadius: 50,
    padding: 10,
    width: 208,
    height: 52,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#008100",
    fontSize: 20,
    fontStyle: "normal",
    lineHeight: 24,
    textAlign: "center",
  },
});

export default Button_opacity;
