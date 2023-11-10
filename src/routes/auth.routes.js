import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/login";
import ScreenCadastro from "../pages/Cadastro/ScreenCadastro";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cadastro"
        component={ScreenCadastro}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}
