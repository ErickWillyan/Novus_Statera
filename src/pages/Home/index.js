import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CardColeta from "../../components/CardColeta";



export default function ScreenHome() {
  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/background.png")}
        style={styles.backgroundImage}
      >
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
