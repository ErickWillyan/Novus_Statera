import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../libs/api";
import ListItem from "../../components/ListItem";
import ListAndamento from "../../components/listAndamento";
import SwichButtons from "../../components/SwitchButtons";

export default function ScreenNotifi() {
  const [feed, setFeed] = useState([ ]);
  const [listType, setListType] = useState()

  const {user} = useContext(AuthContext)

  useEffect(() => {

    
    async function listar() {
    const coletorId = user.coletorId

      const response = await api.get("/ListRelationsColetaPendentes",
      {params:{coletorId}});

      console.log(response.data);

      setFeed(response.data);
    }
    setListType("pendentes")
    listar();
  }, [user]);


  async function setPendentes(){
    const coletorId = user.coletorId

      const response = await api.get("/ListRelationsColetaPendentes",
      {params:{coletorId}});

      console.log(response.data);

      setFeed(response.data);
      setListType("pendentes")
  }
  async function setAndamento(){
    const coletorId = user.coletorId

      const response = await api.get("/ListRelationsColetaAndamento",
      {params:{coletorId}});

      console.log(response.data);

      setFeed(response.data);
      setListType("andamento")
  }

  const HandlePendentesButton = () => {
    setPendentes()
  }
  const HandleAndamentoButton = () => {
    setAndamento()
  }

  const renderComponente = listType === "pendentes";

  return (
    <View style={styles.container}>

    <View style={styles.containerButtons}>
      <TouchableOpacity style={styles.button} onPress={HandlePendentesButton}>
        <Text style={styles.buttonText}>Pendentes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={HandleAndamentoButton}>
        <Text style={styles.buttonText}>Em Andamento</Text>
      </TouchableOpacity>
    </View>
<View style={styles.ViewList}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({ item }) => renderComponente?<ListItem data={item} />:<ListAndamento data={item} /> 
      }
      />
    </View>

</View>
  );
}

const styles = StyleSheet.create({

  ViewList:{
    width: "100%",
    alignItems: "center"
  },
  container: {
    flex: 1,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 50,
   
    backgroundColor: "white",
    elevation: 5
  },
  buttonText: {
    // color: '#ADADAD',
    color: "black",
    textAlign: 'center',
    fontWeight: "500"
  },
});