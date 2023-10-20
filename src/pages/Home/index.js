import React from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList } from "react-native";
import { useEffect, useState } from "react";
import LinkText from "../../components/LinkText";

import firebase from "../../firebase/firebaseConnection";


export default function ScreenHome() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const clientesRef = firebase.database().ref('NovusStatera/TB_COLETOR');

    clientesRef.once('value')
      .then(snapshot => {
        const data = snapshot.val();
        if (data) {
          const clientesArray = Object.values(data);
          setClientes(clientesArray);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados dos clientes:', error);
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
          data={clientes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Nome: {item.tb_coletor_nome}</Text>
              <Text>E-mail: {item.tb_coletor_email}</Text>
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
    resizeMode: "cover", // Ajuste isso de acordo com sua preferência
  },
});
