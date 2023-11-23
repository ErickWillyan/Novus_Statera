import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";



export default function ScreenHome() {
  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/background.png")}
        style={styles.backgroundImage}
      >
        {/* Seu conteúdo aqui */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Ajuste isso de acordo com sua preferência
  },
});
