import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReturnButton from "../../../components/ReturnButton";
import LinkText from "../../../components/LinkText";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { useRegisterUser } from "../context/register";
import {launchImageLibrary} from 'react-native-image-picker'

export default function ScreenCadastroPrim() {

function openAlbum(){
  const options = {
    mediaType: "photo",
    quality: 1,
    selectionLimit: 1,
  }

  launchImageLibrary(options, (response) => {

    if(response.didCancel){
      console.log("IMAGE PICKER CANCELADO")
      return;
    }else if(response.error){
      console.log("GEROU ERRO ", response.errorMessage)
      return;
    }

    console.log(response.assets)

  })
}

  const { handleNextStep } = useRegisterUser();
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rg, setRg] = useState("");

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <View style={styles.return}>
        <ReturnButton onPress={handleNavigation} />
      </View>
      <View style={styles.imagem}>
        <Image
          style={styles.perfil}
          source={require("../../../assets/img/Perfil.png")}
        />
        {/* <LinkText 
        onPress={openAlbum}
        placeholder={"Adicionar Foto"} /> */}
        <TouchableOpacity onPress={openAlbum}>
          <Text>Adicionar Foto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputs}>
        <CustomTextInput
          placeholderText={"Digite seu nome"}
          valorInput={name}
          textChange={(text) => setName(text)}
        />

        <CustomTextInput
          placeholderText={"Informe seu telefone"}
          valorInput={telefone}
          textChange={(text) => setTelefone(text)}
          isPhoneMasked={true}
        />

        <CustomTextInput
          placeholderText={"Informe seu RG"}
          valorInput={rg}
          textChange={(text) => setRg(text)}
          isRgMasked={true}
        />

        
        <View style={{ height: 58 }} />
        <CustomButton
          title={"Próximo"}
          onPress={() => handleNextStep({ name, telefone, rg})}
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
    bottom:"17%",
  },
  inputs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 100,
    marginBottom: "-20%"
  },
});
