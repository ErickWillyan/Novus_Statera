import React from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./main_routes.routes";

export default function Routes() {
  const singed = true;
  const loading = true;

  if (loading) {
    <View>
      <ActivityIndicator color="#fff" />
    </View>;
  }

  return singed ? <AppRoutes /> : <AuthRoutes />;
}
