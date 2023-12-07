import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { api } from "../../libs/api";
import ReturnButton from "../../components/ReturnButton";

export default function Comprovante() {
  const Route = useRoute();
  const navigation = useNavigation();

  const data = Route.params.dados;

  const nome = data.coleta.doador.name;
  const qnt_oleo = data.coleta.qnt_oleo;
  const dataColeta = data.coleta.dataRealizacao;
  const Rua = data.coleta.Local.rua;
  const Bairro = data.coleta.Local.bairro;
  const Cidade = data.coleta.Local.cidade;
  const Number = data.coleta.Local.number;
  const Complemento = data.coleta.Local.Complemento;

  const isComplemento = !!Complemento;

  const endereco = `Rua ${Rua} ${Number}, ${Bairro}, ${Cidade}`;

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

  async function upColetaRealizadaColetor() {
    const id  = data.coletor.Users[0].id;
    
    const coletasRealizadas = data.coletor.Users[0].coletasRealizadas + 1;

    await api.post("/users/upColetaColetor", { id, coletasRealizadas });

  }
  async function upColetaRealizadaDoador() {
    const coletasRealizadas = data.coleta.doador.Users[0].coletasRealizadas + 1;
    const id = data.coleta.doador.Users[0].id;

    await api.post("/users/upColetaDoador", { id, coletasRealizadas });
    
  }

  const handleOnPressReturnButton = () => {
    navigation.navigate("TabBar", {
      screen: "Notificacaoes",
    });
  };

  const HandleRealizarColeta = () => {
    FinalColeta().then(FinalRelationsColeta());
    upColetaRealizadaColetor();
    upColetaRealizadaDoador();
    console.log("Coleta Realizada");
    navigation.navigate("TabBar", { screen: "Notificacaoes" });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity>
          <ReturnButton onPress={handleOnPressReturnButton} />
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.contentTextos}>
                <View style={styles.containerDados}>
                  <Text style={[styles.text, styles.textDoador]}>
                    Nome do doador:{" "}
                  </Text>
                  <Text style={styles.text}>{nome}</Text>
                </View>

                <Text style={styles.text}>Endereço: {endereco}</Text>

                <Text style={styles.text}>
                  Quantidade de óleo coletada: {qnt_oleo} litros
                </Text>

                {isComplemento ? (
                  <Text style={styles.text}>Complemento: {Complemento}</Text>
                ) : null}

                <Text style={styles.text}>Data da coleta: {dataColeta}</Text>
              </View>
            </View>
          </View>

          <View style={styles.botaoContainer}>
            <TouchableOpacity
              style={styles.confirmar}
              onPress={HandleRealizarColeta}
            >
              <Text style={styles.textConfirmar}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 40,
  },
  cardContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Cor de fundo mais escura para o card
    borderRadius: 10, // Borda do card
    marginHorizontal: 10, // Espaço vertical ao redor do card
  },
  card: {
    padding: 20, // Espaçamento interno do card
  },
  contentTextos: {
    marginRight: 30,
  },
  containerDados: {
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
  },
  textColetor: {
    color: "#2E872E",
  },
  textDoador: {
    color: "#DAA520",
  },
  confirmar: {
    backgroundColor: "#2E872E",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
    borderRadius: 60,
  },
  textConfirmar: {
    color: "#FFF",
    fontSize: 30,
  },
  botaoContainer: {
    alignItems: "center",
    marginTop: "17%",
  },
});
