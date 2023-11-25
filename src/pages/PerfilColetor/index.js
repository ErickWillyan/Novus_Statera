import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import Favorito from "../../components/Favorito";
import ColetorInfo from "../../components/ColetorInfo";
import Calendario from "../../components/Calendario";
import NumberSelector from "../../components/NumberSelector";
import ManualTimePicker from "../../components/ManualTimePicker";

export default function ScreenPerfilColetor({ route }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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
      <Modal style={styles.modal} visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
              <ReturnButton onPress={closeModal} />
              <Text style={styles.modalTitle}>Agendar Coleta</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Selecione um dia</Text>
                <Calendario />
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quantidade de óleo</Text>
                <NumberSelector />
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Horário para Coleta</Text>
                <ManualTimePicker onTimeSelected={handleTimeSelected} />
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      {/* Restante do código permanece o mesmo */}
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
  scrollContainer: {
    flexGrow: 1,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
