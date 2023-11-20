// CardComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const CARD_WIDTH = 300; 
const CARD_HEIGHT = 85;

const styles = StyleSheet.create({
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 25,
    backgroundColor: '#B2AFAF',
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
    fontSize: 14,
    fontWeight: 'bold',
    color:"#544747"
  },
  estrela: {
    fontSize: 35,
    bottom: 5
  },
  divider: {
    left:20,
    width: 1,
    height: '100%',
    backgroundColor: '#828181',
    marginHorizontal: 8,
  },
  coletas:{
    fontSize:14,
    color:'#008100',
    textDecorationLine:"underline",
  },
  avaliacao:{
    color:'#544747',
    fontSize:15
  }
});

export default ColetorInfo;
