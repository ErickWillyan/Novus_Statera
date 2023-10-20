import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenHome from "../pages/Home";

import Login from "../pages/login";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={ScreenHome}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
