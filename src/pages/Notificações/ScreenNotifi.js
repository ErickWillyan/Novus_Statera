import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../libs/api";
import ListItem from "./ListItem";

export default function ScreenNotifi() {
  const [feed, setFeed] = useState([
    // {id: '1', nome: 'Mário da Silva de Jesus', cidade: 'Santana de Parnaíba - SP', data: '09 de dezembro, às 13h30', quantidade: '2'},
    // {id: '2', nome: 'Rafael Martis Araújo', cidade: 'Santana de Parnaíba - SP', data: '13 de dezembro, às 15h10', quantidade: '4'},
    // {id: '3', nome: 'Renan Costa Pereira', cidade: 'Barueri - SP', data: '10 de dezembro, às 14h00', quantidade: '2'},
    // {id: '4', nome: 'Michael Jackson', cidade: 'Cajamar - SP', data: '8 de dezembro, às 16h30', quantidade: '3'},
    // {id: '5', nome: 'Erick Willyan dos Santos Cruz', cidade: 'Santana de Parnaíba - SP', data: '02 de janeiro, às 12h30', quantidade: '5'},
    // {id: '6', nome: 'Guilherme Lima Seredko', cidade: 'Santana de Parnaíba - SP', data: '30 de fevereiro, às 11h00', quantidade: '2' },
  ]);

  const {user} = useContext(AuthContext)

  useEffect(() => {

    
    async function listar() {
    const coletorId = user.coletorId

      const response = await api.get("/ListRelationsColetaPendentes",
      {params:{coletorId}});

      console.log(response.data);

      setFeed(response.data);
    }

    listar();
  }, [user]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({ item }) => <ListItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
