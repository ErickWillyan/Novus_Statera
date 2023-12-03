import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

import {useNavigation} from "@react-navigation/native"



const CardColetor = ({data}) => {

  const navigation = useNavigation();

  function HandleNavigation(){
      navigation.navigate("Teste", {userId: data.id})

  }

  return (
    <Pressable style={styles.card} onPress={HandleNavigation}>
      <View style={styles.infoContainer}>
        <Text style={styles.nomeText}>{data.name}</Text>
        <Text style={styles.enderecoText}>{data.telefone}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 50,
    backgroundColor: "#0FA958",
    width: 350,
    height: 109,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    overflow: "hidden",
    marginBottom: 15,
    marginTop: 30,
  },
  profileImageWrapper: {
    width: 109,
    height: 109,
    borderRadius: 50,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nomeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000", // Cor preta
  },
  enderecoText: {
    fontSize: 14,
    color: "white",
  },
});

export default CardColetor;
