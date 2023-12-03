<<<<<<< HEAD
import React,{useState, useEffect, useContext} from "react";
import {View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,} from "react-native";
import CustomSearchBar from "../../components/CustomSearchbar";
import CardColetor from "../../components/CardColetor";
=======
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CardColeta from "../../components/CardColeta";
>>>>>>> 8405de37494f9f0a4ea03dca4c9140fbba7869af

import { AuthContext } from "../../contexts/auth";

import { api } from "../../libs/api";

export default function ScreenHome() {
  const [coletores, setColetores] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user} = useContext(AuthContext)

  useEffect(() => {
    async function listar() {
      const response = await api.get("/ListColetores");

      console.log(response.data);

      setColetores(response.data);
    }

    console.log(user)
    listar();
  }, []);

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <CustomSearchBar
        placeholder="Digite o nome do coletor"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={coletores}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CardColetor
            style={styles.card}
            data={item}
          />
        )}
      />
=======
      <ImageBackground
        source={require("../../assets/img/background.png")}
        style={styles.backgroundImage}
      >
      </ImageBackground>
>>>>>>> 8405de37494f9f0a4ea03dca4c9140fbba7869af
    </View>
  );
}

// Função para obter o endereço do array tb_user_endereç

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
});
