import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./main_routes.routes";

import { AuthContext } from "../contexts/auth";

export default function Routes() {
  const { isAuthenticated } = useContext(AuthContext);
  const loading = false;


  if (loading) {
    return(
    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
      <ActivityIndicator size={50} color="#008100" />
    </View>

    )
  }
  
  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
