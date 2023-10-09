import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import LinkText from "../../components/LinkText";
import CustomTextInput from "../../components/TextInput";
import CustomButton from "../../components/CustomButton";

function ScreenCadastroSec() {
  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
    <View style={styles.return}>
    <ReturnButton/>
    </View>
    <View style={styles.imagem}>
      <Image style={styles.perfil} source={require("../../assets/img/Perfil.png")} />
      <LinkText/>
      </View>
    <View style={styles.inputs}><CustomTextInput placeholderText={'CEP'} />
          <CustomTextInput placeholderText={'Endereço'} />
          <CustomTextInput placeholderText={'Bairro'} />
          <CustomTextInput placeholderText={'Cidade'} />
          <View style={{ height: 58 }} />
          <CustomButton title={"Próximo"}/>
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
    top:43
  },
  return:{
    position:"absolute",
    top:45,
    left:15,
  },
  imagem:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  inputs:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom:70,
    marginTop: 50
  },
});


//não tá funcionando
ScreenCadastroSec.navigationOptions = {
  tabBarIcon: ({ color, size, focused }) => {
    size = 30;
    if (focused) {
      return <Ionicons name="reader" size={size} color={color} />;
    }
    return <Ionicons name="reader-outline" size={size} color={color} />;
  },
  headerShown: false,
};
//não tá funcionando

export default ScreenCadastroSec;