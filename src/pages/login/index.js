import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import TextInputComponent from "../../components/textinput";
import LinkText from "../../components/LinkText";
import { Link } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";

export default function ScreenLogin() {
  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <Image
        style={styles.logo}
        source={require("../../assets/img/Logo.png")}
      />
      <View style={{ height: 80 }} />
      <View style={styles.inputContainer}>
        <TextInputComponent placeholderText={"Insira seu email"} />
        {/* Adicione um espaço vertical entre as TextInput */}
        <View style={{ height: 90 }} />
        <TextInputComponent placeholderText={"Insira sua senha"} />
      </View>
      <View style={{ height: 28 }} />
      <View style={styles.link}>
        <LinkText
          placeholder={"Esqueci a minha senha"} //targetScreen={}
        />
      </View>
      <View style={{ height: 58 }} />
      <View>
        cassete
        <CustomButton title={"Entrar"} />
      </View>
      <View style={{ height: 60 }} />
      <View style={[{ flexDirection: "row" }]}>
        <Text style={styles.text}>Não possui uma conta?</Text>
        <LinkText placeholder={"Clique aqui"} />
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
  logo: {
    marginBottom: 18,
    height: 200,
    width: 200,
  },
  inputContainer: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    paddingLeft: 135,
  },
  text: {
    color: "#FF7F08",
    marginRight: 5,
  },
});
