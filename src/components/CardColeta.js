import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando o ícone

const CardColeta = ({data }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Nome e circunferência acima da linha cinza */}
      <View style={styles.headerContainer}>
        <View style={styles.fotoPerfil}></View>
        <Text style={styles.nomeText}>{data.doador.name}</Text>
      </View>

      {/* Linha cinza claro no meio do card */}
      <View style={styles.divider} />

      {/* Endereço abaixo da linha cinza */}
      <Text style={styles.enderecoText}>{data.Local.rua}</Text>

      {/* Layout para a circunferência e a data */}
      <View style={styles.dataContainer}>
        {/* Circunferência à esquerda da data */}
        <View style={styles.circunferencia}></View>
        
        {/* Data abaixo da circunferência */}
        <Text style={styles.dataText}>{data.dataRealizacao}</Text>
      </View>

      {/* Símbolo de gota à esquerda da quantidade de óleo */}
      <View style={styles.gotaContainer}>
        <Icon name="tint" size={20} color="#FF8108" />
        <Text style={styles.qntOleoText}>{data.qnt_oleo} Litros de óleo coletado</Text>
      </View>

      {/* Outros componentes ou conteúdo aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#0FA958',
    padding: 16,
    borderRadius: 8,
    margin: 15,
    width: "80%",
    minWidth: 350,
  
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nomeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  fotoPerfil: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#CCCCCC',
  },
  divider: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 8,
  },
  enderecoText: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  circunferencia: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#32CD32', // Cor da circunferência
    marginRight: 8,
  },
  dataText: {
    color: 'white',
    fontSize: 14,
  },
  gotaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  qntOleoText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default CardColeta;
