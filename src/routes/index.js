import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./main_routes.routes";

import { AuthContext } from "../contexts/auth";

export default function Routes() {
  const { singed } = useContext(AuthContext);
  const loading = true;

  if (loading) {
    <View>
      <ActivityIndicator color="#fff" />
    </View>;
  }

  return singed ? <AppRoutes /> : <AuthRoutes />;
}
