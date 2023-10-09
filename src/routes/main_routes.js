import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../components/SplashScreen";
import TabNavigator from "./tabNavigator";
import CadSec from "../pages/Cadastro/CadSec";
import CadTecr from "../pages/Cadastro/CadTerc";


const Stack = createStackNavigator();

export default function MainRoute() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); //3 segundos

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        {isSplashVisible ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <Stack.Screen name="TabBar" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
