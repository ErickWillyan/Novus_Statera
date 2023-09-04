import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tabNavigator";

const Stack = createStackNavigator();

export default function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabBar"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"TabBar"} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
