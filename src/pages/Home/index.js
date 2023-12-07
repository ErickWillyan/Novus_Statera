import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList, } from "react-native";
import CustomSearchBar from "../../components/CustomSearchbar";
import CardColetor from "../../components/CardColetor";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../libs/api";



export default function ScreenHome() {


  const [coletores, setColetores] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user } = useContext(AuthContext);
  const type = user.type;

  useEffect(() => {
    async function listar() {
      const response = await api.get("/ListColetores");

      console.log(response.data);

      setColetores(response.data);
    }

    console.log(user);
    listar();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: "cover",
      alignItems: "center",
    },
  });


if(type==="doador"){
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
        renderItem={({ item }) => (
          <CardColetor style={styles.card} data={item} />
        )}
      />
    </View>
  );
}
/////////////////////////////////////////// MENU COLETOR ABAIXO ///////////////////////////////////////////
else{
  return (
    <ImageBackground
        source={require("../../assets/img/background.png")}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
    </ImageBackground>   
  );
};
}
