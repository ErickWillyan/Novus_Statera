import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReturnButton from "../../components/ReturnButton";
import LinkText from "../../components/LinkText";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import firebase from "../../firebase/firebaseConnection";
import ScreenLogin from "../login";



export default function ScreenCadastroPrim({onNext, targetScreen}) {
  //const [user, setUser] = useState(123);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [rg, setRg] = useState("");
  const [datanasc, setDatanasc] = useState("");
 
  const navigation = useNavigation();

  const handleNavigation = () => {
    // Navegue para a tela alvo quando o link for clicado
    navigation.navigate(targetScreen);
  };

  //if(!user){
    //return <ScreenLogin/>
  //}
  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
    <View style={styles.return}>
    <ReturnButton
    onPress={handleNavigation}
    />
    </View> 
    <View style={styles.imagem}>
      <Image style={styles.perfil} source={require("../../assets/img/Perfil.png")} />
      <LinkText placeholder={"Adicionar Foto"}/>
      </View>
    <View style={styles.inputs}>
          <CustomTextInput 
          placeholderText={'Nome'} 
          value={nome}
          onChangeText={(text) => setNome(text) }
          />

          <CustomTextInput 
          placeholderText={'Sobrenome'} 
          value={sobrenome}
          onChangeText={(text) => setSobrenome(text) }
          />

          <CustomTextInput 
          placeholderText={'Registro Geral'} 
          value={rg}
          onChangeText={(text) => setRg(text) }
          />

          <CustomTextInput 
          placeholderText={'Data de nascimento'} 
          value={datanasc}
          onChangeText={(text) => setDatanasc(text) }
          />
          <View style={{ height: 58 }} />
          <CustomButton 
          title={"Próximo"}
          onPress={onNext}
          />
    </View>
   
    </View>
  )
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