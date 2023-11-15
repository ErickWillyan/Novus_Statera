// CardComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardComponent = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.rightContent}>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

const CARD_WIDTH = 300; // Largura definida para o card

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderRadius: 25,
    backgroundColor: '#B2AFAF',
    padding: 16,
    margin: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#555',
    marginHorizontal: 8,
  },
});

export default CardComponent;
