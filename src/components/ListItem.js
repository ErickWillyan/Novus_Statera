import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { api } from "../libs/api";
import { Ionicons } from '@expo/vector-icons';

export default function ListItem({ data }) {

  const dataRealizacao = new Date(data.coleta.dataRealizacao)

  const dia = dataRealizacao.getDay()
  const mesesAbreviados = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const mesAbreviado = mesesAbreviados[dataRealizacao.getMonth()];
  const ano = dataRealizacao.getFullYear();
  const horas = dataRealizacao.getHours();
  const minutos = dataRealizacao.getMinutes();
  const diaFormatado = dia < 10 ? `0${dia}` : dia;
  const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;



  async function acceptColeta() {
    const dados = data.coleta.id;

    const coletaId = dados;
    await api.put("/coleta/acceptColeta", { coletaId });
  }

  async function acceptRelationsColeta() {
    const { id } = data;

    const relationId = id;
    await api.put("/relationsColeta/acceptColeta", { relationId });
  }

  async function DeleteColeta() {
    const id = data.coleta.id;
    await api.delete("/coleta/DeleteColeta", {
      params: { coletaId: id },
    });
  }

  async function DeleteRelationsColeta() {
    const id = data.id;
    await api.delete("/relationsColeta/DeleteColeta", {
      params: { relationId: id },
    });
  }

  const handleAcceptButton = () => {
    acceptColeta().then(
      acceptRelationsColeta().then(console.log("Coleta aceita"))
    );
  };

  const handleDeleteButton = () => {
    DeleteColeta().then(
      DeleteRelationsColeta().then(console.log("Coleta Deletada"))
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.ViewText}>
        <Text style={styles.textoName}>{data.coleta.doador.name}</Text>
        <Text style={styles.textoCidade}>
          Rua {data.coleta.Local.rua}- {data.coleta.Local.cidade}
        </Text>
        <Text style={styles.textoOleo}>
          <Ionicons name="water-sharp" size={16} color="#FF8108" />{data.coleta.qnt_oleo} L   
          <Text style={styles.dataHora}>
          {" "} {diaFormatado}{" "}{mesAbreviado} {horas}:{minutosFormatados}
        </Text>
        </Text>

        
      </View>
      <View style={styles.ViewButtons}>
        <TouchableOpacity
          style={styles.botao}
          onPress={handleDeleteButton}
        >
        <Ionicons name="close" size={32} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={handleAcceptButton}
        >
         <Ionicons name="checkmark-sharp" size={32} color="green" />
        </TouchableOpacity>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 110,
    width: "80%",
    marginVertical: 20,
    marginHorizontal: 10,
    minWidth: 380,
    maxWidth: "95%",
    borderRadius: 48,
    backgroundColor: "white",
    elevation: 5,
  },
  ViewText: {
    marginLeft: 30,
    maxWidth: "50%",
  },
  textoName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ADADAD",
  },

  ViewButtons:{
    marginRight:20,
    flexDirection: 'row',
    width: "32%",
    justifyContent: "space-between"
  },

  botao:{
    backgroundColor: "white",
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 5,
  },

  textoCidade:{
      fontSize: 15,
  },
  textoOleo:{
    alignItems: "center",
    fontSize: 16,
  },
  dataHora:{
    color: "gray",
    fontSize: 16,
  }

  
});
