import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import ReturnButton from '../../components/ReturnButton';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

const ProfileScreenDoadorEdit = ({onCancelEdit, navigation}) => {
  // const user = {
  //   nome: 'Mário da Silva Jesus',
  //   local: 'Itapevi - SP',
  //   doacoes: '15',
  //   rg: '31.440.XXX-X',
  //   telefone: '(11) 92776-0676',
  //   endereco: 'Av. Brasil, 180, Jardim São Luis, Santana de Parnaíba - SP',
  //   email: 'mariobaigon@gmail.com',
  //   senha: '********',
  // };

  const [nome, setNome] = useState("Mário da Silva Jesus");
  const [rg, setRg] = useState("31.440.XXX-X");
  const [telefone, setTelefone] = useState("(11) 92776-0676");
  const [endereco, setEndereco] = useState("Av. Brasil, 180, Jardim São Luis, Santana de Parnaíba - SP");

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
      <Card containerStyle={[styles.cardContainerAvatar, {width: '50%'}]}>
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
          style={[styles.textInfo, {borderBottomWidth: 1, borderColor: 'gray'}]}
          placeholderText={nome}
          valorInput={nome}
          textChange={(text) => setNome(text)}
          />

        <Text style={styles.textType}>Registro Geral:</Text>
        <CustomTextInput 
          style={[styles.textInfo, {borderBottomWidth: 1, borderColor: 'gray'}]}
          placeholderText={rg}
          valorInput={rg}
          textChange={(text) => setRg(text)}
          />

        <Text style={styles.textType}>Telefone</Text>
        <CustomTextInput 
          style={[styles.textInfo, {borderBottomWidth: 1, borderColor: 'gray'}]}
          placeholderText={telefone}
          valorInput={telefone}
          textChange={(text) => setTelefone(text)}
          />

        <Text style={styles.textType}>Endereço</Text>
        <CustomTextInput 
          style={styles.textInfo}
          placeholderText={endereco}
          valorInput={endereco}
          textChange={(text) => setEndereco(text)}
          />
      
      </Card>
      <View style={styles.buttonView}>
        <CustomButton
          title={"Confirmar"}
          onPress={""}
          />
      </View>
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
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
    elevation: 0,
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
    height: '50%',
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
  },
  buttonView: {
    marginTop: 20,
  },
});
export default ProfileScreenDoadorEdit;