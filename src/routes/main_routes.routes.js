import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import PerfilColetor from "./../pages/PerfilColetor";
import RegisterLocal from "./../pages/PontoColeta";
import ProfileScreenDoadorEdit from "../pages/perfil/ProfileScreenDoadorEdit";
import ProfileScreenDoador from "../pages/perfil/ProfileScreenDoador";


const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabBar"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PerfilColetor"
        component={PerfilColetor}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RegisterLocal"
        component={RegisterLocal}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProfileScreenDoadorEdit"
        component={ProfileScreenDoadorEdit}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProfileScreenDoador"
        component={ProfileScreenDoador}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
