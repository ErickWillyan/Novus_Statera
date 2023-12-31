import React, { useState, useContext } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import LinkText from "../../components/LinkText";
import CustomButton from "../../components/CustomButton";


import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/core";

export default function ScreenLogin() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { singIn, isAuthenticated, user } = useContext(AuthContext);

  async function handleSignIn() {
    if (email === "" || password === "") {
      console.log("PREENCHA TODOS OS CAMPOS");
      return;
    }
    
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    await singIn({email, password});

    console.log(email)
    console.log(password)
    console.log(isAuthenticated)
    console.log(user)
  }

  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <Image
        style={styles.logo}
        source={require("../../assets/img/Logo.png")}
      />
      <View style={{ height: 80 }} />
      <View style={styles.inputContainer}>
        <CustomTextInput
          valorInput={email}
          textChange={(text) => {
            setEmail(text);
          }}
          placeholderText={"Insira seu email"}
        />
        {/* Adicione um espaço vertical entre as TextInput */}
        <View style={{ height: 90 }} />
        <CustomTextInput
          valorInput={password}
          textChange={(text) => {
            setPassword(text);
          }}
          placeholderText={"Insira sua senha"}
          isPassword={true}
          showPasswordButton={true}
        />
      </View>
      <View style={{ height: 28 }} />
      <View style={styles.link}>
        <LinkText
          placeholder={"Esqueci a minha senha"} //targetScreen={}
        />
      </View>
      <View style={{ height: 58 }} />
      <View>

        <CustomButton title={"Entrar"} onPress={handleSignIn} />

      </View>
      <View style={{ height: 60 }} />
      <View style={[{ flexDirection: "row" }]}>
        <Text style={styles.text}>Não possui uma conta?</Text>
        <LinkText placeholder={"Clique aqui"}    targetScreen={"Cadastro"}  />
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
