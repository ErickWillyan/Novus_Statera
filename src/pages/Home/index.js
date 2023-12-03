import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import CustomSearchBar from "../../components/CustomSearchbar";
import CardColetor from "../../components/CardColetor";

import { api } from "../../libs/api";

export default function ScreenHome() {
  const [coletores, setColetores] = useState([]);
  // { nome: "erick", endereco: "tanto faz" },
  // { nome: "erick", endereco: "tanto faz" },
  // { nome: "erick", endereco: "tanto faz" },
  // { nome: "erick", endereco: "tanto faz" },
  // { nome: "erick", endereco: "tanto faz" },

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function listar() {
      const response = await api.get("/ListColetores");

      console.log(response.data);

      setColetores(response.data);
    }

    listar();
  }, []);

  return (
    <View style={styles.container}>
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
