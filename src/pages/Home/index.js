import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList } from "react-native";
import firebase from "../../firebase/firebaseConnection";
import CustomSearchBar from "../../components/CustomSearchbar";
import CardColetor from "../../components/CardColetor";

export default function ScreenHome() {
  const [coletores, setColetores] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const coletoresRef = firebase.database().ref('NovusStatera/TB_USER/tb_user_nome');

    coletoresRef.once('value')
      .then(snapshot => {
        const data = snapshot.val();
        if (data) {
          const coletoresArray = Object.values(data);
          setColetores(coletoresArray);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados dos coletores:', error);
      });
  }, []);

  const filteredColetores = coletores.filter(coletor =>
    coletor.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={styles.container}
    >
      <CustomSearchBar
        placeholder="Digite o nome do coletor"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredColetores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardColetor
            nome={item}
            endereco={getDataEndereco(item, coletores)}
          />
        )}
      />
    </ImageBackground>
  );
}

// Função para obter o endereço do array tb_user_endereço
function getDataEndereco(nomeColetor, coletores) {
  // Verifica se os arrays tb_user_nome e tb_user_endereço existem
  if (coletores['tb_user_nome'] && coletores['tb_user_endereço']) {
    // Obtém o índice do nome no array tb_user_nome
    const nomeIndex = coletores['tb_user_nome'].indexOf(nomeColetor);

    // Se o nome for encontrado, use o índice para obter o endereço correspondente
    if (nomeIndex !== -1) {
      const endereco = coletores['tb_user_endereço'][nomeIndex];
      return endereco || ''; // Retorna o endereço se existir, caso contrário, retorna uma string vazia
    }
  }

  return '';
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
});