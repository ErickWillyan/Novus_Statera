import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons"; // Certifique-se de ter instalado a biblioteca de ícones

const ReturnButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign
        name="arrowleft"
        size={32}
        color="#008100"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50, // Largura do botão
    height: 50, // Altura do botão
    backgroundColor: "#F5F5F5", // Cor de fundo do botão
    borderRadius: 25, // Border radius de 25
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    marginRight: 0,
  },
});

export default ReturnButton;
