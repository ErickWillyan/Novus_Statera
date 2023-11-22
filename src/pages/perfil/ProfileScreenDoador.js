import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreenDoador = () => {
  const user = {
    nome: 'Mário da Silva Jesus',
    local: 'Itapevi - SP',
    doacoes: '15',
    rg: '31.440.XXX-X',
    telefone: '(11) 92776-0676',
    endereco: 'Av. Brasil, 180, Jardim São Luis, Santana de Parnaíba - SP',
    email: 'mariobaigon@gmail.com',
    senha: '********',
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainerAvatar}>
        <View style={styles.avatarContainer}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: '../../assets/img/Erickbeminclusivo.jpg',
          }}
        />
        </View>
        <Text style={styles.userNome}>{user.nome}</Text>
        <Text style={styles.userLocal}>{user.local}</Text>
      </Card>
      <Card containerStyle={styles.cardContainerDonations}>
        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Já realizou: </Text>
        <Text style={{fontSize: 32, color: '#058300', textAlign: 'center'}}>{user.doacoes} doações</Text>
      </Card>
      <Card containerStyle={styles.cardContainerInfos}>

        <Text style={styles.textType}>Nome de usuário:</Text>
        <Text style={[styles.textInfo, {borderBottomWidth: 1, borderColor: 'gray'}]}>{user.nome}</Text>

        <Text style={styles.textType}>Registro Geral:</Text>
        <Text style={[styles.textInfo, {borderBottomWidth: 1, borderColor: 'gray'}]}>{user.rg}</Text>

        <Text style={styles.textType}>Telefone</Text>
        <Text style={[styles.textInfo, {borderBottomWidth: 1, borderColor: 'gray'}]}>{user.telefone}</Text>
        
        <Text style={styles.textType}>Endereço</Text>
        <Text style={styles.textInfo}>{user.endereco}</Text>
      
      </Card>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          // Adicione a lógica que deseja executar ao pressionar o botão
          console.log('Botão pressionado!');
        }}
      >
        <Icon name="edit" size={30} color="#39906b" />
      </TouchableOpacity>
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
    marginTop: -10,
  },
  userNome: {
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
  cardContainerAvatar: {
    backgroundColor: 'transparent', // Cor de fundo desejada
    borderColor: 'transparent', // Cor da borda
    borderWidth: 0, // Largura da borda
    borderRadius: 0, // Raio da borda
    elevation: 0, // Sombra no Android
    shadowColor: 'transparent',
    width: '80%', 
    height: '40%',
  },
  cardContainerDonations: {
    marginTop: -60,
    borderRadius: 40,
    width: '85%',
    height: '13.5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8108',
    borderBottomWidth: 12,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#9D4F05',
  },
  cardContainerInfos: {
    marginTop: 35 ,
    width: '92%',
    height: '410px',
    overflowY: 'scroll',
    borderRadius: 40,
  },
  cardWrapper: {
    borderWidth: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  textInfo: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#6E6E6F',
    paddingBottom: 20,
  },
  textType: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
    textAlign: 'center',
    marginTop: 5,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent', // ou a cor desejada
    borderRadius: 50,
    padding: 10,
  },
});
export default ProfileScreenDoador;
