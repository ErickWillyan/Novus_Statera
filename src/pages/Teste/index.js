import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { api } from "../../libs/api";

import { useRoute } from "@react-navigation/native";

export default function Teste() {
  const route = useRoute();
  const userId = route.params.userId;
  const [user, setUser] = useState({});

  useEffect(() => {
    async function DetailColetor() {
      const response = await api.get("/DetailColetor", {
        params: { userId: userId },
      });

      setUser(response);
    }

    DetailColetor();
  }, [userId]);

  return (
    <View>
      <Text>{route.params.userId}</Text>
      <Text>{user.name}</Text>
      <Text>{user.telefone}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}
