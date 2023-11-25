import React, {useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../components/SplashScreen";
import Login from "../pages/login";
import Cadastro from "../pages/Cadastro/ScreenCadastro";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000); //2 segundos

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      {isSplashVisible ? (<Stack.Screen name="Splash" component={SplashScreen} options={{
            headerShown: false,
          }} /> ):
      (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
      

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
