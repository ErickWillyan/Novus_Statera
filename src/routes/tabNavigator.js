import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ScreenFavoritos from "../pages/favoritos";
import ScreenHistorico from "../pages/historico_coleta";
import ScreenChat from "../pages/chat";
import ScreenHome from "../pages/Home";
import ScreenPerfil from "../pages/perfil";
import { View } from "react-native-web";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: "60",
          backgroundColor: "#fff",
          bottom: "3",
          width: "90%",
          alignSelf: "center",
          shadowColor: "#363636",
          justifyContent: "center",
          borderRadius: 50,
        },
        tabBarActiveTintColor: "#f95e56",
        tabBarInactiveTintColor: "#a9a9a9",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Favoritos"
        component={ScreenFavoritos}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View
                style={{
                  height: "100%",
                  marginTop: focused ? "10%" : "2%",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  color={color}
                  size={focused ? 30 : 26}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{ color: "#A9A9A9", fontSize: 12, marginBottom: "4%" }}
              >
                {focused ? "" : "Início"}
              </Text>
            );
          },
        }}
      />
      <Tab.Screen name="Historico_Coleta" component={ScreenHistorico} />
      <Tab.Screen name="Home" component={ScreenHome} />
      <Tab.Screen name="Chat" component={ScreenChat} />
      <Tab.Screen name="Perfil" component={ScreenPerfil} />
    </Tab.Navigator>
  );
}
