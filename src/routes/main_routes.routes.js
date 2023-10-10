import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import SplashScreen from "../components/SplashScreen";
import TabNavigator from "./tabNavigator";

const Stack = createStackNavigator();

export default function MainRoutes() {
  // const [isSplashVisible, setIsSplashVisible] = useState(true);

  // useEffect(() => {
  //   const splashTimeout = setTimeout(() => {
  //     setIsSplashVisible(false);s
  //   }, 3000); //3 segundos

  //   return () => clearTimeout(splashTimeout);
  // }, []);

  return (
    <Stack.Navigator>
      {/* <Stack.Navigator initialRouteName="Splash" headerMode="none">
        {isSplashVisible ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <Stack.Screen name="TabBar" component={TabNavigator} />
        )} */}
      <Stack.Screen
        name="TabBar"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
