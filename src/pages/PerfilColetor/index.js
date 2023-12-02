import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import ReturnButton from "../../components/ReturnButton";
import Favorito from "../../components/Favorito";
import ColetorInfo from "../../components/ColetorInfo";

export default function ScreenPerfilColetor({ route }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/img/Juan.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <ReturnButton />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
            <FontAwesome name="calendar" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.nome}>{`Nome`}</Text>
            <Text style={styles.endereco}>{`Endereço`}</Text>
          </View>
          <TouchableOpacity style={styles.favoritoContainer}>
            <Favorito />
          </TouchableOpacity>
        </View>
        <View style={styles.coletorInfoContainer}>
          <ColetorInfo style={styles.card} coletas="125" avaliacao={1.5} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '101%',
    height: 410,
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    top: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    top: 450,
  },
  textContainer: {
    width: '70%',
  },
  favoritoContainer: {
    width: '30%',
    alignItems: 'flex-end',
    marginTop: -20,
  },
  coletorInfoContainer: {
    position: 'absolute',
    top: 580,
  },
  nome: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  endereco: {
    color: 'grey',
    fontSize: 36,
    fontWeight: 'bold',
  },
  card: {
    bottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
