import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function ScreenPerfil() {

  const { singOut } = useContext(AuthContext);


  
  return (
    <View>
      <Text> Tela Perfil</Text>
      <TouchableOpacity 
        
      style = {{padding:50, backgroundColor:"#f456"}}
      onPress={singOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
