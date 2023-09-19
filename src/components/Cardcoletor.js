import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Cardcoletor = ({ perfilImageUrl, nome, endereco }) => {
  return (
    <View style={styles.card}>
      <View style={styles.profileImageWrapper}>
        <Image
          source={{ uri: perfilImageUrl }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nomeText}>{nome}</Text>
        <Text style={styles.enderecoText}>{endereco}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 50,
    backgroundColor: '#0FA958',
    width: 350,
    height: 109,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  profileImageWrapper: {
    width: 109,
    height: 109,
    borderRadius: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nomeText: {
    fontSize: 16,
    fontWeight: '600', // Peso da fonte definido como 600
    color: '#000000', // Cor preta
  },
  enderecoText: {
    fontSize: 14,
    color: 'white',
  },
});

export default Cardcoletor;
