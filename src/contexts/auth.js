
import React, { useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../libs/api";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const navigation = useNavigation();
  const [user, setUser] = useState({

    id: "",
    name: "w",
    email: "",
    rg: "",
    telefone: "",
    rua: "",
    bairro: "",
    cidade: "",
    coletasRealizadas: 0,
    coletorId: "",
    doadorId: "",
    type: "",
    token: "",
  });

  const isAuthenticated = !!user.name;

  useEffect(() => {
    async function getUser() {
      const userInfo = await AsyncStorage.getItem("@novusstatera");

      let hasUser = JSON.parse(userInfo || "{}");

      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${hasUser.token}`;

        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          rg: hasUser.rg,
          rua: hasUser.rua,
          bairro: hasUser.bairro,
          cidade: hasUser.cidade,
          coletorId: hasUser.coletorId,
          doadorId: hasUser.doadorId,
          telefone: hasUser.telefone,
          coletasRealizadas:hasUser.coletasRealizadas,
          type: hasUser.type,
          token: hasUser.token,
        });
      }
    }
    console.log(user);
    getUser();
  }, []);

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });

      const {
        id,
        name,
        rg,
        telefone,
        rua,
        bairro,
        cidade,
        coletasRealizadas,
        coletorId,
        doadorId,
        type,
        token,
      } = response.data;

      const data = {
        ...response.data,
      };

      await AsyncStorage.setItem("@novusstatera", JSON.stringify(data));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser({
        id,
        name,
        rg,
        telefone,
        rua,
        bairro,
        cidade,
        coletasRealizadas,
        coletorId,
        doadorId,
        type,
        token,
      });
    } catch (err) {
      console.log("erro ao acessar", err);
    }
  }

  async function singOut() {
    await AsyncStorage.clear().then(() => {
      setUser({
        id: "",
        name: "",
        email: "",
        rg: "",
        telefone: "",
        rua: "",
        bairro: "",
        cidade: "",
        coletasRealizadas: 0,
        coletorId: "",
        doadorId: "",
        type: "",
        token: "",
      });
    });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}
