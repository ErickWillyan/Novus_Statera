import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Divisor = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF8108",
    shadowColor: "black", // Sombra preta
    borderRadius: 50,
    padding: 10,
    width: 208,
    height: 52,
    shadowOffset: { width: 0, height: 4 }, // Offset da sombra
    shadowOpacity: 0.15, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },
  buttonText: {
    color: "#FFFF", // Cor do texto
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "center",
    fontFamily: "inter",
  },
});

export default Divisor;
