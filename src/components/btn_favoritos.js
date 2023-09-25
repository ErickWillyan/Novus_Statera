import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone de coração

const btn_fav = () => {
  const [heartColor, setHeartColor] = useState('red'); // Estado para controlar a cor do ícone

  // Função para lidar com o clique no botão de coração
  const handleHeartClick = () => {
    if (heartColor === 'red') {
      setHeartColor('gray');
    } else {
      setHeartColor('red');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <TouchableOpacity style={styles.button} onPress={handleHeartClick}>
          <Icon name="heart" size={65} color={heartColor} style={styles.heartIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#008100', // Cor de fundo do círculo
    width: 120, // Largura do círculo
    height: 120, // Altura do círculo
    borderRadius: 60, // Borda arredondada para criar um círculo
    justifyContent: 'center', // Centralizar conteúdo verticalmente
    alignItems: 'center', // Centralizar conteúdo horizontalmente

  },
  button: {
    backgroundColor: 'transparent', // Cor de fundo transparente para o botão de coração
  },
  heartIcon: {
    width: 64, // Largura do ícone de coração
  },
  buttonText: {
    marginTop: 10, // Espaçamento superior para o texto
    fontSize: 16, // Tamanho da fonte do texto
  },
});

export default btn_fav;
