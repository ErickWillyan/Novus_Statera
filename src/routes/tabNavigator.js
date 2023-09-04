import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScreenFavoritos from "../screens/favoritos";
import ScreenHistorico from "../screens/historico_coleta";
import ScreenChat from "../screens/chat";
import ScreenHome from "../screens/home";
import ScreenPerfil from "../screens/perfil";

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
