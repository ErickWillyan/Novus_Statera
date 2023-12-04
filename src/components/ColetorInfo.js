// CardComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';

const ColetorInfo = ({coletas, avaliacao}) => {
  const star = '⭐';

  return (

    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Text style={styles.title}>Já realizou:</Text>
          <Text style={styles.coletas}>{coletas} coletas</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.rightContent}>
          <Text style={styles.estrela}>{star}
          </Text>
          <Text style={styles.avaliacao}>{avaliacao}</Text>
        </View>
      </View>
    </View>

  );
};

const CARD_WIDTH = 350; 
const CARD_HEIGHT = 110;

const styles = StyleSheet.create({
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderWidth: 2,
    borderColor: "#008100",
    borderRadius: 25,
    padding: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom:8,
  },
  leftContent: {
    flex: 1,
    alignItems:"center",
    left:8
  },
  rightContent: {
    flex: 2,
    alignItems:"center",
    left:12
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"#544747"
  },
  estrela: {
    fontSize: 45,
    bottom: 5
  },
  divider: {
    left:20,
    width: 2,
    height: '90%',
    backgroundColor: '#008100',
    marginHorizontal: 8,
  },
  coletas:{
    fontSize: 16,
    color:'#008100',
  },
  avaliacao:{
    color:'#008100',
    fontSize:25
  }
});

export default ColetorInfo;
