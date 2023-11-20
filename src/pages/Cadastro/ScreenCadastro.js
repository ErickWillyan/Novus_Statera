import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RegisterUserProvider } from "./context/register";
import { StepForm } from "./components";

export default function ScreenCadastro() {

  return (
    <RegisterUserProvider>
      <View style={{ flex: 1 }}>
        <StepForm />
      </View>
    </RegisterUserProvider>
  );
}
