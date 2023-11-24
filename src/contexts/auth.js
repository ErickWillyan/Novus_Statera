import React, { useState, createContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage"

import { api }  from "../libs/api"


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    rg: '',
    telefone: '',
    type: '',
    token: ''
  });

  const isAuthenticated = !!user.name;

    async function singIn({ email, password}) {

try {
  const response = await api.post("/session", {email, password});

  const { id,name,email,rg,telefone,type,token} = response.data;

  const data ={
    ...response.data
  }

  await AsyncStorage.setItem('@novusstatera', JSON.stringify(data));

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  setUser
  ({id,
    name,
    email,
    rg,
    telefone,
    type,
    token})

  
} catch (error) {
  console.log("erro ao acessar", error)
}
   
  }



  return (
    <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}
