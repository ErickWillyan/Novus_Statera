import React from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./main_routes.routes";

export default function Routes() {
  const singed = false;
  const loading = false;

  if (loading) {
    return(
    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
      <ActivityIndicator size={50} color="#008100" />
    </View>

    )
  }

  return singed ? <AppRoutes /> : <AuthRoutes />;
}
