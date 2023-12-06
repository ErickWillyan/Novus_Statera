import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

const ProfileScreenDoador = () => {
  const { user, singOut } = useContext(AuthContext);
  const navigation = useNavigation()

  const endereco = `Rua ${user.rua}, ${user.bairro}, ${user.cidade}  `;

  const HandleEditButton = () => {
    navigation.navigate("ProfileScreenDoadorEdit")
  }

  return (
      <View style={styles.container}>
        <Card containerStyle={[styles.cardContainerAvatar, { width: "50%" }]}>
          <View style={styles.avatarContainer}>
            <Avatar
              size="xlarge"
              rounded
              source={require("../../assets/img/Juan.jpg")}
            />
          </View>
        </Card>
        <View style={styles.nameContainer}>
          <Text style={styles.userNome}>{user.name}</Text>
          <Text style={styles.userLocal}>{user.cidade}</Text>
        </View>
        <Card containerStyle={styles.cardContainerDonations}>
          <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
            Já realizou:{" "}
          </Text>
          <Text style={{ fontSize: 28, color: "#058300", textAlign: "center" }}>
            {user.coletasRealizadas} Doações
          </Text>
        </Card>
        <Card containerStyle={styles.cardContainerInfos}>
          <Text style={styles.textType}>Nome de usuário:</Text>
          <Text
            style={[
              styles.textInfo,
              { borderBottomWidth: 1, borderColor: "gray" },
            ]}
          >
            {user.name}
          </Text>

          <Text style={styles.textType}>Registro Geral:</Text>
          <Text
            style={[
              styles.textInfo,
              { borderBottomWidth: 1, borderColor: "gray" },
            ]}
          >
            {user.rg}
          </Text>

          <Text style={styles.textType}>Telefone</Text>
          <Text
            style={[
              styles.textInfo,
              { borderBottomWidth: 1, borderColor: "gray" },
            ]}
          >
            {user.telefone}
          </Text>

          <Text style={styles.textType}>Endereço</Text>
          <Text style={styles.textInfo}>{endereco}</Text>
        </Card>
        <TouchableOpacity style={styles.editButton} onPress={HandleEditButton}>
          <Icon name="edit" size={40} color="#028100" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.exitButton} onPress={singOut}>
          <Icon name="exit-to-app" size={40} color="#028100" />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -10,
  },

  nameContainer: {
    marginTop: "10",
    width: "100%",
  },
  userNome: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  userLocal: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
  cardContainerAvatar: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    elevation: 0,
    shadowColor: "transparent",
    width: "80%",
    height: "40%",
    marginBottom: -140,
  },
  cardContainerDonations: {
    marginTop: 20,
    borderRadius: 50,
    width: "85%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8108",
    borderWidth: 2,
    borderColor: "#FF8108",
  },
  cardContainerInfos: {
    width: "92%",
    height: "410px",
    overflowY: "scroll",
    borderRadius: 40,
  },
  cardWrapper: {
    borderWidth: 0,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  textInfo: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    color: "#6E6E6F",
    paddingBottom: 20,
  },
  textType: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
    textAlign: "center",
    marginTop: 5,
  },
  editButton: {
    position: "absolute",
    top: 10,
    right: 60,
    backgroundColor: "transparent", // ou a cor desejada
    borderRadius: 50,
    padding: 10,
  },
  exitButton: {
    position: "absolute",
    top: 10,
    right: 5,
    backgroundColor: "transparent", // ou a cor desejada
    borderRadius: 50,
    padding: 10,
  },
});
export default ProfileScreenDoador;
