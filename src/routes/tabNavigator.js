import React, {useState, useContext}  from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"
import ScreenFavoritos from "../pages/favoritos";
import ScreenHistorico from "../pages/historico_coleta";
import ScreenChat from "../pages/chat";
import ScreenHome from "../pages/Home";
import ProfileScreenDoador from "../pages/perfil/ProfileScreenDoador";
import ProfileScreenDoadorEdit from "../pages/perfil/ProfileScreenDoadorEdit";
import ScreenLogin from "../pages/login";
import ScreenNotifi from "../pages/notificacoes/Index";
import { AuthContext } from "../contexts/auth";


const Tab = createBottomTabNavigator();

export default function Routes() {

  const {user} = useContext (AuthContext);
  const type = user.type;

  if(type==="doador"){

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#0FA958",
        tabBarInactiveTintColor: "#0FA958",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Favoritos"
        component={ScreenFavoritos}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="heart" size={size} color={color} />;
            }
            return <Ionicons name="heart-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Historico_Coleta"
        component={ScreenHistorico}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="reader" size={size} color={color} />;
            }
            return <Ionicons name="reader-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={ScreenHome}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="home" size={(size = 35)} color={color} />;
            }
            return (
              <Ionicons name="home-outline" size={(size = 35)} color={color} />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ScreenChat}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="chatbubbles" size={size} color={color} />;
            }
            return (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreenDoador}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
/////////////////////////////////////////// ROTA DO COLETOR ABAIXO ///////////////////////////////////////////
else{
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#0FA958",
        tabBarInactiveTintColor: "#0FA958",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Notificacoes"
        component={ScreenNotifi}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="notifications" size={size} color={color} />;
            }
            return <Ionicons name="notifications-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Historico_Coleta"
        component={ScreenHistorico}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="reader" size={size} color={color} />;
            }
            return <Ionicons name="reader-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={ScreenHome}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="home" size={(size = 35)} color={color} />;
            }
            return (
              <Ionicons name="home-outline" size={(size = 35)} color={color} />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ScreenChat}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="chatbubbles" size={size} color={color} />;
            }
            return (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreenDoador}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            size = 30;
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
}
