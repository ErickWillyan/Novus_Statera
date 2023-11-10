import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import ReturnButton from "../../../components/ReturnButton";
import LinkText from "../../../components/LinkText";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { useRegisterUser } from "../context/register";

export default function ScreenCadastroSec() {
  const { handleNextStep, handleBackStep } = useRegisterUser();
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

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
          placeholderText={"CEP"}
          valorInput={cep}
          textChange={(text) => setCep(text)}
        />

        <CustomTextInput
          placeholderText={"Endereço"}
          valorInput={endereco}
          textChange={(text) => setEndereco(text)}
        />

        <CustomTextInput
          placeholderText={"Bairro"}
          valorInput={bairro}
          textChange={(text) => setBairro(text)}
        />

        <CustomTextInput
          placeholderText={"Cidade"}
          valorInput={cidade}
          textChange={(text) => setCidade(text)}
        />

        <View style={{ height: 58 }} />
        <CustomButton
          title={"Próximo"}
          onPress={() => handleNextStep({ cep, bairro, endereco, cidade })}
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
