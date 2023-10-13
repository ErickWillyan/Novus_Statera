import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebase/firebaseConnection";
import ScreenCadastroPrim from "./CadPrim";
import ScreenCadastroSec from "./CadSec";
import ScreenCadastroTerc from "./CadTerc";
import ScreenLogin from "../login";

export default function ScreenCadastro() {
  //const [user, setUser] = useState(123);
  const [step, setStep] = useState(1);
  const navigation = useNavigation();

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } 
  };

  const handleGoBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      // Navegue para a tela anterior usando o React Navigation
      navigation.goBack();
    }
  };

  function handleCadastro(){
    if (senha === repetirSenha){
    const user =  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((user)=>{
      console.log(user.user)
    })
    } else {
      console.log("Por favor, verifique se as senhas estão iguais e tente novamente.")
    }
  }

  if (step === 1) {
    return (
      <View style={{ flex: 1 }}>
        <ScreenCadastroPrim onNext={handleNext} onGoBack={handleGoBack}/>
      </View>
    );
  } else if (step === 2) {
    return (
      <View style={{ flex: 1 }}>
        <ScreenCadastroSec onNext={handleNext} onGoBack={handleGoBack}/>
      </View>
    );
  } else if (step === 3) {
    return (
      <View style={{ flex: 1 }}>
        <ScreenCadastroTerc onNext={handleNext} onGoBack={handleGoBack}/>
      </View>
    );
  } else {
    return <ScreenLogin />;
  }
}