import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TextInputComponent from "/src/components/TextInput";
import CustomButton from "../../components/Button";

export default function ScreenHome() {
  const [message, setMessage] = useState(""); // Estado para armazenar a mensagem

  const handleButtonPress = () => {
    setMessage("Botão foi pressionado!"); // Define o texto da mensagem
  };

  return (
    <View>
      <Text> Tela Home</Text>
      <TextInputComponent placeholderText="Email" />
      <View style={{ alignItems: "center" }}>
        <CustomButton title="Entrar" onPress={handleButtonPress} />
        <Text style={styles.messageText}>{message}</Text> {/* Exibe a mensagem na tela */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});