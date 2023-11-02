import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, FlatList } from "react-native";
import firebase from "../../firebase/firebaseConnection";
import CustomSearchBar from "../../components/CustomSearchbar";

export default function ScreenHome() {
  const [coletores, setColetores] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const coletoresRef = firebase.database().ref('NovusStatera/TB_COLETOR/tb_coletor_nome');

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
      <CustomSearchBar // Substituído o nome da SearchBar
        placeholder="Digite o nome do coletor"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <FlatList
        data={filteredColetores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Nome: {item}</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
