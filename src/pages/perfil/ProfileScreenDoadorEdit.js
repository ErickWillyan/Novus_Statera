import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import ReturnButton from '../../components/ReturnButton';
import CustomTextInput from '../../components/CustomTextInput';

const ProfileScreenDoadorEdit = ({onCancelEdit, navigation}) => {
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

  const handleReturnPress = () => {
    // Chame a função onCancelEdit para cancelar a edição
    onCancelEdit();
    // Navegue de volta para a tela ProfileScreenDoador
    navigation.navigate('ProfileScreenDoador');
  };

  return (
    <View style={styles.container}>
    <View style={styles.returnView}>
      <ReturnButton style={styles.returnButton} onPress={handleReturnPress}/>
    </View>
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
      </Card>
      <View style={styles.viewText}>
      <Card containerStyle={styles.cardContainerEdit}>
      <Text style={styles.textEdit}>Clique em um campo para editar</Text>
      </Card>
      </View>
      <Card containerStyle={styles.cardContainerInfos}>

        <Text style={styles.textType}>Nome de usuário:</Text>
        <CustomTextInput 
          style={[styles.textInfo, 
                  {borderBottomWidth: 1, borderColor: 'gray'}]}
          placeholderText={user.nome}></CustomTextInput>

        <Text style={styles.textType}>Registro Geral:</Text>
        <Text style={[styles.textInfo, {borderBottomWidth: 1, borderColor: 'gray'}]}>{user.rg}</Text>

        <Text style={styles.textType}>Telefone</Text>
        <Text style={[styles.textInfo, {borderBottomWidth: 1, borderColor: 'gray'}]}>{user.telefone}</Text>
        
        <Text style={styles.textType}>Endereço</Text>
        <Text style={styles.textInfo}>{user.endereco}</Text>
      
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
    marginBottom: -140,
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
    marginTop: -17 ,
    width: '92%',
    height: '520px',
    overflowY: 'scroll',
    borderRadius: 40,
  },
  cardWrapper: {
    borderWidth: 0,
  },
  returnView: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  textInfo: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center',
    color: '#6E6E6F',
    paddingBottom: 25,
  },
  textType: {
    fontSize: 28,
    color: 'gray',
    marginTop: 15,
    textAlign: 'center',
    marginTop: 15,
  },
  viewText: {
    marginBottom: 60,
  },
  textEdit: {
    fontSize: 22,
  },
  cardConainerEdit: {
    borderRadius: 20,
  }
});
export default ProfileScreenDoadorEdit;