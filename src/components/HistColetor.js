import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone de estrela do react-native-vector-icons

const HistColetor = ({
  imageSource,
  personName,
  city,
  state,
  date,
  rating,
}) => {
  const location = `${city}-${state}`;

  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <View style={styles.profileIcon} />
        <Text style={styles.personName}>{personName}</Text>
      </View>
      <View style={[styles.horizontalLine, { backgroundColor: '#0d934d' }]} />
      <View style={styles.details}>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.starAndRating}>
        <Icon name="star" size={24} color="yellow" /> {/* Ícone de estrela do react-native-vector-icons */}
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 9,
    backgroundColor: '#0FA958',
    borderRadius: 25,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#555',
    marginRight: 10,
  },
  personName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalLine: {
    height: 2,
    backgroundColor: '#0d934d',
    marginVertical: 10,
  },
  details: {},
  location: {
    fontSize: 16,
  },
  starAndRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza horizontalmente
    marginTop: 10, // Espaçamento entre a estrela e a avaliação
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5, // Espaçamento entre a estrela e o texto da avaliação
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});

export default HistColetor;