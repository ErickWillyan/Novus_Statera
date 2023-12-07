import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/FontAwesome";
import { api } from "../libs/api";

export default function ListAndamento({ data }) {

  const navigation = useNavigation();

  async function FinalColeta() {
    const dados = data.coleta.id;

    const coletaId = dados;
    await api.put("/coleta/finalColeta", { coletaId });
  }

  async function FinalRelationsColeta() {
    const { id } = data;

    const relationId = id;
    await api.put("/relationsColeta/finalColeta", { relationId });
  }

  const handleAcceptButton = () => {
    // FinalColeta().then(
    //   FinalRelationsColeta().then(console.log("Coleta Realizada"))
    // );

    console.log("Clicou nop botão")
  };

  const HandlePressable = () => {
    console.log("Clicou")
    navigation.navigate("RealizarColeta", {dados: data})
  }

  return (
    <Pressable onPress={HandlePressable}>
      <View style={styles.areaPessoa}>
        <View style={styles.areaRow}>
          <View style={styles.areaTextos}>
            <Text style={styles.textoNome}>{data.coleta.doador.name}</Text>
            <Text style={styles.textoSolicitou}>Coleta agendada por:</Text>
            <Text style={styles.textoCidade}>{data.coleta.Local.cidade}</Text>
            <View style={styles.iconContainer}>
              <View style={styles.circunferencia}></View>
              <Text style={styles.textoInfo}>{data.coleta.dataRealizacao}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="tint" size={20} color="#FF8108" />
              <Text style={styles.textoInfo}>
                {" "}
                {data.coleta.qnt_oleo} Litros de óleo disponíveis
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: "#ADADAD",
    marginBottom: 3,
  },
  textoNome: {
    color: "#0F0F0F",
    fontSize: 20,
    textTransform: "uppercase",
  },
  textoSolicitou: {
    color: "#2E872E",
  },
  textoCidade: {
    color: "#0F0F0F",
    fontSize: 19,
  },
  textoInfo: {
    color: "#3F3F3E",
    fontSize: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  botao: {
    width: 100,
    height: 35,
    padding: 8,
    borderRadius: 10,
  },
  buttonConfirmar: {
    backgroundColor: "#4CAF50",
    marginRight: 60,
    marginLeft: 40,
  },
  buttonNegar: {
    backgroundColor: "#AF504C",
    marginRight: 40,
    marginLeft: 60,
  },
  textoBotao: {
    textAlign: "center",
    color: "#FFF",
  },
  areaRow: {
    flexDirection: "row",
  },
  areaTextos: {
    marginLeft: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circunferencia: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#32CD32",
    marginRight: 8,
  },
});
