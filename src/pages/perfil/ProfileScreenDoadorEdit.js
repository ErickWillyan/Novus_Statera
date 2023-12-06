import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { Avatar, Card } from "react-native-elements";
import ReturnButton from "../../components/ReturnButton";
import CustomTextInput from "../../components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

const ProfileScreenDoadorEdit = () => {
  const Navigation = useNavigation();

  const { user } = useContext(AuthContext);

  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [rua, setRua] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();

  useEffect(() => {
    function listDados() {
      setNome(user.name);
      setTelefone(user.telefone);
      setRua(user.rua);
      setBairro(user.bairro);
      setCidade(user.cidade);
    }

    listDados();
  }, [user]);

  const handleReturnPress = () => {
    Navigation.navigate("ProfileScreenDoador");
  };

  return (
    <View style={styles.container}>
      <View style={styles.returnView}>
        <ReturnButton style={styles.returnButton} onPress={handleReturnPress} />
      </View>
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
      </View>
      <View style={styles.cardContainerInfos}>
        <Text style={styles.editText}>Editar Informações</Text>
        <Text style={styles.nameItem}>{nome}</Text>

        <TextInput style={styles.TextInputItem} value={telefone} placeholder="Telefone" />

        <TextInput style={styles.TextInputItem}  value={rua} placeholder="Rua" />

        <TextInput style={styles.TextInputItem} value={bairro} placeholder="Bairro" />

        <TextInput style={styles.TextInputItem} value={cidade} placeholder="Cidade" />

      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  nameItem:{
    fontSize: 20,
    paddingHorizontal: 80,
    borderBottomWidth: 2,

  },
  editText:{
    fontSize: 20,
    color: "#FF8108",
    borderBottomWidth: 0.5,
  },

  nameContainer: {
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },

  userNome: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    color: '#121212',
  },

  TextInputItem: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: "#FF8108",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",  
  },
  textInputView: {
    borderWidth: 2,
    borderColor: "#33f",
    width: "90%",
    backgroundColor: "#ff5",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -10,
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
    marginTop: -60,
    borderRadius: 40,
    width: "85%",
    height: "13.5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8108",
    borderBottomWidth: 12,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#9D4F05",
  },
  cardContainerInfos: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 40,
    padding: 20,
    borderRadius: 40,
    alignItems: "center",
    height: 450,
    justifyContent: "space-around",
  },
  cardWrapper: {
    borderWidth: 0,
  },
  returnView: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  textInfo: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
    color: "#6E6E6F",
    paddingBottom: 25,
  },
  textType: {
    fontSize: 28,
    color: "gray",
    marginTop: 15,
    textAlign: "center",
    marginTop: 15,
  },
  viewText: {
    marginBottom: 60,
  },
  textEdit: {
    fontSize: 22,
  },
  cardConainerEdit: {
    borderRadius: 20,
  },
  buttonView: {
    marginTop: 40,
  },
  button: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FF8108",
    backgroundColor: "#F2F2F2",
    padding: 10,
    width: 280,
    height: 52,
  },
  buttonText: {
    color: "#FF8108",
    fontSize: 20,
    fontStyle: "normal",
    lineHeight: 24,
    textAlign: "center",
  },
});
export default ProfileScreenDoadorEdit;
