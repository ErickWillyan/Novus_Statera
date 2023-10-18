import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./main_routes.routes";

import { AuthContext } from "../contexts/auth";

export default function Routes() {
<<<<<<< HEAD
  const singed = false;
  const loading = false;
=======
  const { singed } = useContext(AuthContext);
  const loading = true;
>>>>>>> 939b6fc71c22381e7dc5103d3898f42a746fe7be

  if (loading) {
    return(
    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
      <ActivityIndicator size={50} color="#008100" />
    </View>

    )
  }

  return singed ? <AppRoutes /> : <AuthRoutes />;
}
