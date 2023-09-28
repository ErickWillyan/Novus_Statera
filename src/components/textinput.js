import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const PasInput = ({ placeholderText }) => {
  const [valorInput, setValorInput] = useState("");

  const lidarComMudancaDeInput = (texto) => {
    setValorInput(texto);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={valorInput}
        onChangeText={lidarComMudancaDeInput}
        placeholder={placeholderText}
        placeholderTextColor="#008100"
        textAlign="center"
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#FF8108",
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    width: 300,
    height: 52,
    flexShrink: 0,
    color: "black",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,

  },
});

export default PasInput;
