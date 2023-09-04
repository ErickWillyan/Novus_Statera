import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScreenFavoritos from "../pages/favoritos";
import ScreenHistorico from "../pages/historico_coleta";
import ScreenChat from "../pages/chat";
import ScreenHome from "../pages/Home";
import ScreenPerfil from "../pages/perfil";

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
