<<<<<<< HEAD
import React from "react";
import { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReturnButton from "../../components/ReturnButton";
import Favorito from "../../components/Favorito";
import ColetorInfo from "../../components/ColetorInfo";
import Calendario from "../../components/Calendario";
import NumberSelector from "../../components/NumberSelector";
import ManualTimePicker from "../../components/ManualTimePicker";
import CustomDropDown from "../../components/CustomDropDown";
import CustomButton from "../../components/CustomButton";
import { AuthContext } from "../../contexts/auth";
=======
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import ReturnButton from "../../components/ReturnButton";
import Favorito from "../../components/Favorito";
import ColetorInfo from "../../components/ColetorInfo";
>>>>>>> 8405de37494f9f0a4ea03dca4c9140fbba7869af

import { api } from "../../libs/api";

import { useRoute } from "@react-navigation/native";

export default function ScreenPerfilColetor() {
  const navigation = useNavigation();
  const route = useRoute();
  const [coletor, setColetor] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
<<<<<<< HEAD
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState({});
  const [qntOleo, setQntOleo] = useState();
  const [time, setTime] = useState();

  const { user } = useContext(AuthContext);

  const userId = user.id;

  useEffect(() => {
    async function DetailColetor() {
      const response = await api.get("/DetailColetor", {
        params: { user_id: route.params.coletorId },
      });

      setColetor(response.data);
    }

    async function ListLocal() {
      const response = await api.get("/listLocal", {
        params: { doadorId: user.doadorId },
      });

      const formattedData = response.data.map((item) => ({
        label: item.name,
        value: item.id,
      }));

      setDropdownOptions(formattedData);
    }

    console.log(userId);
    DetailColetor();
    ListLocal();
  }, [route.params.coletorId, user]);

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
    console.log("Opção Selecionada:", value.id);
  };

  function HandleLocal() {
    navigation.navigate("RegisterLocal", { coletorId: route.params.coletorId });
  }

  const openModal = () => {
    setModalOpen(true);
    console.log("Você clicou", modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleTimeSelected = (time) => {
    setTime(time);
  };

  const handleSelectedDate = (date) => {
    const horario = { horario: "15:00" };
    const data = { ...date, ...horario };

    const [ano, mes, dia] = data.dateString.split("-");
    const [hora, minuto] = data.horario.split(":");

    const dataHoraFormatadaUTC = new Date(
      Date.UTC(ano, mes - 1, dia, hora, minuto)
    );

    const dataHoraISO = dataHoraFormatadaUTC.toISOString();

    setDate(dataHoraISO);
  };

  const handleSelectedQntoleo = (qntOleo) => {
    setQntOleo(qntOleo);
  };

  const RegisterRelationsColeta = async (data) => {
    await api.post("RegisterRelationsColeta", data);
  };

  const RegisterColeta = async () => {
    const coletorId = coletor.coletorId;

    const doadorId = user.doadorId;

    const localId = selectedOption;

    const dataRealizacao = date;

    const qnt_oleo = qntOleo;

    const response = await api.post("RegisterColeta", {
      dataRealizacao,
      qnt_oleo,
      doadorId,
      localId,
    });

    const { id } = response.data;

    const coletaId = id;

    const data = {
      coletorId,
      coletaId,
    };

    RegisterRelationsColeta(data);
  };

  const handleOnPress = () => {
    
    RegisterColeta().then(() =>{
      console.log("Coleta cadastrada")
    })
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
                <Calendario onDatePress={handleSelectedDate} />
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quantidade de óleo</Text>
                <NumberSelector onNumberPress={handleSelectedQntoleo} />
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Adicionar Horário de coleta
                </Text>
                <ManualTimePicker onTimeSelected={handleTimeSelected} />
              </View>
              <View style={styles.section}>
                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Local da coleta</Text>
                </View>
                <View style={styles.sectionContent}>
                  <CustomDropDown
                    options={dropdownOptions}
                    onChange={handleDropdownChange}
                  />
                  <CustomButton
                    title="+"
                    customWidth={40}
                    onPress={HandleLocal}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    justifyContent: "space-between",
                    marginTop: 30,
                  }}
                >
                  <CustomButton
                    title="Confirmar agendamento"
                    customWidth={300}
                    onPress={handleOnPress}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      {/* Tela perfil */}
      <Image
        source={require("../../assets/img/Juan.jpg")}
        style={styles.profileImage}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{ right: "250%" }}>
          <ReturnButton />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ left: "250%" }}
          onPress={() => setModalOpen(true)}
        >
          <Text>Agendar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{coletor.name}</Text>
        <Text style={styles.endereco}>{coletor.telefone}</Text>
      </View>
      <View style={styles.FavContainer}>
        <Favorito />
      </View>
      <View style={{ top: 250 }}>
        <ColetorInfo style={styles.card} coletas="125" avaliacao={1.5} />
      </View>
    </View>
=======

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
>>>>>>> 8405de37494f9f0a4ea03dca4c9140fbba7869af
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 0,
  },
  modalContentContainer: {
=======
  scrollViewContainer: {
>>>>>>> 8405de37494f9f0a4ea03dca4c9140fbba7869af
    flexGrow: 1,
  },
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  modalBody: {
    flex: 1,
    justifyContent: "space-between",
  },
  modalSection: {
    marginBottom: 10,
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
=======
    justifyContent: 'center',
    alignItems: 'center',
>>>>>>> 8405de37494f9f0a4ea03dca4c9140fbba7869af
  },
  profileImage: {
    width: "101%",
    height: 410,
    borderWidth: 2,
<<<<<<< HEAD
    borderColor: "white",
    position: "absolute",
=======
    borderColor: 'white',
    position: 'absolute',
    top: 0,
>>>>>>> 8405de37494f9f0a4ea03dca4c9140fbba7869af
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
<<<<<<< HEAD
    position: "absolute",
    left: 5,
    bottom: 200,
  },
  FavContainer: {
    position: "absolute",
    bottom: 240,
    right: 10,
=======
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
>>>>>>> 8405de37494f9f0a4ea03dca4c9140fbba7869af
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
