import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenCadastroPrim from "./CadPrim";
import ScreenCadastroSec from "./CadSec";
import ScreenCadastroTerc from "./CadTerc";
import ScreenLogin from "../login";

export default function ScreenCadastro() {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2)
    } else if (step === 2){
      setStep(1)
    }
  }



  if (step === 1) {
    return (
      <View style={{ flex: 1 }}>
        <ScreenCadastroPrim onNext={handleNext} onGoBack={handleBack}/>
      </View>
    );
  } else if (step === 2) {
    return (
      <View style={{ flex: 1 }}>
        <ScreenCadastroSec onNext={handleNext} onGoBack={handleBack}/>
      </View>
    );
  } else if (step === 3) {
    return (
      <View style={{ flex: 1 }}>
        <ScreenCadastroTerc onNext={handleNext} onGoBack={handleBack}/>
      </View>
    );
  } else {
    return <ScreenLogin />;
  }
}