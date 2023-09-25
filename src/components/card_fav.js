import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card_fav = () => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    // Aqui você pode fazer uma solicitação para o banco de dados para obter a URL da imagem da pessoa
    // Substitua a lógica abaixo com sua implementação real de busca de imagem no banco de dados
    const fetchImageFromDatabase = async () => {
      // Simulação de busca da URL da imagem (substitua isso com sua lógica real)
      const response = await fetch('URL_DO_BANCO_DE_DADOS');
      const data = await response.json();
      const imageUrlFromDatabase = data.imageUrl;

      setImageURL(imageUrlFromDatabase);
    };

    fetchImageFromDatabase();
  }, []);

  // Simulação de informações da pessoa (substitua com seus próprios dados)
  const fullName = 'Nome Completo da Pessoa';
  const city = 'Cidade';
  const state = 'Estado';

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.location}>{`${city}, ${state}`}</Text>
      </View>
       <View style={styles.imageContainer}>
        <View
          style={{
            width: 91,
            height: 88,
            flexShrink: 0,
            borderRadius: 25,
            backgroundImage: `url(${imageURL}), lightgray`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: 376,
    height: 109,
    borderRadius: 25,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '40%',
    borderRadius: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#0FA958',
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
  },
});

export default Card_fav;
