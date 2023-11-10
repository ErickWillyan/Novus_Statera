import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenCadastroPrim from "./components/CadPrim";
import ScreenCadastroSec from "./components/CadSec";
import ScreenCadastroTerc from "./components/CadTerc";
import ScreenLogin from "../login";
import { RegisterUserProvider } from "./context/register";
import { StepForm } from "./components";

export default function ScreenCadastro() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState();
  const navigation = useNavigation();

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  return (
    <RegisterUserProvider>
      <View style={{ flex: 1 }}>
        <StepForm />
      </View>
    </RegisterUserProvider>
  );
}
