import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ReturnButton from "../../../components/ReturnButton";
import LinkText from "../../../components/LinkText";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import RadioButton from "../../../components/RadioButton";
import CustomCheckbox from "../../../components/CustomCheckbox";
import { useRegisterUser } from "../context/register";
import { useNavigation } from "@react-navigation/native";

export default function ScreenCadastroSec() {
  const navigation = useNavigation();
  const { handleNextStep, handleBackStep } = useRegisterUser();
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [repetSenha, setRepetSenha] = useState("");

  const handleSelecao = (opcao) => {
    setType(opcao);
  };

  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <View style={styles.return}>
        <ReturnButton onPress={handleBackStep} />
      </View>
      <View style={styles.imagem}>
        <Image
          style={styles.perfil}
          source={require("../../../assets/img/Perfil.png")}
        />
        <LinkText />
      </View>
      <View style={styles.inputs}>
        <CustomTextInput
          placeholderText={"Email"}
          valorInput={email}
          textChange={(text) => setEmail(text)}
        />


        <CustomTextInput
          placeholderText={"Senha"}
          valorInput={password}
          textChange={(text) => setPassword(text)}
        />

        <CustomTextInput
          placeholderText={"Repetir Senha"}
          valorInput={repetSenha}
          textChange={(text) => setRepetSenha(text)}
        />
        <View style={{ top: 15, alignItems: "center" }}>
          <RadioButton options={["coletor", "doador"]} onSelect={handleSelecao}/>
          <View style={{ flexDirection: "row", alignItems: "center", top: 10 }}>
            <CustomCheckbox id="termos" />
            <Text style={{ marginLeft: -35, marginRight: 1 }}>
              Eu li e concordo com os
            </Text>
            <LinkText placeholder={"Termos de uso"} />
          </View>
        </View>
        <View style={{ height: 58 }} />
        <CustomButton
          title={"Cadastrar"}
          onPress={() => handleNextStep({ email, password, type }, navigation.navigate("Login"))}
         
        />
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
    top: 10,
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
    marginBottom: 20,
  },
  inputs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    marginTop: -100,
  },
  radio: {
    margintop: 10,
  },
});
