import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList } from "react-native";
import LinkText from "../../components/LinkText";
import firebase from "../../firebase/firebaseConnection";

export default function ScreenHome() {
  const [coletores, setColetores] = useState([]);

  useEffect(() => {
    const coletoresRef = firebase.database().ref('NovusStatera/TB_COLETOR');

    coletoresRef.once('value')
      .then(snapshot => {
        const data = snapshot.val();
        if (data) {
          const coletoresArray = Object.values(data).slice(0, 5); // Obtém apenas os primeiros 5 coletores
          setColetores(coletoresArray);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados dos coletores:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/background.png")}
        style={styles.backgroundImage}
      >
        <Text>Olá</Text>
        <FlatList
          data={coletores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>Nome: {item.tb_coletor_nome}</Text>
              <Text style={styles.itemText}>E-mail: {item.tb_coletor_email}</Text>
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
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
