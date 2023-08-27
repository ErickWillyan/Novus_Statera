import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScreenFavoritos from "/src/screens/Favoritos";
import ScreenHistorico from "/src/screens/historico_coleta";
import ScreenChat from "/src/screens/chat";
import ScreenHome from "/src/screens/home";
import ScreenPerfil from "/src/screens/perfil";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favoritos" component={ScreenFavoritos} />
      <Tab.Screen name="Historico_Coleta" component={ScreenHistorico} />
      <Tab.Screen name="Home" component={ScreenHome} />
      <Tab.Screen name="Chat" component={ScreenChat} />
      <Tab.Screen name="Perfil" component={ScreenPerfil} />
    </Tab.Navigator>
  );
}
