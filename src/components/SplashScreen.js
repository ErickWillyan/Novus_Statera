import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = () => {
    return (
        <ImageBackground
          source={require('../assets/img/Splash.png')} // Substitua pelo caminho da sua imagem
          style={styles.backgroundImage}
        >
        </ImageBackground>
      );
    };

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default SplashScreen; 