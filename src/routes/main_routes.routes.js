import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import Teste from "./../pages/Teste"

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
        name="Teste"
        component={Teste}
        options={{
          headerShown: false,
        }}
      />

      
    </Stack.Navigator>
  );
}
