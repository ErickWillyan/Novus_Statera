import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Card } from 'react-native-elements';

const ProfileScreenDoador = () => {
  const user = {
    name: 'Mário da Silva Jesus',
    local: 'Itapevi - SP',
    // Adicione mais informações do usuário, se necessário
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.avatarContainer}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: 'URL_DA_IMAGEM_DO_USUARIO',
          }}
        />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userLocal}>{user.local}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  userLocal: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: 'transparent', // Cor de fundo desejada
    borderColor: 'transparent', // Cor da borda
    borderWidth: 0, // Largura da borda
    borderRadius: 0, // Raio da borda
    elevation: 0, // Sombra no Android
    shadowColor: 'transparent',
    width: '80%', 
    height: '40%',
  },
  cardWrapper: {
    borderWidth: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
export default ProfileScreenDoador;
