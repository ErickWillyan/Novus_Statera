import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import LinkText from "../../components/LinkText";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";

export default function ScreenCadastroSec() {
  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <View style={styles.return}>
        <ReturnButton />
      </View>
      <View style={styles.imagem}>
        <Image
          style={styles.perfil}
          source={require("../../assets/img/Perfil.png")}
        />
        <LinkText />
      </View>
      <View style={styles.inputs}>
        <CustomTextInput placeholderText={"CEP"} />
        <CustomTextInput placeholderText={"Endereço"} />
        <CustomTextInput placeholderText={"Bairro"} />
        <CustomTextInput placeholderText={"Cidade"} />
        <View style={{ height: 58 }} />
        <CustomButton title={"Próximo"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  perfil: {
    width: 280,
    height: 280,
    top: 43,
  },
  return: {
    position: "absolute",
    top: 45,
    left: 15,
  },
  imagem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 70,
    marginTop: 50,
  },
});
