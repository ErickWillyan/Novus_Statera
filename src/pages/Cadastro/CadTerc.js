import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import LinkText from "../../components/LinkText";
import CustomTextInput from "../../components/TextInput";
import CustomButton from "../../components/CustomButton";
import RadioButton from "..//../components/RadioButton";
import CustomCheckbox from "../../components/CustomCheckbox";

export default function ScreenCadastroTerc({onNext, onGoBack}) {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [repetSenha, setRepetSenha] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <View style={styles.return}>
        <ReturnButton 
        onPress={onGoBack}
        />
      </View>
      <View style={styles.imagem}>
        <Image style={styles.perfil} source={require("../../assets/img/Perfil.png")} />
        <LinkText />
      </View>
      <View style={styles.inputs}>
        <CustomTextInput 
        placeholderText={'Email'} 
        value={email}
        onChangeText={(text) => setEmail(text) }
        />

        <CustomTextInput 
        placeholderText={'Telefone'} 
        value={telefone}
        onChangeText={(text) => setTelefone(text) }
        />

        <CustomTextInput 
        placeholderText={'Senha'} 
        value={senha}
        onChangeText={(text) => setSenha(text) }
        />

        <CustomTextInput 
        placeholderText={'Repetir Senha'} 
        value={repetSenha}
        onChangeText={(text) => setRepetSenha(text) }
        />
        <View style={{ top: 15, alignItems: "center" }}>
          <RadioButton options={['Coletor', 'Doador']} />
          <View style={{ flexDirection: 'row', alignItems: 'center', top:10 }}>
            <CustomCheckbox id= "termos"/>
            <Text style={{ marginLeft: -35, marginRight:1 }}>Eu li e concordo com os</Text>
            <LinkText placeholder={"Termos de uso"}/>
          </View>
        </View>
        <View style={{ height: 58 }} />
        <CustomButton 
        title={"Próximo"}
        onPress={onNext}
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
    top: 10
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
    marginBottom: 20

  },
  inputs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    marginTop: -100
  },
  radio: {
    margintop: 10
  }
});