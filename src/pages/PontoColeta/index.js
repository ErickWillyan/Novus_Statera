import React from "react";
import { useState, useContext } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import { api } from "../../libs/api";

export default function ScreenPontoColeta() {
  const route = useRoute();
  const navigation = useNavigation();

  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [number, setNumber] = useState("");
  const [complemento, setComplemento] = useState("");
  const [name, setName] = useState("");

 const {user} = useContext(AuthContext)
  const doadorId = user.doadorId

 
  

  async function RegisterLocal({
    name,
    rua,
    bairro,
    cidade,
    number,
    doadorId
  }) {
    try {
     

      const response = await api.post("/RegisterLocal", {
        name,
        rua,
        bairro,
        cidade,
        number,
        doadorId,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async function handleRegisterLocal() {
    await RegisterLocal({
      name,
      rua,
      bairro,
      cidade,
      complemento,
      number,
      doadorId,
    });
    
    console.log(doadorId)
    navigation.navigate("TabBar");
  }

  

  return (
    <View style={styles.container}>   
        
      <TextInput
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder={"Nome"}
        placeholderTextColor="#008100"
        style={styles.textInput}
      />

      <TextInput
        value={rua}
        onChangeText={(value) => setRua(value)}
        placeholder={"rua"}
        placeholderTextColor="#008100"
        style={styles.textInput}
      />

      <TextInput
      value={bairro}
        onChangeText={(value) => setBairro(value)}
        placeholder={"Bairro"}
        placeholderTextColor="#008100"
        style={styles.textInput}
      />

      <TextInput
        value={cidade}
        onChangeText={(value) => setCidade(value)}
        placeholder={"Cidade"}
        placeholderTextColor="#008100"
        style={styles.textInput}
      />

      <TextInput
      value={complemento}
        onChangeText={(value) => setComplemento(value)}
        placeholder={"Complemnento"}
        placeholderTextColor="#008100"
        style={styles.textInput}
      />

      <TextInput
        value={number}
        onChangeText={(value) => setNumber(value)}
        placeholder={"Número"}
        placeholderTextColor="#008100"
        style={styles.textInput}
      />

      <CustomButton title={"Confirmar"} onPress={handleRegisterLocal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",

  },
  textInput:{
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: "#008100",
    marginBottom: "10%",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
  }
  
});
