import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardColetor = ({ data }) => {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("PerfilColetor", { coletorId: data.id });
  }

  return (
    <Pressable style={styles.card} onPress={handleNavigation}>
      <View style={styles.circleContainer}>
        <Image
          source={require("../assets/img/Juan.jpg")}
          style={styles.profileImage}
        />
      </View>
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
    backgroundColor: "transparent", 
    width: 350,
    height: 109,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    overflow: "hidden",
    marginBottom: 15,
    marginTop: 30,
    position: "relative",
    borderColor: "#0FA958", 
    borderWidth: 1, 
  },
  circleContainer: {
    position: "absolute",
    left: "0%",
    top: "9%",
    transform: [{ translateY: -12 }],
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 110,
    borderRadius: 10000,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nomeText: {
    top: "-0%",
    left: "8%",
    fontSize: 18,
    marginLeft:"12%",
    color: "#808080", 
  },
  enderecoText: {
    fontSize: 16,
    color: "white",
    top: "-0%",
    left: "10%",
    color: "black"
  },
});

export default CardColetor;
