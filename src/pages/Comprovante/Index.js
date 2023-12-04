import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/Header';

export default function Comprovante() {

const [infos, setInfos] = useState({
    id: '15237945843452',
    endereco: 'Rua jubirubas, Jadrim São Luís, Santana de Parnaíba - SP',
    qntd: '2',
    data: '09 de dezembro de 2023, as 13:30',
    doador: 'Mário da Silva de Jesus',
    coletor: 'André do Carmo Linares',
    status: '1',
})

return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.contentTextos}>

                <Text style={styles.text}>Chave de identificação da coleta: {infos.id}</Text>

                <Text style={styles.text}>Endereço: {infos.endereco}</Text>

                <Text style={styles.text}>Quantidade de óleo coletada: {infos.qntd} litros</Text>
                
                <Text style={styles.text}>Data da coleta: {infos.data}</Text>

                <View style={styles.containerDados}>
                  <Text style={[styles.text, styles.textDoador]}>Nome do doador: </Text>
                  <Text style={styles.text}>{infos.doador}</Text>
                </View>

                <View style={styles.containerDados}>
                  <Text style={[styles.text, styles.textColetor]}>Nome do coletor: </Text>
                  <Text style={styles.text}>{infos.coletor}</Text>
                </View>

              </View>
            </View>
          </View>

          <View style={styles.botaoContainer}>
            <TouchableOpacity style={styles.confirmar}>
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
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Cor de fundo mais escura para o card
        borderRadius: 10, // Borda do card
        marginHorizontal: 10, // Espaço vertical ao redor do card
      },
      card: {
        padding: 20, // Espaçamento interno do card
      },
    contentTextos:{
        marginRight: 30,
    },
    containerDados: {
        flexDirection:  'row',
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    textColetor: {
        color: '#2E872E',
    },
    textDoador: {
        color: '#DAA520',
    },
    confirmar: {
        backgroundColor: '#2E872E',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
        borderRadius: 60,
    },
    textConfirmar: {
        color: '#FFF',
        fontSize: 30,
    },
    botaoContainer: {
        alignItems: 'center',
        marginTop: '17%',
    },
})