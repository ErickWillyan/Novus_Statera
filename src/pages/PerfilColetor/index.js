import React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import Favorito from "../../components/Favorito";
import ColetorInfo from "../../components/ColetorInfo";
import { FontAwesome } from '@expo/vector-icons';
import Calendario from "../../components/Calendario";
import NumberSelector from "../../components/NumberSelector";
import ManualTimePicker from "../../components/ManualTimePicker";
import CustomDropDown from "../../components/CustomDropDown";
import CustoButton from "../../components/CustomButton";
import CustomButton from "../../components/CustomButton";

export default function ScreenPerfilColetor({ route }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const dropdownOptions = [
    { label: 'Local1', value: 'Local1' },
    { label: 'Local2', value: 'Local2' },
    { label: 'Local3', value: 'Local3' },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleDropdownChange = (value) => {
    setSelectedOption(value);
    console.log('Opção Selecionada:', value);
  };

  const handleTimeSelected = (time) => {
    console.log('Tempo selecionado:', time);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/Juan.jpg")}
        style={styles.profileImage}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{ right: '280%' }}>
          <ReturnButton />
        </TouchableOpacity>
        <TouchableOpacity style={{ left: '260%' }} onPress={() => setModalOpen(true)}>
          <FontAwesome name="calendar" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{`Nome`}</Text>
        <Text style={styles.endereco}>{`Endereço`}</Text>
      </View>
      <View style={styles.FavContainer}>
        <Favorito />
      </View>
      <View style={{ top: 250 }}>
        <ColetorInfo style={styles.card} coletas="125" avaliacao={1.5} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
  modalContentContainer: {
    flexGrow: 1,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalBody: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modalSection: {
    marginBottom: 10,
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImage: {
    width: '101%',
    height: 410,
    top: -2,
    borderWidth: 2,
    borderColor: "white",
    position: "absolute"
  },
  buttonContainer: {
    position: "absolute",
    top: 20,
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    position: "absolute",
    left: 5,
    bottom: 200
  },
  FavContainer: {
    position: "absolute",
    bottom: 240,
    right: 10
  },
  nome: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
  },
  endereco: {
    color: "grey",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    bottom: "10",
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
